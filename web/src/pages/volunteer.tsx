import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import Button from '../components/ui/Button'
import TextField from '@material-ui/core/TextField'
import FormModal from '../components/FormModal'
import FullImage from '../components/ui/FullImage'

const volunteer = (props) => {
  const { data } = props

  const [formElements, setFormElements] = useState({
    fName: '',
    lName: '',
    email: '',
    location: '',
    contact: '',
    help: '',
  })
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  const handleChange = e => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value })
  }

  const handleSuccess = () => {
    setFormElements({
      fName: '',
      lName: '',
      email: '',
      location: '',
      contact: '',
      help: '',
    })
    setModal(true)
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'volunteer', ...formElements }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <Container>
      <SEO title="Volunteer" />
      <Enterence>
        <h2>Volunteer</h2>
        <h6>
          Thank you for your interest in volunteering. Right now, we are looking
          for:
        </h6>
        <ul>

          <li>Online help to help with our online accounts</li>
          <li>Online help to process our many photos and videos showing our efforts and animals</li>
          <li>Flight volunteers in the USA and Canada and Europe</li>
          <li>In person help in shelter (We can help organize accommodations. Come visit us.)</li>
          <li>Any other way your unique talents could help us</li>
        </ul>
      </Enterence>

      <FullImage fluid={data?.food?.childImageSharp?.fluid} alt="Food we can serve to the dogs" height={60} />

      <Form
        name="volunteer"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        overlay={modal}
        onClick={closeModal}
      >
        <h4>
          If you would like to volunteer feel free to fill the form below.
        </h4>
        <Column>
          <TextField
            id="fname"
            name="fName"
            label="First Name"
            helperText="Required *"
            type="text"
            required
            onChange={handleChange}
            value={formElements.fName}
            variant="outlined"
          />
          <TextField
            id="lname"
            name="lName"
            label="Last Name"
            type="text"
            required
            helperText="Required *"
            onChange={handleChange}
            value={formElements.lName}
            variant="outlined"
          />
        </Column>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          helperText="Required *"
          onChange={handleChange}
          value={formElements.email}
          variant="outlined"
        />
        <Column>
          <TextField
            id="location"
            name="location"
            label="Location"
            type="text"
            onChange={handleChange}
            value={formElements.location}
            variant="outlined"
          />
          <TextField
            id="contact"
            name="contact"
            label="Best Way to Contact You"
            type="text"
            onChange={handleChange}
            helperText="If it's email leave it empty"
            value={formElements.contact}
            variant="outlined"
          />
        </Column>
        <TextField
          id="help"
          name="help"
          label="How Can You Help"
          type="text"
          onChange={handleChange}
          multiline
          rows={4}
          value={formElements.help}
          variant="outlined"
        />

        <Button type="submit">Send</Button>
        <FormModal visible={modal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={closeModal}>Okay</Button>
        </FormModal>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: var(--pageGap);
  padding: var(--paddingW);
  text-align: center;
  justify-items: center;
`

const Form = styled.form`
  display: grid;
  gap: 2rem;
  max-width: var(--maxWidth);
  width: 100%;
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Column = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 414px) {
    grid-auto-flow: column;
    gap: 1rem;
  }
`

const Enterence = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;

  gap: 1rem;
  justify-items: center;

  ul {
    padding: 2rem;
  }
  li {
    text-align: left;
    list-style: square;
  }
`

export const query = graphql`
  query {
    food: file(relativePath: { eq: "food.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default volunteer
