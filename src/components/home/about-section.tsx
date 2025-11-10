'use client';
import Image from 'next/image';
import AboutModal from './about-modal';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = (m: boolean) => {
    setModal(m);
  };

  const anims = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 75%',
      },
    });

    tl.fromTo(
      '.about-bg',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      '.modal-btn',
      {
        opacity: 0,
        x: -4,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );
    tl.fromTo(
      ['.back-misc', '.front-misc'],
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      '.about-asterisk-misc',
      {
        rotateZ: 0,
      },
      {
        rotateZ: 720,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 75%',
          end: 'bottom top',
          scrub: 2,
          markers: true,
        },
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    anims();
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);
  return (
    <>
      <section className="about-section" id="sobre-el-museo">
        <Image
          src="/images/fondo.png"
          alt="About bg"
          fill
          sizes="100vw"
          className="about-bg"
        />
        <div className="max-width">
          <svg
            className="about-m"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1308.11 826.17"
          >
            <path
              className="st0"
              d="M693.42,203c0-43.51-35.61-77.14-79.12-77.14-59.34,0-189.9,215.58-365.95,589.39l-41.6,109.77h266.29l68.08-202.73c59.34-176.03,152.32-383.7,152.32-419.3Z"
            />
            <path
              className="st0"
              d="M1130.58,197.06c0-37.58-49.45-71.2-92.97-71.2-59.34,0-183.97,215.58-358.04,589.39l-40.45,109.77h251.29c18.75-58.87,85.46-221.35,139.29-360.96,41.54-108.78,100.88-235.36,100.88-267.01Z"
            />
            <path
              className="st1"
              d="M1284.88,634.16l-11.87-5.93-123.72,196.8h24.16c34.56-45.27,72.35-107.94,111.43-190.86Z"
            />
            <path
              className="st1"
              d="M248.34,715.26C424.39,341.45,554.95,125.86,614.29,125.86c43.52,0,79.12,33.62,79.12,77.14,0,35.6-92.97,243.27-152.32,419.3l-68.08,202.73h166.1l40.45-109.77C853.65,341.45,978.27,125.86,1037.61,125.86c43.52,0,92.97,33.62,92.97,71.2,0,31.65-59.34,158.23-100.88,267.01-53.83,139.6-120.53,302.08-139.29,360.96h155.96l-8.76-.99s96.93-243.27,144.41-359.96c55.38-136.47,100.88-270.96,100.88-322.39,0-55.38-73.19-108.78-148.36-108.78-39.56,0-102.86,27.69-146.38,71.2-69.23,69.22-174.07,288.76-286.83,506.32l-9.89-3.96c83.08-199.76,154.29-367.88,154.29-443.03,0-69.22-59.34-130.54-134.51-130.54-39.56,0-102.86,27.69-146.38,71.2-69.23,69.22-181.99,288.76-292.76,506.32l-11.87-3.96c83.08-199.76,146.38-391.61,146.38-446.99,0-63.29-92.97-130.54-130.56-130.54-75.17,0-152.32,83.07-247.27,286.78l11.87,5.93,126.6-205.69,96.93,7.91-132.53,443.03-89.18,258.11h164.28l41.6-109.77Z"
            />
          </svg>
          <div className="modal-btn" onClick={() => handleModal(true)}>
            <p className="modal-btn-text">
              Sobre el <span>museo</span>
            </p>
          </div>
          <div className="misc-container">
            <div className="back-misc">
              <p>MAR ABIERTO</p>
              <p>ENCUENTROS</p>
              <p>SOBRE OCÉANO</p>
              <p>Y TERRITORIO.</p>
              <p>MAR ABIERTO</p>
              <p>ENCUENTROS </p>
            </div>
            <div className="front-misc">
              <div className="text-container">
                <p>Cada ola es una forma de</p>
                <p>memoria, cada corriente es</p>
                <p>pensamiento en movimiento.</p>
                <p>El mar respira en profundidad,</p>
                <p>abraza la costa, sostiene</p>
                <p>vida invisible. Somos cuerpo hecho</p>
                <p>de agua, somos parte del </p>
                <p>océano que nos nombra. El</p>
                <p>horizonte nos invita a</p>
                <p>imaginar, a explorar, a</p>
                <p>descubrir lo que todavía no vemos.</p>
              </div>
              <svg
                className="asterisk-misc about-asterisk-misc"
                width="89"
                height="94"
                viewBox="0 0 89 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.687 94L40.277 80.7945L39.979 50.7822C39.979 50.1819 38.191 49.2816 37.893 49.8818L20.609 73.5916L2.13304 76.5928C1.83504 76.5928 0.345042 74.7921 0.345042 74.4919L8.68904 57.3849L36.403 48.3812C36.999 47.7809 36.999 45.9802 36.403 45.3799L8.68904 35.4758L0.0470418 19.2692C-0.250958 18.6689 0.941041 16.8682 1.53704 16.8682L20.609 18.9691L37.595 44.1794C37.893 44.7797 40.277 43.8793 40.277 43.2791L41.469 12.3663L54.283 0.061249C54.581 -0.238871 56.965 0.661488 56.667 0.661488L60.541 18.6689L42.065 43.8793C41.767 44.4796 43.257 46.5804 43.555 46.2803L73.057 36.9765L88.553 46.2803C89.149 45.9802 89.149 48.3812 88.553 48.6813L73.057 57.3849L43.555 48.0811C43.257 47.7809 41.767 49.5817 42.065 50.482L59.647 75.6924L56.369 93.0996C56.369 93.3997 53.985 94 53.687 94Z"
                  fill="#0B8882"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <AboutModal modal={modal} handleModal={handleModal} />
    </>
  );
}
