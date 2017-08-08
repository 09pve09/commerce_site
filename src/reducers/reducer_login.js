import { LOGIN_USER } from '../actions';

export default function (state = {
  'login': null,
  redirect: false
}, action){
  switch(action.type){
  case LOGIN_USER:
      return { 'login': action.payload.login, redirect: true}
  default:
    return state;
  }
}
