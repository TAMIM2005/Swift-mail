import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swift Mail',
  description: 'Fast and reliable email handling service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
