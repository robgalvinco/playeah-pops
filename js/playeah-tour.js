/* plaYEAH Tour PowerUp For Thinkific v(v1.3.0)
https://powerups.thinkific.com/pages/playeah
v1.2.1
*/
(function () {
    var current_step = -1;
    var tour_steps = window._playeah_tour.steps;

    const inject_html= function(){
        var html = '<div class="pow-tourcard pow-hidden uk-card uk-card-default uk-card-body uk-card-small uk-width-medium" > <button type="button" uk-close="" class="pow-tourcard-close uk-icon uk-close uk-float-right"></button><div class="uk-text-center uk-grid-column-small uk-grid-row-small" uk-grid><div class="pow-tourcard-media uk-width-1-4 uk-width-1-1@s "> <img src="" alt=""></div><div class="pow-tourcard-text uk-width-expand uk-width-1-1@s"><h3 class="uk-card-title pow-tourcard-heading">&nbsp;</h3><p class="pow-tourcard-copy"> &nbsp;</p> <button class="uk-button uk-button-primary pow-tourcard-button">&nbsp;</button></div></div></div>';
        html += '<style>.pow-tourcard-open{box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;visibility:visible;opacity:1;position: absolute;}.pow-tourcard-right::after{content:"";position:absolute;top:50%;right:100%;margin-top:-10px;border-width:20px;border-style:solid;border-color:transparent #fff transparent transparent}.pow-tourcard-bottom::after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-10px;border-width:20px;border-style:solid;border-color:transparent transparent #fff transparent}.pow-tourcard-bottom-left::after{content:"";position:absolute;bottom:100%;left:5%;margin-left:-10px;border-width:20px;border-style:solid;border-color:transparent transparent #fff transparent}.pow-tourcard-bottom-right::after{content:"";position:absolute;bottom:100%;left:90%;margin-left:-10px;border-width:20px;border-style:solid;border-color:transparent transparent #fff transparent}.pow-tourcard-top::after{content:"";position:absolute;top:100%;left:50%;margin-left:-10px;border-width:20px;border-style:solid;border-color:#fff transparent transparent transparent}.pow-tourcard-left::after{content:"";position:absolute;top:50%;left:100%;margin-top:-10px;border-width:20px;border-style:solid;border-color:transparent transparent transparent #fff}.pow-pos-start{bottom:10px;left:20px}.pow-tourcard-media{max-width:300px}.pow-hidden{display:none}.pow-visible{visibility:initial;opacity:1}.pow-start-tour:hover{cursor:pointer}@media (max-width:1279px){.uk-width-medium{width:100%}.pow-pos-start{bottom:0;left:0}.pow-tourcard-heading{font-size:1rem;text-align:left;line-height:normal}.pow-tourcard-text{font-size:.8rem;text-align:left;line-height:normal}}</style><style>[data-theme=dark-theme] h1,[data-theme=dark-theme] h2, [data-theme=dark-theme] h3, [data-theme=dark-theme] h4, [data-theme=dark-theme] h5, [data-theme=dark-theme] h6{color: #FFFFFF !important;}</style>';
    
        $("body").append(html);       

    }
    const inject_animate= function(){
        var f = document.getElementsByTagName("script")[0];

        j3 = document.createElement("link");
        j3.rel = "stylesheet";
        j3.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        f.parentNode.insertBefore(j3, f);

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

    const handler_close = function(){
        $(".pow-tourcard-close").unbind();

        $(".pow-tourcard-close").click(function(){
            $(".pow-tourcard").removeClass("pow-tourcard-open");
            $(".pow-tourcard").removeClass("pow-visible");
            $(".pow-tourcard").addClass("pow-hidden");
        })
    }
    const add_start_tour_button = function(){
        var help_icon = '<span class="pow-start-tour-icon pow-start-tour"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 13 C 20.704135 13 18 15.704135 18 19 L 18 19.5 A 1.50015 1.50015 0 1 0 21 19.5 L 21 19 C 21 17.325865 22.325865 16 24 16 C 25.674135 16 27 17.325865 27 19 C 27 21.340909 26.39136 21.634239 25.324219 22.472656 C 24.790648 22.891865 24.091764 23.375202 23.494141 24.189453 C 22.896517 25.003704 22.5 26.138742 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5 C 25.5 26.646758 25.665983 26.300186 25.912109 25.964844 C 26.158236 25.629501 26.584352 25.296698 27.175781 24.832031 C 28.35864 23.902698 30 22.159091 30 19 C 30 15.704135 27.295865 13 24 13 z M 24 32 A 2 2 0 0 0 24 36 A 2 2 0 0 0 24 32 z"/></svg></span>';
        var help_text_local = "Player Help";
        if(typeof(window._playeah_tour.options)!="undefined" && typeof(window._playeah_tour.options.start_text)!="undefined"){
            help_text_local = window._playeah_tour.options.start_text;
        }
        var help_text = "<span class='pow-start-tour-text pow-start-tour'>"+help_text_local+"</span>";
        var html = help_icon + help_text;
        if($(".pow-start-tour").length==0){
            $(".course-player__content-header__actions").prepend(html);
        }
        $(".pow-start-tour").unbind();
        $(".pow-start-tour").click(function(){
            current_step= -1;
            show_next();
        })

        
    }

    const handler_button = function(){
        $(".pow-tourcard-button").unbind();
        $(".pow-tourcard-button").click(function(){
            // if not end go to next
            // else close and add tour to actions
            console.log("cs:"+current_step);
            var tour_step = tour_steps[current_step];
            console.log(tour_step);
            if(tour_step.step_type=="end"){
                $(".pow-tourcard").removeClass("pow-tourcard-open");
                $(".pow-tourcard").removeClass("pow-visible");
                $(".pow-tourcard").addClass("pow-hidden");
                current_step = -1;
            } else {
                show_next();
            }
            
        })
    }

    const is_drawer_open = function(){
        if($(".course-player__top-bar").hasClass("left-drawer--open")){
            return true;
        } else {
            return false;
        }
    }
    const is_mobile = function(){
        if($(".course-player__top-bar__menu-toggle").first().css("display")=="none"){
            console.log("not mobile");
            return false
        } else {
            console.log("mobile");
            return true
        }
    }
    const clear_caret = function (){
        $(".pow-tourcard").removeClass("pow-tourcard-right");
        $(".pow-tourcard").removeClass("pow-tourcard-top");
        $(".pow-tourcard").removeClass("pow-tourcard-bottom");
        $(".pow-tourcard").removeClass("pow-tourcard-left");
        $(".pow-tourcard").removeClass("pow-tourcard-bottom-left");
        $(".pow-tourcard").removeClass("pow-tourcard-bottom-right");
        $(".pow-tourcard").addClass("pow-visible");
    }
    const show_next = function(){
        current_step+=1;
        console.log("Current Step: "+current_step);
        var tour_step = tour_steps[current_step];
        var skip = false;
        if(!tour_step.enabled){
            skip = true;
        }

        if(tour_step.step_type=="mobile_menu" && !is_mobile()){ //skip
            skip = true;
        }

        if(tour_step.step_type=="full_screen" && is_mobile()){ //skip
           skip=true;

        }    
        if(!skip){
            console.log("Showing Step",tour_step);
            if(tour_step.heading!=""){
                $(".pow-tourcard-heading").text(tour_step.heading.replace(/{NAME}/g,Thinkific.current_user.first_name));
                $(".pow-tourcard-heading").removeClass("pow-hidden");
            } else {
                $(".pow-tourcard-heading").addClass("pow-hidden");
            }
            if(tour_step.copy!=""){
                $(".pow-tourcard-copy").text(tour_step.copy.replace(/{NAME}/g,Thinkific.current_user.first_name));
                $(".pow-tourcard-copy").removeClass("pow-hidden");
            } else {
                $(".pow-tourcard-copy").addClass("pow-hidden");
            }
            if(tour_step.img!=""){
                $(".pow-tourcard-media img").attr("src",tour_step.img);
                $(".pow-tourcard-media").removeClass("pow-hidden");
            } else {
                $(".pow-tourcard-media").addClass("pow-hidden");
            }

            $(".pow-tourcard-button").text(tour_step.button_text);
            switch(tour_step.step_type) {
                case "start":
                    start_tour(tour_step);
                    break;
                case "mobile_menu":
                    show_mobile_menu();
                    break;
                case "dash_link":
                    show_dashboard_link()
                    break;
                case "chapters":
                    show_sidebar();
                    break;
                case "search":
                    show_search();
                    break;
                case "progress":
                    show_progress();
                    break;
                case "footer":
                    show_footer();
                    break;
                case "full_screen":
                    show_full_screen();
                    break;
                case "end":
                    end_tour();
                    break;                
            }  
        }    
 
        
        if(skip){
            console.log("Skipping step");
            show_next();
        }
              

    }

    const start_tour = function(tour_step){
        clear_caret();
        $(".pow-tourcard").removeClass("pow-hidden");
        $(".pow-tourcard").removeClass("pow-pos-start animate__animated animate__slideInLeft");
        $(".pow-tourcard").addClass("pow-pos-start animate__animated animate__slideInLeft");
        if(!is_mobile()){
            if(tour_step.location=="top_left"){
                $(".pow-tourcard").css({ bottom: "initial", top: 10,left: 20, right:"initial"});
            } else {

                $(".pow-tourcard").css({ bottom: 10, top: "initial",left: 20, right:"initial"});
            }
        } else {
                $(".pow-tourcard").css({ bottom: 0, top: "initial",left: 0, right:"initial"});
            

        }
        $(".pow-tourcard").addClass("pow-tourcard-open pow-pos-start");
        
        handler_close();
        handler_button();
    }

    const end_tour = function(){
        console.log("Showing end");
        clear_caret();
        add_start_tour_button();
        if(!is_mobile()){
            var full_screen = $(".course-player__content-header__action-fullscreen").first();
            $(".pow-tourcard").css({ left: "initial", right: 20});
            $(".pow-tourcard").css({ bottom: "initial",top: (full_screen.offset().top - $(document).scrollTop())+60});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-bottom");

        } else {
            if(is_drawer_open()){
                //close mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }
            var dash_link = $(".course-progress__dashboard-link");
            $(".pow-tourcard").css({ bottom: "initial",top: (dash_link.offset().top - $(document).scrollTop())+40});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-bottom-right");
            
        }
        $(".pow-start-tour-text").removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $(".pow-start-tour-icon").removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $(".pow-start-tour-text").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $(".pow-start-tour-icon").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");

        
    }

    const show_sidebar = function(){
        var chapters_menu = $( ".course-player__chapters-menu" ).first();
        if(!is_mobile()){
            $(".pow-tourcard").css({ left: chapters_menu.width(), bottom: "initial",top:400});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-right");
            $(".course-player__chapters-menu").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");

        } else {
            if(!is_drawer_open()){
                //open mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }
            $(".pow-tourcard").css({ bottom: "initial",top: 130});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-top");
            $(".course-player__chapters-menu").removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
            $(".course-player__chapters-menu").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        }

    }

    const show_footer = function(){
        var footer = $( "#course-player-footer" ).first();
        if(!is_mobile()){
            $(".pow-tourcard").css({ left: ($(document).width()*.5)});
        } else {
            if(is_drawer_open()){
                //close mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }
        }
        $(".pow-tourcard").css({top: "initial",bottom:100});
        clear_caret();
       
        $(".pow-tourcard").addClass("pow-tourcard-top");
        $(footer).removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $(footer).addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");


    }
    

    const show_dashboard_link = function(){
        if(!is_mobile()){
            $(".top-bar__dashboard-link__anchor").each(function(){
                if($(this).is(":visible")){
                    var dash_link = $(this);
                    $(".pow-tourcard").css({ left: dash_link.offset().left - $(document).scrollTop()});
                    $(".pow-tourcard").css({ bottom: "initial",top: (dash_link.offset().top - $(document).scrollTop())+50});
                    clear_caret();
                    $(".pow-tourcard").addClass("pow-tourcard-bottom-left");
                    $(this).removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
                    $(this).addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
            
                }
            });        
        } else {
            if(!is_drawer_open()){
                //open mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }
            var dash_link = $(".course-progress__dashboard-link");
            $(".pow-tourcard").css({ bottom: "initial",top: (dash_link.offset().top - $(document).scrollTop())+40});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-bottom-left");
            $(".course-progress__dashboard-link").removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
            $(".course-progress__dashboard-link").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");


        }
    }

    const show_search = function(){
        var search = $(".course-player__user-search").first()
        if(!is_mobile()){
        $(".pow-tourcard").css({ left: (search.offset().left - $(document).scrollTop())+16});
        } else {
            if(!is_drawer_open()){
                //open mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }

        }
        $(".pow-tourcard").css({ bottom: "initial",top: (search.offset().top - $(document).scrollTop())+80});
        clear_caret();
        $(".pow-tourcard").addClass("pow-tourcard-bottom-left");
        $(search).removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $(search).addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
    }
    
    const show_progress = function(){
        var progress = $(".course-progress__percent-complete").first()
        if(!is_mobile()){
            $(".pow-tourcard").css({ left: (progress.offset().left - $(document).scrollTop())+16});
        } else {
            if(!is_drawer_open()){
                //open mobile sidebar
                $(".course-player__top-bar__menu-toggle").first().click();
            }

        }

        $(".pow-tourcard").css({ bottom: "initial",top: (progress.offset().top - $(document).scrollTop())+40});
        clear_caret();
        $(".pow-tourcard").addClass("pow-tourcard-bottom-left");
        $('[class^="_course-progress__actions-container"]').removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        $('[class^="_course-progress__actions-container"]').addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
    }   
    
    const show_full_screen = function(){
        if(!is_mobile()){
            var full_screen = $(".course-player__content-header__action-fullscreen").first();
            $(".pow-tourcard").css({ left: "initial", right: 20});
            $(".pow-tourcard").css({ bottom: "initial",top: (full_screen.offset().top - $(document).scrollTop())+60});

            
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-bottom-right");
            $(full_screen).removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
            $(full_screen).addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
        }
    }      
        
    const show_mobile_menu = function(){
        
        if($(".course-player__top-bar__menu-toggle").is(":visible")){
            console.log("mobile menu is visible");
            var toggle = $(".course-player__top-bar__menu-toggle").first();
            $(".pow-tourcard").css({ bottom: "initial",top: (toggle.offset().top - $(document).scrollTop())+45});
            clear_caret();
            $(".pow-tourcard").addClass("pow-tourcard-bottom-left");
            $(".course-player__top-bar__menu-toggle").removeClass("animate__animated animate__shakeX animate__slow animate__repeat-1");
            $(".course-player__top-bar__menu-toggle").addClass("animate__animated animate__shakeX animate__slow animate__repeat-1");

        }
    }    

    $( document ).ready(function() {
        var started = false;
        if(typeof(CoursePlayerV2) !== 'undefined') {
            inject_uikit();
            inject_animate();
            

            CoursePlayerV2.on('hooks:contentDidChange', function(data) {
                console.log(data);
                inject_html();
                if(!started){
                    add_start_tour_button();
                    started = true;
                    if (localStorage.getItem(Thinkific.current_user.subdomain+'playeah_tour_started') !== null) {
                        
    
                    } else {
                        localStorage.setItem(Thinkific.current_user.subdomain+"playeah_tour_started", Date.now());
                        show_next();
                    }                
                }
            });            
             
        }

    });    

    
}());    
