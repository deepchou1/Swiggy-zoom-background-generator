var Canvas2Image=function(){var t,e,n={canvas:!!(e=(t=document.createElement("canvas")).getContext("2d")),imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa},a="image/octet-stream";function r(t,e,n){var a=t.width,r=t.height;void 0==e&&(e=a),void 0==n&&(n=r);var f=document.createElement("canvas"),$=f.getContext("2d");return f.width=e,f.height=n,$.drawImage(t,0,0,a,r,0,0,e,n),f}function f(t,e,n,a){return(t=r(t,n,a)).toDataURL(e)}function $(t){document.getElementById("downloadlink").href=t,document.getElementById("downloadlink").click()}function o(t){var e=document.createElement("img");return e.src=t,e}function i(t){return"image/"+(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function c(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function g(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function u(t,e){return"data:"+e+";base64,"+t}var v=function(t){var e=t.width,n=t.height,a=e*n*3,r=a+54,f=(4-3*e%4)%4,$=t.data,o="",i=e<<2,g=n,u=String.fromCharCode;do{for(var v=i*(g-1),d="",m=0;m<e;m++){var s=m<<2;d+=u($[v+s+2])+u($[v+s+1])+u($[v+s])}for(var p=0;p<f;p++)d+="\0";o+=d}while(--g);return c([66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0].concat([40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))+c(o)},d=function(t,e,o,c){if(n.canvas&&n.dataURL){if("string"==typeof t&&(t=document.getElementById(t)),void 0==c&&(c="png"),c=i(c),/bmp/.test(c)){var d=g(r(t,e,o)),m=v(d);$(u(m,a))}else{var m=f(t,c,e,o);$(m.replace(c,a))}}},m=function(t,e,a,$){if(n.canvas&&n.dataURL){if("string"==typeof t&&(t=document.getElementById(t)),void 0==$&&($="png"),$=i($),/bmp/.test($)){var c=g(r(t,e,a)),d=v(c);return o(u(d,"image/bmp"))}var d=f(t,$,e,a);return o(d)}};return{saveAsImage:d,saveAsPNG:function(t,e,n){return d(t,e,n,"png")},saveAsJPEG:function(t,e,n){return d(t,e,n,"jpeg")},saveAsGIF:function(t,e,n){return d(t,e,n,"gif")},saveAsBMP:function(t,e,n){return d(t,e,n,"bmp")},convertToImage:m,convertToPNG:function(t,e,n){return m(t,e,n,"png")},convertToJPEG:function(t,e,n){return m(t,e,n,"jpeg")},convertToGIF:function(t,e,n){return m(t,e,n,"gif")},convertToBMP:function(t,e,n){return m(t,e,n,"bmp")}}}();