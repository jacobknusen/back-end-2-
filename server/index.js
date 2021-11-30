const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const ctrl = require(`./controller.js`)

app.get(`/api/houses`, ctrl.gethouses)
app.post(`/api/houses`, ctrl.createhouse)
app.delete(`/api/houses/:id`, ctrl.deletehouse)
app.put(`/api/houses/:id`, ctrl.updatehouse)
app.listen(4004, ()=> console.log('take us to the port'))