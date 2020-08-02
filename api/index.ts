import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Post } from '../redux/types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${process.env.BASE_API_URL}?_embed=comments`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchPost = async (id): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${process.env.BASE_API_URL}/${id}?_embed=comments`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
