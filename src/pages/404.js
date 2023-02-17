import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 10);
  }, [router]);

  return (
    <>
      {' '}
      <h1>404</h1>
      <h2>Такой страницы нету</h2>
    </>
  );
}
