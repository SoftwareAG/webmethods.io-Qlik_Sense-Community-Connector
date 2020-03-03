module.exports = {

  name: "get_details_of_a_specific_collection",

  title: "Get Details Of A Specific Collection",

  description: "",
  version: "v1",

  input:{
    title: "Get Details Of A Specific Collection",
    type: "object",
    properties: {
      cid: {
        title: "Collection ID",
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
    var x="https://"+input.auth.tenant+"/api/v1/collections/"+input.cid;
  //  var x="https://nini.ap.qlikcloud.com/api/v1/reloads/5e5dfd7ef0e0240001f3251d";
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
               return output(null, {
           data: body
         });
             
           }
           output(body);
       
   });
  }

}
