import axios from 'axios';

axios.defaults.baseURL = 'https://61f1c37d072f86001749f37f.mockapi.io';
axios.defaults.timeout = 2000;

export async function fetchContacts() {
  const url = `contacts`;
  try {
    const fetchResult = await axios.get(url);
    console.log('fetchContacts', fetchResult);

    return fetchResult.data;
  } catch (error) {
    console.error(error);
  }
}

export async function AddContactToBack(contact) {
  const url = `contacts`;
  try {
    const postResult = await axios.post(url, contact);
    console.log('AddContactToBack', postResult);

    return postResult.data;
  } catch (error) {
    console.error(error);
  }
}
