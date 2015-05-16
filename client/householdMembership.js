Template.householdMembership.helpers({
	householdSchema: function(){
		return new SimpleSchema({
			peopleInHousehold: {
				type: [Object],
				label: "People in your household"
			},
			"peopleInHousehold.$.email": {
				type: String,
				label: "email"
			},
			"peopleInHousehold.$.firstName": {
				type: String,
				label: "First Name"
			},
			"peopleInHousehold.$.lastName": {
				type: String,
				label: "Last Name"
			},
			"peopleInHousehold.$.isOver13": {
				type: Boolean,
				label: "Is this person over the age of 13?"
			}
		})
	}
});
AutoForm.hooks({
	newHouseholdMembership: {
		onSubmit: function(insertDoc, updateDoc, currentDoc){
			console.log(insertDoc);
			/*Meteor.neo4j.call('insertNeoUser', insertDoc, function(err, doc){
				console.log(err, doc);
			});*/
			return false;
		}
	}
})