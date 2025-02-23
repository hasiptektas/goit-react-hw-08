import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className='gap-3'>
        <Field type="text" name="name" placeholder="İsim" required />
        <Field type="email" name="email" placeholder="Email" required />
        <Field type="password" name="password" placeholder="Şifre" required />
        <button style={{width: '100px', margin: '20px auto'}} type="submit">Kayıt Ol</button>
      </Form>
    </Formik>
  );
}