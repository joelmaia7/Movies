import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import ptBR from 'antd/es/locale/pt_BR';
import { RouterProvider } from "react-router-dom";

import store from './redux/store';
import router from './router';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
