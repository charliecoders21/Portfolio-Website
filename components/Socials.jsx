import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const socialSite = [
  {
    icons: <FaGithub />,
    path: "",
  },
  {
    icons: <FaLinkedin />,
    path: "",
  },
  {
    icons: <FaYoutube />,
    path: "",
  },
  {
    icons: <FaTwitter />,
    path: "",
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
