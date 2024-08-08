import './App.css'
import Welcome from './components/welcome/welcome'

function App() {

  var user = { name: 'Salazar', idade: 21, email: 'teste@gmail.com', dtNascimento: '27/09/2002' }

  return (
    <>
      <h1>1TDSR</h1>
      <Welcome />
      {user.name}
      <br></br>
      {user.idade}
    </>
  )
}

export default App
