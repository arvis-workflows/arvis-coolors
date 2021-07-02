import test from 'ava';
import arvishTest from 'arvish-test';

test(async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js #480607');

	t.deepEqual(result, [
		{
			title: 'bulgarian-rose',
			subtitle: 'approximate match: 100%',
			arg: 'bulgarian-rose'
		},
		{
			title: 'rustic-red',
			subtitle: 'approximate match: 99%',
			arg: 'rustic-red'
		},
		{
			title: 'burnt-maroon',
			subtitle: 'approximate match: 98%',
			arg: 'burnt-maroon'
		},
		{
			title: 'mahogany',
			subtitle: 'approximate match: 97%',
			arg: 'mahogany'
		},
		{
			title: 'heath',
			subtitle: 'approximate match: 96%',
			arg: 'heath'
		}
	]);
});