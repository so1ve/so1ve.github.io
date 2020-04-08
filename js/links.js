$(function () { //获取处理友链数据
    $.getJSON("/json-data/links.json", function (data) {

        // var data0 = data[0];
        $('.links-content').html("");

        // 随机排序过滤失效的
        let notValid = data.filter((item, a, b) => item.valid == 0);
		let ziyuanzhan = data.filter((item, c, d) => item.type == 2);
        data = data.filter((item, a, b) => item.valid != 0).sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        $('.links-content').append("<div class='friend-title-item'><br>大佬们<br><br><hr></div>");
        $.each(data, function (i, e) {
			if (e.type != 2) {
			    var html = "<div class=\"friend-card-item\">";
                if (e.src == undefined) {
                    html += "    <img class=\"ava\" src=\"/favicon.ico\" title=\"图片链接不可用，使用的默认图片\">";
                } else {
                    html += "    <img class=\"ava\" src=\"" + e.src + "\">";
                }
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>时间：" + e.date +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";
                $('.links-content').append(html);
            }
		})

        if (ziyuanzhan.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>资源站<br><br><hr></div></div>");
            $.each(ziyuanzhan, function (i, e) {
                var html = "<div class=\"friend-card-item\">";
                if (e.src == undefined) {
                    html += "    <img class=\"ava\" src=\"/favicon.ico\" title=\"图片链接不可用，使用的默认图片\">";
                } else {
                    html += "    <img class=\"ava\" src=\"" + e.src + "\">";
                }
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>时间：" + e.date +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }
		
        // 过期的
        if (notValid.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>异常的朋友们<br><br><hr></div></div>");
            $.each(notValid, function (i, e) {
                var html = "<div class=\"friend-card-item\">";
                if (e.src == undefined) {
                    html += "    <img class=\"ava\" src=\"/favicon.ico\" title=\"图片链接不可用，使用的默认图片\">";
                } else {
                    html += "    <img class=\"ava\" src=\"" + e.src + "\">";
                }
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>访问时间：" + e.stopTime +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }

        $('.links-content').append("</div>");
    })
});