export function NumeroAleatorio(max, min) {
  const NumMax = Number(max)
  const NumMin = Number(min)
  const Resultado = Math.floor(Math.random() * (NumMax - NumMin + 1) + NumMin)
  
  return Resultado
  
}