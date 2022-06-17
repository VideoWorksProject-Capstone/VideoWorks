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

