const initialState = {
  allProduct: [],
  productDetail: [],
  productImage: [],
  id: '',
  isLoading: false,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_PRODUCT':
      return {
        ...state,
        allProduct: action.payload,
        isLoading: false,
      };
    case 'GET_ALL_PRODUCT':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PRODUCT_DETAIL':
      return {
        ...state,
        subProduct: action.payload,
        isLoading: false,
      };
    case 'GET_PRODUCT_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_PRODUCT_IMAGE':
      return {
        ...state,
        productImage: action.payload,
      };
    case 'GET_PRODUCT_IMAGE':
      return {
        ...state,
      };

    default:
      return state;
  }
};
