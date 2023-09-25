var rule = {
	title:'6V新版[磁]',
	host:'http://www.xb6v.com',
	url: '/fyclass/index_fypage.html?',
	filter_url:'{{fl.class}}',
	filter:{
		"dianshiju":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国剧","v":"/guoju"},{"n":"日韩剧","v":"/rihanju"},{"n":"欧美剧","v":"/oumeiju"}]}]
	},
	searchUrl: '/e/search/index.php#show=title&tempid=1&tbname=article&mid=1&dopost=search&submit=&keyboard=**;post',
	searchable:2,
	quickSearch:0,
	filterable:1,
	headers:{
		'User-Agent': 'PC_UA'
	},
	timeout:5000,
	class_parse:'#menus&&li:gt(1);a&&Text;a&&href;.*/(.*)/',
	//cate_exclude:'欧美剧|旧版6v',
	play_parse:true,
	limit:6,
	推荐: '*',
	一级: '#post_container&&li;h2&&Text;img&&src;.info_date&&Text;a&&href',
	二级: {
		title:"div.article_container h1&&Text",
		img:"div#post_content img&&src",
		desc:"div#post_content&&Text",
		content:"div#post_content&&Text",
		"tabs": `js:
			TABS = ["磁力"];
			let tabs = pdfa(html, 'div#post_content table tbody tr a');
			tabs.forEach((it) => {
				TABS.push(pdfh(it, "body&&Text"))
			});
		`,
		"lists": `js:
			log(TABS);
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			LISTS = [];
			TABS.forEach(function(tab) {
				if (/磁力/.test(tab)) {
					var d = pdfa(html, 'div#post_content table tbody tr a');
					d = d.map(function(it) {
						var title = pdfh(it, 'a&&Text');
						var burl = pd(it, 'a&&href');
						return title + '$' + burl
					});
					LISTS.push(d)
				}
			});
		`,
	},
	搜索: '*',
}
