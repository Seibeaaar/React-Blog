import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  border-bottom: 1px solid lightgrey;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav__btn {
    padding: 20px 10px;
    transition: background-color ease .4s;
    &:hover {
      background-color: lightgrey;
    }
  }
`;

export default NavbarWrapper;
