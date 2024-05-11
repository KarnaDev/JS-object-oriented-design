export default (countries) => countries.reduce((acc, { name, country }) => {
  const normName = name.toLowerCase().trim();
  const normCountry = country.toLowerCase().trim();

  acc[normCountry] = [...new Set([...(acc[normCountry] || []), normName])].sort();

  return acc;
}, {});
