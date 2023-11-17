function printFunc(seconds){
    if (typeof seconds === "number") {
        if (seconds >=0 && seconds <=9){
            setTimeout(function(){
                console.log("Coding is not that hard!")
            },seconds * 1000)
        } else {
            console.log("Please enter a one digit number.")
        }
    
    } else {
        console.log("Please enter a number!")
    }  
}
printFunc(16)