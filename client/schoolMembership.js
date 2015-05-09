Template.schoolMembership.helpers({
	schoolSchema: function(){
		return new SimpleSchema({
			name: {
				type: String,
				label: "School name"
			},
			forSomeoneElse: {
				type: Boolean,
				label: "Is this for someone else?"
			},
			forSomeoneElseEmail: {
				type: String,
				label: "What is their email?",
				optional: true
			}
		});
	}
})