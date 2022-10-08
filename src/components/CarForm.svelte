<script>
  import { goto } from '$app/navigation';
  import { cars } from '@/store.js';
  import { getCarUrl } from '@/lib/helpers.js';

  const DEFAULT_FORM_DATA = {
    brand: "",
    model: "",
    year: null,
  };

  let car = { ...DEFAULT_FORM_DATA };

  const add = () => {
    car = {
      brand: car.brand.trim(' '),
      model: car.model.trim(' '),
      year: car.year,
    };

    if (!car.brand) {
      alert("Missing car brand!");
      document.getElementById("brand").focus();
      return;
    }

    if (!car.model) {
      alert("Missing car model!");
      document.getElementById("model").focus();
      return;
    }

    if (!car.year) {
      alert("Missing car year!");
      document.getElementById("year").focus();
      return;
    }

    if (isCarInTheList(car)) {
      alert("The car is already in the list!");
      return;
    }

    $cars.push(car);
    cars.set($cars);
    goto(getCarUrl(car));
    resetForm();
  };

  const isCarInTheList = (car) => {
    const foundCar = $cars.find((item) => (
      item.brand === car.brand
      && item.model === car.model
      && item.year === car.year
    ));
    return foundCar;
  };

  const resetForm = () => {
    car = { ...DEFAULT_FORM_DATA };
  };
</script>

<form on:submit|preventDefault={add}>
  <p>
    <label for="brand">Car brand:</label>
    <input id="brand" type="text" bind:value={car.brand}>
  </p>
  <p>
    <label for="model">Car model:</label>
    <input id="model" type="text" bind:value={car.model}>
  </p>
  <p>
    <label for="year">Year of production:</label>
    <input id="year" type="number" bind:value={car.year}>
  </p>
  <p><input type="submit" value="Add" /></p>
</form>
