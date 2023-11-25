using LitSneaker.Models;

namespace LitSneaker.Utility
{
    public class SearchUtility
    {
        private readonly LitSneakerDbContext _context;
        public SearchUtility(LitSneakerDbContext context)
        {
            _context = context;
        }
        public  string generateId(string tableName){
            Console.WriteLine("sdasddsdasdds");
            var dbSetType = _context.GetType();
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

                    var generatedId = searchUtils.generateId(tableName);
                    Console.WriteLine($"Generated ID for {tableName}: {generatedId}");
                }
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
    }
