/*
  Action Methods to Handle the Dispatched actions and Connect to Reducers;
  Reducer <-> Store
*/

import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  FIND_USERS,
  FIND_USERS_ERROR,
  FIND_USERS_SUCCESS,
  FIND_POSTS,
  FIND_POSTS_ERROR,
  FIND_POSTS_SUCCESS,
} from './constants';

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function getPostsSuccess(payload) {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
}

export function getPostsError(payload) {
  return {
    type: GET_POSTS_ERROR,
    payload,
  };
}

export function findUsers(payload) {
  return {
    type: FIND_USERS,
    payload,
  };
}

export function findUsersSuccess(payload) {
  return {
    type: FIND_USERS_SUCCESS,
    payload,
  };
}

export function findUsersError(payload) {
  return {
    type: FIND_USERS_ERROR,
    payload,
  };
}

export function findPosts(payload) {
  return {
    type: FIND_POSTS,
    payload,
  };
}

export function findPostsSuccess(payload) {
  return {
    type: FIND_POSTS_SUCCESS,
    payload,
  };
}

export function findPostsError(payload) {
  return {
    type: FIND_POSTS_ERROR,
    payload,
  };
}
