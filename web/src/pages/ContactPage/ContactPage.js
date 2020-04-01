import { Form,
         TextField,
         Label,
         TextAreaField,
         Submit,
         FieldError } from '@redwoodjs/web'

import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = (props) => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <Label
          htmlFor="name"
          errorStyle={{ display: 'block', color: 'red'}}
          style={{ display: 'block' }}
        >
          Name
        </Label>
        <TextField
          name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="name" style={{ color: 'red' }} />

        <Label
          htmlFor="email"
          errorStyle={{ display: 'block', color: 'red'}}
          style={{ display: 'block'}}
        >
          Email
        </Label>
        <TextField
          name="email"
          style={{ display: 'block'}}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="email" style={{ color: 'red' }} />

        <Label
          htmlFor="message"
          errorStyle={{ display: 'block', color: 'red'}}
          style={{ display: 'block' }}
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          style={{ display: 'block'}}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="message" style={{ color: 'red' }} />

        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
