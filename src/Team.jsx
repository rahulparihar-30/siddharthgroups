import React from "react";


const Team = ()=>{
    const persons = [
        {
            name:"Lana Steiner",
            designation:"Chief Operating Officier",
            image:"/team/p4.jpg"
        },
        {
            name:"Mia Ward",
            designation:"Founder & CEO",
            image:"/team/p2.jpg"
        },
        {
            name:"Lana Ray",
            designation:"Co-founder",
            image:"/team/p3.jpg"
        },
        {
            name:"Justin Rose",
            designation:"Co-founder and CFO",
            image:"/team/p1.jpg"
        },{
            name:"Lana Steiner",
            designation:"Chief Operating Officier",
            image:"/team/p4.jpg"
        },
        {
            name:"Mia Ward",
            designation:"Founder & CEO",
            image:"/team/p2.jpg"
        },
        {
            name:"Lana Ray",
            designation:"Co-founder",
            image:"/team/p3.jpg"
        },
        {
            name:"Justin Rose",
            designation:"Co-founder and CFO",
            image:"/team/p1.jpg"
        }
    ]
    const People = (person)=>{
            return(<div className="people-card lg:w-fit lg:h-fit lg:flex lg:flex-col lg:gap-2 lg:text-left">
                <div className="img-container lg:w-[200px] lg:h-[200px] overflow-hidden rounded ">
                    <img src={person.image} className="w-full h-full object-cover object-top aspect-square"/>
                </div>
                <h3 className="font-bold text-2xl">{person.name}</h3>
                <span className="italic text-gray-50">{person.designation}</span>
            </div>)
    }

    return(<div className="team-container section-headings space-y-5 mb-5 h-[100vh] ">
        <h4 style={{fontFamily:'Golco'}} className="text-[10px]">Our Team</h4>
        <h2 className="tagline">Meet the Minds Building Our Future.</h2>
        <div className="people-container lg:flex lg:gap-20 lg:justify-evenly lg:flex-wrap lg:mx-30">
            {   
                persons.map(person => People(person))
            }
        </div>
        <h2 className="tagline">From Dreams to Delivery Let's Begin.</h2>

    </div>)
}

export default Team;