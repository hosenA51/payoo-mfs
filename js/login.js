// console.log('button clicking file added');

// document.getElementById('id').addEventListener('click', function(){})
// document.getElementById('button-login')
//     .addEventListener('click', function(){});

// search: form submit reloading the page 


// step-1 : set Event handler
// document.getElementById('button-login')
//     .addEventListener('click', function(event){
//         // step-2: prevent default behavior (prevent reloading browser)
//         event.preventDefault(); // <------- Vejal to beginners
//         console.log('login button clicked');
        
//         // step-3: get the phone number and the pin number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;

//         console.log(phoneNumber, pinNumber);
        
//         // step-4: Validate phone and pin
//         // this is temporary. you should do like this.
//         if(phoneNumber === 's' && pinNumber === '1234'){
//             console.log('you are logged in');
//             // step-5: allow user to use the website
//         }
//         else{
//             alert('wrong phone number or pin')
//         }
//     });


document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    // get phone number and pin

    const phoneNumber = document.getElementById('phone-number').value 
    const pinNumber = document.getElementById('pin-number').value
    // console.log(phoneNumber, pinNumber);
     
    // bad way to validate
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
})