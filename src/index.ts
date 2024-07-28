// a-b => aB
// a_b => aB
// a-b-ef_gh => aB.efGh
const camelCaseRE = /[-_]+(.)?/g;
const camelize = (inStr: string): string => {
  const str = (inStr || '').replace(camelCaseRE, (_, chr) => chr ? chr.toUpperCase() : '');
  return str[0].toLowerCase() + str.slice(1);
};

const fn = (path: string): string => {
  let paths = path.split('.');
  const len = paths.length;
  if (len <= 2) return camelize(paths.join('-'));
  paths = [paths[0], paths.slice(1).join('-')];
  return paths.map(camelize).join('.');
};

export default fn;
