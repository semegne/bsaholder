(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{PTOO:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var r=a("XNiG"),s=a("AytR"),o=a("fXoL"),n=a("tk/3");let i=(()=>{class t{constructor(t){this.http=t,this.catalogCategory=new r.a,this.catalogSubCategory=new r.a,this.catalogProduct=new r.a,this.catalogHome=new r.a,this.categoryCatalog=new r.a,this.subCategoryCatalog=new r.a,this.homeCatalog=new r.a,this.productCatalog=new r.a,this.showCartSubject=new r.a,this.baseUrl=s.a.baseUrl}getManufacturingCompanies(){return this.http.get(`${this.baseUrl}api/manufacturingcompany/${location.host}`)}getCompanyCatalogues(t){return this.http.get(`${this.baseUrl}${t}`)}getManufacturingCatalogue(t,e){return this.http.get(`${this.baseUrl}assets/${t}/${e}/${e}.json`)}getCatalogueFile(t,e){return this.http.get(`${this.baseUrl}assets/${t}/${e}/catalogue_text.txt`,{responseType:"text"})}getGalleryImages(t,e){return this.http.get(`${this.baseUrl}gallery/${t}/${e}`)}getSectionTextFile(t,e,a,r){return this.http.get(`${this.baseUrl}assets/${r}/${a}/labels/${t}/text/eng/${e}.txt`,{responseType:"text"})}downloadFile(t){return this.http.post(this.baseUrl+"file",{file:t})}sendcatalogCategory(t){this.catalogCategory.next(t)}getcatalogCategory(){return this.catalogCategory.asObservable()}sendcatalogSubCategory(t){this.catalogSubCategory.next(t)}getcatalogSubCategory(){return this.catalogSubCategory.asObservable()}sendcatalogProduct(t){this.catalogProduct.next(t)}getcatalogProduct(){return this.catalogProduct.asObservable()}sendcatalogHome(t){this.catalogHome.next(t)}getcatalogHome(){return this.catalogHome.asObservable()}sendCategorycatalog(t){this.categoryCatalog.next(t)}getCategorycatalog(){return this.categoryCatalog.asObservable()}sendSubCategorycatalog(t){this.subCategoryCatalog.next(t)}getSubCategorycatalog(){return this.subCategoryCatalog.asObservable()}sendHomecatalog(t){this.homeCatalog.next(t)}getHomecatalog(){return this.homeCatalog.asObservable()}sendProductCatalog(){this.productCatalog.next()}getProductCatalog(){return this.productCatalog.asObservable()}sendShowCart(){this.showCartSubject.next()}getSendShowCart(){return this.showCartSubject.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Yvy/":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("tk/3"),s=a("fXoL");let o=(()=>{class t{StringFormat(t,...e){return t.replace(/{(\d+)}/g,(t,a)=>e[a]||"")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),n=(()=>{class t{constructor(t,e){this.http=t,this.stringHelper=e}postDetailsInDynamics(t,e,a=null){const r=this.getBusinessCentralToken(a);return this.http.post(`${r.ApiUrl}${e}`,t,{headers:r.Headers})}getDetailsFromDynamics(t,e="",a=null){const r=this.getBusinessCentralToken(a);return this.http.get(`${r.ApiUrl}${t}${""!==e?e:""}`,{headers:r.Headers})}getBusinessCentralToken(t){const e=t||JSON.parse(localStorage.getItem("user")),a=this.stringHelper.StringFormat(e.BCWebApiUrlTemplate,e.BCWebApiVersion,e.BCTenantID,e.BCWebApiEnvironment,e.BCCompanyName),s=btoa(`${e.BCUserName}:${e.BCPassword}`);return{ApiUrl:a,Headers:(new r.c).set("Authorization","Basic "+s)}}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.a),s.Sb(o))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},c14U:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("AytR"),s=a("fXoL"),o=a("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl=r.a.baseUrl}getCartItemsByUserIDProjectIDAndManufacturingCompany(t,e,a){return""==a&&(a="none"),this.http.get(`${this.baseUrl}api/cart/${t}/${e}/${a}`)}create(t){return this.http.post(this.baseUrl+"api/cart/create",t)}createMultipleCartItems(t){return this.http.post(this.baseUrl+"api/cart/createMultipleCartItems",t)}updateCartItem(t,e){return this.http.put(`${this.baseUrl}api/cart/update/${e}`,t)}deleteCartItems(t){return this.http.post(this.baseUrl+"api/cart/delete",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(o.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},c3AT:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("AytR"),s=a("fXoL"),o=a("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl=r.a.baseUrl}getProjectsByDealerID(t){return this.http.get(`${this.baseUrl}api/project/${t}`)}checkIfExistsWithName(t,e){return this.http.post(this.baseUrl+"api/project/checkIfExistsWithName",{dealers_id:t,projectName:e})}createProject(t){return this.http.post(this.baseUrl+"api/project/create",t)}updateProject(t,e){return this.http.put(`${this.baseUrl}api/project/update/${e}`,t)}cloneProject(t){return this.http.post(this.baseUrl+"api/project/cloneProject",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(o.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);