import React from 'react';

export interface ICounter {
  count: number;
  increase: () => void;
  decrease: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
