import type { ReactNode } from 'react';

import GetStartedView from '@/features/get-started/GetStartedView';

export const dynamic = 'force-static';

export default function GetStartedPage(): ReactNode {
  return <GetStartedView />;
}
