Router.route("/membership-individual", {
	name: "individualMembership",
	controller: ShopController
});
Router.route("/membership-business", {
	name: "businessMembership",
	controller: ShopController
});
Router.route("/membership-family", {
	name: "familyMembership",
	controller: ShopController
});