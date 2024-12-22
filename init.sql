CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    product_id VARCHAR(100) NOT NULL UNIQUE,
    product_type VARCHAR(100),
    description VARCHAR(500) NOT NULL,
    image VARCHAR(500),
    catalog_img VARCHAR(500),
    catalog_hover_img VARCHAR(500),
    price INTEGER NOT NULL,
    supply INTEGER NOT NULL DEFAULT 0,
    waiting INTEGER NOT NULL DEFAULT 0,
    sequence INTEGER NOT NULL DEFAULT 100,
    published INTEGER NOT NULL DEFAULT 0,
    display_on_main NOT NULL DEFAULT 0,
    images TEXT,
    color VARCHAR(100)
);

-- CREATE TABLE IF NOT EXISTS supplies (
--     id SERIAL PRIMARY KEY,
--     product_id INTEGER NOT NULL REFERENCES products (id) ON DELETE CASCADE,
--     amount INTEGER NOT NULL DEFAULT 0
-- );

-- ALTER TABLE products
-- ADD COLUMN supply_id INTEGER NOT NULL REFERENCES supplies (id);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('onekey-pro-black', 'Onekey Pro', '[NEW] OneKey Pro - Crypto Hardware Wallet', 'black', '/assets/products/shop-product-card-proBig-black.webp', '/assets/products/OneKeyPro_Main_Image_Black_02.png', '/assets/products/OneKeyPro_Main_Image_Black_04.png', 30000, 10, 1, 0, 1);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('onekey-pro-white', 'Onekey Pro', '[NEW] OneKey Pro - Crypto Hardware Wallet', 'white', '/assets/products/shop-product-card-proBig-white.webp', '/assets/products/OneKeyPro_Main_Image_White_01.png', '/assets/products/OneKeyPro_Main_Image_White_03.png', 29000, 10, 1, 2, 1);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('onekey-classic-1s', 'OneKey Classic 1S', '[NEW] OneKey Classic 1S - Crypto Hardware Wallet', '', '/assets/products/product-card-classic1s.webp', '/assets/products/Classic1S_Main_Image02.png', '/assets/products/Classic1S_Main_Image04.png', 9000, 15, 1, 30, 1);


INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('onekey-lite', 'Onekey Lite', 'OneKey Lite - Crypto Hardware Wallet', '', '/assets/products/product-card-touch-2.webp', '/assets/products/product-card-touch-2.webp', '/assets/products/product-card-touch-2.webp', 0, 0, 0, 4, 1);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('SY_cup', 'Camping Mug', 'OneKey Classic Bronze Stainless Steel Camping Mug', '', '/assets/products/SY_cup_01.webp', '/assets/products/SY_cup_01.webp', '/assets/products/SY_cup_02.webp', 1000, 2, 1, 5, 1);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('SY_t_shirt', 'Green T-Shirt', 'OneKey Classic Green T-Shirt', '', '/assets/products/SY_Tee_01.webp', '/assets/products/SY_Tee_01.webp', '/assets/products/SY_Tee_01.webp', 3000, 10, 1, 6, 0);

INSERT INTO products (product_id, name, description, color, image, catalog_img, catalog_hover_img, price, supply, waiting, sequence, published)
VALUES ('SY_sheet', 'Green Beach Towel', 'OneKey Classic Green Beach Towel', '', '/assets/products/SY_sheet_01.webp', '/assets/products/SY_sheet_01.webp', '/assets/products/SY_sheet_02.webp', 30000, 10, 1, 70, 0);



CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    amount INTEGER NOT NULL,
    bug TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    zip VARCHAR(20),
    address VARCHAR(1000) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'NEW',
    payment_id VARCHAR(255),
    token VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW ()
);

INSERT INTO requests (amount, bug, city, address, email)
VALUES (1, '', '', '', '');


CREATE TABLE IF NOT EXISTS payment_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL
)