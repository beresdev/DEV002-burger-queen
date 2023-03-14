export const orderNumber = () => {
    const currentDate = new Date();
    const seed = currentDate.getTime();
    const randomNumber = Math.floor(Math.random() * seed);
    console.log('T-No: ', randomNumber);
    return randomNumber;
}