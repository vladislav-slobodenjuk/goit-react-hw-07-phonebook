import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://61f1c37d072f86001749f37f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const fetchResult = await axios.get('contacts');
      // console.log('fetchContacts', fetchResult);
      console.log('fetchContactsResult.data', fetchResult.data);

      // dispatch(fetchContactsSuccess(fetchResult.data));
      return fetchResult.data;
    } catch (error) {
      console.error(error);
      return error;
      // dispatch(fetchContactsError(error));
    }
  },
);

export const AddContact = createAsyncThunk(
  'contacts/addContact',
  async args => {
    const contact = { ...args };

    try {
      const postResult = await axios.post('contacts', contact);
      // console.log('postResult', postResult);
      console.log('postResult.data', postResult.data);

      // dispatch({
      //   type: 'contacts/addContactSuccess',
      //   payload: postResult.data,
      // });
      return postResult.data;
    } catch (error) {
      // dispatch({ type: 'contacts/addContactError', payload: error });
      console.error(error);
      return error;
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const deleteResult = await axios.delete(`contacts/${contactId}`);
      console.log('asyncDeleteContact', deleteResult);
      console.log('asyncDeleteContact.data', deleteResult.data.id);

      // dispatch(deleteContact(deleteResult.data.id));
      return deleteResult.data.id;
    } catch (error) {
      console.error(error);
      // dispatch(deleteContactError(error));
      return error;
    }
  },
);

// const asyncFetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const fetchResult = await axios.get('contacts');
//     console.log('fetchContacts', fetchResult);
//     console.log('fetchContactsResult.data', fetchResult.data);

//     dispatch(fetchContactsSuccess(fetchResult.data));
//     // return fetchResult.data;
//   } catch (error) {
//     console.error(error);
//     dispatch(fetchContactsError(error));
//   }
// };

// const asyncAddContact = args => async dispatch => {
//   const contact = {
//     // id: nanoid(8),
//     ...args,
//   };

//   dispatch({ type: 'contacts/addContactRequest' });

//   try {
//     const postResult = await axios.post('contacts', contact);
//     console.log('postResult', postResult);
//     console.log(postResult.data);

//     dispatch({
//       type: 'contacts/addContactSuccess',
//       payload: postResult.data,
//     });
//   } catch (error) {
//     dispatch({ type: 'contacts/addContactError', payload: error });
//     console.error(error);
//   }
// };

// const asyncDeleteContact = id => async dispatch => {
//   try {
//     const deleteResult = await axios.delete(`contacts/${id}`);
//     console.log('asyncDeleteContact', deleteResult);
//     console.log('asyncDeleteContact.data', deleteResult.data.id);

//     dispatch(deleteContact(deleteResult.data.id));
//   } catch (error) {
//     console.error(error);
//     dispatch(deleteContactError(error));
//   }
// };
