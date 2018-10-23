import React from "react";
import Select from "react-select";
import AsyncSelect from 'react-select/lib/Async';

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const countriesList = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    console.log(data);
    const countriesArray = data.map( country => {
        return {'value': country.alpha3Code, 'label': country.name}
    });
    console.log(countriesArray);
    return countriesArray;
};

const ReactSelectDemo = () => (
  <div>
    <h2>React Select v2</h2>
    <Select isMulti options={options} />
    <br></br>
    <h4>Async Select</h4>
    <AsyncSelect
          cacheOptions
          loadOptions={countriesList}
          defaultOptions
        />
  </div>
);

export default ReactSelectDemo;
