# routes/contact.py

from flask import Blueprint, request, jsonify
from services.contact_service import send_contact_email

contact_blueprint = Blueprint('contact', __name__)

@contact_blueprint.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    result = send_contact_email(name, email, message)
    
    if 'error' in result:
        return jsonify(result), 400
    return jsonify(result), 200
