import React from 'react';

const VideoSection = () => {
  return (
    <section id="video-section" className="video-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Así gana <span className="text-orange">tiempo</span> un <span className="text-orange">administrador</span> moderno</h2>
        </div>
        <div className="video-wrapper" data-aos="fade-up">
          <video 
            className="video-player"
            controls
            playsInline
            preload="metadata"
            poster=""
          >
            <source src="/AFCADEMIA_MOTION.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

