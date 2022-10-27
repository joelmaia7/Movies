import { configureStore } from "@reduxjs/toolkit";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { appReducer } from "../redux/store";
import ptBR from "antd/lib/locale-provider/pt_BR";
import { BrowserRouter } from "react-router-dom";

function setupStore(initialState = {}) {
  const store = configureStore({
    reducer: appReducer,
    preloadedState: { ...initialState },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });

  return store;
}

export function renderWithProviders(component: any, options: any = {}) {
  const { initialState } = options;

  const store = setupStore(initialState);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider locale={ptBR}>{component}</ConfigProvider>
      </Provider>
    </BrowserRouter>
  );
}
