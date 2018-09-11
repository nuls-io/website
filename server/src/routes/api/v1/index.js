const express = require('express');
const cors = require('cors');

// const i18n = require('@/routes/api/v1/i18n');
const partners = require('@/routes/api/v1/partners');
const dApps = require('@/routes/api/v1/dApps');
const team = require('@/routes/api/v1/team');
const jobs = require('@/routes/api/v1/jobs');
const contact = require('@/routes/api/v1/contact');
const news = require('@/routes/api/v1/news');
const blogs = require('@/routes/api/v1/blogs');
const announcements = require('@/routes/api/v1/announcements');
const Database = require('@/models/Database');

const router = express.Router();

router.use((req, res, next) =>
{
	req.db = new Database();

	res.on('finish', () =>
	{
		req.db.end();
	});

	next();
});

router.use(cors());
// router.use('/i18n', i18n);
router.use('/partners', partners);
router.use('/dApps', dApps);
router.use('/team', team);
router.use('/jobs', jobs);
router.use('/contact', contact);
router.use('/news', news);
router.use('/blogs', blogs);
router.use('/announcements', announcements);
router.use('/download', express.static('public'));

module.exports = router;
