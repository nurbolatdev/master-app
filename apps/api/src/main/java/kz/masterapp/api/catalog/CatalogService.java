package kz.masterapp.api.catalog;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Public API of the catalog module: reference data (cities, categories). */
@Service
@Transactional(readOnly = true)
public class CatalogService {

    private final CityRepository cities;
    private final CategoryRepository categories;

    CatalogService(CityRepository cities, CategoryRepository categories) {
        this.cities = cities;
        this.categories = categories;
    }

    public List<CityResponse> cities() {
        return cities.findAllByOrderBySortOrderAsc().stream().map(CityResponse::from).toList();
    }

    public List<CategoryResponse> categories() {
        return categories.findAllByOrderBySortOrderAsc().stream().map(CategoryResponse::from).toList();
    }
}
