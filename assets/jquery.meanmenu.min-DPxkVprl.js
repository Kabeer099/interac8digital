(function(f){f.fn.meanmenu=function(e){var E={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=f.extend(E,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var u=e.meanMenuTarget,g=e.meanMenuContainer,M=e.meanMenuClose,p=e.meanMenuCloseSize,v=e.meanMenuOpen,h=e.meanRevealPosition,C=e.meanRevealPositionDistance,w=e.meanRevealColour,s=e.meanScreenWidth,P=e.meanNavPush,x=".meanmenu-reveal",W=e.meanShowChildren,b=e.meanExpandableChildren,A=e.meanExpand,S=e.meanContract,k=e.meanRemoveAttrs,D=e.onePage,R=e.meanDisplay,d=e.removeElements,m=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(m=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var l="",o=function(){if(h==="center"){var j=window.innerWidth||document.documentElement.clientWidth,i=j/2-22+"px";l="left:"+i+";right:auto;",m?jQuery(".meanmenu-reveal").animate({left:i}):jQuery(".meanmenu-reveal").css("left",i)}},t=!1,y=!1;h==="right"&&(l="right:"+C+";left:auto;"),h==="left"&&(l="left:"+C+";right:auto;"),o();var n="",z=function(){n.html(jQuery(n).is(".meanmenu-reveal.meanclose")?M:v)},r=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(g).removeClass("mean-container"),jQuery(u).css("display",R),t=!1,y=!1,jQuery(d).removeClass("mean-remove")},c=function(){var j="background:"+w+";color:"+w+";"+l;if(s>=a){jQuery(d).addClass("mean-remove"),y=!0,jQuery(g).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+j+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var i=jQuery(u).html();jQuery(".mean-nav").html(i),k&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(u).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",P),jQuery(u).hide(),jQuery(".meanmenu-reveal").show(),jQuery(x).html(v),n=jQuery(x),jQuery(".mean-nav ul").hide(),W?b?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+p+'">'+A+"</a>")}),jQuery(".mean-expand").on("click",function(Q){Q.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(A),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(S),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),n.removeClass("meanclose"),jQuery(n).click(function(Q){Q.preventDefault(),t===!1?(n.css("text-align","center"),n.css("text-indent","0"),n.css("font-size",p),jQuery(".mean-nav ul:first").slideDown(),t=!0):(jQuery(".mean-nav ul:first").slideUp(),t=!1),n.toggleClass("meanclose"),z(),jQuery(d).addClass("mean-remove")}),D&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),t=!1,jQuery(n).toggleClass("meanclose").html(v)})}else r()};m||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,r(),s>=a?(c(),o()):r()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,m?(o(),s>=a?y===!1&&c():r()):(r(),s>=a&&(c(),o()))}),c()})}})(jQuery);
