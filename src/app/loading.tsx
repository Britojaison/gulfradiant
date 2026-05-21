import React from 'react';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#151923',
      zIndex: 99999,
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '4px solid rgba(255, 91, 5, 0.15)',
        borderTop: '4px solid #FF5B05',
        borderRadius: '50%',
        animation: 'gr-spin 1s linear infinite'
      }}></div>
      <style>{`
        @keyframes gr-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
