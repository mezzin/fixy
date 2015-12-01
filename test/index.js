var fixy = require("../index");
var assert = require("assert");
describe('Fixy Tests', function() {
	describe('#parseFixedWidth()', function () {
		it('should return correctly parse fixed width file', function () {
			var test = fixy.parseFixedWidth({
				map:[{
						name: "Age",
						width: 2,
						start: 1,
						type: "int"
					},{
						name: "Initial",
						width: 3,
						start: 3,
						type: "string"
					},{
						name: "DateEntered",
						width: 8,
						start: 6,
						type: "date",
						inputformat: "YYYYMMDD",
						outputformat: "YYYY-MM-DD"
					},{
						name: "IsBad",
						width: 1,
						start: 14,
						type: "bool",
						tVal: "Y",
						fVal: "N"
					},{
						name: "Rating",
						width: 3,
						start: 15,
						type: "float",
						percision: 2
					}],
				options:{
					fullwidth: 17,
					skiplines: null
				}
			}, "30SJP20121231N920");
			assert.deepEqual(test, [{
				Age: 30,
				Initial: 'SJP',
				DateEntered: "2012-12-31",
				IsBad: false,
				Rating: 9.2
			}]);
		});
	});
});