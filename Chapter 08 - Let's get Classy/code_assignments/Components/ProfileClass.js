import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../Utils/constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        avatar_url: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(Github_API_User + Github_UserName, options);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileUserClass data={userInfo} />
          {/* Passing props data (full json data) from parent to child */}
        </div>
        <div className="repo-container">
          <h1 className="repo-title">
            Indian <em>🌶</em> <span>FireFlavours</span> App Repository
          </h1>
          <ProfileRepoClass followers={userInfo.followers} />
          {/* Passing props followers from parent to child */}
        </div>
      </div>
    );
  }
}

export default Profile;
