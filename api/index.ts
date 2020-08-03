import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Post } from '../redux/types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${process.env.BASE_API_URL}?_embed=comments&?_limit=20`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCurrentPost = async (id): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${process.env.BASE_API_URL}/${id}?_embed=comments`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const addNewPost = async (postData): Promise<Post> => {
  try {
    const { data } = await axios.post(process.env.BASE_API_URL, postData);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
