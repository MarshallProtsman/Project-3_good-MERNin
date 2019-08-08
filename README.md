# immersio

Immersio is a chat app that motivates you to learn  new language by immersing you in translated messages from your friends.

Instead of learning to read random sentences written by some language app developer, you actually learn by caring about what the sentence means.

# Technologies levereaged

React
NodeJS
Express
Material UI
MongoDB
Mongoose
Socket.io (Web Sockets)
Google Cloud Platform
Heroku


# Google Cloud Platform and Heroku
GCP  (Google Cloud Platform) uses a service account key located in a JSON file (ex. credentials.json) to validate access to their APIs.
The path to the credentials.json file is stored as a string within your environment. This way of validating is secure, but came with some challenges to overcome when deploying to Heroku.

To validate GCP on heroku we use a preinstall script that dynamically creates a JSON file containing the crentials stored in secret environment variables on Heroku. The file created is then referenced in yet another environment variable stored in Heroku. (ex. GOOGLE_APPLCATION_CREDENTIALS=./credentials.json)
