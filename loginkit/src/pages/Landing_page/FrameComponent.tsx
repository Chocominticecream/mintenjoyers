import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";
import { Outlet, Link } from "react-router-dom";

const FrameComponent: FunctionComponent = () => {
  return (
  <div>    
        <div className={styles.loginPageParent}>
        <div className={styles.loginPage}>
        <div className={styles.fetish}>Fetish</div>
        <img className={styles.loginPageChild} alt="" src="/line-2.svg" />
        {/*<link to url*/}
        {/*div*/}
        <a href="/login">
           <div className={styles.login}>Login</div>
        </a>

        <a href="/caption-image">
           <div className={styles.captionImage}>Caption Image</div>
        </a>
        
        <a href="/">
        <div className={styles.blog}>Blog</div>
        </a>

        <a href="/">
        <div className={styles.home}>Home</div>
        </a>

        <img
          className={styles.icons8Stripper641}
          alt=""
          src="/icons8stripper64-1@2x.png"
        />
        </div></div>
    <Outlet />
  </div>
  );
};

export default FrameComponent;
