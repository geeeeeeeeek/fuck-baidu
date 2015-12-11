// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://*baidu.com/*
// @include      https://*baidu.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
//$("#content_left").live("DOMSubtreeModified",hashchanged);
hashchanged();

function hashchanged(){
    $("#ec_im_container").html('');

    $("a:contains(推广链接)").parent().each(
        function(index,element){
            if ($(element).attr('id') != 'content_left')
                $(element).html('');
        }
    );

    $("a:contains(推广)").parent().parent().parent().each(
        function(index,element){
            if ($(element).attr('id') != 'content_left')
                $(element).html('');
        }
    );

    $("a:contains(相关商品推荐)").parent().parent().parent().parent().each(
        function(index,element){
            if ($(element).attr('id') != 'content_left')
                $(element).html('');
        }
    );
    console.log('Ads removed!');
}

var targetNodes         = $("#wrapper_wrapper");
var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
var myObserver          = new MutationObserver(hashchanged);
var obsConfig           = { childList: true, characterData: true, attributes: true, subtree: true };

//--- Add a target node to the observer. Can only add one node at a time.
targetNodes.each ( function () {
    myObserver.observe (this, obsConfig);
} );

function mutationHandler (mutationRecords) {
    console.log ("mutationHandler:");
}
