import css from "./BackgroundPart.module.css";

const BackgroundPart = () => {
  const widthViewport = window.innerWidth;
  console.log("widthViewport    ", widthViewport);
  console.log("typeof widthViewport    ", typeof widthViewport);

  if (widthViewport <= 767)
    return (
      <>
        <img
          className={css.bcImg}
          src="src/assets/pictures/bgpic1.png"
          alt="bacgroundForm"
        />
        <img
          className={css.bcImg}
          src="src/assets/pictures/bgpic2.png"
          alt="bacgroundForm"
        />
      </>
    );
  else if (widthViewport >= 768 && widthViewport <= 1279)
    return (
      <>
        <img
          className={css.bcImgTablet1}
          src="src/assets/pictures/bgpic1_tablet.png"
          alt="bacgroundForm"
        />
        {/* <img
          className={css.bcImgTablet2}
          src="src/assets/pictures/bgpic2_tablet.png"
          alt="bacgroundForm"
        /> */}
      </>
    );
  else
    return (
      <>
        <img
          className={css.bcImgTablet1}
          src="src/assets/pictures/bgpic1_desktop.png"
          alt="bacgroundForm"
        />
        <img
          className={css.bcImgTablet2}
          src="src/assets/pictures/bgpic2_desktop.png"
          alt="bacgroundForm"
        />
      </>
    );
};

export default BackgroundPart;
