import styles from "../PagePart2.module.css";

export default function ModalVideo({
  src,
  desc,
  type = "video/mp4",
  intergrated = false
}: {
  src?: string;
  desc?: string;
  type?: string;
  intergrated?: boolean;
}) {
  return (
    <div className={styles["video-wrapper"]} data-intergrated={intergrated}>
      <div className={styles["video-desc"]}>
        <span>{desc}</span>
      </div>
      <video controls width="100%">
        <source src={src} type={type} />
      </video>
    </div>
  );
}
