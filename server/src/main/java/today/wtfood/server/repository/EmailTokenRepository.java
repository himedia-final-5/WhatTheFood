package today.wtfood.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.entity.member.EmailToken;

import java.sql.Timestamp;
import java.util.Optional;

@Repository
public interface EmailTokenRepository extends JpaRepository<EmailToken, String> {

    Optional<EmailToken> findByTokenAndExpiryDateIsAfter(String token, Timestamp date);

    default Optional<EmailToken> findByToken(String token) {
        return findByTokenAndExpiryDateIsAfter(token, new Timestamp(System.currentTimeMillis()));
    }

    /**
     * TODO: 이메일 토큰 만료일이 현재 시간 이전인 모든 토큰 삭제
     */
    void deleteAllByExpiryDateIsBefore(Timestamp date);

}
