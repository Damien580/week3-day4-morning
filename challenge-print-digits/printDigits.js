const printDigits = num =>{
    let rev = 0
    while (num > 0){
        console.log(num)
        rev =(rev * 10) + (num % 10)
        console.log(rev)
            num = Math.floor(num / 10)
            console.log(num)

    }
   return rev 
}

console.log(printDigits(47))