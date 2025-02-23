import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Ana Sayfa</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Kişiler</NavLink>}
    </nav>
  );
}