
/* plaYEAH PowerUp For Thinkific v(v1.2.0)
https://powerups.thinkific.com/pages/playeah
v1.2.0
*/
(function () {
    var pops = window._playeah.pops;
    console.log(pops);
    var _playeah_lottie = null;
    var _progress_start = -1;



    const hide_fs_lottie = function (){
        console.log("complete"); 
        $("#playeah-fs").hide();
        _playeah_lottie.removeEventListener('complete', hide_fs_lottie);

    }
    const open_url_new_tab = function(url){
        var win = window.open(url, '_blank');
        win.focus();        
    }

    const show_pop_modal = function (pop){
        var modal_type = pop.modal_type; //TBD replace with cofog from obj
        var _pops_css= [
            '#playeah-pops .pp-modal-content{padding:13px 16px;background-color:{color_bg};}#playeah-pops .pp-modal-header .close{top:0;right:7px;padding:0;}#playeah-pops .popup-title{font-size:16px;line-height:1.07;margin-bottom:9px;max-width:280px;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:1;max-width:280px;color:{color_copy};}#playeah-pops .btn{width:fit-content;height:36px;background-color:{color_cta_bg};color :{color_cta_text};font-size:14px;line-height:1;float:right;}#playeah-pops .btn:hover{opacity:.85;}#playeah-pops .btn:active{background-color:{color_cta_bg};}#playeah-pops .pop-media img{max-width:52px;}@media (min-width:768px){#playeah-pops .col-copy{max-width:260px}}@media only screen and (max-width:575px){#playeah-pops .pp-modal-content{text-align:center;padding:40px}playeah-pops .pp-modal-header .close{top:5px;right:5px}#playeah-pops .col-md-auto{margin-bottom:30px}#playeah-pops .btn{margin-left:0!important}}',
            '#playeah-pops .pp-modal-content{padding:62px 60px 67px;background-color:{color_bg};}#playeah-pops .popup-title{font-size:27px;line-height:1.63;letter-spacing:-.4px;margin-bottom:11px;color:{color_heading};}#playeah-pops .popup-text{font-size:16px;line-height:1.5;color:{color_copy};}#playeah-pops .pop-media img{max-height:150px;}',
            '#playeah-pops .pp-modal-content{padding:22px;background-color:{color_bg};}#playeah-pops .popup-title{font-size:20px;line-height:1.3;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:1.71;color:{color_copy};margin-bottom:34px;}#playeah-pops .btn{width:258.1px;height:48px;background-color:{color_cta_bg};font-size:16px;line-height:1.5;color:{color_cta_text};}#playeah-pops .btn:hover{background-color:opacity:.85;}#playeah-pops .btn:active{background-color:opacity:.85;}@media only screen and (max-width:575px){#playeah-pops .btn-block{width:100%}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg};padding:54px 52px 51px;}#playeah-pops .popup-image{margin-bottom:35px;max-width:100%}#playeah-pops .popup-title{font-size:28px;line-height:1.35;letter-spacing:-.4px;color:{color_heading};}#playeah-pops .btn{padding-left:28px;padding-right:28px;height:49px;font-size:16px;line-height:2.4;background-color:{color_cta_bg};color :{color_cta_text};-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;-ms-transition:all .15s ease-in-out;-o-transition:all .15s ease-in-out;transition:all .15s ease-in-out;}#playeah-pops .btn:hover{-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}',
            '#playeah-pops .pp-modal-content{padding:32px;background-color:{color_bg};}#playeah-pops .pp-modal-header .close{top:0;right:0;padding:10px;}#playeah-pops .popup-title{font-size:20px;line-height:1.4;letter-spacing:.2px;color:{color_heading};}#playeah-pops .popup-text{font-size:16px;line-height:1.5;letter-spacing:.1px;color:{color_copy};}#playeah-pops .btn{padding-left:32px;padding-right:32px;height:50px;font-size:16px;line-height:1.5;background-color:{color_cta_bg};color :{color_cta_text};-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;-ms-transition:all .15s ease-in-out;-o-transition:all .15s ease-in-out;transition:all .15s ease-in-out;opacity:1;float:none;text-shadow:none;}#playeah-pops .btn:hover{-moz-transform:scale(1.03);-webkit-transform:scale(1.03);-o-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);}@media only screen and (max-width:767px){#playeah-pops .pp-modal-content{text-align:center}#playeah-pops .pp-modal-header .close{top:5px;right:5px}#playeah-pops .col-md-8{margin-bottom:20px}}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg};padding:22px 0 0;}#playeah-pops .pp-modal-body{padding:0 21px 22px;}#playeah-pops .popup-text{font-size:16px;line-height:1.38;color:{color_heading};}#playeah-pops .pop-media img{max-width:48px;border-radius:50%;}#playeah-pops .pp-modal-footer{}#playeah-pops .btn-link{padding:12px 0;font-size:16px;line-height:1.5;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn-link:hover{opacity:.85}#playeah-pops .btn-link:active{opacity:.85}@media only screen and (max-width:767px){#playeah-pops .modal-content{text-align:center}#playeah-pops .col-md-auto{margin-bottom:20px}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg};padding:35px 60px;}#playeah-pops .popup-title{font-size:27px;line-height:1.35;letter-spacing:-.3px;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:1.71;color:{color_copy};}#playeah-pops .btn{padding-left:29px;padding-right:29px;height:40px;font-size:14px;line-height:2;letter-spacing:1px;background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn:hover{opacity:.85;}#playeah-pops .btn:active{opacity:.85;}',
            '#playeah-pops .pp-modal-content{padding:36px 24px;background-color:{color_bg};}#playeah-pops .popup-text{font-size:14px;line-height:1.6;letter-spacing:.1px;color:{color_copy};}#playeah-pops .pop-media img{max-width:100%}#playeah-pops .btn{padding-left:33px;padding-right:33px;height:44px;border:solid 2px{color_cta_bg};font-size:16px;line-height:1.8;color:{color_cta_bg};}#playeah-pops .btn:hover{background-color:{color_cta_bg}!important;color:{color_cta_text};}#playeah-pops .btn:active{background-color:{color_cta_bg}!important;border-color:{color_cta_bg};color:{color_cta_text};}',
            '#playeah-pops .pp-modal-content{padding:0 0 0 52px;overflow:hidden;background-color:{color_bg};}#playeah-pops .popup-inner{padding:15px 0;}#playeah-pops .popup-title{font-size:22px;line-height:1.45;letter-spacing:-.2px;margin-bottom:12px;max-width:201px;color:{color_heading}}#playeah-pops .popup-text{font-size:14px;line-height:1.57;letter-spacing:.1px;margin-bottom:33px;max-width:201px;color:{color_copy};}#playeah-pops .pop-media img{max-width:284px;}#playeah-pops .popup-image-inner{height:252px;}#playeah-pops .popup-image-inner img{max-width:initial;min-height:100%;}#playeah-pops .btn{padding-left:21px;padding-right:21px;height:42px;font-size:14px;line-height:2.1;background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn:hover{opacity:.85;}#playeah-pops .btn:active{opacity:.85;}@media only screen and (max-width:575px){#playeah-pops .modal-content{padding:28px 0 28px 38px}}',
            '#playeah-pops .pp-modal-content{padding:0 30px 9px 0;background-color:{color_bg}}#playeah-pops .popup-image-inner{width:201px;height:195px;}#playeah-pops .popup-image{width:100%;top:0}#playeah-pops .pop-media img{max-width:201px;padding-right:10px;}#playeah-pops .popup-inner{padding:25px 0;}#playeah-pops .popup-title{font-size:20px;line-height:1.6;letter-spacing:-.2px;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:1.86;letter-spacing:.1px;margin-bottom:15px;color:{color_copy};}#playeah-pops .btn{padding-left:14px;padding-right:14px;height:42px;font-size:14px;line-height:2.1;background-color:{color_cta_bg};color :{color_cta_text};-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;-ms-transition:all .15s ease-in-out;-o-transition:all .15s ease-in-out;transition:all .15s ease-in-out;}#playeah-pops .btn:hover{-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}@media only screen and (max-width:767px){#playeah-pops .pp-modal-content{padding:20px 70px;text-align:center}#playeah-pops .popup-image-inner{margin:0 auto}#playeah-pops .popup-image{width:auto;top:0;left:50%;margin-left:-126.5px}}',
            '#playeah-pops .pp-modal-content{padding:36px 54px 0;background-color:{color_bg};overflow:hidden;}#playeah-pops .popup-title{font-size:27px;line-height:1.41;letter-spacing:-.1px;margin-bottom:33px;color:{color_heading};}#playeah-pops .popup-image-inner{height:280px;}#playeah-pops .pop-media img{max-width:100%}',
            '#playeah-pops .pp-modal-content{padding:60px;background-image:url({img_src});background-color:transparent;background-size:cover;background-repeat:no-repeat;overflow:hidden;}#playeah-pops .popup-title{font-size:36px;line-height:1.3;margin-bottom:13px;color:{color_heading};}#playeah-pops .popup-text{font-size:16px;line-height:1.5;letter-spacing:.1px;margin-bottom:35px;color:{color_copy};}#playeah-pops .popup-image-inner{height:240px;}#playeah-pops .popup-image{right:-35px;top:-337px;max-width:initial;}#playeah-pops .btn{padding-left:24px;padding-right:24px;height:50px;font-size:16px;line-height:38px;background-color:{color_cta_bg};color :{color_cta_text};-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;-ms-transition:all .15s ease-in-out;-o-transition:all .15s ease-in-out;transition:all .15s ease-in-out;}#playeah-pops .btn:hover{-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){#playeah-pops .pp-modal-content{background-image:url({img_src})}@media only screen and (max-width:767px){#playeah-pops .pp-modal-content{padding:30px}#playeah-pops .popup-title{font-size:30px}',
            '#playeah-pops .pp-modal-content{background-image:url(https://cdn.jsdelivr.net/gh/robgalvinco/playeah-pops@latest/images/coupon.png);background-color:transparent;background-size:cover;}#playeah-pops .pp-modal-body{padding:40px 20px 8px;}#playeah-pops .pp-modal-body:after{content:"";position:absolute;bottom:0;width:86%;left:7%;border-bottom:2px dashed #F49C76;}#playeah-pops .pp-modal-body .popup-title{font-style:italic;font-weight:700;line-height:36px;font-size:30px;}#playeah-pops .pp-modal-body .popup-text{opacity:.3;line-height:24px;font-size:14px;}#playeah-pops .pp-modal-footer{padding:15px;}#playeah-pops .pp-modal-footer .popup-text{line-height:1;font-size:20px;}@media only screen and (max-width:991px){#playeah-pops .ppmodal-body{position:relative!important}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg}}#playeah-pops .popup-image-inner{width:145px;}#playeah-pops .pop-media img{max-width:145px;}#playeah-pops .popup-image{width:100%;top:0;border-top-left-radius:10px;border-bottom-left-radius:10px;}#playeah-pops .popup-inner{padding:34px 45px 35px;}#playeah-pops .popup-title{font-size:22px;line-height:30px;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:20px;letter-spacing:.1px;margin-bottom:15px;color:{color_copy};}#playeah-pops .btn-link{text-decoration:underline!important;}#playeah-pops .btn-link:hover{text-decoration:none!important;}#playeah-pops .btn{padding-left:14px;padding-right:14px;height:32px;font-size:14px;background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn:hover{-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}@media only screen and (max-width:767px){#playeah-pops .pp-modal-content{padding:0;text-align:center}#playeah-pops .popup-inner{padding:35px}#playeah-pops .popup-image-inner{margin:0 auto}#playeah-pops .popup-image{width:auto;top:auto;bottom:0;left:0}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg};}#playeah-pops .pp-modal-header{padding-bottom:29px;padding-top:35px;}#playeah-pops .pp-modal-body{padding:0 28px 45px;border-bottom:1px solid #E5E5E5;}#playeah-pops .popup-title{line-height:30px;font-size:22px;letter-spacing:-.4px;margin-bottom:11px;color:{color_heading};}#playeah-pops .popup-text{line-height:22px;font-size:14px;color:{color_copy};}#playeah-pops .pp-modal-footer a{background-color:{color_cta_bg};color :{color_cta_text};font-size:14px;padding:14px 0;border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:10px;border-bottom-left-radius:10px;}#playeah-pops .pp-modal-footer a:hover{opacity:.85;}#playeah-pops .pp-modal-footer a:active{opacity:.85;}',
            '#playeah-pops .close:before{opacity:1;}#playeah-pops .close:hover:before{opacity:.3;}#playeah-pops .pp-modal-header img{border-top-left-radius:10px!important;border-top-right-radius:10px!important;}#playeah-pops .pop-media img{width:100%;}#playeah-pops .pp-modal-body{padding:25px 40px 37px;}#playeah-pops .pp-modal-content{background-color:{color_bg};}#playeah-pops strong{font-size:14px;color:#000;opacity:.7;margin-bottom:1px;}#playeah-pops .popup-title{font-size:28px;margin-bottom:11px;color:{color_heading};}#playeah-pops .popup-text{font-size:14px;line-height:22px;margin-bottom:31px;color:{color_copy};}#playeah-pops .btn{height:46px;font-size:14px;line-height:32px;border:1px solid{color_bg};background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn-first{border:1px solid #E5E5E5;padding-left:12px;padding-right:12px;line-height:34px;}#playeah-pops .btn-second{padding-left:22px;padding-right:22px;border:1px solid{color_cta_bg};}#playeah-pops .btn:hover{-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}@media only screen and (max-width:575px){#playeah-pops img{width:100%}',
            '#playeah-pops .pp-modal-content{background-color:{color_bg};}#playeah-pops .pp-modal-header{padding-bottom:41px;padding-top:42px;}#playeah-pops .pp-modal-body{padding:0 38px 36px;}#playeah-pops .popup-title{line-height:22px;font-size:22px;margin-bottom:18px;color:{color_heading};}#playeah-pops .popup-text{line-height:22px;font-size:14px;color:{color_copy};}#playeah-pops .btn{height:46px;font-size:14px;line-height:33px;background-color:{color_cta_bg};color :{color_cta_text};}#playeah-pops .btn:hover{opacity:.85;}'
        ];
        var _pops_html = [
            '<div class="modal{position} animate__animated animate__{animation_in} fade m-width-570" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content "><div class="pp-modal-header"><button type="button" class="close" data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="col"><div class="row"><div class="col-md-auto col-sm-auto px-0 pop-media">{media} <img src="{img_src}" alt="" /></div><div class="col-md-auto col-sm-auto align-self-center col-copy"><div class="popup-title pop-heading">{heading}</div><p class="popup-text mb-0 pop-subheading">{subheading}</p></div><div class="col align-self-center pop-cta-section"><button data-href="{cta_link}" data-target="{nav_target}" class="btn b-radius-25 pop-cta pop-cta-data">{cta_text}</button></div></div></div></div></div></div></div>',
            '<div class="modal{position} animate__animated animate__{animation_in} fade m-width-370" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header align-self-center pop-media"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button>{media} <img class="mb-4" src="{img_src}" srcset="" alt="" /></div><div class="pp-modal-body"><div class="popup-title pop-heading">{heading}</div><p class="popup-text mb-0 pop-heading">{subheading}</p></div></div></div></div>',
            '<div class="modal{position} animate__animated animate__{animation_in} fade m-width-300" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-body"><div class="popup-title mb-3 pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><button data-href="{cta_link}" data-target="{nav_target}" type="button" class="btn btn-block font-weight-bold pop-cta-section  pop-cta-data">{cta_text}</button></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-370" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header align-self-center pop-media"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button>{media} <img class="popup-image" src="{img_src}" srcset="" alt="" /></div><div class="pp-modal-body"><div class="popup-title mb-5 pop-heading">{heading}</div><a href="{cta_link}" target="{nav_target}" class="btn font-weight-bold pop-cta pop-cta-section">{cta_text}</a></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-770" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="col"><div class="row"><div class="col-md-8 col-sm-12 px-0 align-self-center"><div class="popup-title mb-2 pop-heading">{heading}</div><p class="popup-text mb-0 pop-subheading">{subheading}</p></div><div class="col-md-4 col-sm-12 pr-0 align-self-center text-center pop-cta-section"><button data-href="{cta_link}" data-target="{nav_target}" class="btn close font-weight-bold b-radius-30 pop-cta pop-cta-data" >{cta_text}</button></div></div></div></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-300" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-body"><div class="col"><div class="row"><div class="col-md-auto px-0 pop-media">{media} <img src="{img_src}" alt="" /></div><div class="col pr-0 align-self-center"><p class="popup-text font-weight-light mb-0 pop-heading">{heading}</p></div></div></div></div><div class="pp-modal-footer pop-cta-section"><a class="btn btn-block font-weight-bold btn-link" href="{cta_link}" target="{nav_target}">{cta_text}</a></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-300" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header align-self-center"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button>{media} <img class="mb-4" src="{img_src}" alt="" /></div><div class="pp-modal-body"><div class="popup-title mb-1 pop-heading">{heading}</div><p class="popup-text mb-4 pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn b-radius-25 font-weight-bold text-uppercase pop-cta pop-cta-section">{cta_text}</a></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-270" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="popup-title mb-4 pop-media">{media} <img src="{img_src}" alt="" /></div><p class="popup-text mb-4 pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn b-radius-30 font-weight-bold pop-cta pop-cta-section">{cta_text}</a></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-470" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-body"><div class="col"><div class="row"><div class="col pl-0 pr-3"><div class="popup-inner"><div class="popup-title pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn font-weight-bold pop-cta-section">{cta_text}</a></div></div><div class="col px-0"><div class="popup-image-inner pop-media">{media} <img class="position-absolute popup-image" src="{img_src}" alt="" /></div></div></div></div></div></div></div></div>',
            '<div class="modal fade{position} animate__animated animate__{animation_in} m-width-500" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="col"><div class="row"><div class="col-md-auto px-0"><div class="popup-image-inner pop-media">{media} <img class="popup-image position-absolute" src="{img_src}" alt="" /></div></div><div class="col px-0"><div class="popup-inner"><div class="popup-title mb-1 pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><a href="{cta_link}" target="_blank" class="btn font-weight-bold pop-cta pop-cta-section">{cta_text}</a></div></div></div></div></div></div></div></div>',
            '<div class="modal fade{position} m-width-300 animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="popup-title pop-heading">{heading}</div><div class="popup-image-inner pop-media">{media} <img class="popup-image " src="{img_src}" alt="" /></div></div></div></div></div>',
            '<div class="modal fade{position} m-width-640 animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="col"><div class="row"><div class="col col-sm-8 pl-0 pr-3"><div class="popup-title pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn font-weight-bold pop-cta pop-cta-section">{cta_text}</a></div><div class="col px-0"><div class="popup-image-inner"></div></div></div></div></div></div></div></div>',
            '<div class="modal fade m-width-270{position} animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="modal-header"><button type="button" class="close close-dark" data-dismiss="modal"></button></div><div class="pp-modal-body"><div class="popup-title text-black mb-3 pop-heading">{heading}</div><p class="popup-text text-black mb-0 pop-subheading">{subheading}</p></div><div class="pp-modal-footer justify-content-center"><p class="popup-text text-black mb-0">{cta_text}</p></div></div></div></div>',
            '<div class="modal{position} fade m-width-470 animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content"><div class="pp-modal-header"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button></div><div class="pp-modal-body"><div class="col"><div class="row"><div class="col order-last popup-inner"><div class="popup-title mb-1 pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn font-weight-bold transition-all pop-cta pop-cta-section">{cta_text}</a></div><div class="col-md-auto order-first popup-image-inner px-0 pop-media">{media} <img class="popup-image position-absolute" src="{img_src}" alt="" /></div></div></div></div></div></div></div>',
            '<div class="modal{position} fade m-width-270 animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header align-self-center pop-media"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button>{media} <img src="{img_src}" alt="" /></div><div class="pp-modal-body"><div class="popup-title pop-heading">{heading}</div><p class="popup-text mb-0 pop-subheading">{subheading}</p></div><div class="pp-modal-footer justify-content-center pop-cta-section"><a href="{cta_link}" target="{nav_target}" class="btn btn-block font-weight-bold btn-link pop-cta">{cta_text}</a></div></div></div></div>',
            '<div class="modal fade m-width-370{position} animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content "><div class="pp-modal-header position-relative pop-media"><button type="button" class="close " data-dismiss="modal"><svg fill="{color_heading}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/></svg></button>{media} <img src="{img_src}" alt="" /></div><div class="pp-modal-body text-center"><div class="popup-title pop-heading">{heading}</div><p class="popup-text pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class=" pop-cta-section btn btn-second font-weight-bold ml-1 transition-all pop-cta">{cta_text}</a></div></div></div></div>',
            '<div class="modal{position} fade m-width-370 animate__animated animate__{animation_in}" id="playeah-pops" playeah-pops-hide="{animation_out}"><div class="modal-dialog"><div class="pp-modal-content text-center"><div class="pp-modal-header align-self-center pop-media"><button type="button" class="close close-dark" data-dismiss="modal"></button>{media} <img src="{img_src}" alt="" /></div><div class="pp-modal-body"><div class="popup-title pop-heading">{heading}</div><p class="popup-text mb-5 pop-subheading">{subheading}</p><a href="{cta_link}" target="{nav_target}" class="btn btn-block text-white font-weight-bold pop-cta pop-cta-section">{cta_text}</a></div></div></div></div>'
        ]  
        //get and replace CSS
        var css = "<style>.modal-backdrop {background-color:transparent;}#playeah-pops .popup-title {line-height: initial; }#playeah-pops .pp-modal-content {overflow: hidden;}"+_pops_css[modal_type]+"</style>";
        //replace color_cta_bg, color_cta_text
        css = css.replace(/{color_cta_bg}/g,pop.color_cta_bg);
        css = css.replace(/{color_cta_text}/g,pop.color_cta_text);
        css = css.replace(/{color_bg}/g,pop.color_bg);
        css = css.replace(/{color_heading}/g,pop.color_heading);
        css = css.replace(/{color_copy}/g,pop.color_copy);
        css = css.replace(/{img_src}/g,pop.pop_img); //background images
        console.log("CSS",css);

        var html = _pops_html[modal_type];
        html = html.replace(/{heading}/g,pop.heading).replace(/{NAME}/g,Thinkific.current_user.first_name);
        html = html.replace(/{subheading}/g,pop.copy).replace(/{NAME}/g,Thinkific.current_user.first_name);;
        html = html.replace(/{cta_link}/g,pop.cta_link);
        if(typeof(pop.nav_target)!="undefined"){
            html = html.replace(/{nav_target}/g,pop.nav_target);
        } else {
            html = html.replace(/{nav_target}/g,"_blank");
        }
        html = html.replace(/{cta_text}/g,pop.cta_text);
        html = html.replace(/{color_heading}/g,pop.color_heading);
        html = html.replace(/{img_src}/g,pop.pop_img);
        if(pop.media_type=="lottie"){
            var lottie = '<lottie-player src="'+pop.lottie+'"  background="transparent"  speed="1"  style="height: 100px; "  loop  autoplay></lottie-player>';
            html = html.replace(/{media}/g,lottie);
        } else {
            html = html.replace(/{media}/g,"");
        }
        html = html.replace(/{position}/g," "+pop.position+" ");
        html = html.replace(/{animation_in}/g,pop.animation_in);
        html = html.replace(/{animation_out}/g,pop.animation_out);
        
        console.log("HTML",html);

        // inject any special CSS for any needed of hiding things
        // TBD
        if(pop.cta_link == "" || pop.cta_text ==""){
            css += "<style>.pop-cta-section{display:none !important;}</style>";
        }
        if(pop.media_type=="lottie"){
            css += "<style>#playeah-pops .pop-media img{display:none !important;}</style>";
        }

        //load all into container
        $('#playeah-pop-container').html(css+html);
        modalAnimations();
        //open pop
        $('#playeah-pops').modal({show:true})
        $(".pop-cta-data").click(function(){
            var href = $(this).data("href");
            var target = $(this).data("target");
            if(href!=""){
                if(target=="_self"){
                    window.location = href;
                } else {
                    window.open(href);
                }
                
            }
        })
        //if auto hide
        if(pop.auto_close>0){
            setTimeout(function() {$('#playeah-pops').modal('hide');}, (pop.auto_close*1000));
        }
        //setTimeout(function() {$('#playeah-pops').modal('hide');}, 4000);
    }
    const show_pop = function(index){
        var pop = pops[index];
        
        console.log(pop);
        if(pop.type=="full"){
            _playeah_lottie=document.querySelector("#playeah-fs");
            _playeah_lottie.addEventListener('complete', hide_fs_lottie);
    
            $("#playeah-fs").show();
            _playeah_lottie.load(pop.lottie);
            pops[index].played = true;            
        } 
        if(pop.type=="modal"){
            show_pop_modal(pop);            
        }
        


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
        
        j3 = document.createElement("link");
        j3.rel = "stylesheet";
        j3.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";
        f.parentNode.insertBefore(j3, f);

    }  
    const inject_animate= function(){
        var f = document.getElementsByTagName("script")[0];

        j3 = document.createElement("link");
        j3.rel = "stylesheet";
        j3.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        f.parentNode.insertBefore(j3, f);

    }  


         
    const inject_html= function(){
    console.log("injecting html");
    var html = '<div id="playeah-pop-container"></div>';
        html += '<style>#playeah-fs{display:none;}</style><lottie-player id="playeah-fs" background="transparent" speed="1" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999999999;" autoplay=""></lottie-player>';
    
    $("body").append(html);       

    }


    const inject_pops_css = function(){
        var f = document.getElementsByTagName("script")[0];
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
    
        var __courses_index = pops.findIndex(function(pop, index) {
            if(pop.trigger_type=="progress" && pop.courses.contains(courseid)  && pop.progress<=progress  && !pop.played)
                return true;
        }); 
        console.log("course index: "+__courses_index);
        if(__courses_index != -1){
                show_pop(__courses_index);
                pops[__courses_index].played=true;
        
        }  else {
            var __allcourses_index = pops.findIndex(function(pop, index) {
                if(pop.trigger_type=="progress" && pop.id == "all" && pop.progress<=progress  && !pop.played)
                    return true;
            });   
            console.log("all index"+__allcourses_index);          
            if(__allcourses_index != -1){
                pops[__allcourses_index].played=true
                show_pop(__allcourses_index)
            }
        }
    }

    // animations
    
    const modalAnim = function (x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog ' + x + ' animated');
    }; 
    
    const modalAnimations = function(){
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
    
    

    }




    $( document ).ready(function() {
        if(typeof(CoursePlayerV2) !== 'undefined') {
            inject_fonts();
            inject_fa();
            inject_animate();
            inject_bs();

            inject_pops_css();
            inject_lottie();
            inject_html();
            inject_uikit();
        
            CoursePlayerV2.on('hooks:contentDidChange', function(data) {
                console.log(data);

                // if re-opening course already completed set played
                if(_progress_start == -1){
                    console.log("Setting default");
                    _progress_start = data.enrollment.percentage_completed*100;
                    console.log("start: "+_progress_start)
                    //mark celebrations played if progress is >0
                    for (i = 0; i < pops.length; i++) {
                        if(pops[i].trigger_type=="progress" && pops[i].progress <= _progress_start && pops[i].shown!="always"){
                            pops[i].played=true;
                        }
                    }                
                    console.log("pops now",pops);
                }
                


                //check for specific lesson start
                var courseid = data.course.id;
                var lessonid = data.lesson.id;
                var __pops_index = pops.findIndex(function(pop, index) {
                    if(pop.courses.contains(courseid) && pop.trigger_type=="lesson_start"){
                        console.log("found course",pop);
                        var __lessons_index = pops[index].lessons.findIndex(function(lesson, lessonindex) {
                            var lessonids = lesson.lessonids.split(",");
                            console.log("Lessons"+lessonids)
                            if(lessonids.contains(lessonid)){
                                console.log("found lesson");
                                return true
                            }
                        })
                        if(__lessons_index!=-1){
                            return true;
                        }
                    }
                        
                }); 
                if(__pops_index != -1){
                    show_pop(__pops_index);
                }
                
            });

            CoursePlayerV2.on('hooks:contentWasCompleted', function(data) {
                console.log(data);
                var progress = data.enrollment.percentage_completed*100;
                console.log(progress)
                //check for specific lesson complete
                var courseid = data.course.id;
                var lessonid = data.lesson.id;
                var __pops_index = pops.findIndex(function(pop, index) {
                    if(pop.courses.contains(courseid) && pop.trigger_type=="lesson_complete"){
                        console.log("found course",pop);
                        var __lessons_index = pops[index].lessons.findIndex(function(lesson, lessonindex) {
                            var lessonids = lesson.lessonids.split(",");
                            console.log("Lessons"+lessonids)
                            if(lessonids.contains(lessonid)){
                                console.log("found lesson");
                                return true
                            }
                        })
                        if(__lessons_index!=-1){
                            return true;
                        }
                    }
                        
                }); 
                if(__pops_index != -1){
                    show_pop(__pops_index);
                }
                 else {
                    // check for progress
                    find_and_play(progress,data.course.id)

                }                
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



/*
jQuery(function($) {
    
    

    
    
    
    
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



*/
 