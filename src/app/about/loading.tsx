import React from 'react';

export default function AboutLoading() {
  return (
    <div className="about-page-wrapper skeleton-page">
      {styleBlock}
      
      {/* HERO SECTION - SKELETON */}
      <section className="about-hero sk-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="sk-light hero-title-line-1" style={{ height: '70px', width: '55%', marginBottom: '16px', borderRadius: '8px' }}></div>
          <div className="sk-light hero-title-line-2" style={{ height: '70px', width: '40%', marginBottom: '16px', borderRadius: '8px' }}></div>
          <div className="sk-light hero-title-line-3" style={{ height: '70px', width: '48%', marginBottom: '32px', borderRadius: '8px' }}></div>
          <div className="sk-light hero-sub-line-1" style={{ height: '24px', width: '80%', marginBottom: '8px', borderRadius: '4px', opacity: 0.7 }}></div>
          <div className="sk-light hero-sub-line-2" style={{ height: '24px', width: '60%', borderRadius: '4px', opacity: 0.7 }}></div>
        </div>
        <div className="about-hero-dots">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="sk-light skeleton-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', opacity: 0.5 }}></div>
          ))}
        </div>
      </section>

      {/* DIVISIONS SECTION - SKELETON */}
      <section className="divisions-section-new sk-divisions">
        <div className="divisions-overlay"></div>
        <div className="divisions-content-wrapper">
          <div className="division-block-left">
            <div className="sk-light" style={{ height: '48px', width: '60%', marginBottom: '24px', borderRadius: '6px' }}></div>
            <div className="sk-light" style={{ height: '16px', width: '100%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8 }}></div>
            <div className="sk-light" style={{ height: '16px', width: '95%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8 }}></div>
            <div className="sk-light" style={{ height: '16px', width: '90%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8 }}></div>
            <div className="sk-light" style={{ height: '16px', width: '70%', borderRadius: '4px', opacity: 0.8 }}></div>
          </div>
          <div className="division-block-right">
            <div className="sk-light" style={{ height: '48px', width: '65%', marginBottom: '24px', borderRadius: '6px', marginLeft: 'auto' }}></div>
            <div className="sk-light" style={{ height: '16px', width: '100%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8, marginLeft: 'auto' }}></div>
            <div className="sk-light" style={{ height: '16px', width: '95%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8, marginLeft: 'auto' }}></div>
            <div className="sk-light" style={{ height: '16px', width: '90%', marginBottom: '12px', borderRadius: '4px', opacity: 0.8, marginLeft: 'auto' }}></div>
            <div className="sk-light" style={{ height: '16px', width: '80%', borderRadius: '4px', opacity: 0.8, marginLeft: 'auto' }}></div>
          </div>
        </div>
      </section>

      {/* WHY GULF RADIANT SECTION - SKELETON */}
      <section className="why-gr">
        <div className="container">
          <div className="why-gr-header" style={{ marginBottom: '60px' }}>
            <div className="sk-light" style={{ height: '12px', width: '120px', marginBottom: '20px', borderRadius: '4px', alignSelf: 'center' }}></div>
            <div className="sk-light" style={{ height: '60px', width: '380px', borderRadius: '8px', alignSelf: 'center' }}></div>
          </div>

          <div className="why-gr-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="why-gr-item" key={i} style={{ pointerEvents: 'none' }}>
                <div className="feature-icon" style={{ marginBottom: '25px' }}>
                  <div className="sk-light" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
                </div>
                <div className="sk-light" style={{ height: '28px', width: '60%', marginBottom: '12px', borderRadius: '4px' }}></div>
                <div className="sk-light" style={{ height: '16px', width: '80%', marginBottom: '8px', borderRadius: '4px', opacity: 0.7 }}></div>
                <div className="sk-light" style={{ height: '16px', width: '70%', borderRadius: '4px', opacity: 0.7 }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY CAPABILITIES - SKELETON */}
      <section className="capabilities-new sk-capabilities">
        <div className="capabilities-overlay"></div>
        <div className="capabilities-content">
          {/* Left Column */}
          <div className="cap-column-side">
            {[1, 2].map((i) => (
              <div className="cap-glass-card" key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="sk-dark" style={{ height: '36px', width: '40%', marginBottom: '25px', borderRadius: '4px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="sk-dark" style={{ height: '16px', width: '75%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '80%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '70%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '60%', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Title */}
          <div className="capabilities-center-text">
            <div className="sk-dark" style={{ height: '160px', width: '380px', borderRadius: '12px' }}></div>
          </div>

          {/* Right Column */}
          <div className="cap-column-side">
            {[1, 2].map((i) => (
              <div className="cap-glass-card" key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="sk-dark" style={{ height: '36px', width: '45%', marginBottom: '25px', borderRadius: '4px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="sk-dark" style={{ height: '16px', width: '70%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '85%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '75%', borderRadius: '4px' }}></div>
                  <div className="sk-dark" style={{ height: '16px', width: '65%', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION - SKELETON */}
      <section className="timeline-section-new sk-timeline">
        <div className="timeline-overlay"></div>
        <div className="timeline-content">
          <div className="sk-dark" style={{ height: '64px', width: '450px', margin: '0 auto 120px auto', borderRadius: '8px' }}></div>

          <div className="timeline-labels-new">
            <div className="timeline-line-new" style={{ opacity: 0.3 }}></div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="timeline-item-new" key={i}>
                <div className="time-dot-new sk-glow-orange" style={{ animation: 'none' }}></div>
                <div className="time-year-new" style={{ marginBottom: '10px' }}>
                  <div className="sk-glow-orange" style={{ height: '32px', width: '70px', borderRadius: '4px' }}></div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div className="sk-dark" style={{ height: '24px', width: '80%', borderRadius: '4px' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div className="sk-dark" style={{ height: '14px', width: '90%', borderRadius: '4px', opacity: 0.6 }}></div>
                  <div className="sk-dark" style={{ height: '14px', width: '70%', borderRadius: '4px', opacity: 0.6 }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED & CERTIFIED SECTION - SKELETON */}
      <section className="trusted-cert-section">
        <div className="container">
          <div className="sk-light" style={{ height: '48px', width: '480px', margin: '0 auto 60px auto', borderRadius: '6px' }}></div>
          <div className="marquee-wrapper" style={{ justifyContent: 'space-between', gap: '40px', marginBottom: '100px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="sk-light" style={{ width: '160px', height: '80px', borderRadius: '8px', opacity: 0.7 }}></div>
            ))}
          </div>

          <div className="sk-light" style={{ height: '48px', width: '380px', margin: '0 auto 60px auto', borderRadius: '6px' }}></div>
          <div className="marquee-wrapper" style={{ justifyContent: 'space-between', gap: '40px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="sk-light" style={{ width: '160px', height: '80px', borderRadius: '8px', opacity: 0.7 }}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Separate style tag to avoid breaking keyframes or styles compilation in Next.js/React 19
const styleBlock = (
  <style>{`
    @keyframes sk-shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    .sk-light {
      background: linear-gradient(90deg, #f2f2f2 25%, #fafafa 50%, #f2f2f2 75%);
      background-size: 200% 100%;
      animation: sk-shimmer 1.5s infinite linear;
    }

    .sk-dark {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.05) 75%);
      background-size: 200% 100%;
      animation: sk-shimmer 1.5s infinite linear;
    }

    .sk-glow-orange {
      background: linear-gradient(90deg, rgba(255, 91, 5, 0.15) 25%, rgba(255, 91, 5, 0.3) 50%, rgba(255, 91, 5, 0.15) 75%);
      background-size: 200% 100%;
      animation: sk-shimmer 1.5s infinite linear;
    }

    .sk-hero {
      background: #111111;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 80px;
    }

    .sk-divisions {
      background: #1e1e1e;
      height: 100vh;
    }

    .sk-capabilities {
      background: #151515;
      height: 100vh;
    }

    .sk-timeline {
      background: #0d0d0d;
      height: 100vh;
    }

    @media (max-width: 1024px) {
      .sk-hero {
        padding-left: 40px;
      }
      .sk-divisions {
        height: auto;
        padding-bottom: 80px;
      }
      .sk-capabilities {
        height: auto;
        padding-top: 60px;
        padding-bottom: 60px;
      }
      .sk-timeline {
        height: auto;
        padding-bottom: 80px;
      }
    }

    @media (max-width: 768px) {
      .sk-hero {
        padding-left: 20px;
      }
    }
  `}</style>
);
