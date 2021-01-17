const SET_USER = "SET_USER";
const RESET_USER = "RESET_USER";

const setUser = () => {
	return {
		type: SET_USER,
	};
};

const resetUser = () => {
	return {
		type: RESET_USER,
	};
};

export default setUser | resetUser;
