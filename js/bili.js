var rule = {
    title:'bili',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/ranking/v2?rid=0&type=origin',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'音乐&歌曲&MV&演唱会&舞蹈&健身&帕梅拉&广场舞&风景&纪录片',
    class_url:'音乐&歌曲&MV4K&演唱会4K&舞蹈&健身&帕梅拉&广场舞&风景4K&纪录片',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        音乐:{tid:'音乐'},歌曲:{tid:'歌曲'},MV4K:{tid:'MV4K'},演唱会4K:{tid:'演唱会4K'},舞蹈:{tid:'舞蹈'},健身:{tid:'健身'},帕梅拉:{tid:'帕梅拉'},广场舞:{tid:'广场舞'},风景4K:{tid:'风景4K'},纪录片:{tid:'纪录片'}
    },
    filter:{
        "音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "歌曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "MV4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演唱会4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "舞蹈":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]},
             {"key":"tid","name":"分类","value":[
{"n":"全部","v":"舞蹈"},
{"n":"舞剧","v":"舞剧"},
{"n":"芭蕾舞","v":"芭蕾舞"},
{"n":"古典舞","v":"古典舞"},
{"n":"民族舞","v":"民族舞"},{"n":"现代舞","v":"现代舞"},{"n":"踢踏舞","v":"踢踏舞"},{"n":"爵士舞","v":"爵士舞"},{"n":"拉丁舞","v":"拉丁舞"},{"n":"摩登舞","v":"摩登舞"},{"n":"街舞","v":"街舞"},{"n":"广场舞","v":"广场舞"},{"n":"宅舞","v":"宅舞"},{"n":"肚皮舞","v":"肚皮舞"},{"n":"钢管舞","v":"钢管舞"},{"n":"迪斯科","v":"迪斯科"},{"n":"劲舞","v":"热舞劲舞"},{"n":"独舞","v":"独舞"},{"n":"双人舞","v":"双人舞"},{"n":"三人舞","v":"三人舞"},{"n":"群舞","v":"群舞"},{"n":"组舞","v":"组舞"},{"n":"电影歌舞","v":"电影歌舞"},{"n":"国风舞蹈","v":"国风舞蹈"},{"n":"河卫国风","v":"河南卫视国风"}]},
             ],
        "健身":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "帕梅拉":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "广场舞":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "风景4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]},
               {"key":"tid","name":"分类","value":[{"n":"全部","v":"风景4K"},{"n":"日本","v":"日本风景4K"},{"n":"韩国","v":"韩国风景4K"},{"n":"美国","v":"美国风景4K"},{"n":"A澳门","v":"澳门风景4K"},{"n":"A安徽","v":"安徽风景4K"},{"n":"B布达拉宫","v":"布达拉宫风景4K"},{"n":"B北京","v":"北京风景4K"},{"n":"C重庆","v":"重庆风景4K"},{"n":"C草原","v":"草原风景4K"},{"n":"D大海","v":"大海风景4K"},{"n":"F福建","v":"福建风景4K"},{"n":"G广东","v":"广东风景4K"},{"n":"G广西","v":"广西风景4K"},{"n":"G贵州","v":"贵州风景4K"},{"n":"G甘肃","v":"甘肃风景4K"},{"n":"H海南","v":"海南风景4K"},{"n":"H河北","v":"河北风景4K"},{"n":"H河南","v":"河南风景4K"},{"n":"H湖北","v":"湖北风景4K"},{"n":"H湖南","v":"湖南风景4K"},{"n":"H黑龙江","v":"黑龙江风景4K"},{"n":"J吉林","v":"吉林风景4K"},{"n":"J江苏","v":"江苏风景4K"},{"n":"J江西","v":"江西风景4K"},{"n":"L辽宁","v":"辽宁风景4K"},{"n":"L洛阳","v":"洛阳风景4K"},{"n":"M民宿","v":"民宿风景4K"},{"n":"N南京","v":"南京风景4K"},{"n":"N内蒙古","v":"内蒙古风景4K"},{"n":"N宁夏","v":"宁夏风景4K"},{"n":"Q青海","v":"青海风景4K"},{"n":"S上海","v":"上海风景4K"},{"n":"S陕西","v":"陕西风景4K"},{"n":"S四川","v":"四川风景4K"},{"n":"S山西","v":"山西风景4K"},{"n":"S山东","v":"山东风景4K"},{"n":"S苏州","v":"苏州风景4K"},{"n":"T天津","v":"天津风景4K"},{"n":"T台湾","v":"台湾风景4K"},{"n":"T天空","v":"天空风景4K"},{"n":"X西安","v":"西安风景4K"},{"n":"X西湖","v":"西湖风景4K"},{"n":"X西藏","v":"西藏风景4K"},{"n":"X新疆","v":"新疆风景4K"},{"n":"X香港","v":"香港风景4K"},{"n":"Y云南","v":"云南风景4K"},{"n":"Z浙江","v":"浙江风景4K"}]}
               ],
        "纪录片":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
    },
    detailUrl:'/x/web-interface/view/detail?aid=fyid',
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        "Cookie": "https://ghproxy.com/https://raw.githubusercontent.com/icanfly8/8/main/txt/cookie.txt"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:`js:
        let ids = input.split('_');
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + ids[1];
        let result = {};
        let iurl = 'https://api.bilibili.com:443/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
        let html = request(iurl);
        let jRoot = JSON.parse(html);
        let jo = jRoot.data;
        let ja = jo.durl;
        let maxSize = -1;
        let position = -1;
        ja.forEach(function(tmpJo, i) {
            if (maxSize < Number(tmpJo.size)) {
                maxSize = Number(tmpJo.size);
                position = i
            }
        });
        let purl = '';
        if (ja.length > 0) {
            if (position === -1) {
                position = 0
            }
            purl = ja[position].url
        }
        result.parse = 0;
        result.playUrl = '';
        result.url = unescape(purl);
        result.header = {
            'Referer': 'https://live.bilibili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
        };
        if (/\\.flv/.test(purl)) {
            result.contentType = 'video/x-flv';
        } else {
            result.contentType = '';
        }
        result.danmaku = dan;
        input = result
    `,
    double:false,
    推荐:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let html = request(input);
        let vodList = JSON.parse(html).data.list;
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    一级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let data = [];
        let vodList = [];
        if (MY_CATE === '推荐') {
            input = HOST + '/x/web-interface/index/top/rcmd?ps=14&fresh_idx=' + MY_PAGE + '&fresh_idx_1h=' + MY_PAGE;
            data = JSON.parse(request(input)).data;
            vodList = data.item;
        } else {
            data = JSON.parse(request(input)).data;
            vodList = data.result;
        }
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid?vod.aid:vod.id;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let play = '';
            let danmaku = ''
            if (MY_CATE === '推荐') {
                play = ConvertNum(vod.stat.view);
                danmaku = vod.stat.danmaku;
            } else {
                play = ConvertNum(vod.play);
                danmaku = vod.video_review;
            }
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    二级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        let html = request(input);
        let jo = JSON.parse(html).data.View;
        let stat = jo.stat;
        let up_info = JSON.parse(html).data.Card;
        let relation = up_info.following ? '已关注' : '未关注';
        let aid = jo.aid;
        let title = stripHtmlTag(jo.title);
        let pic = jo.pic;
        let desc = jo.desc;

        let date = new Date(jo.pubdate * 1000);
        let yy = date.getFullYear().toString();
        let mm = date.getMonth()+1;
        mm = mm < 10 ? ('0' + mm) : mm;
        let dd = date.getDate();
        dd = dd < 10 ? ('0' + dd) : dd;

        let up_name = jo.owner.name;
        let typeName = jo.tname;
        let vod = {
            vod_id: aid,
            vod_name: title,
            vod_pic: pic,
            type_name: typeName,
            vod_year: yy+mm+dd,
            vod_content: desc
        };
        let ja = jo.pages;
        let treeMap = {};
        let playurls = [];
        ja.forEach(function(tmpJo) {
            let cid = tmpJo.cid;
            let part = tmpJo.part.replace('#', '﹟').replace('$', '﹩');
            playurls.push(
                part + '$' + aid + '_' + cid
            )
        });
        treeMap['Bili'] = playurls.join('#');
        let relatedData = JSON.parse(html).data.Related;
        playurls = [];
        relatedData.forEach(function(rd) {
            let ccid = rd.cid;
            let title = rd.title.replace('#', '﹟').replace('$', '﹩');
            let aaid = rd.aid;
            playurls.push(
                title + '$' + aaid + '_' + ccid
            )
        });
        treeMap['相关'] = playurls.join('#');
        vod.vod_play_from = Object.keys(treeMap).join("$$$");
        vod.vod_play_url = Object.values(treeMap).join("$$$");
        VOD = vod;
    `,
    搜索:`js:
        let html = request(input);
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        let videos = [];
        let vodList = JSON.parse(html).data.result;
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
}
