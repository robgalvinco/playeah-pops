

# How it works
* always include `/css/playeah-pops.css` and `/js/playeah-pops.js`
* some code to determine if pop was triggered (progress, lesson start, etc)
* pop config has attribute that says the pop type (index into pops array)
* css and html strings will be stored in code in arrays (minified)
* replace placeholder `{{ variable }}` text with pop settings for both #.css and html.css
* inject any needed style for hiding ex: not using images, or cta
* inject any needed style for modal background
* insert css and html into the document
* load pop / determine if need to autohide after delay

# changes needed on snippets
* change `modal-header`,`modal-footer`,`modal-body` to `pp-modal-header`,`pp-modal-footer`,`pp-modal-body`
* change xxx-# to playeah-pops in both html and css
* add classes to css
* replace html with {{names}}
* replace css colors with {{names}}

## css (add these classes to snippets)
* pop-media
* pop-heading
* pop-subheading
* pop-cta-section
* pop-cta

## {{names}} will be used to auto replace content

## html
* {{media}} - will be area of media remove if using img_src
* {{img_src}}
* {{heading}}
* {{subheading}}
* {{cta_link}}
* {{cta_page}}


# css
* {{color_cta_bg}}
* {{color_cta_text}}
* {{color_bg}}
* {{color_heading}}
* {{color_copy}}

# Minify command -option -m



# Types
* 0 - Notification bar with image  has cta
* 1 - Center msg no CTA 
* 2 - Lower Right no image - copt and CTA
* 3 - Lower Right imag/heading/cta - no subcopy
* 4 - Notification bar - just text and cta
* 5 - Small avatar image - just subcopy optional CTA 
* 6 - Top center media / heading/ copy /cta
* 7 - Similar to 6 but has border button and is in middle
* 8 - Has side image (right) and heading, copy, cta
* 9 - Has side image (left) heading, copy, cta 
* 10 - Image below heading - no cta, no copy
* 11 - background image
* 12 - Coupon
* 13 - Seems just like 9
* 14 - Middle narrow, button part of modal 
* 15 - Image on top heading, copy, cta (need to fix line height of heading)


