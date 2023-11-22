import DefaultIcon from "../assets/treeicons/icon1.png";
import ArticleIcon from "../assets/treeicons/article.svg"
import WorldIcon from "../assets/treeicons/aworld.svg"
import BasicIcon from "../assets/treeicons/basic.svg"
import BookIcon from "../assets/treeicons/book.svg"
import CodeIcon from "../assets/treeicons/code.svg"
import GithubIcon from "../assets/treeicons/github.svg"
import NetworkIcon from "../assets/treeicons/network.svg"
import QuestionIcon from "../assets/treeicons/question.svg"
import ToolsIcon from "../assets/treeicons/tools.svg"
import ToolsIcon2 from "../assets/treeicons/tools2.svg"
import VideoIcon from "../assets/treeicons/video.svg"

import ECSIcon from "../assets/treeicons/ecs.svg"
import Dojo from "../assets/treeicons/dojo.svg"
import Mud from "../assets/treeicons/mud.svg"
import Curio from "../assets/treeicons/curio.svg"
import Redstone from "../assets/treeicons/redstone.svg"
const TreeData = [
  {
    icon: WorldIcon,
    title: "Autonomous World",
    link: "",
    sub: [
      {
        icon: BasicIcon,
        title: "Basic",
        link: "",
        sub: [
          {
            icon: QuestionIcon,
            title: "What is an autonomous world?",
            link: "https://aw.network/",
            sub: [],
          },
          {
            icon: ECSIcon,
            title: "Entity Component System",
            link: "https://github.com/SanderMertens/ecs-faq",
            sub: [],
          },
        ],
      },
      {
        icon: CodeIcon,
        title: "Framework and engine",
        link: "",
        sub: [
          {
            icon: Mud,
            title: "MUD",
            link: "https://mud.dev/",
            sub: [
              {
                icon: ToolsIcon,
                title: "Tools",
                link: "",
                sub: [
                  {
                    icon: GithubIcon,
                    title: "Git",
                    link: "",
                    sub: [
                      
                    ],
                  }
                ],
              },              {
                icon: BookIcon,
                title: "Tutorials",
                link: "",
                sub: [
                  {
                    icon: ArticleIcon,
                    title: "Tutorials1",
                    link: "",
                    sub: [
                      
                    ],
                  }
                ],
              }
            ],
          },
          {
            icon: Dojo,
            title: "DOJO",
            link: "https://dojoengine.com/",
            sub: [],
          },{
            icon:Curio,
            title:"Curio",
            link:"https://github.com/curio-research/keystone",
            sub: [],
          }
        ],
      },
      {
        icon: NetworkIcon,
        title: "Network",
        link: "",
        sub: [
          {
            icon: Redstone,
            title: "RedStone",
            link: "https://redstone.xyz/",
            sub: [],
          },
        ],
      },
    ],
  },
];
export default TreeData;
