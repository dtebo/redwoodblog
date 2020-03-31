import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/web'
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
        <TextField name="name" style={{ display: 'block' }} />

        <label htmlFor="email" style={{ display: 'block'}}>
          Email
        </label>
        <TextField name="email" style={{ display: 'block'}} />

        <label htmlFor="message" style={{ display: 'block' }}>
          Message
        </label>
        <TextAreaField name="message" style={{ display: 'block'}} />

        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
