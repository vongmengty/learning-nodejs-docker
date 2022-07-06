const userController = require('../controllers/user');
const { verifyToken } = require('../middleware/jwt');

module.exports = (route) => {
    route.get('/user', verifyToken, userController.read);
    route.get('/token', userController.generateToken);
    route.post('/user', userController.create);
    route.put('/user/:id', userController.update);
    route.delete('/user/:id', userController.delete);
};