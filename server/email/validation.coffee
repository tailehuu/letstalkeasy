Future = Npm.require('fibers/future');

Meteor.methods(
  validateEmailAddress: (address)->
    check(address,String)

    validateEmail = new Future()
    HTTP.call("GET", "https://api.kickbox.io/v1/verify",
      params:
        email: address
        apikey: "a8195083f2ae0f0209c01fddf89145d9e2f7311f87aaa8550b1e35a6f12cd752"
    ,(error,response)->
      if error
        validateEmail.return(error)
      else
        if response.data.result == "invalid" or response.data.result == "unknown"
          validateEmail.return(
            error: "Sorry, your email was returned as invalid. Please try another address."
          )
        else
          validateEmail.return(true)
    )
    validateEmail.wait()
)
