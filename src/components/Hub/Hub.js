import React, { Component } from "react";
import lightModeIcon from "../../assets/lightMode.svg";
import darkModeIcon from "../../assets/darkMode.svg";
import twitter from "../../assets/twitter.svg";
import website from "../../assets/website.svg";

import testimg from "../../assets/logo.svg";
import rickey from "../../assets/rickey.png";
import github from "../../assets/github.svg";
import InfraData from "../../data/InfraData";
import Tree from "../Tree/Tree";
import ArticleData from "../../data/ArticleData.json";
import GameData from "../../data/GameData";
import "./Hub.css";

class Hub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      selectedTab: 0,
      frameWorks: ["All", "MUD", "Dojo", "Others"],
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
    var tabGames=[]
    if(index!=0){
      for(var item of GameData){
        console.log("item.engine",item.engine)
        if(item.engine==this.state.frameWorks[index]){
          tabGames.push(item)
        }
      }
    }else{
      tabGames=GameData;
    }
    this.setState({
      selectedTab: index,
      gameData:tabGames
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
            <li key={index}>
              <div className="Infra">
                <div className="InfraHeader">
                  <img src={item.icon} className="InfraImage" />
                  <div className="InfraName">
                    <a href={item.website} target="_blank">
                      {item.name}
                    </a>
                  </div>
                </div>
                <p className="InfraDescription">{item.description}</p>
              </div>
              <div className="InfraMenu">
                <div className="InfraMenuIcons">
                  <a href={item.twitter}>
                    <img src={twitter} width={22} />
                  </a>
                  <a href={item.website}>
                    <img src={website} width={22} />
                  </a>
                  {item.github != "" ? (
                    <a href={item.github}>
                      <img src={github} width={22} />
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
              <p className="GamesDescription">
              {item.description}
              </p>

              <div className="GameEngine"> {item.engine}</div>
              <div className="GamesMenu">
                <div className="GamesMenuIcons">
                  <a href={item.twitter} target="_blank">
                    <img src={twitter} width={22} />
                  </a>
                  <a href={item.website} target="_blank">
                    <img src={website} width={22} />
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
          <p>© 2023 AWhub</p>
        </div>
      </div>
    );
  }
}
export default Hub;
