export default date => {

  const today = new Date();

  const currDate = () => {
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
  }

  const dateConverter = (str, split, join) => {
    return str.split(split).reverse().join(join);
  }

  return [currDate, dateConverter];
}