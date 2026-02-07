import { Tabs } from "@base-ui/react";
import styles from "../PagePart2.module.css";
import type { IQuestionSegParam } from "@/types/question";
import ModalContentWithHeadshot from "./ModalContentWithHeadshot";
import ModalVideo from "./ModalVideo";

export default function ModalSwiper({
  activeSwipeIdx,
  params
}: {
  activeSwipeIdx: number;
  params?: IQuestionSegParam[];
}) {
  if (!params) return null;
  return (
    <Tabs.Root
      className={styles["swiper-root"]}
      defaultValue={1}
      value={activeSwipeIdx}
    >
      {params?.map(p => (
        <Tabs.Panel
          key={p.step}
          className={styles["swipe-panel"]}
          value={p.step}
        >
          {getPanelContent(p)}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}

function getPanelContent(param?: IQuestionSegParam) {
  if (!param) return null;
  if (param.format === "written") {
    return (
      <ModalContentWithHeadshot
        headshotSrc={param.headshot?.src}
        desc={param.headshot?.desc}
        content={param.text}
      />
    );
  }
  if (param.format === "video") {
    return <ModalVideo src={param.url} desc={param.text} intergrated />;
  }
}
