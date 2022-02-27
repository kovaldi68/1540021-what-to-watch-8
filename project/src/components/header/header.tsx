import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';

function Header({ children }: {children: any} ): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo />

      {children}

      <UserNav />
    </header>
  );
}

export default Header;
