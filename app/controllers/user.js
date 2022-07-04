const userService = require('../services/user');

module.exports = {
    create: async (req, res) => {
        //const {name, gender, phone, email} = req.body;
        try {
            const {result, error} = await userService.create(req.body);
            if(error){
                res.error(error);
            } else {
                res.success(result);
            }
        } catch (error) {
            res.error(error);
        }
    },
    read: async (req, res) => {
        const {result, error} = await userService.read();
        if(error)
            res.error(error);
        res.success(result);
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const {result, error} = await userService.update(id, req.body);
            if(error) {
                res.error(error);
            } else {
                res.success(result);
            }           
        } catch (error) {
            res.error(error);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const {result, error} = await userService.delete(id);
        if(error)
            res.error(error);
        res.success(result);
    }
};