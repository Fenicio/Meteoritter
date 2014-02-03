Template.start.events({
	'click #btnCreateAccount': function(event, template) {
		var user = template.find('#username').value,
		    email = template.find('#email').value,
		    password = template.find('#password1').value,
		    password2= template.find('#password2').value;

		Accounts.createUser({
			username: user,
			email: email,
			password: password
		}, function(error) {
			console.log("Error creating user: ", error);
		});
	}
});