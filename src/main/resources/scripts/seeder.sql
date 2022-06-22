INSERT INTO roles (id, name)
VALUES (1, 'User'),
       (2, 'Seller');

INSERT INTO user_roles (user_id, role_id)
VALUES (1, 1),
       (1, 2),
       (2, 1),
       (3, 1),
       (3, 2),
       (4, 1);

INSERT INTO categories (name, photo)
VALUES ('Music', '../static/img/music.png'),
       ('Tutoring', '../static/img/tutoring.png'),
       ('Reading', '../static/img/reading.png'),
       ('DJ', '../static/img/dj.png'),
       ('Cooking', '../static/img/cooking.png'),
       ('Speaking', '../static/img/speaking.png');