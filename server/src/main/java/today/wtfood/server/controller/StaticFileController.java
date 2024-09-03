package today.wtfood.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import today.wtfood.server.dto.file.FileResponse;
import today.wtfood.server.service.StaticFileService;

@RestController
@RequestMapping("/static")
public class StaticFileController {

    private final StaticFileService staticFileService;

    public StaticFileController(StaticFileService staticFileService) {
        this.staticFileService = staticFileService;
    }

    /**
     * 파일 업로드 API
     *
     * @param file 업로드할 파일
     * @return 업로드된 파일 정보
     */
    @PostMapping("")
    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.OK)
    public FileResponse updateFile(@RequestParam("file") MultipartFile file) {
        return staticFileService.uploadFile(file);
    }

}
