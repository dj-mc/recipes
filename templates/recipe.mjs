import escape_html from '../lib/escape_html.mjs';

export default function recipe_table(recipes) {
  return `
  ${recipes
    .map((r) => {
      return `
  <tr>
    <td>${escape_html(r.recipe)}</td>
    <td>${escape_html(r.ingredients.toString())}</td>
  </tr>
      `;
    })
    .join('')}
`;
}
