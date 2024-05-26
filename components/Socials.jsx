import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const socialSite = [
  {
    icons: <FaGithub />,
    path: "https://github.com/",
  },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/chintan-negi-ba1481242/",
  },
  {
    icons: <FaYoutube />,
    path: "https://www.youtube.com/",
  },
  {
    icons: <FaTwitter />,
    path: "https://x.com/",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialSite.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
