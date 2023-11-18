CREATE DATABASE LitSneakerDB

CREATE TABLE Brands (
	BrandID INT IDENTITY PRIMARY KEY,
    BrandName VARCHAR(100) NOT NULL
);

INSERT INTO Brands (BrandName) 
VALUES 
('Adidas'), ('Air Jordan'), ('Balenciaga'), ('Converse'), ('Gucci'), 
('New Balance'), ('Nike'), ('Puma'), ('Reebok'), ('Vans');

CREATE TABLE Categories (
    CategoryID INT IDENTITY PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL
);

INSERT INTO Categories (CategoryName) 
VALUES 
('Men'), ('Women'), ('Kids');

CREATE TABLE Products (
    ProductID INT IDENTITY PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10,2) NOT NULL,
    BrandID INT NOT NULL,
    CategoryID INT NOT NULL,
    ImageURL VARCHAR(255) NOT NULL,
    Size VARCHAR(10),
    Color VARCHAR(50),
    FOREIGN KEY (BrandID) REFERENCES Brands(BrandID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

INSERT INTO Products (ProductName, Description, Price, BrandID, CategoryID, ImageURL, Size, Color)
VALUES 
-- Adidas
('Adidas Ultraboost 21', 'High-performance running shoes with responsive cushioning.', 180.00, 1, 1, 'url_ultraboost21', '42', 'Black'),
('Adidas Yeezy Boost 350 V2', 'Popular lifestyle sneakers known for their comfort and style.', 220.00, 1, 2, 'url_yeezyboost350v2', '43', 'Zebra'),
('Adidas Stan Smith', 'Classic tennis shoes known for their minimalist design.', 85.00, 1, 3, 'url_stansmith', '44', 'White/Green'),

-- Air Jordan
('Air Jordan 1 Retro High', 'The timeless classic that started the sneaker culture.', 170.00, 10, 1, 'url_aj1retrohigh', '42', 'Banned'),
('Air Jordan 4 Retro', 'Iconic silhouette with mesh netting on the upper.', 190.00, 10, 2, 'url_aj4retro', '43', 'Bred'),
('Air Jordan 11 Retro', 'Sleek design with patent leather.', 220.00, 10, 3, 'url_aj11retro', '44', 'Concord'),

-- Balenciaga 
('Balenciaga Triple S', 'Stylish chunky sneaker known for its layered sole.', 995.00, 4, 1, 'url_triples', '42', 'White'),
('Balenciaga Speed Trainer', 'Sleek, minimalist sock-like sneakers.', 780.00, 4, 2, 'url_speedtrainer', '43', 'Black'),
('Balenciaga Track', 'Multilayered, complex sneaker design.', 895.00, 4, 3, 'url_track', '44', 'Blue/Green'),

-- Converse
('Converse Chuck Taylor All-Star', 'Iconic high-top sneakers.', 55.00, 5, 1, 'url_chucktaylor', '42', 'Black'),
('Converse One Star', 'Classic low-top with a simple design.', 75.00, 5, 2, 'url_onestar', '43', 'White'),
('Converse Pro Leather', 'A retro basketball silhouette.', 80.00, 5, 3, 'url_proleather', '44', 'Red'),

-- Gucci
('Gucci Ace Embroidered', 'Luxury low-top with embroidered details.', 650.00, 6, 1, 'url_aceembroidered', '42', 'White'),
('Gucci Rhyton', 'Bulky silhouette with vintage appeal.', 890.00, 6, 2, 'url_rhyton', '43', 'Ivory'),
('Gucci Screener', 'Retro-inspired design with a distressed finish.', 830.00, 6, 3, 'url_screener', '44', 'Green/Red'),

-- New Balance
('New Balance 574', 'Iconic design with suede and mesh uppers.', 80.00, 7, 1, 'url_574', '42', 'Grey'),
('New Balance 990v5', 'Premium running shoes with a classic look.', 175.00, 7, 2, 'url_990v5', '43', 'Navy'),
('New Balance 327', 'Bold, asymmetric design inspired by 70s heritage.', 100.00, 7, 3, 'url_327', '44', 'Orange/Blue'),

-- Nike
('Nike Air Force 1', 'Iconic and versatile low-top sneakers.', 90.00, 2, 1, 'url_airforce1', '44', 'White'),
('Nike Air Jordan 1', 'Iconic basketball shoe popular both on and off the court.', 170.00, 2, 2, 'url_airjordan1', '42', 'Bred'),
('Nike Air Max 97', 'Futuristic design with a full-length Max Air unit.', 160.00, 2, 3, 'url_airmax97', '43', 'Silver Bullet'),

-- Puma
('Puma RS-X', 'Bold and chunky sneaker with retro styling.', 110.00, 3, 1, 'url_rsx', '44', 'Red/Blue'),
('Puma Suede Classic', 'Timeless design and classic comfort.', 65.00, 3, 2, 'url_suedeclassic', '42', 'Black/White'),
('Puma Ignite Flash', 'Performance training shoes with Ignite foam technology.', 100.00, 3, 3, 'url_igniteflash', '43', 'Black'),

-- Reebok
('Reebok Classic Leather', 'Timeless leather sneakers for everyday style.', 75.00, 8, 1, 'url_classicleather', '42', 'White'),
('Reebok Club C 85', 'A retro tennis style with a low profile.', 70.00, 8, 2, 'url_clubc85', '43', 'Chalk'),
('Reebok Zig Kinetica', 'Futuristic design with responsive cushioning.', 120.00, 8, 3, 'url_zigkinetica', '44', 'Black/Neon'),

-- Vans
('Vans Old Skool', 'Classic skate shoes with the iconic side stripe.', 60.00, 9, 1, 'url_oldskool', '42', 'Black/White'),
('Vans Authentic', 'Simple low top with a sturdy canvas upper.', 50.00, 9, 2, 'url_authentic', '43', 'Red'),
('Vans Sk8-Hi', 'Legendary high top with padded collars.', 65.00, 9, 3, 'url_sk8hi', '44', 'Blue');

CREATE TABLE Inventory (
    InventoryID INT IDENTITY PRIMARY KEY,
    ProductID INT,
    QuantityInStock INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Customers (
    CustomerID INT IDENTITY PRIMARY KEY,
    DateCreated DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    Name VARCHAR(100) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    Role VARCHAR(50) NOT NULL DEFAULT 'Customer',
    Status VARCHAR(50) NOT NULL DEFAULT 'Active'
); 

INSERT INTO Customers (DateCreated, Name, Phone, Email, Password, Address, Role) 
VALUES 
('2012-11-17', 'Van Huu Toan', '0792766979', 'vhtoan27@gmail.com', '123456', '123 Main St', 'Admin'),
('2012-11-17', 'Dinh The Anh', '0906643433', 'dinhtheanh753@gmail.com', '123456', '456 Elm St', 'Admin'),
('2012-11-17', 'Tran Nhat Quang', '0123456789', 'kieterit@gmail.com', '123456', '789 Oak St', 'Admin'),
('2012-11-17', 'A Min 1', '0123456789', 'admin1@gmail.com', '123456', '321 Pine St', 'Admin'),
('2012-11-17', 'U Ser 1', '0123456789', 'user1@gmail.com', '123456', '654 Maple St', 'Customer');

CREATE TABLE Carts (
    CartID INT IDENTITY PRIMARY KEY,
	CustomerID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    AddedDate DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Favourites (
    FavouriteID INT IDENTITY PRIMARY KEY,
    CustomerID INT NOT NULL,
    ProductID INT NOT NULL,
    AddedDate DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Orders (
    OrderID INT IDENTITY PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    Status VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
   OrderDetailID INT IDENTITY PRIMARY KEY,
   OrderID INT,
   ProductID INT,
   Size VARCHAR(10),
   Color VARCHAR(50),
   Price DECIMAL(10,2),
   Quantity INT,
   FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
   FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Payments (
    PaymentID INT IDENTITY PRIMARY KEY,
    OrderID INT,
    PaymentType VARCHAR(50),
    Amount INT,
    PaymentDate DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);

CREATE TABLE Shipping (
    ShippingID INT IDENTITY PRIMARY KEY,
    OrderID INT,
    ShippingType VARCHAR(50),
    Cost INT,
    EstimatedDeliveryDate DATE,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);

CREATE TABLE Reviews (
    ReviewID INT IDENTITY PRIMARY KEY,
    ProductID INT,
    CustomerID INT,
    Rating INT,
    Comment TEXT,
    ReviewDate DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);