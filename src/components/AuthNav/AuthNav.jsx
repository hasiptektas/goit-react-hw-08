import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className='d-flex gap-3 justify-content-center' >
      <NavLink style={{textDecoration: 'none', color: 'white'}} to="/register">Kayıt OL</NavLink>
      <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">Giriş Yap</NavLink>
    </div>
  );
}