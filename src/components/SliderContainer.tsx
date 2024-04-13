import { useState } from "react";
import image1 from "../assets/slider1.jpg";
import image2 from "../assets/slider2.jpg";
import image3 from "../assets/slider3.jpg";
import image4 from "../assets/slider4.jpg";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const images = [
  { id: 1, path: image1, alt: "image 1" },
  { id: 2, path: image2, alt: "image 2" },
  { id: 3, path: image3, alt: "image 3" },
  { id: 4, path: image4, alt: "image 4" },
];

const sliderInfo = {
  prev: 4,
  current: 1,
  next: 2,
};

export default function SliderContainer() {
  const [showingImage, setShowingImage] = useState(1);

  function slideImage(method: string) {
    if (method == "prev") {
      if (sliderInfo.current - 1 <= 0) {
        sliderInfo.current = 4;
      } else {
        sliderInfo.current -= 1;
      }
    }

    if (method == "next") {
      if (sliderInfo.current + 1 > 4) {
        sliderInfo.current = 1;
      } else {
        sliderInfo.current += 1;
      }
    }

    setShowingImage(sliderInfo.current);
  }

  return (
    <div className="z-10 w-full h-96 my-9 rounded-md overflow-hidden relative shadow-md">
      {images.map((image) => (
        <div
          key={image.id}
          className={`${
            showingImage === image.id ? "block" : "hidden"
          } max-h-72`}
        >
          <img
            src={image.path}
            className="-z-10 h-full w-full object-cover absolute"
          />
          <div className="flex absolute justify-between items-center w-full h-full">
            <button
              onClick={() => slideImage("prev")}
              name="prev"
              className="z-20 absoulte left-0 pl-5 h-full text-4xl opacity-15 hover:opacity-100 transform hover:scale-125 transition-all duration-500 ease-in-out hover:bg-carouselFadingLeft hover:translate-x-1"
            >
              <BiChevronLeftCircle className="" />
            </button>
            <button
              onClick={() => slideImage("next")}
              name="next"
              className="z-20 absoulte right-0 pr-5 h-full text-4xl opacity-15 hover:opacity-100 transform hover:scale-125 transition-all duration-300 ease-out hover:bg-carouselFadingRight hover:-translate-x-1"
            >
              <BiChevronRightCircle />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
