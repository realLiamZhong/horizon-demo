import type { IQuestion } from "@/types/question";
import imgHeadshotTonyGambling from "@/assets/imgs/img-headshot-tony-gambling.jpg";
import imgBrodyAlpha from "@/assets/imgs/img-brody-alpha-hpa.jpg";
import imgFortescueCaseStudy from "@/assets/imgs/img-fortescue-case-study.jpg";

/**
 * MOCK question list data source
 */
const QUESTIONS: IQuestion[] = [
  {
    id: 1,
    text: "What does net zero mean?",
    format: "video",
    desc: "Dr Cal Devney, Academic at CQUniversity, explains what net zero means.",
    url: "https://files.pcareer.com/q1-dr-devny.mp4"
  },
  {
    id: 2,
    text: "What is the net zero transformation?",
    format: "video",
    desc: "Dr Cal Devney, Academic at CQUniversity, explains what the net zero transformation is.",
    url: "https://files.pcareer.com/q2-dr-devny.mp4"
  },
  {
    id: 3,
    text: "What are some of the benefits the net zero transformation is bringing to your region?",
    format: "seg",
    params: [
      {
        step: 1,
        format: "video",
        url: "https://files.pcareer.com/q3-dr-devny.mp4",
        text: "Dr Cal Devney, Academic at CQUniversity, explains some of the benefits the transformation is bringing to Central Queensland."
      },
      {
        step: 2,
        format: "written",
        text: "Central Queensland has long been Queensland's Energy Powerhouse and will play a vital role in the State's transformation to net zero. Investments in infrastructure, including wind farms, solar farms, hydrogen and renewable aviation fuel across Central Queensland is seeing new employment opportunities for locals. The Central Queensland region is emerging as a leader in the Hydrogen industry due to Gladstone's ability to not only produce hydrogen, but export it through the Gladstone Port with a direct passage to Asia. ",
        headshot: {
          src: imgHeadshotTonyGambling,
          desc: "Tony Gambling, Director of Regional Development, Central and Western Queensland."
        }
      },
      {
        step: 3,
        format: "written",
        text: "In Rockhampton, Stanwell is developing a Future Energy Innovation and Training Hub to accelerate the energy transformation at the Stanwell Power Station. The Shire of Banana has been proactively working with over 13 renewable project proponents that would create 100 to 200 construction jobs per site, with an existing low unemployment rate this would require the construction of new residential housing which would further boost economic activity in the region. Central Queensland will continue to 'keep the lights on' as it transitions from Energy Powerhouse, to Renewable Energy Powerhouse.",
        headshot: {
          src: imgHeadshotTonyGambling,
          desc: "Tony Gambling, Director of Regional Development, Central and Western Queensland."
        }
      }
    ]
  },
  {
    id: 4,
    text: "What are some of the challenges the net zero transformation is bringing to your region?",
    format: "seg",
    params: [
      {
        step: 1,
        format: "video",
        url: "https://files.pcareer.com/q4-dr-devny.mp4",
        text: "Dr Cal Devney, Academic at CQUniversity, discusses some of the challenges of the transformation."
      },
      {
        step: 2,
        format: "written",
        text: "Growth in the renewables sector will see changes in the composition of the workforce, specifically creating new positions such as earthmoving, electricians, carpenters and joiners, plumbers, contractors, project and program administrators, and production managers. The Central Queensland region is currently experiencing a shortage of skilled workers and with the anticipated growth in the renewable sector this is expected to intensify. ",
        headshot: {
          src: imgHeadshotTonyGambling,
          desc: "Tony Gambling, Director of Regional Development, Central and Western Queensland."
        }
      },
      {
        step: 3,
        format: "written",
        text: "Proactive programs that aim to attract new trades people, upskill existing workers, developing employment pathways, and repurpose existing skills are working hard to address this issue. With growth in the sector there will also be growing pressure for additional housing and lifestyle facilities to support the needs to attract and retain the skilled workforce which are also being addressed.",
        headshot: {
          src: imgHeadshotTonyGambling,
          desc: "Tony Gambling, Director of Regional Development, Central and Western Queensland."
        }
      }
    ]
  },
  {
    id: 5,
    text: "What new projects are coming to the region?",
    format: "seg",
    params: [
      {
        step: 1,
        format: "video",
        text: "Dr Cal Devney, Academic at CQUniversity, discusses some of the new projects coming to Central Queensland.",
        url: "https://files.pcareer.com/q5-dr-devny.mp4"
      },
      {
        step: 2,
        format: "written",
        headshot: {
          src: imgHeadshotTonyGambling,
          desc: "Tony Gambling, Director of Regional Development, Central and Western Queensland."
        },
        text: "There are many significant energy transformation-related projects already under construction in Central Queensland. One of the more interesting projects on the drawing board is a self-contained solar panel recycling plant. As you may know rooftop solar panels (Photovoltaic) contain many expensive and recyclable components. This business will take end-of-life panels and strip them into their constituent parts so the expensive metals and rare earths in them can be re-used using a world-first proprietary technology…right here in CQ!"
      },
      {
        step: 3,
        format: "written",
        headshot: {
          src: imgBrodyAlpha,
          desc: "Alpha HPA"
        },
        text: "A global demand for the high-purity alumina essential for high-tech electronics industries – think LED lighting, semiconductors and lithium-ion batteries – is set to make pioneering company Alpha HPA a leading manufacturer at the centre of the net zero transformation. \nWhen its new 10ha state-of the-art Gladstone facility is operational in 2025, Alpha HPA will be one of the largest refineries of its kind in the world, producing an annual 10,000 tonnes of high-purity alumina and other products. Made using 100% renewable energy, those products will play a pivotal role in decarbonising supply chains in the push to net zero. And when its expansion is complete the project will have generated hundreds of local jobs, both permanent and in construction."
      },
      {
        step: 4,
        format: "written",
        headshot: {
          src: imgFortescueCaseStudy,
          desc: "Green Energy Manufacturing Centre"
        },
        text: "With the development of Fortescue's Green Energy Manufacturing Centre in Gladstone, the city is cementing its place as Australia's hydrogen capital – and the epicentre of a massive new industry capable of generating thousands of clean energy jobs. \nThe facility unveiled in April 2024 manufactures electrolysers, which use electricity to extract hydrogen from water. In the next phase of the development, up to 8,000 tonnes of green hydrogen – an increasingly sought-after commodity in the global shift to clean energy – will be produced annually for local and export markets. And in the process, the project will generate 240 construction jobs and 93 ongoing local operational jobs."
      }
    ]
  },
  {
    id: 6,
    text: "What does net zero mean for our local manufacturing industry?",
    format: "video",
    url: "https://files.pcareer.com/q6-dr-devny.mp4"
  },
  {
    id: 7,
    text: "What support is available to help local workers train and reskill?",
    format: "video",
    desc: "Dr Cal Devney, Academic at CQUniversity, discusses some of the impacts of net zero on the region's local manufacturing industry.",
    url: "https://files.pcareer.com/q7-dr-devny.mp4"
  },
  {
    id: 8,
    text: "I'm a student - how will net zero affect me?",
    format: "video",
    desc: "Dr Cal Devney, Academic at CQUniversity, explains the impact of net zero on students.",
    url: "https://files.pcareer.com/q8-dr-devny.mp4"
  }
];

export default QUESTIONS;
