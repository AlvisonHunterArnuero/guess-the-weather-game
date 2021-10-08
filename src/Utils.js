export const getFlagsData = () => {
    // src API "https://countriesnow.space/api/v0.1/countries/flag/images"
  fetch("flags.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getRandomCities = () => {
  const arrRndCities = [
    "Managua",
    "Brasília",
    "Algiers",
    "London",
    "Montevideo",
    "Taiwan",
    "Dubai",
    "Luanda",
    "Buenos Aires",
    "Sydney",
    "Linz",
    "Waterloo",
    "Vienna",
    "Porto Calvo",
    "Tirana",
    "Nassau",
    "Dhaka",
    "Yerevan",
    "Brussels",
    "Hamilton",
    "Sucre",
    "Sarajevo",
    "Rabat",
    "Moscow",
    "Paris",
    "Berlin",
    "Beijing",
    "Taipei",
    "Bangkok",
    "Tunis",
    "Ankara",
    "Kampala",
    "Kiev",
    "Abu Dhabi",
    "Accra",
    "Kuala Lumpur",
    "Monaco",
    "Ulan Bator",
    "Maputo",
    "Windhoek",
    "Yaren",
    "Beijing",
    "Kathmandu",
    "Amsterdam",
    "Islamabad",
    "Ramallah",
    "Lima",
    "Manila"
  ];

  let arrFilteredCities = [];
  let rndNumber = 0;
  let i = 1;
  while (i <= 5) {
    rndNumber = Math.floor(Math.random() * (46 - 0 + 1)) + 0;
    arrFilteredCities.push(arrRndCities[rndNumber]);
    i += 1;
  }

  return arrFilteredCities;
};

