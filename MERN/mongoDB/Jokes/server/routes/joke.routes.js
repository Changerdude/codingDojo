const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.random);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteExistingJoke);
}