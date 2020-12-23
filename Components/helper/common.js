const uniqueId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
};

const toEuro = (money) => {
   return new Intl.NumberFormat('it-it', { 
  currency: 'EUR',
  style: 'currency',
  }).format(money); 
}
export {
    uniqueId,
    toEuro,
}