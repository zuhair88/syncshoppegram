function postDataToWebhook(data){
  //get the values needed from the passed in json object
  var userName=data.checkout.customer.first_name;
  var userPlatform=data.platform;
  var userEmail=data.email;
  //url to your webhook
  var webHookUrl="https://webhost-shoppegram.free.beeceptor.com";
  
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload={
      "text": "Acuired new user",
      "attachments":[
        {
          "author_name": userName,
          "author_icon": "http://icons.iconarchive.com/icons/noctuline/wall-e/128/Wall-E-icon.png",
          "color": "#7CD197",
          "fields":[
              {
                "title":"Platform",
                "value":userPlatform,
                "short":true
              },
              {
                "title":"email",
                "value":userEmail,
                "short":true
              }
          ]

        }
    ]

  };
  
//register method called after data has been sent method is executed
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", webHookUrl,true);
  oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  oReq.send(JSON.stringify(myJSONStr));
}
//callback method after webhook is executed
function reqListener () {
  console.log(this.responseText);
}