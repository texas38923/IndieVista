import './SignUpFormStyles.css';

function SignUpForm() {
  return (
    <div className='form-container'>
      <h1>Enter your details below:</h1>
      <form>
        <input placeholder='Name' />
        <input placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button>Sign-Up!</button>
      </form>
    </div>
  );
}

export default SignUpForm;
