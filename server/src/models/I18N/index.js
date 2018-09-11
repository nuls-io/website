// const merge = require('deepmerge');
// const Data = require('@/models/Data/');

class I18N
{
	// constructor()
	// {
	// 	this.defaultLocale = 'en';
	// }
	//
	// load(locale)
	// {
	// 	locale = locale || this.defaultLocale;
	//
	// 	const i18n = {
	// 		default: I18N.read(this.defaultLocale),
	// 		custom: I18N.read(locale)
	// 	};
	//
	// 	return merge(i18n.default, i18n.custom);
	// }
	//
	// static read(fileName)
	// {
	// 	return Data.read(`i18n/${fileName}`);
	// }

	static transformQueryResults(rows, locale)
	{
		rows.map((row) =>
		{
			const columns = Object.keys(row).filter((column) => column.substr(0, 3) === 'en_');

			columns.forEach((column) =>
			{
				if(`${locale}_${column.substr(3)}` && row[`${locale}_${column.substr(3)}`])
				{
					row[column.substr(3)] = row[`${locale}_${column.substr(3)}`];
				}
				else
				{
					row[column.substr(3)] = row[column];
				}

				delete row[column];
				delete row[`zh_${column.substr(3)}`];
			});

			return row;
		});
	}
}

module.exports = I18N;
