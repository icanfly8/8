var rule = {
	title:'新版6V[磁]',
	host:'http://www.xb6v.com',
	homeUrl:'/',
	url: '/fyclass/index_fypage.html?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/e/search/index.php#tempid=1&tbname=article&mid=1&dopost=search&submit=&keyborad=**;post',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
		'Referer': 'http://www.xb6v.com/'
	},
	timeout:5000,
	class_name:'喜剧片&动作片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片&动画片&电视剧&综艺',
	class_url:'xijupian&dongzuopian&aiqingpian&kehuanpian&kongbupian&juqingpian&zhanzhengpian&jilupian&donghuapian&dianshiju&ZongYi',
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐: '*',
	一级:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = [];
if (MY_CATE !== 'qian50m.html') {
	let turl = (MY_PAGE === 1)? '/' : '/index_'+ MY_PAGE + '.html';
	input = rule.homeUrl + MY_CATE + turl;
	let html = request(input);
	let list = pdfa(html, 'div.mainleft ul#post_container li');
	list.forEach(it => {
		d.push({
			title: pdfh(it, 'div.thumbnail img&&alt'),
			desc: pdfh(it, 'div.info&&span.info_date&&Text') + ' / ' + pdfh(it, 'div.info&&span.info_category&&Text'),
			pic_url: pd(it, 'div.thumbnail img&&src', HOST),
			url: pdfh(it, 'div.thumbnail&&a&&href')
		});
	})
}else{
	input = rule.homeUrl + MY_CATE;
	let html = request(input);
	let list = pdfa(html, 'div.container div#tab-content&&ul&&li');
	list.forEach(it => {
		let title = pdfh(it, 'a&&Text');
		if (title!==""){
			d.push({
				title: title,
				desc: pdfh(it, 'a&&Text'),
				pic_url: '',
				url: pdfh(it, 'a&&href')
			});
		}
	})
}
setResult(d);
`,
	二级:{
		title:"div.article_container h1&&Text",
		img:"div#post_content img&&src",
		desc:"div#post_content&&Text",
		content:"div#post_content&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'div#post_content table tbody tr a');
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("magnet")){
		TABS.push("磁力");
	}else if (burl.startsWith("ed2k")){
		TABS.push("电驴");
	}
});
log('xb6v TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'div#post_content table tbody tr a');
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('xb6v title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('xb6v burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("ed2k")){
		liste.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm);
}
if (liste.length>0){
	LISTS.push(liste);
}
`,
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let params = 'show=title&tempid=1&tbname=article&mid=1&dopost=search&submit=&keyboard=' + encodeURIComponent(KEY);
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    method: "POST",
    body: params
};
delete(_fetch_params.headers['Content-Type']);
Object.assign(_fetch_params, postData);
log("xb6v search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = request( HOST + '/e/search/index.php', _fetch_params, true);
//log("xb6v search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'div.mainleft&&ul#post_container&&li');
dlist.forEach(function(it){
	let title = pdfh(it, 'div.thumbnail img&&alt').replace( /(<([^>]+)>)/ig, '');
	if (searchObj.quick === true){
		if (false && title.includes(KEY)){
			title = KEY;
		}
	}
	let img = pd(it, 'div.thumbnail img&&src', HOST);
	let content = pdfh(it, 'div.article div.entry_post&&Text');
	let desc = pdfh(it, 'div.info&&span.info_date&&Text');
	let url = pd(it, 'div.thumbnail&&a&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		});
});
setResult(d);
`,
}
