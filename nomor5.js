// nomor 5
function showNumber(num) {
    for(let i = 1; i <= num; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

console.log("\n=== Nomor 5 ===");
showNumber(5);