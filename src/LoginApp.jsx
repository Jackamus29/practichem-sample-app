import React from 'react';

// data
import GravatarSource from './GravatarSource';
// components
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import SubmitButton from './components/SubmitButton';
import ProfileCard from './components/ProfileCard';

class LoginApp extends React.Component {
  constructor() {
    super();
    this.state = ({
      email: '',
      password: '',
      passwordStatus: '',
      emailStatus: '',
      submitButtonText: 'Log In',
      profileData: {},
    });

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setProfile = this.setProfile.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.gravatarSourceInstance = new GravatarSource(this.setProfile);
  }

  setEmail(emailEvent) {
    const emailAddress = emailEvent.target.value;
    this.setState({
      email: emailAddress,
      emailStatus: emailAddress !== '' ? '' : 'error',
    });
  }

  setPassword(password) {
    const re =
      /^(?=^.{8,128}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$\^\\\(\)%&_\-=+*\.,:;"'{}\[\]?| ]).*$/;
    const pw = password.target.value;
    this.setState({
      password: pw,
      passwordStatus: re.test(pw) ? 'success' : 'error',
    });
  }

  setProfile(profileObject) {
    this.setState({
      profileData: profileObject,
      submitButtonText: 'Log In',
    });
  }

  loginUser() {  // called by the PasswordInput and SubmitButton components
    if (this.state.passwordStatus === '') {  // if submitted with no pw, error
      this.setState({ passwordStatus: 'error' });
    }

    if (this.state.email === '') {  // if submitted with no email, error
      this.setState({ emailStatus: 'error' });
    }

    if (this.state.email !== '' && this.state.passwordStatus === 'success') {
        // authorized to make request
      this.setState({ submitButtonText: 'Logging In...' });
      this.gravatarSourceInstance.fetchProfile(this.state.email);
    }
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to my Practichem Sample!</h1>
        <h4>This app retrieves your Gravatar name and picture.</h4>
        <h5>It does not handle non-existing Gravatar emails.</h5>
        <div className="well">
          <EmailInput
            setEmail={this.setEmail}
            status={this.state.emailStatus}
          />
          <PasswordInput
            loginUser={this.loginUser}
            setPassword={this.setPassword}
            status={this.state.passwordStatus}
          />
          <SubmitButton
            loginUser={this.loginUser}
            label={this.state.submitButtonText}
          />
        </div>
        <div className="well">
          <ProfileCard profileData={this.state.profileData} />
        </div>
      </div>
    );
  }
}

export default LoginApp;
