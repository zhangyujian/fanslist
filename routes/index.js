require('../db');
var mongoose = require('mongoose'),
    config = require('../config').config;

// Front page

exports.index = function(req, res){
  res.render('default/index', { title: '权威粉丝榜' })
};
exports.category = function(req, res){
  res.render('default/category', { title: '分类-权威粉丝榜' })
};
exports.detail = function(req, res){
  res.render('default/detail', { title: '权威粉丝榜' })
};