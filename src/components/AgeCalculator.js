import { useState } from "react"

export function AgeCalculator() {
  const [shouldDisplayAge, setShouldDisplayAge] = useState(false)
  const [date, setDate] = useState(new Date())
  const [age, setAge] = useState(0)
  const AgeCalculatorStyle = {
    width: "100%",
    height: "100%",
  }
  const handleDateUpdate = (event) => {
    setDate(new Date(event.target.value))
  }
  const handleClick = () => {
    let currentDate = new Date()
    let age = 0
    let yearDiff = currentDate.getFullYear() - date.getFullYear()
    let monthDiff = currentDate.getMonth() - date.getMonth()
    let datDiff = currentDate.getDate() - date.getDate()
    age = yearDiff
    if (yearDiff > 0 && (monthDiff < 0 || (monthDiff === 0 && datDiff < 0))) {
      age--
    }
    setAge(age)
    setShouldDisplayAge(true)
  }
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center"
      style={AgeCalculatorStyle}
    >
      <div className="h1 m-2">AgeCalculator</div>
      <div className="fw-bold m-2">Enter your date of birth</div>
      <input
        className="form-control m-2"
        type="date"
        onChange={handleDateUpdate}
      ></input>
      <button className="btn btn-primary m-2" onClick={handleClick}>
        Calculate Age
      </button>
      {shouldDisplayAge ? (
        <div className="h3 m-2">You are {age} years old</div>
      ) : null}
    </div>
  )
}

export default AgeCalculator
