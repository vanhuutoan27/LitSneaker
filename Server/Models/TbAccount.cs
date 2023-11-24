using System;
using System.Collections.Generic;

namespace LitSneaker.Models;

public partial class TbAccount
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Role { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
