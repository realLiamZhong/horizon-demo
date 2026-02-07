import type { ReactNode } from "react";

export interface IQuestion {
  id: number;
  text: string;
  desc?: string;
  format: "video" | "written" | "seg";
  url?: string;
  params?: IQuestionSegParam[];
}

export interface IQuestionSegParam {
  step: number;
  format: "video" | "written";
  headshot?: IQuestionHeadshot;
  text: string;
  url?: string;
}

export interface IQuestionHeadshot {
  src: string;
  desc: string;
}
