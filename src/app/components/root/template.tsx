import * as React from 'react'
import {Container, Menu} from 'semantic-ui-react'
import styled from 'styled-components'
import {AppPage} from '../page'

// Container component
const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  flex: 1;
  overflow: auto;
`

/**
 * Render root component representing the entire application
 * @return Root component
 */
export function AppRoot() {
  return (
    <Layout>
      <Container>
        <Menu secondary>
          <Menu.Item header>Application</Menu.Item>
        </Menu>
      </Container>
      <Body>
        <AppPage />
      </Body>
    </Layout>
  )
}
