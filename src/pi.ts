function pi(sampleSize: number) {
  let insideCircle: number = 0;

  for (let i: number = 0; i < sampleSize; i++) {
    const x: number = Math.random();
    const y: number = Math.random();
    if (Math.sqrt(x * x + y * y) < 1) {
      insideCircle++
    }
  }

  const pi: number = (insideCircle / sampleSize) * 4;

  return `Pi: ${pi}`
}

console.log(pi(100_000_000));
