export const getAllProduct = payload => {
  return {
    type: 'GET_ALL_PRODUCT',
    payload,
  };
};

export const setAllProduct = payload => {
  return {
    type: 'SET_ALL_PRODUCT',
    payload,
  };
};

export const getProductDetail = payload => {
  return {
    type: 'GET_PRODUCT_DETAIL',
    payload,
  };
};

export const setProductDetail = payload => {
  return {
    type: 'SET_PRODUCT_DETAIL',
    payload,
  };
};

export const setId = payload => {
  return {
    type: 'SET_ID',
    payload,
  };
};

export const setLoading = payload => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};

export const setProductImage = payload => {
  return {
    type: 'SET_PRODUCT_IMAGE',
    payload,
  };
};

export const getProductImage = payload => {
  return {
    type: 'GET_PRODUCT_IMAGE',
    payload,
  };
};
