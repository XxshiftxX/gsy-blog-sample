import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container lg:h-screen mx-auto flex gap-20 py-16 px-8 overflow-auto flex-col lg:flex-row lg:overflow-hidden">
        <div className="header">
          <h1 className="font-extrabold text-5xl tracking-widest leading-tight">
            WELCOME <br />
            TO MY <br />
            PERSONAL <br />
            BLOG
          </h1>
        </div>
        <div className="body flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
