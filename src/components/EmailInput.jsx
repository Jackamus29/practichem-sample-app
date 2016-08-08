import React from 'react';

const EmailInput = (props) => {
  function getInputClass() {
    if (props.status === '') {
      return 'form-group text-left';
    }
    return `form-group text-left has-${props.status} has-feedback`;
  }

  function getIconClass() {
    if (props.status === 'error') {
      return 'glyphicon glyphicon-remove form-control-feedback';
    }
    return 'hidden';
  }

  return (
    <div className={getInputClass()}>
      <label htmlFor="emailInput">Email</label>
      <input
        id="emailInput"
        className="form-control"
        type="email"
        onChange={props.setEmail}
      />
      <span
        className={getIconClass()}
        aria-hidden="true"
      />
      <span id="emailHelpText" className="help-block">
        Please enter a Gravatar email.
        If you don't have one, you can use mine: jwhite5672@gmail.com
      </span>
    </div>);
};

EmailInput.propTypes = {
  setEmail: React.PropTypes.func.isRequired,
  status: React.PropTypes.string.isRequired,
};

export default EmailInput;
