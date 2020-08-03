import styled from 'styled-components';

const PostWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 35px;
  .post__info {
    padding: 30px;
    h3 {
      margin-bottom: 10px;
      font-size: 24px;
    }
  }
  .post__comments {
    border-top: 1px solid lightgrey;
    margin-top: 15px;
    padding: 30px;
    .comments__count {
      font-weight: bold;
      margin-left: 10px;
    }
  }
`;

export default PostWrapper;
