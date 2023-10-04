import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    try {
      const response = await fetch("https://talented-waders-crab.cyclic.cloud/getall", {
        method: "GET",
      });

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();

      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const getProductCategory = createAsyncThunk(
  "products/getProductCategory",
  async (values, thunkAPI) => {
    try {
      const response = await fetch(`https://talented-waders-crab.cyclic.cloud/get/${values}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (values, thunkAPI) => {
    try {
      const response = await fetch(
        `https://talented-waders-crab.cyclic.cloud/getProduct/${values.productId}`,
        {
          method: "GET",
        }
      );

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const signUp = createAsyncThunk(
  "products/signUp",
  async (values, thunkAPI) => {

    const data = JSON.stringify(values)

  
    try {
      const response = await fetch(`https://talented-waders-crab.cyclic.cloud/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: data,
      });

      if (response.status === 400) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk(
  "products/login",
  async (values, thunkAPI) => {
  

    const data = JSON.stringify(values)

  
    try {
      const response = await fetch(`https://talented-waders-crab.cyclic.cloud/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: data,
        
      });
      

      if (response.status === 400) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "products/fetchUserData",
  async (values, thunkAPI) => {


  
    try {
      const response = await fetch(`https://talented-waders-crab.cyclic.cloud/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          // "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });
      
      if (response.status === 400) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);


export const Logout = createAsyncThunk(
  "products/Logout",
  async (values, thunkAPI) => {

  
    try {
      const response = await fetch(`https://talented-waders-crab.cyclic.cloud/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          // "Authorization": `Bearer ${token}`,
        },
        credentials: "include"
      });
      
      if (response.status === 400) {
        return thunkAPI.rejectWithValue("error");
      }
      const responseJSON = await response.json();
      
      return responseJSON;
    } catch (e) {
      throw thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  data: [],
  dataCategory: [],
  dataById: {},
  loading: false,
  error: false,
  userData: {},
  userSignup: false,
  price: 0,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updatePriceFilter: (state, {payload}) => {
      state.price = payload;
      
    },
    addCart: (state, {payload}) => {
      let existItem = JSON.parse(localStorage.getItem('cart')) || []
      existItem.push(payload)
      localStorage.setItem('cart', JSON.stringify(existItem))
    }
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
      ;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      ;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      ;
    },
    [getProductCategory.pending]: (state) => {
      state.loading = true;
      ;
    },
    [getProductCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dataCategory = payload;
      ;
    },
    [getProductCategory.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      ;
    },
    [getProductById.pending]: (state) => {
      state.loading = true;
      ;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.dataById = payload;
      state.error = false;
      ;
    },
    [getProductById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      ;
    },
    [signUp.pending]: (state) => {
      ;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.userSignup = true;
      ;
    },
    [signUp.rejected]: (state) => {
      ;
    },
    [fetchUserData.pending]: (state) => {
      ;
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      ;
    },
    [fetchUserData.rejected]: (state) => {
      ;
    },
    [Logout.pending]: (state) => {
      ;
    },
    [Logout.fulfilled]: (state, { payload }) => {
      state.userData = {};
      ;
    },
    [Logout.rejected]: (state) => {
      ;
    },
    [login.pending]: (state) => {
      ;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.userData = {};
      ;
    },
    [login.rejected]: (state) => {
      ;
    },
  },
});
export const { updatePriceFilter, addCart } = productSlice.actions;

export const productReducer = productSlice.reducer;
