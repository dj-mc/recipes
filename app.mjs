import recipe_table from './templates/recipe_table.mjs';

async function get_recipes_json() {
  // Expect [{},{},{}] in json file
  const json_request = new Request('./recipes.json');
  const fetch_response_promise = await fetch(json_request);
  const recipes_json_data = await fetch_response_promise.json();
  return recipes_json_data;
}

const table = document.createElement('table');
const table_root = document.getElementById('table-root');
get_recipes_json().then((result) => {
  table.innerHTML = recipe_table(result);
  table_root.appendChild(table);
});
