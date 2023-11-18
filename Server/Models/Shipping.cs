using System;
using System.Collections.Generic;

namespace LitSneaker.Models;

public partial class Shipping
{
    public int ShippingId { get; set; }

    public int? OrderId { get; set; }

    public string? ShippingType { get; set; }

    public int? Cost { get; set; }

    public DateTime? EstimatedDeliveryDate { get; set; }

    public virtual Order? Order { get; set; }
}
