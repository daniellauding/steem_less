/*
	Compressed from: jquery.include.js v2.5 <http://code.google.com/p/jquery-include/>
	On: 04/04/2011 18:36
	Licence CC-BSD <http://creativecommons.org/licenses/BSD/>
*/

(function(g){var k=20,b="span",a=b+"[src],"+b+"[data-src]",i=30,f=false,c=false,j=true;function e(l){if(k--<1){return this}if(g(a).length===0){g(b+".include-loaded")[c?"show":"replaceWithChildren"]();if(!f){g(document).trigger("includeReady")}return this}g(a,l).each(function(){var o=g(this),p=o.attr("src")||o.attr("data-src"),n;if(p){n=p.split("/").slice(0,-1).join("/");if(n){n+="/"}try{g.ajax({type:"GET",url:p,complete:function(s,q){if(q==="error"||!s.responseText){d(o,p)}else{var r=s.responseText;if(j){r=h(r,n)}o.html(r).addClass("include-loaded").removeAttrs(["src","data-src"]);setTimeout(function(){e(o.get(0))},i)}}})}catch(m){d(o,p)}}});return this}function h(l,m){return l.replace(/(\b(?:src|href)=")([^"]+")/g,function(){var n=arguments;if(/^http(s{0,1}):\/{2}|^\//.test(n[2])){return n[1]+n[2]}return n[1]+m+n[2]})}function d(l,m){if(window.console&&console.warn){console.warn("Unable to load ",m)}setTimeout(function(){l.removeAttrs(["src","data-src"]);e(l.get(0))},i)}g.fn.includeReady=function(l){g(document).bind("includeReady",function(m){f=true;l(m)});return this};g.fn.replaceWithChildren=function(){return this.each(function(){var l=g(this);l.replaceWith(this.childNodes)})};g.fn.removeAttrs=function(m){for(var l=m.length;l--;){this.removeAttr(m[l])}};g(document).ready(function(){e(document)})}(jQuery));

