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
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Testimonals Img"
                title="Testimonals Img"
              />
              <p className="testimonials__item1-name">R. Acosta</p>
              <p className="testimonials__item1-description">Cliente</p>
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="testimonials__item2">
              <div className="testimonials__item2-testimonial">
                <p>Esta plataforma me ayudo a crecer profesionalmente.</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="testimonials__content">
            <div className="testimonials__item1">
              <img
                className="testimonials__item1-image"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Testimonals Img"
                title="Testimonals Img"
              />
              <p className="testimonials__item1-name">M. Sanchez</p>
              <p className="testimonials__item1-description">Cliente</p>
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="testimonials__item2">
              <div className="testimonials__item2-testimonial">
                <p>
                  Llevo un año vendiendo por internet y hasta ahora no eh visto
                  una plataforma que se especializa en emprender. Ahora que
                  formo parte de la familia Vendifast siento que creceré como un
                  emprendedor que soy.
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
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Testimonals Img"
                title="Testimonals Img"
              />
              <p className="testimonials__item1-name">R. Jiménez</p>
              <p className="testimonials__item1-description">Cliente</p>
              <i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="testimonials__item2">
              <div className="testimonials__item2-testimonial">
                <p>
                  Vendifast me ha ayudado a crecer exponencialmente, siento que
                  con sus cursos estoy aprendiendo rápido y dominando técnicas.
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
