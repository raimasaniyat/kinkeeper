
const getFriends = async () => {
  const res = await fetch ("/friends.json")
  return res.json()
}
const friendsPromise = getFriends()

function App() {

  return (
    <>
      <Friends friendsPromise={friendsPromise} ></Friends>
    </>
  )
}

export default App
