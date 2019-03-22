CREATE TABLE showdowns (
  id SERIAL PRIMARY KEY,
  user_pin INTEGER,
  user_total_wins INTEGER NOT NULL,
  user_total_loses INTEGER NOT NULL,
  user_baseball_team INTEGER REFERENCES baseball_teams(id) ON DELETE CASCADE NOT NULL,
  opp_baseball_team INTEGER REFERENCES baseball_teams(id) ON DELETE CASCADE NOT NULL,
  wins_baseball INTEGER,
  losses_baseball INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT now()
);