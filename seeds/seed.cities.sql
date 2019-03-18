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
    (8, 'Denver'),
    (9, '')


INSERT INTO notes
    ( id, title, modified, folderId, content )
VALUES
    (5, 'Dogs', '2019-01-03T00:00:00.000Z', 1, 'Corporis accusamus placeat quas non voluptas.'),
    (6, 'Cats', '2018-08-15T23:00:00.000Z', 2, 'Eos laudantium quia ab blanditiis temporibus necessitatibus.'),
    (7, 'Pigs', '2018-03-01T00:00:00.000Z', 2, 'Occaecati dignissimos quam qui facere deserunt quia.'),
    (8, 'Birds', '2019-01-04T00:00:00.000Z', 1, 'Eum culpa odit. Veniam porro molestiae dolores sunt reiciendim ex maiores.'),
    (9, 'Bears', '2018-07-12T23:00:00.000Z', 1, 'Distinctio dolor nihil ad iure quo tempore id ipsum.');
