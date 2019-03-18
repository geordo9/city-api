-- psql -U postgres -d cities -f seeds/seed.cities.sql

TRUNCATE cities, baseball_teams, baseball_playoffs;

INSERT INTO cities
    ( id, city )
VALUES
    (1, 'Atlanta'),
    (2, 'Baltimore'),
    (3, 'Boston'),
    (4, 'Chicago'),
    (5, 'Cincinnati'),
    (6, 'Cleveland'),
    (7, 'Detroit'),
    (8, 'Dallas'),
    (9, 'Denver'),
    (10, 'Houston'),
    (11, 'Kansas City'),
    (12, 'Los Angeles'),
    (13, 'Miami'),
    (14, 'Milwaukee'),
    (15, 'Minnesota'),
    (16, 'New York'),
    (17, 'Oakland'),
    (18, 'Philadelphia'),
    (19, 'Phoneix'),
    (20, 'Pittsburgh'),
    (21, 'Saint Louis'),
    (21, 'San Diego'),
    (22, 'San Francisco'),
    (24, 'Seattle'),
    (25, 'Tampa Bay'),
    (26, 'Toronto'),
    (27, 'Washington');

INSERT INTO baseball_teams
    ( id, team, cityId )
VALUES
    (1, 'Braves', 1),
    (2, 'Marlins', 13),
    (3, 'Mets', 16),
    (4, 'Nationals', 27),
    (5, 'Phillies', 18),
    (6, 'Cubs', 4),
    (7, 'Reds', 5),
    (8, 'Pirates', 20),
    (9, 'Cardinals', 21),
    (10, 'Brewers', 14),
    (11, 'Diamondbacks', 19),
    (12, 'Dodgers', 12),
    (13, 'Rockies', 9),
    (14, 'Giants', 22),
    (15, 'Padres', 21),
    (16, 'Red Sox', 3),
    (17, 'Orioles', 2),
    (18, 'Yankees', 16),
    (19, 'Rays', 25),
    (20, 'Blue Jays', 26),
    (21, 'White Sox', 4),
    (22, 'Royals', 11),
    (23, 'Tigers', 7),
    (24, 'Twins', 15),
    (25, 'Indians', 6),
    (26, 'Angels', 12),
    (27, 'Astros', 10),
    (28, 'Athletics', 17),
    (29, 'Mariners', 24),
    (30, 'Rangers', 8);

INSERT INTO baseball_playoffs
    ( id, 
    wins_alt, losses_alt, wins_mia, losses_mia, wins_nym, losses_nym, wins_phi, losses_phi, wins_wsh, losses_wsh, 
    wins_chc, losses_chc, wins_cin, losses_cin, wins_mil, losses_mil, wins_pit, losses_pit, wins_stl, losses_stl,
    wins_ari, losses_ari, wins_col, losses_col, wins_lad, losses_lad, wins_sd, losses_sd, wins_sf, losses_sf,
    wins_bal, losses_bal, wins_bos, losses_bos, wins_nyy, losses_nyy, wins_tb, losses_tb, wins_tor, losses_tor,
    wins_cle, losses_cle, wins_cws, losses_cws, wins_det, losses_det, wins_min, losses_min, wins_kc, losses_kc,
    wins_hou, losses_hou, wins_laa, losses_laa, wins_oak, losses_oak, wins_sea, losses_sea, wins_tex, losses_tex)
VALUES
    ();