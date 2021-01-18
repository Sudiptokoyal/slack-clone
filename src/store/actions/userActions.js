const SET_USER = "SET_USER";

const setUser = (data) => {
	return {
		type: SET_USER,
		payload: data,
	};
};

export default setUser;
