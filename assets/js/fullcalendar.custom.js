(function () {
/** full calendar */
var calendarEl = document.getElementById('calendar');
if (calendarEl) {
    document.addEventListener('DOMContentLoaded', function () {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: 'UTC',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            dayMaxEvents: true, // when too many events in a day, show the popover
            events: 'https://fullcalendar.io/demo-events.json?overload-day'
        });

        calendar.render();
    });
}
})()