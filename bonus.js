const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function main() {
  let input = await askQuestion('input: ');
  rl.close();
  const inputNum = Number(input);
  if (!Number.isInteger(inputNum)) {
    throw new Error("input must be integer");
  }
  let art = "";

  const maxSuffixSpaces = 3 + ((inputNum - 3) / 2) * 4;
  let prefixSpaces = 0;
  let suffixSpaces = maxSuffixSpaces;
  // result: 9
  // *               *  *s15*
  //   *           *    s2*s11*
  //     *       *      s4*s7*
  //       *   *        s6*s3*
  while (prefixSpaces < inputNum && suffixSpaces > 0) {
    art += " ".repeat(prefixSpaces);
    if (suffixSpaces > 0) {
      art += "*" + " ".repeat(suffixSpaces) + "*";
    }
    prefixSpaces += 2;
    suffixSpaces -= 4;
    art += "\n";
  }
  //         *          s8*
  if (inputNum % 2 === 1) {
    art += " ".repeat(prefixSpaces) + "*";
  } else {
    art = art.substring(0 ,art.lastIndexOf("\n"));
  }
  //       *   *        s6*s3*
  //     *       *      s4*s7*
  //   *           *    s2*s11*
  // *               *  *s15*
  while (suffixSpaces <= maxSuffixSpaces && prefixSpaces >= 0) {
    art += " ".repeat(prefixSpaces);
    if (suffixSpaces > 0) {
      art += "*" + " ".repeat(suffixSpaces) + "*";
    }
    prefixSpaces -= 2;
    suffixSpaces += 4;
    art += "\n";
  }

  console.log("result : ");
  console.log(art);
};

main();



