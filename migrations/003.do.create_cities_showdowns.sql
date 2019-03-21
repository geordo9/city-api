CREATE TABLE showdowns (
  id SERIAL PRIMARY KEY,
  user_pin INTEGER NOT NULL REFERENCES cities_users(id),
  user_total_wins INTEGER NOT NULL,
  user_total_loses INTEGER NOT NULL,
  user_baseball INTEGER,
  opp_baseball INTEGER,
  wins_baseball INTEGER,
  losses_baseball INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT now()
);