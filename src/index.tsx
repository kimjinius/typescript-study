import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware } from 'redux';
import "./index.css";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './store/store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({
});
const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  applyMiddleware(sagaMiddleware)
); 


// saga를 실행
sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);