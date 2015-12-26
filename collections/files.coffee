Files = new (Meteor.Collection)('files')
Files.allow
  insert: ->
    false
  update: ->
    false
  remove: ->
    false
Files.deny
  insert: ->
    true
  update: ->
    true
  remove: ->
    true