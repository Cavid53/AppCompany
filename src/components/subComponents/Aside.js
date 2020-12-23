import React, { useState } from "react";
import "../../assets/styles/aside.scss";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import ChatIcon from "../../assets/icons/chat.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import DealIcon from "../../assets/icons/deal.svg";
import TaskdIcon from "../../assets/icons/task.svg";
import EmailIcon from "../../assets/icons/email.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import Avatar from "../../assets/images/profile/avatar1.png";

const Aside = () => {
  const [person, setPerson] = useState({
    fullName: "Pasha Life",
    email: "pashalife@gmail.com",
  });
  const [menues, setMenues] = useState([
    {
      id: 1,
      icon: DashboardIcon,
      text: "Dashboard",
      classIcon: "dashboardIcon",
      classText: "dashboardText",
      alt: "dashboard",
    },
    {
      id: 2,
      icon: TaskdIcon,
      text: "Tasks",
      classIcon: "taskIcon",
      classText: "taskText",
      alt: "task",
    },
    {
      id: 3,
      icon: EmailIcon,
      text: "Email",
      classIcon: "emailIcon",
      classText: "emailText",
      alt: "email",
    },
    {
      id: 4,
      icon: ContactIcon,
      text: "Contacts",
      classIcon: "contactIcon",
      classText: "contactText",
      alt: "contact",
    },
    {
      id: 5,
      icon: ChatIcon,
      text: "Chat",
      classIcon: "chatIcon",
      classText: "chatText",
      alt: "chat",
    },
    {
      id: 6,
      icon: DealIcon,
      text: "Deals",
      classIcon: "dealIcon",
      classText: "dealText",
      alt: "deal",
    },
  ]);
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
