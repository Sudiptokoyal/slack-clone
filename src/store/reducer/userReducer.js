const initialState = {
	user: null,
};

const userReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case "SET_USER":
			return {
				...state,
				user: actions.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
