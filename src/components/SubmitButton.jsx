import React from 'react';

const SubmitButton = (props) =>
  (<div className="form-group">
    <button
      className="btn btn-primary"
      onClick={props.loginUser}
    >
      {props.label}
    </button>
  </div>);

SubmitButton.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
};

export default SubmitButton;
