module.exports = {
  label: "Connect to Qlik_Sense",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
      api_key: {
       type: "string",
         minLength: 1,
         label: "API KEY"
      },
      tenant: {
        type: "string",
          minLength: 1,
          label: "Account URL"
       },
    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}