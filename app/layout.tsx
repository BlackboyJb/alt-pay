// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import LayoutWrapper from '@/components/layoutWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <LayoutWrapper>{children}</LayoutWrapper>
    </html>
  );
}
