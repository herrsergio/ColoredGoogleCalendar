function ColorEvents() {

  var today = new Date();
  
  //Start at monday
  var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
  if( day !== 1 )                // Only manipulate the date if it isn't Mon.
    today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
                                         //   multiplied by negative 24
  
  var nextweek = new Date();
  nextweek.setDate(nextweek.getDate() + 7);
  Logger.log(today + " " + nextweek);

  var calendars = CalendarApp.getAllOwnedCalendars();
  Logger.log("found number of calendars: " + calendars.length);
  
  var max=11;
  var min=1;

  for (var i=0; i<calendars.length; i++) {
    var calendar = calendars[i];
    var events = calendar.getEvents(today, nextweek);
    for (var j=0; j<events.length; j++) {
      var e = events[j];
      
      let random = Math.floor(Math.random()*(max-min+1)+min);
      
      e.setColor(random);
      
    }
  }
}
