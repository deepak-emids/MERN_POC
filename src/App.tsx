import React from "react";
import logo from "./logo.svg";
import "./App.css";
import service from "./services/services";
import SignupForm from "./components/addEmployeeForm/EmployeeFrom";

function App() {
  <>
    <SignupForm />
  </>;
  // React.useEffect(() => {
  //   foo();
  // }, []);

  // let foo = async () => {
  //   let data = {
  //     email: "hi@gmial",
  //     password: "as",
  //   };
  //   service
  //     .Signin(data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((res) => {});
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
