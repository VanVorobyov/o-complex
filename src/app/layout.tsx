import './globals.css';
import React from 'react';
import { MainLayout } from '@/shared/layouts/';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тестовое задание',
  description: 'Тестовое задание на позицию Frontend разработчика.'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru'>
    <body>
    <MainLayout>{children}</MainLayout>
    </body>
    </html>
  );
};

export default RootLayout;
