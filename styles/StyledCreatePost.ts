import styled from 'styled-components';

const CreatePostWrapper = styled.div`
  h1 {
    margin-bottom: 15px;
  }
  .post__form__item {
    width: 50%;
    padding: 10px;
    margin: 5px 0 20px 0;
  }
  .post__form__item--textarea {
    min-height: 200px;
  }
  .btn__submit {
    border: none;
    border-radius: 5px;
    background-color: #2979ff;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color ease .4s;
    &:hover {
      background-color: #82b1ff;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default CreatePostWrapper;
