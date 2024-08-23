package today.wtfood.server.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.security.entity.BlockedToken;

@Repository
public interface BlockTokenRepository extends JpaRepository<BlockedToken, String> {

}
