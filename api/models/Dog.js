/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    dogBreed: {
      type: 'string',
      required: true
    },

    dogName: {
      type: 'string',
      required: true,
      unique: true
    },

    dogAge: {
      type: 'integer',
      required: true
    },

    dogColor: {
      type: 'string',
      required: true
    },

    dogPersonality: {
      type: 'string',
      required: true
    }

  }
};
