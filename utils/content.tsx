import { PiHouse, FaTwitter, FaGithub, FaEnvelope } from "@/utils/iconImports";
import {
  CardProps,
  ProjectCardProps,
  ProjectsContentProps,
} from "@/types/index";
import Link from "next/link";

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
  // {
  //   icon: <PiHouse />,
  //   link: "/labs",
  //   title: "Labs",
  //   kbd: "3",
  //   caption: "Making things for fun",
  // },
  // {
  //   icon: <PiHouse />,
  //   link: "/tsi",
  //   title: "That's so Interesting",
  //   kbd: "4",
  //   caption: "Bunch of interesting things I found on the web",
  // },
  {
    icon: <PiHouse />,
    link: "/blog",
    title: "Blog",
    kbd: "3",
    caption: "Inconsistent blogs on tech and philosophy",
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
    text: (
      <>
        <p>
          Use keyboard shortcuts 1 - 5 to navigate through pages and press ~ to
          come back to home.
        </p>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <p>
          My name&apos;s Rohan - full stack developer based in India. More{" "}
          <Link href="/about" className="text-white">
            about me -&gt;
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <p>
          Usually I keep exploring and curating new stuff,{" "}
          <Link href="/tsi" className="text-white">
            check them out -&gt;
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <p>
          How I built this website? <br />
          <Link href="https://x.com/rohan_jpeg" className="text-white">
            Twitter thread -&gt;
          </Link>
        </p>
      </>
    ),
  },
];

export const projectsContent: ProjectCardProps[] = [
  {
    onGoing: true,
    title: "Velocity Tools",
    description:
      "Hand curated resources for devs, designers and indie hackers to boost their workflow in a single chrome extension.",
    link: "https://velocitytools.xyz",
    year: "2023",
    category: "Chrome Extension",
    projectType: "Side project",
  },
  {
    onGoing: false,
    title: "Test",
    description:
      "Hand curated resources for devs, designers and indie hackers to boost their workflow in a single chrome extension.",
    link: "https://velocitytools.xyz",
    year: "2023",
    category: "Chrome Extension",
    projectType: "Side project",
  },
];
