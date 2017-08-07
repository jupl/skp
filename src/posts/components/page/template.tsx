import * as React from 'react'
import {Container, Header} from 'semantic-ui-react'
import {PostsList} from '../list'

/**
 * Render home page component
 * @return Home page component
 */
export function PostsPage() {
  return (
    <Container>
      <Header>Hello, posts</Header>
      <PostsList />
    </Container>
  )
}
