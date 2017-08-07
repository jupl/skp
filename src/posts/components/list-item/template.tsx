import * as React from 'react'
import {List} from 'semantic-ui-react'
import {Post} from '../../graphql'

/** Interfaces for PostsListItem component properties */
export namespace PostsListItem {
  /** Component data */
  export interface Data {
    post: Post
  }
  /** Component actions */
  export interface Actions {
    onClick: React.EventHandler<React.MouseEvent<HTMLDivElement>>
  }
  /** Component properties */
  export type Props = Actions & Data
}

/** Render posts list item */
export function PostsListItem({post}: PostsListItem.Props) {
  return (
    <List.Item>
      <List.Content>
        <List.Header>{post.title}</List.Header>
        <List.Description>{post.author.name}</List.Description>
      </List.Content>
    </List.Item>
  )
}
