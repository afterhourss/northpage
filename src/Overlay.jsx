import { IoMdClose } from "react-icons/io";
import Accordion from "./Accordion";
import { useState } from "react";

function Overlay({ hidden, style }) {
  const overlayContent = [
    {
      title: 'HTML,CSS,Javascript',
      desc: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript).'
    },
    {
      title: 'MERN Stack',
      desc: 'MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.'
    },
    {
      title: 'SASS',
      desc: 'SASS is a CSS pre-processor. It is used to process advanced CSS syntax before compiling and rendering the elements on the web page.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="overlay-container" style={style}>
      <div className="overlay-title">
        <div>i_do_web_programming</div>
        <span onClick={hidden}><IoMdClose /></span>
      </div>
      {overlayContent.map((content, contentIndex) => (
        <Accordion
          key={contentIndex}
          title={content.title}
          desc={content.desc}
          index={contentIndex}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
      <center>or another soon</center>
    </div>
  );
}

export default Overlay;
