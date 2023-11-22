import React, { Component } from "react";
import lightModeIcon from "../../assets/lightMode.svg";
import darkModeIcon from "../../assets/darkMode.svg";
import twitter from "../../assets/twitter.svg";
import website from "../../assets/website.svg";

import testimg from "../../assets/logo.svg";
import rickey from "../../assets/rickey.png";
import github from "../../assets/github.svg"
import InfraData from "../../data/InfraData";
import Tree from "../Tree/Tree";
import ArticleData from "../../data/ArticleData.json";
import "./Hub.css";

class Hub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      selectedTab: 0,
      frameWorks: ["All", "MUD", "DOJO", "Others"],

      data: [
        {
          id: 12345678,
          parentId: null,
          label: "My parent node",
          items: [
            {
              id: 87654321,
              label: "My file",
              parentId: 12345678,
            },
          ],
        },
        {
          id: 56789012,
          parentId: 12345678,
          label: "My child node",
        },
      ],
    };
  }

  async componentDidMount() {
    if (
      localStorage.getItem("theme") == null ||
      localStorage.getItem("theme") == "light"
    ) {
      this.setState({
        theme: "light",
      });
      document.body.setAttribute("theme", "");
    } else {
      this.setState({
        theme: "dark",
      });
      document.body.setAttribute("theme", "dark");
    }
  }

  changeTheme = () => {
    console.log(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == null ||
      localStorage.getItem("theme") == "light"
    ) {
      this.setState({
        theme: "dark",
      });
      document.body.setAttribute("theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      this.setState({
        theme: "light",
      });
      document.body.setAttribute("theme", "");
      localStorage.setItem("theme", "light");
    }
  };

  changeFrameWorkTabs = (index) => {
    this.setState({
      selectedTab: index,
    });
  };

  render() {
    return (
      <div className="Hub">
        <div className="HubHeader">
          <div className="HubLogo">Logo</div>
          <ul className="HubNav">
            <li>Infras</li>
            <li>Games</li>
            <li>Maps</li>
            <li>Influencers</li>
            <li>Articles</li>
          </ul>
          <div className="changeTheme" onClick={this.changeTheme.bind(this)}>
            {this.state.theme == "dark" ? (
              <img src={darkModeIcon} width={32} />
            ) : (
              <img src={lightModeIcon} width={32} />
            )}
          </div>
        </div>
        <div className="HubBanner">
          <h1>Autonomous World Hub</h1>
          <h2>Everything about AW and fully on-chain games</h2>

          <div className="HubBannerSubmit">Submit</div>

          <a
            href="https://twitter.com/Web3Rickey"
            target="_blank"
            className="HubAuthor"
          >
            <span> Built by</span>
            <img src={rickey} width={20} />

            <span>Rickey</span>
          </a>
        </div>

        <div className="CategoryTitle">Infras</div>
        <div className="CategoryIntroduce">
          Layer2 Network, development framework, game engine.
        </div>
        <ul className="Infras">
          {InfraData.map((item, index) => (
            <li>
              <div className="Infra">
                <div className="InfraHeader">
                  <img src={item.icon} className="InfraImage" />
                  <div className="InfraName">{item.name}</div>
                </div>
                <p className="InfraDescription">
                  {item.description}
                </p>
              </div>
              <div className="InfraMenu">
                <div className="InfraMenuIcons">
                  <a href={item.twitter}>
                    <img src={twitter} width={22} />
                  </a>
                  <a href={item.website}>
                    <img src={website} width={22} />
                  </a>
                  {item.github!=""?(   <a href={item.github}>
                    <img src={github} width={22} />
                  </a>):(<span></span>)}
               
                </div>
                {/* <div className="InfraMenuMore">More</div> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="CategoryTitle">Games</div>
        <div className="CategoryIntroduce">Fully on-chain games.</div>
        <ul className="FrameWorkTabs">
          {this.state.frameWorks.map((item, index) => (
            <li
              key={index}
              className={
                this.state.selectedTab == index ? "FrameWorkTabsSelected" : ""
              }
              onClick={this.changeFrameWorkTabs.bind(this, index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="Infras">
          <li>
            <div className="Infra">
              <div className="InfraHeader">
                <img src={testimg} className="InfraImage" />
                <div className="InfraName">Cypher News</div>
              </div>
              <p className="InfraDescription">
                Redstone runs applications on an OP Stack chain optimized for
                games, autonomous worlds, and other ambitious onchain
                applications.
              </p>
            </div>
            <div className="InfraMenu">
              <div className="InfraMenuIcons">
                <a href="">
                  <img src={twitter} width={22} />
                </a>
                <a href="">
                  <img src={website} width={22} />
                </a>
              </div>
              <div className="InfraMenuMore">More</div>
            </div>
          </li>
        </ul>
        {/* <div className="CategoryTitle">Builders</div>
        <div className="CategoryIntroduce">Builders of autonomous world.</div>
        <div className="Builders">
          <ul className="BuildersProfile">
            <li>
              <div>
                <img src={avatar} width="100%" className="BuildersAvatar" />
              </div>
              <div></div>
            </li>
          </ul>
        </div> */}

        <div className="CategoryTitle">Maps</div>
        <div className="CategoryIntroduce">
          Roadmaps for becoming an autonomous world builder.
        </div>

        <Tree></Tree>

        <div className="CategoryTitle">Articles</div>
        <div className="CategoryIntroduce">
          Latest trends in the autonomous world.
        </div>
        <ul className="Articles">
          {ArticleData.map((item, index) => (
            <li>
              <p>
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </p>
              <a href={item.authorLink} target="_blank">
                {item.author}
              </a>
            </li>
          ))}
        </ul>

        <div className="Footer">
          <p>© 2023 AWhub</p>
        </div>
      </div>
    );
  }
}
export default Hub;
