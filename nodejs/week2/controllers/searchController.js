const data = require('../documents.json');
const _ = require('lodash/lang');

const searchQuery = (req, res) => {
  try {
    if (!req.query.q) {
      res.status(200).json(data);
    } else {
      const searchResults = [];
      data.forEach((obj) => {
        if (
          Object.values(obj).find((el) =>
            String(el).toLowerCase().includes(req.query.q.toLowerCase())
          )
        ) {
          searchResults.push(obj);
        }
      });
      if (searchResults.length > 0) {
        res.status(200).json(searchResults);
      } else {
        res.status(200).json('No matches found');
      }
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const searchFields = (req, res) => {
  try {
    const searchResults = [];
    const fields = JSON.parse(req.body.fields);
    data.forEach((obj) => {
      if (_.isMatch(obj, fields)) {
        searchResults.push(obj);
      }
    });
    if (searchResults.length > 0) {
      res.status(200).json(searchResults);
    } else {
      res.status(200).json('No matches found');
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const searchByQueryOrFields = (req, res) => {
  try {
    if (req.body.fields && req.query.q) {
      res
        .status(400)
        .json("Both q and fields can't be provided at the same time");
    } else if (req.body.fields) {
      searchFields(req, res);
    } else {
      searchQuery(req, res);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

module.exports = { searchQuery, searchByQueryOrFields };
