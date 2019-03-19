CREATE TABLE cities_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  favorite_city TEXT NOT NULL REFERENCES cities(city) ON DELETE CASCADE NOT NULL,
  favorite_baseball TEXT REFERENCES baseball_teams(team) ON DELETE CASCADE SET NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);

ALTER TABLE thingful_things
  ADD COLUMN
    user_id INTEGER REFERENCES cities_users(id)
    ON DELETE SET NULL;