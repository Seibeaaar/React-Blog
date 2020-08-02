import Link from 'next/link';
import NavbarWrapper from '../styles/StyledNavbar';

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <h1>Hello</h1>
      <Link href="/posts/new">
        <a className="nav__btn">Create a new post</a>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
