import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <div className="inner">
              <h1>이유채의 React 과제방</h1>
              <nav className="menu">
              <a href="https://dbco0409.github.io/html2507/" className="css"><i className="fa-brands fa-css"></i> CSS</a>
              <a href="https://dbco0409.github.io/js2507/" className="js"><i className="fa-brands fa-js"></i> JS</a>
              <a href="https://dbco0409.github.io/react2508/" className="active react"><i className="fa-brands fa-react"></i> React</a>
              </nav>
          </div>
      </header>
      <section className="main02">
        <div className="nav">
            <table>
                <colgroup>
                <col width="120"/>
                <col/>
                <col width="100"/>
                </colgroup>
                <tr>
                    <th>REACT 1</th>
                    <td><a href="./work/react0811/index.html" target="page">React 연습</a></td>
                    <td className="date" rowspan="2">25-08-11</td>
                </tr>
                <tr>
                    <th>REACT 2</th>
                    <td><a href="./work/react0811_02/index.html" target="page">React UseState 예제</a></td>
                </tr>
                <tr>
                    <th>REACT 3</th>
                    <td><a href="./work/react0812/index.html" target="page">React UseState, UseEffect 예제</a></td>
                    <td className="date">25-08-12</td>
                </tr>
            </table>
        </div>
        <div className="content"> 
            <iframe src="" frameborder="0" name="page" id="page"></iframe>
        </div>
    </section>
    </>
  )
}

export default App
