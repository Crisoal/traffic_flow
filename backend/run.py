# run.py

import sys
import os
from flask import Flask
from flask_cors import CORS  # Import CORS

# Set the PYTHONPATH to the parent directory of 'backend'
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask import Flask
from backend.routes.predict import predict_bp

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Register the blueprint for the prediction routes
app.register_blueprint(predict_bp, url_prefix='/api')

@app.route('/')
def home():
    return "Welcome to the LagosFlow Traffic Prediction API!"

if __name__ == '__main__':
    app.run(debug=True)

