package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    @ElementCollection
    @CollectionTable(name = "event_content", joinColumns = @JoinColumn(name = "id"))
    private List<String> contentImages;

    @CreationTimestamp
    private Timestamp startDate;

    private Timestamp endDate;

    private String bannerImage;
}
