'use strict';
//set "mongoose"
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//build the schema for the model Schema is an object: containing fields for author, title, content, created
const blogPostSchema = mongoose.Schema({
  author: {
    firstName: String,
    lastName: String
  },
  title: {type: String, required: true},
  content: {type: String},
  created: {type: Date, default: Date.now}
});

//create virtual to combine author name from 2 data points: firstname & lastname
blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});
// serialize methods
blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
};
//.models requires 1 collection's name ,schema, and non-plural
const BlogPost = mongoose.model('BlogPost', blogPostSchema,'BlogPost');
//export {BlogPost}
module.exports = {BlogPost};