import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"

export default function useScrollList() {
  const refScrollWrapper = useRef<HTMLDivElement>(null);
  const refScrollContent = useRef<HTMLDivElement>(null);
  const refScrollTrack = useRef<HTMLDivElement>(null);
  const refScrollBar = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  /**
   * calc the track height and scrollbar position
   */
  function updateScrollBar() {
    const content = refScrollContent.current;
    const track = refScrollTrack.current;
    const bar = refScrollBar.current;

    if (!content || !track || !bar) return;

    const contentHeight = content.scrollHeight;
    const viewHeight = content.clientHeight;
    const trackHeight = track.clientHeight;

    // if we dont need a scroll bar, then hide it
    if (contentHeight <= viewHeight) {
      bar.style.height = "0px";
      return;
    }

    // 1. calc the height of the scrollbar (viewport height / content height) * track height
    const barHeight = Math.max((viewHeight / contentHeight) * trackHeight, 30);
    bar.style.height = `${barHeight}px`;

    // 2. calc the offset of the scrollbar
    const maxScrollTop = contentHeight - viewHeight;
    const scrollRatio = content.scrollTop / maxScrollTop;
    const maxBarTop = trackHeight - barHeight;
    const barTop = scrollRatio * maxBarTop;

    bar.style.transform = `translateY(${barTop}px)`;
  };

  useEffect(() => {
    const content = refScrollContent.current;
    if (!content) return;

    content.addEventListener('scroll', updateScrollBar);

    // use ResizeObserver to listen the resize of container
    // this fix the bug of scrollbar height when init, resize or load
    const resizeObserver = new ResizeObserver(() => {
      updateScrollBar();
    });

    resizeObserver.observe(content);
    // listen the inner container as well
    if (content.firstElementChild) {
      resizeObserver.observe(content.firstElementChild);
    }

    // async init calc, ensure run after dom render
    const timer = setTimeout(updateScrollBar, 0);

    return () => {
      content.removeEventListener('scroll', updateScrollBar);
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  /**
   * scroll list and move the scrollbar when dragging the scrollbar
   * @param e MouseEvent from React
   */
  function onBarMouseDown(e: ReactMouseEvent<HTMLDivElement>) {
    if (!refScrollContent.current) return;

    setIsDragging(true);
    setStartY(e.pageY);
    setStartScrollTop(refScrollContent.current.scrollTop);

    document.body.style.userSelect = 'none';
  };

  function onMouseMove(e: MouseEvent) {
    if (!isDragging || !refScrollContent.current || !refScrollTrack.current || !refScrollBar.current) return;

    const deltaY = e.pageY - startY;
    const trackHeight = refScrollTrack.current.clientHeight;
    const barHeight = refScrollBar.current.clientHeight;
    const contentHeight = refScrollContent.current.scrollHeight;
    const viewHeight = refScrollContent.current.clientHeight;

    const maxBarTop = trackHeight - barHeight;
    const maxScrollTop = contentHeight - viewHeight;

    const moveRatio = deltaY / maxBarTop;
    refScrollContent.current.scrollTop = startScrollTop + (moveRatio * maxScrollTop);
  };

  function onMouseUp() {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };


  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, startY, startScrollTop]);

  /**
   * jump to the right position when click the scroll track
   * @param e MouseEvent from React
   */
  function onTrackClick(e: ReactMouseEvent<HTMLDivElement>) {
    if (e.target === refScrollBar.current || !refScrollContent.current || !refScrollTrack.current) return;

    const rect = refScrollTrack.current.getBoundingClientRect();
    const clickPosition = (e.clientY - rect.top) / refScrollTrack.current.clientHeight;
    const contentHeight = refScrollContent.current.scrollHeight;

    refScrollContent.current.scrollTo({
      top: clickPosition * contentHeight - (refScrollContent.current.clientHeight / 2),
      behavior: 'smooth'
    });
  };

  return {
    refScrollWrapper,
    refScrollContent,
    refScrollTrack,
    refScrollBar,
    onBarMouseDown,
    onTrackClick
  }
}