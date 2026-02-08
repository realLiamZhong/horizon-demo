import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import type { Swiper as TSwiper } from "swiper";
import type { IQuestionSegParam } from "@/types/question";
import ModalContentWithHeadshot from "./ModalContentWithHeadshot";
import ModalVideo from "./ModalVideo";
import "swiper/swiper.css";

export default function ModalSwiper({
  activeSwipeIdx,
  params,
  onSwipe
}: {
  activeSwipeIdx: number;
  params?: IQuestionSegParam[];
  onSwipe: (newStep: number) => void;
}) {
  if (!params || params.length === 0) return null;

  const swiperRef = useRef<TSwiper | null>(null);

  useEffect(() => {
    if (params && swiperRef.current) {
      const targetIndex = params.findIndex(p => p.step === activeSwipeIdx);
      if (targetIndex !== -1 && targetIndex !== swiperRef.current.activeIndex) {
        swiperRef.current.slideTo(targetIndex);
      }
    }
  }, [activeSwipeIdx, params]);

  return (
    <Swiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      onSlideChange={swiper => {
        const nextStep = params[swiper.activeIndex].step;
        onSwipe(nextStep);
      }}
      slidesPerView={1}
      spaceBetween={20}
      grabCursor={true}
    >
      {params?.map(p => (
        <SwiperSlide key={p.step}>{getPanelContent(p)}</SwiperSlide>
      ))}
    </Swiper>
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
