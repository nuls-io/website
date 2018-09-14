const I18N = require('@/models/I18N');

let resultsLimit = 8; // This should be changed on the frontend too -> `\client\src\store\dApps\index.js::appsPerPage`

const load = async (req, res) =>
{
	const { db } = req;
	const { offsetId = 0 } = req.params;
	const extra = {};
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.en_content,
			d.zh_title,
			d.zh_content,
			u.url AS image
		FROM blogs AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "blogs" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.active = 1
		AND CASE
				WHEN ? != 0 THEN d.id < ?
				ELSE 1=1
			END
		ORDER BY d.featured DESC, d.serialNumber IS NULL, d.serialNumber ASC, d.id DESC
		LIMIT ?
		`, [offsetId, offsetId, resultsLimit]);

	I18N.transformQueryResults(rows, req.get('i18n'));

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute('SELECT COUNT(id) AS count FROM blogs');
		extra.count = extra.count[0][0].count;
	}

	res.status(200).json({ ...extra, rows });
};

const search = async (req, res) =>
{
	const { db } = req;
	const { offsetId = 0 } = req.params;
	const { searchQuery, limit } = req.body;
	const extra = {};
	await db.init();

	resultsLimit = limit < resultsLimit ? limit : resultsLimit;

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.zh_title,
			u.url AS image,
			MATCH (d.en_title, d.zh_title) AGAINST (? IN BOOLEAN MODE) AS title_relevance,
			MATCH (d.en_title, d.en_content, d.zh_title, d.zh_content) AGAINST (? IN BOOLEAN MODE) AS relevance
		FROM blogs AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "blogs" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.active = 1
		AND CASE
			WHEN ? != 0 THEN d.id < ?
			ELSE 1=1
		END
		AND MATCH (d.en_title, d.en_content, d.zh_title, d.zh_content) AGAINST (? IN BOOLEAN MODE)
		ORDER BY title_relevance DESC, relevance DESC
		LIMIT ?
		`, [searchQuery, searchQuery, offsetId, offsetId, searchQuery, resultsLimit]);

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute(`
			SELECT COUNT(d.id) AS count FROM blogs AS d
			WHERE MATCH (d.en_title, d.en_content, d.zh_title, d.zh_content) AGAINST (? IN BOOLEAN MODE)
			`, [searchQuery]);
		extra.count = extra.count[0][0].count;
	}

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json({ ...extra, rows });
};

const item = async (req, res) =>
{
	const { db } = req;
	const { id } = req.params;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.en_content,
			d.zh_title,
			d.zh_content,
			d.created_at,
			u.url AS image
		FROM blogs AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "blogs" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.id = ?
		AND d.active = 1
		LIMIT 1
		`, [id]);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows[0]);
};

const latest = async (req, res) =>
{
	const { db } = req;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.zh_title,
			u.url AS image
		FROM blogs AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "blogs" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.active = 1
		ORDER BY d.id DESC
		LIMIT 24
		`);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

const featured = async (req, res) =>
{
	const { db } = req;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.zh_title,
			u.url AS image
		FROM blogs AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "blogs" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.active = 1 AND d.featured = 1
		ORDER BY d.id DESC
		LIMIT 6
		`);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

module.exports = {
	load,
	latest,
	search,
	item,
	featured
};
