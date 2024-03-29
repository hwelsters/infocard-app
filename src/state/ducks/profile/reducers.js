import * as types from './types';

const initialState = {};

export default function foo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.PROFILE_REQUEST:
      return {
        loading: true,
      };
    case types.PROFILE_FAIL:
      return {
        error: payload,
        loading: false,
      };
    case types.GET_PROFILE_SUCCESS:
      let profile = payload.isPersonal ? payload.personal : payload.business;
      return {
        user: payload,
        profile,
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        success: true,
      };
    case types.EXCHANGE_CONTACT_SUCCESS:
      return payload;
    case types.PROFILE_RESET:
      return {};
    default:
      return state;
  }
}
