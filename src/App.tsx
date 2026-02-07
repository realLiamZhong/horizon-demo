import "./app.css";
import PagePart1 from "./parts/part-1/PagePart1";
import PagePart2 from "./parts/part-2/PagePart2";
import PagePart3 from "./parts/part-3/PagePart3";

function App() {
  return (
    <>
      {/* WRAPPER is fixed aspect ratio and centered:
            - Ratio: 9:16
            - Sizing: 100vh height, centered horizontally with margin 0 auto
        */}
      <section id="page-wrapper" className="root">
        <div id="page-content">
          {/* Header section: Title, with text "Choose a question" */}
          <PagePart1 />
          {/* Body: Scrollable question list */}
          <PagePart2 />
          {/* Footer: Decorative glowing and pulsing label (bottom-right) */}
          <PagePart3 />
        </div>
      </section>
    </>
  );
}

export default App;
