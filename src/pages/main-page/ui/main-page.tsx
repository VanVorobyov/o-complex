'use client';

import React from 'react';
import { CardList } from '@/widgets/CardList/CardList';
import { cards } from '@/shared/constants/cards';
import { CartFeature } from '@/features/CartFeature/CartFeature';

export const MainPage = () => {
  return (
    <>
      <h1> Тестовое задание </h1>
      <CartFeature></CartFeature>
      <CardList cards={cards} />
    </>
  );
};
