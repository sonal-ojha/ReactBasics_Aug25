import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloWorld from './hellowWorld';
import Counter from './components/Counter';

// functional component
// function App() {
//   return (
//     <div className="App">
//       <HelloWorld />
//     </div>
//   );
// }

// class component
class App extends React.Component {
  state = {
    displayImage: false,
  };

  handleShowImageInAPP = () => {
    //  update state
    this.setState({
      displayImage: true,
    })
  }

  handleHideImageInAPP = () => {
    //  update state
    this.setState({
      displayImage: false,
    })
  }

  render() {
    console.log('Render !');
    const { displayImage } = this.state;
    return(
      <div className="App">
       <HelloWorld />
       <Counter
        text="Increment"
        text1="Decrement"
        displayImage={displayImage}
        handleShowImage={this.handleShowImageInAPP}
        handleHideImage={this.handleHideImageInAPP}
       />
     </div>
    )
  }
}

export default App;
