import type { IQuestionSegParam } from "@/types/question";
import { useCallback, useState } from "react";

export default function useSliderSwiper() {
  const [steps, setSteps] = useState(1);
  const [activeStep, setActiveStep] = useState(1);

  const onQuestionChange = useCallback(
    (params: IQuestionSegParam[]) => {
      setSteps(params.length);
    },
    [setSteps]
  );

  const onStepChange = useCallback(
    (type: "last" | "next" | "jump", value?: number) => {
      setActiveStep(prev => {
        if (type === "last") {
          if (prev > 1) return prev - 1;
          else return 1;
        } else if (type === "next") {
          if (prev < steps) return prev + 1;
          else return steps;
        } else if (type === "jump") {
          if (!value) return 1;
          if (value >= 1 && value <= steps) {
            return value;
          }
        }
        return 1;
      });
    },
    [steps, setActiveStep]
  );

  return { steps, activeStep, onQuestionChange, onStepChange };
}
