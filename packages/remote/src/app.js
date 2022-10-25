import 'the-new-css-reset/css/reset.css';
import 'sanitize.css';
import Heading from './heading/heading';
import initContactForm from './form/init-contact-form';

const heading = new Heading();
heading.render('REMOTE (Module Federation)');
initContactForm();
