export function soma(p) {
  const total = p.reduce((acc, elem) => acc + elem.total, 0)
  return total
}


