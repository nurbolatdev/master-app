-- Stage 0: PostGIS and the catalog reference tables.
-- Other tables arrive with their features (vertical slices, ADR-014).
create extension if not exists postgis;

create table city (
    id         uuid primary key default gen_random_uuid(),
    slug       varchar(64)  not null unique,
    name_ru    varchar(128) not null,
    name_kk    varchar(128) not null,
    center     geography(Point, 4326) not null,
    sort_order integer      not null default 0
);

create table category (
    id              uuid primary key default gen_random_uuid(),
    slug            varchar(64)  not null unique,
    name_ru         varchar(128) not null,
    name_kk         varchar(128) not null,
    -- the order can be completed only after an inspection report is published
    requires_report boolean      not null default false,
    sort_order      integer      not null default 0
);
