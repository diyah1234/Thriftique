from flask import Flask, jsonify, request

app = Flask(__name__)

current_bid = 0

# Endpoint to get the current bid
@app.route('/api/bid', methods=['GET'])
def get_bid():
    return jsonify({'bid': current_bid})

# Endpoint to place a new bid
@app.route('/api/bid', methods=['POST'])
def place_bid():
    data = request.get_json()
    new_bid = data.get('newBid')

    if new_bid is not None and isinstance(new_bid, (int, float)) and new_bid > current_bid:
        global current_bid
        current_bid = new_bid
        return jsonify({'success': True, 'message': 'Bid placed successfully.'})
    else:
        return jsonify({'success': False, 'message': 'Invalid bid value.'}), 400

# Replace with your actual database connection details
DATABASE = 'your_database.db'

# Function to connect to the database
def get_db():
    db = sqlite3.connect(DATABASE)
    return db

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for the add item page
@app.route('/add-item')
def add_item():
    return render_template('add_item.html')

# Route to handle form submission
@app.route('/add-item', methods=['POST'])
def submit_item():
    try:
        # Get form data
        item_pictures = request.form.getlist('item-picture')  # Adjust based on your form fields
        item_description = request.form.get('item-description')
        base_price = request.form.get('base-price')

        # Insert data into the database
        with get_db() as db:
            cursor = db.cursor()
            cursor.execute("INSERT INTO items (imageSrc, description, basePrice) VALUES (?, ?, ?)",
                           (item_pictures, item_description, base_price))
            db.commit()

        return redirect('/buyer-page')  # Redirect to the buyer's page
    except Exception as e:
        print('Error:', e)
        return 'Internal Server Error', 500

if __name__ == '__main__':
    app.run(debug=True)


