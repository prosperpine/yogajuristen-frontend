import React, { memo } from 'react'
import styled from 'styled-components'
import { readableColor } from 'polished'
import moment from 'moment'
import flow from 'lodash/fp/flow'
import filter from 'lodash/fp/filter'
import sortBy from 'lodash/fp/sortBy'
import find from 'lodash/fp/find'
import takeRight from 'lodash/fp/takeRight'
import map from 'lodash/fp/map'
import last from 'lodash/fp/last'
import { memoize } from 'lodash'

import eventsData from './events'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`

const Number = styled.div`
  position: absolute;
  top: 8px;
  left: 4px;
`

const Event = styled.div`
  position: relative;
  z-index: 2;
  height: 16px;
  color: #333;
  background: #fec077;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 2px;
  margin-right: 2px;

  padding-left: 4px;

  font-size: 12px;
  text-align: left;
  line-height: 16px;

  ${({ green }) =>
    green &&
    `
    color: white;
    background: #0c6776;
  `}
`
const getEventForDay = memoize(day =>
  flow(
    filter(({ start, end }) => day.isBetween(start, end, 'day', '[]')),
    sortBy('start'),
    last
  )(eventsData)
)

const renderEventForDay = day => {
  const event = getEventForDay(day)
  if (!event) return null
  const { start, end, label, color, type } = event
  return (
    <Event>{label}</Event>

  )
}

export const Day = memoize(day => {
  return (
    <Wrapper>
      <Number>{day.format('D')}</Number>
      {renderEventForDay(day)}
    </Wrapper>
  )
})

