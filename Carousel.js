import 'tw-elements';
import Carousel1 from "../assets/carousel1.jpg";
import Carousel2 from "../assets/carousel2.jpg";
import Carousel3 from "../assets/carousel3.jpg";
const Carousel = () => {
    return (
        <div id="carouselCaptions" className="carousel slide relative  carousel-dark" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full h-4/6">
            <img
              src={ Carousel1 }
              className="block w-full blur-sm"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">CONSTRUCTION</h5>
              <p>You dream it, we dig it!!</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-4/6">
            <img
              src={ Carousel2 }
              className="block w-full blur-sm"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">HOME AUTOMATION</h5>
              <p>Turning your vision into reality by crafting your thoughts</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-4/6">
            <img
              src={ Carousel3 }
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">INTERIOR DESIGN</h5>
              <p>Any dream, Any size, we have got your back. Renovate your dreams</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
             
    );
};
export default Carousel;