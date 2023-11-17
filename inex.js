// function printFunc(seconds){
//     if (typeof seconds === "number") {
//         if (seconds >=0 && seconds <=9){
//             setTimeout(function(){
//                 console.log("Coding is not that hard!")
//             },seconds * 1000)
//         } else {
//             console.log("Please enter a one digit number.")
//         }
    
//     } else {
//         console.log("Please enter a number!")
//     }  
// }
// printFunc(16)


function checkNumber(number){
  return new Promise((resolve,reject) => {
    if(number % 2===0) {
        resolve("Бројот е парен")
    } else {
        reject(new Error("Бројо е непарен"))
    }
  })
}
function handleSuccess(message){
    console.log(message)
}

function handleError(error){
    console.error(error.message)
}

checkNumber(4)
    .then(handleSuccess) 
    .catch(handleError);

   checkNumber(9)
   .then(handleSuccess)
   .catch(handleError) 
