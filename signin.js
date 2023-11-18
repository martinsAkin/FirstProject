
function checkInput() {
  var input = document.getElementById("myInput1").value;
  var password = document.getElementById("myInput2").value;
   if (input !== "" && password !== "") {
    alert("Account Successfully Created");
    window.location.href="www.google.com"
  }else if(input === "" || password === ""){
      alert("Error in password or Username entered");
      
  }
/*document.getElementById("output").textContent = password;*/
}

function darkMode(){
    document.body.style.backgroundColor = "Black"; 
    
}
function LightMode(){
    document.body.style.backgroundColor = "#eaffea"; 
 }  
