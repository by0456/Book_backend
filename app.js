const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

const { List, Task, User } = require('./db/models');