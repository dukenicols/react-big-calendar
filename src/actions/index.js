import { navigate } from '../utils/constants'

export const navigatePrevious = date => ({
  type: navigate.PREVIOUS,
  date,
})

export const navigateNext = date => ({
  type: navigate.NEXT,
  date,
})

export const navigateDefault = date => ({
  type: navigate.TODAY,
  date,
})
