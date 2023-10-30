import { AiFillGithub } from "react-icons/ai";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/JuliaHolm">
            <AiFillGithub className="github-icon" />
            Julia
          </a>
        </li>
        <li>
          <a href="https://github.com/LauraLyckholm">
            <AiFillGithub className="github-icon" />
            Laura
          </a>
        </li>
        <li>
          <a href="https://github.com/smExlex">
            <AiFillGithub className="github-icon" />
            Susanne
          </a>
        </li>
        <li>
          <a href="https://github.com/AnnaRobertsson">
            <AiFillGithub className="github-icon" />
            Anna
          </a>
        </li>
      </ul>
    </footer>
  );
};
