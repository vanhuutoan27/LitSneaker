using LitSneaker.Models;
using SQLitePCL;
using System.Data.Entity;
using System.Reflection;

namespace LitSneaker.Utility
{
    public class SearchUtility
    {
        private readonly LitSneakerDbContext _context;
        public SearchUtility(LitSneakerDbContext context)
        {
            _context = context;
        }
        public string GenerateId( string tableName)
        {
            Console.WriteLine("sdasddsdasdds");
             var dbSetType = _context.GetType();
            //var dbSetType = typeof(_cont);

            var property = dbSetType.GetProperty(tableName);
            if (property == null)
            {
                throw new ArgumentException("Invalid table name", nameof(tableName));
            }
            var dbSet = property.GetValue(_context);
            var tableList = ((IEnumerable<object>)dbSet).ToList();
            int newId = tableList.Count + 1;
            return newId.ToString();



            //test ham

        }

        /*  public string GenerateId<TEntity>(LitSneakerDbContext  dbSet) where TEntity : class
          {
              Console.WriteLine("sdasddsdasdds");

              if (dbSet == null)
              {
                  throw new ArgumentNullException(nameof(dbSet));
              }

              var tableList = dbSet.;

              int newId = tableList.Count + 1;
              return newId.ToString();
          }
  */


        public bool SearchUsername(string username) {
            var user = _context.TbAccounts
                    .FirstOrDefault(p => p.Username == username);
            if (user == null) {
                return false;
            } else {
                return true;
            }
        }
        public bool SearchEmail(string Email)
        {
            var user = _context.Users
                    .FirstOrDefault(p => p.Email == Email);
            if (user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public bool SearchPhone(string phone)
        {
            var user = _context.Users
                    .FirstOrDefault(p => p.Phone == phone);
            if (user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
    class Program
    {
       
        static void Main(string[] args)
        {
            // Replace "your_connection_string" with the actual connection string for your database

            // Replace "TbAccounts" with the actual table name you want to generate an ID for
            Console.WriteLine($"Error: ");

            try
            {
                var tableName = "Users";

                using (var context = new LitSneakerDbContext())
                {
                    var searchUtils = new SearchUtility(context);

                    //var generatedId = searchUtils.generateId(tableName);
                    //Console.WriteLine($"Generated ID for {tableName}: {generatedId}");
                }
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
    }
