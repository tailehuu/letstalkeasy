Template.status.helpers
  lastActivity: ->
    lastActivity = @lastActivity()
    if lastActivity?
      return relativeTime lastActivity
    else
      return "undefined"
  serverTime: -> new Date(TimeSync.serverTime()).toLocaleString()
  serverOffset: TimeSync.serverOffset
  serverRTT: TimeSync.roundTripTime

  # Falsy values aren't rendered in templates, so let's render them ourself
  isIdleText: -> @isIdle() || "false"
  isMonitoringText: -> @isMonitoring() || "false"

Template.status.events =
  "submit form.start-monitor": (e, tmpl) ->
    e.preventDefault()
    UserStatus.startMonitor
      threshold: tmpl.find("input[name=threshold]").valueAsNumber
      interval: tmpl.find("input[name=interval]").valueAsNumber
      idleOnBlur: tmpl.find("select[name=idleOnBlur]").value is "true"

  "click .stop-monitor": -> UserStatus.stopMonitor()
  "click .resync": -> TimeSync.resync()
