'use client';

import Image from 'next/image';
import scheduleData from '@/data/schedule.json';
import { ISchedule } from '@/data/models';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function Schedule() {
  const data: ISchedule[] = scheduleData;

  const anims = () => {
    const sectionText = document.querySelector('.schedule-section');

    if (sectionText) {
      const subtitle = sectionText.querySelector('.section-subtitle');
      const title = sectionText.querySelector('.section-title');

      gsap.fromTo(
        [subtitle, title],
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionText,
            start: 'top 75%',
          },
        }
      );
    }

    gsap.fromTo(
      '.schedule-item',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: sectionText,
          start: 'top 66%',
        },
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    anims();
  });

  return (
    <section className="schedule-section" id="programacion">
      <div className="max-width">
        <div className="section-title-container">
          <h3 className="section-subtitle">Programación</h3>
          <h2 className="section-title">
            El <span>tiempo</span> del <span>mar</span>
          </h2>
        </div>
      </div>
      <div className="schedule-container">
        <ul className="schedule-track">
          {data &&
            data.map((it) => (
              <li className="schedule-item" key={it.order}>
                <div className="schedule-data-container">
                  <p className="sch-item-time">{it.time}</p>
                  <p className="sch-item-date">{it.date}</p>
                  <p className="sch-item-room">{it.room}</p>
                  <h4
                    className="sch-item-name"
                    dangerouslySetInnerHTML={{ __html: it.title }}
                  ></h4>
                  <p className="sch-item-desc">{it.description}</p>
                </div>
                <div className="schedule-big-order">
                  <Image
                    src={`/numbers/${it.order}.svg`}
                    alt=""
                    fill
                    sizes="10vw"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
