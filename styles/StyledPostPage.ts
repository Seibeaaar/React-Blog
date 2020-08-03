import styled from 'styled-components';

const PostPageWrapper = styled.div`
  .post__body {
    margin: 20px 0 20px 10px;
    line-height: 24px;
  }
  .comments__section {
    border-top: 1px solid lightgrey;
    padding-top: 20px;
    h3 {
      margin-bottom: 15px;
    }
    .comments__list {
      margin-left: 30px;
    }
    .comments__default {
      font-style: italic;
      margin-left: 10px;
    }
  }
`;

export default PostPageWrapper;
