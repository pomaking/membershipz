Template.businessMembership.helpers({
	schema: CompanySchema
})

CompanySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Company"
	}
});