import { Form, TextField, TextAreaField, Submit, FieldError } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = (props) => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name" style={{ display: 'block' }}>
          Name
        </label>
        <TextField name="name" style={{ display: 'block' }} errorStyle={{ display: 'block', borderColor: 'red' }} validation={{ required: true }} />
        <FieldError name="name" style={{ color: 'red' }} />

        <label htmlFor="email" style={{ display: 'block'}}>
          Email
        </label>
        <TextField name="email" style={{ display: 'block'}} errorStyle={{ display: 'block', borderColor: 'red' }} validation={{ required: true }} />
        <FieldError name="email" style={{ color: 'red' }} />

        <label htmlFor="message" style={{ display: 'block' }}>
          Message
        </label>
        <TextAreaField name="message" style={{ display: 'block'}} errorStyle={{ display: 'block', borderColor: 'red' }} validation={{ required: true }} />
        <FieldError name="message" style={{ color: 'red' }} />

        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
