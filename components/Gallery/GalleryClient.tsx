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
  "image": "/1660730652_c6b5e58a-0910-4659-8dbb-ecd7e8aaec8d-1-1.jpg",
  "date": "2025-08-15",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adccec00776a1612499176"
  },
  "title": "Independence Day Celebration II",
  "description": "Our students have performed different kinds of events on the occasion of this day",
  "image": "/007.jpeg",
  "date": "2025-08-15",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adcd3600776a161249917a"
  },
  "title": "Independence Day III",
  "description": "Our Student sang Indian National Anthem in of the National Flag.",
  "image": "/ind_image3.jpg",
  "date": "2025-08-15",
  "__v": 0
},
  {
  "_id": {
    "$oid": "68ada84800776a16124990cb"
  },
  "title": "Teachers' Day Celebration I",
  "description": "Our school joyfully celebrated Teacher’s Day to honor the dedication and guidance of our beloved teachers.",
  "image": "/teather's_day1.jpg",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adabe200776a16124990f2"
  },
  "title": "Teachers' Day II",
  "description": "Students expressed their gratitude through cultural performances, speeches, and heartfelt wishes.",
  "image": "/teachers_day2.jpg",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adac2100776a16124990f6"
  },
  "title": "Teachers' Day Celebration III",
  "description": "The celebration created a warm and memorable atmosphere, strengthening the bond between teachers and students.",
  "image": "/teachers_day3.jpg",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adbd2500776a1612499133"
  },
  "title": "Sports Day Celebration I",
  "description": "Our school organized Sports Day with great enthusiasm, bringing together students, teachers, and parents.",
  "image": "/sports1.jpg",
  "date": "2025-02-26",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adbdaa00776a1612499137"
  },
  "title": "Sports Day Celebration II",
  "description": "Various athletic events and team games were held, showcasing the talent, energy, and sportsmanship of the participants.",
  "image": "/sports_2.jpg",
  "date": "2013-01-26",
  "__v": 0
},
{
  "_id": {
    "$oid": "68adbe4f00776a161249913b"
  },
  "title": "Sports Day Celebration III",
  "description": "The day concluded with prize distribution, celebrating the spirit of healthy competition and teamwork.",
  "image": "/sports3.jpg",
  "date": "2025-08-26",
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
