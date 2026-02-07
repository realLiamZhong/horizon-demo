import { RiInformationFill } from "@remixicon/react";
import styles from "./PagePart1.module.css";

export default function PagePart1() {
  return (
    <div className="page-part-1">
      <RiInformationFill color="white" className={styles["page-title-icon"]} />
      <h1 className={styles["page-title-text"]}>
        <span>Choose a question!</span>
      </h1>
    </div>
  );
}
