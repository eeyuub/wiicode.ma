import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dada Cuisine | Boissons et Tea Time',
  description: 'Détendez-vous avec notre sélection rafraîchissante de boissons artisanales et profitez d\'un moment de douceur avec notre offre exclusive de Tea Time. L\'endroit idéal pour se relaxer.',
};

export default function DrinkPage() {
  return (
    <div
      className="_df_book"
      // @ts-expect-error - dflip uses custom attributes
      webgl="true"
      source="/books/dada-drink.pdf"
      id="df_manual_book"
    >
    </div>
  );
}
