import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from './components/Particles/Particles';
import FaceRecognition from './components/FaceRecognition/FaceRecongnition'
import { Component } from 'react';
import Clarifai from 'clarifai';

const USER_ID = 'shubhu1026';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '4e15238e6f6443a88796c2219d3253c9';
const APP_ID = 'face-it';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonDetect = () => {
    this.setState({imageUrl: this.state.input})

    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
          "user_app_id": {
              "user_id": USER_ID,
              "app_id": APP_ID
          },
          "inputs": [
              {
                  "data": {
                      "image": {
                          "url": IMAGE_URL
                      }
                  }
              }
          ]
      });

      const requestOptions = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Authorization': 'Key ' + PAT
          },
          body: raw
      };

      fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

  render(){
    return (
      <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonDetect={ this.onButtonDetect }/>
        <FaceRecognition imageUrl={ this.state.imageUrl }/>
      </div>
    );
  }
}

export default App;
