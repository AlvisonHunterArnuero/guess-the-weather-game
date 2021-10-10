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
    "Vienna",
    "Porto Calvo",
    "Tirana",
    "Houston",
    "Philadelphia",
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
    "New York",
    "Boston",
    "Kampala",
    "Kiev",
    "Abu Dhabi",
    "Accra",
    "San Diego",
    "Dallas",
    "Kuala Lumpur",
    "Monaco",
    "Ulan Bator",
    "Maputo",
    "Windhoek",
    "Yaren",
    "Beijing",
    "Kathmandu",
    "Amsterdam",
    "Los Angeles",
    "Austin",
    "Islamabad",
    "Ramallah",
    "Lima",
    "Manila",
    "Prague",
    "Lisbon",
    "Istanbul",
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
    "Rome",
    "Florence",
    "Bodrum",
    "Trieste",
    "Porto",
    "Seville",
    "Trieste",
    "Porto",
    "Seattle",
    "Chicago",
  ];
  const setCities = new Set();
  while (setCities.size <= 4) {
    let rndNumber = Math.floor(Math.random() * (66 - 0 + 1)) + 0;
    setCities.add(arrRndCities[rndNumber]);
  }
  let arrFilteredCities = Array.from(setCities);
  return arrFilteredCities;
};

