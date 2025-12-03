# LagosFlow - Traffic Prediction System

## Overview
LagosFlow is a machine learning system that predicts traffic congestion in Lagos, Nigeria. The platform helps commuters plan their routes by forecasting traffic conditions up to 3 hours in advance.

## Problem
Lagos faces severe traffic congestion where commuters spend an average of 30 hours per week in traffic. The city loses approximately 4 trillion Naira annually due to delays. Current traffic systems cannot adapt to real-time conditions.

## Solution
LagosFlow uses an LSTM neural network to predict traffic patterns by analyzing:
- Real-time traffic data from TomTom Traffic API
- Weather conditions from OpenWeather API
- Road network information from OpenStreetMap

## Key Features
- Predicts traffic congestion for 15 minutes to 3 hours ahead
- Achieves 92% accuracy for 2-hour forecasts
- Interactive map showing current and predicted traffic conditions
- Alternative route suggestions based on predictions
- Works with limited historical data (1 month)

## Technology Stack
- **Backend:** Flask, PostgreSQL with PostGIS
- **Machine Learning:** Python, TensorFlow, Keras (LSTM)
- **Frontend:** React, Mapbox
- **APIs:** TomTom Traffic, OpenWeather, OpenStreetMap

## How It Works
1. Collects real-time traffic, weather, and road data
2. Preprocesses and cleans the data
3. Uses LSTM neural network to predict future traffic patterns
4. Displays predictions on an interactive map
5. Suggests optimal routes using Dijkstra's algorithm

## Installation
```bash
# Clone repository
git clone https://github.com/Crisoal/traffic_flow

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Add your API keys to .env

# Run application
python app.py
```

## Usage
1. Open the web application
2. Search for your destination in Lagos
3. View current traffic conditions
4. Select a time horizon (15 min, 30 min, 1 hour, 2 hours, or 3 hours)
5. See predicted traffic and alternative routes

## Results
- 92% accuracy for 2-hour predictions
- 83% accuracy for 3-hour predictions
- Average API response time: 185 milliseconds
- 99.7% system uptime

## Impact Potential
- Save commuters 9-12 minutes per trip
- Reduce fuel consumption by 12-15%
- Cut CO2 emissions by 18%
- Help traffic authorities identify congestion patterns

## Future Development
- Expand data collection to cover full year for seasonal patterns
- Add incident detection (accidents, protests, events)
- Integrate with city traffic management systems
- Develop mobile application
- Scale to other Nigerian cities

## Author
Christiana Ola

## License
MIT License
