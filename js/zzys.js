muban.mxone5.二级.desc = '.video-info-items:eq(6)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule={
    title:'子子影视',
    模板:'mxone5',
    host:'https://www.ziziys.com',
    url:'/list/fyclass/page/fypage.html',
    class_name:'国产剧&美剧&日韩剧&泰剧&动作片&剧情片&喜剧片&爱情片&惊悚片&奇幻片&悬疑片&动漫片&恐怖片&传记片&战争片&色情片&古装片&记录片&灾难片&歌舞片&运动片&科幻片&国漫&日漫&美漫',
    class_url:'13&14&15&16&6&7&8&9&10&11&12&23&24&25&26&27&28&29&30&31&32&33&20&21&22',
    class_parse:'',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == "1") {
			url = unescape(url)
		} else if (html.encrypt == "2") {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl:'/vdetail/fyid.html',
    搜索:'json:list;name;pic;;id',
}
