!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},i=t(window),s=t(document),n=[],r=i.height(),o=function(){for(var e=i.scrollTop(),o=s.height(),a=o-r,c=e>a?a-e:0,p=0;p<n.length;p++){var d=n[p],l=d.stickyWrapper.offset().top,h=l-d.topSpacing-c;if(h>=e)null!==d.currentTop&&(d.stickyElement.css("width","").css("position","").css("top",""),d.stickyElement.trigger("sticky-end",[d]).parent().removeClass(d.className),d.currentTop=null);else{var u=o-d.stickyElement.outerHeight()-d.topSpacing-d.bottomSpacing-e-c;0>u?u+=d.topSpacing:u=d.topSpacing,d.currentTop!=u&&(d.stickyElement.css("width",d.stickyElement.width()).css("position","fixed").css("top",u),"undefined"!=typeof d.getWidthFrom&&d.stickyElement.css("width",t(d.getWidthFrom).width()),d.stickyElement.trigger("sticky-start",[d]).parent().addClass(d.className),d.currentTop=u)}}},a=function(){r=i.height();for(var e=0;e<n.length;e++){var s=n[e];"undefined"!=typeof s.getWidthFrom&&s.responsiveWidth===!0&&s.stickyElement.css("width",t(s.getWidthFrom).width())}},c={init:function(i){var s=t.extend({},e,i);return this.each(function(){var i=t(this),r=i.attr("id"),o=(r?r+"-"+e.wrapperClassName:e.wrapperClassName,t("<div></div>").attr("id",r+"-sticky-wrapper").addClass(s.wrapperClassName));i.wrapAll(o),s.center&&i.parent().css({width:i.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==i.css("float")&&i.css({"float":"none"}).parent().css({"float":"right"});var a=i.parent();a.css("height",i.outerHeight()),n.push({topSpacing:s.topSpacing,bottomSpacing:s.bottomSpacing,stickyElement:i,currentTop:null,stickyWrapper:a,className:s.className,getWidthFrom:s.getWidthFrom,responsiveWidth:s.responsiveWidth})})},update:o,unstick:function(){return this.each(function(){for(var e=t(this),i=-1,s=0;s<n.length;s++)n[s].stickyElement.get(0)==e.get(0)&&(i=s);-1!=i&&(n.splice(i,1),e.unwrap(),e.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",o,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",o),window.attachEvent("onresize",a)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.sticky"),void 0):c.init.apply(this,arguments)},t.fn.unstick=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.sticky"),void 0):c.unstick.apply(this,arguments)},t(function(){setTimeout(o,0)})}(jQuery);