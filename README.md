# Training App

 Application for training management where trainers can create,
 edit and delete their own trainings, and trainees can register for
 upcoming courses.

## Prerequisites

- Install [Node.js](https://nodejs.org/en/) version 20.9.0
- Create Database & Collection & Database User & Connection String in [MongoDB](https://www.mongodb.com/)
## Getting started
- Clone repository
```
git clone https://github.com/dbienkowska1/training-app.git
```
- Install dependencies

In first terminal:
```
cd backend
npm install
```
In second terminal:
```
cd frontend
npm install
```
- Set environment variables in backend folder
```
DATABASE_URI={Connection String to MongoDB}
```
## Run application
In both terminals:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can also run backend in a development mode using nodemon:
```
npm run dev
```
