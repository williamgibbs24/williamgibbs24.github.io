function generate(){
    
    let complexity = document.getElementById("slider").value;
    
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?";

    let password = "";

    for(var i = 8; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));

    
    }

    
    document.getElementById("display").value = password;

    generateButton.addEventListener("previous").innerHTML += password + "<br />";
    
}

