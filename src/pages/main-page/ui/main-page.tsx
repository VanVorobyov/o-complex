'use client';

import React from 'react';
import { CardList } from '@/widgets/CardList/CardList';
import { cards } from '@/shared/constants/cards';

export const MainPage = () => {
  return (
    <>
      <h1> Тестовое задание </h1>
      <CardList cards={cards} />
    </>
  );
};
