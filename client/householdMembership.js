Template.householdMembership.helpers({
	schema: function(){
		return new SimpleSchema({
			forSomeoneElse: {
				type: Boolean,
				label: "Is this for someone else?"
			},
			forSomeoneElseEmail: {
				type: String,
				label: "What is their email?",
				optional: true
			}
		})
	}
})