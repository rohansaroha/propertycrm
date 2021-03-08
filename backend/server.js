const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
var cookieParser = require('cookie-parser');
const {AuthenticationUtil} = require("./services/JWTService");
const authRouter = require('./controllers/api/v1/auth.controller').authRouter;

app.use(cors());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5555;

app.use('/api/v1/auth',authRouter);

app.get('/', (req, res) => {
    res.status(201).send('Server on');
});


app.get('/api/v1/user', async (req,res) => {
    const token = req.query.token;
    const user = await AuthenticationUtil.getUserFromJWTToken(token)
    console.log(user)
    res.status(200).send(user)
});

app.listen(PORT, () => {
    console.log("The server started on port " + PORT);
});
