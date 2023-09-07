import Badge from './components/Badge/Badge'

function App() {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge as="p" color="amber" variant="square" fontSize="baseline">
        Badge
      </Badge>
      <Badge color="blue" variant="pill">
        Badge
      </Badge>
      <Badge color="emerald" variant="pill">
        Badge
      </Badge>
    </>
  )
}

export default App
