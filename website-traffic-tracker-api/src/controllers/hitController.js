const PageHit = require('../models/PageHit');
const geoip = require('geoip-lite');

exports.logHit = (io) => async (req, res) => {
  try {
    const geo = geoip.lookup(req.ip);
    const hit = new PageHit({
      url: req.body.url,
      referrer: req.get('Referrer') || '',
      ip: req.ip,
      visitorId: req.visitorId,
      websiteId: req.headers['x-website-id'],
      geo
    });
    await hit.save();

    io.emit('new-hit', {
      url: hit.url,
      referrer: hit.referrer,
      timestamp: hit.timestamp
    });

    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log page hit' });
  }
};