'use strict';

const arvish = require('@jopemachine/arvish');
const colorNamer = require('color-namer');

const results = [];
let colors = [];

try {
	colors = colorNamer(arvish.input);
} catch (err) {
	results.push({
		title: 'No color name found 🤔'
	});
}

if (colors.ntc) {
	for (let i = 0; i < 5; i++) {
		const colorName = colors.ntc[i].name.toLowerCase().replace(/\s/g, '-');

		results.push({
			title: colorName,
			subtitle: 'approximate match: ' + (
				100 - (parseInt(colors.ntc[i].distance, 10))
			) + '%',
			arg: colorName
		});
	}
}

arvish.output(results);
