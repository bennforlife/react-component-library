import { styled } from '@linaria/react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import { HiOutlineCloudUpload } from 'react-icons/hi'

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1em 0 0.5em;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2.875em;
`

function App() {
  return (
    <>
      <section>
        <H1>Badges</H1>
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
      </section>
      <section>
        <H1>Banners</H1>
        <Banner>
          <Banner.Header as="h2">Neutral banner</Banner.Header>
          <Banner.Body>React Component Library is going live!</Banner.Body>
        </Banner>
        <Banner status="success">
          <Banner.Header as="h2">Success banner</Banner.Header>
          <Banner.Body>Data uploaded to the server.</Banner.Body>
        </Banner>
        <Banner status="warning">
          <Banner.Header as="h2">Warning banner</Banner.Header>
          <Banner.Body>
            Seems your account is about to expire, upgrade now.
          </Banner.Body>
        </Banner>
        <Banner status="error">
          <Banner.Header as="h2">Error banner</Banner.Header>
          <Banner.Body>There was an error processing your request</Banner.Body>
        </Banner>
      </section>
      <section>
        <H1>Cards</H1>
        <Grid>
          <Card>
            <Card.Header as="h2">Easy Deployment</Card.Header>
            <Card.Body>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Body>
          </Card>
          <Card>
            <Card.Icon icon={<HiOutlineCloudUpload />}></Card.Icon>
            <Card.Header as="h2">Easy Deployment</Card.Header>
            <Card.Body>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Body>
          </Card>
          <Card>
            <Card.Icon />
            <Card.Header as="h2">Easy Deployment</Card.Header>
            <Card.Body>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Body>
          </Card>
        </Grid>
      </section>
    </>
  )
}

export default App
