import React, { useState } from "react";
import "../../assets/styles/card.scss";
import ShowIcon from "../../assets/icons/show.svg";
import MailIcon from "../../assets/icons/mail.svg";


const AppCard = (props) => {
  let isOpen = props.isOpen;
  console.log(props);
  return (
    <div className="card-section">
     
       
      <div className="app-card">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="back-image"></div>
            </div>
            <div className="col-md-10">
              <div className="person-data">
                <p className="name">Bashirov Cavid</p>
                <p className="email">bashirovcavid@gmail.com</p>
                <ul>
                  <li className="first">2222</li>
                  <li className="second">2222</li>
                  <li className="third">2222</li>
                  <li className="fourth">2222</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="position-role">
                <ul>
                  <li>
                    <p className="structure">Struktur</p>
                    <p className="structureName">Marketing</p>
                  </li>
                  <li>
                    <div className="line"></div>
                  </li>
                  <li>
                    <p className="roleName">Vəzifə</p>
                    <p className="role">Direktor</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="get-profile">
                {!isOpen ? (
                  <div className="show-profile">
                    <a href="/CardDetails">
                      <img className="show-icon" src={ShowIcon} alt="show" />
                      <span className="show">Bax</span>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                <div className={!isOpen ? "send-mail" : "send-mail-active"}>
                  <a href="./">
                    <img className="mail-icon" src={MailIcon} alt="mail" />
                    <span className="mail">Mail at</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
