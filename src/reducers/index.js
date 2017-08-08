import { combineReducers } from 'redux';
import AdsReducer from './reducer_ads';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  ads: AdsReducer,
  form: formReducer,
  login: LoginReducer
});
export default rootReducer;
