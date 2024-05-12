export default (countries) => countries.reduce((acc, { name, country }) => {
  const normName = name.toLowerCase().trim();
  const normCountry = country.toLowerCase().trim();

  acc[normCountry] = [...new Set([...(acc[normCountry] || []), normName])].sort();

  return acc;
}, {});

// export default (data) => data
//   .map(({ name, country }) => {
//     const normName = name.toLowerCase().trim();
//     const normCountry = country.toLowerCase().trim();
//     return [normCountry, normName];
//   })
//   .sort() // sort countries and cities
//   .reduce((acc, [country, city]) => {
//     const citiesAcc = acc[country] ?? [];
//     const cities = [...citiesAcc, city];
//     const uniqueCities = new Set(cities);
//     return { ...acc, [country]: [...uniqueCities] };
//   }, {});