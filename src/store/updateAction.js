const updateAction = (state, payload) => {
    return {
        ...state,
        application: {
            ...state.application,
            ...payload,
        },
    };
}

export default updateAction;