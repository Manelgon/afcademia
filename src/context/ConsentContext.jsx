import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'cookie-consent-v1';

const defaultConsent = {
  necessary: true,
  analytics: false,
  advertising: false,
  preferences: false,
};

const ConsentContext = createContext({
  consent: defaultConsent,
  isBannerVisible: false,
  isSettingsOpen: false,
  acceptAll: () => {},
  rejectAll: () => {},
  savePreferences: (_partial) => {},
  openSettings: () => {},
  closeSettings: () => {},
  hasUserMadeChoice: false,
  whenAllowed: (_category, _fn) => {},
});

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(defaultConsent);
  const [hasUserMadeChoice, setHasUserMadeChoice] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          setConsent({ ...defaultConsent, ...parsed.consent });
          setHasUserMadeChoice(Boolean(parsed.hasUserMadeChoice));
        }
      }
    } catch (_) {
      // no-op
    }
  }, []);

  const persist = useCallback((nextConsent, madeChoice = true) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ consent: nextConsent, hasUserMadeChoice: madeChoice, ts: Date.now() })
      );
    } catch (_) {
      // no-op
    }
  }, []);

  const acceptAll = useCallback(() => {
    const next = { necessary: true, analytics: true, advertising: true, preferences: true };
    setConsent(next);
    setHasUserMadeChoice(true);
    persist(next, true);
    setIsSettingsOpen(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    const next = { necessary: true, analytics: false, advertising: false, preferences: false };
    setConsent(next);
    setHasUserMadeChoice(true);
    persist(next, true);
    setIsSettingsOpen(false);
  }, [persist]);

  const savePreferences = useCallback(
    (partial) => {
      const next = { ...consent, ...partial, necessary: true };
      setConsent(next);
      setHasUserMadeChoice(true);
      persist(next, true);
      setIsSettingsOpen(false);
    },
    [consent, persist]
  );

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  const whenAllowed = useCallback(
    (category, fn) => {
      if (category === 'necessary' || consent[category]) {
        try { fn(); } catch (_) { /* swallow */ }
      }
    },
    [consent]
  );

  const value = useMemo(
    () => ({
      consent,
      isBannerVisible: !hasUserMadeChoice,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
      hasUserMadeChoice,
      whenAllowed,
    }),
    [acceptAll, closeSettings, consent, hasUserMadeChoice, isSettingsOpen, openSettings, rejectAll, savePreferences, whenAllowed]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  return useContext(ConsentContext);
}

export default ConsentContext;


