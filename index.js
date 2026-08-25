/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];

  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return {
    name,
    occupation,
    rate,
  };
}

const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  getRandomFreelancer
);

function getAverageRate(freelancers) {
  let total = 0;

  for (const freelancer of freelancers) {
    total += freelancer.rate;
  }

  return total / freelancers.length;
}

const averageRate = getAverageRate(freelancers);

function Freelancer(freelancer) {
  const $row = document.createElement("tr");

  $row.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.rate}</td>
  `;

  return $row;
}

function FreelancerRows() {
  const $rows = document.createElement("tbody");

  for (const freelancer of freelancers) {
    $rows.append(Freelancer(freelancer));
  }

  return $rows;
}

function AverageRate() {
  const $average = document.createElement("p");

  $average.textContent = `The average rate is $${averageRate.toFixed(2)}.`;

  return $average;
}

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="AverageRate"></div>
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>OCCUPATION</th>
          <th>RATE</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;

  $app.querySelector("#AverageRate").replaceWith(AverageRate());

  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();