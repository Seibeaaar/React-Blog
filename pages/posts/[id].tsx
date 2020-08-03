import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { fetchCurrentPost } from '../../api';
import { Post, WatcherAction } from '../../redux/types';
import PostPageWrapper from '../../styles/StyledPostPage';

/*
Using server-side props here because post is being rendered, but data isn't fetched yet, so to avoid
that problem, we should fetch data props from server side
*/
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const post = await fetchCurrentPost(ctx.query.id.toString());
  return { props: { post } };
};

const PostPage: React.FC = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Post`}</title>
      </Head>
      <PostPageWrapper>
        <h1>{post.title}</h1>
        <p className="post__body">{post.body}</p>
        <div className="comments__section">
          <h3>Comments:</h3>
          {post.comments.length ? (
            <ul className="comments__list">
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          ) : (
            <span className="comments__default">No comments yet</span>
          )}
        </div>
      </PostPageWrapper>
    </>
  );
};

export default PostPage;
