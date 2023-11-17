using System;
using System.Collections.Generic;

namespace LitSneaker.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public DateTime DateCreated { get; set; }

    public string Name { get; set; } = null!;

    public string? Address { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<Favourite> Favourites { get; set; } = new List<Favourite>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
