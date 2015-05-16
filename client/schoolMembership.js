Template.schoolMembership.helpers({
	schoolSchema: function(){
		return new SimpleSchema({
			name: {
				type: String,
				label: "School name"
			}
		});
	}
})

AutoForm.hooks({
	newSchoolMembership: {
		onSubmit: function(insertDoc, updateDoc, currentDoc){
			console.log(insertDoc);
			/*Meteor.neo4j.call('insertNeoUser', insertDoc, function(err, doc){
				console.log(err, doc);
			});*/
			return false;
		}
	}
})