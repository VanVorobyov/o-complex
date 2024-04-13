'use client';

import React from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

export const MainPage = () => {
  return (
    <>
      <div>
        <h1> Тестовое задание </h1>
        
        <Input name={'phone'} />
        
        <p></p>
        
        <Button>
          <span>Заказать</span>
        </Button>
      </div>
    </>
  );
};
