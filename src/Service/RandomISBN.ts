// function generateRandomISBN(): string {
//     let isbn = '978'; // Start with the prefix for English-language books
//     for (let i = 0; i < 9; i++) {
//       isbn += Math.floor(Math.random() * 10); // Append random digits
//     }
    
//     // Calculate the check digit
//     let sum = 0;
//     for (let i = 0; i < 12; i++) {
//       sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
//     }
//     const checkDigit = (10 - (sum % 10)) % 10;
//     isbn += checkDigit;
//     return isbn;
// }
  
// export default generateRandomISBN 