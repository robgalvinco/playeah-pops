

# How it works
* always include `/css/playeah-pops.css` and `/js/playeah-pops.js`
* css and html strings will be stored in code in arrays (minified)
* replace placeholder `{{ variable }}` text with pop settings for both #.css and html.css
* inject any needed style for hiding ex: not using images, or cta
* inject any needed style for modal background
* insert css and html into the document
* load pop / determine if need to autohide after delay

#css
* pop-img
* pop-heading
* pop-subheading
* pop-cta-section
* pop-cta

#{{names}} will be used to auto replace content

## html
* {{lottie}} - will be area of lottie player - need to remove it using imag
* {{img}} - will be image
* {{heading}}
* {{subheading}}
* {{cta_link}}
* {{cta_page}}

#css
* {{color_cta_bg}}
* {{color_cta_text}}

