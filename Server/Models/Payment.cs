using System;
using System.Collections.Generic;

namespace LitSneaker.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int? OrderId { get; set; }

    public string? PaymentType { get; set; }

    public int? Amount { get; set; }

    public DateTime PaymentDate { get; set; }

    public virtual Order? Order { get; set; }
}
