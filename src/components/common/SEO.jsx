import { useEffect } from 'react';

/** Dynamic page title and meta description without external dependencies */
export default function SEO({ title, description }) {
  const fullTitle = title
    ? `${title} | Muhammad Shumail Affan`
    : 'Muhammad Shumail Affan | Software Engineer Portfolio';

  useEffect(() => {
    document.title = fullTitle;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [fullTitle, description]);

  return null;
}
