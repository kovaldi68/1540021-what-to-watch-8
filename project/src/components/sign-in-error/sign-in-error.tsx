function SignInError(): JSX.Element {
  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form">
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
        <div className="sign-in__fields">
          <div className="sign-in__field sign-in__field--error">
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default SignInError;
