import Link from 'next/link';
import NavbarWrapper from '../styles/StyledNavbar';

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Link href="/">
        <a>
          <h1>{ process.env.APP_NAME }</h1>
        </a>
      </Link>
      <Link href="/posts/new">
        <a className="nav__btn">Create a new post</a>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
