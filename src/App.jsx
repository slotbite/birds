import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BirdDetail from './pages/BirdDetail';
import Logbook from './pages/Logbook';

// #region agent log
const logDebug = (message, data) => {
  const logEntry = {
    location: 'App.jsx',
    message,
    data,
    timestamp: Date.now(),
    sessionId: 'debug-session',
    runId: 'run1'
  };
  console.log('[DEBUG]', message, data);
  fetch('http://127.0.0.1:7242/ingest/42edb58f-9c92-4ef4-b58b-bbc6f3b0cc6b', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logEntry)
  }).catch(() => {});
};
// #endregion

function RouteDebugger() {
  const location = useLocation();
  useEffect(() => {
    // #region agent log
    const pathnameAfterBasename = location.pathname;
    const isRootRoute = pathnameAfterBasename === '/' || pathnameAfterBasename === '';
    logDebug('Route location changed', {
      hypothesisId: 'A',
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      fullPath: location.pathname + location.search + location.hash,
      windowPathname: window.location.pathname,
      windowHref: window.location.href,
      isRootRoute: isRootRoute,
      pathnameAfterBasename: pathnameAfterBasename,
      shouldMatchRoot: isRootRoute && window.location.pathname === '/birds/' || window.location.pathname === '/birds'
    });
    // #endregion
  }, [location]);
  return null;
}

function NotFound() {
  const location = useLocation();
  useEffect(() => {
    // #region agent log
    logDebug('No route matched - catch-all triggered', {
      hypothesisId: 'D',
      currentPathname: window.location.pathname,
      locationPathname: location.pathname,
      basename: '/birds/'
    });
    // #endregion
  }, [location]);
  return (
    <div className="bg-black h-screen text-white flex items-center justify-center">
      404 - Página no encontrada
    </div>
  );
}

function App() {
  useEffect(() => {
    // #region agent log
    logDebug('App component mounted', {
      hypothesisId: 'B',
      windowPathname: window.location.pathname,
      windowHref: window.location.href,
      baseURI: document.baseURI,
      baseElement: document.querySelector('base')?.href || 'none'
    });
    // #endregion
  }, []);

  // Try basename without trailing slash first (React Router v7 might normalize it)
  const basename = import.meta.env.BASE_URL?.replace(/\/$/, '') || '/birds';
  
  // #region agent log
  useEffect(() => {
    const currentPath = window.location.pathname;
    const basenameWithSlash = basename + '/';
    const pathWithoutBase = currentPath.replace(basenameWithSlash, '').replace(basename, '') || '/';
    logDebug('Router configuration', {
      hypothesisId: 'C',
      basename: basename,
      basenameWithSlash: basenameWithSlash,
      importMetaBaseUrl: import.meta.env.BASE_URL,
      routes: ['/', '/ave/:id', '/bitacora'],
      expectedBasePath: basename,
      currentPathname: currentPath,
      pathnameStartsWithBase: currentPath.startsWith(basename) || currentPath.startsWith(basenameWithSlash),
      pathWithoutBase: pathWithoutBase,
      willMatchRoot: pathWithoutBase === '/' || pathWithoutBase === '',
      routerVersion: 'v7'
    });
    // #endregion
  }, [basename]);

  return (
    <Router basename={basename}>
      {/* #region agent log */}
      <RouteDebugger />
      {/* #endregion */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ave/:id" element={<BirdDetail />} />
        <Route path="/bitacora" element={<Logbook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
