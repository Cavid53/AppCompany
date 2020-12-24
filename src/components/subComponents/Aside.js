import React, { useEffect, useState } from "react";
import "../../assets/styles/aside.scss";
import SettingIcon from "../../assets/icons/setting.svg";
import Avatar from "../../assets/images/profile/avatar1.png";
import { listMenu } from "../../datas/menues.js";

const Aside = () => {
  const [person, setPerson] = useState({
    fullName: "Pasha Life",
    email: "pashalife@gmail.com",
  });
  const [menues, setMenues] = useState([]);
  useEffect(() => {
    setMenues(listMenu);
  }, []);
  return (
    <div className="aside">
      <div className="profile-info">
        <div className="img-profile">
          <img src={Avatar} alt="" />
        </div>
        <div className="profile-text">
          <p>{person.fullName}</p>
          <span>{person.email}</span>
        </div>
      </div>
      <div className="aside-menu">
        <ul>
          {menues.map((menu) => (
            <li key={menu.id}>
              <div className="icon-text">
                <img
                  src={menu.icon}
                  className={menu.classIcon}
                  alt={menu.alt}
                />
                <a href="./">
                  <span className={menu.classText}>{menu.text}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="line-aside"></div>
        <img src={SettingIcon} className="settingIcon" alt="setting" />
        <a href="./">
          <span className="settingText">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default Aside;
