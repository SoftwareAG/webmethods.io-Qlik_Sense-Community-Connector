module.exports = {

  name: "delete_app",

  title: "Delete App",

  description: "This action does not completely remove your app. Ensure to manually remove the app from your tenant.",
  version: "v1",

  input: {
    title: "Delete App",
    type: "object",
    properties: {
      app_id: {
        title: "App Id",
        type: "string",
        minLength: 1,
        description: "Your valid app id"
      }
    }
  },

  output: {
    title: "output",
    type: "object",
    properties: {

    }
  },

  mock_input: {},

  execute: function (input, output) {
    const request = require("request");
    const options = {
      method: "DELETE",
      url: "https://" + input.auth.tenant + "/api/v1/apps/" + input.app_id,
      headers: {
        Authorization: "Bearer " + String(input.auth.api_key)
      }
    };

    request(options, function (err, res, body) {
      if (err) {
        return output(err);
      }
      if (res.statusCode >= 200 && res.statusCode < 400) {
        return output(null, {
          result: "App deleted successfully!"
        });
      } else {
        return output(null, {
          result: res.statusCode
        });
      }
    });
  }

}