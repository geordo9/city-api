-- psql -U postgres -d cities -f seeds/seed.cities.sql

TRUNCATE cities, baseball_teams, baseball_playoffs, cities_users;

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
    (22, 'San Diego'),
    (23, 'San Francisco'),
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
    ( id, wins_atl, losses_atl, wins_mia, losses_mia, wins_nym, losses_nym, wins_phi, losses_phi, wins_wsh, losses_wsh, wins_chc, losses_chc, wins_cin, losses_cin, wins_mil, losses_mil, wins_pit, losses_pit, wins_stl, losses_stl, wins_ari, losses_ari, wins_col, losses_col, wins_lad, losses_lad, wins_sd, losses_sd, wins_sf, losses_sf, wins_bal, losses_bal, wins_bos, losses_bos, wins_nyy, losses_nyy, wins_tb, losses_tb, wins_tor, losses_tor, wins_cle, losses_cle, wins_cws, losses_cws, wins_det, losses_det, wins_min, losses_min, wins_kc, losses_kc, wins_hou, losses_hou, wins_laa, losses_laa, wins_oak, losses_oak, wins_sea, losses_sea, wins_tex, losses_tex)
VALUES
    (1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 2, 0, 1, 3, 0, 1, 1, 0, 1, 2, 0, 1, 0, 2, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 3, 2, 0, 0, 1, 0, 0, 0, 0, 0),
    (2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0),
    (4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 3, 2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (6, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0),
    (7, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0),
    (8, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (9, 3, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 1, 0, 0, 4, 1, 3, 0, 1, 3, 1, 0, 2, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0),
    (10, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0),
    (11, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (12, 2, 1, 0, 0, 1, 2, 2, 3, 2, 0, 2, 1, 0, 1, 1, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3, 8, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0),
    (13, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (14, 2, 0, 0, 2, 2, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 1, 0),
    (15, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (16, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 2, 2, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 0, 2, 3, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4, 1, 2, 2, 0, 0, 0, 0),
    (17, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 1, 0, 1, 2, 1, 0, 1, 0),
    (18, 3, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 2, 1, 1, 0, 1, 1, 2, 3, 0, 1, 0, 0, 8, 3, 1, 0, 5, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 3, 5, 0, 3, 1, 0, 2, 1, 2, 4, 0, 2, 1, 3, 1),
    (19, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2),
    (20, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0),
    (21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0),
    (22, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0),
    (23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 1),
    (24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0),
    (25, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 3, 2, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0),
    (26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (27, 2, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (28, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 1, 0, 0, 3, 1, 2, 1, 2, 2, 0, 4, 0, 0, 1, 1, 0, 0, 0, 0, 1, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    (30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 3, 2, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


INSERT INTO cities_users
    ( user_name, password, favorite_city, favorite_baseball )
VALUES
    ( 'geordo9', '$2a$10$Natlvnm84WWQxDRWwoZTxuftXsYsexzK5KdFs.T/2RYOMCa9Q/sF.', 'Philadelphia', 'Phillies' ),
    ( 'gergsp', '$2a$10$Natlvnm84WWQxDRWwoZTxuftXsYsexzK5KdFs.T/2RYOMCa9Q/sF.', 'Boston', 'Red Sox'),
    ( 'peted', '$2a$10$Natlvnm84WWQxDRWwoZTxuftXsYsexzK5KdFs.T/2RYOMCa9Q/sF.', 'Chicago', 'Cubs'),
    ( 'armygeorge', '$2a$10$Natlvnm84WWQxDRWwoZTxuftXsYsexzK5KdFs.T/2RYOMCa9Q/sF.', 'New York', 'Yankees'),
    ( 'kiazone', '$2a$10$Natlvnm84WWQxDRWwoZTxuftXsYsexzK5KdFs.T/2RYOMCa9Q/sF.', 'New York', 'Mets');
