var rule = {
    title:'bttwo',
    host:'https://www.bttwo.net',
    url:'/fyclassfyfilter',
	filterable:1,
	filter_url:'{{fl.area}}{{fl.year}}{{fl.class}}/page/fypage',
    filter:{
	    "movie_bt":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"v":"/movie_bt_cat/dl","n":"大陆"},{"v":"/movie_bt_cat/zhongguoxg","n":"香港"},{"v":"/movie_bt_cat/zhogngtw","n":"台湾"},{"v":"/movie_bt_cat/mg","n":"美国"},{"v":"/movie_bt_cat/rb","n":"日本"},{"v":"/movie_bt_cat/hg","n":"韩国"},{"v":"/movie_bt_cat/yg","n":"英国"},{"v":"/movie_bt_cat/fg","n":"法国"},{"v":"/movie_bt_cat/ydl","n":"意大利"},{"v":"/movie_bt_cat/德国","n":"德国"},{"v":"/movie_bt_cat/xl","n":"希腊"},{"v":"/movie_bt_cat/hl","n":"荷兰"},{"v":"/movie_bt_cat/pty","n":"葡萄牙"},{"v":"/movie_bt_cat/xby","n":"西班牙"},{"v":"/movie_bt_cat/arl","n":"爱尔兰"},{"v":"/movie_bt_cat/ruishi","n":"瑞士"},{"v":"/movie_bt_cat/bilishi","n":"比利时"},{"v":"/movie_bt_cat/nw","n":"挪威"},{"v":"/movie_bt_cat/dm","n":"丹麦"},{"v":"/movie_bt_cat/jirker","n":"捷克"},{"v":"/movie_bt_cat/bolan","n":"波兰"},{"v":"/movie_bt_cat/adly","n":"澳大利亚"},{"v":"/movie_bt_cat/xinxilan","n":"新西兰"},{"v":"/movie_bt_cat/jnd","n":"加拿大"},{"v":"/movie_bt_cat/els","n":"俄罗斯"},{"v":"/movie_bt_cat/yindu","n":"印度"},{"v":"/movie_bt_cat/bx","n":"巴西"},{"v":"/movie_bt_cat/nanfei","n":"南非"},{"v":"/movie_bt_cat/moxige","n":"墨西哥"},{"v":"/movie_bt_cat/yl","n":"伊朗"},{"v":"/movie_bt_cat/taigyo","n":"泰国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"v":"/year/2023","n":"2023"},{"v":"/year/2022","n":"2022"},{"v":"/year/2021","n":"2021"},{"v":"/year/2020","n":"2020"},{"v":"/year/2019","n":"2019"},{"v":"/year/2018","n":"2018"},{"v":"/year/2017","n":"2017"},{"v":"/year/2016","n":"2016"},{"v":"/year/2015","n":"2015"},{"v":"/year/2014","n":"2014"},{"v":"/year/2013","n":"2013"},{"v":"/year/2012","n":"2012"},{"v":"/year/2011","n":"2011"},{"v":"/year/2010","n":"2010"},{"v":"/year/2009","n":"2009"},{"v":"/year/2008","n":"2008"},{"v":"/year/2007","n":"2007"},{"v":"/year/2006","n":"2006"},{"v":"/year/2005","n":"2005"},{"v":"/year/2004","n":"2004"},{"v":"/year/2003","n":"2003"},{"v":"/year/2002","n":"2002"},{"v":"/year/2001","n":"2001"},{"v":"/year/2000","n":"2000"},{"v":"/year/1999","n":"1999"},{"v":"/year/1998","n":"1998"},{"v":"/year/1997","n":"1997"},{"v":"/year/1996","n":"1996"},{"v":"/year/1995","n":"1995"},{"v":"/year/1994","n":"1994"},{"v":"/year/1993","n":"1993"},{"v":"/year/1992","n":"1992"},{"v":"/year/1991","n":"1991"},{"v":"/year/1990","n":"1990"},{"v":"/year/1989","n":"1989"},{"v":"/year/1988","n":"1988"},{"v":"/year/1987","n":"1987"},{"v":"/year/1986","n":"1986"},{"v":"/year/1985","n":"1985"},{"v":"/year/1984","n":"1984"},{"v":"/year/1983","n":"1983"},{"v":"/year/1982","n":"1982"},{"v":"/year/1980","n":"1980"},{"v":"/year/1978","n":"1978"},{"v":"/year/1977","n":"1977"},{"v":"/year/1976","n":"1976"},{"v":"/year/1975","n":"1975"},{"v":"/year/1974","n":"1974"},{"v":"/year/1973","n":"1973"},{"v":"/year/1972","n":"1972"},{"v":"/year/1970","n":"1970"},{"v":"/year/1969","n":"1969"},{"v":"/year/1963","n":"1963"},{"v":"/year/1962","n":"1962"},{"v":"/year/1961","n":"1961"},{"v":"/year/1960","n":"1960"},{"v":"/year/1959","n":"1959"},{"v":"/year/1958","n":"1958"},{"v":"/year/1957","n":"1957"},{"v":"/year/1956","n":"1956"},{"v":"/year/1955","n":"1955"},{"v":"/year/1954","n":"1954"},{"v":"/year/1953","n":"1953"},{"v":"/year/1952","n":"1952"},{"v":"/year/1949","n":"1949"},{"v":"/year/1938","n":"1938"},{"v":"/year/1931","n":"1931"},{"v":"/year/1925","n":"1925"},{"v":"/year/1921","n":"1921"}]}]
    },
    searchUrl:'/xssearch?q=**&f=_all&p=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
    class_name:'1&2&3&4&影视筛选&电视剧&国产剧&美剧&日韩剧',
    class_url:'new-movie&gf&hot&dy&movie_bt&dsj&zgjun&meiju&jpsrtv',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.leibox;li;*;*;*;*',
    double:true, 
    一级:'.bt_img li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    二级:{
        "title":"h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img":".dyimg.fl img&&src",
        "desc":".moviedteail_list&&li:eq(9)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content":".yp_context&&p:eq(0)&&Text",
        "tabs":".ypxingq_t:eq(1) span",
        "lists":".paly_list_btn:eq(#id) a"
    },
    搜索:'*',
}
