import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// import { configureStore } from "@reduxjs/toolkit";
// // import userReducer from "../features/counterSlice";

// export const store = configureStore({
//     reducer: {
//         // counter: userReducer,
//     },
// });
