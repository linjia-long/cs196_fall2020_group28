import './App.css';
import {useState} from 'react';
import {Parallax} from 'react-parallax';
function App() {
  const [input_value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [checkimage, setCheckimage] = useState(false);
  const store_content=(e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  const print_content=() => {
    console.log(input_value);
    const data = {key: input_value};
    console.log(checkimage);
    fetch("http://127.0.0.1:5000/testing",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(response => response.json()).then(data => setResult(data));
  }

  return (
    <div className="App">
      <body>
        <Parallax bgImage="/background6.jpeg">
          <div class="parallax-container">
            <div class="secont no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h1 class="header center teal-text text-lighten-4">Mining for Bias</h1>
                </div>
                <div class="row center">
                    <div class="input-field col s8 offset-s2">
                      <input onChange = {store_content}
                        class="validate"
                        type = "text"
                        id = "url"
                        value = {input_value}
                      />
                      <label htmlFor="url">URL</label>
                    </div>
                </div>
                <a class="waves-effect waves-light btn-large teal lighten-3" onClick = {print_content}>START</a>
                <div class="row center">
                  <h5 class="header col s12 teal-text text-lighten-4">{result}</h5>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <div class="container">
          <div class="section">

            <div class="row">
              <div class="col s12 center">
                <h3><i class="mdi-content-send brown-text"></i></h3>
                <h4 class="red-text text-lighten-1">Our goal</h4>
                <p class="left-align light">
                It’s a well acknowledged fact that the media today is invariably biased, one way or another. 
                Most articles, rather than feeding you facts and letting you form your own opinion, attempt to feed you a particular narrative. 
                Bias detector is an attempt to remedy that, 
                and present you with a strictly fact-based feed based by pulling and compiling news about an event from multiple sources.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class=" grey lighten-5">
          <div class="container">
            <div class="section">

              <div class="row">
                <div class="col s12 m4">
                  <div class="icon-block">
                    <h5 class="center red-text text-lighten-1">main feature 1</h5>
                    <p class="light">discription</p>
                  </div>
                </div>

                <div class="col s12 m4">
                  <div class="icon-block">
                    <h5 class="center red-text text-lighten-1">main feature 2</h5>

                    <p class="light">discription</p>
                  </div>
                </div>

                <div class="col s12 m4">
                  <div class="icon-block">
                    <h5 class="center red-text text-lighten-1">main feature 3</h5>

                    <p class="light">discription</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        

        <div class="container">
          <div class="section">

            <div class="row">
              <div class="col s12 center">
                <h3><i class="mdi-content-send brown-text"></i></h3>
                <h4 class="red-text text-lighten-1">Tech Stack</h4>
                <div class="col l2 s12 left-align">
                </div>
                <div class="col l6 s12 left-align">
                  <p class="left-align light"><i class="tiny material-icons">check</i>Python</p>
                  <p class="left-align light"><i class="tiny material-icons">check</i>HTML</p>
                  <p class="left-align light"><i class="tiny material-icons">check</i>CSS</p>
                  <p class="left-align light"><i class="tiny material-icons">check</i>JavaScript</p>

                </div>
                <div class="col l4 s12 left-align">
                  <p class="left-align light"><i class="tiny material-icons">check</i>Jupyter Notebook</p>
                  <p class="left-align light"><i class="tiny material-icons">check</i>Google Colab</p>
                  <p class="left-align light"><i class="tiny material-icons">check</i>Visual Studio Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <footer class="page-footer teal lighten-3">
          <div class="container">
            <div class="row">
              <div class="col l4 s12 left-align">
                <h5 class="white-text">Webpage Design</h5>
                <p class="grey-text text-lighten-4">Amith Hiremath</p>
                <p class="grey-text text-lighten-4">Bryan Jeffrey Ge</p>
                <p class="grey-text text-lighten-4">Serena Behera</p>

              </div>
              <div class="col l4 s12 left-align">
                <h5 class="white-text">Model Training</h5>
                <p class="grey-text text-lighten-4">Aditya Joshi</p>
                <p class="grey-text text-lighten-4">Michal Juscinski</p>
                <p class="grey-text text-lighten-4">Riya Jain</p>

              </div>
              <div class="col l4 s12 left-align">
                <h5 class="white-text">Project Manager</h5>
                <p class="grey-text text-lighten-4">Linjia Long</p>

              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by Group 28 CS 196 Fall 2020
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}


export default App;
