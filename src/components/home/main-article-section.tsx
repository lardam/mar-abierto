'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Arrow from '@/assets/icons/arrow';
import Image from 'next/image';
import Link from 'next/link';

export default function MainArticle() {
  const anims = () => {
    const section = document.querySelector('.main-article-section');

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      });

      const subtitle = section.querySelector('.section-subtitle');
      const title = section.querySelector('.section-title');

      tl.fromTo(
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
        }
      );

      tl.fromTo(
        '.main-text-card',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,

          duration: 1,
        }
      );
      tl.fromTo(
        '.secondary-text-card',
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,

          duration: 1,
        },
        '-=0.15'
      );
      tl.fromTo(
        '.mac-misc-two',
        {
          opacity: 0,
          x: 20,
          y: 15,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,

          duration: 1,
        },
        '<'
      );
      tl.fromTo(
        '.mac-misc-one',
        {
          opacity: 0,
          x: -20,
          y: 15,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,

          duration: 1,
        },
        '<'
      );
      tl.fromTo(
        '.mac-link-btn',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,

          duration: 1,
        },
        '-=0.2'
      );
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    anims();
  }, []);

  return (
    <section className="main-article-section">
      <div className="max-width">
        <div className="section-title-container">
          <h3 className="section-subtitle">Artículo del conicet</h3>
          <h2 className="section-title">
            ¿Porqué nuestro <span>mar argentino</span> importa?
          </h2>
        </div>
        <div className="main-article-content-container">
          <div className="mac-misc-one">
            <Image
              src="/images/fondo.png"
              alt="Miscelánea"
              fill
              sizes="438px"
            />
          </div>
          <div className="mac-misc-two">
            <Image
              src="/images/fondo3.png"
              alt="Miscelánea"
              fill
              sizes="350px"
            />
          </div>
          <div className="main-text-card">
            <p>
              Porque el océano argentino es mucho más que un paisaje. Es un
              territorio vivo que respira, se mueve, crea, transforma y nos
              atraviesa. Allí habita una <b>diversidad inmensa</b> que todavía
              estamos descubriendo,{' '}
              <b>
                una memoria que no termina de contarse y un futuro que aún está
                por pensarse.
              </b>{' '}
              Cada nueva investigación, es un recordatorio de que debajo de la
              superficie hay un mundo entero esperando ser comprendido.
            </p>
          </div>
          <div className="secondary-text-card">
            <p>
              En un país donde la ciencia, la cultura y la sensibilidad pública
              necesitan ser defendidas, elegir mirar el mar con profundidad es
              un acto político, poético e identitario.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 219.48 214.29"
              className="mac-misc-three"
            >
              <path d="M20.74,30.86l107.13-13.67c27.39-3.5,52.43,15.88,55.93,43.27l14.94,117.05-156.73,20L20.74,30.86Z" />
              <path
                className="m-misc"
                d="M129.26,129.11c-.25-1.45,2.87-15.42,5.17-27.09,1.5-7.72,3.98-16.84,3.61-18.94-.44-2.5-4.12-4.16-7.01-3.66-3.95.69-9.73,16.49-16.97,43.39l-2.42,13.31-10.78,1.21,2.9-19.09c1.9-12.41,5.67-27.31,5.26-29.68-.51-2.9-3.27-4.72-6.16-4.21-3.95.69-10.13,16.56-17.5,43.48l-2.55,13.33-10.65,1.18,3.71-23.03,3.67-31.03-6.54.6-6.03,15.16-.86-.26c3.95-14.66,8.12-21.09,13.12-21.96,2.5-.44,9.47,2.96,10.21,7.17.64,3.69-1.34,17.19-4.54,31.45l.84.13c4.84-15.77,9.79-31.69,13.59-37.1,2.39-3.4,6.28-5.98,8.91-6.44,5-.87,9.66,2.52,10.47,7.12.87,5-1.91,17.02-5.11,31.28l.7.15c4.97-15.79,9.4-31.62,13.2-37.03,2.39-3.4,6.28-5.98,8.91-6.44,5-.87,10.49,1.83,11.14,5.51.6,3.42-.87,12.9-2.96,22.63-1.8,8.32-5.42,25.64-5.42,25.64l7.11-.43,6.27-15.34.86.26c-4.06,14.82-9.04,21.25-12.46,21.85-2.63.46-11.37-1.4-11.67-3.12Z"
              />
            </svg>
          </div>
          <Link
            href="/blog/la-importancia-del-mar-argentino"
            className="mac-link-btn btn"
          >
            <p>ver más</p>
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
