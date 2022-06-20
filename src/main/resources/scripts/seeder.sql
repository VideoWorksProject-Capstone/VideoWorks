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

INSERT INTO services (id, title, description , price, photo, user_id)
VALUES (1, 'DJ Services', 'Anytime, Anywhere! Schedule now for your next party or event. Whatever style you need, I can do.', 20.00, 'insert image here', 1);