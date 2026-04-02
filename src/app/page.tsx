import LandingView from '@/features/landing/LandingView';

export const dynamic = 'force-static';

export default async function HomePage() {
  return <LandingView />;
}
