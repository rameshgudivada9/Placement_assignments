import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  // console.log(props);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="first-row">
              <div className="image-div">
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  alt="profile"
                  className="imagecheck"
                />
              </div>
              <div className="names-div">
                <h5>Rick Sanchez</h5>
                <div className="con">
                  {" "}
                  <div className="marker"></div>
                  <h6>Alive-Human</h6>
                </div>
              </div>
            </div>
            <hr />
            <div className="second-row">
              <div className="second-row-first">
                <div className="detail-1">
                  <p>Gender</p>
                  <h6>Male</h6>
                </div>
                <div className="detail-2">
                  <p>Location</p>
                  <h6>Earth (C-137)</h6>
                </div>
              </div>
              <div className="second-row-second">
                <div className="detail-3">
                  <p>spicies</p>
                  <h6>Human</h6>
                </div>
                <div className="detail-4">
                  <p>origin</p>
                  <h6>Earth (C-137)</h6>
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
