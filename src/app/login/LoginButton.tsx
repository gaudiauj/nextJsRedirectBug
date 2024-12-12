'use client';

import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter();
  const logging = () => {
    const cookieValue = {
      accessToken: 'someRandomAccessToken',
      refreshToken: 'someRandomRefreshToken',
      idToken: 'id',
    };

    document.cookie = `customer=${JSON.stringify(cookieValue)}`;
    router.push('secured/home');
  };
  return <button onClick={logging}> login </button>;
}
