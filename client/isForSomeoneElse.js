Template.forSomeoneElse.helpers({
	forSomeoneElse: forSomeoneElseSchema
})

ForSomeoneElseSchema = new SimpleSchema({
	isForSomeoneElse: {
		type: Boolean,
		label: "Is this for someone else?"
	},
	personEmail: {
		type: String,
		label: "Email"
	}
})