'use strict';


//logical or, from js, or an environment var
exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://testuser:abcd1234@ds015325.mlab.com:15325/zackrt-mongodb-mlab";
exports.PORT = process.env.PORT || 8080;