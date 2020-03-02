// need to implement the availability of different API endpoints in the app
import jsonServerProvider from "ra-data-json-server";

const dataProviders = [
  { dataProvider: jsonServerProvider('https://jsonplaceholder.typicode.com'), resources: ['users'] },
  { dataProvider: jsonServerProvider('https://my-json-server.typicode.com/debojyotichatterjee9/myjsonserver'), resources: ['employees'] },
];

export default (type, resource, params) => {
  const dataProvider = dataProviders.find(dp => dp.resources.includes(resource));
  return dataProvider(type, resource, params);
};