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
			Router.go("individualMembership");
			break;
		case "Family Membership" :
			Router.go("familyMembership");
			break;
		case "Business Membership" :
			Router.go("businessMembership");
			break;
	}
	//Cart.findOne({}).items
}
	