import { get } from 'svelte/store';
import { cars } from '@/store.js';
import { getCarBySlug } from '@/lib/helpers.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const car = getCarBySlug(get(cars), params.slug);
  return {
    slug: params.slug,
    car,
  };
}
