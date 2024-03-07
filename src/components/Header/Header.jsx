import { useSelector } from "react-redux";
import "./Header.scss";
import { getNameObj } from "../../assets/functions";

const Header = () => {
  const widthVp = window.innerWidth;
  const email = useSelector((state) => state.auth.email);

  const { firstLetter, name } = getNameObj(email);

  const sample = (
    <>
      <p className="icon">
        <svg width="14" height="14">
          <use href="src/assets/pictures/sprite.svg#icon-trophy_mobile"></use>
        </svg>
      </p>
      <svg width="22" height="16">
        <use href="src/assets/pictures/sprite.svg#icon-logout-svg"></use>
      </svg>
    </>
  );

  return (
    <>
      <div className="header">
        <span className="logo">Questify</span>

        {widthVp <= 767 ? (
          <div className="mobileContainer">
            <span className="nameLetter">{firstLetter}</span>
            {sample}
          </div>
        ) : (
          <>
            <div className="iconContainer-min">
              <span className="nameLetter">{firstLetter}</span>
              <span className="nameWord">{name}</span>
            </div>
              <div className="iconContainer-max">
                {sample}
            </div>
          </>
        )}
      </div>

      <p className="logo">logo</p>
    </>
  );
};

export default Header;
