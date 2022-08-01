export default (errors: any, name: string) => {
  if (errors[name]) {
    const keys = Object.keys(errors);

    return keys[0] === name ? errors[name].message : '';
  }
  return '';
};
