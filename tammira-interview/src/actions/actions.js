import {FETCH, NEW} from './types'

export function fetchPosts(){
  return function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => dispatch({
        type: FETCH,
        data: json
      }));
  }
}
export function newPost(post){
  return function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })
      .then(response => response.json())
      .then(json => dispatch({
        type: NEW,
        data: json
      }))
  }
}
