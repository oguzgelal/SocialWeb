Meteor.startup(function() {

	// If no data present, add initial rooms
	if (Rooms.find({}).count() == 0){ Meteor.call("bootstrap"); }

	// Init the official apps
	if (Apps.find({appID: "EYhO79iz2o"}).count()==0){
		Apps.insert({
			appID: "EYhO79iz2o",
			type: "official",
			name: "SocialSurf Chrome Extension"
		},
		function(err){ if (err){ throw err; } });
	}

	// Configure services automatically on db resets
	ServiceConfiguration.configurations.remove({ service: "facebook" });
	ServiceConfiguration.configurations.insert({
		service:"facebook",
		appId: "394250894092823",
		secret: "c642a4c09fe8ec65d438c1673e21db68"
	});
	ServiceConfiguration.configurations.remove({ service: "twitter" });
	ServiceConfiguration.configurations.insert({
		service:"twitter",
		consumerKey: "CHncGDVkFIAYQUIE4cXFBCOpw",
		secret: "kkh6QVz2STGYpajALMwKD5PetAYlfIuDkr6K4EwRQH3bsRk0jd"
	});
	ServiceConfiguration.configurations.remove({ service: "google" });
	ServiceConfiguration.configurations.insert({
		service:"google",
		clientId: "892016271727-9cr3436rqll9gole11ojok6v1otlhomf.apps.googleusercontent.com",
		secret: "rHES7XlC6vscz-FABdtAYkMS"
	});


	// Reset onlines and tokens on server startup
	Online.remove({});
	Tokens.remove({});

});