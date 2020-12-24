import React from "react";
import "../../assets/styles/userData.scss";
import { Tabs, Tab } from "react-bootstrap";
import CloseIcon from "../../assets/images/close.png";

const UserData = () => {
  return (
    <div className="user-data">
      <div className="container">
        <div className="row">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Şəxsi informasiya">
              <p className="head-text">Şəxsi informasiya</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate harum, labore sapiente aspernatur facilis deserunt
                facere eaque tempora perspiciatis earum aperiam eveniet sit
                voluptatum vitae modi quisquam accusantium totam alias!
              </p>
            </Tab>
            <Tab eventKey="profile" title="Struktur əsasnaməsi">
              <p className="head-text">Struktur əsasnaməsi</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate harum, labore sapiente aspernatur facilis deserunt
                facere eaque tempora perspiciatis earum aperiam eveniet sit
                voluptatum vitae modi quisquam accusantium totam alias!
              </p>
            </Tab>
            <Tab eventKey="contact" title="Vəzifə təlimatı">
              <p className="head-text">Vəzifə təlimatı</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate harum, labore sapiente aspernatur facilis deserunt
                facere eaque tempora perspiciatis earum aperiam eveniet sit
                voluptatum vitae modi quisquam accusantium totam alias!
              </p>
            </Tab>
          </Tabs>
          <div className="close-icon">
            <a href="/">
              <img src={CloseIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
