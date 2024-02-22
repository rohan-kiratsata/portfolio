import { PiHouse, FaTwitter, FaGithub, FaEnvelope } from "@/utils/iconImports";
import { CardProps } from "@/types/index";

export const socials = [
  {
    name: "Twitter",
    href: "https://x.com/rohan_jpeg",
    icon: <FaTwitter />,
    color: "#1D9CEB",
  },
  {
    name: "GitHub",
    href: "https://github.com/rohan-kiratsata",
    icon: <FaGithub />,
  },
];

export const navbarItems = [
  {
    icon: <PiHouse />,
    link: "/work",
    title: "Work",
    kbd: "1",
    caption: "Some of my selected work",
  },
  {
    icon: <PiHouse />,
    link: "/about",
    title: "About",
    kbd: "2",
    caption: "What i'm bout?",
  },
  {
    icon: <PiHouse />,
    link: "/labs",
    title: "Labs",
    kbd: "3",
    caption: "Making things for fun",
  },
  {
    icon: <PiHouse />,
    link: "/tsi",
    title: "That's so Interesting",
    kbd: "4",
    caption: "Bunch of interesting things I found on the web",
  },
  {
    icon: <PiHouse />,
    link: "/resources",
    title: "Resources",
    kbd: "5",
    caption: "List of resources I curated in my free time",
  },
  {
    icon: <PiHouse />,
    link: "/contact",
    title: "Contact",
    kbd: "/",
    caption: "Get in touch",
  },
];

export const onboardingContent: CardProps[] = [
  {
    id: 1,
    text: "Use keyboard shortcuts 1 - 5 to navigate through pages and press ~ to come back to home.",
  },
  {
    id: 2,
    text: "My name's Rohan - full stack developer based in India.",
  },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
];
