import { Slider } from "@base-ui/react";
import styles from "../PagePart2.module.css";

export default function ModalStepSlider({
  steps,
  activeStep,
  onStepChange
}: {
  steps: number;
  activeStep: number;
  onStepChange: (type: "jump", v?: number) => void;
}) {
  return (
    <Slider.Root
      defaultValue={1}
      min={0}
      max={steps}
      step={1}
      value={activeStep}
      onValueChange={v => onStepChange("jump", v)}
    >
      <Slider.Control className={styles["slider-control"]}>
        <Slider.Track className={styles["slider-track"]}>
          <Slider.Indicator className={styles["slider-indicator"]} />
          <Slider.Thumb aria-label="Steps" />
        </Slider.Track>
      </Slider.Control>
      <div className={styles["slider-step-num"]}>
        <span>{activeStep}</span>
        <span>/</span>
        <span>{steps}</span>
      </div>
    </Slider.Root>
  );
}
