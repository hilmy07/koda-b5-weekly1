// nomor 4

// 5 built-in method

// reduce()
// a. Input: [1, 2, 3, 4]
//    Output: 10
// b. Kegunaan: Mengalikan semua elemen dalam array dari kanan ke kiri
console.log("\n=== Nomor 4 ===");
const sum = [1, 2, 3, 4].reduceRight((acc, curr) => acc * curr);
console.log(sum);

// find()
// a. Input: [10, 20, 30, 40]
//    Output: 30
// b. Kegunaan: Mencari elemen pertama yang lebih besar dari 25
const found = [10, 20, 30, 40].find(num => num > 25);
console.log(found);

// includes()
// a. Input: ['apple', 'banana', 'cherry']
//    Output: true
// b. Kegunaan: Memeriksa apakah array berisi 'banana'
// Output: true
// Kegunaan: Memeriksa apakah array berisi 'banana'
const hasBanana = ['apple', 'banana', 'cherry'].includes('banana');
console.log(hasBanana);

// toLowerCase()
// a. Input: "The quick brown fox jumps over the lazy dog."
//    Output: "the quick brown fox jumps over the lazy dog."
// b. Kegunaan: Mengubah semua huruf dalam string menjadi huruf kecil
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());

// trim()
// a. Input: "   Hello, World!   "
//    Output: "Hello, World!"
// b. Kegunaan: Menghapus spasi di awal dan akhir string
const greeting = "   Hello, World!   ";
console.log(greeting.trim());