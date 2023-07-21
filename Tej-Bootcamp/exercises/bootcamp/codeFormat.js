//1
function styleMePretty() {
  let truth = "";

  function innerBeauty(count) {
    let result = "";
    while (count > 0) {
      count--;
      if (count === 2) {
        result += "Unformatted code";
      }
    }
    result += " is difficult to parse";
    return result;
  }
  truth += innerBeauty(5);
  truth += " for humans if not for machines";
  return truth;
}

//2
function justInCamelCase(underName) {
  let camelCaseOutput = "";
  let foundUnder = false;
  for (let i = 0; i < underName.length; i++) {
    if (underName[i] === "_") {
      foundUnder = true;
    } else {
      if (foundUnder) {
        camelCaseOutput += underName[i].toUpperCase();
        foundUnder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}
//3

function getMax(f, s, a) {
  if (f > s) {
    if (f > a) {
      return f;
    }
    return a;
  } else if (s > a) {
    return s;
  } else {
    return a;
  }
}
