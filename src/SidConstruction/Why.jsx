import React from "react";
import { reasons } from "./data";
const Why = ()=>{

    return(<section className="text-blue-950 text-center lg:mx-30 space-y-5">
        <h3 style={{ fontFamily: "Golco" }}
        className="text-1">Why Us</h3>
        <h1  className="tagline text-amber-500"
        style={{ fontFamily: "Golco" }}>Quality, Commitment, and Excellence in Every Step.</h1>
        <div className="md:place-items-center md:grid md:grid-cols-2 my-10 justify-center items-center space-y-5 p-10">
            {
                reasons.map((reason) => {
                    const Logo = reason.logo
                return(<div className="flex text-left gap-10">
                    <Logo fontSize="large" className="text-amber-500"/>
                    <div className="lg:w-[400px]">
                        <span className="text-amber-500 font-bold">{reason.reason}</span>
                    <p>{reason.description}</p>
                    </div>
                </div>)})
            }
        </div>
    </section>)
}

export default Why;