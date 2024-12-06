import styles from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const IconeProps = {
  size: 24,
  color: "#fff",
};

export function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...IconeProps}/>
        <FaTwitter {...IconeProps}/>
        <FaInstagram {...IconeProps}/>
      </div>
      <span>Desenvolvido por vini dev</span>
    </footer>
  );
}
