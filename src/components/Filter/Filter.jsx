import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <input
        style={{width: '300px'}}
        type="text"
        placeholder="Kişileri Ara"
        onChange={handleChange}
      />
    </div>
  );
}