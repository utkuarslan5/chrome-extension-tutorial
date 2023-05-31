// get url from website
const url = window.location.hostname;

// alert('Extension was loaded!');

// function to add custom css
const Add_Custom_Style = css => document.head.appendChild(document.createElement('style')).innerHTML = css;

// function to create custom element
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const element = document.createElement(tag);
    element.setAttribute(attr_tag, attr_name);
    element.innerHTML = value;
    document.body.append(element);
    return element;
}

// code for google
if (url.includes('google.com')) {
    Add_Custom_Style(`
        @import url('https://fonts.googleapis.com/css?family=Raleway');

        * {
            font-family: 'Raleway', !important;
            color: #00ff40 !important;
        }
        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }
        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.4;
        }
        #js-custom-element{
            font-size: 60px;
            padding: 150px 0;
            color: #00ff37 !important;
            background-color: #fffff2 !important;
            position: fixed;
            top: 0;
            text-align: center;
            width: 100%;
            z-index: 9999999999;
        }

        .js-custom-element{
            font-size: 60px;
            padding: 150px 0;
            color: #f08dff !important;
            background-color: #fffff2 !important;
            position: fixed;
            top: 0;
            text-align: center;
            width: 50%;
            z-index: 9999999999;
        }
    `)
    Create_Custom_Element(
        'div',
        'id',
        'js-custom-element',
        'custom element 1'
    )
    Create_Custom_Element(
        'div',
        'class',
        'js-custom-element',
        'custom element 2'
    )
}

// code for yt
if (url.includes('youtube.com')) {
    Add_Custom_Style(`
        @import url('https://fonts.googleapis.com/css?family=Raleway');

        * {
            font-family: 'Raleway', !important;
            color: #00ff40 !important;
        }
        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }
        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.4;
        }
        #js-custom-element{
            font-size: 60px;
            padding: 150px 0;
            color: #00ff37 !important;
            background-color: #fffff2 !important;
            position: fixed;
            top: 0;
            text-align: center;
            width: 100%;
            z-index: 9999999999;
        }

        .js-custom-element{
            font-size: 60px;
            padding: 150px 0;
            color: #f08dff !important;
            background-color: #fffff2 !important;
            position: fixed;
            top: 0;
            text-align: center;
            width: 50%;
            z-index: 9999999999;
        }
    `)
    Create_Custom_Element(
        'div',
        'id',
        'js-custom-element',
        'custom element 1'
    )
    Create_Custom_Element(
        'div',
        'class',
        'js-custom-element',
        'custom element 2'
    )
}

if (url.includes('vimeo.com')) {
    Add_Custom_Style(`
        *{
            filter: invert(1) !important;
        }
    `);
}
