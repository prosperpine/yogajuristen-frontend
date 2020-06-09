import React, { useState } from 'react'
import styled from 'styled-components'
import { DayPickerRangeController } from 'react-dates'
import { START_DATE, END_DATE } from 'react-dates/constants'
import { Day } from './Day'
import eventsData from './events'
import moment from 'moment'

const Wrapper = styled.div`
  position: static;
  .CalendarDay__highlighted_calendar {
    background: #f7f8f6 !important;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:hover {
    border: 2px double #0c6776;
    color: inherit;
    background: none;
  }

  .CalendarDay__selected_span {
    border: 2px double #0c6776;
    color: inherit;
    background: none;
  }
`

const isDayHighlighted = day => {
  let isBlocked = false
  eventsData.forEach(({ start, end }) => {
    if (day.isBetween(start, end, 'day', '[]')) {
      isBlocked = true
    }
  })
  return isBlocked
}

export const EventCalendar = () => {
  const [focusedInput, setFocusedInput] = useState(START_DATE)
  const [{ startDate, endDate }, setDates] = useState({
    startDate: null,
    endDate: null,
  })

  const handleFocusChange = focusedInput => {
    setFocusedInput(focusedInput ? END_DATE : START_DATE)
  }

  return (
    <Wrapper>
      <DayPickerRangeController
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={setDates}
        daySize={100}
        hideKeyboardShortcutsPanel
        renderDayContents={Day}
        isDayHighlighted={isDayHighlighted}
        enableOutsideDays
        firstDayOfWeek={1}
      />
    </Wrapper>
  )
}

export default EventCalendar