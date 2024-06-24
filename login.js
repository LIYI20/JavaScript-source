// ==UserScript==
// @name         自动登录交大教学信息网
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  自动登录交大教学信息网
// @author       liyi
// @match        https://i.sjtu.edu.cn/xtgl/login_slogin.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function () {

            $("#jAccount").click();

    });
})();
