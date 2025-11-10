'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import Arrow from '@/assets/icons/arrow';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeArticles() {
  const anims = () => {
    const sectionText = document.querySelector('.home-articles-section');

    if (sectionText) {
      const subtitle = sectionText.querySelector('.section-subtitle');
      const title = sectionText.querySelector('.section-title');
      const text = sectionText.querySelector('.section-text');
      const btn = sectionText.querySelector('.link-btn');

      gsap.fromTo(
        [subtitle, title, text, btn],
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
            start: 'top 50%',
          },
        }
      );
    }

    gsap.fromTo(
      '.article-card',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: sectionText,
          start: 'top 40%',
        },
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    anims();
  });
  return (
    <section className="home-articles-section">
      <div className="h-max-width">
        <div className="section-title-container">
          <h3 className="section-subtitle">Noticias</h3>
          <h2 className="section-title">
            últimos <span>ecos</span>
          </h2>
          <p className="section-text">
            Reunimos lo que está sucediendo hoy en torno al océano argentino, su
            ciencia, su cultura y su futuro.
          </p>
          <Link href="/blog" className="link-btn btn">
            <p>ver más</p>
            <Arrow />
          </Link>
        </div>
      </div>
      <div className="h-max-width hmw-no-spacing">
        <div className="articles-carousel">
          <Link
            href="/blog/la-importancia-del-mar-argentino"
            className="article-card"
          >
            <p className="article-num">
              01.<sup>*</sup>
            </p>
            <h4 className="article-title">
              Nominan en los Martín Fierro al Streaming del CONICET
            </h4>
            <p className="article-extract">
              El histórico stream de la expedición científica del CONICET fue
              nominado a mejor Transmisión Especial en los premios Martín Fierro
              de Streaming 2025.
            </p>
            <div className="article-img-container img-wrapper">
              <Image
                fill
                src="/images/estampilla-ecos-1.png"
                alt="Nominan en los Martín Fierro al Streaming del CONICET"
                sizes="25vw"
                className="article-img"
              />
            </div>
          </Link>
          <Link
            href="/blog/la-importancia-del-mar-argentino"
            className="article-card"
          >
            <p className="article-num">
              02.<sup>*</sup>
            </p>
            <h4 className="article-title">
              &#34;Nuestros océanos están en jaque&#34; afirma Greenpeace
            </h4>
            <p className="article-extract">
              Greenpeace alertó sobre el peligro que enfrentan los océanos del
              mundo, que están cada vez más amenazados por la pesca intensiva,
              los plásticos y el cambio climático. 
            </p>
            <div className="article-img-container img-wrapper">
              <Image
                fill
                src="/images/estampilla-ecos-2.png"
                alt="Nominan en los Martín Fierro al Streaming del CONICET"
                sizes="25vw"
                className="article-img"
              />
            </div>
          </Link>
          <Link
            href="/blog/la-importancia-del-mar-argentino"
            className="article-card"
          >
            <p className="article-num">
              03.<sup>*</sup>
            </p>
            <h4 className="article-title">
              Ciencia para las nuevas mareas que están llegando
            </h4>
            <p className="article-extract">
              Una serie de pódcasts para infancias que invita a explorar el
              fondo del mar junto a especialistas del CONICET, respondiendo
              preguntas reales de estudiantes y docentes.
            </p>
            <div className="article-img-container img-wrapper">
              <Image
                fill
                src="/images/estampilla-ecos-3.png"
                alt="Nominan en los Martín Fierro al Streaming del CONICET"
                sizes="25vw"
                className="article-img"
              />
            </div>
          </Link>
          <Link
            href="/blog/la-importancia-del-mar-argentino"
            className="article-card"
          >
            <p className="article-num">
              04.<sup>*</sup>
            </p>
            <h4 className="article-title">
              Conexiones invisibles en lo profundo del océano
            </h4>
            <p className="article-extract">
              Un estudio internacional con participación del CONICET revela
              vínculos entre especies emparentadas de estrellas de mar de aguas
              profundas, publicado en Nature.
            </p>
            <div className="article-img-container img-wrapper">
              <Image
                fill
                src="/images/estampilla-ecos-4.png"
                alt="Nominan en los Martín Fierro al Streaming del CONICET"
                sizes="25vw"
                className="article-img"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
