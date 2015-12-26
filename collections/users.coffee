###
* Allow
###

Meteor.users.allow
  insert: ->
# Disallow user inserts on the client by default.
    false
  update: ->
# Disallow user updates on the client by default.
    false
  remove: ->
# Disallow user removes on the client by default.
    false

###
* Deny
###

Meteor.users.deny
  insert: ->
# Deny user inserts on the client by default.
    true
  update: ->
# Deny user updates on the client by default.
    true
  remove: ->
# Deny user removes on the client by default.
    true
