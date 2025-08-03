import { Component } from "react";
import {SiLinkedin,SiGithub,SiX} from "react-icons/si";
import { Github_Link,Twitter_Link,Linkedin_Link } from "../Utils/constants";

class SocialProfileClass extends Component {
    constructor(props) {
        super(props);
    }
     render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={Twitter_Link} className="icon-button twitter" target="_blank">
          <i>
            <SiX />
          </i>
        </a>
        <a href={Github_Link} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
