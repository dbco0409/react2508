import './App.css'
import Counter from './components/Counter'
import InputMirror from './components/InputMirror';
import ColorChanger from './components/ColorChanger';
import ToggleButton from './components/ToggleButton';
import TodoList from './components/TodoList';

function App() {

  return (
    <>
      <Counter />
      <hr/>
      <InputMirror />
      <hr/>
      <ColorChanger/>
      <hr/>
      <ToggleButton/>
      <hr/>
      <TodoList/>
    </>
  )
}

export default App
