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

Template.forSomeoneElse.helpers({
	forSomeoneElse: ForSomeoneElseSchema
})