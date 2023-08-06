import { FunctionComponent } from "react";
import styles from "./Login_Page.module.css";
import Button from '@mui/material/Button';

const Login_Page: FunctionComponent = () => {
  return (<div className={styles.loginPageParent}>
    <div className={styles.loginPage}>
    <div className={styles.loginPageItem} />
  <div className={styles.loginPageInner} />
  <div className={styles.password}>Password</div>
  <div className={styles.lineDiv} />
  <div className={styles.email}>Email</div>
  <a href="/">
    <div className={styles.signUp}>Sign up</div>
  </a>
  <a href = "/">
    <div className={styles.forgotPassword}>Forgot Password</div>
  </a>
  <div className={styles.loginPageChild1} />
  <div className={styles.welcomeBack}>Welcome Back</div>
  <div className={styles.signIn}>Sign in</div>
  <div className={styles.ellipseDiv} />
     <a href="http://endless.horse/">
      <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
     </a></div></div>)
}

export default Login_Page;