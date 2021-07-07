$( document ).ready(function() {
    if(typeof(CoursePlayerV2) !== 'undefined') {
        var added_embeds = false;
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {

            console.log(data);
            var courseid = data.course.id;
            if(!added_embeds){
                $(".playeah-embeds[data-type='all']").each(function(){
                    console.log("found embed");
                    console.log($(this).val());
                    var embed = $(this).val()
                    if($(this).data("scripts")!=""){
                        console.log("loading scripts");
                        $.getScript($(this).data("scripts"), function() {
                            console.log("scripts loaded"); 
                            $("body").append(embed);
                            added_embeds = true
                        });                        
                    } else {
                        console.log("attempting direct embed");
                        $("body").append(embed);
                        added_embeds = true
                        
                    }                    
                });                   
                $(".playeah-embeds[data-courseid='" + courseid +"']").each(function(){
                    console.log("found embed");
                    console.log($(this).val());
                    var embed = $(this).val()
                    if($(this).data("scripts")!=""){
                        console.log("loading scripts");
                        $.getScript($(this).data("scripts"), function() {
                            console.log("scripts loaded"); 
                            $("body").append(embed);
                            added_embeds = true
                        });                        
                    } else {
                        console.log("attempting direct embed");
                        $("body").append(embed);
                        added_embeds = true
                        
                    }                    
                });   
            }
        })
    }
})