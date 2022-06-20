import { React, Component } from 'react';
import Image from './Image';

class UserProfile extends Component {
  render() {
    const { id, name, email, avatar } = this.props.user;
    return (
      <div>
        <p>Id: {id} // Name: {name} // Email: {email} // Avatar: <Image source={avatar}/></p>
      </div>
    )
  }
}

export default UserProfile;