## Setup Instructions

### Prerequisites:
Make sure you have the following installed:
- **Node.js** (v12 or higher)
- **MongoDB** (locally or use a cloud instance like MongoDB Atlas)

### Installation Steps:
1. Clone the repository:
   git clone https://github.com/Ayushiwaskale/Expense-Tracker.git
   cd expense-tracker

###Install dependencies:
-For the backend:
cd Expense-Tracker
nodemon server.js

-For the frontend:
cd Expense-Tracker/client
npm install

###Create a .env file 
PORT=3001
MONGO_URL=<you_mongo_compass_local_uRL>
REACT_APP_API_URL=http://localhost:3001

#### API Documentation
Base URL
http://localhost:3001/api/v1/transactions

Endpoints
1. Fetch All Transactions
Retrieve a list of transactions for a specific user based on filters.
URL: /get-transaction
Method: POST
Headers:
Content-Type: application/json
Request Body:

{
  "userid": "user_id_here",
  "frequency": "7", // Options: "7", "30", "365", or "custom"
  "selectedDate": [ // Required for "custom" frequency
    "start_date_here",
    "end_date_here"
  ],
  "type": "all" // Options: "all", "income", "expense"
}

Response:
Status Code: 200 OK
Body:
[
  {
    "_id": "transaction_id",
    "amount": 1000,
    "type": "income",
    "category": "salary",
    "date": "2025-01-21",
    "reference": "reference_text",
    "description": "Salary for January"
  },
  ...
]

2. Add a New Transaction
Create a new transaction record for a user.
URL: /add-transaction
Method: POST
Headers:
Content-Type: application/json
Request Body:
{
  "amount": 500,
  "type": "expense",
  "category": "food",
  "date": "2025-01-21",
  "reference": "Grocery shopping",
  "description": "Purchased groceries",
  "userid": "user_id_here"
}

Response:
Status Code: 200 OK
Body:
{
  "message": "Transaction Added Successfully"
}

3. Edit a Transaction
Update an existing transaction record.
URL: /edit-transaction
Method: POST
Headers:
Content-Type: application/json
Request Body:
{
  "payload": {
    "amount": 700,
    "type": "expense",
    "category": "medical",
    "date": "2025-01-20",
    "reference": "Pharmacy",
    "description": "Bought medicine",
    "userId": "user_id_here"
  },
  "transactionId": "transaction_id_here"
}
Response:
Status Code: 200 OK
Body:
{
  "message": "Transaction Updated Successfully"
}

4. Delete a Transaction
Remove a specific transaction.
URL: /delete-transaction
Method: POST
Headers:
Content-Type: application/json
Request Body:
{
  "transactionId": "transaction_id_here"
}
Response:
Status Code: 200 OK
Body:
{
  "message": "Transaction Deleted!"
}

###Error Handling

For all endpoints, if an error occurs, the API responds with:
Status Code: 400 Bad Request or 500 Internal Server Error
Body:
{
  "message": "Error message describing the issue"
}

###User Guide
Features
Add Expenses: Record new expenses with details such as amount, category, and date.
Update Expenses: Modify existing expense entries.
View Expenses: Browse expenses filtered by category and time period.
Summaries: Get an overview of total spending.
Visual Reports: View graphical representations of spending patterns.
Recurring Expenses: Set up and manage expenses that occur regularly.

Usage
Access the application at http://localhost:3000.
Use the navigation menu to add, update, or view expenses.
View summaries and reports to analyze your spending habits
