// pages/404.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/'); 
  }, [router]);

  return (
    <></>
  );
};

export default Custom404;