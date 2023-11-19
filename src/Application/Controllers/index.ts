import express from "express";

import user from './UserController';

const appRouters = express();

appRouters.use('/users', user);

export default appRouters;
