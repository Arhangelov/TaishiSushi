import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {addSushi} from '../../../services/sushiService'
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  TextArea,
} from "./AddElements";

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [portion, setPortion] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()

    addSushi({title, description, type, portion, price, imageUrl})
    .then(toast.success('You successfully add new product in to the base', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        }
    }))
    .catch(err => toast.error(`${err.massage}`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        }
      }
    ))
  }

  return (
    <Container>
      <Toaster/>
      <FormStyled onSubmit={onSubmitHandler}>
        <FormTitle>Create Sushi</FormTitle>
        <Input onChange={e => setTitle(e.target.value)} value={title} name="title" placeholder="Title" />
        <TextArea onChange={e => setDescription(e.target.value)} value={description} name="description" placeholder="Description" cols='20' rows='20'/>
        <Input onChange={e => setType(e.target.value)} value={type} name="type" placeholder="Type" />
        <Input onChange={e => setPortion(e.target.value)} value={portion} name="portion" placeholder="Portion" />
        <Input onChange={e => setPrice(e.target.value)} value={price} name="price" placeholder="Price" />
        <Input onChange={e => setImageUrl(e.target.value)} value={imageUrl} name="imageName" placeholder="Image Url" />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
}
export default Form;