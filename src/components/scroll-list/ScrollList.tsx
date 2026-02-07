import type { ReactNode } from "react";
import styles from "./ScrollList.module.css";
import useScrollList from "./use-scroll-list";

export default function ScrollList({ children }: { children: ReactNode }) {
  const { refScrollWrapper, refScrollContent, refScrollTrack, refScrollBar, onBarMouseDown, onTrackClick } =
    useScrollList();

  return (
    <div className={styles["scroll-wrapper"]} ref={refScrollWrapper}>
      <div className={styles["scroll-content"]} ref={refScrollContent}>
        {children}
      </div>
      <div className={styles["scroll-track-wrapper"]} ref={refScrollTrack} onClick={onTrackClick}>
        <div className={styles["scroll-track"]}>
          <div className={styles["scroll-bar"]} ref={refScrollBar} onMouseDown={onBarMouseDown} />
        </div>
      </div>
    </div>
  );
}
