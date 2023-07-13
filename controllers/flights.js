const Flight = require('../models/flight');
const express = require('express');
const router = express.Router();


module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

async function index(req, res) {
    try {
      const flights = await Flight.find();
      
      res.render('flights/index', { flights });
    } catch (err) {
      console.log(err);
  
      res.redirect('/');
    }
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Details', flight});
  }

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
if (req.body.airline) req.body.airline = req.body.airline.split
(/\s*,\s*/);
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        res.render('flights/new', {errorMsg : err.message});
    }
}