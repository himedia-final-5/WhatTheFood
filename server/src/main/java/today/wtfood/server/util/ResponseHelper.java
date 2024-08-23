package today.wtfood.server.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.experimental.UtilityClass;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

@UtilityClass
public class ResponseHelper {

    public void write(HttpServletResponse response, ResponseEntity<?> responseEntity) throws IOException {
        response.setStatus(responseEntity.getStatusCode().value());
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.getWriter().write(objectToJson(responseEntity.getBody()));
    }

    private String objectToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }

}
