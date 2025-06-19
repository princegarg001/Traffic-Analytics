const PageHit = require('../models/PageHit');

exports.getViews = async (req, res) => {
  const { from, to } = req.query;
  const filter = {
    timestamp: {
      $gte: from ? new Date(from) : new Date('1970-01-01'),
      $lte: to ? new Date(to) : new Date()
    }
  };
  try {
    const views = await PageHit.aggregate([
      { $match: filter },
      { $group: { _id: "$url", count: { $sum: 1 } } }
    ]);
    res.json(views);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch views' });
  }
};

exports.getTopReferrers = async (req, res) => {
  const { from, to } = req.query;
  const filter = {
    timestamp: {
      $gte: from ? new Date(from) : new Date('1970-01-01'),
      $lte: to ? new Date(to) : new Date()
    }
  };
  try {
    const refs = await PageHit.aggregate([
      { $match: filter },
      { $group: { _id: "$referrer", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    res.json(refs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch referrer stats' });
  }
};