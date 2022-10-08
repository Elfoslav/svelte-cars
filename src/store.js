import { get, writable } from "svelte/store";
import { goto } from '$app/navigation';

const isBrowser = typeof window !== 'undefined';
let carsLocal = writable([]);

if (isBrowser) {
  const storedCars = JSON.parse(localStorage.getItem("cars"));
  carsLocal = writable(storedCars);
}

export const cars = carsLocal;

if (isBrowser) {
  cars.subscribe(value => {
    localStorage.setItem("cars", value ? JSON.stringify(value) : "[]");
  });
}

export const deleteCar = (car) => {
  const filteredCars = get(cars).filter((item) => (
      item.brand !== car.brand
      && item.model !== car.model
      && item.year !== car.year
  ));
  cars.set(filteredCars);
  goto('/');
};
