export const orderNumber = () => {
  const currentDate = new Date()
  const seed = currentDate.getTime()
  const randomNumber = Math.floor(Math.random() * seed)
  return randomNumber
}

export const formatingDate = (date) => {
  const resDate = date.split('-')
  if (resDate[1] < 10) {
    const res = resDate[1].slice(1)
    return (res + '/' + resDate[2] + '/' + resDate[0])
  } else {
    return (resDate[1] + '/' + resDate[2] + '/' + resDate[0])
  }
}
