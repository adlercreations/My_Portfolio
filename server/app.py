from flask import Flask
from flask_cors import CORS
from config import Config
from routes import api

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Register the blueprint
app.register_blueprint(api, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True, port=5001)