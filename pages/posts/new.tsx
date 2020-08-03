import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { addNewPost } from '../../api';
import CreatePostWrapper from '../../styles/StyledCreatePost';

const NewPost = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const router = useRouter();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // To check if user completed all fields required
    if (title.trim() && body.trim()) {
      const newPost = {
        id: Date.now(),
        title,
        body,
        comments: [],
      };
      addNewPost(newPost);
      router.push('/');
    }
  };
  const handleTitle = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  };
  const handleBody = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target as HTMLTextAreaElement;
    setBody(value);
  };
  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Create new`}</title>
      </Head>
      <CreatePostWrapper>
        <h1>Create a new Post</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              className="post__form__item post__form__item--input"
              value={title}
              onChange={handleTitle}
            />
          </label>
          <label htmlFor="body">
            Post body:
            <textarea
              id="body"
              className="post__form__item post__form__item--textarea"
              value={body}
              onChange={handleBody}
            />
          </label>
          <button className="btn__submit" type="submit">
            Submit
          </button>
        </form>
      </CreatePostWrapper>
    </>
  );
};

export default NewPost;
