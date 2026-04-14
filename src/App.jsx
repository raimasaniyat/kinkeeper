
const getFriends = async () => {
  const res = await fetch ("/friends.json")
  return res.json()
}

function App() {

  return (
    <>
      
    </>
  )
}

export default App
