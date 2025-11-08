// nomor 1 b
function isPalindrome(str) {
    // Hilangkan spasi dan ubah ke huruf kecil
    const cleaned = str.replace(/\s+/g, '').toLowerCase();

    // Balikkan string
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        console.log(`"${str}" ini palindrome.`);
    } else {
        console.log(`"${str}" ini bukan palindrome.`);
    }
}

console.log("=== Nomor 1 ===");
isPalindrome("Buku ini bagus");
isPalindrome("Apa");




