// ==UserScript==
// @name         交大运动场地抢选
// @namespace    http://tampermonkey.net/
// @version      2024-04-23
// @description  定时自动抢选指定日期和时间段的场地,乒乓球和羽毛球均可
// @author       liyi
// @match        https://sports.sjtu.edu.cn/pc/*
// @require      http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';



    const date = "#tab-2024-05-04";//日期
    const run_time = "11:59:59";
    const hour = 11;
    const minute =37;
    const second =30;
    const time = 7;//时间，这里并不是真正地时间，而是选择时间段所在列表中的顺序，和网页设计的时间段有关
    //但是我是通过class获得元素列表，其中还有一些其他元素，具体值可以用f12选择查看，这里是19:00。

        //主要operation函数
    async function operation() {
        $(date).click();
         setTimeout(() => {
            let timelist = document.getElementsByClassName("clearfix");
            let targetlist = timelist[time];
            let seatlist = targetlist.childNodes;
            for (let i = 0; i < seatlist.length; i++) {
                let seat = seatlist[i].firstChild;
                let classStr = seat.className;
                // alert(i);
                if (classStr == 'inner-seat unselected-seat') {//该座位可选
                    // alert("succ" + i);
                    seat.click();
                    $(".el-button.fr.el-button--primary.is-round").click();
                    setTimeout(() => {
                        //勾选同意规定
                       $(".el-checkbox__original").click();
                        //submit
                        setTimeout(() => {
                            $(".el-button.btnStyle.el-button--primary").click();
                        }, 50);
                    }, 50);
                    break;
                }
                else continue;
            }
         }, 100);

        setTimeout(() => {
        if (window.location.href == "https://sports.sjtu.edu.cn/pc/#/orderDetails/0")
            alert("抢到场地了，请及时支付");}, 1000);

    };

    async function init() {
        // await window.addEventListener('load', function () {
        //     setTimeout(operation, 500);
        // });
        //观察日期tab是否发生变化，发生变化说明网页被刷新了，要执行抢场地
        //$(".fl.el-tabs.el-tabs--top")
        // var target = document.getElementsByClassName("el-tabs__nav is-top")[1];
        // var observer = new MutationObserver(function () {
        //     operation();
        // }).observe(target,
        //     {
        //         childList:true,
        //         subtree: true,
        //         attributes:true
        //     }
        // );


    };

    // var my_date;
    // function timer() {
    //     my_date = new Date;
    //     if (my_date.getHours()==hour&&my_date.getMinutes()==minute&&my_date.getSeconds()==second) {
    //         window.location.reload();
    //         // $(document).ready(function () {
    //         //     while (document.querySelector(date) == null) {
    //         //     setTimeout(function () { location.reload(); }, 50);
    //         //     }   
    //         // });
    //         return;
    //     }
    //     else setTimeout( timer,50);
    // }
    // timer();
    window.onload = function () {  
        setInterval(() => {
            console.log(my_date);
        }, 500);
        var interval = setInterval(() => {
            let my_date = new Date;
            console.log(my_date.getHours());
            console.log(my_date.getHours() == hour);
            if (my_date.getHours()==hour&&my_date.getMinutes()==minute&&my_date.getSeconds()==second) {
                clearInterval(interval);
                window.location.reload();
                $(document).ready(function () {
                     while (document.querySelector(date) == null) {
                    setTimeout(function () { location.reload(); }, 50);
                    }
                    
                 });
            }
        }, 300);

    };
    window.addEventListener('load', function () {
        setTimeout(operation, 50);
    });

})();