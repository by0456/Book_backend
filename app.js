const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

const { Favourite, User } = require('./db/models');

const favourite = require('./modules/favourite');
const users = require('./modules/users');