import React, { useEffect, useState } from 'react';
import { useConsent } from '../context/ConsentContext.jsx';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const { isBannerVisible, isSettingsOpen, openSettings, closeSettings, acceptAll, rejectAll, savePreferences, consent } = useConsent();
  const [temp, setTemp] = useState(consent);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const d = sessionStorage.getItem('cookie-banner-dismissed');
    if (d === '1') setDismissed(true);
  }, []);

  // Añadir padding al body cuando el banner está visible
  useEffect(() => {
    if (isBannerVisible && !dismissed) {
      document.body.style.paddingBottom = '120px';
      document.body.classList.add('cookie-banner-active');
    } else {
      document.body.style.paddingBottom = '0px';
      document.body.classList.remove('cookie-banner-active');
    }
    
    // Cleanup al desmontar
    return () => {
      document.body.style.paddingBottom = '0px';
      document.body.classList.remove('cookie-banner-active');
    };
  }, [isBannerVisible, dismissed]);

  const onOpenSettings = () => {
    setTemp(consent);
    openSettings();
  };

  const onSave = () => {
    savePreferences(temp);
  };

  const Modal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0 16px'}}>
      <div className="w-full max-w-2xl rounded-lg bg-blue-900 text-white p-6 shadow-xl" style={{width: '100%', maxWidth: '512px', borderRadius: '12px', backgroundColor: '#003865', color: 'white', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)'}}>
        <h2 className="text-xl font-semibold mb-2" style={{fontSize: '20px', fontWeight: '600', marginBottom: '8px'}}>Preferencias de cookies</h2>
        <p className="text-sm mb-4" style={{fontSize: '14px', marginBottom: '16px'}}>
          Usamos cookies para mejorar tu experiencia. Algunas son necesarias y no se pueden desactivar. Configura el resto según tus preferencias.
        </p>

        <div className="space-y-4" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <div className="flex items-start justify-between gap-4 border border-gray-600 p-3 rounded-md" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', border: '1px solid #666', padding: '12px', borderRadius: '6px'}}>
            <div>
              <p className="font-medium" style={{fontWeight: '500'}}>Necesarias</p>
              <p className="text-sm text-gray-300" style={{fontSize: '14px', color: '#ccc'}}>Imprescindibles para el funcionamiento básico del sitio.</p>
            </div>
            <input type="checkbox" checked readOnly className="h-5 w-5" style={{height: '20px', width: '20px'}} />
          </div>

          <div className="flex items-start justify-between gap-4 border border-gray-600 p-3 rounded-md" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', border: '1px solid #666', padding: '12px', borderRadius: '6px'}}>
            <div>
              <p className="font-medium" style={{fontWeight: '500'}}>Analítica</p>
              <p className="text-sm text-gray-300" style={{fontSize: '14px', color: '#ccc'}}>Nos ayuda a entender cómo se usa el sitio.</p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5"
              style={{height: '20px', width: '20px'}}
              checked={Boolean(temp.analytics)}
              onChange={(e) => setTemp((t) => ({ ...t, analytics: e.target.checked }))}
            />
          </div>

          <div className="flex items-start justify-between gap-4 border border-gray-600 p-3 rounded-md" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', border: '1px solid #666', padding: '12px', borderRadius: '6px'}}>
            <div>
              <p className="font-medium" style={{fontWeight: '500'}}>Publicidad</p>
              <p className="text-sm text-gray-300" style={{fontSize: '14px', color: '#ccc'}}>Usada para personalizar anuncios.</p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5"
              style={{height: '20px', width: '20px'}}
              checked={Boolean(temp.advertising)}
              onChange={(e) => setTemp((t) => ({ ...t, advertising: e.target.checked }))}
            />
          </div>

          <div className="flex items-start justify-between gap-4 border border-gray-600 p-3 rounded-md" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', border: '1px solid #666', padding: '12px', borderRadius: '6px'}}>
            <div>
              <p className="font-medium" style={{fontWeight: '500'}}>Preferencias</p>
              <p className="text-sm text-gray-300" style={{fontSize: '14px', color: '#ccc'}}>Recuerda tus ajustes y opciones.</p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5"
              style={{height: '20px', width: '20px'}}
              checked={Boolean(temp.preferences)}
              onChange={(e) => setTemp((t) => ({ ...t, preferences: e.target.checked }))}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-end" style={{marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end'}}>
          <button onClick={rejectAll} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Rechazar todo</button>
          <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Aceptar todo</button>
          <button onClick={onSave} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Guardar preferencias</button>
          <button onClick={closeSettings} className="px-4 py-2 rounded-md border border-gray-400 text-gray-300 hover:bg-gray-800" style={{padding: '8px 16px', border: '1px solid #999', color: '#ccc', backgroundColor: 'transparent', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Cerrar</button>
        </div>

        <p className="mt-4 text-xs text-gray-300" style={{marginTop: '16px', fontSize: '12px', color: '#ccc'}}>
          Más información en nuestra{' '}
          <Link to="/cookies" className="underline text-orange-400 hover:text-orange-300" style={{textDecoration: 'underline', color: '#ff9a5a'}}>Política de Cookies</Link>.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {isBannerVisible && !dismissed && (
        <div 
          className="cookie-banner-container px-3 sm:px-4 pb-3 sm:pb-4" 
          style={{
            padding: '0 12px 12px 12px',
            pointerEvents: 'auto'
          }}
        >
          <div 
            className="cookie-banner-content mx-auto max-w-6xl rounded-t-lg bg-blue-900 text-white shadow-2xl p-4 md:p-5" 
            style={{
              backgroundColor: '#003865', 
              color: 'white', 
              borderRadius: '12px 12px 0 0', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              padding: '16px 20px',
              maxWidth: '1152px',
              margin: '0 auto'
            }}
          >
            <button
              aria-label="Cerrar aviso de cookies"
              onClick={() => { setDismissed(true); sessionStorage.setItem('cookie-banner-dismissed', '1'); }}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-600 text-white hover:bg-orange-700"
              style={{position: 'absolute', right: '8px', top: '8px', width: '32px', height: '32px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold'}}
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pr-10" style={{paddingRight: '40px'}}>
              <div className="text-sm" style={{fontSize: '14px'}}>
                <p className="font-semibold mb-1" style={{fontWeight: '600', marginBottom: '4px'}}>Usamos cookies</p>
                <p style={{marginBottom: '0.5rem'}}>
                  Este sitio utiliza cookies necesarias y opcionales para mejorar tu experiencia, analizar el uso y personalizar contenidos.
                  Puedes aceptar todas, rechazarlas o configurar tus preferencias.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                <button onClick={rejectAll} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Rechazar</button>
                <button onClick={onOpenSettings} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Configurar</button>
                <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700" style={{padding: '8px 16px', backgroundColor: '#F37321', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'}}>Aceptar todo</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSettingsOpen && <Modal />}
    </>
  );
}


