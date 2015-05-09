/*ReactionCore.Collections.Cart.after.update(function(userId, doc, fieldNames, modifier, options){
	//console.log(userId, doc, fieldNames, modifier, options);
	console.log("asdfasdfasdfasdf")
	//Meteor.users.update({_id: userId}, {$set: {"profile.hasMembership": true}});

});
console.log("what's going on ya'll")
*/
CTemp = {};
CTemp.getMembershipInformation = function(productId){
	var prod = Products.findOne({_id: productId});
	switch(prod.title){
		case "Individual Membership" :
		case "Family Membership" :
			Router.go("householdMembership");
			break;
		case "Faculty Membership" :
		case "Staff Membership" :
			Router.go("schoolMembership");
			break;
		case "Business Membership" :
			Router.go("companyMembership");
			break;
	}
	//Cart.findOne({}).items
}
	