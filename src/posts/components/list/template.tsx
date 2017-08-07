import * as React from 'react'
import {List} from 'semantic-ui-react'
import {Post} from '../../graphql'
import {PostsListItem} from '../list-item'

/** Interfaces for PostsList component properties */
export namespace PostsList {
  /** Component data */
  export interface Data {
    posts: Post[]
  }
  /** Component actions */
  export interface Actions {
    selectPost(id: Post['id']): void
  }
  /** Component properties */
  export type Props = Data & Actions
}

/** Render list of posts */
export function PostsList({posts, selectPost}: PostsList.Props) {
  return <List divided relaxed>{posts.map(createPostsListItem)}</List>

  function createPostsListItem(post: Post) {
    return <PostsListItem key={post.id} post={post} onClick={onClick} />

    function onClick() {
      selectPost(post.id)
    }
  }
}
