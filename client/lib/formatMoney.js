const formatMoney = (amount = 0) => {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: '2',
  };

  const formatter = Intl.NumberFormat('en-EN', options);

  return formatter.format(amount / 100);
};

export default formatMoney;
