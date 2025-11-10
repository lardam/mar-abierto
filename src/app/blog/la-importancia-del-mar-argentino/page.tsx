'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';

export default function PostPage() {
  const anims = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ['.main-header', '.post-stamp'],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.5,
      }
    );
    tl.fromTo(
      ['.post-type', '.page-title', '.post-extract', '.post-by', '.post-date'],
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    );

    const blocks = gsap.utils.toArray([
      '.crop-image',
      '.block-title',
      '.block-text',
      '.post-quote',
      '.post-centered-image-container',
      '.top-line',
    ]) as HTMLElement[];
    blocks.forEach((bl) => {
      gsap.fromTo(
        bl,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: bl,
            start: 'top 66%',
          },
        }
      );
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    anims();
  }, []);

  return (
    <main className="post-page">
      <section className="post-header">
        <div className="post-stamp-cont">
          <Image
            src="/images/post-stamp.png"
            fill
            sizes="50vw"
            alt=""
            className="post-stamp"
          />
        </div>
        <div className="post-data-container">
          <p className="post-type">Artículo</p>
          <h1 className="page-title">
            La importancia del <span>mar argentino</span>
          </h1>
          <h3 className="post-extract">
            El Mar Argentino es uno de los territorios biogeográficos más ricos
            del planeta y uno de los menos conocidos culturalmente. Su estudio
            no es sólo ciencia: es soberanía, es futuro y es identidad nacional.
          </h3>
          <div className="post-credits">
            <h5 className="post-by">Por CONICET</h5>
            <h5 className="post-date">01.11.2025</h5>
          </div>
        </div>
      </section>
      <section className="post-content">
        <div className="crop-image crop-image-big crop-image-right">
          <Image src="/images/NotaPeriod01.png" alt="" sizes="30vw" fill />
        </div>
        <div className="post-text-block">
          <div className="crop-image crop-image-left"></div>
          <div className="post-text-container">
            <hr className="top-line" />
            <h4 className="block-title">
              ¿Por qué el Mar Argentino es considerado un territorio
              estratégico?
            </h4>
            <p className="block-text">
              El Mar Argentino concentra corrientes, nutrientes y biodiversidad
              únicas que sostienen sistemas ecológicos complejos esenciales para
              el planeta. Pero además, es un territorio que define identidad,
              memoria y futuro para el país. Su valor no solo se expresa en sus
              especies, sino en todo el conocimiento que nos permite construir
              soberanía científica, independencia tecnológica y capacidad de
              decisión sobre nuestro propio territorio marítimo.
            </p>
          </div>
        </div>
        <div className="post-text-block">
          <div className="post-quote">
            <p>
              / PROFUNDIDAD
              <br />
              nombre femenino
            </p>
            <p>
              01
              <br />
              Dimensión que excede la superficie visible. En el contexto del
              océano, la profundidad es territorio de lo desconocido. Es también
              una metáfora de la investigación científica: lo que invita a ir
              más allá de lo evidente para comprender lo estructural.
            </p>
          </div>
          <div className="post-text-container">
            <hr className="top-line" />
            <h4 className="block-title">
              ¿Qué rol cumple la investigación científica en este contexto?
            </h4>
            <p className="block-text">
              La investigación permite traducir procesos invisibles en
              conocimiento concreto, medible y accesible. Permite entender qué
              está pasando con las especies, cómo afectan la contaminación, el
              cambio climático, y qué impactos reales tienen en la vida urbana,
              social y económica. Sin investigación pública, no hay narrativa
              posible del mar. No hay futuro sustentable sin evidencia empírica
              que fundamente decisiones políticas y culturales.
            </p>
          </div>
        </div>
      </section>
      <section className="post-centered-image-container">
        <Image
          src="/images/NotaPeriod-Horiz.jpg"
          alt=""
          fill
          sizes="100vw"
          className="post-centered-image"
        />
      </section>
      <section className="post-content">
        <div className="post-text-block">
          <div className="crop-image crop-image-left">
            <Image src="/images/NotaPeriod02.png" alt="" sizes="30vw" fill />
          </div>
          <div className="post-text-container">
            <hr className="top-line" />
            <h4 className="block-title">
              ¿Cómo afectan los microplásticos a los ecosistemas marinos?
            </h4>
            <p className="block-text">
              Los microplásticos ingresan a la cadena alimentaria incluso en sus
              niveles más microscópicos. Esto altera procesos biológicos, afecta
              especies, modifica ciclo de nutrientes y termina impactando
              también en seres humanos. Es una forma silenciosa de contaminación
              que no se detiene en la superficie: opera a nivel químico y
              molecular. El mayor problema es que incluso cuando las personas
              creen que “no se ve”, sigue existiendo.{' '}
            </p>
          </div>
        </div>
        <div className="post-text-block">
          <div className="post-quote post-quote-right">
            <p>
              / SOBERANÍA
              <br />
              nombre femenino
            </p>
            <p>
              01
              <br />
              Capacidad de un país de decidir sobre su propio territorio,
              recursos y conocimiento. Implica investigación activa, ciencia
              pública y acceso al saber como bien común.
            </p>
          </div>
          <div className="post-text-container">
            <hr className="top-line" />
            <h4 className="block-title">
              ¿Por qué es fundamental que las nuevas generaciones tengan acceso
              a esta información?
            </h4>
            <p className="block-text">
              Porque son quienes van a tomar decisiones culturales, científicas,
              políticas y sociales en las próximas décadas. Si no conocen este
              territorio, no pueden defenderlo ni imaginar futuro posible dentro
              de él. Argentina necesita que la ciencia deje de ser un lugar
              lejano y que se vuelva una práctica cultural accesible, deseable y
              cotidiana. Sin apropiación emocional no hay apropiación real.
            </p>
          </div>
        </div>
        <div className="post-text-block">
          <div className="crop-image crop-image-right">
            <Image src="/images/NotaPeriod03.png" alt="" sizes="30vw" fill />
          </div>
          <div className="post-text-container">
            <hr className="top-line" />
            <h4 className="block-title">
              ¿Qué podría habilitar culturalmente un ciclo interdisciplinario
              como este en un museo público?
            </h4>
            <p className="block-text">
              Podría reconectar a las personas con el mar como territorio vivo,
              no como postal turística. Podría producir otra sensibilidad
              colectiva. Podría democratizar el acceso a la ciencia y
              convertirla en un espacio de encuentro. Y podría generar nuevas
              vocaciones científicas y artísticas. Estas experiencias culturales
              no solo informan: transforman. Porque hacen sentir que el océano
              es nuestro y que defenderlo también nos pertenece.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
