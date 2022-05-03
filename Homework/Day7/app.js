
const drop = () => {
    //
}


const showLogin = () => {
    let login_btn = document.querySelector('.colorLink')
    let loginAnswer= prompt("Enter Email 4 Login")
    let screen = document.querySelector('.screen')
    // conditional
        if(loginAnswer.includes("@") && loginAnswer.includes(".") ){
            screen.innerHTML = loginAnswer
        }else {
            screen.innerHTML = "Nah Bruh, You did SUmn Wrong"
        }
}

 
