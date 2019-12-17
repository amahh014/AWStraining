// @flow

export type StateT = {
    data: Array<{}>,
    error: string,
    loading: boolean,
    status: string,
    nextToken: string
  }
  
  type ReadT = {
    type: 'READ',
    data: Array<{}>,
    nextToken: string
  }
  
  type SubscriptionT = {
    type: 'SUBSCRIPTION',
    obj: {}
  }
  
  type ErrorT = {
    type: 'ERROR',
    error: string
  }
  
  type LoadingT = {
    type: 'LOADING'
  }
  
  type CompleteT = {
    type: 'COMPLETE'
  }
  
  type DeleteT = {
    type: 'DELETE',
    obj: {
      id: string
    }
  }
  
  export type ActionT = SubscriptionT | ReadT | ErrorT | CompleteT | LoadingT | DeleteT