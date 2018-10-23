import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
// import rates from './rateReducer';

export default combineReducers({
    form: reduxFormReducer
});