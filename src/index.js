const ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8
};

const diary1 = {
  algebra: 6,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10
};

const diary2 = {
  algebra: 8,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10
};

const diary3 = {
  algebra: 6,
  history: 5,
  physics: 5,
  geography: 9,
  chemistry: 10
};

function whoseBicycle(diary1, diary2, diary3) {
  let firstSonMark = 0;
  let secondSonMark = 0;
  let thirdSonMark = 0;

  for (let key in diary1) {
    firstSonMark += diary1[key];
  }

  for (let key in diary2) {
    secondSonMark += diary2[key];
  }

  for (let key in diary3) {
    thirdSonMark += diary3[key];
  }

  if (firstSonMark === Math.max(firstSonMark, secondSonMark, thirdSonMark)) {
  } else if (
    secondSonMark === Math.max(firstSonMark, secondSonMark, thirdSonMark)
  ) {
  } else {
  }
}
