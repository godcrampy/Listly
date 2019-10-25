import { combineReducers } from "redux";

import actions from "../actions/actions";

const userReducer = (state = null, action) => {
	switch (action.type) {
		case actions.SET_USER:
			return action.payload;
		default:
			return state;
	}
};

const isUserSignedInReducer = (state = false, action) => {
	switch (action.type) {
		case actions.CHANGE_IS_USER_SIGNED_IN:
			return action.payload;
		default:
			return state;
	}
};

const allListsReducer = (state = [], action) => {
	switch (action.type) {
		case actions.CREATE_LIST:
			return [...state, action.payload];
		case actions.FETCH_LISTS:
			return action.payload;
		case actions.DELETE_LIST:
			return [...state].filter((_, index) => index != action.payload);
		default:
			return state;
	}
};

export default combineReducers({
	user: userReducer,
	isUserSignedIn: isUserSignedInReducer,
	allLists: allListsReducer
});
