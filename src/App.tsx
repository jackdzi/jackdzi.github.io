import './App.css'



function App() {

  return (
    <>
      <p className="placeholder">
         Work in progress
      </p>
      <button 
        style={{ 
          backgroundColor: '#282828', 
          color: '#ebdbb2', 
          border: '1px solid #ebdbb2', 
          padding: '10px 20px', 
          cursor: 'pointer' 
        }} 
        onClick={() => window.location.href='https://jackdzi.github.io/startpage/'}
      >
        Startpage
      </button>
    </>
  )
}

export default App
