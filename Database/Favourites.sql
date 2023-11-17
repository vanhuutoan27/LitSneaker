CREATE TABLE Favourites (
    FavouriteID INT IDENTITY PRIMARY KEY,
    CustomerID INT NOT NULL,
    ProductID INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
