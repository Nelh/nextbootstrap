(function () {
    // TODO: Replace with real events, say from server.
    var db_events = [
        {
            title: "Board members meeting",
            date: new Date().getTime(),
            link: "events.com/ev2"
        },
        {
            title: "Board members meeting",
            date: new Date().getTime() +(5*24*60*60*1000),
            link: "events.com/ev2"
        },
        {
            title: "Board members meeting",
            date: new Date().getTime() +(10*24*60*60*1000),
            link: "events.com/ev2"
        }
    ];

    $(document).ready(function(){
        $("#calendar-mini").MEC({
            calendar_link: "example.com/myCalendar",
            events: db_events
        });
    });
})()