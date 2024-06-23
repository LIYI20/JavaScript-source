// ==UserScript==
// @name        bilibili控制直播窗口
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  bilibili控制直播窗口
// @author       liyi
// @match        https://live.bilibili.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var enable = 1;
   
    $(document).ready(function () {
        var bnt=document.createElement("button");  // 以 DOM 创建新元素
        bnt.textContent = "关闭播放";
        $(".left-ctnr.left-header-area").append(bnt);
        // var bnt = document.createElement("button");  // 以 DOM 创建新元素
        // bnt.textContent = "关闭播放";
        // let bntArea = document.querySelector(".left-ctnr");
        // bntArea.append(bnt);
        //alert("liyi的插件准备完毕");
        var videos = document.getElementsByTagName("video");
        $(bnt).click(function () {
            enable = !enable;
            if (enable) {
                $("video").show();
                for (var i = 0; i < videos.length; i++) {//关闭声音
                var video = videos[i];
                video.muted = false;
                }
                $(bnt).text("关闭播放");
            } 
            else {
                $("video").hide();//关闭屏幕

                for (var i = 0; i < videos.length; i++) {//关闭声音
                var video = videos[i];
                video.muted = true;
                }
                $(bnt).text("恢复播放");
            }
        });

    });
})();
