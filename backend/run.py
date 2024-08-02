# run.py

import sys
import os
from flask import Flask
from flask_cors import CORS

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from backend.routes.predict import predict_bp
from backend.routes.newsletter import newsletter_bp
from backend.routes.contact import contact_bp # Import the contact blueprint

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.register_blueprint(predict_bp, url_prefix='/api')
app.register_blueprint(newsletter_bp, url_prefix='/api')
app.register_blueprint(contact_bp, url_prefix='/api')  # Register the contact blueprint


@app.route('/')
def home():
    return "Welcome to the LagosFlow Traffic Prediction API!"

if __name__ == '__main__':
    app.run(debug=True)
