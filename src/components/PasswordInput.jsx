import React from 'react';

const PasswordInput = (props) => {
  function submit(event) {
    if (event.key === 'Enter') {
      props.setPassword(event);
      props.loginUser();
    }
  }

  function getInputClass() {
    if (props.status === '') {
      return 'form-group text-left';
    }
    return `form-group text-left has-${props.status} has-feedback`;
  }

  function getIconClass() {
    if (props.status === '') {
      return 'hidden';
    }
    if (props.status === 'success') {
      return 'glyphicon glyphicon-ok form-control-feedback';
    }
    return 'glyphicon glyphicon-remove form-control-feedback';
  }

  return (
    <div className={getInputClass()}>
      <label htmlFor="passwordInput">Password</label>
      <input
        id="passwordInput"
        type="password"
        className="form-control"
        onChange={props.setPassword}
        onKeyPress={submit}
      />
      <span
        className={getIconClass()}
        aria-hidden="true"
      />
      <span id="emailHelpText" className="help-block">
        Needs more than 8 characters and a special, a lowercase, and a uppercase character.
      </span>
    </div>
  );
};

PasswordInput.propTypes = {
  setPassword: React.PropTypes.func.isRequired,
  loginUser: React.PropTypes.func.isRequired,
  status: React.PropTypes.string.isRequired,
};

export default PasswordInput;
