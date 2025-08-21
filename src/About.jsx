import React from "react";
import "./styling/About.css"

const About = ()=>{
    return(<div className="about-container section-headings space-y-5 wrapper h-[100vh] mt-10 " >
        <h4 className="text-[10px]" style={{fontFamily:'Golco'}}>About Us</h4>
        <h2 className="tagline">We Build.  We Grow.  We Prosper</h2>
        <span className="text-3xl" style={{fontFamily:'Golco'}}>Together</span>
        <div className="about-info flex lg:mx-30 my-10">
            <div className="lg:w-full flex flex-col gap-2">
                <p className="text-[14px] text-justify">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            <p className="text-[14px] text-justify">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            </div>
            <div className=" w-full h-full relative bg-amber-600">
                <div className="w-[180px] h-[180px] rounded bg-amber-50 absolute right-35"></div>
                                <div className="w-[180px] h-[180px] rounded bg-amber-50 absolute right-95 top-25"></div>
                <div className="w-[180px] h-[180px] rounded bg-green-300 right-15 absolute top-60"></div>
                <div className="w-[180px] h-[180px] rounded bg-amber-50 absolute right-80 top-80"></div>

            </div>
        </div>
    </div>)
}

export default About;