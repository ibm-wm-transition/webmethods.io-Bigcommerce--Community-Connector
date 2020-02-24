module.exports = {

  name: "give_a_product_review",

  title: "Give A Product Review",

  description: "",
  version: "v1",

  input:{
    title: "Give A Product Review",
    type: "object",
    properties: {
pid: {
        title: "product ID",
        type: "string",
        minLength: 1,
        description: "Enter the product ID"
      },
	  date_reviewed: {
        title: "Review date",
        type: "string",
        minLength: 1,
        description: "Enter the  Review Date in 2018-07-20T17:45:13+00:00"
      },
	  title: {
        title: "Review",
        type: "string",
        minLength: 1,
        description: "Enter the review title"
      }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    var request = require("request");
 var x="https://api.bigcommerce.com/stores/"+input.auth.hash+"/v3/catalog/products/"+input.pid+"/reviews";
 var y= input.auth.cs;
  var z= input.auth.access_token;
    var options = {
      "method": "POST",
      "url": x,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
         "X-Auth-Client": y,
		 "X-Auth-Token": z 
      },
	  "body":{
  "date_reviewed": input.date_reviewed,
  "title": input.title
},
"json": true
	 
     }
	 
	 
	 request(options, function (error, response, body) {
  try {
            if (body && typeof(body) === "string") {
                body = JSON.parse(body);
            }
        } catch (e) {
            return output(body);
        };
		
		  if (response.statusCode === 403) {
            return output("the authentication information is incorrect.");
        }
		 if (response.statusCode === 400) {
            return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
		if (response.statusCode === 409) {
            return output(" The product name is a duplicate");
        }
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            return output(null, {
				data: body
			});
          
        }
        output(body);
		
});
  }

}
