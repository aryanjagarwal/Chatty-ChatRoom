import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import ChatRoom from "./pages/ChatRoom"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/chat" element={<ChatRoom />}/>
    </Routes>
    </>
  )
}

export default App
