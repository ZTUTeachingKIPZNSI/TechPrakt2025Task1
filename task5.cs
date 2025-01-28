using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Введіть перше число:");	
        double number1 = Convert.ToDouble(Console.ReadLine());	
        Console.WriteLine("Введіть друге число:");	
        double number2 = Convert.ToDouble(Console.ReadLine());	
        double sum = number1 +number2;	
		
        Console.WriteLine($"Сума чисел: {sum}");}
		
}

