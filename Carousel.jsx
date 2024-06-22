import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useParams} from "react-router-dom";
import axios from "axios";

const Carousel = () => {
  const [wisata, setWisata] = useState(null);
  const { id } = useParams();

  const getWisataById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/wisata/${id}`);
      setWisata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getWisataById();
  }, [id]);
  
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: function (i) {
      return (
        <div
          className={`w-4 h-4 mt-2 mx-2 rounded-full border-2 border-[#3c87ca] ${
            currentSlide === i ? "bg-[#3c87ca]" : "bg-white"
          }`}
        ></div>
      );
    },
    beforeChange: (current, next) => setCurrentSlide (next),
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="max-w-screen-xl object-cover mx-auto mt-8 relative">
      {wisata && (
        <Slider className="" ref={sliderRef} {...settings}>
        <div>
          <img src={wisata.foto1} alt="Foto 1" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={wisata.foto2} alt="Foto 2" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={wisata.foto3} alt="Foto 3" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={wisata.foto4} alt="Foto 4" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={wisata.foto5} alt="Foto 5" className="w-full h-full object-cover rounded-xl" />
        </div>
      </Slider>
      )}
      <button
        onClick={goToPrevSlide}
        className="absolute  top-1/2 -left-12 shadow-lg transform -translate-y-1/2 hover:text-white text-4xl hover:bg-[#3c87ca] rounded-full text-[#3c87ca] bg-white focus:outline-none"
      >
        <BiChevronLeft  />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -right-12  shadow-lg transform -translate-y-1/2 hover:text-white text-4xl hover:bg-[#3c87ca] rounded-full text-[#3c87ca] bg-white focus:outline-none"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
