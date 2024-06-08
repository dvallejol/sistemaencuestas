const express = require ('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Intializations
const app = express();

//settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.use(require('./routes/indexController'));
app.use(express.static(path.join(__dirname, 'public')));

//Starting
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});


