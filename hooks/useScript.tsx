import { useEffect } from 'react';

export const useScript = (url: string, id: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.id =  id;
    script.src = url;
    script.async = true;
    script.type = 'text/javascript';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};
