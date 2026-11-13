package kz.masterapp.api.catalog;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;

/** A city where the platform works. The {@code center} point stays in SQL for now. */
@Entity
@Table(name = "city")
public class City {

    @Id
    private UUID id;

    private String slug;

    @Column(name = "name_ru")
    private String nameRu;

    @Column(name = "name_kk")
    private String nameKk;

    @Column(name = "sort_order")
    private int sortOrder;

    protected City() {
    }

    public UUID getId() {
        return id;
    }

    public String getSlug() {
        return slug;
    }

    public String getNameRu() {
        return nameRu;
    }

    public String getNameKk() {
        return nameKk;
    }

    public int getSortOrder() {
        return sortOrder;
    }
}
