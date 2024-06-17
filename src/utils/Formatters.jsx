// src/utils/formatter.js

const formatter = {
  // Format a number with commas
  formatNumber: (number) => {
    return number.toLocaleString();
  },

  // Format a date to a specific pattern
  formatDate: (date, format = 'YYYY-MM-DD') => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    switch (format) {
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      default:
        return `${year}-${month}-${day}`;
    }
  },

  // Format a currency value
  formatCurrency: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  },

  // Capitalize the first letter of a string
  capitalizeFirstLetter: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Add more formatting functions as needed...
};

export default formatter;