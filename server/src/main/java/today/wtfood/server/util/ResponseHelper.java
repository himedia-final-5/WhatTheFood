package today.wtfood.server.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.experimental.UtilityClass;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

@UtilityClass
public class ResponseHelper {

    public void write(HttpServletResponse response, ResponseEntity<?> responseEntity) throws IOException {
        write(response, responseEntity.getStatusCode(), responseEntity.getBody());
    }

    public void write(HttpServletResponse response, HttpStatusCode status, Object jsonObject) throws IOException {
        response.setStatus(status.value());
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.getWriter().write(objectToJson(jsonObject));
    }

    private String objectToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }

}
