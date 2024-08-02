package today.wtfood.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import today.wtfood.server.entity.Inquiry;

public interface InquiryRepository extends JpaRepository<Inquiry, Integer> {

}
