import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Component from './TopBar'

import { getIsLoaded } from '../../Redux/selectors/table'

const selectors = createStructuredSelector({
  isLoaded: getIsLoaded,
})

export default connect(selectors, null)(Component)
