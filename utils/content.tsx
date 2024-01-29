import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export const socials = [
  {
    id: "twitter",
    name: "Twitter",
    href: "https://x.com/rohan_jpeg",
    icon: <FaTwitter />,
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/rohan-kiratsata",
    icon: <FaGithub />,
  },
  {
    id: "email",
    name: "Email",
    href: "mailto:kiratsatarohan@gmail.com",
    icon: <FaEnvelope />,
  },
];

export const navbarItems = [
  {
    link: "/work",
    title: "Work",
    kbd: "1",
    caption: "Some of my selected work",
  },
  {
    link: "/about",
    title: "About",
    kbd: "2",
    caption: "What i'm bout?",
  },
  {
    link: "/labs",
    title: "Labs",
    kbd: "3",
    caption: "Making things for fun",
  },
  {
    link: "/tsi",
    title: "That's so Interesting",
    kbd: "4",
    caption: "Bunch of interesting things I found on the web",
  },
  {
    link: "/resources",
    title: "Resources",
    kbd: "5",
    caption: "List of resources I curated in my free time",
  },
  {
    link: "/contact",
    title: "Contact",
    kbd: "/",
    caption: "Get in touch",
  },
];
