import { colors, screens } from '../../global.styles'
import { styled } from '@linaria/react'

const Testimonial = styled.div`
  color: ${colors.gray[900]};
  background-color: ${colors.white};
  max-width: ${screens.xl};

  .testimonial__container {
    position: relative;
    z-index: 1;
    background-color: ${colors.white};

    &::before {
      content: '';
      display: block;
      width: 54%;
      height: 7.5rem;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-image: url('../../assets/checkeredpath.svg');
    }

    @media (min-width: ${screens.lg}) {
      &::before {
        width: 15rem;
        height: 74%;
      }
    }
  }

  .testimonial__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 4rem 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: ${screens.lg};
  }

  .testimonial__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: ${screens.lg}) {
      align-items: center;
    }
  }

  .testimonial__quote {
    font-size: 1.5rem;
    line-height: 1.5;

    &::before,
    &::after {
      content: '"';
    }

    p {
      display: inline;
    }
  }

  .testimonial__quote {
    @media (min-width: ${screens.lg}) {
      text-align: center;
    }
  }

  .testimonial__citation {
    line-height: 1.5;

    @media (min-width: ${screens.lg}) {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: '/';
        font-size: 1.375rem;
        font-weight: 500;
        color: ${colors.blue[600]};
      }

      p:first-child {
        order: -1;
      }
    }
  }

  .testimonial__position {
    color: ${colors.gray[500]};
  }
`
export default function TestimonialWithoutImage({
  logoSrc,
  logoAlt,
  quote,
  name,
  position,
}) {
  return (
    <Testimonial>
      <div className="testimonial__container">
        <div className="testimonial__inner">
          <div className="testimonial__header">
            <img src={logoSrc} alt={logoAlt} />
          </div>
          <figure className="testimonial__body">
            <blockquote className="testimonial__quote">
              <p>{quote}</p>
            </blockquote>
            <figcaption className="testimonial__citation">
              <p className="testimonial__name">{name}</p>
              <p className="testimonial__position">{position}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </Testimonial>
  )
}
