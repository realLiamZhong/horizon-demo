import styles from "./PagePart2.module.css";
import ModalSwiper from "./ui/ModalSwiper";
import ModalStepSlider from "./ui/ModalStepSlider";
import useSliderSwiper from "./use-swiper-slider";
import type { IQuestion } from "@/types/question";
import { useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export default function ModalSwiperWithStep({
  params
}: {
  params: IQuestion["params"];
}) {
  if (!params) return null;
  const { steps, activeStep, onQuestionChange, onStepChange } =
    useSliderSwiper();

  useEffect(() => {
    onQuestionChange(params);
  }, [params, onQuestionChange]);

  return (
    <div className={styles["modal-swiper-with-step"]}>
      <div className={styles["swiper-wrapper"]}>
        <button
          className={styles["swiper-op-btn"]}
          disabled={activeStep === 1}
          onClick={() => onStepChange("last")}
        >
          <RiArrowLeftSLine />
        </button>
        <ModalSwiper
          params={params}
          activeSwipeIdx={activeStep}
          onSwipe={v => onStepChange("jump", v)}
        />
        <button
          className={styles["swiper-op-btn"]}
          disabled={activeStep === steps}
          onClick={() => onStepChange("next")}
        >
          <RiArrowRightSLine />
        </button>
      </div>
      <ModalStepSlider {...{ steps, activeStep, onStepChange }} />
    </div>
  );
}
