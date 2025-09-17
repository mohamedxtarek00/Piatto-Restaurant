function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if ((user === 'Fares' && pass === '2202390') || (user === 'Mohamed_Hany' && pass === '2202428') || (user === 'Eskafy' && pass === '2202409') || (user === 'Ziad' && pass === '2202337') || (user === 'Mostafa' && pass === '2202381') || (user === 'Mohamed_Tareq' && pass === '2202410') || (user === 'Mazen' && pass === '2202398') || (user === 'Eng_Ghaidaa' && pass === 'instructor')  ) {
        alert("Login Successful");
        window.location.href= 'index.html'
    } else {
        alert("Wrong Entry !");
    }
}



function signup(){
    var user1 = document.getElementById("username2").value;
    var mail2 = document.getElementById("mail").value;
    var pass3 = document.getElementById("pass").value;

    if (user1 === '' || mail2 === '' || pass3 === '' ) {
        alert('Please fill in all the fields');
        return;
      }
      

    if (!validateEmail(mail2)) {
        alert("Please enter a valid email address.");
        return false;}
    
    if (!validatePassword(pass3)) {
        alert("Please enter a valid password.");
        return false;
    }
    
     else {
    alert("Signup Successful");
    window.location.href='index.html'
    }
    }

    
    function validateEmail(mail2) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(mail2);
    }


    function validatePassword(pass3) {
        
        const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@_!%*?&])[A-Za-z\d@_!%*?&]{8,18}$/;
        return regex2.test(pass3);
    }


    //For traversing between login and sign up
const logregBox = document.querySelector('.login-register-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');  
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});


// To move to detailed pages (Menu)

function quatro() {
    window.location.href= 'quatropasta.html'
}


function vegeterian() {
    window.location.href= 'vegeterianpasta.html'
}


function glutenfree() {
    window.location.href= 'glutenfreepasta.html'
}


function steak() {
    window.location.href= 'steak.html'
}


function toastbanana() {
    window.location.href= 'toastbanana.html'
}


function cheesepizza() {
    window.location.href= 'cheesepizza.html'
}



    