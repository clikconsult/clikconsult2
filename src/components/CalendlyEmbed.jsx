import { useEffect, useRef } from 'react';

//Calendly scheduling link
const CALENDLY_URL = 'https://calendly.com/udoettea/30min';

export default function CalendlyEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Avoid injecting the script twice if the component re-mounts
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ minWidth: '280px', height: '700px' }}
    />
  );
}