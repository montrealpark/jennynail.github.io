document.addEventListener('DOMContentLoaded', () =>{

 var myforms= document.querySelector('#myForm')

 myforms.onsubmit =function validate(){



        var username=document.getElementById("username").value;

        var password=document.getElementById("password").value;

   

        if(username=="admin" && password=="12345"){

            alert("Welcome to Jenny Nail");

            return true;;

           

        }else{

            alert("Please Try again!");

            return false;

         

        }

    }



   

})