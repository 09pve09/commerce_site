import _ from 'lodash';
import { FETCH_ADS, FETCH_SINGLE_AD, FETCH_MORE_ADS } from '../actions';


export default function (state = {}, action){
  switch(action.type){
  case FETCH_SINGLE_AD:
    const data_object = action.payload.data[0]
    return { ...state, [data_object.advertisement_id]: data_object };
  case FETCH_ADS:
    return _.mapKeys(action.payload.data, 'advertisement_id');
  case FETCH_MORE_ADS:
    return _.assign({}, state, _.mapKeys(action.payload.data, 'advertisement_id'));
  default:
    return state;
  }

}
