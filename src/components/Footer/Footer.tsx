import * as S from "./styled";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  const themeColor = useSelector((state: RootState) => state.todos.themeColor);

  return (
    <S.Footer themeProp={themeColor}>
      <span>Popupsmart React Practicum</span>
      <a target="_blank" rel="noreferrer" href="https://github.com/emrebican">
        <FaGithubAlt />
        <b>emrebican</b>
      </a>
    </S.Footer>
  );
};

export default Footer;
