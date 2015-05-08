Template.familyMembership.helpers({
	schema: FamilySchema
})

FamilySchema = new SimpleSchema({
	name: {
		type: String,
		label: "familyName"
	}
})