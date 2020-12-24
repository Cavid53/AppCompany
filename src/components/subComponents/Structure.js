import React, { useState } from "react";
import "../../assets/styles/structure.scss";
import DropDownCloseIcon from "../../assets/icons/dropdown1.svg";
import DropDownOpenIcon from "../../assets/icons/dropdown2.svg";
import EllipseIcon from "../../assets/icons/ellipse.svg";
import { structures } from "../../datas/structures";
import { Collapse } from "reactstrap";

const Structure = () => {
  const [items, setItems] = useState(structures);
  const [isOpen, setIsopen] = useState(false);

  const toggleDropdown = (item) => {
    item.isShown = !item.isShown;
    let newStructures = structures.filter((oldItem) => item.id !== oldItem.id);
    newStructures.push(item);
    newStructures.sort((a, b) => a.id - b.id);
    setItems(newStructures);
  };

  return (
    <div className="structure">
      <div className="head">
        <span>Struktur</span>
      </div>
      <div className="structure-list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className={item.structureText}>
                <span className={item.text}>{item.headText}</span>
              </div>
              <div className={item.structureOne}>
                <span className={item.one}>2222</span>
              </div>
              <div className={item.structureTwo}>
                <span className={item.two}>2222</span>
              </div>
              <div className={item.structureThree}>
                <span className={item.three}>2222</span>
              </div>
              <div className={item.structureFour}>
                <span className={item.four}>2222</span>
              </div>
              <div className="img-icon">
                <img
                  onClick={() => toggleDropdown(item)}
                  src={item.isShown ? DropDownOpenIcon : DropDownCloseIcon}
                  alt="close"
                />
              </div>
              <Collapse isOpen={item.isShown}>
                <ul
                  style={{ marginLeft: "-30px" }}
                  className="list-menu-active"
                >
                  <li>
                    <img className="mr-2" src={EllipseIcon} alt="ellipse" />
                    <span style={{ cursor: "pointer" }} className="desc">
                      Hüquq
                    </span>
                    <span className="num1">2222</span>
                    <span className="num2">2222</span>
                  </li>
                  <li>
                    <img className="mr-2" src={EllipseIcon} alt="ellipse" />
                    <span style={{ cursor: "pointer" }} className="desc">
                      Marketing
                    </span>
                  </li>
                  <li>
                    <img className="mr-2" src={EllipseIcon} alt="ellipse" />

                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsopen(!isOpen)}
                      className="desc"
                    >
                      İnvestisiya
                    </span>

                    <span className="num1">2222</span>
                    <span className="num2">2222</span>
                  </li>
                </ul>
                <Collapse isOpen={isOpen}>
                  <ul className="subPosition">
                    <li>
                      <span>- Strateji</span>
                    </li>
                    <li>
                      <span>- Strateji</span>
                    </li>
                    <li>
                      <span>- Strateji</span>
                    </li>
                  </ul>
                </Collapse>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Structure;
