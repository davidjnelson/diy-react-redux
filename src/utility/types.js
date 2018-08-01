import ComponentType from 'react';
import type { Store } from 'redux';

export type Post = {
  id: string,
  saved: bool,
  title?: string,
  thumbnail?: string,
  link?: string,
  upvotes?: number,
  createdEpochSeconds?: number
}

export type ComponentWithStoreProp = ComponentType<{
  store: Store
}>;

export type ComponentWithAnyProps = ComponentType<{}>;

export type StandardDomEvent = (event: SyntheticInputEvent<EventTarget>) => void;

export type ProjectReduxState = {
  posts: {
    posts: Array<Post>,
    message: string
  },
  page: {
    selectedPage: string,
    sortBy: string
  }
}

export type Action = {
  type: string
}
