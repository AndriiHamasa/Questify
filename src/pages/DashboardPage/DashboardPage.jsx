import css from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";
import ReactModal from "react-modal";
import { useState } from "react";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={css.dashBoardContainer}>
      <Header />
      <h1>Dashboard</h1>

      <button className={css.addTaskButton} onClick={handleOpenModal}>
        <svg width="15.2" height="15.2">
          <use href="src/assets/pictures/sprite.svg#icon-plus"></use>
        </svg>
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleOpenModal}
        // className={{
        //   base: "modal-fade",
        //   afterOpen: "modal-fade-enter",
        //   beforeClose: "modal-fade-exit",
        // }}
        style={{
          overlay: {
            // width: "300px",
            // backgroundColor: "rgba(255, 255, 255, 0.5)",
            
            backgroundColor: "rgba(200, 200, 200, 0.5)",
            backdropFilter: "blur(2px)",
          },
          content: {
            width: "30vw",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <p>Modal content</p>
      </ReactModal>
    </div>
  );
};

export default DashboardPage;
