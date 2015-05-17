Package.describe({
  summary: "Fundeeze memberships integrated with neojs",
  name: "fundz:memberships",
  version: "0.0.1",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform");
  api.use("templating");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core");
  api.use("matb33:collection-hooks");
  api.addFiles("client/cartHooks.js", ["client"])
  api.addFiles("client/forSomeoneElse.html", ["client"])
  api.addFiles("client/forSomeoneElse.js", ["client"])
  api.addFiles("client/householdMembership.html", ["client"]);
  api.addFiles("client/householdMembership.js", ["client"]);
  api.addFiles("client/companyMembership.html", ["client"]);
  api.addFiles("client/companyMembership.js", ["client"]);
  api.addFiles("client/schoolMembership.html", ["client"]);
  api.addFiles("client/schoolMembership.js", ["client"]);
  api.addFiles("common/router.js",["client","server"]); // common routing
  /*api.addFiles("server/methods.js",["server"]); // register as a reaction package
  api.addFiles("server/publications.js",["server"]);
  
  api.addFiles("common/contactSchema.js",["client","server"]);
  api.addFiles("common/householdSchema.js", ["client","server"]);
  api.addFiles("common/addressNode.js", ["client", "server"]);
  //api.addFiles("common/membershipSchema.js", ["client", "server"]);
  api.addFiles("common/companySchema.js", ["client", "server"]);
  api.addFiles("common/schoolSchema.js", ["client", "server"]);
  api.addFiles("common/userHooks.js",["client"]);
  api.addFiles("common/routing.coffee",["client","server"]); // common routing
  api.addFiles("lib/String.js", ["client", "server"]);
  api.addFiles("lib/Math.js", ["client", "server"]);
  api.addFiles("lib/neo4j.js", ["client", "server"]);

  api.addFiles([

  */
});