package today.wtfood.server.service;

import jakarta.servlet.ServletContext;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import today.wtfood.server.dto.file.FileResponse;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.InternalServerErrorException;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.UUID;

/**
 * 정적 파일을 처리하는 서비스
 * <p>
 * 정적 파일은 톰캣 컨텍스트의 {@code /static/} 디렉토리에 저장된다.
 * <p>
 * 접근할 땐 {@code /static/} 디렉토리를 기준으로 상대 경로로 접근한다.
 * 예를 들어 리액트 프론트엔드에서 이미지 파일을 불러오려면 {@code /api/static/} 디렉토리를 기준으로 상대 경로를 사용해야 한다.
 */
@Service
public class StaticFileService {

    /**
     * MIME 타입에 따른 파일 확장자 매핑
     * <p>
     * 매핑 되지 않은 MIME 타입은 업로드를 거부한다.
     */
    private static final Map<String, String> mimeTypeToExtensionMap = Map.of(
            "image/jpeg", "jpg",
            "image/png", "png",
            "image/svg+xml", "svg"
            // "image/gif", "gif",
    );

    private final ServletContext servletContext;

    public StaticFileService(ServletContext servletContext) {
        this.servletContext = servletContext;
    }

    /**
     * 정적 디렉토리 경로를 반환한다.
     */
    public File getStaticDirectory() {
        return new File(servletContext.getRealPath("/static/"));
    }

    /**
     * 정적 디렉토리에 저장할 파일 객체를 생성한다.
     * 파일 이름은 랜덤으로 생성되며, 확장자는 인자로 받은 확장자로 설정된다.
     *
     * @param extension 파일 확장자
     * @return 생성된 파일 객체
     * @throws IOException 정적 디렉토리 생성에 실패한 경우
     */
    public File getStaticFile(String extension) throws IOException {
        File staticDirectory = getStaticDirectory();
        if (!staticDirectory.exists() && !staticDirectory.mkdirs()) {
            throw new IOException("Failed to create static directory");
        }

        String generatedFileName = UUID.randomUUID() + "." + extension;
        return staticDirectory.toPath().resolve(generatedFileName).toFile();
    }

    /**
     * 파일 객체를 받아 서블릿 컨텍스트의 정적 디렉토리에 파일을 업로드한다.
     * 파일 이름은 랜덤으로 생성되며, 파일의 MIME 타입에 따라 확장자가 결정된다.
     * <p>
     *
     * @param file 업로드할 파일
     * @return 업로드된 파일의 정보
     * @throws BadRequestException 파일 이름, 타입, 크기가 유효하지 않은 경우
     * @implNote TODO: 파일 포맷 필터 기능 추가
     */
    public FileResponse uploadFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        if (fileName == null) {
            throw new BadRequestException("잘못된 파일 이름입니다", "file");
        }

        long fileSize = file.getSize();
        if (fileSize <= 0) {
            throw new BadRequestException("잘못된 파일 크기입니다", "file");
        }

        String fileType = file.getContentType();
        if (fileType == null) {
            throw new BadRequestException("잘못된 파일 타입입니다", "file");
        }

        String fileExtension = mimeTypeToExtensionMap.get(fileType);
        if (fileExtension == null) {
            throw new BadRequestException("지원하지 않는 파일 형식입니다", "file");
        }

        try {
            File staticFile = getStaticFile(fileExtension);
            file.transferTo(staticFile);
            return new FileResponse(staticFile.getName(), fileType, fileSize);
        } catch (IOException e) {
            throw new InternalServerErrorException("파일 저장에 실패했습니다", "file");
        }
    }

}
