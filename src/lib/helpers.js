/**
 *
 * @param {String} str
 * @returns String
 */
export const prepareStringForUrl = (str) => {
  return str.replace(/\s/g, '-').toLowerCase();
};

/**
 *
 * @param {Object} car
 * @returns String
 */
export const getCarSlug = (car) => {
  if (!car) {
    throw new Error('Missing car parameter');
  }

  const brand = prepareStringForUrl(car.brand);
  const model = prepareStringForUrl(car.model);
  return `${brand}-${model}-${car.year}`;
};

/**
 *
 * @param {Object} car
 * @returns String
 */
export const getCarUrl = (car) => {
  if (!car) {
    throw new Error('Missing car parameter');
  }

  return `/cars/${getCarSlug(car)}`;
};

/**
 *
 * @param {Array} cars
 * @param {String} slug
 * @returns Object or null
 */
export const getCarBySlug = (cars, slug) => {
  if (!cars) {
    throw new Error('Missing cars parameter');
  }

  if (!slug) {
    throw new Error('Missing slug parameter');
  }

  return cars.find((item) => (
    getCarSlug(item) === slug
  ));
};
