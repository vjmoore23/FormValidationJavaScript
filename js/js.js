//Function to validate email pattern input
function checkEmail() {
	//Variable reference to email input
    var email = document.getElementById('txtEmail');
	//Variable that holds pattern for email input
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//Test the email input against the pattern
    if (!filter.test(email.value)) {
	//Alert message for incorrect input
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

//Function for confirm email validation
function confirmEmail() {
		//Set variable to email
        var email = document.getElementById("email").value;
		//Set variable to confirmation email
        var cEmail = document.getElementById("cEmail").value;
		//Check if emails match
        if(email != cEmail) {
			//Alert message emails do not match
            alert('Emails do not match');
        }
}

//Function to disable the enter key
function noenter() {
  return !(window.event && window.event.keyCode == 13); 
 }

//Fucntion to validate checkboxes
function checkboxes(){
		 //Variable holds checkbox check value
		 var c = document.getElementsByName('contact');
		 //Test if checkbox has been checked
		 for (var i =0; i <c.length; i++) {
		 	 if (c[i].checked) {
			 	return true
				}
			 }
			return false;
			
}

//Function to validate checkboxes() 
function validate(){
		 //Test the function
		 if(!checkboxes()) {
		 		alert("Must select a contact method");
				return false;
		 }
		 return true;
}

//Function to validate form
function submit()
{
    if(document.myform.onsubmit &&
    !document.myform.onsubmit())
    {
        return;
    }
 document.myform.submit();
}

//Function clears text from all fields in form
function reset() {
document.getElementById("form").reset();
}