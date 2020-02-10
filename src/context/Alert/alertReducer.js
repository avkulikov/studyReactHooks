import {ALERT_SHOW, ALERT_HIDE} from "../types";

const handlers = {
    [ALERT_SHOW]: (state, action) => action.payload,
    [ALERT_HIDE]: (state, action) => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}