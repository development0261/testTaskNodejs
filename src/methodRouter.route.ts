const router = require('express').Router();
const { route } = require('./index');

const {
    PostMethod,
    GetMethod,
    DeleteMethod,
    PatchMethod
} = require('./methodRouter.controller');

//router use for route when the method calls
router.post('/user', PostMethod); //for new data add
router.get('/user', GetMethod); //for get data
router.delete('/user', DeleteMethod); //for delete data
router.patch('/user', PatchMethod); //for update data

module.exports = router;
