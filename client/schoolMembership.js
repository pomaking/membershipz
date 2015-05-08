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