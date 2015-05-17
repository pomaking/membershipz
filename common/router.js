Router.route("/membership-household", {
	name: "householdMembership",
	controller: ShopController
});
Router.route("/membership-school", {
	name: "schoolMembership",
	controller: ShopController
});
Router.route("/membership-company", {
	name: "companyMembership",
	controller: ShopController
});
Router.route("/address-temp", {
	name: "addressTemp",
	controller: ShopController
})

//temp send email have them register automatically giving them
//one of these membership pages to fill out
Router.route("/for-someone-else", {
	name: "forSomeoneElse",
	controller: ShopController
});

Router.route("/membership-invitation/:_id", {
	name: "membershipInvitation",
	controller: ShopController,
	waitOn: function(){
		return Meteor.subscribe("invitation", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			invitation: function() {
				return Invitations.find({_id: self.params._id});
			}
		}
	}
});