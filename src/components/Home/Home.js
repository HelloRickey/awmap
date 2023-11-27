import React, { Component } from "react";
import lightModeIcon from "../../assets/lightMode.svg";
import darkModeIcon from "../../assets/darkMode.svg";

import rickey from "../../assets/rickey.png";

import githubLight from "../../assets/github_light.svg";
import twitterLight from "../../assets/twitter_light.svg";
import websiteLight from "../../assets/website_light.svg";

import githubDark from "../../assets/github_dark.svg";
import twitterDark from "../../assets/twitter_dark.svg";
import websiteDark from "../../assets/website_dark.svg";

import InfraData from "../../data/InfraData";
import Tree from "../Tree/Tree";
import ArticleData from "../../data/ArticleData.json";
import GameData from "../../data/GameData";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logo_dark.svg";
import "./Home.css";

import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import menuLight from "../../assets/menu_light.svg";
import menuDark from "../../assets/menu_dark.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      selectedTab: 0,
      nav: ["Infras", "Games", "Maps", "Articles"],
      frameWorks: ["All", "MUD", "Dojo","Paima","Others"],
      gameData: GameData,
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
    var tabGames = [];
    if (index != 0) {
      for (var item of GameData) {
        console.log("item.engine", item.engine);
        if (item.engine == this.state.frameWorks[index]) {
          tabGames.push(item);
        }
      }
    } else {
      tabGames = GameData;
    }
    this.setState({
      selectedTab: index,
      gameData: tabGames,
    });
  };

  navScroll = (nav) => {
    const element = document.getElementById(nav);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="Hub">
        <div className="HubHeader">
          <div className="HubLogo">
            {this.state.theme == "light" ? (
              <img src={logo} width="100%" />
            ) : (
              <img src={logoDark} width="100%" />
            )}
          </div>
          <ul className="HubNav">
            {this.state.nav.map((item, index) => (
              <li key={index} onClick={this.navScroll.bind(this, item)}>
                {item}
              </li>
            ))}
          </ul>
          <div className="navButtons">
            <a
              className="navTwitter"
              href="https://twitter.com/awmap_xyz"
              target="_blank"
            >
              {this.state.theme == "dark" ? (
                <img src={twitterDark} width={24} />
              ) : (
                <img src={twitterLight} width={24} />
              )}
            </a>

            <div className="changeTheme" onClick={this.changeTheme.bind(this)}>
              {this.state.theme == "dark" ? (
                <img src={darkModeIcon} width={32} />
              ) : (
                <img src={lightModeIcon} width={32} />
              )}
            </div>

            <Menu
              align="end"
              gap={4}
              menuClassName={"navMenu"}
              menuButton={
                <div className="menu">
                  {this.state.theme == "light" ? (
                    <img src={menuLight} width={32} />
                  ) : (
                    <img src={menuDark} width={32} />
                  )}
                </div>
              }
            >
              {this.state.nav.map((item, index) => (
                <div
                  key={index}
                  className={"menuItem"}
                  onClick={this.navScroll.bind(this, item)}
                >
                  {item}
                </div>
              ))}
            </Menu>
          </div>
        </div>
        <div className="HubBanner">
          <h1>Autonomous World Map</h1>
          <h2>A curated list of AW and fully onchain games</h2>

          <a
            href="https://twitter.com/intent/tweet?text=Hey%20@awmap_xyz,%20please%20add%20it%20to%20the%20autonomous%20world%20map:"
            target="_blank"
            className="HubBannerSubmit"
          >
            Submit
          </a>
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

        <div className="CategoryTitle" id="Infras">
          Infras
        </div>
        <div className="CategoryIntroduce">
          Layer2 Network, development framework, game engine.
        </div>
        <ul className="Infras">
          {InfraData.map((item, index) => (
            <li key={index}>
              <div className="Infra">
                <div className="InfraHeader">
                  <img src={item.icon} className="InfraImage" />
              
                    {item.built != "" ? (
                    <div className="InfraName">
                    <a href={item.website} target="_blank">
                      {item.name}
                    </a>
                    <a className="InfraBuilt" href={item.built.link} target="_blank">
                        <img src={item.built.icon} width={18} />
                        &nbsp;
                        <div> Built by {item.built.name}</div>
                        
                      </a>
                    </div>
                    ) : (
                      <div className="InfraName">
                    <a href={item.website} target="_blank">
                      {item.name}
                    </a>
                  </div>
                    )}
                    
                          
                </div>
                <p className="InfraDescription">{item.description}</p>
              </div>

              <div className="InfraMenu">
                <div className="InfraMenuIcons">
                  <a href={item.twitter} target="_blank">
                    {this.state.theme == "light" ? (
                      <img src={twitterLight} width={22} />
                    ) : (
                      <img src={twitterDark} width={22} />
                    )}
                  </a>
                  <a href={item.website} target="_blank">
                    {this.state.theme == "light" ? (
                      <img src={websiteLight} width={22} />
                    ) : (
                      <img src={websiteDark} width={22} />
                    )}
                  </a>
                  {item.github != "" ? (
                    <a href={item.github} target="_blank">
                      {this.state.theme == "light" ? (
                        <img src={githubLight} width={22} />
                      ) : (
                        <img src={githubDark} width={22} />
                      )}
                    </a>
                  ) : (
                    <span></span>
                  )}
                </div>
                {/* <div className="InfraMenuMore">More</div> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="CategoryTitle" id="Games">
          Games
        </div>
        <div className="CategoryIntroduce">
          Fully onchain and playable games.
        </div>
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

        <ul className="Games">
          {this.state.gameData.map((item, index) => (
            <li key={index}>
              <div className="GamesHeader">
                <img src={item.icon} className="GamesImage" />
                <div className="GamesName">
                  <a href={item.website} target="_blank">
                    {item.name}
                  </a>
                </div>
              </div>
              <p className="GamesDescription">{item.description}</p>

              <div className="GameEngine"> {item.engine}</div>
              <div className="GamesMenu">
                <div className="GamesMenuIcons">
                  <a href={item.twitter} target="_blank">
                    {this.state.theme == "light" ? (
                      <img src={twitterLight} width={22} />
                    ) : (
                      <img src={twitterDark} width={22} />
                    )}
                  </a>
                  <a href={item.website} target="_blank">
                    {this.state.theme == "light" ? (
                      <img src={websiteLight} width={22} />
                    ) : (
                      <img src={websiteDark} width={22} />
                    )}
                  </a>
                </div>
                {/* <div className="InfraMenuMore">More</div> */}
              </div>
            </li>
          ))}
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

        <div className="CategoryTitle" id="Maps">
          Maps
        </div>
        <div className="CategoryIntroduce">
          Roadmaps for becoming an autonomous world builder.
        </div>

        <Tree></Tree>

        <div className="CategoryTitle" id="Articles">
          Articles
        </div>
        <div className="CategoryIntroduce">Classic and valuable articles.</div>
        <ul className="Articles">
          {ArticleData.map((item, index) => (
            <li key={index}>
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
          <p>© 2023 AW Map</p>
        </div>
      </div>
    );
  }
}
export default Home;
