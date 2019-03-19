CREATE TABLE cities_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  favorite_city INTEGER NOT NULL REFERENCES cities(id),
  favorite_baseball INTEGER REFERENCES baseball_teams(id) ON DELETE CASCADE,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);
