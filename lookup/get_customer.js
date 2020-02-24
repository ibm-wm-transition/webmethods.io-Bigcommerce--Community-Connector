// Add your function in module.exports

module.exports = {

  "name":"get_customer",

  "label":"Get Customer",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},
	"search": true,
  "execute": function (input, options, output){
  	// to access auth info use input.auth , eg: input.auth.username
  	   var request = require("request");
 var x="https://api.bigcommerce.com/stores/"+input.auth.hash+"/v3/customers";
 var y= input.auth.cs;
  var z= input.auth.access_token;
    var options = {
      "method": "GET",
      "url": x,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
         "X-Auth-Client": y,
		 "X-Auth-Token": z 
      }
	 
     }
	 
	 	 let lookupResult={
		results :[],
		next_page:false,
	}

	let arr =[]
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
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            body.data.forEach(element => {
				  if (element) {
					  arr.push({
						  "id": String(element.id),
						  "value": String(element.name || element.id )
					  })
				  }
			  });
			  lookupResult.results = arr
					  return output(null, lookupResult)
          
        }
        output(body);
		
});
  }

}