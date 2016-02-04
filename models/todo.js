/**
 * Created by madvic on 2/4/16.
 */

module.exports = function (sequalize, DataTypes) {
    return sequalize.define('todo', {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
};