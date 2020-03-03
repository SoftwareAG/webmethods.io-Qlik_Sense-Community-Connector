// Add your function in module.exports

module.exports = {

  "name":"collection",

  "label":"Collection",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},
	"search": true,
  "execute": function (input, options, output){
	var request = require("request");
	var x="https://"+input.auth.tenant+"/api/v1/collections";
    var y= "Bearer "+input.auth.api_key;
	   var options = {
		 "method": "GET",
		 "url": x,
		 "headers": {
			 "Accept": "application/json",
			 "Content-Type": "application/json",
		   "Authorization": y 
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
							 "value": String(element.id || element.appId )
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