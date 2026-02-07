import type { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css"

interface ButtonProps {
  children?: ReactNode;
  type?: HTMLButtonElement['type'];
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ children, type, style, onClick }: ButtonProps) {
  return (
    <button className={styles.btn} type={type || "button"} style={style} onClick={(e) => { if (!onClick) return; onClick(e) }}>
      {children}
    </button>
  )
}