import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://61f1c37d072f86001749f37f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const fetchResult = await axios.get('contacts');

      return fetchResult.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
);

export const AddContact = createAsyncThunk(
  'contacts/addContact',
  async args => {
    const contact = { ...args };

    try {
      const postResult = await axios.post('contacts', contact);

      return postResult.data;
    } catch (error) {
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

      return deleteResult.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
);
