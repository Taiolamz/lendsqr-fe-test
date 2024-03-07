import { configureStore } from "@reduxjs/toolkit";
import { dashboardUsersSlice } from "./users";

const makeStore = () =>
  configureStore({
    reducer: {
      users: dashboardUsersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActionPaths: [],
        },
      }),
  });

const store = makeStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
