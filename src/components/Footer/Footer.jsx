import { AiFillGithub } from "react-icons/ai";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/JuliaHolm" target="_blank">
            <AiFillGithub className="github-icon" alt="GitHub Icon for Julia" />
            Julia
          </a>
        </li>
        <li>
          <a href="https://github.com/LauraLyckholm" target="_blank">
            <AiFillGithub className="github-icon" alt="GitHub Icon for Laura" />
            Laura
          </a>
        </li>
        <li>
          <a href="https://github.com/smExlex" target="_blank">
            <AiFillGithub
              className="github-icon"
              alt="GitHub Icon for Susanne"
            />
            Susanne
          </a>
        </li>
        <li>
          <a href="https://github.com/AnnaRobertsson" target="_blank">
            <AiFillGithub className="github-icon" alt="GitHub Icon for Anna" />
            Anna
          </a>
        </li>
      </ul>
    </footer>
  );
};
