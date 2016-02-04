/**
 * Created by madvic on 2/1/16.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-db.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync({
    //force: true
}).then(function(){
    console.log('Everithing is synced');

    Todo.findById(3).then(function (todo) {
       if (todo) {
           console.log(todo.toJSON());
       } else {
           console.log('Todo not found');
       }
    });

    //Todo.create({
    //description: 'Walking my dog'
    //
    //}).then(function (todo) {
    //// console.log('Finished!');
    //// console.log(todo);
    //return Todo.create({
    //    description: 'Clean Office'
    //});
    //
    //}).then(function() {
    //// return Todo.findById(1)
    //return Todo.findAll({
    //    where: {
    //        description: {
    //            $like: '%office%'
    //        }
    //    }
    //});
    //
    //}).then(function (todos) {
    //    if (todos) {
    //        todos.forEach(function (todo) {
    //            console.log(todo.toJSON());
    //        });
    //
    //    } else {
    //        console.log('not todos found');
    //    }
    //
    //}).catch(function (e) {
    //    console.log(e);
    //})
});