import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    document.body.appendChild(script);

    const cmsScript = document.createElement('script');
    cmsScript.src = 'https://unpkg.com/netlify-cms-app@^8.0.0/dist/netlify-cms-app.js';
    document.body.appendChild(cmsScript);
  }, []);

  return <div>Admin Panel (Loading CMS...)</div>;
}