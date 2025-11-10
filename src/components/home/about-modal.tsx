import Image from 'next/image';

export default function AboutModal({
  modal,
  handleModal,
}: {
  modal: boolean;
  handleModal: (m: boolean) => void;
}) {
  return (
    <div className={`about-modal ${modal ? 'show-modal' : ''}`}>
      <div className="go-back" onClick={() => handleModal(false)}>
        <svg
          width="31"
          height="23"
          viewBox="0 0 31 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3625 22.7292C11.0458 22.7292 10.7292 22.6125 10.4792 22.3625L0.3625 12.2458C-0.120833 11.7625 -0.120833 10.9625 0.3625 10.4792L10.4792 0.3625C10.9625 -0.120833 11.7625 -0.120833 12.2458 0.3625C12.7292 0.845833 12.7292 1.64583 12.2458 2.12917L3.0125 11.3625L12.2458 20.5958C12.7292 21.0792 12.7292 21.8792 12.2458 22.3625C12.0125 22.6125 11.6792 22.7292 11.3625 22.7292Z"
            fill="#292D32"
          />
          <path
            d="M29.5792 12.6123H1.52917C0.845841 12.6123 0.279175 12.0456 0.279175 11.3623C0.279175 10.679 0.845841 10.1123 1.52917 10.1123H29.5792C30.2625 10.1123 30.8292 10.679 30.8292 11.3623C30.8292 12.0456 30.2625 12.6123 29.5792 12.6123Z"
            fill="#292D32"
          />
        </svg>
      </div>
      <div className="modal-hero">
        <div className="max-width">
          <div className="content-wrapper">
            <div className="dates-container">
              <p className="dates-text">
                martes miércoles
                <br />
                jueves viernes
                <br />
                10 a.m. — 4 p.m.
              </p>
              <p className="dates-text">
                sábado domingo
                <br />2 — 8 p.m.
              </p>
            </div>
            <div className="modal-title-container">
              <div className="modal-hero-stamp">
                <Image
                  src="/images/estampilla-modal.webp"
                  alt=""
                  fill
                  sizes="25vw"
                />
                <svg
                  className="modal-hero-stamp-misc"
                  width="89"
                  height="94"
                  viewBox="0 0 89 94"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.687 94L40.277 80.7945L39.979 50.7822C39.979 50.1819 38.191 49.2816 37.893 49.8818L20.609 73.5916L2.13304 76.5928C1.83504 76.5928 0.345042 74.7921 0.345042 74.4919L8.68904 57.3849L36.403 48.3812C36.999 47.7809 36.999 45.9802 36.403 45.3799L8.68904 35.4758L0.0470418 19.2692C-0.250958 18.6689 0.941041 16.8682 1.53704 16.8682L20.609 18.9691L37.595 44.1794C37.893 44.7797 40.277 43.8793 40.277 43.2791L41.469 12.3663L54.283 0.061249C54.581 -0.238871 56.965 0.661488 56.667 0.661488L60.541 18.6689L42.065 43.8793C41.767 44.4796 43.257 46.5804 43.555 46.2803L73.057 36.9765L88.553 46.2803C89.149 45.9802 89.149 48.3812 88.553 48.6813L73.057 57.3849L43.555 48.0811C43.257 47.7809 41.767 49.5817 42.065 50.482L59.647 75.6924L56.369 93.0996C56.369 93.3997 53.985 94 53.687 94Z"
                    fill="#0B8882"
                  />
                </svg>
              </div>
              <div className="text-container">
                <p className="address-text">
                  Avenida Félix U. Camet & López de Gomara
                </p>
                <div className="title-container">
                  <p className="title-line">Conocé el</p>
                  <p className="title-line">museo</p>
                  <p className="title-line">
                    mar <span>/ mar del plata</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="modal-line"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 471.75 246.67"
        >
          <path
            className="modal-line-path"
            d="M475.68,36.36c-18.46-5.13-37.66-10.55-55.71-14.23-30.96-6.8-166.91-28.3-239.27,8.13-10.12,4.98-24.61,14.49-24.92,24.71-.36,7.17,8.32,14.56,14.97,18.85,39.96,26.08,88.03,28.68,131.66,46.13,13.39,5.09,31.92,13.87,39.87,23.6,31.58,35.69-101.37,69.3-140.57,76.69-67.78,13.39-139.27,11.96-205.66-1.41"
          />
        </svg>
      </div>
      <div className="modal-content">
        <div className="max-width">
          <div className="modal-content-card">
            <div className="modal-content-card-img-container">
              <Image src="/images/Modal01.png" alt="" fill sizes="30vw" />
            </div>
            <div className="modal-content-card-text-container">
              <h3 className="modal-content-title">
                Mareas <span>culturales</span>
              </h3>
              <p className="modal-content-text">
                Inaugurado en diciembre de 2013, el MAR (Museo de Arte
                Contemporáneo de la Provincia de Buenos Aires) es uno de los
                museos más grandes y modernos del país y uno de los pocos
                diseñados y construidos para tal fin.
              </p>
            </div>
          </div>
          <div className="modal-content-card">
            <div className="modal-content-card-img-container">
              <Image src="/images/Modal02.png" alt="" fill sizes="30vw" />
            </div>
            <div className="modal-content-card-text-container">
              <h3 className="modal-content-title">
                <span>Inmensidad</span>
              </h3>
              <p className="modal-content-text">
                Con más de 7.000 m2 se convirtió en un nuevo polo cultural de
                atracción en la zona norte de la ciudad de Mar del Plata.
              </p>
            </div>
          </div>
          <div className="modal-content-card">
            <div className="modal-content-card-img-container">
              <Image src="/images/Modal04.png" alt="" fill sizes="30vw" />
            </div>
            <div className="modal-content-card-text-container">
              <h3 className="modal-content-title">
                Espacio que <span>respira</span>
              </h3>
              <p className="modal-content-text">
                Las salas se ubicaron en una planta alta para aprovechar la gran
                espacialidad de la que disponen y de la posibilidad de
                iluminarlas cenitalmente.
              </p>
            </div>
          </div>
          <div className="modal-content-card">
            <div className="modal-content-card-img-container">
              <Image src="/images/Modal03.png" alt="" fill sizes="30vw" />
            </div>
            <div className="modal-content-card-text-container">
              <h3 className="modal-content-title">Visión construída</h3>
              <p className="modal-content-text">
                Bajo la forma de un concurso público, el Estudio Monoblock fue
                el elegido para proyectar el MAR.
              </p>
            </div>
          </div>
        </div>
        {/* deg */}
      </div>
    </div>
  );
}
