# backend/routes/newsletter.py

from flask import Blueprint, request, jsonify
from backend.services.newsletter_service import save_email

newsletter_bp = Blueprint('newsletter', __name__)

@newsletter_bp.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()

    if not data or 'email' not in data:
        return jsonify({"error": "Email is required"}), 400

    email = data['email']

    try:
        save_email(email)
        return jsonify({"message": "Subscription successful"}), 201
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except RuntimeError as re:
        return jsonify({"error": str(re)}), 500
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred"}), 500
