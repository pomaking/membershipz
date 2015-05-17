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
})