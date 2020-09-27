import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//시멘틱 UI 사용
import "semantic-ui-css/semantic.min.css";

// Store등록을 위한 Provider
import { Provider } from "mobx-react";
// 방금전 만든 bookStore객체
import bookStore from "./book/store/BookStore";

ReactDOM.render(
  // Provider 에 props로 bookStore를 넣어줍니다.
  <Provider bookStore={bookStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
