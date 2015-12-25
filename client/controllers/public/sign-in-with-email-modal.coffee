# Rendered
Template.signInWithEmailModal.rendered = ->
  $('#sign-in-with-email').validate(
    rules:
      emailAddress:
        required: true
        email: true
      password:
        required: true
    messages:
      emailAddress:
        required: "Gonna need an email, there, friend!"
        email: "Is that a real email? What a trickster!"
      password:
        required: "Pop in a passwordarooni for me there, will ya?"
    submitHandler: ->
      createOrSignIn = Session.get 'createOrSignIn'

      user =
        email: $('[name="emailAddress"]').val()
        password: $('[name="password"]').val()

      if createOrSignIn == "create"
        Meteor.call 'validateEmailAddress', user.email, (error, response)->
          if error
            alert error.reason
          else
            if response.error
              alert response.error
            else
              Accounts.createUser(user, (error)->
                if error
                  alert error.reason
                else
                  $('.modal-backdrop').hide()
              )
      else
        Meteor.loginWithPassword(user.email, user.password, (error)->
          if error
            alert error.reason
          else
            $('.modal-backdrop').hide()
        )
  )

# Events
Template.signInWithEmailModal.events(
  'click .btn-create-account': ->
    Session.set 'createOrSignIn', 'create'

  'click .btn-sign-in': ->
    Session.set 'createOrSignIn', 'signin'

  'submit form': (e)->
    e.preventDefault()
)
