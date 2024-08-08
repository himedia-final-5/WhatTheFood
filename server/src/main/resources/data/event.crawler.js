/**
 * 오늘의 식탁 사이트에서 이벤트 데이터를 크롤링하여 SQL 쿼리로 변환하는 크롤러 스크립트
 *
 * 1) 터미널에 `node src/main/resources/data/event.crawler.js` 실행 *(혹은 크롬 콘솔)*
 * 2) 출력된 쿼리를 복사하여 `event.sql` 파일에 붙여넣기
 */

(async () => {
    async function crawlEventList() {
        const response = await fetch(
            "https://wtable.net/api_v4/static_pages?page_typ=event&offset=0&limit=9999"
        );
        const json = await response.json();
        return json.data;
    }

    async function crawlEventDetail(eventId) {
        const response = await fetch(
            `https://wtable.co.kr/_next/data/8Rof5iB3RdAFFA_AFmLB-/events/${eventId}.json`
        );
        const json = await response.json();
        return json.pageProps.eventProps.data;
    }

    function value(val) {
        if (val === null || val === undefined) {
            return "NULL";
        }

        if (typeof val === "number") {
            return val;
        }

        if (typeof val === "boolean") {
            return val ? 1 : 0;
        }

        if (val instanceof Date) {
            return `'${val.toISOString().slice(0, 10)}'`;
        }

        if (Array.isArray(val)) {
            return val.map((v) => value(v)).join(", ");
        }

        // typeof value === "string"
        return `'${val}'`;
    }

    // 우리의식탁 이벤트 리스트를 가져와 파싱
    console.debug("Crawling event list...");
    let list = await crawlEventList();
    // 테스트를 위해 더 많은 데이터가 필요한 경우 아래 주석을 해제하여 목록 복제
    // list = list.concat(list).concat(list);
    console.debug(`Crawled ${list.length} events: `, list);

    // 탐색된 이벤트 목록을 순회
    const promises = [];
    for (const i in list) {
        const event = list[i];
        const eventId = Number(i) + 1;

        // 이벤트 상세 정보를 가져오는 프로미스를 목록에 추가
        // 각 요청을 병렬로 처리하기 위해 프로미스를 배열에 담은 후 Promise.all()을 사용
        // 하나하나 await 하면 순차적으로 처리되므로 시간이 오래 걸림
        promises.push(
            new Promise(async (resolve) => {
                // 이벤트 쿼리 추가
                const queries = [];
                queries.push(
                    "INSERT INTO event (id, title, start_date, end_date, banner_image) VALUES (" +
                    value([
                        eventId,
                        event.end_at && new Date(event.end_at) > new Date()
                            ? "진행중"
                            : "종료",
                        event.start_at.slice(0, 10),
                        event.end_at ? event.end_at.slice(0, 10) : null,
                        event.title_image.url,
                    ]) +
                    ");"
                );

                // 이벤트 세부 내용을 가져와 파싱
                console.debug(`Crawling event ${eventId}(${event.name})...`);
                const detail = await crawlEventDetail(event.id);
                console.debug(`Crawled event ${eventId}: `, detail);

                // 이벤트 컨텐츠 목록을 순회
                for (const content of detail.static_page_contents) {
                    // 앱링크가 달린 컨텐츠를 무시하고 싶으면 아래 주석 제거
                    if (content.app_link) {
                        //continue;
                    }

                    // 이벤트 컨텐츠 쿼리 추가
                    queries.push(
                        "INSERT INTO event_content (id, content_images) VALUES (" +
                        value([eventId, content.value]) +
                        ");"
                    );
                }

                resolve(queries.join("\n"));
                return queries;
            })
        );
    }
    const queriesList = await Promise.all(promises);
    console.log(queriesList.join("\n\n"));
})();