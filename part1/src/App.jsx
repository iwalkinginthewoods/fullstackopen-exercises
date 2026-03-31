const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App= () => {
  const name="peter"
  const age=12
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Nancy" age={age+2}/>
    </div>
  )
}
export default App