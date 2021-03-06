/*
  HomePage reducer to Handle Dispatched Actions && Update Store Information.
  The reducer takes care of our data. Using actions, we can
  update our application state. To add a new action,
  add it to the switch statement in the reducer function
*/

import { fromJS, toJS } from 'immutable';
import {
  ADD_COMMENT,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_ERROR,
  GET_COMMENTS_BY_POST_ID,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_ERROR
} from './constants';

export const initialState = fromJS({
  loadingPost: false,
  loadingComments: false,
  post: {},
  comments: [],
  postId: '',
});

const addCommentToLocalStorage = (postId, comment) => {
  let comments = localStorage.getItem('comments');

  if (comments && JSON.parse(comments)) {
    comments = JSON.parse(comments);
    if (comments[postId]) {
      comments[postId] = [comment].concat(comments[postId]);
    } else {
      comments[postId] = [comment];
    }
    localStorage.setItem('comments', JSON.stringify(comments));
  } else {
    comments = {};
    comments[postId] = [comment];
    localStorage.setItem('comments', JSON.stringify(comments));
  }
}

const getCommentsFromLocalStorage = (postId) => {
  if (!postId) {
    return [];
  }
  let comments = localStorage.getItem('comments');

  if (comments && JSON.parse(comments)) {
    comments = JSON.parse(comments);
    if (comments[postId]) {
      return comments[postId];
    }
  }
  return [];
}

function postPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      addCommentToLocalStorage(action.payload.postId, action.payload.comment);
      let comments = state.get('comments');
      console.log(comments);
      return state
        .update('comments', comments => comments.unshift(action.payload.comment));
    case GET_POST_BY_ID:
      return state.set('loadingPost', true);
    case GET_POST_BY_ID_ERROR:
      return state.set('loadingPost', false);
    case GET_POST_BY_ID_SUCCESS:
      return state
        .set('loadingPost', false)
        .set('post', fromJS(action.payload));
    case GET_COMMENTS_BY_POST_ID:
      return state
        .set('loadingComments', true)
        .set('postId', action.payload)
    case GET_COMMENTS_BY_POST_ID_ERROR:
      return state.set('loadingComments', false);
    case GET_COMMENTS_BY_POST_ID_SUCCESS:
      const localComments = getCommentsFromLocalStorage(state.get('postId'));
      return state
        .set('loadingComments', false)
        .set('comments', fromJS(localComments.concat(action.payload)));
    default:
      return state;
  }
}

export default postPageReducer;
