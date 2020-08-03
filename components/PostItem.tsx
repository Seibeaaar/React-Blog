import { CommentItem } from '../redux/types';
import PostWrapper from '../styles/StyledPost';

type PostProps = {
  key: number,
  info: {
    id: number,
    title: string,
    body: string,
    comments: CommentItem[]
  }
}

const PostItem: React.FC<PostProps> = ({
  info: { title, body, comments },
}) => {
  return (
    <PostWrapper>
      <div className="post__info">
        <h3>{ title }</h3>
        <p>{ body }</p>
      </div>
      <div className="post__comments">
        Comments:
        <span className="comments__count">{ comments.length }</span>
      </div>
    </PostWrapper>
  );
};

export default PostItem;
