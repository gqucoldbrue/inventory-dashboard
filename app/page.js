import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/Dashboard'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <Dashboard />
    </main>
  );
}