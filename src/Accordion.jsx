import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Accordion({ title, desc, index, activeIndex, setActiveIndex }) {
  const handleClick = () => {
    // Menutup accordion jika sudah aktif, atau mengaktifkannya jika belum
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="content">
      <div onClick={handleClick} className="content-title">
        {title} {activeIndex === index ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </div>
      {activeIndex === index && <div>{desc}</div>}
    </div>
  );
}

export default Accordion;
