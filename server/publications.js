Meteor.publish("invitation", function(inviteId){
	return Invitations.find({_id: inviteId});
});