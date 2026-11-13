package kz.masterapp.api.catalog;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

interface CityRepository extends JpaRepository<City, UUID> {

    List<City> findAllByOrderBySortOrderAsc();
}
