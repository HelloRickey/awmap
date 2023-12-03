import DefaultIcon from "../assets/treeicons/icon1.png";
import ArticleIcon from "../assets/treeicons/article.svg";
import WorldIcon from "../assets/treeicons/aworld.svg";
import BasicIcon from "../assets/treeicons/basic.svg";
import BookIcon from "../assets/treeicons/book.svg";
import CodeIcon from "../assets/treeicons/code.svg";
import GithubIcon from "../assets/treeicons/github.svg";
import NetworkIcon from "../assets/treeicons/network.svg";
import QuestionIcon from "../assets/treeicons/question.svg";
import ToolsIcon from "../assets/treeicons/tools.svg";
import ToolsIcon2 from "../assets/treeicons/tools2.svg";
import VideoIcon from "../assets/treeicons/video.svg";

import ECSIcon from "../assets/treeicons/ecs.svg";
import Dojo from "../assets/treeicons/dojo.svg";
import Mud from "../assets/treeicons/mud.png";
import Curio from "../assets/treeicons/curio.svg";
import Redstone from "../assets/treeicons/redstone.png";
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
            title: "What is an autonomous world? ",
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
                    title: "Mud Svelte Template",
                    link: "https://github.com/0xMugen/Mud-Svelte-template",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "MUD World Base",
                    link: "https://github.com/Digital-Avatars-and-Robotics/MUDxGodot",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "MUD x Godot",
                    link: "https://github.com/Digital-Avatars-and-Robotics/MUDxGodot",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "MUD Tokens",
                    link: "https://www.npmjs.com/package/mudtokens",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "MUD VRF",
                    link: "https://github.com/succinctlabs/mudvrf",
                    sub: [],
                  },                  {
                    icon: GithubIcon,
                    title: "MUD 2048",
                    link: "https://github.com/themetacat/MUD2048",
                    sub: [],
                  },
                ],
              },
              {
                icon: BookIcon,
                title: "Tutorials",
                link: "",
                sub: [
                  {
                    icon: VideoIcon,
                    title: "How we built MUD An On chain Kernel for Complex Applications",
                    link: "https://www.youtube.com/watch?v=gQzZyWw71bo&list=PLX8x7Zj6VeznJuVkZtRyKwseJdrr4mNsE",
                    sub: [],
                  },
                  {
                    icon: VideoIcon,
                    title: "MUD and Autonomous Worlds ~10 min",
                    link: "https://www.youtube.com/watch?v=Unfj6yN9wmA&t=12s",
                    sub: [],
                  },
                  {
                    icon: VideoIcon,
                    title: "Videos from our MUD Local event in NYC",
                    link: "https://www.youtube.com/playlist?list=PL_97Yn8lCzTIWvxyvWWTdawCcmfscJxF0",
                    sub: [],
                  },
                ],
              },
            ],
          },
          {
            icon: Dojo,
            title: "DOJO",
            link: "https://dojoengine.com/",
            sub: [
              {
                icon: ToolsIcon,
                title: "Tools",
                link: "",
                sub: [
                  {
                    icon: GithubIcon,
                    title: "Eternum",
                    link: "https://github.com/BibliothecaDAO/eternum",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "PixeLAW Core",
                    link: "https://github.com/pixelaw/core",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "Dojo Starter Unity",
                    link: "https://github.com/dojoengine/dojo-starter-unity",
                    sub: [],
                  },
                ],
              },
              {
                icon: BookIcon,
                title: "Tutorials",
                link: "",
                sub: [
                  {
                    icon: ArticleIcon,
                    title: "Dive into the Dojo system",
                    link: "https://hackmd.io/@wongssh/r1wY1cexp",
                    sub: [],
                  }
                ],
              },
            ],
          },
          {
            icon: Curio,
            title: "Curio",
            link: "https://github.com/curio-research/keystone",
            sub: [],
          },
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
