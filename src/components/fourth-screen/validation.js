export const nameValid = (name) => {
  return name && name.length < 40
}

export const emailValid = (email) => {
   return  (email && email.length < 40 && email.includes('@') && email.includes('.'))
}

export const numValid = (num) => {
    num = num.replace(/\s/g, '');
    return num && Number(num.trim()) && num.length == 13
}
