import "./App.css"
import AgeCalculator from "./components/AgeCalculator"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const AppStyle = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  }
  const AgeCalculatorStyle = {
    width: "400px",
    height: "300px",
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={AppStyle}
    >
      <div style={AgeCalculatorStyle}>
        <AgeCalculator />
      </div>
    </div>
  )
}

export default App
