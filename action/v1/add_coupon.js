module.exports = {

  name: "add_coupon",

  title: "Add Coupon",

  description: "",
  version: "v1",

  input:{
    title: "Add Coupon",
    type: "object",
    properties: {
code: {
        title: "Code",
        type: "string",
        minLength: 1
      },
	  name: {
        title: "name",
        type: "string",
        minLength: 1
      },  type: {
        title: "type",
        type: "string",
		enum: [
                    "per_item_discount",
                    "per_total_discount",
                    "shipping_discount",
                    "free_shipping",
                    "percentage_discount",
                    "promotion"
                  ],
        minLength: 1
      }, amount: {
        title: "amount",
        type: "string",
        minLength: 1
      }, ids: {
        title: "id",
        type: "string",
        minLength: 1
      }, min_purchase: {
        title: "min_purchase",
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
 var x="https://api.bigcommerce.com/stores/"+input.auth.hash+"/v2/coupons";
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
  "code": input.code,
  "name":input.name,
  "type":input.type,
  "amount": input.amount,
  "applies_to": {
                    "entity": "products",
                    "ids": [
                      input.ids
                    ]
                  },
                 "min_purchase" : input.min_purchase
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
