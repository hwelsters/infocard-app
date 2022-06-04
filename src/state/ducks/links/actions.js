import * as types from './types';

import LinkService from 'state/services/link.service';

export const getLinks = (profileId) => async (dispatch) => {
  try {
    dispatch({
      type: types.LINK_REQUEST,
    });
    const res = await LinkService.getLinks(profileId);
    dispatch({
      type: types.GET_LINKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.LINK_FAIL,
      payload: message,
    });
  }
};

export const getLink = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.LINK_REQUEST,
    });
    const res = await LinkService.getLink(id);
    dispatch({
      type: types.GET_LINK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.LINK_FAIL,
      payload: message,
    });
  }
};

export const createLink = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.LINK_REQUEST,
    });
    const res = await LinkService.create(data);

    dispatch({
      type: types.CREATE_LINK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.LINK_FAIL,
      payload: message,
    });
  }
};

export const updateLink = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: types.LINK_REQUEST,
    });
    const res = await LinkService.update(id, data);

    dispatch({
      type: types.UPDATE_LINK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.LINK_FAIL,
      payload: message,
    });
  }
};

export const deleteLink = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.LINK_REQUEST,
    });
    await LinkService.delete(id);
    dispatch({
      type: types.DELETE_LINK_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.LINK_FAIL,
      payload: message,
    });
  }
};
