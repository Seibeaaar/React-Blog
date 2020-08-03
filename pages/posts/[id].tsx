import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Head from 'next/head';
import { getPostByIdRequest } from '../../redux/actions';
import { Post, WatcherAction } from '../../redux/types';
import PostPageWrapper from '../../styles/StyledPostPage';

type PostPageProps = {
  post: Post;
  getPostByIdRequest: () => WatcherAction;
};

const PostPage: React.FC<PostPageProps> = ({ post, getPostByIdRequest }) => {
  const router = useRouter();
  useEffect(() => {
    getPostByIdRequest(router.query.id.toString());
  }, []);
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

const mapStateToProps = (state) => {
  const { post } = state.current;
  return { post };
};

export default connect(mapStateToProps, { getPostByIdRequest })(PostPage);
