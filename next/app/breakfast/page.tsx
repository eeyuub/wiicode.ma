import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dada Cuisine | Petit Déjeuner',
  description: 'Commencez votre journée avec notre délicieux petit-déjeuner. Des viennoiseries croustillantes aux options salées et énergétiques, découvrez le meilleur moyen de vous réveiller avec le sourire chez Dada Cuisine.',
};

export default function BreakfastPage() {
  return (
    <div
      className="_df_book"
      // @ts-expect-error - dflip uses custom attributes
      webgl="true"
      source="/books/dada-breakfast.pdf"
      id="df_manual_book"
    >
    </div>
  );
}
