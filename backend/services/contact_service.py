import re
from flask_mail import Mail, Message
from werkzeug.security import safe_str_cmp
from flask import current_app as app

mail = Mail(app)

def send_contact_email(name, email, message):
    if not all([name, email, message]):
        return {'error': 'All fields are required.'}

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return {'error': 'Invalid email address.'}

    try:
        msg = Message('Contact Form Submission',
                      sender='contact@lagosflow.com',
                      recipients=['contact@lagosflow.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        return {'success': 'Message sent successfully.'}
    except Exception as e:
        return {'error': str(e)}
