import imgTouchScreen from "@/assets/imgs/touch-screen.png";
import styles from "./PagePart3.module.css";

export default function PagePart3() {
  return (
    <div className="page-part-3">
      <img className={styles["touch-screen-img"]} src={imgTouchScreen} />
    </div>
  );
}
