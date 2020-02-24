module.exports = {
  label: "Connect to Bigcommerce",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
       access_token: {
         type: "string",
         minLength: 1,
          title: "Access Token",
		description:"To get create a new api account"
       },
	   cs: {
         type: "string",
         minLength: 1,
        title: "Client Secret"
       },
	    hash: {
         type: "string",
         minLength: 1,
        title: "Store Hash"
       }
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