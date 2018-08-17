const {
  user,
} = require('../controllers');

const contactsController = require('../controllers').contacts;
const verifyToken = require('../auth/verifyToken');

module.exports = (app) => {
  app.post('/register', user.register);
  app.post('/login', user.login);

  app.post('/contacts/list', verifyToken,
    contactsController.createList);

  app.get('/contacts/listByNumber', verifyToken,
    contactsController.findAllByNumber);

  app.get('/contacts/listByName', verifyToken,
    contactsController.findAllByName);

  app.use((req, res) => {
    res
      .status(404)
      .send('Sorry can\'t find that!');
  });

  app.get('*', (req, res) => res
    .status(200)
    .send({
      message: 'Welcome to the beginning of nothingness.',
    }));
};

