function rand5() {
  let result = 7;  // Arbitrarily large
  while (result > 5) {
    result = rand7();
  }
  return result;
}

function rand5() {
  let result = 7;  // Arbitrarily large
  while (result > 5) {
    result = rand7();
  }
  return result;
}


function rand7() {

  while (true) {

    // Do our die rolls
    const roll1 = rand5();
    const roll2 = rand5();

    const outcomeNumber = (roll1-1) * 5 + (roll2-1) + 1;

    // If we hit an extraneous
    // outcome we just re-roll
    if (outcomeNumber > 21) continue;

    // Our outcome was fine. return it!
    return outcomeNumber % 7 + 1;
  }
}