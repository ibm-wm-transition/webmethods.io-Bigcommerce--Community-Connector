module.exports = {

  name: "add_order",

  title: "Add Order",

  description: "",
  version: "v1",

  input:{
    title: "Add Order",
    type: "object",
    properties: {
si: {
        title: "Status Code ",
        type: "string",
        minLength: 1,
        description: "Enter the Status Code"
      },cid: {
        title: "Coustomer ID",
        type: "string",
        minLength: 1,
        description: "Enter the Coustomer ID"
      },
	 	first_name: {
        title: "first name",
        type: "string",
        minLength: 1 
      },
	 	first_name: {
        title: "first name",
        type: "string",
        minLength: 1 
      },

			last_name: {
        title: "last name",
        type: "string",
        minLength: 1
      },
	    	city: {
        title: "city name",
        type: "string",
        minLength: 1
      },
	  	state: {
        title: "state name",
        type: "string",
        minLength: 1
      },
	  zip: {
        title: "zip code",
        type: "number",
        minLength: 1
      },
	  country: {
        title: "country name",
        type: "string",
        minLength: 1
      },
	  email: {
        title: "email",
        type: "string",
        minLength: 1
      },
	name: {
        title: "product name",
        type: "string",
        minLength: 1 
      },
	  	quantity: {
        title: "product quantity",
        type: "number",
        minLength: 1 
      },
	  price_inc_tax: {
        title: "price income tax",
        type: "string",
        minLength: 1 
      },
	    price_ex_tax: {
        title: "price ex tax",
        type: "string",
        minLength: 1 
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
 var x="https://api.bigcommerce.com/stores/"+input.auth.hash+"/v2/orders";
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
  "status_id": input.si,
  "customer_id": input.cid,
  "billing_address": {
    "first_name": input.first_name,
    "last_name": input.last_name,
    "city": input.city,
    "state": input.state,
    "zip": input.zip,
    "country": input.country, 
    "email": input.email
  },
  "products": [
    {
      "name": input.name,
      "quantity": input.quantity,
      "price_inc_tax": input.price_inc_tax,
      "price_ex_tax": input.price_ex_tax
    }
  ]
},
"json": true
	 
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
        if (response.statusCode !== 201) {
            return output(body.status.errorDetails);
        }
		if (response.statusCode === 200) {
           
					  return output(null, {"data":body})
          
        }
		 if (response.statusCode === 201) {
           
					  return output(null, {"data":body})
          
        }
        output(body);
		
});
  }

}
