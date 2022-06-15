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

INSERT INTO profiles (id, rating, bio, name, user_id)
VALUES (1, 4.3, 'Insert bio here', 'Bobby John', 1),
       (2, 3.5, 'Insert bio here', 'Sally Joe Hopkins', 2),
       (3, 4.8, 'Insert bio here', 'Thomas Cruise', 3),
       (4, 2.7, 'Insert bio here', 'Ricky Bobby', 4);
