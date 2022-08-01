const getIdObj: (data: any) => string = (data: any) => {
  if (typeof data === 'string') {
    return data;
  }

  return data?._id;
};

export default getIdObj;
