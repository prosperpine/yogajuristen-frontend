import React, { useState, useRef } from "react";
import { QnA } from './QnA'


import styled from "styled-components";
import { EventCalendar } from './Calendar/EventCalendar';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'




export const Classes = () => {


  return (
    <div>
      <EventCalendar />
      <QnA />
    </div>
  )
}