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

import Interview from "../assets/treeicons/interview.svg";
import Podcast from "../assets/treeicons/podcast.svg";
const MapData = [
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
                  },
                  {
                    icon: GithubIcon,
                    title: "MUD 2048",
                    link: "https://github.com/themetacat/MUD2048",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "Auto Chessia",
                    link: "https://github.com/HelheimLabs/autochessia",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "Sky Strife ",
                    link: "https://github.com/latticexyz/skystrife-public",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "UniMUD",
                    link: "https://github.com/emergenceland/UniMUD",
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
                    title:
                      "How we built MUD An On chain Kernel for Complex Applications",
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
                    title:
                      "Build an Onchain Game in One Hour with MUD ✧ alvarius ✧ Assembly 2023",
                    link: "https://www.youtube.com/watch?v=pla6wfWN7tE",
                    sub: [],
                  },
                  {
                    icon: VideoIcon,
                    title: "Autonomous Worlds Assembly 2023",
                    link: "https://www.youtube.com/playlist?list=PLZAxQO5qOAFYmP8T2pE-LihtVWbbgpCjR",
                    sub: [],
                  },
                  {
                    icon: ArticleIcon,
                    title: "MUD modules 101 (1/2) Installation",
                    link: "https://mirror.xyz/nakaj1ma.eth/2-EGTzoYly4bbfgIdXXGHBmYcWNnFuTHSrRpCTerlsI",
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
                  {
                    icon: GithubIcon,
                    title: "Dojo Unity",
                    link: "https://github.com/dojoengine/dojo.unity",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "PixeLAW 2048",
                    link: "https://github.com/themetacat/PixeLAW2048",
                    sub: [],
                  },
                  {
                    icon: GithubIcon,
                    title: "Starkane",
                    link: "https://github.com/amegakure-starknet/starkane",
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
                  },
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
      {
        icon: Podcast,
        title: "Podcast",
        link: "",
        sub: [
          {
            icon: Interview,
            title: "Meet the FOCGER @y77cao",
            link: "https://x.com/FOCGERS/status/1805689400795226606",
            sub: [],
          },
          {
            icon: Interview,
            title: "Meet the FOCGER @aloothero",
            link: "https://x.com/focgers/status/1798047655555367403?s=46",
            sub: [],
          },
          {
            icon: Interview,
            title: "Meet the FOCGER @raulonastool",
            link: "https://x.com/focgers/status/1813532584736935981?s=46",
            sub: [],
          },
          {
            icon: Interview,
            title: "Meet the FOCGER @ProofOfJoker",
            link: "https://x.com/focgers/status/1810709716936388675?s=46",
            sub: [],
          },
          {
            icon: Interview,
            title: "Meet the FOCGER @DarkosNightmare",
            link: "https://x.com/focgers/status/1808095311019102571?s=46",
            sub: [],
          },
        ],
      },
    ],
  },
];
export default MapData;
