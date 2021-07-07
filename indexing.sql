\c review_db;

create index reviews_listings_one on reviews(listing_id) where listing_id > 0 and listing_id < 1000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 1000000 and listing_id < 2000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 2000000 and listing_id < 3000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 3000000 and listing_id < 4000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 4000000 and listing_id < 5000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 5000000 and listing_id < 6000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 6000000 and listing_id < 7000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 7000000 and listing_id < 8000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 8000000 and listing_id < 9000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 9000000 and listing_id < 10000001;
create index reviews_listings_one on reviews(listing_id) where listing_id > 10000000;