(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v35Q:function(t,e,n){"use strict";n.r(e),n.d(e,"CartModule",(function(){return R}));var i=n("ofXK"),r=n("tyNb"),c=n("AytR"),o=n("3Pt+"),a=n("fXoL"),s=n("c14U"),l=n("c3AT"),b=n("PTOO"),d=n("Yvy/");const h=["cartCheckboxes"];function u(t,e){if(1&t){const t=a.Pb();a.Ob(0,"div"),a.Jb(1,"i",40),a.wc(2),a.Jb(3,"i",41),a.wc(4),a.Ob(5,"span",42),a.Ob(6,"a",43),a.Vb("click",(function(){return a.rc(t),a.Xb().showSpecialOrderForm()})),a.wc(7,"Order special product"),a.Nb(),a.Nb(),a.Nb()}if(2&t){const t=a.Xb();a.xb(2),a.yc(" ",t.projectName,"\xa0\xa0\xa0\xa0\xa0\xa0 "),a.xb(2),a.yc(" ",t.dealerName," "),a.xb(2),a.cc("ngClass",t.needToEnableSpecialOrderLink?"":"link_disabled")}}function p(t,e){if(1&t&&(a.Ob(0,"option",56),a.wc(1),a.Yb(2,"uppercase"),a.Nb()),2&t){const t=e.$implicit;a.dc("value",t.CompanyName),a.xb(1),a.yc(" ",a.Zb(2,2,t.CompanyName)," ")}}function g(t,e){if(1&t&&(a.Ob(0,"option",56),a.wc(1),a.Nb()),2&t){const t=e.$implicit;a.dc("value",t.id),a.xb(1),a.yc(" ",t.projectName," ")}}function f(t,e){if(1&t){const t=a.Pb();a.Ob(0,"span",57),a.Ob(1,"input",58),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb(2).newProjectName=e})),a.Nb(),a.Nb()}if(2&t){const t=a.Xb(2);a.xb(1),a.cc("ngModel",t.newProjectName)}}function m(t,e){if(1&t){const t=a.Pb();a.Ob(0,"span",53),a.Ob(1,"button",54),a.Vb("click",(function(){return a.rc(t),a.Xb(2).cancelProjectCreate()})),a.wc(2," Cancel "),a.Nb(),a.Nb()}}function O(t,e){if(1&t){const t=a.Pb();a.Ob(0,"div"),a.Ob(1,"span",44),a.Jb(2,"i",40),a.Nb(),a.Ob(3,"span",45),a.Ob(4,"select",46),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().manufacturingCompany=e}))("change",(function(){return a.rc(t),a.Xb().manufacturingCompanySelectionChange()})),a.Ob(5,"option",47),a.wc(6,"Manufacturing Company"),a.Nb(),a.vc(7,p,3,4,"option",48),a.Nb(),a.Nb(),a.Ob(8,"span",49),a.Jb(9,"i",40),a.Nb(),a.Ob(10,"span",50),a.Ob(11,"select",51),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().projectID=e}))("change",(function(){return a.rc(t),a.Xb().projectSelectionChange()})),a.vc(12,g,2,2,"option",48),a.Nb(),a.Nb(),a.vc(13,f,2,1,"span",52),a.Ob(14,"span",53),a.Ob(15,"button",54),a.Vb("click",(function(){return a.rc(t),a.Xb().cloneProject()})),a.wc(16),a.Nb(),a.Nb(),a.vc(17,m,3,0,"span",55),a.Ob(18,"span",49),a.Jb(19,"i",41),a.wc(20),a.Nb(),a.Nb()}if(2&t){const t=a.Xb();a.xb(4),a.cc("ngModel",t.manufacturingCompany),a.xb(3),a.cc("ngForOf",t.manufacturingCompanies),a.xb(4),a.cc("ngModel",t.projectID),a.xb(1),a.cc("ngForOf",t.projects),a.xb(1),a.cc("ngIf",t.isNeedToShowNewProjectName),a.xb(3),a.yc(" ",t.cloneProjectButtonText," "),a.xb(1),a.cc("ngIf",t.isNeedToShowNewProjectName),a.xb(3),a.yc(" ",t.dealerName," ")}}function C(t,e){1&t&&(a.Ob(0,"th",22),a.wc(1,"Select"),a.Nb())}function N(t,e){1&t&&(a.Ob(0,"th"),a.wc(1,"Edit Finish"),a.Nb())}function x(t,e){if(1&t){const t=a.Pb();a.Ob(0,"td"),a.Ob(1,"input",72,73),a.Vb("click",(function(){a.rc(t);const e=a.Xb().$implicit;return a.Xb().checkBox(e)})),a.Nb(),a.Nb()}}function P(t,e){if(1&t){const t=a.Pb();a.Ob(0,"td"),a.Ob(1,"input",74),a.Vb("click",(function(e){a.rc(t);const n=a.Xb().index;return a.Xb().editFinish(n,e)})),a.Nb(),a.Nb()}if(2&t){const t=a.Xb().index,e=a.Xb();a.xb(1),a.dc("value",t),a.cc("formControl",e.editCtrl.controls[t])}}function w(t,e){if(1&t&&(a.Ob(0,"span"),a.wc(1),a.Nb()),2&t){const t=e.$implicit;a.xb(1),a.xc(t)}}function y(t,e){if(1&t&&(a.Ob(0,"p",75),a.wc(1),a.vc(2,w,2,1,"span",76),a.Nb()),2&t){const t=a.Xb().$implicit;a.xb(1),a.yc(" ",t.productID,""),a.xb(1),a.cc("ngForOf",t.finishCode)}}function I(t,e){if(1&t&&(a.Ob(0,"p",75),a.wc(1),a.Nb()),2&t){const t=a.Xb().$implicit;a.xb(1),a.yc(" ",t.fullSpecificationCode," ")}}function v(t,e){1&t&&(a.Ob(0,"span"),a.wc(1," / price:0"),a.Nb())}function k(t,e){if(1&t&&(a.Ob(0,"span"),a.wc(1),a.Nb()),2&t){const t=a.Xb().index,e=a.Xb(2).$implicit;a.xb(1),a.zc(" -> ",e.finishName[t]," | ",e.finishPrice[t],"")}}const M=function(t,e){return{"bg-purple text-white":t,"clr-grey":e}};function S(t,e){if(1&t){const t=a.Pb();a.Ob(0,"div",84),a.Ob(1,"a",85),a.Vb("click",(function(){a.rc(t);const n=e.$implicit,i=a.Xb().index,r=a.Xb(2).index;return a.Xb().changeOrderCode(r,i,n.name,n.PRICES.PRICE.Text,n.DESCRIPTIONS.TEXT.Text)})),a.wc(2),a.Nb(),a.Nb()}if(2&t){const t=e.$implicit,n=a.Xb().index,i=a.Xb(2).$implicit;a.xb(1),a.cc("ngClass",a.lc(2,M,t.name==i.finishCode[n],t.name!=i.finishCode[n])),a.xb(1),a.yc(" ",t.DESCRIPTIONS.TEXT.Text," ")}}function _(t,e){if(1&t&&(a.Ob(0,"div",79),a.Ob(1,"a",80),a.Jb(2,"i",81),a.wc(3),a.vc(4,v,2,0,"span",15),a.vc(5,k,2,2,"span",15),a.Nb(),a.Ob(6,"div",82),a.vc(7,S,3,5,"div",83),a.Nb(),a.Nb()),2&t){const t=e.$implicit,n=e.index,i=a.Xb(2).$implicit;a.xb(1),a.ec("href","#",t.id,"",a.sc),a.xb(2),a.yc(" ",t.DESCRIPTIONS.TEXT.Text," "),a.xb(1),a.cc("ngIf",null==i.finishName[n]),a.xb(1),a.cc("ngIf",null!=i.finishName[n]),a.xb(1),a.dc("id",t.id),a.xb(1),a.cc("ngForOf",i.finishOptions[n])}}function D(t,e){if(1&t&&(a.Ob(0,"div",77),a.vc(1,_,8,6,"div",78),a.Nb()),2&t){const t=a.Xb().$implicit;a.xb(1),a.cc("ngForOf",t.productGroup)}}const j=function(t){return{"bg-red":t}};function T(t,e){if(1&t){const t=a.Pb();a.Ob(0,"tr",59),a.Ob(1,"td"),a.wc(2),a.Nb(),a.Ob(3,"td"),a.Ob(4,"input",60),a.Vb("change",(function(){a.rc(t);const n=e.index;return a.Xb().changeTagName(n)})),a.Nb(),a.Nb(),a.vc(5,x,3,0,"td",15),a.vc(6,P,2,2,"td",15),a.Ob(7,"td",61),a.Jb(8,"img",62),a.Nb(),a.Ob(9,"td"),a.wc(10),a.Yb(11,"uppercase"),a.Nb(),a.Ob(12,"td"),a.wc(13),a.Yb(14,"uppercase"),a.Nb(),a.Ob(15,"td"),a.vc(16,y,3,2,"p",63),a.vc(17,I,2,1,"p",63),a.vc(18,D,2,1,"div",64),a.Nb(),a.Ob(19,"td",65),a.Ob(20,"div",66),a.Ob(21,"div"),a.Ob(22,"p",67),a.wc(23),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(24,"td",19),a.Ob(25,"div",68),a.Ob(26,"button",69),a.Vb("click",(function(){a.rc(t);const n=e.index;return a.Xb().stepDown(n)})),a.Nb(),a.Ob(27,"input",70),a.Vb("change",(function(){a.rc(t);const n=e.index;return a.Xb().changePrice(n)})),a.Nb(),a.Ob(28,"button",71),a.Vb("click",(function(){a.rc(t);const n=e.index;return a.Xb().stepUp(n)})),a.Nb(),a.Nb(),a.Nb(),a.Ob(29,"td"),a.wc(30),a.Yb(31,"currency"),a.Nb(),a.Ob(32,"td"),a.wc(33),a.Yb(34,"currency"),a.Nb(),a.Nb()}if(2&t){const t=e.$implicit,n=e.index,i=a.Xb();a.cc("ngClass",a.kc(27,j,""==t.backgroundColor)),a.xb(2),a.xc(n+1),a.xb(2),a.cc("formControl",i.tagNameArray.controls[n])("readonly",i.isDealer),a.xb(1),a.cc("ngIf",!i.isDealer),a.xb(1),a.cc("ngIf",!i.isDealer),a.xb(2),a.hc("src","",i.baseUrl,"assets/",t.companyCode,"/",t.catalogName,"/prod_icons/",t.productImage,"",a.sc),a.xb(2),a.xc(a.Zb(11,19,t.companyCode)),a.xb(3),a.xc(a.Zb(14,21,t.catalogName)),a.xb(3),a.cc("ngIf",!t.isSpecialProduct),a.xb(1),a.cc("ngIf",t.isSpecialProduct),a.xb(1),a.cc("ngIf",t.edit),a.xb(5),a.xc(t.displayName),a.xb(4),a.cc("formControl",i.qtyArray.controls[n]),a.xb(3),a.xc(a.Zb(31,23,t.unitPrice)),a.xb(3),a.xc(a.Zb(34,25,t.quantity*t.unitPrice))}}function B(t,e){if(1&t&&(a.Ob(0,"tr"),a.Jb(1,"td",86),a.Ob(2,"td",87),a.wc(3,"Grand Total"),a.Nb(),a.Ob(4,"td",87),a.wc(5),a.Yb(6,"currency"),a.Nb(),a.Nb()),2&t){const t=a.Xb();a.xb(5),a.yc(" ",a.Zb(6,1,t.grandTotal)," ")}}function X(t,e){if(1&t){const t=a.Pb();a.Ob(0,"button",92),a.Vb("click",(function(){return a.rc(t),a.Xb(2).sendCartItemsToBusinessCentral()})),a.wc(1," Push In Business Central "),a.Nb()}if(2&t){const t=a.Xb(2);a.cc("disabled",""!=t.manufacturingCompany)}}function A(t,e){1&t&&(a.Ob(0,"button",93),a.wc(1," Export To SIF File "),a.Nb())}function E(t,e){if(1&t){const t=a.Pb();a.Ob(0,"button",94),a.Vb("click",(function(){return a.rc(t),a.Xb(2).removeItem()})),a.wc(1," Delete "),a.Nb()}if(2&t){const t=a.Xb(2);a.cc("disabled",t.deleteItem)}}function F(t,e){if(1&t){const t=a.Pb();a.Ob(0,"button",95),a.Vb("click",(function(){return a.rc(t),a.Xb(2).finishEdit()})),a.wc(1," Finish Editing "),a.Nb()}if(2&t){const t=a.Xb(2);a.cc("disabled",t.finishEditing)}}function J(t,e){if(1&t&&(a.Ob(0,"div",13),a.vc(1,X,2,1,"button",88),a.vc(2,A,2,0,"button",89),a.vc(3,E,2,1,"button",90),a.vc(4,F,2,1,"button",91),a.Nb()),2&t){const t=a.Xb();a.xb(1),a.cc("ngIf",t.isDealer&&t.isBusinessCentral),a.xb(1),a.cc("ngIf",t.isDealer),a.xb(1),a.cc("ngIf",!t.isDealer),a.xb(1),a.cc("ngIf",!t.isDealer)}}function U(t,e){1&t&&a.Jb(0,"div",96)}function V(t,e){if(1&t&&(a.Ob(0,"div",108),a.wc(1),a.Nb()),2&t){const t=a.Xb(2);a.xb(1),a.yc(" ",t.specialOrderValidationMessage," ")}}function L(t,e){if(1&t){const t=a.Pb();a.Ob(0,"div",97),a.Ob(1,"div",98),a.Ob(2,"h1",99),a.wc(3,"Add product information"),a.Nb(),a.Ob(4,"div",100),a.Ob(5,"span",101),a.wc(6,"Product Code:"),a.Nb(),a.Ob(7,"input",102),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().specialOrderProductCode=e})),a.Nb(),a.Nb(),a.Ob(8,"div",100),a.Ob(9,"span",101),a.wc(10,"Product Price:"),a.Nb(),a.Ob(11,"input",102),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().specialOrderUnitPrice=e})),a.Nb(),a.Nb(),a.Ob(12,"div",100),a.Ob(13,"span",101),a.wc(14,"Order Code:"),a.Nb(),a.Ob(15,"input",102),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().specialOrderCode=e})),a.Nb(),a.Nb(),a.Ob(16,"div",100),a.Ob(17,"span",101),a.wc(18,"Product description:"),a.Nb(),a.Ob(19,"textarea",103),a.Vb("ngModelChange",(function(e){return a.rc(t),a.Xb().specialOrderDescription=e})),a.Nb(),a.Nb(),a.vc(20,V,2,1,"div",104),a.Ob(21,"div",105),a.Ob(22,"button",106),a.Vb("click",(function(){return a.rc(t),a.Xb().saveProductInformationDialog()})),a.wc(23,"Save"),a.Nb(),a.Ob(24,"button",107),a.Vb("click",(function(){return a.rc(t),a.Xb().cancelProductInformationDialog()})),a.wc(25,"Cancel"),a.Nb(),a.Nb(),a.Nb(),a.Nb()}if(2&t){const t=a.Xb();a.xb(7),a.cc("ngModel",t.specialOrderProductCode),a.xb(4),a.cc("ngModel",t.specialOrderUnitPrice),a.xb(4),a.cc("ngModel",t.specialOrderCode),a.xb(4),a.cc("ngModel",t.specialOrderDescription),a.xb(1),a.cc("ngIf",""!=t.specialOrderValidationMessage)}}const q=[{path:"",component:(()=>{class t{constructor(t,e,n,i,r,o){this.router=t,this.fb=e,this.cartService=n,this.projectService=i,this.catalogService=r,this.businessCentralService=o,this.baseUrl=c.a.baseUrl,this.cart=[],this.selectedIndex=[],this.tagNameArray=this.fb.array([]),this.qtyArray=this.fb.array([]),this.editCtrl=this.fb.array([]),this.dealerName="Furniture Dealer",this.projectName="No Project Selected",this.projectID="",this.finishEditing=!0,this.deleteItem=!0,this.userID=0,this.isDealer=!0,this.isBusinessCentral=!0,this.newProjectName="",this.isNeedToShowNewProjectName=!1,this.cloneProjectButtonText="Clone this project",this.needToEnableSpecialOrderLink=!1,this.showProductInformationDialog=!1,this.specialOrderValidationMessage="",this.specialOrderProductCode="",this.specialOrderUnitPrice="",this.specialOrderDescription="",this.specialOrderCode="",this.manufacturingCompany=""}logout(){"user"in localStorage&&(localStorage.removeItem("user"),this.router.navigateByUrl("/login"))}checkBox(t){if(null==this.selectedIndex.find(e=>e==t))this.selectedIndex.push(t),this.deleteItem=!1;else{let e=this.selectedIndex.findIndex(e=>e==t);this.selectedIndex.splice(e,1),0==this.selectedIndex.length&&(this.deleteItem=!0)}this.needToEnableSpecialOrderLink=this.selectedIndex&&1===this.selectedIndex.length}removeItem(){let t=this.cart.filter(t=>this.selectedIndex.map(t=>t.id).indexOf(t.id)>-1);t&&t.length>0&&this.cartService.deleteCartItems(t.map(t=>t.id)).subscribe(t=>{console.log("delete status: "+t),this.cart=this.cart.filter(t=>this.selectedIndex.map(t=>t.id).indexOf(t.id)<0),this.loadCartDetailsWithouAPICall()},t=>{console.log("Something went wrong while delete the cart items. Error details: "+JSON.stringify(t))})}editFinish(t,e){if(this.cart[t].isSpecialProduct)return alert("This is a special order product. You cannot edit the finish of such product. Please remove this item from cart and add again to proceed with updating the finish."),void e.preventDefault();let n=this.cart.findIndex(t=>1==t.edit);-1!=n&&(this.cart[n].edit=!1),this.cart[t].edit=!0,this.finishEditing=!1}changeOrderCode(t,e,n,i,r){this.cart[t].finishCode[e]=n,this.cart[t].fullSpecificationCode=this.cart[t].productID+n,this.cart[t].finishName[e]=r,null!=i&&null==this.cart[t].finishPrice[e]&&(this.cart[t].finishPrice[e]=parseFloat(i),this.cart[t].unitPrice=+this.cart[t].unitPrice+ +this.cart[t].finishPrice[e],this.cart[t].unitPrice=parseFloat(this.cart[t].unitPrice).toFixed(2)),null==this.cart[t].finishCode.find(t=>" ??"==t)&&(this.cart[t].backgroundColor="true"),this.updateAndReloadCartDetails(t)}changeTagName(t){this.cart[t].tagName=this.tagNameArray.controls[t].value,this.updateAndReloadCartDetails(t)}stepDown(t){1!=this.qtyArray.controls[t].value&&(this.qtyArray.controls[t].setValue(this.qtyArray.controls[t].value-1),this.changePrice(t))}stepUp(t){this.qtyArray.controls[t].setValue(this.qtyArray.controls[t].value+1),this.changePrice(t)}changePrice(t){this.cart[t].quantity=this.qtyArray.controls[t].value,this.updateAndReloadCartDetails(t)}updateAndReloadCartDetails(t){let e={quantity:this.cart[t].quantity,tagName:this.cart[t].tagName,finishCode:JSON.stringify(this.cart[t].finishCode),finishName:JSON.stringify(this.cart[t].finishName),finishPrice:JSON.stringify(this.cart[t].finishPrice),productID:this.cart[t].productID,fullSpecificationCode:this.cart[t].fullSpecificationCode,backgroundColor:this.cart[t].backgroundColor,unitPrice:this.cart[t].unitPrice,displayName:this.cart[t].displayName,isSpecialProduct:this.cart[t].isSpecialProduct};this.cartService.updateCartItem(e,parseInt(this.cart[t].id)).subscribe(t=>{console.log("cart item update status: "+t)},t=>{console.log("Something went wrong while updating the cart. Error details: "+JSON.stringify(t))}),this.loadCartDetailsWithouAPICall()}finishEdit(){let t=0;this.editCtrl.controls.forEach(e=>{e.setValue(!1),this.cart[t]&&(this.cart[t].edit=!1,t++)})}ngOnInit(){this.setDealerAndProjectName(),this.loadCartDetails()}setDealerAndProjectName(){if("user"in localStorage){this.loggedInUser=JSON.parse(localStorage.getItem("user"));let t=this.loggedInUser.DealerName;t&&""!=t&&(this.dealerName=t);let e=this.loggedInUser.projectID;e&&e>0&&(this.projectID=e.toString());let n=this.loggedInUser.projectName;n&&""!=n&&(this.projectName=n)}}loadCartDetails(){this.loggedInUser.dealers_id>0?(this.userID=this.loggedInUser.id,this.isDealer=!1,this.loggedInUser.BCProjectNumber||(this.isBusinessCentral=!1)):this.projects||(this.loadManufacturingCompanies(),this.loadProjects()),this.loadCartDetailsWithApiCall()}loadCartDetailsWithApiCall(){this.cartService.getCartItemsByUserIDProjectIDAndManufacturingCompany(this.userID,this.loggedInUser.projectID,this.manufacturingCompany).subscribe(t=>{this.cart=t.data;let e=0;this.cart.length>0&&this.cart.forEach(t=>{t.finishOptions=JSON.parse(t.finishOptions),t.productGroup=JSON.parse(t.productGroup),t.finishCode=JSON.parse(t.finishCode),t.finishName=JSON.parse(t.finishName),t.finishPrice=JSON.parse(t.finishPrice),t.edit=!1,e+=+t.quantity*t.unitPrice,this.tagNameArray.push(new o.d(t.tagName)),this.qtyArray.push(new o.d(t.quantity)),this.editCtrl.push(new o.d(!1))}),this.grandTotal=parseFloat(e.toString()).toFixed(2)},t=>{console.log(`Something went wrong while getting cart items for user ${this.userID}. Error details : ${JSON.stringify(t)}`)})}loadProjects(){this.projectService.getProjectsByDealerID(this.loggedInUser.id).subscribe(t=>{this.projects=t},t=>{console.log("Failed to get projects by dealer id. Error details: "+JSON.stringify(t))})}loadCartDetailsWithouAPICall(){let t=0;this.cart.length>0&&this.cart.forEach(e=>{e.edit=!1,t+=+e.quantity*e.unitPrice,this.tagNameArray.push(new o.d(e.tagName)),this.qtyArray.push(new o.d(e.quantity)),this.editCtrl.push(new o.d(!1))}),this.grandTotal=parseFloat(t.toString()).toFixed(2)}sendCartItemsToBusinessCentral(){"user"in localStorage?this.cart&&this.cart.length>0?""!=JSON.parse(localStorage.getItem("user")).BCProjectNumber?this.checkIfItemExistsInBusinessCentral():alert("Project not created in Business Central ! Please try again after creating project in Business Central."):alert("No items in cart to push"):alert("Oops ! It seems that you have not logged in. Please login with same user as in business central to push items in business central.")}checkIfItemExistsInBusinessCentral(t=1){if(this.cart&&t<=this.cart.length){let e=this.cart[t-1];if(e.businessCentralItemNumber&&""!=e.businessCentralItemNumber)this.checkIfItemExistsInBusinessCentral(++t);else{let n=this.cart.filter(t=>t.fullSpecificationCode==e.fullSpecificationCode)[0];n&&n.businessCentralItemNumber&&""!=n.businessCentralItemNumber?(this.cart[t-1].businessCentralItemNumber=n.businessCentralItemNumber,this.checkIfItemExistsInBusinessCentral(++t)):this.checkInBusinessCentral(t)}}else this.createBisemaSalesLine(JSON.parse(localStorage.getItem("user")).BCProjectNumber)}checkInBusinessCentral(t){this.businessCentralService.getDetailsFromDynamics("BiSemAItem",`?$filter=fullSpecificationCode eq '${this.cart[t-1].fullSpecificationCode}'`).subscribe(e=>{e&&e.value&&e.value.length>0?(this.cart[t-1].businessCentralItemNumber=e.value[0].number,this.checkIfItemExistsInBusinessCentral(++t)):this.createBiSemAItem(t)},e=>{console.log("error occured while calling dynamics BiSemA Item exists check call : "+JSON.stringify(e)),this.checkIfItemExistsInBusinessCentral(++t)})}createBiSemAItem(t){let e=t-1,n={displayName:this.cart[e].displayName,baseUnitofMeasure:this.cart[e].baseUnitofMeasure,unitPrice:this.cart[e].unitPrice,userName:this.cart[e].users_id.toString(),genProdPostingGroup:this.cart[e].genProdPostingGroup,inventoryPostingGroup:this.cart[e].inventoryPostingGroup,manufacturingCompany:this.cart[e].manufacturingCompany,manufacturingCompanyThreeLettersCode:this.cart[e].manufacturingCompanyThreeLettersCode,catalogName:this.cart[e].catalogName,catalogThreeLettersCode:this.cart[e].catalogThreeLettersCode,catalogReleaseDate:this.cart[e].catalogReleaseDate,fullSpecificationCode:this.cart[e].fullSpecificationCode,tagName:this.cart[e].tagName};this.getBase64FromImageURL(`${this.baseUrl}assets/${this.cart[e].companyCode}/${this.cart[e].catalogName}/prod_icons/${this.cart[e].productImage}`,i=>{""!=i&&(n.picture=i.split("base64,")[1]),this.businessCentralService.postDetailsInDynamics(n,"BiSemAItem").subscribe(n=>{n?this.cart[e].businessCentralItemNumber=n.number:console.log("BiSemA Item not created"),this.checkIfItemExistsInBusinessCentral(++t)},e=>{console.log("error occured while calling dynamics BiSemA Item call : "+JSON.stringify(e)),this.checkIfItemExistsInBusinessCentral(++t)})})}createBisemaSalesLine(t,e=1){if(this.cart&&e<=this.cart.length){let n=e-1,i={documentType:"Order",documentNumber:t,lineNumber:1e4*e,type:"Item",number:this.cart[n].businessCentralItemNumber,description:this.cart[n].displayName,unitofMeasure:this.cart[n].baseUnitofMeasure,quantity:parseInt(this.cart[n].quantity),unitCostLcy:this.cart[n].unitPrice,directUnitCost:this.cart[n].unitPrice,lineAmount:this.cart[n].unitPrice*parseInt(this.cart[n].quantity),userName:this.cart[n].users_id.toString(),manufacturingCompany:this.cart[n].manufacturingCompany,manufacturingCompanyThreeLettersCode:this.cart[n].manufacturingCompanyThreeLettersCode,catalogName:this.cart[n].catalogName,catalogThreeLettersCode:this.cart[n].catalogThreeLettersCode,catalogReleaseDate:this.cart[n].catalogReleaseDate,fullSpecificationCode:this.cart[n].fullSpecificationCode};this.businessCentralService.postDetailsInDynamics(i,"BiSemASalesLine").subscribe(i=>{i?e===this.cart.length?this.projectService.updateProject({isClosed:1,orderConfirmationDate:new Date},JSON.parse(localStorage.getItem("user")).projectID).subscribe(t=>{alert("Details pushed to Dynamics Business Central !!"),this.loadCartDetailsWithApiCall(),console.log("project update status: "+t)},t=>{console.log("Something went wrong while updating project details. Error details: "+JSON.stringify(t))}):this.createBisemaSalesLine(t,++e):console.log("error occured while calling dynamics BiSemA Sales Line call for "+this.cart[n].businessCentralItemNumber)},t=>{console.log("error occured while calling dynamics BiSemA Sales Line call : "+JSON.stringify(t))})}}getBase64FromImageURL(t,e){const n=new XMLHttpRequest;n.onload=()=>{if(200===n.status){const t=new FileReader;t.onloadend=()=>{e(t.result)},t.readAsDataURL(n.response)}else console.log("image not found at "+t),e("")},n.open("GET",t),n.responseType="blob",n.send()}projectSelectionChange(){const t=parseInt(this.projectID,10);this.loggedInUser.projectID!=t&&(this.loggedInUser.projectID=t,this.loggedInUser.projectName=this.projects.filter(e=>e.id===t)[0].projectName,localStorage.setItem("user",JSON.stringify(this.loggedInUser)),this.manufacturingCompany="",this.setDealerAndProjectName(),this.loadCartDetailsWithApiCall())}cloneProject(){this.isNeedToShowNewProjectName?""!=this.newProjectName&&this.projectService.checkIfExistsWithName(this.loggedInUser.id,this.newProjectName).subscribe(t=>{0==t.data?this.createBiSemASalesHeader():alert(t.message)},t=>{console.log("Error occured while checking if project exists same name or not. Error details: "+JSON.stringify(t))}):(this.newProjectName=this.projectName+" - cloned",this.isNeedToShowNewProjectName=!0,this.cloneProjectButtonText="Create project")}createBiSemASalesHeader(){let t={documentType:"Order",selltocustomerNumber:"10000",orderDate:`${(new Date).getFullYear()}-${("0"+((new Date).getMonth()+1)).slice(-2)}-${("0"+(new Date).getDate()).slice(-2)}`};this.businessCentralService.postDetailsInDynamics(t,"BiSemASalesHeader",this.loggedInUser).subscribe(t=>{t?this.projectService.cloneProject({projectName:this.newProjectName,cloneFromProjectNumber:this.loggedInUser.BCProjectNumber,projectNumber:t.number}).subscribe(t=>{t.data>0?(this.loadProjects(),this.isNeedToShowNewProjectName=!1,this.cloneProjectButtonText="Clone this project",alert("Project has been cloned successfully. It will get populated in selection list.")):alert(t.message)},t=>{console.log("Error occured while creating project. Error details: "+JSON.stringify(t))}):console.log("BiSemA Sales Header not created")},t=>{console.log("error occured while calling dynamics BiSemA Sales Header call : "+JSON.stringify(t))})}cancelProjectCreate(){this.isNeedToShowNewProjectName=!1,this.cloneProjectButtonText="Clone this project"}showSpecialOrderForm(){let t=this.cart.filter(t=>t.id===this.selectedIndex[0].id);t&&t.length>0?(this.specialOrderProductCode=t[0].productID,this.specialOrderUnitPrice=t[0].unitPrice,this.specialOrderCode=t[0].fullSpecificationCode.replace(t[0].productID,""),this.specialOrderDescription=t[0].displayName,this.specialOrderValidationMessage=""):(this.specialOrderProductCode="",this.specialOrderUnitPrice="",this.specialOrderDescription="",this.specialOrderValidationMessage=""),this.showProductInformationDialog=!0}cancelProductInformationDialog(){this.showProductInformationDialog=!1,this.needToEnableSpecialOrderLink=!1,this.selectedIndex=[],this.checkboxes.forEach(t=>{t.nativeElement.checked=!1}),this.deleteItem=!0}saveProductInformationDialog(){if(this.selectedIndex&&this.selectedIndex.length>0)if(""!=this.specialOrderProductCode)if(""!=this.specialOrderUnitPrice)if(""!=this.specialOrderDescription){let t=this.cart.findIndex(t=>t.id===this.selectedIndex[0].id);t>-1?(this.cart[t].isSpecialProduct=!0,this.cart[t].productID=this.specialOrderProductCode,this.cart[t].fullSpecificationCode=this.specialOrderProductCode+this.specialOrderCode,this.cart[t].unitPrice=parseFloat(this.specialOrderUnitPrice).toFixed(2),this.cart[t].displayName=this.specialOrderDescription,this.cart[t].backgroundColor=this.cart[t].fullSpecificationCode.indexOf("?")<0?"true":"",this.updateAndReloadCartDetails(t),this.needToEnableSpecialOrderLink=!1,this.showProductInformationDialog=!1,this.selectedIndex=[],this.checkboxes.forEach(t=>{t.nativeElement.checked=!1}),this.deleteItem=!0):alert("It seems that the item you selected for special order not found. Please try again.")}else this.specialOrderValidationMessage="Please enter product description";else this.specialOrderValidationMessage="Please enter product price";else this.specialOrderValidationMessage="Please enter product code"}loadManufacturingCompanies(){this.catalogService.getManufacturingCompanies().subscribe(t=>{t&&(this.manufacturingCompanies=t)},t=>{console.log("Error getting manufacturing comapanies: "+JSON.stringify(t))})}manufacturingCompanySelectionChange(){this.loadCartDetailsWithApiCall()}}return t.\u0275fac=function(e){return new(e||t)(a.Ib(r.b),a.Ib(o.c),a.Ib(s.a),a.Ib(l.a),a.Ib(b.a),a.Ib(d.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-cart"]],viewQuery:function(t,e){var n;1&t&&a.Bc(h,!0),2&t&&a.oc(n=a.Wb())&&(e.checkboxes=n)},decls:82,vars:9,consts:[[1,"navbar","navbar-dark","bg-purple","navbar-expand-sm"],["href","http://www.bisema.com","target","_blank",1,"navbar-brand"],["src","../../assets/img/bisema_logo.jpg","alt","logo","height","40"],[1,"dropdown","ml-auto","dropleft"],["href","#","id","navbarDropdownMenuLink","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","text-white"],[1,"fa","fa-user-circle"],["aria-labelledby","navbarDropdownMenuLink",1,"dropdown-menu"],["href","#",1,"dropdown-item"],["href","javascript:;",1,"dropdown-item",3,"click"],[1,"row"],[1,"col-12","content","text-center"],[1,"title"],[1,"col-12","content"],[1,"col-12"],[1,"mt-2","mb-2"],[4,"ngIf"],[1,"bar","col-12","text-center"],[1,"table","table-bordered"],[1,"thead-light"],[1,"text-center"],["scope","col",4,"ngIf"],["scope","col",1,"bordNone"],["scope","col"],["class","text-center data",3,"ngClass",4,"ngFor","ngForOf"],["class","col-12",4,"ngIf"],[1,"row","bg-purple","pt-3"],[1,"col-12","blackfter"],[1,"d-flex","justify-content-center"],[1,"list-inline","list-unstyled","m-0"],[1,"list-inline-item"],["href","https://www.facebook.com","target","https://www.facebook.com/bisemacorp"],[1,"fa","fa-facebook","fa-2x","mr-2"],["href","https://www.linkedin.com ","target","https://www.linkedin.com/bisema-corporation "],[1,"fa","fa-linkedin","fa-2x","mr-2"],["href","https://www.twitter.com ","target","https://www.twitter.com/bisemacorp "],[1,"fa","fa-twitter-square","fa-2x"],[1,"text-center","mt-3"],[1,"text-white"],["class","dialog_overlay",4,"ngIf"],["class","card dialog",4,"ngIf"],[1,"fa","fa-cogs"],[1,"fa","fa-users"],[1,"pull-right"],[2,"cursor","pointer","color","#000",3,"ngClass","click"],[1,"pt-2",2,"float","left"],[1,"ml-2","mb-2",2,"width","13%","float","left"],["id","manufacturingCompanies",1,"form-control",3,"ngModel","ngModelChange","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"pt-2","ml-2",2,"float","left"],[1,"ml-2","mb-2",2,"width","10%","float","left"],["id","projects",1,"form-control",3,"ngModel","ngModelChange","change"],["class","ml-2 mb-2","style","float: left; width: 15%",4,"ngIf"],[1,"ml-2","mb-2",2,"float","left"],[1,"fa","fa-cogs","btn","btn-dark","btn-sm","btn2","p-2",3,"click"],["class","ml-2 mb-2","style","float: left",4,"ngIf"],[3,"value"],[1,"ml-2","mb-2",2,"float","left","width","15%"],["type","text","name","newProjectName","id","newProjectName","placeholder","Enter new project name",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center","data",3,"ngClass"],["type","text","placeholder","Type tagname ...",1,"tag-name",3,"formControl","readonly","change"],[1,"img-hover-zoom"],["width","100","alt","Buy",3,"src"],["class","code text-left",4,"ngIf"],["class","text-left","id","c-collapse",4,"ngIf"],[1,"bordNone"],[1,"cart-info"],[1,"text-left"],[1,"number-input"],["type","button",3,"click"],["min","1","name","quantity","value","1","type","number",1,"quantity","form-control","mkbld","p-0","mx-auto",3,"formControl","change"],["type","button",1,"plus",3,"click"],["type","checkbox",3,"click"],["cartCheckboxes",""],["type","radio","name","finish","id","",3,"formControl","value","click"],[1,"code","text-left"],[4,"ngFor","ngForOf"],["id","c-collapse",1,"text-left"],["class","mb-2",4,"ngFor","ngForOf"],[1,"mb-2"],["data-toggle","collapse",1,"text-dark",3,"href"],[1,"fa","fa-caret-right","text-dark"],["data-parent","#c-collapse",1,"collapse",3,"id"],["class","",4,"ngFor","ngForOf"],[1,""],["href","javascript:;",1,"side-child-item","p-1",3,"ngClass","click"],["colspan","10"],[1,"font-weight-bold","text-center"],["class","float-right btn btn2 mr-5 fa fa-address-book",3,"disabled","click",4,"ngIf"],["class","float-right btn btn2 mr-5 fa fa-address-book",4,"ngIf"],["class","float-right btn btn3 ml-2 mr-5 fa fa-trash",3,"disabled","click",4,"ngIf"],["class","float-right btn btn2 mr-5 fa fa-edit",3,"disabled","click",4,"ngIf"],[1,"float-right","btn","btn2","mr-5","fa","fa-address-book",3,"disabled","click"],[1,"float-right","btn","btn2","mr-5","fa","fa-address-book"],[1,"float-right","btn","btn3","ml-2","mr-5","fa","fa-trash",3,"disabled","click"],[1,"float-right","btn","btn2","mr-5","fa","fa-edit",3,"disabled","click"],[1,"dialog_overlay"],[1,"card","dialog"],[1,"card-body","bg-purple"],[1,"text-center","text-white","mb-3"],[1,"input-group","mb-3"],[1,"text-white","mt-2","mr-3",2,"width","20%"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","ngModelChange"],["class","input-group mb-3 text-white text-center","style","display: block",4,"ngIf"],[1,"mb-3","text-center"],[1,"btn","btn-success","btn2","mr-3",3,"click"],[1,"btn","btn-success","btn2",3,"click"],[1,"input-group","mb-3","text-white","text-center",2,"display","block"]],template:function(t,e){1&t&&(a.Ob(0,"nav",0),a.Ob(1,"a",1),a.Jb(2,"img",2),a.Nb(),a.Ob(3,"div",3),a.Ob(4,"a",4),a.Jb(5,"i",5),a.Nb(),a.Ob(6,"div",6),a.Ob(7,"a",7),a.wc(8,"Dashboard"),a.Nb(),a.Ob(9,"a",7),a.wc(10,"Edit Profile"),a.Nb(),a.Ob(11,"a",8),a.Vb("click",(function(){return e.logout()})),a.wc(12,"Log Out"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(13,"div",9),a.Ob(14,"div",10),a.Ob(15,"h4",11),a.wc(16,"Shopping Cart"),a.Nb(),a.Nb(),a.Ob(17,"div",12),a.Ob(18,"div",9),a.Ob(19,"div",13),a.Ob(20,"h6",14),a.vc(21,u,8,3,"div",15),a.vc(22,O,21,8,"div",15),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(23,"div",16),a.Ob(24,"div",9),a.Ob(25,"div",13),a.Ob(26,"h6"),a.Ob(27,"strong"),a.wc(28," List of Products in Cart"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Jb(29,"hr"),a.Nb(),a.Ob(30,"table",17),a.Ob(31,"thead",18),a.Ob(32,"tr",19),a.Ob(33,"th"),a.wc(34,"Item Number"),a.Nb(),a.Ob(35,"th"),a.wc(36,"Tagname"),a.Nb(),a.vc(37,C,2,0,"th",20),a.vc(38,N,2,0,"th",15),a.Ob(39,"th"),a.wc(40,"Product Image"),a.Nb(),a.Ob(41,"th"),a.wc(42,"Mfg"),a.Nb(),a.Ob(43,"th"),a.wc(44,"Cat"),a.Nb(),a.Ob(45,"th"),a.wc(46,"Order Code"),a.Nb(),a.Ob(47,"th",21),a.wc(48,"Product Descriptions"),a.Nb(),a.Ob(49,"th",22),a.wc(50,"Quantity"),a.Nb(),a.Ob(51,"th",22),a.wc(52,"Unit Price"),a.Nb(),a.Ob(53,"th",22),a.wc(54,"Total Price"),a.Nb(),a.Nb(),a.Nb(),a.Ob(55,"tbody"),a.vc(56,T,35,29,"tr",23),a.vc(57,B,7,3,"tr",15),a.Nb(),a.Nb(),a.vc(58,J,5,4,"div",24),a.Ob(59,"div",13),a.Jb(60,"hr"),a.Nb(),a.Nb(),a.Ob(61,"div",25),a.Ob(62,"div",26),a.Ob(63,"div",27),a.Ob(64,"ul",28),a.Ob(65,"li",29),a.Ob(66,"a",30),a.Jb(67,"i",31),a.Nb(),a.Nb(),a.Ob(68,"li",29),a.Ob(69,"a",32),a.Jb(70,"i",33),a.Nb(),a.Nb(),a.Ob(71,"li",29),a.Ob(72,"a",34),a.Jb(73,"i",35),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(74,"div",36),a.Ob(75,"p",37),a.wc(76," Copyright "),a.Ob(77,"span"),a.wc(78,"\xa9"),a.Nb(),a.wc(79," 2021 BiSemA Corporation. "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.vc(80,U,1,0,"div",38),a.vc(81,L,26,5,"div",39)),2&t&&(a.xb(21),a.cc("ngIf",!e.isDealer),a.xb(1),a.cc("ngIf",e.isDealer),a.xb(15),a.cc("ngIf",!e.isDealer),a.xb(1),a.cc("ngIf",!e.isDealer),a.xb(18),a.cc("ngForOf",e.cart),a.xb(1),a.cc("ngIf",e.cart.length>0),a.xb(1),a.cc("ngIf",e.cart.length>0),a.xb(22),a.cc("ngIf",e.showProductInformationDialog),a.xb(1),a.cc("ngIf",e.showProductInformationDialog))},directives:[i.l,i.k,i.j,o.p,o.i,o.k,o.l,o.r,o.b,o.e,o.m,o.n],pipes:[i.p,i.c],styles:['.navbar[_ngcontent-%COMP%]{margin:0;background-color:#53386f}.nav-2[_ngcontent-%COMP%]{font-weight:700;height:50px}.nav-2[_ngcontent-%COMP%]   .fa-bookmark[_ngcontent-%COMP%]{color:grey}.nav-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{float:right;margin-right:10px;font-weight:500}.nav-2[_ngcontent-%COMP%]   .btn-1[_ngcontent-%COMP%]{background-color:#53386f}.profile[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{color:wheat;font-size:50px}.fa[_ngcontent-%COMP%]{color:#fff}.fa-cogs[_ngcontent-%COMP%], .fa-users[_ngcontent-%COMP%]{color:#000}.title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:10px;margin-top:10px}.content[_ngcontent-%COMP%]{background-color:#f3f3f3;border-bottom:1px solid #bbb}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none}.row[_ngcontent-%COMP%]{margin:0}.bar[_ngcontent-%COMP%]{margin-top:40px}.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#53386f;color:#fff;border:none;margin-left:10px}.cart-info[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.cart-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:80px;margin-right:10px}.bordNone[_ngcontent-%COMP%]{border-right:none}.bordNone1[_ngcontent-%COMP%]{border-left:none}table[_ngcontent-%COMP%]{overflow-x:hidden}.code[_ngcontent-%COMP%]{color:#000;font-size:12px;font-weight:500}.data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:50px}.buttons1[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]{background-color:#53386f;color:#fff;margin-left:5px;margin-bottom:25px}.table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:600}.mkbld[_ngcontent-%COMP%]{text-align:center;font-weight:700}.tag-name[_ngcontent-%COMP%]{text-align:left;width:250px!important;height:30px;border:none;border-bottom:2px solid #a49aaf;border-radius:3px;background-color:#f8f2f2}.tag-name[_ngcontent-%COMP%]:focus{outline:none}.tag-name[_ngcontent-%COMP%]:focus::placeholder{font-size:10px}.btn2[_ngcontent-%COMP%]{color:#f5f5f5;background-color:#53386f}.btn2[_ngcontent-%COMP%]:hover{color:#000;background-color:#f5f5f5}.btn3[_ngcontent-%COMP%]{color:#f5f5f5;background-color:#d9534f}.btn3[_ngcontent-%COMP%]:hover{color:#000;background-color:#f5f5f5}@supports (-webkit-appearance:none) or (-moz-appearance:none){input[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]{--active:#53386f;--active-inner:#fff;--focus:2px rgba(39,94,254,0.3);--border:#bbc1e1;--border-hover:#275efe;--background:#fff;--disabled:#f6f8ff;--disabled-inner:#e1e6f9;-webkit-appearance:none;-moz-appearance:none;height:18px;outline:none;display:inline-block;vertical-align:top;position:relative;margin:0;cursor:pointer;border:.9px solid var(--bc,var(--border));background:var(--b,var(--background));transition:background .3s,border-color .3s,box-shadow .2s}input[type=checkbox][_ngcontent-%COMP%]:after, input[type=radio][_ngcontent-%COMP%]:after{content:"";display:block;left:0;top:0;position:absolute;transition:transform var(--d-t,.3s) var(--d-t-e,ease),opacity var(--d-o,.2s)}input[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked{--b:var(--active);--bc:var(--active);--d-o:.3s;--d-t:.6s;--d-t-e:cubic-bezier(.2,.85,.32,1.2)}input[type=checkbox][_ngcontent-%COMP%]:disabled, input[type=radio][_ngcontent-%COMP%]:disabled{--b:var(--disabled);cursor:not-allowed;opacity:.9}input[type=checkbox][_ngcontent-%COMP%]:disabled:checked, input[type=radio][_ngcontent-%COMP%]:disabled:checked{--b:var(--disabled-inner);--bc:var(--border)}input[type=checkbox][_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{cursor:not-allowed}input[type=checkbox][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled), input[type=radio][_ngcontent-%COMP%]:hover:not(:checked):not(:disabled){--bc:var(--border-hover)}input[type=checkbox][_ngcontent-%COMP%]:focus, input[type=radio][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 var(--focus)}input[type=checkbox][_ngcontent-%COMP%]:not(.switch), input[type=radio][_ngcontent-%COMP%]:not(.switch){width:18px}input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after, input[type=radio][_ngcontent-%COMP%]:not(.switch):after{opacity:var(--o,0)}input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked, input[type=radio][_ngcontent-%COMP%]:not(.switch):checked{--o:1}input[type=checkbox][_ngcontent-%COMP%] + label[_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{font-size:14px;line-height:21px;display:inline-block;vertical-align:top;cursor:pointer;margin-left:4px}input[type=checkbox][_ngcontent-%COMP%]:not(.switch){border-radius:7px}input[type=checkbox][_ngcontent-%COMP%]:not(.switch):after{width:5px;height:7px;border:2px solid var(--active-inner);border-top:0;border-left:0;left:5px;top:3px;transform:rotate(var(--r,20deg))}input[type=checkbox][_ngcontent-%COMP%]:not(.switch):checked{--r:43deg}input[type=radio][_ngcontent-%COMP%]{border-radius:50%}input[type=radio][_ngcontent-%COMP%]:after{width:16px;height:16px;border-radius:40%;bottom:200%;right:200%;background:var(--active-inner);opacity:0;transform:scale(var(--s,.5))}input[type=radio][_ngcontent-%COMP%]:checked{--s:.5}}input[type=number][_ngcontent-%COMP%]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none}.number-input[_ngcontent-%COMP%]{border:1px solid #aca4a4;border-radius:5px;display:inline-flex}.number-input[_ngcontent-%COMP%], .number-input[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.number-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;-webkit-appearance:none;background-color:initial;border:none;align-items:center;justify-content:center;width:2rem;height:2rem;cursor:pointer;margin:0;position:relative}.number-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after, .number-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{display:inline-block;position:absolute;top:50%;content:"";width:12px;height:1px;background-color:#212121;border-radius:5px;transform:translate(-50%,-50%)}.number-input[_ngcontent-%COMP%]   button.plus[_ngcontent-%COMP%]:after{transform:translate(-50%,-50%) rotate(90deg)}.number-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f2f2f2;border-radius:5px;box-shadow:1px 1px 1px 1px}.number-input[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{font-family:sans-serif;max-width:3rem;padding:.1rem;border:solid #ddd;border-width:0 2px;font-size:14px;height:2rem;font-weight:700;text-align:center}.link_disabled[_ngcontent-%COMP%], .link_disabled[_ngcontent-%COMP%]:hover{opacity:.5;cursor:not-allowed!important;color:#000!important}.dialog[_ngcontent-%COMP%]{top:50%;left:50%;width:50em;margin-top:-9em;margin-left:-25em;position:fixed;border:none!important;z-index:9999}.dialog_overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.3;z-index:999}']}),t})()}];let $=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[r.d.forChild(q)],r.d]}),t})(),R=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[i.b,o.h,o.o,$]]}),t})()}}]);