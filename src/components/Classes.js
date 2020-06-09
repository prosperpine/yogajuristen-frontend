import React, { useState, useRef } from "react";
import { QnA } from './QnA'
import { EventCalendar } from './Calendar/EventCalendar';
import styled from 'styled-components';


import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Section = styled.div`
position: static;
`

export const Classes = () => {
  return (
    <Section>
      <EventCalendar />

      <QnA />
    </Section>
  )
}