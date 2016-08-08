import React from 'react';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
    };
  }

  render() {
    return (
      <div className={this.props.profileData.name ? 'container' : 'hidden'}>
        <img
          style={{ width: '200px', height: '200px' }}
          src={this.props.profileData.photos ? this.props.profileData.photos[0].value : ''}
          alt="Profile"
        />
        <span style={{ display: 'block' }}>
          {this.props.profileData.displayName}
        </span>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  profileData: React.PropTypes.object.isRequired,
};

export default ProfileCard;
