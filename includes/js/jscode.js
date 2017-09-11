function validateTextbox(){
	var box = document.getElementById("username");
	var box2= document.getElementById("password");
	if(box.value =="" ){
		alert("The field username cannot be blank");
		return false;
	}

	if(box2.value =="" ){
		alert("The field password cannot be blank");
		return false;
	}
	

}