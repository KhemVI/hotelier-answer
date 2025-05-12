const ERRORS = {
  dimension: "The dimensions of the matrices must be equal"
}

function sumMatrix(matrixA, matrixB) {
  if (matrixA.length !== matrixB.length) {
    throw new Error(ERRORS.dimension);
  }
  const resultMatrix = [];
  for (let i = 0; i < matrixA.length; i++) {
    if (matrixA[i].length !== matrixB[i].length) {
      throw new Error(ERRORS.dimension);
    }
    let row = [];
    for (let j = 0; j < matrixA.length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    resultMatrix.push(row);
  }
  return resultMatrix;
}

console.log(
  sumMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]
  )
);