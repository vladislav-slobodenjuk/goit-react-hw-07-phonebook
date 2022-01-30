import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import axios from 'axios';
axios.defaults.baseURL = 'https://61f1c37d072f86001749f37f.mockapi.io';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

const asyncFetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const fetchResult = await axios.get('contacts');
    console.log('fetchContacts', fetchResult);
    console.log('fetchContactsResult.data', fetchResult.data);

    dispatch(fetchContactsSuccess(fetchResult.data));
    // return fetchResult.data;
  } catch (error) {
    console.error(error);
    dispatch(fetchContactsError(error));
  }
};

const asyncAddContact = args => async dispatch => {
  const contact = {
    // id: nanoid(8),
    ...args,
  };

  dispatch({ type: 'contacts/addContactRequest' });

  try {
    const postResult = await axios.post('contacts', contact);
    console.log('postResult', postResult);
    console.log(postResult.data);

    dispatch({
      type: 'contacts/addContactSuccess',
      payload: postResult.data,
    });
  } catch (error) {
    dispatch({ type: 'contacts/addContactError', payload: error });
    console.error(error);
  }

  // dispatch();
};

const addContact = createAction('contacts/add', payload => ({
  payload: {
    id: nanoid(8),
    ...payload,
  },
}));
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const asyncDeleteContact = id => async dispatch => {
  try {
    const deleteResult = await axios.delete(`contacts/${id}`);
    console.log('asyncDeleteContact', deleteResult);
    console.log('asyncDeleteContact.data.id', deleteResult.data.id);

    dispatch(deleteContactSuccess(deleteResult.data.id));
  } catch (error) {
    console.error(error);
    dispatch(deleteContactError(error));
  }
};

const setContactsFilter = createAction('filter/set');

const actions = {
  asyncFetchContacts,
  fetchContactsSuccess,
  addContact,
  addContactSuccess,
  asyncAddContact,
  deleteContactSuccess,
  asyncDeleteContact,
  setContactsFilter,
};

export default actions;
