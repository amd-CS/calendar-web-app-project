const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const lengthsOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let firstDay = 6;
let year = 2021;
generateCalendar(year, firstDay);

document.querySelector("#show").addEventListener("click", () => {
  let year = +document.getElementById("year").value;
  if (year == "" || year < 1) {
    return;
  }

  let firstDay = findFirstDay(year);

  console.log(firstDay);
  generateCalendar(year, Math.round(firstDay));
  showSeason();
  selectTheme();
  document.querySelector("h1").innerHTML = year + " Interactive Calendar";
});

function generateCalendar(year, dayOfWeek) {
  let monthsHTML = document.querySelectorAll("#container div div");

  for (let i = 0; i < 12; i++) {
    let mon = monthsHTML[i];
    mon.innerHTML = "";
    mon.innerHTML += makeSpace((dayOfWeek - 1) * 4);
    let numberOfDays = i === 1 && isLeapYear(year) ? 29 : lengthsOfMonths[i];
    for (let j = 1; j <= numberOfDays; j++) {
      mon.innerHTML += j < 10 ? "&nbsp" + j : j;

      if (dayOfWeek !== 7) {
        mon.innerHTML += makeSpace(2);
      } else {
        dayOfWeek = 0;
        mon.innerHTML += "<br>";
      }
      dayOfWeek++;
    }
  }
}

function findFirstDay(year) {
  let firstDay = 6;
  let difference = year - 2021;
  let correction = 0;

  firstDay += difference + Math.floor(difference / 4);
  console.log("rare firstday is: " + firstDay);
  if (difference <= -121) {
    correction = difference + 21;
    correction = -Math.ceil(correction / 100);
  }

  let leap = 0;
  if (difference <= -421) {
    leap = difference + 21;
    leap = Math.ceil(leap / 400);
    console.log("leap is: " + leap);
  }

  if (difference >= 80) {
    correction = difference + 20;
    correction = -Math.floor(correction / 100);
  }

  if (difference >= 380) {
    leap = difference + 20;
    leap = Math.floor(leap / 400);
    console.log("leap is: " + Math.floor(leap));
  }

  firstDay += correction + leap;
  console.log("correction is: " + correction);
  console.log("firstDay is: " + firstDay);

  if (firstDay < 1) {
    if (firstDay % 7 === 0) {
      firstDay = 7;
    } else {
      firstDay %= 7;
      firstDay += 7;
    }
  } else if (firstDay > 7) {
    if (Math.round(firstDay) % 7 === 0) {
      firstDay = 7;
    } else {
      firstDay %= 7;
    }
  }

  return firstDay;
}

function isLeapYear(year) {
  return (
    year % 4 === 0 &&
    (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0))
  );
}

function makeSpace(number) {
  let spaces = "";
  for (let i = 0; i < number; i++) {
    spaces += "&nbsp";
  }
  return spaces;
}

function showSeason() {
  let seasonsSelector = document.querySelector("#seasons");
  let seasonsNames = document.querySelectorAll("h2");
  let monthsDivs = document.querySelectorAll("#container div");
  switch (seasonsSelector.value) {
    case "Whole Year":
      refreshYear(monthsDivs, seasonsNames);
      break;

    case "Winter":
      //refresh the year then hide the seasons other than winter
      refreshYear(monthsDivs, seasonsNames);
      $(".spring, .summer, .fall").hide();
      for (let s of seasonsNames) {
        if (s.innerHTML === "Winter") {
          s.style.display = "block";
        } else {
          s.style.display = "none";
        }
      }
      break;

    case "Spring":
      //refresh the year then hide the seasons other than spring
      refreshYear(monthsDivs, seasonsNames);
      $(".winter, .summer, .fall").hide();
      for (let s of seasonsNames) {
        if (s.innerHTML === "Spring") {
          s.style.display = "block";
        } else {
          s.style.display = "none";
        }
      }
      break;

    case "Summer":
      //refresh the year then hide the seasons other than summer
      refreshYear(monthsDivs, seasonsNames);
      $(".winter, .spring, .fall").hide();
      for (let s of seasonsNames) {
        if (s.innerHTML === "Summer") {
          s.style.display = "block";
        } else {
          s.style.display = "none";
        }
      }
      break;

    case "Fall":
      //refresh the year then hide the seasons other than fall
      refreshYear(monthsDivs, seasonsNames);
      $(".winter, .summer, .spring").hide();
      for (let s of seasonsNames) {
        if (s.innerHTML === "Fall") {
          s.style.display = "block";
        } else {
          s.style.display = "none";
        }
      }
      break;
  }
}

function refreshYear(monthsDivs, seasonsNames) {
  $(".spring, .summer, .fall, .winter").show();
  for (let m of monthsDivs) {
    m.style.display = "block";
  }
  for (let s of seasonsNames) {
    s.style.display = "none";
  }
}

function selectTheme() {
  //get the theme element
  let themeSelector = document.querySelector("#theme");

  //switch the stylesheet based on the selected theme
  document.getElementById(
    "stylesheet"
  ).href = `styles/${themeSelector.value}.css`;
}
