const organizeList = (oldList: any) => {
  const newList: Array<any> = [];

  const origin = new Set(oldList.map((ol: any) => ol.origin));
  const destination = new Set(oldList.map((ol: any) => ol.destination));

  const countries = new Set();
  origin.forEach((value) => countries.add(value));
  destination.forEach((value) => countries.add(value));
  /*
  Verificamos que temos países que são destino mas não são origim
  Ou seja, precisamos pegar as origin e destinations e dai ver quais países tem em ambos
  console.log(origin.size);
  console.log(destination.size);
  console.log(countries.size);
  */

  const countriesSorted = [...countries].sort();

  countriesSorted.forEach((country: any) => {
    newList.push({
      title: country,
      data: oldList.filter(
        (ol: any) => ol.origin == country || ol.destination == country
      ),
    });
  });

  return newList;
};

export default organizeList;
