package today.wtfood.server.dto.file;

/**
 * 파일 업로드 후 파일 정보 응답 시 필요한 정보 DTO
 */
public record FileResponse(
        String name,
        String type,
        long size
) {
}
