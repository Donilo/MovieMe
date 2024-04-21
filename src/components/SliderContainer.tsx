import { MouseEvent, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import image1 from "../assets/slider1.jpg";
import image2 from "../assets/slider2.jpg";
import image3 from "../assets/slider3.jpg";
import image4 from "../assets/slider4.jpg";
import image5 from "../assets/slider5.jpg";

const images = [
  { id: 1, path: image1, alt: "image 1" },
  { id: 2, path: image2, alt: "image 2" },
  { id: 3, path: image3, alt: "image 3" },
  { id: 4, path: image4, alt: "image 4" },
  { id: 5, path: image5, alt: "image 5" },
];

let sliderInfo = {
  prev: images.length,
  current: 1,
  next: 2,
};

export default function SliderContainer() {
  const [showingImage, setShowingImage] = useState(1);

  function calculateSliderImageEmitByBar(event: MouseEvent) {
    event.preventDefault();
    const id = Number(event.target.id);
    if (id - 1 == 0) {
      sliderInfo = {
        prev: images.length,
        current: 1,
        next: id + 1,
      };
    } else if (id == images.length) {
      sliderInfo = {
        prev: id - 1,
        current: id,
        next: 1,
      };
    } else {
      sliderInfo = {
        prev: id - 1,
        current: id,
        next: id + 1,
      };
    }
    setShowingImage(id);
  }

  function calculateSliderImageEmitByArrow(method: string) {
    if (method == "prev") {
      if (sliderInfo.current - 1 <= 0) {
        sliderInfo = {
          prev: 3,
          current: 4,
          next: 1,
        };
      } else {
        sliderInfo.current -= 1;
      }
    } else if (method == "next") {
      if (sliderInfo.current + 1 > images.length) {
        sliderInfo = {
          prev: 4,
          current: 1,
          next: 2,
        };
      } else {
        sliderInfo.current += 1;
      }
    }

    setShowingImage(sliderInfo.current);
  }

  return (
    <div className="z-10 w-full h-[36rem] my-9 rounded-lg overflow-hidden relative shadow-md dark:shadow-none shadow-slate-400 ">
      {images.map((image) => (
        <div
          key={image.id}
          className={`${
            showingImage === image.id ? "block" : "hidden"
          } max-h-72`}
        >
          <img
            src={image.path}
            className="-z-10 h-full w-full object-cover absolute c-transition"
          />
          <div className="flex absolute justify-between items-center w-full h-full">
            <button
              onClick={() => calculateSliderImageEmitByArrow("prev")}
              name="prev"
              className="btn-slider left-0 pl-5 hover:bg-carouselFadingLeft hover:translate-x-1"
            >
              <SlArrowLeft className="" />
            </button>
            <button
              onClick={() => calculateSliderImageEmitByArrow("next")}
              name="next"
              className="btn-slider right-0 pr-5 hover:bg-carouselFadingRight hover:-translate-x-1"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      ))}
      <div className="flex h-1 hover:h-2 absolute left-1/2 bottom-2 -translate-x-1/2 -translate-y-1/2 gap-2 opacity-50 hover:opacity-100 c-transition">
        {images.map((image) => (
          <button
            onClick={calculateSliderImageEmitByBar}
            id={String(image.id)}
            key={image.id}
            className={`${
              image.id === showingImage ? "w-7" : "w-3"
            } bg-gray-300 rounded cursor-pointer transition-all duration-150 ease-out`}
          ></button>
        ))}
      </div>
    </div>
  );
}
