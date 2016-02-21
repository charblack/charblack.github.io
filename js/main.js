function askQuestions() { 

	var firstName = prompt('What is your first name?'); 
	var lastName = prompt('What is your last name?');


	var fullName = firstName + ' ' + lastName;
	console.log(fullName); 





	var age = prompt('How old are you?');
	age = parseInt(age);


	if (age >= 18) {

		console.log('User is an adult.');

	} else if (age >= 13) {

		console.log('User is a teenager.');


	} else {

		console.log('User is a child.');

	}

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log('GReetings, General!');

	}

	var faveColour = prompt('What is your favourite colour?');

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {

		$('h1').css('color', faveColour); 
	}

}


//* When the page has loaded */
$(function() {

	$('img').on('click', askQuestions);

	//Hide all the sections
	$('h3, h4').next().hide();

	// When the user clicks an h3
	$('h3, h4').on('click', function () {

		// Toggle the next element 
		$(this).next().slideToggle(7000); 


	}); 

});


