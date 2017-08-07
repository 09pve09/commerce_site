import { combineReducers } from 'redux';
import AdsReducer from './reducer_ads';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  ads: AdsReducer,
  form: formReducer
});
export default rootReducer;
