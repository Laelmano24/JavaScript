const Agora = new Date()
const Dias = Agora.getDay()
const Horas = Agora.getHours()
const Minutos = Agora.getMinutes()

function VerificarDias() {
  switch (Dias) {
  case 0: {
    return "Erro, hoje é domingo. você não está no servidor"
    break
  }
  case 1: {
    return "Hoje é segunda"
    break
  }
  case 2: {
    return "A entidade não spwana nesse dia"
    break
  }
  case 3: {
    return "Hoje é quarta"
    break
  }
  case 4: {
    return "Hoje é quinta"
    break
  }
  case 5: {
    return "Hoje é sexta"
    break
  }
  case 6 : {
    return "Erro, hoje é sábado. você não está no servidor"
    break
  }
  default: {
    return "Caju"
  }
  }
}

export function VerificarHoras() {
  const OsDias = VerificarDias()
  if (OsDias === "Hoje é segunda") {
    
    if ((Horas === 13 && Minutos === 10) || (Horas === 10 && Minutos === 10)) {
      
      return "Burlamaker vai spawnar"
      
    } else if ((Horas === 13 && Minutos <= 50) || (Horas === 11 && Horas < 12)) {
      
      return "Burlamaker possivelmente spwanou"
      
    } else if ((Horas >= 7 && Horas <= 10) || (Horas === 10 && Minutos <= 9)) {
      
      return "Burlamaker ainda vai spawnar"
      
    } else if ((Horas > 13 && Horas <= 15) || (Horas === 16 && Minutos <= 40)) {
      
      return "Burlamaker não vai spwanar mais"
    } else {
      return "Tá pesando no cara nessa hora?"
    }
    
  } else if (OsDias === "A entidade não spwana nesse dia") {
    
    return "A entidade não spwanar nesse dia"
    
  } else if (OsDias === "Hoje é quarta") {
    if (Horas === 10 && Minutos < 20) {
      return "Jajá o cara spwanar"
    } else if ((Horas === 10 && Minutos > 10) || (Horas === 11 && Minutos <= 10)) {
      return "Burlamaker possivelmente spwanou"
    } else if (Horas >= 7 && Horas <= 9) {
      return "Vai demora pra spwanar"
    } else if ((Horas >= 13) || (Horas === 16 && Minutos <= 40)) {
    
      return "Burlamaker não vai spwanar mais"
    } else {
      return "Tá pesando no cara nessa hora?"
    }
  } else if (OsDias === "Hoje é quinta") {
    if (Horas === 7) {
      return "Vai demorar pra spwanar"
    } else if (Horas === 8 && (Minutos > 0 && Minutos <= 20)) {
      return "Jajá ele spwanar"
    } else if (Horas === 8 && Minutos > 20) {
      return "Burlamaker possivelmente spwanou"
    } else if ((Horas >= 9) || (Horas === 16 && Minutos <= 40)) {
    
      return "Burlamaker não vai spwanar mais"
    } else {
      return "Tá pesando no cara nessa hora?"
    }
  } else if (OsDias === "Hoje é sexta") {
    
    if ((Horas === 13 && Minutos === 10) || (Horas === 10 && Minutos === 10)) {
    
      return "Burlamaker vai spawnar"
    
    } else if ((Horas === 13 && Minutos <= 50) || (Horas === 11 && Horas < 12)) {
    
      return "Burlamaker possivelmente spwanou"
    
    } else if ((Horas >= 7 && Horas <= 10) || (Horas === 10 && Minutos <= 9)) {
     
      
      return "Burlamaker ainda vai spawnar"
      
    
    } else if ((Horas > 13 && Horas <= 15) || (Horas === 16 && Minutos <= 40)) {
    
      return "Burlamaker não vai spwanar mais"
    } else {
      return "Tá pesando no cara nessa hora?"
    }
    
  } else {
    return "Tá pesando no cara nesse dia?"
  }
}