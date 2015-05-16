Template.companyMembership.helpers({
	companySchema: function(){
		return CompanySchema;
	}
})

AutoForm.hooks({
	newCompanyMembership: {
		onSubmit: function(insertDoc, updateDoc, currentDoc){
			insertDoc.userId = Meteor.userId();
			/*console.log(insertDoc);
			console.log(Meteor.userId())*/
			/*Meteor.neo4j.call('insertNeoUser', {userId: Meteor.userId()});*/
			return false;
		}
	}
})

CompanySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Company Name"
	}
});