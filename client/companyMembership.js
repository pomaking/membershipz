Template.companyMembership.helpers({
	companySchema: function(){
		return CompanySchema;
	}
})

CompanySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Company"
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