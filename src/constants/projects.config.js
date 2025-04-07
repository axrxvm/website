import { Icons } from "@/components/ui/icons";
import { ExternalLink, Link, ArchiveIcon } from "lucide-react";

export const PROJECTS = [
  {
    title: "Giva Bot",
    href: "https://givabot.netlify.app/",
    dates: "2022",
    active: false,
    description:
      "A all-in-one feature packed multi-purpose bot with over 150+ commands in 16+ different categories including moderation,fun,utility,logging,verification and more",
    technologies: ["Node.js", "Javascript", "Discord.js", "MongoDB"],
    links: [
      {
        type: "Website",
        href: "https://givabot.netlify.app/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Invite",
        href: "https://dsc.gg/invite-givabot",
        icon: <Icons.email className="h-3 w-3" />,
      },
    ],
    image: "/projects/giva_bot.png",
    video: "",
  },
  {
    title: "AHFC",
    href: "https://npmjs.com/package/ahfc",
    dates: "March 2025 - Present",
    active: false,
    description:
      "Aarav HyperFortress Cipher (AHFC) is an high-performance file encryption tool built with modern cryptographic standards and a focus on usability, security, and flexibility.",
    technologies: ["Nodejs", "NPM", "argon2", "chalk", "cryptography"],
    links: [
      {
        type: "NPM",
        href: "https://npmjs.com/package/ahfc",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/axrxvm/ahfc",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/ahfc.png",
    video: "",
  },
  /*
  {
    title: ".",
    href: ".",
    dates: ".",
    active: false,
    description:
      ".",
    technologies: ["Node.js", "Javascript", "Discord.js", "MongoDB"],
    links: [
      {
        type: "Website",
        href: ".",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Invite",
        href: ".",
        icon: <Icons.email className="h-3 w-3" />,
      },
    ],
    image: "/projects/.png",
    video: "",
  },
  */
  {
    title: "AChat",
    href: "https://achat-0r7u.onrender.com/",
    dates: "2024 - Present",
    active: false,
    description:
      "A Real-Time chatting application with blazing fast speeds.",
    technologies: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Bootstrap"],
    links: [
      {
        type: "Website",
        href: "https://achat-0r7u.onrender.com/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/axrxvm/achat",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/achat.png",
    video: "",
  },
];

export const FREELANCE_PROJECTS = [
  {
    title: ".",
    role: ".",
    dates: "2000",
    location: "Remote",
    description: ".",
    image: "/images/professional/.",
    mlh: "#",
    archive: true,

    links: [
      {
        title: "Website",
        href: ".",
        icon: <Link className="h-3 w-3" />,
      },
      // {
      //   title: "Proof",
      //   href: "#",
      //   icon: <ExternalLink className="h-3 w-3" />,
      // },
    ],
  },
  
];
