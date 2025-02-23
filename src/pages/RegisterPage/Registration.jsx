import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function Registration() {
    return (
      <div className='w-50 mx-auto' style={{marginTop: '200px'}}>
        <h1>Kayıt Ol</h1>
        <RegistrationForm />
      </div>
    );
  }