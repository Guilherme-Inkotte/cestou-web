create database expcri;

use expcri;

CREATE TABLE Players (
    id int primary key,
    nickname varchar(255),
    image varchar(255),
    points int,
    rebounds int,
    assists int,
    steals int,
    blocks int,
    overall int
);

INSERT INTO Players VALUES (1, "The Bronze Age", "https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg", 320, 273, 199, 87, 122, 99);
INSERT INTO Players VALUES (2, "GreekFreak", "https://www.gigantes.com/wp-content/uploads/2023/01/Antetokounmpo-55.jpg", 312, 223, 119, 87, 162, 97);

SELECT * FROM Players;