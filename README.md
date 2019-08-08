# immersio

Immersio is a chat app that motivates you to learn  new language by immersing you in translated messages from your friends.

Instead of learning to read random sentences written by some language app developer, you actually learn by caring about what the sentence means.

# Technologies levereaged

React
NodeJS: https://nodejs.org/en/
Express  https://www.npmjs.com/package/express
postman https://www.getpostman.com/
Axios https://www.npmjs.com/package/axios
Path https://www.npmjs.com/package/path
Material UI: https://material-ui.com/
MongoDB: https://www.mongodb.com/
Mongoose: https://mongoosejs.com/
Socket.io (Web Sockets): https://socket.io/
Google Cloud Platform: https://cloud.google.com/free/
Heroku: www.heroku.com/
dotenv: https://www.npmjs.com/package/dotenv/


# Google Cloud Platform and Heroku
GCP  (Google Cloud Platform) uses a service account key located in a JSON file (ex. credentials.json) to validate access to their APIs.
The path to the credentials.json file is stored as a string within your environment. This way of validating is secure, but came with some challenges to overcome when deploying to Heroku.

To validate GCP on heroku we use a preinstall script that dynamically creates a JSON file containing the crentials stored in secret environment variables on Heroku. The file created is then referenced in yet another environment variable stored in Heroku. (ex. GOOGLE_APPLCATION_CREDENTIALS=./credentials.json)


# Group Members

Chaney Durham: https://github.com/cdurham3

David Wilson: https://github.com/Moldysmurf38

John Robertson: https://github.com/jrobs87

Marshall Prostman: https://github.com/MarshallProtsman
