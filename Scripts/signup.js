function validate(){
   
    let email= document.getElementById("mail");
    let pwd=document.getElementById("pwd");
    let confirmPwd = document.getElementById("confirmPwd");

    console.log(email);
    console.log(pwd);

    if (email.value.trim()=="" && pwd.value.trim() !="") {
        email.placeholder="Please enter email ID"
        email.style.border="2px solid red";
        pwd.style.border= '';
        return false;
    }
    // to check for empty spaces keyed in by user which is not checked by 'required' attribute of HTML 5
    else if (email.value.trim()=="")
    {
        email.value='';
        email.placeholder="Please enter email ID"
        email.style.border="2px solid red";
        
        return false;
    }
       // to check for empty spaces keyed in by user which is not checked by 'required' attribute of HTML 5
    else if (pwd.value.trim()=="")
    {
        email.style.border= '';
        pwd.value='';
        pwd.placeholder="Please enter password"
        pwd.style.border="2px solid red";
        
        return false;
    }
    
    else{
        
        let validEmail =  validateEmail();
        if (validEmail){
            let validPassword = validatePassword();
            if(validPassword){
                if(confirmPwd.value.trim()==pwd.value.trim()){
                    return validatePhoneNumber();
                }
                else{
                    alert("Passwords donot match");
                    return false;
                }

            }
            else{
                return false;
            }
        }
        else{
            return false;
        }

        
    }
    
   }

   function validatePhoneNumber(){
       let phone=document.getElementById("phone");
       
       // Should accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
       //Should contain 10 digits
     
     let regexp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

       if(regexp.test(phone.value.trim())){
            return true;
       }
       else{
        phone.placeholder="Please enter a valid Phone Number."
        phone.style.border="2px solid red";
        return false;
       }

   }