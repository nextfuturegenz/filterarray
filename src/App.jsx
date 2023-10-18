import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default App