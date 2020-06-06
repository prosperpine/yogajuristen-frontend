import React, { useState } from 'react'
import styled from 'styled-components'
import { DayPickerRangeController } from 'react-dates'
import { START_DATE } from 'react-dates/constants'
import { Day } from './Day'
import eventsData from './events'


const Wrapper = styled.div`
  .CalendarDay__highlighted_calendar {
    background: #f7f8f6 !important;
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
  return (
    <Wrapper>
      <DayPickerRangeController
        focusedInput={focusedInput}
        // onFocusChange={handleFocusChange}
        // startDate={startDate}
        // endDate={endDate}
        // onDatesChange={setDates}
        daySize={100}
        // hideKeyboardShortcutsPanel
        renderDayContents={Day}
        isDayHighlighted={isDayHighlighted}
        enableOutsideDays
        firstDayOfWeek={1}
      />
    </Wrapper>
  )
}

export default EventCalendar