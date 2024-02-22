import { FormControl, InputLabel, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import { useRef, useState } from 'react';
import './contact.css'
import MailIcon from '../../assets/mail.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser'; 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
    const form = useRef();
    emailjs.init('heTV3xSPg4dDMJVvj');

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const schema = yup.object().shape({
        email: yup.string().email('Veuillez saisir un email valide.'),
    })

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const contactText = "J'ai hâte d'en apprendre plus sur votre projet !";

    const projectTypes = [
        {
            id: 0,
            name: 'Design'
        },
        {
            id: 1,
            name: 'Dév. web'
        }, 
        {
            id: 2,
            name: 'Dév. mobile'
        },
        {
            id: 3,
            name: 'Design + dév. web'
        },
        {
            id: 4,
            name: 'Design + dév. mobile'
        }, 
        {
            id: 5,
            name: 'Tout'
        }
    ];

    const sendEmail = (values) => {
        emailjs.send('service_0b5j77r', 'template_u66z0n5', values)
            .then(() => {
                setSnackbarMessage('Email envoyé avec succès !');
                setOpenSnackbar(true);
            }, () => {
                setSnackbarMessage("Echec de l'envoie du mail.")
                setOpenSnackbar(true);
        });
    }

    const onSubmit = (data) => {
        const values = {
            type: projectTypes[data.type]?.name,
            email: data.email,
            desc: data.desc
        }
        sendEmail(values);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            setOpenSnackbar(false);
            return;
        }
        setOpenSnackbar(false);
    }


    const actionSnackbar = (
        <div>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
        </div>
    );

    

    return (
        <section id='contact'>
            <Snackbar
                style={{borderBottom: '2px solid var(--theme)', borderRadius: '4px'}}
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                action={actionSnackbar}
            />
            <Typography variant='h3' className='contact-title'>Travaillons <span>ensemble</span> !</Typography>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)} ref={form}>
                <Controller
                    name='type'
                    control={control}
                    // eslint-disable-next-line no-unused-vars
                    render={({field: { onChange, value, ...field }}) => (
                        <FormControl fullWidth>
                            <InputLabel id='project-type'>Type de projet</InputLabel>
                            <Select
                                {...field}
                                name='select'
                                className='contact-select'
                                labelId='project-type'
                                id='contact-select'
                                onChange={onChange}
                                defaultValue={''}
                            >
                                {projectTypes.map((type) => (<MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name='email'
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            className='contact-mail' 
                            InputProps={{style: {borderRadius: 0,}}} 
                            fullWidth id='email' 
                            label='Adresse email' 
                            variant='outlined'
                            required
                            type='mail'
                        />
                    )}
                />
                {errors.email?.message && <p className='contact-form-error'>{errors.email.message}</p>}
                <Controller
                    name='desc'
                    control={control}
                    render={({field}) => (
                        <TextField 
                            {...field}
                            className='contact-desc' 
                            InputProps={{style: {borderRadius: 0,}}} 
                            fullWidth 
                            minRows={5} 
                            multiline 
                            id='desc' 
                            label='Décrivez-moi votre projet' 
                            variant='outlined' 
                            required
                        />
                    )}
                />
                <Button className='contact-btn' type='submit'>Envoyer</Button>
            </form>
            <div className="contact-right-col">
                <p>{contactText}</p>
                <p>Décrivez-le-moi par mail ou dans le formulaire pour que nous prenions contact rapidement.</p>
            </div>
            <div className='contact-socials'>
                <a href="mailto:maxence.barbancon@gmail.com" target='_blank' rel="noreferrer"><img src={MailIcon} alt='mail icon' /></a>
                <a href="https://fr.linkedin.com/in/maxence-barban%C3%A7on-457359193?original_referer=https%3A%2F%2Fwww.google.com%2F" target='_blank' rel="noreferrer"><img src={LinkedInIcon} alt='LinkedIn icon' /></a>
            </div>
            
        </section>
    );
}

export default Contact;