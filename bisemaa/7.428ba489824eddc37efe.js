(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(e,t,o){"use strict";o.r(t),o.d(t,"AuthModule",(function(){return O}));var r=o("ofXK"),n=o("tyNb"),i=o("3Pt+"),c=o("fXoL"),s=o("AytR"),a=o("tk/3");let l=(()=>{class e{constructor(e){this.http=e,this.baseUrl=s.a.baseUrl}login(e){return this.http.get(`${this.baseUrl}api/login/${e.email}/${e.password}`)}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(a.a))},e.\u0275prov=c.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=o("c3AT"),p=o("Yvy/");function d(e,t){if(1&e){const e=c.Pb();c.Mb(0),c.Ob(1,"p",6),c.wc(2,"Please enter your account details to login"),c.Nb(),c.Ob(3,"form",8),c.Vb("submit",(function(){return c.rc(e),c.Xb().submit()})),c.Ob(4,"div",9),c.Jb(5,"input",10),c.Ob(6,"div",11),c.Jb(7,"span",12),c.Nb(),c.Nb(),c.Ob(8,"div",9),c.Jb(9,"input",13),c.Ob(10,"div",11),c.Jb(11,"span",14),c.Nb(),c.Nb(),c.Ob(12,"div",15),c.wc(13),c.Nb(),c.Ob(14,"div",16),c.Ob(15,"label",17),c.Jb(16,"input",18),c.Jb(17,"label",19),c.Nb(),c.Ob(18,"div",20),c.Ob(19,"div",21),c.Jb(20,"span",22),c.Nb(),c.Ob(21,"button",23),c.Jb(22,"i",24),c.wc(23," Login"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Lb()}if(2&e){const e=c.Xb();c.xb(3),c.cc("formGroup",e.loginForm),c.xb(10),c.xc(e.loginErrorMessage)}}function g(e,t){if(1&e&&(c.Ob(0,"option",30),c.wc(1),c.Nb()),2&e){const e=t.$implicit;c.dc("value",e.id),c.xb(1),c.xc(e.projectName)}}function u(e,t){1&e&&(c.Ob(0,"div",9),c.Jb(1,"input",31),c.Ob(2,"div",11),c.Jb(3,"span",12),c.Nb(),c.Nb())}function f(e,t){if(1&e){const e=c.Pb();c.Mb(0),c.Ob(1,"p",6),c.wc(2,"Please select any existing project or create new to proceed further"),c.Nb(),c.Ob(3,"form",8),c.Vb("submit",(function(){return c.rc(e),c.Xb().projectSelected()})),c.Ob(4,"div",9),c.Ob(5,"select",25),c.Ob(6,"option",26),c.wc(7,"Select Project"),c.Nb(),c.Ob(8,"option",27),c.wc(9,"New Project"),c.Nb(),c.vc(10,g,2,2,"option",28),c.Nb(),c.Ob(11,"div",11),c.Jb(12,"span",12),c.Nb(),c.Nb(),c.vc(13,u,4,0,"div",29),c.Ob(14,"div",15),c.wc(15),c.Nb(),c.Ob(16,"div",16),c.Ob(17,"div",9),c.Ob(18,"div",21),c.Jb(19,"span",22),c.Nb(),c.Ob(20,"button",23),c.Jb(21,"i",24),c.wc(22," Proceed"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Lb()}if(2&e){const e=c.Xb();c.xb(3),c.cc("formGroup",e.projectForm),c.xb(7),c.cc("ngForOf",e.projects),c.xb(3),c.cc("ngIf","New Project"==e.projectForm.value.project),c.xb(2),c.xc(e.projectErrorMessage)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,o,r,n){this.fb=e,this.authService=t,this.projectService=o,this.router=r,this.businessCentralService=n,this.loginErrorMessage="",this.loginForm=this.fb.group({email:["",[i.p.required]],password:["",[i.p.required]],dwg_2d:[""]}),this.projectForm=this.fb.group({project:["",[i.p.required]],projectName:["",[i.p.required]]}),this.projectErrorMessage="",this.dealers_id=0}submit(){this.authService.login(this.loginForm.value).subscribe(e=>{e?e.data?(this.loggedInUser=e.data,this.dealers_id=this.loggedInUser.dealers_id,this.dealers_id||(this.dealers_id=this.loggedInUser.id),this.projectService.getProjectsByDealerID(this.dealers_id).subscribe(e=>{this.projects=e},e=>{console.log("Failed to get projects by dealer id. Error details: "+JSON.stringify(e))})):e.message&&(this.loginErrorMessage=e.message):console.log("result not found !!")},e=>{console.log(e)})}projectSelected(){this.projectErrorMessage="";const e=this.projectForm.value.project;if(""!=e)if("New Project"==e)""===this.projectForm.value.projectName?this.projectErrorMessage="Please enter project name.":this.dealers_id>0?this.projectService.checkIfExistsWithName(this.dealers_id,this.projectForm.value.projectName).subscribe(e=>{0==e.data?this.createBiSemASalesHeader():this.projectErrorMessage=e.message},e=>{console.log("Error occured while checking if project exists same name or not. Error details: "+JSON.stringify(e))}):this.projectErrorMessage="Something went wrong ! Dealer not found. Please try again and if issue persist contact administrator.";else{const t=this.projects.filter(t=>t.id===parseInt(e));t&&t.length>0?this.updateUserDetailsAndLogin(t[0].id,t[0].projectName,t[0].BCProjectNumber):this.projectErrorMessage="Something went wrong ! Project not found. please try again and if issue persist contact administrator."}else this.projectErrorMessage="Please select project or create new to proceed further."}updateUserDetailsAndLogin(e,t,o){this.loggedInUser.projectID=parseInt(e),this.loggedInUser.projectName=t,this.loggedInUser.BCProjectNumber=o,localStorage.setItem("user",JSON.stringify(this.loggedInUser)),this.router.navigateByUrl(void 0===this.loggedInUser.dealers_id?"/cart":"/catalog")}createBiSemASalesHeader(){let e={documentType:"Order",selltocustomerNumber:"10000",orderDate:`${(new Date).getFullYear()}-${("0"+((new Date).getMonth()+1)).slice(-2)}-${("0"+(new Date).getDate()).slice(-2)}`};this.businessCentralService.postDetailsInDynamics(e,"BiSemASalesHeader",this.loggedInUser).subscribe(e=>{e?this.projectService.createProject({dealers_id:this.dealers_id,projectName:this.projectForm.value.projectName,projectNumber:e.number}).subscribe(t=>{t.data>0?this.updateUserDetailsAndLogin(t.data,this.projectForm.value.projectName,e.number):this.projectErrorMessage=t.message},e=>{console.log("Error occured while creating project. Error details: "+JSON.stringify(e))}):console.log("BiSemA Sales Header not created")},e=>{console.log("error occured while calling dynamics BiSemA Sales Header call : "+JSON.stringify(e))})}ngOnInit(){localStorage.removeItem("user")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(i.c),c.Ib(l),c.Ib(b.a),c.Ib(n.b),c.Ib(p.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-login"]],decls:11,vars:2,consts:[[1,"container","d-flex","h-100","align-items-center"],[1,"row","w-100"],[1,"col-3"],[1,"col-6"],[1,"card"],[1,"card-body","bg-purple"],[1,"text-center","text-white"],[4,"ngIf"],[3,"formGroup","submit"],[1,"input-group","mb-3"],["type","text","placeholder","Your Email","formControlName","email",1,"form-control"],[1,"input-group-append"],[1,"input-group-text","fa","fa-envelope"],["type","password","placeholder","Your Password","formControlName","password",1,"form-control"],[1,"input-group-text","fa","fa-key"],[1,"text-center","text-white","mb-3"],[1,"d-flex"],[1,"switch","mr-auto"],["id","cmn-toggle-1","formControlName","dwg_2d","type","checkbox",1,"cmn-toggle","cmn-toggle-round-flat"],["for","cmn-toggle-1"],[1,"input-group","mb-3","w-25"],[1,"input-group-prepend","ml-auto"],[1,"input-group-text","fa","fa-lock"],["type","submit",1,"btn","btn-success","btn2"],[1,"fa","fa-arrow-right"],["formControlName","project",1,"form-control"],["value",""],["value","New Project"],[3,"value",4,"ngFor","ngForOf"],["class","input-group mb-3",4,"ngIf"],[3,"value"],["type","text","placeholder","Project Name","formControlName","projectName",1,"form-control"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Jb(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"div",4),c.Ob(5,"div",5),c.Ob(6,"h1",6),c.wc(7,"BiSemA"),c.Nb(),c.vc(8,d,24,2,"ng-container",7),c.vc(9,f,23,4,"ng-container",7),c.Nb(),c.Nb(),c.Nb(),c.Jb(10,"div",2),c.Nb(),c.Nb()),2&e&&(c.xb(8),c.cc("ngIf",!t.loggedInUser),c.xb(1),c.cc("ngIf",t.loggedInUser))},directives:[r.l,i.r,i.j,i.g,i.b,i.i,i.f,i.a,i.o,i.k,i.q,r.k],styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;overflow:auto}.btn2[_ngcontent-%COMP%]:hover{color:#000;background-color:#f5f5f5}.cmn-toggle[_ngcontent-%COMP%]{position:absolute;margin-left:-9999px;visibility:hidden}.cmn-toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:relative;cursor:pointer;outline:none;-webkit-user-select:none;user-select:none}input.cmn-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:2px;width:40px;height:25px;background-color:#ddd;border-radius:60px;transition:background .4s}input.cmn-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input.cmn-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{display:block;position:absolute;content:""}input.cmn-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{top:2px;left:2px;bottom:2px;right:2px;background-color:#fff;border-radius:60px;transition:background .4s}input.cmn-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{top:4px;left:4px;bottom:4px;width:15px;background-color:#ddd;border-radius:52px;transition:margin .4s,background .4s}input.cmn-toggle-round-flat[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:#53386f}input.cmn-toggle-round-flat[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{margin-left:18px;background-color:#53386f}']}),e})()},{path:"register",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["app-register"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Ob(0,"p"),c.wc(1,"register works!"),c.Nb())},styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[n.d.forChild(m)],n.d]}),e})(),O=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[r.b,i.h,i.n,h]]}),e})()}}]);