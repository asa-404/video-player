import logo from './logo.svg';
import { useState }from 'react'
import './App.css';
import ReactPlayer from 'react-player';
import sample from './sample-video.mp4';
;


function App() {

  const [vl, setVList] = useState([
    "https://www.youtube.com/watch?v=vLj-27T-SEQ",
    "https://www.youtube.com/watch?v=2uV5XwhH6Eg",
    "https://www.youtube.com/watch?v=9tobL8U7dQo"
  ])

  const [si, setIndex ] = useState(0)
  const [selectedFile, setSelectedFile ] = useState('')

  const handlePrevious = () => {
    setIndex(psi=> {
      if (psi == 0) {
        return psi 
      }
      psi -= 1
      return psi
    })
  }

  const handleNext = () => {
    setIndex(psi=> {
      if (psi == vl.length-1) {
        return psi 
      }
      psi += 1
      return psi
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inputFile', selectedFile);
    setSelectedFile(e.target.files[0]);
  }

  const onChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  return (
    <div className="App">
      <h1 className='app-title'>Video Player App</h1>  
      <div
      className='video-con'
      >
        <ReactPlayer
        url={vl[si]}>
        </ReactPlayer>
    </div> 
    <div className='btn-gp'>
      <button className='app-btn'
      onClick={handlePrevious}
      >
        Previous
      </button>
      <button className='app-btn'
      onClick={handleNext}
      >
        Next
      </button>
    </div>

    <div>
      <form onSubmit={handleSubmit}>
          <label>
              Upload a file: <br /><br />
              <input type="file" name="file" onChange={onChangeHandler} />
          </label>
          <br /><br />
          <button 
          className='app-btn'
          type="submit">
              Add to video player
          </button>
      </form >
    </div >
      
    </div>
  );
}

export default App;
