import { colors, screens } from '../../global.styles'
import { styled } from '@linaria/react'

const Testimonial = styled.div`
  padding-top: 25vw;
  color: ${colors.white};
  background-color: ${colors.white};
  max-width: ${screens.xl};

  @media (min-width: ${screens.lg}) {
    padding: 2rem 0;
    background-color: transparent;
  }

  .testimonial__container {
    background-color: ${colors.blue[600]};
  }

  .testimonial__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem 4rem;

    @media (min-width: ${screens.lg}) {
      flex-direction: row;
      padding: 0 4.25rem;
    }
  }

  .testimonial__header {
    width: 100%;
    height: 50vw;
    margin-top: -25vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
      box-shadow:
        0px 10px 10px -5px rgba(0, 0, 0, 0.04),
        0px 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: ${screens.lg}) {
      flex-shrink: 0;
      width: 24rem;
      height: 29rem;
      margin: -2rem 0;
    }
  }

  .testimonial__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .testimonial__quote {
    font-size: 1.5rem;
    line-height: 1.5;

    &::before {
      content: '';
      display: block;
      height: 3rem;
      width: 3rem;
      margin-bottom: 1.5rem;
      background-image: url('../../assets/quote-icon.svg');
    }
  }

  .testimonial__citation {
    line-height: 1.5;
  }

  .testimonial__name {
    font-weight: 700;
  }
`
export default function TestimonialWithImage({
  photoSrc,
  photoAlt,
  quote,
  name,
  position,
}) {
  return (
    <Testimonial>
      <div className="testimonial__container">
        <div className="testimonial__inner">
          <div className="testimonial__header">
            <img src={photoSrc} alt={photoAlt} />
          </div>
          <figure className="testimonial__body">
            <blockquote className="testimonial__quote">
              <p>{quote}</p>
            </blockquote>
            <figcaption className="testimonial__citation">
              <p className="testimonial__name">{name}</p>
              <p className="testimonia__position">{position}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </Testimonial>
  )
}
