test = function ({ t = '', ...v }) {
  console.log('t = ', t);
  console.log('v = ', v);
};

test({
  t: 'one',
});
