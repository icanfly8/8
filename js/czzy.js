var rule={
    title:'czzy',
    host:'https://www.czzy.site',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,"h3&&a&&href")',
    url:'/fyclassfyfilter',
    filterable:1,
    filter_url:'{{fl.cateId}}{{fl.class}}{{fl.area}}/page/fypage',
    filter: {
	    "movie_bt":[{"key":"area","name":"分类","value":[{"n":"全部","v":""},{"n":"电影","v":"/movie_bt_series/dyy"},{"n":"电视剧","v":"/movie_bt_series/dianshiju"},{"n":"动画","v":"/movie_bt_series/dohua"},{"n":"国产剧","v":"/movie_bt_series/guochanju"},{"n":"美剧","v":"/movie_bt_series/mj"},{"n":"日剧","v":"/movie_bt_series/rj"},{"n":"韩剧","v":"/movie_bt_series/hj"},{"n":"海外剧","v":"/movie_bt_series/hwj"},{"n":"华语电影","v":"/movie_bt_series/huayudianying"},{"n":"欧美电影","v":"/movie_bt_series/meiguodianying"},{"n":"日本电影","v":"/movie_bt_series/ribendianying"},{"n":"韩国电影","v":"/movie_bt_series/hanguodianying"},{"n":"英国电影","v":"/movie_bt_series/yingguodianying"},{"n":"法国电影","v":"/movie_bt_series/faguodianying"},{"n":"印度电影","v":"/movie_bt_series/yindudianying"},{"n":"俄罗斯电影","v":"/movie_bt_series/eluosidianying"},{"n":"加拿大电影","v":"/movie_bt_series/jianadadianying"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"传记","v":"/movie_bt_tags/chuanji"},{"n":"儿童","v":"/movie_bt_tags/etet"},{"n":"冒险","v":"/movie_bt_tags/maoxian"},{"n":"剧情","v":"/movie_bt_tags/juqing"},{"n":"动作","v":"/movie_bt_tags/dozuo"},{"n":"动漫","v":"/movie_bt_tags/doman"},{"n":"动画","v":"/movie_bt_tags/dhh"},{"n":"历史","v":"/movie_bt_tags/lishi"},{"n":"古装","v":"/movie_bt_tags/guzhuang"},{"n":"同性","v":"/movie_bt_tags/tongxing"},{"n":"喜剧","v":"/movie_bt_tags/xiju"},{"n":"奇幻","v":"/movie_bt_tags/qihuan"},{"n":"家庭","v":"/movie_bt_tags/jiating"},{"n":"恐怖","v":"/movie_bt_tags/kubu"},{"n":"悬疑","v":"/movie_bt_tags/xuanyi"},{"n":"情色","v":"/movie_bt_tags/qingse"},{"n":"惊悚","v":"/movie_bt_tags/kingsong"},{"n":"战争","v":"/movie_bt_tags/zhanzhen"},{"n":"歌舞","v":"/movie_bt_tags/gw"},{"n":"武侠","v":"/movie_bt_tags/wuxia"},{"n":"灾难","v":"/movie_bt_tags/zainan"},{"n":"爱情","v":"/movie_bt_tags/aiqing"},{"n":"犯罪","v":"/movie_bt_tags/fanzui"},{"n":"短片","v":"/movie_bt_tags/dp"},{"n":"科幻","v":"/movie_bt_tags/kh"},{"n":"西部","v":"/movie_bt_tags/xb"},{"n":"运动","v":"/movie_bt_tags/yd"},{"n":"音乐","v":"/movie_bt_tags/yy"},{"n":"纪录片","v":"/movie_bt_tags/jlpp"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"v":"/year/2023","n":"2023"},{"v":"/year/2022","n":"2022"},{"v":"/year/2021","n":"2021"},{"v":"/year/2020","n":"2020"},{"v":"/year/2019","n":"2019"},{"v":"/year/2018","n":"2018"},{"v":"/year/2017","n":"2017"},{"v":"/year/2016","n":"2016"},{"v":"/year/2015","n":"2015"},{"v":"/year/2014","n":"2014"},{"v":"/year/2013","n":"2013"},{"v":"/year/2012","n":"2012"},{"v":"/year/2011","n":"2011"},{"v":"/year/2010","n":"2010"},{"v":"/year/2009","n":"2009"},{"v":"/year/2008","n":"2008"},{"v":"/year/2007","n":"2007"},{"v":"/year/2006","n":"2006"},{"v":"/year/2005","n":"2005"},{"v":"/year/2004","n":"2004"},{"v":"/year/2003","n":"2003"},{"v":"/year/2002","n":"2002"},{"v":"/year/2001","n":"2001"},{"v":"/year/2000","n":"2000"},{"v":"/year/1999","n":"1999"},{"v":"/year/1998","n":"1998"},{"v":"/year/1997","n":"1997"},{"v":"/year/1996","n":"1996"},{"v":"/year/1995","n":"1995"},{"v":"/year/1994","n":"1994"},{"v":"/year/1993","n":"1993"},{"v":"/year/1992","n":"1992"},{"v":"/year/1991","n":"1991"},{"v":"/year/1990","n":"1990"},{"v":"/year/1989","n":"1989"},{"v":"/year/1988","n":"1988"},{"v":"/year/1987","n":"1987"},{"v":"/year/1986","n":"1986"},{"v":"/year/1985","n":"1985"},{"v":"/year/1984","n":"1984"},{"v":"/year/1983","n":"1983"},{"v":"/year/1982","n":"1982"},{"v":"/year/1981","n":"1981"},{"v":"/year/1980","n":"1980"},{"v":"/year/1979","n":"1979"},{"v":"/year/1978","n":"1978"},{"v":"/year/1977","n":"1977"},{"v":"/year/1976","n":"1976"},{"v":"/year/1975","n":"1975"},{"v":"/year/1974","n":"1974"},{"v":"/year/1973","n":"1973"},{"v":"/year/1972","n":"1972"},{"v":"/year/1971","n":"1971"},{"v":"/year/1970","n":"1970"},{"v":"/year/1969","n":"1969"},{"v":"/year/1968","n":"1968"},{"v":"/year/1967","n":"1967"},{"v":"/year/1966","n":"1966"},{"v":"/year/1965","n":"1965"},{"v":"/year/1964","n":"1964"},{"v":"/year/1963","n":"1963"},{"v":"/year/1962","n":"1962"},{"v":"/year/1960","n":"1960"},{"v":"/year/1959","n":"1959"},{"v":"/year/1954","n":"1954"},{"v":"/year/1952","n":"1952"},{"v":"/year/1950","n":"1950"},{"v":"/year/1949","n":"1949"},{"v":"/year/1948","n":"1948"},{"v":"/year/1940","n":"1940"},{"v":"/year/1939","n":"1939"},{"v":"/year/1925","n":"1925"}]}]
    },
    searchUrl:'/page/fypage?s=**',
    searchable:2,
    filterable:0,
    headers:{
        'User-Agent': 'MOBILE_UA',
        'Cookie': 'esc_search_captcha=1'
    },
    class_name:'影视筛选&豆瓣电影Top250&电影&电视剧&动画&国产剧&美剧&日剧&韩剧&海外剧&华语电影&欧美电影&日本电影&韩国电影',
    class_url:'movie_bt&dbtop250&/movie_bt_series/dyy&/movie_bt_series/dianshiju&/movie_bt_series/dohua&/movie_bt_series/guochanju&/movie_bt_series/mj&/movie_bt_series/rj&/movie_bt_series/hj&/movie_bt_series/hwj&/movie_bt_series/huayudianying&/movie_bt_series/meiguodianying&/movie_bt_series/ribendianying&/movie_bt_series/hanguodianying',
    play_parse:true,

    lazy:`js:
        pdfh = jsp.pdfh;
        var html = request(input);
        var ohtml = pdfh(html, '.videoplay&&Html');
        var url = pdfh(ohtml, "body&&iframe&&src");
        if (/Cloud/.test(url)) {
            var ifrwy = request(url);
            let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');
            let temp = '';
            for (let i = 0x0; i < code.length; i = i + 0x2) {
                temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
            }
            input = {
                jx: 0,
                url: temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7),
                parse: 0
            }
        } else if (/decrypted/.test(ohtml)) {
            var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
            eval(getCryptoJS());
            var scrpt = phtml.match(/var.*?\\)\\);/g)[0];
            var data = [];
            eval(scrpt.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
            input = {
                jx: 0,
                url: data.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1],
                parse: 0
            }
        } else {
            input
        }
	`,
    推荐:'.bt_img;ul&&li;*;*;*;*',
    double:true,
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:{
        "title": "h1&&Text;.moviedteail_list li&&a&&Text",
        "img": "div.dyimg img&&src",
        "desc": ".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(5)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索:'.search_list&&ul&&li;*;*;*;*',
}
