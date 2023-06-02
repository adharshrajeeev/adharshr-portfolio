
//VALIDATION STARTS HERE--------------

var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName()
{
  var name=document.getElementById('username').value;
  if(name.length==0){
    nameError.innerHTML='Name required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Write full name";
    return false;
  }
  nameError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email=document.getElementById('useremail').value;
  if(email.length==0){
    emailError.innerHTML="email required";
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='invalid email';
    return false;
  }
  emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;

}

function validateMessage(){
   var messagee=document.getElementById('usermessage').value;
   var required=10;
   var left=required-messagee.length;

   if(left>0){
    messageError.innerHTML=left +' more characters required';
    return false;
   } 
   messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
   return true;
}


function validateform()
{
  if(!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display='block';
    submitError.innerHTML='please fill all the components';
    setTimeout(function(){
      submitError.style.display='none';
    },3000)
    return false;
  }
}
//------------------SNACK BAR-----------------------------------


//--------------------SUBMITION STARTS HERE-----------------

$("#submit-gform").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzGaNpGZlyopeLyT-usFRaNRybXQ0KwKLhPBHaLD0zqVtY7mRUJyTegNd6pZLapcd97/exec",
      data:$("#submit-gform").serialize(),
      method:"post",
      success:function (response){
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        window.location.reload()
        

      }
  })
})