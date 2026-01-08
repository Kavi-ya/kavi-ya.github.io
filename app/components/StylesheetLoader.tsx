'use client';

import { useEffect } from 'react';

export default function StylesheetLoader() {
  useEffect(() => {
    // Load Font Awesome asynchronously
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Load AOS CSS asynchronously
    const aos = document.createElement('link');
    aos.rel = 'stylesheet';
    aos.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aos);
  }, []);

  return null;
}
