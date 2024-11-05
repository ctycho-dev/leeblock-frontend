CREATE TABLE IF NOT EXISTS supplies (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products (id) ON DELETE CASCADE,
)

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    product_type VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    supply_id INTEGER NOT NULL REFERENCES supplies (id),
    color VARCHAR(100),
    image VARCHAR(1000)
)

CREATE TABLE IF NOT EXISTS payment_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL
)

CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    total INTEGER,
    product_id INTEGER NOT NULL REFERENCES products (id),
    payment_type INTEGER NOT NULL REFERENCES payment_types (id),
    deliveryTo VARCHAR(1000),
    created_at TIMESTAMP DEFAULT NOW (),
)

-- "id": "onekey-pro-black",
-- "shopifyGid": "gid://shopify/ProductVariant/44179880804514",
-- "productId": "pro",
-- "name": "Onekey Pro",
-- "color": "black",
-- "image": "proBlack"