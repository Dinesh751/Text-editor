import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
import Alert from "./component/Alert";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("you are switched to dark mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("you are switched to light mode", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert showAlert={showAlert} alert={alert} />
      <div className="container-sm my-3 ">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />

          <Route
            path="/"
            element={
              <TextForm
                heading="Try TextUtils- Word Counter,Character Counter,Remove Extra Spaces "
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
