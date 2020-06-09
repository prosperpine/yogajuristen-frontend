import React from 'react';
import { Calendar } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = Calendar.momentLocalizer(moment)
moment.locale('en-GB');
Calendar.momentLocalizer(moment);

export const MyCalendar = () => {
  return (
    <div style={{ height: 700 }}>
      <Calendar
        events={[
          {
            'title': 'My event',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
          }
        ]}
        //localizer={localizer}
        step={60}
        view='week'
        views={['week']}
        min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
        max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
        date={new Date(2018, 0, 1)}
      />
    </div>

  )
}
