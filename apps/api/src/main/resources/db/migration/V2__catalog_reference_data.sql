-- Reference data needed in every environment. MVP: Almaty, two categories.
insert into city (slug, name_ru, name_kk, center, sort_order) values
    ('almaty', 'Алматы', 'Алматы', st_geogfromtext('SRID=4326;POINT(76.9286 43.2567)'), 10);

insert into category (slug, name_ru, name_kk, requires_report, sort_order) values
    ('pre-purchase-inspection', 'Проверка авто перед покупкой', 'Сатып алу алдында көлікті тексеру', true, 10),
    ('auto-electrician', 'Автоэлектрик и диагностика на выезд', 'Автоэлектрик және шығып диагностика', false, 20);
