import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className='d-flex gap-3 align-items-center justify-content-center'>
      <p className='m-0'>Hoş Geldiniz, <span className='fw-bold text-warning'>{user.name}</span></p>
      <button type="button" onClick={handleLogout}>
        Çıkış Yap
      </button>
    </div>
  );
}