Meteor.methods("sendInvitationEmail", function(email, type){
	check(email, String);
	check(type, String);
	var inviteObj = {invitorId: this.userId, type: type};
	Invitations.insert(inviteObj);
	var emailString = "<a href='" + email + "'>Click this link to get started</a>";
	//send email email String
})

