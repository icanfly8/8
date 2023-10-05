var rule = {
    title:'bili',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/ranking/v2?rid=0&type=origin',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'音乐&歌曲&MV&演唱会&舞蹈&健身&帕梅拉&广场舞&风景&纪录片',
    class_url:'音乐&歌曲&MV&演唱会&舞蹈&健身&帕梅拉&广场舞&风景&纪录片',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        音乐:{tid:'音乐'},歌曲:{tid:'歌曲'},MV:{tid:'MV'},演唱会:{tid:'演唱会'},舞蹈:{tid:'舞蹈'},健身:{tid:'健身'},帕梅拉:{tid:'帕梅拉'},广场舞:{tid:'广场舞'},风景:{tid:'风景'},纪录片:{tid:'纪录片'}
    },
    filter:{
        "音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "歌曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "MV":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演唱会":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "舞蹈":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "健身":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "帕梅拉":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "广场舞":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "风景":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "纪录片":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
    },
    detailUrl:'/x/web-interface/view/detail?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        //"Cookie":"../txt/cookie.txt"
        //"Cookie":"DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e"
        "Cookie":"https://ghproxy.com/https://raw.githubusercontent.com/FongMi/CatVodSpider/main/txt/cookie.txt"
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
    推荐:'*',
    /*
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
    
    */
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
