
const fs = require('fs');

function checkEmail(email){
    return new Promise((resolve,reject) =>{
// delay taki real lage
        setTimeout(() => {
// getting data and checking  ki present hai file mai ya nahi
            fs.readFile("Email_data.txt","utf-8",(error,data)=>{
                if(error){
                    reject("Fail to Load the File.");
                }
                else{
                    const emails=data.split(",").map(mail => mail.trim().toLowerCase());
                    if(!emails.includes(email.toLowerCase())){
                        resolve("You can use this Email")
                    }
                    else{
                        reject("Already present . Try with another one..")
                    }
                }
            });
        },1000);
    });
}

// agar file mai present nahi hai toh add kr do
function addMail(email){
    return new Promise((resolve,rej) => {
        setTimeout( () => {
            email=", "+email
            fs.appendFile("Email_data.txt",email,(err) => {
            resolve()
            })
        },3000)
    })
}
const email="subolt99@gmail.com"

// function calls
checkEmail(email)
    .then((message) => {
        console.log(message);
        addMail(email).then(() => {console.log("Email Generation Successful")})
    })
    .catch((error) => {
        console.log("Error : ",error)
    })
