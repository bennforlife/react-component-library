import { styled } from '@linaria/react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import logo from './assets/logo.svg'
import profilePhoto from './assets/profile-photo.jpg'
import { screens } from './global.styles'
import TestimonialWithImage from './components/NewTestimonial/TestimonialWithImage'
import TestimonialWithoutImage from './components/NewTestimonial/TestimonialWithoutImage'

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1em 0 0.5em;
`
const Grid = styled.div`
  display: grid;
  gap: 2.875em;

  @media (min-width: ${screens.md}) {
    grid-template-columns: repeat(3, auto);
  }
`

const data = {
  testimonial: {
    photoSrc: profilePhoto,
    photoAlt: 'Photo of May Andersons',
    logoSrc: logo,
    logoAlt: 'Workcation logo',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.',
    name: 'May Andersons',
    position: 'Workcation, CTO',
  },
}

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
      <section>
        <H1>Testimonial</H1>
        <TestimonialWithImage
          photoSrc={data.testimonial.photoSrc}
          photoAlt={data.testimonial.photoAlt}
          quote={data.testimonial.quote}
          name={data.testimonial.name}
          position={data.testimonial.position}
        />
        <TestimonialWithoutImage
          logoSrc={data.testimonial.logoSrc}
          logoAlt={data.testimonial.logoAlt}
          quote={data.testimonial.quote}
          name={data.testimonial.name}
          position={data.testimonial.position}
        />
      </section>
    </>
  )
}

export default App
