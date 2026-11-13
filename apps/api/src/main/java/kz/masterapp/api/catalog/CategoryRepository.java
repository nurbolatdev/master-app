package kz.masterapp.api.catalog;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

interface CategoryRepository extends JpaRepository<Category, UUID> {

    List<Category> findAllByOrderBySortOrderAsc();
}
