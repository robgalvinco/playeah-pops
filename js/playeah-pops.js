/* plaYEAH PowerUp For Thinkific v(v1.0.6)
https://powerups.thinkific.com/pages/playeah
v1.0.4
*/
(function () {
    var pops = window._playeah.pops;
    console.log(pops);
    var _playeah_lottie = null;
    var _progress_start = -1;
    var _pops_css= [
        '#playeah-pops .modal-content{padding:13px 16px;}#playeah-pops .modal-header .close{top:17.5px;right:7px;}#playeah-pops .popup-title{font-size:16px;line-height:1.07;margin-bottom:9px;}#playeah-pops .popup-text{font-size:14px;line-height:1;}#playeah-pops .btn{width:120px;height:36px;background-color:{{color_cta_bg}};color :{{color_cta_text}};font-size:14px;line-height:1;}#playeah-pops .btn:hover{opacity:.85;}#playeah-pops .btn:active{background-color:{{color_cta_bg}};}@media only screen and (max-width:575px){#playeah-pops .modal-content{text-align:center;padding:40px}playeah-pops .modal-header .close{top:5px;right:5px}#playeah-pops .col-md-auto{margin-bottom:30px}#playeah-pops .btn{margin-left:0!important}}'
    ];
    var _pops_html = [
        '<div class="modal position-bottom-center fade m-width-570" id="playeah-pops" playeah-pops-show="bounceIn" playeah-pops-hide="bounceOut"><div class="modal-dialog"><div class="modal-content bg-white"><div class="modal-header"><button type="button" class="close close-dark" data-dismiss="modal"></button></div><div class="modal-body"><div class="col"><div class="row"><div class="col-md-auto col-sm-auto px-0 pop-media">{{media}} </div><div class="col-md-auto col-sm-auto align-self-center"><div class="popup-title pop-heading">{{heading}}</div><p class="popup-text mb-0 pop-subheading">{{subheading}}</p></div><div class="col align-self-center pop-cta-section"><a href="{{cta_link}}" class="btn ml-5 text-white b-radius-25 pop-cta">{{cta_text}}</a></div></div></div></div></div></div></div>'
    ]


    const hide_fs_lottie = function (){
        console.log("complete"); 
        $("#playeah-fs").hide();
        _playeah_lottie.removeEventListener('complete', hide_fs_lottie);

    }
    const open_url_new_tab = function(url){
        var win = window.open(url, '_blank');
        win.focus();        
    }

    const show_pop = function(index){
        var pop = pops[index];
        var pop_type = 0; //TBD replace with cofog from obj

        console.log(pop);
        
        //get and replace CSS
        var css = "<style>"+_pops_css[pop_type]+"</style>";
        //replace color_cta_bg, color_cta_text
        css = css.replace(/{{color_cta_bg}}/g,"#FF0000");
        css = css.replace(/{{color_cta_text}}/g,"#FFFF00");
        console.log("CSS",css);

        var html = "<style>"+_pops_html[pop_type]+"</style>";
        html = html.replace(/{{heading}}/g,"Pop Heading");
        html = html.replace(/{{subheading}}/g,"Pop Sub Heading");
        html = html.replace(/{{cta_link}}/g,"#somelink");
        html = html.replace(/{{cta_text}}/g,"Button text");
        console.log("HTML",html);

        // inject any special CSS for any needed of hiding things
        // TBD

        //load all into container
        $('#playeah-pop-container').html(css+html);

        //open pop
        $('#playeah-pops').modal({show:true})

        //if auto hide
        //setTimeout(function() {$('#playeah-pops').modal('hide');}, 4000);

    }        

    const inject_fonts= function() {
           var f = document.getElementsByTagName("script")[0],

           j1 = document.createElement("link");
           j1.rel = "stylesheet";
           j1.href = "https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700";
           f.parentNode.insertBefore(j1, f);

           j2 = document.createElement("link");
           j2.rel = "stylesheet";
           j2.href = "https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600";
           f.parentNode.insertBefore(j2, f);

           j3 = document.createElement("link");
           j3.rel = "stylesheet";
           j3.href = "https://fonts.googleapis.com/css?family=Playfair+Display:400i,700i";
           f.parentNode.insertBefore(j3, f);

    }

    const init = function(){
        $( document ).ready(function() {
        });
    }

    const inject_lottie= function(){
        var f = document.getElementsByTagName("script")[0],
           j = document.createElement("script");
           j.async = false;
           j.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
           f.parentNode.insertBefore(j, f);
    }

    const inject_uikit= function(){
         var f = document.getElementsByTagName("script")[0],
            j = document.createElement("script");
            j.async = false;
            j.src = "https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/js/uikit.min.js";
            f.parentNode.insertBefore(j, f);

            j3 = document.createElement("link");
            j3.rel = "stylesheet";
            j3.href = "https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/css/uikit.min.css";
            //j3.href = "https://getuikit.com/css/theme.css?1395";
            f.parentNode.insertBefore(j3, f);
    }
    const inject_fa= function(){
           var f = document.getElementsByTagName("script")[0],
           j = document.createElement("script");
           j.async = true;
           j.src = "https://robgalvinco.github.io/fapro/js/all.js";
           f.parentNode.insertBefore(j, f);
           
           j2 = document.createElement("script");
           j2.async = true;
           j2.src = "https://robgalvinco.github.io/fapro/js/v4-shims.min.js";
           f.parentNode.insertBefore(j2, f);

           j3 = document.createElement("link");
           j3.rel = "stylesheet";
           j3.href = "https://robgalvinco.github.io/fapro/css/all.css";
           f.parentNode.insertBefore(j3, f);

    }  
    const inject_bs= function(){
        var f = document.getElementsByTagName("script")[0];
        j = document.createElement("script");
        j.async = true;
        j.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js";
        f.parentNode.insertBefore(j, f);
        

    }  
    const inject_animate= function(){
        var f = document.getElementsByTagName("script")[0];

        j3 = document.createElement("link");
        j3.rel = "stylesheet";
        j3.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
        f.parentNode.insertBefore(j3, f);

    }  


         
    const inject_html= function(){
    console.log("injecting html");
    var html = '<div id="playeah-pop-container"></div>';
    $("body").append(html);       

    }


    const inject_pops_css = function(){

        j3 = document.createElement("link");
        j3.rel = "stylesheet";
        j3.href = "https://cdn.jsdelivr.net/gh/robgalvinco/playeah-pops@latest/css/playeah-pops.css";
        f.parentNode.insertBefore(j3, f);

        //var style = '<style>#playeah-fs{display:none;}.playeah-mini-image{height:64px;width: 64px;}.playeah-nudge-image{height:100px;width: 100px;}.playeah-modal-image{height:200px;width: 200px;margin-left: auto!important;margin-right: auto!important;}</style>';
        //$("body").prepend(style);       
    }
    Array.prototype.contains = function ( needle ) {
       for (i in this) {
           if (this[i] == needle) return true;
       }
       return false;
    }   
    const find_and_play = function(progress, courseid){
        console.log(progress,courseid);
        var __allcourses_index = pops.findIndex(function(pop, index) {
        if(pop.id == "all" && pop.progress<=progress  && !pop.played)
            return true;
        });     
        console.log("all index: "+__allcourses_index);  
        var __courses_index = pops.findIndex(function(pop, index) {
            if(pop.courses.contains(courseid)  && pop.progress<=progress  && !pop.played)
                return true;
        }); 
        console.log("course index: "+__courses_index);
        if(__courses_index != -1){
                show_pop(__courses_index);
                //make sure the "all" one with same progress does not play
                __allcourses_index = pops.findIndex(function(pop, index) {
                    if(pop.id == "all" && pop.progress==progress  && !pop.played)
                        return true;
                }); 
                if(__allcourses_index != -1){
                    pops[__allcourses_index].played=true;
                }
        
        }  else {
            if(__allcourses_index != -1){
                show_pop(__allcourses_index)
            }
        }
    }
    $( document ).ready(function() {
        if(typeof(CoursePlayerV2) !== 'undefined') {
            inject_fonts();
            inject_fa();
            inject_animate();
            inject_pops_css();
            inject_lottie();
            inject_bs();
            inject_html();
        
        
            CoursePlayerV2.on('hooks:contentDidChange', function(data) {
                console.log(data);
                if(_progress_start == -1){
                    console.log("Setting default");
                    _progress_start = data.enrollment.percentage_completed*100;
                    console.log("start: "+_progress_start)
                    //mark pops played if progress is >0
                    for (i = 0; i < pops.length; i++) {
                        if(pops[i].progress <= _progress_start){
                            pops[i].played=true;
                        }
                    }                
                }
                
            });

            CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
                console.log(data);
                var progress = data.enrollment.percentage_completed*100;
                console.log(progress)
                find_and_play(progress,data.course.id)
            });
             
        }

    });

        
        
    
}());




/* 
ouibounce.js
Taken from https://github.com/carlsednaoui/ouibounce
Originally created by Carl Sednaoui from MailCharts. Maintained and improved by generous contributors.
Ouibounce: A small library enabling you to display a modal before a user leaves your website.
*/
function ouibounce(el, custom_config) {
    "use strict";
  
    var config     = custom_config || {},
      aggressive   = config.aggressive || false,
      sensitivity  = setDefault(config.sensitivity, 20),
      timer        = setDefault(config.timer, 1000),
      delay        = setDefault(config.delay, 0),
      callback     = config.callback || function() {},
      cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
      cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
      cookieName   = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
      sitewide     = config.sitewide === true ? ';path=/' : '',
      _delayTimer  = null,
      _html        = document.documentElement;
  
    function setDefault(_property, _default) {
      return typeof _property === 'undefined' ? _default : _property;
    }
  
    function setDefaultCookieExpire(days) {
      // transform days to milliseconds
      var ms = days*24*60*60*1000;
  
      var date = new Date();
      date.setTime(date.getTime() + ms);
  
      return "; expires=" + date.toUTCString();
    }
  
    setTimeout(attachOuiBounce, timer);
    function attachOuiBounce() {
      if (isDisabled()) { return; }
  
      _html.addEventListener('mouseleave', handleMouseleave);
      _html.addEventListener('mouseenter', handleMouseenter);
      _html.addEventListener('keydown', handleKeydown);
    }
  
    function handleMouseleave(e) {
      if (e.clientY > sensitivity) { return; }
  
      _delayTimer = setTimeout(fire, delay);
    }
  
    function handleMouseenter() {
      if (_delayTimer) {
        clearTimeout(_delayTimer);
        _delayTimer = null;
      }
    }
  
    var disableKeydown = false;
    function handleKeydown(e) {
      if (disableKeydown) { return; }
      else if(!e.metaKey || e.keyCode !== 76) { return; }
  
      disableKeydown = true;
      _delayTimer = setTimeout(fire, delay);
    }
  
    function checkCookieValue(cookieName, value) {
      return parseCookies()[cookieName] === value;
    }
  
    function parseCookies() {
      // cookies are separated by '; '
      var cookies = document.cookie.split('; ');
  
      var ret = {};
      for (var i = cookies.length - 1; i >= 0; i--) {
        var el = cookies[i].split('=');
        ret[el[0]] = el[1];
      }
      return ret;
    }
  
    function isDisabled() {
      return checkCookieValue(cookieName, 'true') && !aggressive;
    }
  
    // You can use ouibounce without passing an element
    // https://github.com/carlsednaoui/ouibounce/issues/30
    function fire() {
      if (isDisabled()) { return; }
  
      if (el) { el.style.display = 'block'; }
  
      callback();
      disable();
    }
  
    function disable(custom_options) {
      var options = custom_options || {};
  
      // you can pass a specific cookie expiration when using the OuiBounce API
      // ex: _ouiBounce.disable({ cookieExpire: 5 });
      if (typeof options.cookieExpire !== 'undefined') {
        cookieExpire = setDefaultCookieExpire(options.cookieExpire);
      }
  
      // you can pass use sitewide cookies too
      // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
      if (options.sitewide === true) {
        sitewide = ';path=/';
      }
  
      // you can pass a domain string when the cookie should be read subdomain-wise
      // ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
      if (typeof options.cookieDomain !== 'undefined') {
        cookieDomain = ';domain=' + options.cookieDomain;
      }
  
      if (typeof options.cookieName !== 'undefined') {
        cookieName = options.cookieName;
      }
  
      document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
  
      // remove listeners
      _html.removeEventListener('mouseleave', handleMouseleave);
      _html.removeEventListener('mouseenter', handleMouseenter);
      _html.removeEventListener('keydown', handleKeydown);
    }
  
    return {
      fire: fire,
      disable: disable,
      isDisabled: isDisabled
    };
  }
  
  /*exported ouibounce */
  

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));




jQuery(function($) {
    
    

    
    // animations
    
    function modalAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog ' + x + ' animated');
    }; 
    
    $('.modal').each(function(index){
        if ($(this).attr('playeah-pop-show') == 'fadeIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('fadeIn');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'fadeOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('fadeOut');
            });
        }
        
        if ($(this).attr('playeah-pop-show') == 'zoomIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('zoomIn');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'zoomOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('zoomOut');
            });
        }
        
        if ($(this).attr('playeah-pop-show') == 'bounceIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('bounceIn');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'bounceOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('bounceOut');
            });
        }
        
        if ($(this).attr('playeah-pop-show') == 'slideInDown') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInDown');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'slideOutUp') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutUp');
            });
        }
        
        if ($(this).attr('playeah-pop-show') == 'slideInUp') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInUp');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'slideOutDown') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutDown');
            });
        }
        
        if ($(this).attr('playeah-pop-show') == 'slideInRight') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInRight');
            });
        }
        
        if ($(this).attr('playeah-pop-hide') == 'slideOutRight') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutRight');
            });
        }
    });
    
    if (jQuery(window).width() <= 1024) {
        $('.modal').each(function(){
            if($(this).hasClass('position-bottom-left') && $(this).attr('playeah-pop-show') == 'slideInUp') {
                $(this).on('show.bs.modal', function (e) {
                      modalAnim('fadeIn');
                });
            }
            if($(this).hasClass('position-bottom-left') && $(this).attr('playeah-pop-hide') == 'slideOutDown') {
                $(this).on('hide.bs.modal', function (e) {
                      modalAnim('fadeOut');
                });
            }
        });

        $('.modal').each(function(){
            if($(this).hasClass('position-bottom-right') && $(this).attr('playeah-pop-show') == 'slideInUp') {
                $(this).on('show.bs.modal', function (e) {
                      modalAnim('fadeIn');
                });
            }
            if($(this).hasClass('position-bottom-right') && $(this).attr('playeah-pop-hide') == 'slideOutDown') {
                $(this).on('hide.bs.modal', function (e) {
                      modalAnim('fadeOut');
                });
            }
        });
        $('.modal').each(function(){
            if($(this).hasClass('position-bottom-center') && $(this).attr('playeah-pop-show') == 'slideInUp') {
                $(this).on('show.bs.modal', function (e) {
                      modalAnim('fadeIn');
                });
            }
            if($(this).hasClass('position-bottom-center') && $(this).attr('playeah-pop-hide') == 'slideOutDown') {
                $(this).on('hide.bs.modal', function (e) {
                      modalAnim('fadeOut');
                });
            }
        });
        

        
    }
    
    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-top-right')) {
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });


    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-top-left')) {
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false') {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-left')) {
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });


    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-right')) {
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-center')) {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });


    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-right')) {
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-left')) {
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-center')) {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });
    
    
    
    var closedoc = $('.closedoc');
    
    function closedocShowModal(){
        closedoc.modal({show:true});
    }
    
    var _ouibounce = ouibounce(false, {
        aggressive: true,
        timer: 0,
        delay: 100,
        cookieExpire: 10,
        callback: function() {
            if (!Cookies.get('popupouibounce')) {
                closedocShowModal();
            }
            closedoc.on('shown.bs.modal', function () {
        		Cookies.set('popupouibounce', 'valid', { expires: 1, path: "/" }); // need to set the path to fix a FF bug
                Cookies.remove('popupouibounce', { path: '/' }); // removed cookie!
        	})
        }

    });
    
    
    
    var timeoutshow = $('.timeoutshow');
    
    var num = $('.timeoutshow').attr('playeah-pop-timeout');
    var ms = num * 1000;
    
    function timeOutShowModal(){
        timeoutshow.modal({show:true});
    }
    
    // Remove effect for a period of n days (expires: n)
    if (!Cookies.get('popup')) {
       window.setTimeout(function () {timeOutShowModal();}, ms); // Show modal after m seconds ({showModal();}, m)
    }
    timeoutshow.on('shown.bs.modal', function () {
        Cookies.set('popup', 'valid', { expires: 1, path: "/" }); // need to set the path to fix a FF bug
        Cookies.remove('popup', { path: '/' }); // removed cookie!
    });
});




 