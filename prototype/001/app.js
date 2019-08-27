;(function() {


	window.zhuyin = {}

	window.zhuyin.mapCnsPage = {
		'1': '1',
		'2': '2',
		'3': '3',
		'4': '4',
		'5': '5',
		'6': '6',
		'7': '7',
		'8': '8',
		'9': '9',
		'10': 'a',
		'11': 'b',
		'12': 'c',
		'13': 'd',
		'14': 'e',
		'15': 'f',
		'16': 'g',
		'17': 'h',
		'18': 'i',
		'19': 'j',
	};

	function load() {
		var url = '/asset/data/zhuyin-map-word.json';
		var data = [];
		//https://api.jquery.com/jQuery.getJSON/
		//https://api.jquery.com/jQuery.ajax/
		$.ajax({
			dataType: 'json',
			url: url,
			data: data,
			/*
			success: function() {
				console.log(1);
			},
			error: function (xhr, opt, err) {
				console.log(xhr.status);
				console.log(err);
			}
			*/
		})
		.done(function(data) {
			//console.log( "success", data);
			window.zhuyin.data = data;
		})
		.fail(function() {
			console.log( "error" );
		})
		.always(function() {
			console.log( "complete" );
		})
		;
	}

	function bind() {

		$('#Find').bind('click', function() {
			//console.log(new Date());

			if (!window.zhuyin['data']) {
				return;
			}

			var ipt = $('#QueryText');
			var key = ipt.val();
			//console.log(key);
			var list = window.zhuyin.data[key];
			//console.log(list);

			var panel = $('#PanelResult');

			var html = '';

			html += '<ul>';
			$(list).each(function(index, item){
				//console.log(item);
				html += '<li>';
				html += index+1;
				html += '. ';
				html += '<a ';
				html += 'href="http://www.cns11643.gov.tw/AIDB/query_general_view.do?page=' + window.zhuyin.mapCnsPage[item['grp']] +'&code=' + item['cns'] + '" ';
				html += 'target="_blank" ';
				html += '>';
				html += item['word'];
				html += '</a>';
				html += '</li>';

			});

			html += '</ul>';

			panel.html(html);

		});
	}

	$(document).ready(function() {
		load();
		bind();
	});


})();
