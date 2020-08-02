import { useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { getPostsRequest } from '../redux/actions';
// eslint-disable-next-line no-unused-vars
import { PostsInit, Post, WatcherAction } from '../redux/types';

type HomeProps = {
  posts: Post[],
  getPostsRequest: () => WatcherAction
};

// eslint-disable-next-line no-shadow
const Home: React.FC<HomeProps> = ({ posts, getPostsRequest }) => {
  useEffect(() => {
    getPostsRequest();
  }, []);
  return (
    <div>
      <Head>
        <title>{ `${process.env.APP_NAME} | Home` }</title>
      </Head>
      { posts.map((post) => <h2 key={post.id}>{ post.title }</h2>) }
    </div>
  );
};

const mapStateToProps = (state): PostsInit => {
  const { posts } = state.posts;
  return { posts };
};

export default connect(mapStateToProps, { getPostsRequest })(Home);
