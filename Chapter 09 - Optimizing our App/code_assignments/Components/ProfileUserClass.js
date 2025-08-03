import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, avatar_url, bio} = this.props.data;
        return (
            <div className="profile-user-card">
                <img src={avatar_url} alt={name} className="profile-user-img" />
                <p className="profile-user-bio">{bio}</p>
                <SocialProfileClass />
            </div>
        );
    }
}

export default ProfileUserClass;