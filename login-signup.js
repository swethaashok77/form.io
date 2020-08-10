function login() {

	var userEmail = document.getElementById('email_field').value
	var userPass = document.getElementById('password_field').value

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage)
	});

}

function signup() {
	var userEmail = document.getElementById('email_signup_field').value
	var userPass = document.getElementById('password_signup_field').value

	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: " + errorMessage)
	});

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		console.log("Error: " + errorMessage)
	});
}
