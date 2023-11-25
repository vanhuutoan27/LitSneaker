using LitSneaker.Models;

namespace LitSneaker.DTO
{
    public class User
    {
        public string Name { get; set; } = null!;

        public string Phone { get; set; } = null!;

        public string Email { get; set; } = null!;
        public string? Address { get; set; }
        public string Role { get; set; } = null!;
        public string Status { get; set; } = null!;
        public string? Gender { get; set; }

        public DateTime? Dob { get; set; }
    }
    public class Account {

        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;

    }
    //for Admin
    public class UserModel {
        public int UserId { get; set; }

        public DateTime DateCreated { get; set; }

        public string Name { get; set; } = null!;

        public string Phone { get; set; } = null!;

        public string Email { get; set; } = null!;

        //public string Password { get; set; } = null!;
          public string Username { get; set; } = null!;


        public string? Address { get; set; }

        public string Role { get; set; } = null!;

        public string Status { get; set; } = null!;

        public string? Gender { get; set; }

        public DateTime? Dob { get; set; }

    }
    public class registerDTO
    {

        public DateTime DateCreated { get; set; }

        public string Name { get; set; } = null!;

        public string Phone { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string Password { get; set; } = null!;

        public string? Address { get; set; }

        public string Role { get; set; } = null!;

        public string Status { get; set; } = null!;

        public string? Gender { get; set; }

        public DateTime? Dob { get; set; }

        public string Username { get; set; } = null!;


    }




}
