ALTER TABLE cities_things
  DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS cities_users;