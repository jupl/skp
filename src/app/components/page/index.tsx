import * as React from 'react'
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'
import {State} from '../../reducer'
import {AppHomePage} from '../home-page'

interface Props {
  // tslint:disable-next-line:no-any
  Component: React.ComponentClass<any> | (() => React.ReactElement<any>)
}

/** Wrap app page component with data from store */
export const AppPage = connect(data)(function AppPage({Component}: Props) {
  return <Component />
})

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param props Wrapped component properties
 * @return Props to pass to component
 */
export function data({location: {type}}: State): Props {
  let Component: Props['Component']
  switch(type) {
  case 'APP_HOME_ROUTE':
    Component = AppHomePage
    break
  default:
    Component = () => <Container>404</Container>
    break
  }
  return {Component}
}
