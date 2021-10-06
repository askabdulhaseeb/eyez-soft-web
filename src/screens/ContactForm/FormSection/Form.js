import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from 'emailjs-com';
const ContactForm = (props) => {
    const styles = {
        form: {
            paddingBottom: '4%'
        },
        submitBtn: {
            background: props.state.buttonColor, width: '100%'
        }
    }
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');



    const sendEmail = (e) => {
        e.preventDefault();
        let templateParams = {
            email: email,
            name: name,
            contact: contact,
            subject: subject,
            description: description,
        }
        console.log("templateParams :- ", templateParams)
        emailjs.send('service_eyxanri', 'template_eaqji2o', templateParams, 'user_o0zvOCF7WLxVJ6TnLLmwF').then((res) => {
            console.log(res);
        }).catch(error => console.log("error :- ", error))
    }
    return (
        <Row>
            <Col >
                <iframe src="https://www.google.com.qa/maps/d/u/1/embed?mid=1mWnoErXFpuZb6vgRzJ3SDuT4nJl8n66P" width="100%" height="480"></iframe>
            </Col>
            <Col>
                <Form>
                    <FormGroup style={styles.form}>
                        <Label for="examplePassword">Name</Label>
                        <Input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup style={styles.form}>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <PhoneInput
                            international
                            placeholder="Phone Number"
                            name="contact"
                            value={contact}
                            enableAreaCodes={true}
                            defaultCountry="US"
                            onChange={setContact}

                        />
                    </FormGroup>
                    <FormGroup style={styles.form}>
                        <Label for="examplePassword">Subject</Label>
                        <Input type="text" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    </FormGroup>

                    <FormGroup style={styles.form}>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="description" id="exampleText" placeholder="Enter Description" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" style={styles.submitBtn} onClick={sendEmail} variant="outline-primary">Send</Button>
                </Form>
            </Col>
        </Row>


    );
}

export default ContactForm;