'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const logging = () => {
    router.push('/api/logout');
  };
  return <button onClick={logging}> logout </button>;
}
