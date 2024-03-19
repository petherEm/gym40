"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -80 },
  { name: "Class", target: "class", offset: -80 },
  { name: "Team", target: "team", offset: 0 },
  { name: "Prices", target: "prices", offset: -40 },
  { name: "Testimonial", target: "testimonial", offset: 0 },
  { name: "Blog", target: "blog", offset: 0 },
  { name: "Contact", target: "contact", offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && "active"}`}
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
