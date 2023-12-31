import React from "react";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">Logo</Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="contatos">Contatos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.login_button}>
          <button>
            <Link>Entrar</Link>
          </button>
        </div>

        <div className={styles.mobile_menu_icon}>
          {sidebar ? (
            <AiOutlineClose onClick={showSidebar} />
          ) : (
            <FaBars onClick={showSidebar} />
          )}
        </div>
      </nav>
      {sidebar && (
        <div className={styles.mobile_menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="contatos">Contatos</Link>
            </li>
          </ul>
          <div className={styles.login_button}>
            <button>
              <Link>Entrar</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
