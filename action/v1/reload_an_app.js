module.exports = {

  name: "reload_an_app",

  title: "Reload An App",

  description: "",
  version: "v1",

  input:{
    title: "Reload An App",
    type: "object",
    properties: {
      aid: {
        title: "App ID",
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
    var x="https://"+input.auth.tenant+"/api/v1/reloads";
    var y= "Bearer "+input.auth.api_key;
     
       var options = {
         "method": "POST",
         "url": x,
         "headers": {
             "Accept": "application/json",
         "Content-Type": "application/json",
            "Authorization": y 
         },
         "body":
         {
           "appId": input.aid
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
           if (response.statusCode === 201) {
            return output(null, {
        data: body
      });
          
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
