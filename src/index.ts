// a-b => aB
// a_b => aB
// a-b-ef_gh
const camelize = (str: string): string => {
  return str.replace(/[_.-](\w|$)/g, function(_, x) {
    return x.toUpperCase();
  });
};

const fn = (path: string): string => {
  const paths = path.split('.');
  return paths.map(camelize).join('.');
};

export default fn;
