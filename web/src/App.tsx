interface ButtonProps{
  text?: string;
}

function Button(props: ButtonProps){
  return <button className="bg-purple-800 p-2">{props.text ?? 'Default'}</button>
}

function App() {
  return <h1>
    <Button text="Enviar"/>
    <Button text="Salvar"/>
    <Button />
  </h1>
}

export default App
