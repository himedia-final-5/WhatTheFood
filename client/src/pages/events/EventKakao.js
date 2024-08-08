import { useEffect } from "react";

//kakao 기능 동작을 위해 넣어줍니다.
const { Kakao } = window;

export default () => {
  //배포한 자신의 사이트
  const realUrl = "http://localhost:3000/";
  //로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  //재랜더링시에 실행되게 해준다
  useEffect(() => {
    //init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    //자산의 js 앱키를 넣어줍니다.
    Kakao.init("1cd0714fe86698514fb7dcd40504e5bf");
    //잘 적용되면 true 를 나오게!!
    console.log(Kakao.isInitialized());
  }, []);

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "오늘의 디저트",
      description: "아메리카노, 빵, 케익",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    itemContent: {
      profileText: "Kakao",
      profileImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageText: "Cheese cake",
      titleImageCategory: "Cake",
      items: [
        {
          item: "Cake1",
          itemOp: "1000원",
        },
        {
          item: "Cake2",
          itemOp: "2000원",
        },
        {
          item: "Cake3",
          itemOp: "3000원",
        },
        {
          item: "Cake4",
          itemOp: "4000원",
        },
        {
          item: "Cake5",
          itemOp: "5000원",
        },
      ],
      sum: "총 결제금액",
      sumOp: "15000원",
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 이동",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};
return (
  <>
    <button
      className="grey-btn"
      onClick={() => {
        shareKakao();
      }}
    >
      카카오톡 공유하기
    </button>
  </>
);
