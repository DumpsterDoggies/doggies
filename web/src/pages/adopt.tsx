import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import Button from '../components/ui/Button'
import TextField from '@material-ui/core/TextField'
import Container from '../components/Container'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Letter from '../components/Letter'
import FormModal from '../components/FormModal'
import FullImage from '../components/ui/FullImage'

const Adopt = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  const [formElements, setFormElements] = useState({
    email: '',
    interestedin: '',
    fName: '',
    lName: '',
    address: '',
    city: '',
    postalCode: '',
    occupation: '',
    age: '',
    house: '',
    otherPet: '',
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
      email: '',
      fName: '',
      lName: '',
      address: '',
      city: '',
      interestedin: '',
      postalCode: '',
      occupation: '',
      age: '',
      house: '',
      otherPet: '',
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
      body: encode({ 'form-name': 'adopt', ...formElements }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <Container>
      <SEO title="Adopt" description={description} />
      <Letter title="Adopt">
        <p>
          Every time we are able to find a loving home for our dogs, we rejoice!
          Having a pet is something but rescue and adoption have a wholly
          different philosophy, it is about saving a life.
        </p>

        <p>
          Unfortunately, life is not easy for stray animals in Turkey. Our goal
          is to find a forever home for each one of them and send as many of
          these beautiful animals to the US, Canada, or Europe so they can live
          a life they truly deserve.
        </p>

        <p>
          We do everything on our side to help the adopters who want to save a
          life from Turkey. We know the rules and regulations for North America
          and Europe and prepare the doggies according to these regulations. All
          dogs are vet-checked, microchipped, vaccinated, spayed/neutered before
          adoption. Each dog’s adoption fee helps to cover the cost of their vet
          care as well as their flight. We work with our rescue partner in
          Canada Stray2Play through adoption processes.
        </p>

        <p>
          We were able to send 41 doggies to the US, Canada, UK, and Belgium by
          now. Among them, there are 7 tripods, 3 blind doggies.Also, we’ll
          start to put our doggies that are available for adoption on our
          website starting from September 2021
        </p>
      </Letter>

      <FullImage fluid={data?.puppyOnStairs?.childImageSharp?.fluid} alt="lauren-kay-Z819bGz43B8-unsplash" height={60}/>

      <Form
        name="adopt"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        overlay={modal}
        onClick={closeModal}
      >
        <h4>If you would like to adopt feel free to fill the form below.</h4>
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
        <TextField
          id="interestedin"
          name="interestedin"
          label="What dog are you interested in? Are you open to suggestions?"
          type="text"
          onChange={handleChange}
          value={formElements.interestedin}
          variant="outlined"
        />
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
          id="address"
          name="address"
          label="Address"
          type="text"
          onChange={handleChange}
          value={formElements.address}
          variant="outlined"
        />
        <Column>
          <TextField
            id="city"
            name="city"
            label="City"
            type="text"
            onChange={handleChange}
            value={formElements.city}
            variant="outlined"
          />
          <TextField
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            type="text"
            onChange={handleChange}
            value={formElements.postalCode}
            variant="outlined"
          />
        </Column>
        <TextField
          id="occupation"
          name="occupation"
          label="Occupation"
          type="text"
          onChange={handleChange}
          value={formElements.occupation}
          variant="outlined"
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Are you over 21?</FormLabel>
          <RadioGroup
            className="radioGroupS"
            aria-label="age"
            name="age"
            value={formElements.age}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Do you own or rent your home?
          </FormLabel>
          <RadioGroup
            className="radioGroupS"
            aria-label="house"
            name="house"
            value={formElements.house}
            onChange={handleChange}
          >
            <FormControlLabel value="rent" control={<Radio />} label="Rent" />
            <FormControlLabel value="own" control={<Radio />} label="Own" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Do you have any other pets at home?
          </FormLabel>
          <RadioGroup
            className="radioGroupS"
            aria-label="otherPet"
            name="otherPet"
            value={formElements.otherPet}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

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

const Form = styled.form`
  display: grid;
  gap: 2rem;
  max-width: var(--maxWidth);
  width: 100%;
  text-align: left;
  .radioGroupS {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }

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

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    gap: 1rem;
  }
`

export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          description

          title
        }
      }
    }
    puppyOnStairs: file(relativePath: { eq: "puppyOnStairs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Adopt
