using System;
using System.Collections.Generic;

namespace LitSneaker.Models;

public partial class Favourite
{
    public int FavouriteId { get; set; }

    public int CustomerId { get; set; }

    public int ProductId { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
