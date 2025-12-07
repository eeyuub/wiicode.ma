import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dada Cuisine | Menu Déjeuner',
  description: 'Découvrez notre menu déjeuner exquis, proposant une variété de plats savoureux préparés avec des ingrédients frais. Une expérience culinaire inoubliable vous attend chez Dada Cuisine.',
};

export default function FoodPage() {
  return (
    <div
      className="_df_book"
      // @ts-expect-error - dflip uses custom attributes
      webgl="true"
      source="/books/dada-food.pdf"
      id="df_manual_book"
    >
    </div>
  );
}
