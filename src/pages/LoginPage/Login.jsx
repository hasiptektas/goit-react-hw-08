import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
    return (
      <div className='w-50 mx-auto' style={{marginTop: '200px'}}>
        <h1 style={{marginBottom: '30px'}}>Giriş Yap</h1>
        <LoginForm />
      </div>
    );
  }