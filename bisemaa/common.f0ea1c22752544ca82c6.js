(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{EnSh:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return r}));var o=a("fXoL"),n=a("Iab2"),s=a("tk/3");let r=(()=>{class t{get isFileSaverSupported(){try{return!!new Blob}catch(t){return!1}}genType(t){if(!t||-1===t.lastIndexOf("."))return"text/plain";const e=t.substr(t.lastIndexOf(".")+1);switch(e){case"txt":return"text/plain";case"xml":case"html":return"text/"+e;case"json":return"octet/stream";default:return"application/"+e}}save(t,e,a,o){if(!t)throw new Error("Data argument should be a blob instance");const s=new Blob([t],{type:a||t.type||this.genType(e)});Object(n.saveAs)(s,decodeURI(e||"download"),o)}saveText(t,e,a){const o=new Blob([t]);this.save(o,e,null,a)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(o.Eb)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),i=(()=>{class t{constructor(t,e,a){this.el=t,this.fss=e,this.httpClient=a,this.method="GET",this.success=new o.n,this.error=new o.n,e.isFileSaverSupported||t.nativeElement.classList.add("filesaver__not-support")}getName(t){return decodeURI(this.fileName||t.headers.get("filename")||t.headers.get("x-filename"))}_click(){if(!this.fss.isFileSaverSupported)return;let t=this.http;if(!t){let e=new s.d;const a=this.query||{};for(const t in a)e=e.set(t,a[t]);t=this.httpClient.request(this.method,this.url,{observe:"response",responseType:"blob",headers:this.header,params:e})}this.setDisabled(!0),t.subscribe(t=>{200!==t.status||t.body.size<=0?this.error.emit(t):(this.fss.save(t.body,this.getName(t),null,this.fsOptions),this.success.emit(t))},t=>this.error.emit(t),()=>this.setDisabled(!1))}setDisabled(t){const e=this.el.nativeElement;e.disabled=t,e.classList[t?"add":"remove"]("filesaver__disabled")}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(o.l),o.Ib(r),o.Ib(s.a))},t.\u0275dir=o.Db({type:t,selectors:[["","fileSaver",""]],hostBindings:function(t,e){1&t&&o.Vb("click",(function(){return e._click()}))},inputs:{method:"method",http:"http",query:"query",header:"header",url:"url",fileName:"fileName",fsOptions:"fsOptions"},outputs:{success:"success",error:"error"},exportAs:["fileSaver"]}),t})(),l=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)}}),t})()},Iab2:function(t,e,a){var o,n;void 0===(n="function"==typeof(o=function(){"use strict";function e(t,e,a){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,a)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,s=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,s,r){var i=n.URL||n.webkitURL,l=document.createElement("a");l.download=s=s||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?o(l):a(l.href)?e(t,s,r):o(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,s){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,s),n);else if(a(t))e(t,n,s);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){o(r)}))}}:function(t,a,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,o);var i="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var g=n.URL||n.webkitURL,d=g.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){g.revokeObjectURL(d)}),4e4)}});n.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,[]):o)||(t.exports=n)},PTOO:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var o=a("XNiG"),n=a("tk/3"),s=a("AytR"),r=a("fXoL");let i=(()=>{class t{StringFormat(t,...e){return t.replace(/{(\d+)}/g,(t,a)=>e[a]||"")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{constructor(t,e){this.http=t,this.stringHelper=e,this.catalogCategory=new o.a,this.catalogSubCategory=new o.a,this.catalogProduct=new o.a,this.catalogHome=new o.a,this.categoryCatalog=new o.a,this.subCategoryCatalog=new o.a,this.homeCatalog=new o.a,this.productCatalog=new o.a,this.baseUrl=s.a.baseUrl}getManufacturingCompanies(){return this.http.get(`${this.baseUrl}api/manufacturingcompany/${location.host}`)}getCompanyCatalogues(t){return this.http.get(`${this.baseUrl}${t}`)}getManufacturingCatalogue(t,e){return this.http.get(`${this.baseUrl}assets/${t}/${e}/${e}.json`)}getCatalogueFile(t,e){return this.http.get(`${this.baseUrl}assets/${t}/${e}/catalogue_text.txt`,{responseType:"text"})}getGalleryImages(t,e){return this.http.get(`${this.baseUrl}gallery/${t}/${e}`)}getSectionTextFile(t,e,a,o){return this.http.get(`${this.baseUrl}assets/${o}/${a}/labels/${t}/text/eng/${e}.txt`,{responseType:"text"})}downloadFile(t){return this.http.post(this.baseUrl+"file",{file:t})}sendcatalogCategory(t){this.catalogCategory.next(t)}getcatalogCategory(){return this.catalogCategory.asObservable()}sendcatalogSubCategory(t){this.catalogSubCategory.next(t)}getcatalogSubCategory(){return this.catalogSubCategory.asObservable()}sendcatalogProduct(t){this.catalogProduct.next(t)}getcatalogProduct(){return this.catalogProduct.asObservable()}sendcatalogHome(t){this.catalogHome.next(t)}getcatalogHome(){return this.catalogHome.asObservable()}sendCategorycatalog(t){this.categoryCatalog.next(t)}getCategorycatalog(){return this.categoryCatalog.asObservable()}sendSubCategorycatalog(t){this.subCategoryCatalog.next(t)}getSubCategorycatalog(){return this.subCategoryCatalog.asObservable()}sendHomecatalog(t){this.homeCatalog.next(t)}getHomecatalog(){return this.homeCatalog.asObservable()}sendProductCatalog(){this.productCatalog.next()}getProductCatalog(){return this.productCatalog.asObservable()}postDetailsInDynamics(t,e){const a=this.getBusinessCentralToken();return this.http.post(`${a.ApiUrl}${e}`,t,{headers:a.Headers})}getDetailsFromDynamics(t,e=""){const a=this.getBusinessCentralToken();return this.http.get(`${a.ApiUrl}${t}${""!==e?e:""}`,{headers:a.Headers})}getBusinessCentralToken(){const t=JSON.parse(localStorage.getItem("user")),e=this.stringHelper.StringFormat(t.BCWebApiUrlTemplate,t.BCWebApiVersion,t.BCTenantID,t.BCWebApiEnvironment,t.BCCompanyName),a=btoa(`${t.BCUserName}:${t.BCPassword}`);return{ApiUrl:e,Headers:(new n.c).set("Authorization","Basic "+a)}}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(n.a),r.Sb(i))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);