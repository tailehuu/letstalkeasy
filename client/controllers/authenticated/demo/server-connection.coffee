Template.serverConnection.helpers
  connectionClass: -> if @idle then "warning" else "success"
  loginTime: ->
    return unless @loginTime?
    new Date(@loginTime).toLocaleString()
