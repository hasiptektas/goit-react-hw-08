import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <Formik
      
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className='gap-3'>
        <Field type="email" name="email" placeholder="Email" required />
        <Field type="password" name="password" placeholder="Şifre" required />
        <button style={{width: '100px', margin: '20px auto'}} type="submit">Giriş Yap</button>
      </Form>
    </Formik>
  );
}