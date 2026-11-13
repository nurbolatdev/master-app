package kz.masterapp.api.catalog;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;

/** A kind of service, e.g. pre-purchase inspection. */
@Entity
@Table(name = "category")
public class Category {

    @Id
    private UUID id;

    private String slug;

    @Column(name = "name_ru")
    private String nameRu;

    @Column(name = "name_kk")
    private String nameKk;

    /** Orders of this category complete only after an inspection report is published. */
    @Column(name = "requires_report")
    private boolean requiresReport;

    @Column(name = "sort_order")
    private int sortOrder;

    protected Category() {
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

    public boolean isRequiresReport() {
        return requiresReport;
    }

    public int getSortOrder() {
        return sortOrder;
    }
}
