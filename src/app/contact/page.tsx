import type { ReactNode } from 'react';

import ContactView from '@/features/contact/ContactView';

export const dynamic = 'force-static';

export default function ContactPage(): ReactNode {
  return <ContactView />;
}
