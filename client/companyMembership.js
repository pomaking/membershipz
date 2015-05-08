Template.companyMembership.helpers({
	companySchema: function(){
		return CompanySchema;
	}
})

CompanySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Company"
	}
});