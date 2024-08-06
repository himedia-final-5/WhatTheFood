package today.wtfood.server.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;

/**
 * {@link Pageable} 요청 시 필요한 정보 DTO
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public final class PageableRequest implements Pageable {
    @Min(0)
    private int pageNumber = 0;

    @Min(0)
    @Max(100)
    private int pageSize = 10;

    private String sortBy;

    private boolean sortAsc = true;

    @Override
    public @NonNull Sort getSort() {
        Sort.Direction direction = sortAsc ? Sort.Direction.ASC : Sort.Direction.DESC;
        return sortBy == null ? Sort.unsorted() : Sort.by(direction, sortBy);
    }

    @Override
    public long getOffset() {
        return (long) pageNumber * pageSize;
    }

    @Override
    public @NonNull Pageable previousOrFirst() {
        if (this.getPageNumber() == 0) {
            return this;
        }
        return new PageableRequest(this.pageNumber - 1, pageSize, sortBy, sortAsc);
    }

    @Override
    public boolean hasPrevious() {
        return pageNumber > 0;
    }

    @Override
    public @NonNull Pageable first() {
        if (this.getPageNumber() == 0) {
            return this;
        }
        return new PageableRequest(0, pageSize, sortBy, sortAsc);
    }

    @Override
    public @NonNull Pageable next() {
        return new PageableRequest(pageNumber + 1, pageSize, sortBy, sortAsc);
    }

    @Override
    public @NonNull Pageable withPage(int pageNumber) {
        return new PageableRequest(pageNumber, pageSize, sortBy, sortAsc);
    }

}
