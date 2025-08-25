import React from "react";
import { comments } from "./data";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Testimonial = ()=>{
    const card = (testimonial) => {
  return (
    <div className="text-blue-900 text-justify shadow-xl shadow-gray-300 w-[300px] border-amber-500 border-2 rounded flex flex-col space-y-5 mt-5 p-4">
      <FormatQuoteIcon fontSize="large" className="text-amber-500 font-bold" />
      <p className="break-words text-wrap">{testimonial.comment}</p>
      <div className="credits flex gap-5">
        <img
          src={testimonial.pic}
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col text-left">
          <span className="text-amber-500 text-xl text-nowrap font-bold">
            {testimonial.name}
          </span>
          <span className="text-[12px]">{testimonial.location}</span>
        </div>
      </div>
    </div>
  );
};

    return(<section className="md:mx-30 text-center place-items-center space-y-5 mb-10">
        <h3 style={{ fontFamily: "Golco" }}
        className="text-1 text-blue-900">Testimonials</h3>
        <h1  className="tagline text-amber-500"
        style={{ fontFamily: "Golco" }}>Stories of Trust, Success, and Partnership.</h1>
        <div className="overflow-hidden" id="test-carousel">
            <div className=" flex gap-6" id="right">
            {
                comments.map(comment=>card(comment))
            }
        </div>
        <div className="flex gap-6" id="left">
            {
                comments.map(comment=>card(comment))
            }
        </div>
        </div>
    </section>)
}

export default Testimonial;