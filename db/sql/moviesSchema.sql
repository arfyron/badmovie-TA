-- SET UP SCHEMA HERE

USE badmovies;

CREATE TABLE IF NOT EXISTS movies (
    title VARCHAR(100),
    release_date VARCHAR(200),
    id INT(6),
    vote_average FLOAT(8),
    poster_path VARCHAR(200),
    PRIMARY KEY (id)

);

