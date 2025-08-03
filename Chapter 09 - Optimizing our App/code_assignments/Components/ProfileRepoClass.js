import { Component } from "react";
import {
  Github_API_User,
  Github_Repository_Name,
  Github_UserName,
  options,
} from "../Utils/constants";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoInfo: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      Github_API_User + Github_UserName + "/repos",
      options
    );
    const json = await response.json();
    this.setState({
      repoInfo: json,
    });
  }

  render() {
    const { followers } = this.props; // accessing followers as props from parent class `ProfileClass`
    const [...repoList] = this.state.repoInfo;
    return (

      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => {
            return (
              <div key={repo.id}>
                <h1>
                  <a href={repo.html_url} target="_blank">{repo.name}</a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
                <a href={repo.html_url} target="_blank">
                  <div className="profile-repo-items">
                    <h3>
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </h3>
                  </div>
                </a>
              </div>
            );
          })}
      </div>    
    );
  }
}

export default ProfileRepoClass;