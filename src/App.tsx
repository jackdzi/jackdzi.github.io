import './App.css'
import Header from "./components/Header"



function App() {

  return (
    <>
      <Header />
      <h2>
         Things I'm working on
      </h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
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
          <div style={{ width: '300px', padding: '10px'  }}>A startpage for my browser that has links to useful resources that I use a lot</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#282828',
              color: '#ebdbb2',
              border: '1px solid #ebdbb2',
              padding: '10px 20px',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href='https://ricecarrera.vercel.app'}
          >
            Website for Club
          </button>
          <div style={{ width: '300px', padding: '10px' }}>A website I'm building for a club I'm in</div>
        </div>
      </div>
    </>
  )
}

export default App
