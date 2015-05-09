Template.addressTemp.helpers({
	addressSchema: AddressSchema
})

AddressSchema = new SimpleSchema({
	addressDetails: {
		label: "address Details",
		type: Object
	},
	"addressDetails.mailingAddress" : {
		label: "Mailing Address",
		type: String
	},
	"addressDetails.city" : {
		label: "City",
		type: String
	},
	"addressDetails.state" : {
		label: "State",
		type: String
	},
	"addressDetails.zip" : {
		label: "Zip",
		type: Number
	}
});