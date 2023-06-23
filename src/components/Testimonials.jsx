import { Splide, SplideSlide } from "@splidejs/react-splide";
import testimonialImg from "../assets/images/features-1.jpg";

export default function Testimonials() {
  return (
    <div className="testimonials container">
      <Splide
        options={{
          rewind: true,
          type: "loop",
          breakpoints: {
            640: {
              perPage: 1,
            },
          },
          speed: 200,
          interval: 3000,
        }}
      >
        <SplideSlide>
          <div className="testimonials__content">
            <div className="testimonials__item1">
              <img
                className="testimonials__item1-image"
                src={testimonialImg}
                alt="Testimonals Img"
                title="Testimonals Img"
              />
              <p className="testimonials__item1-name">Jhon Doe</p>
              <p className="testimonials__item1-description">Lorem Ipsum</p>
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="testimonials__item2">
              <div className="testimonials__item2-testimonial">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  at lorem eget neque laoreet tempus. Fusce pretium convallis
                  velit, vitae pulvinar ante bibendum ut. Aliquam sapien magna,
                  posuere vel quam maximus, volutpat mollis sem. Nunc diam nunc,
                  hendrerit sed ullamcorper id, consequat maximus ex.
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="testimonials__content">
            <div className="testimonials__item1">
              <img
                className="testimonials__item1-image"
                src={testimonialImg}
                alt="Testimonals Img"
                title="Testimonals Img"
              />
              <p className="testimonials__item1-name">Jhon Doe</p>
              <p className="testimonials__item1-description">Lorem Ipsum</p>
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="testimonials__item2">
              <div className="testimonials__item2-testimonial">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  at lorem eget neque laoreet tempus. Fusce pretium convallis
                  velit, vitae pulvinar ante bibendum ut. Aliquam sapien magna,
                  posuere vel quam maximus, volutpat mollis sem. Nunc diam nunc,
                  hendrerit sed ullamcorper id, consequat maximus ex.
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
