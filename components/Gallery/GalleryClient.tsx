// app/components/Gallery/GalleryClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import { Title } from "../Title";

const events=[
  {
  "_id": {
    "$oid": "68adcc4c00776a161249916f"
  },
  "title": "Independence Day Celebration I",
  "description": "This year we celebrated the Independence enthusiastically.",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_ind1.jpg",
  "date": "2025-08-15",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adccec00776a1612499176"
  },
  "title": "Independence Day Celebration II",
  "description": "Our students have performed different kinds of events on the occasion of this day",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_ind2.jpg",
  "date": "2025-08-15",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adcd3600776a161249917a"
  },
  "title": "Independence Day III",
  "description": "Our Student sang Indian National Anthem in of the National Flag.",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_ind3.jpg",
  "date": "2025-08-15",
  "__v": 0
},
  {
  "_id": {
    "$oid": "68ada84800776a16124990cb"
  },
  "title": "Republic Day Celebration I",
  "description": "Our school celebrated Republic Day with great enthusiasm and respect for our nation",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_rep1.jpg",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adabe200776a16124990f2"
  },
  "title": "Republic Day II",
  "description": "Students performed patriotic songs, dances, and speeches highlighting the importance of the day.",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_rep2.jpg",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adac2100776a16124990f6"
  },
  "title": "Republic Day Celebration III",
  "description": "The flag was hoisted with pride, reminding everyone of the values of freedom and unity.",
  "image": "https://raw.githubusercontent.com/Rajuhoque20/aqsa_tech_images/refs/heads/main/ansar_rep4.jpg",
  "date": "2025-09-05",
  "__v": 0
},


];

export function GalleryClient() {
  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const buildSlides = () => {
      const increment = window.innerWidth < 768 ? 1 : 3;
      const out: React.ReactNode[] = [];

      for (let i = 0; i < events.length; i += increment) {
        const chunk = events.slice(i, i + increment);
        out.push(
          <div key={`slide-${i}`} className="min-w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {chunk.map((event, idx) => (
              <div
                key={`${event._id}-${idx}`}
                className="p-5 flex flex-col gap-3 rounded-md"
                style={{ border: "1px solid rgba(0,0,0,0.2)" }}
              >
                <div className="relative h-[300px]">
                  <Image
                    src={event.image}
                    fill
                    alt={event.title ?? event.title ?? "event image"}
                    className="rounded-md"
                    style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.5)" }}
                  />
                </div>
                <h2 className="text-gray-700 font-semibold">{event.title}</h2>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        );
      }

      setSlides(out);
    };

    buildSlides();
    window.addEventListener("resize", buildSlides);
    return () => window.removeEventListener("resize", buildSlides);
  }, []);

  if (slides.length === 0) {
    // optional placeholder while first build runs
    return (
      <div className="w-full px-5">
        <Title>EVENTS</Title>
        <div className="py-10 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full md:px-30 px-5 md:gap-10 gap-5 flex flex-col mt-10 md:mt-30">
      <Title>EVENTS</Title>
      <Carousel dataLength={slides.length} RenderedItem={slides} />
    </div>
  );
}
