(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{TUkU:function(i,e,n){"use strict";n.r(e),n.d(e,"Tab2PageModule",function(){return z});var t=n("ofXK"),c=n("3Pt+"),o=n("TEn/"),s=n("j1ZV"),r=n("iTUp"),a=n("tyNb"),b=n("mrSG"),l=n("quSY"),h=n("151J"),u=n("fXoL"),f=n("sUQ5"),p=n("e5sC"),d=n("bruO");function m(i,e){if(1&i){const i=u.Nb();u.Mb(0,"ion-item",7),u.Ub("click",function(){u.gc(i);const n=e.$implicit;return u.Wb(2).pasteToSearch(n)}),u.Mb(1,"ion-label",8),u.lc(2),u.Lb(),u.Lb()}if(2&i){const i=e.$implicit;u.zb(2),u.mc(i)}}function g(i,e){if(1&i&&(u.Mb(0,"ion-list"),u.Mb(1,"ion-list-header"),u.Mb(2,"ion-label"),u.lc(3,"Ideas"),u.Lb(),u.Lb(),u.jc(4,m,3,1,"ion-item",6),u.Lb()),2&i){const i=u.Wb();u.zb(4),u.cc("ngForOf",i.ideas)}}function v(i,e){if(1&i){const i=u.Nb();u.Mb(0,"ion-col",11),u.Mb(1,"ion-card",12),u.Ub("click",function(){u.gc(i);const n=e.$implicit;return u.Wb(2).movieDetails(n)}),u.Kb(2,"img",13),u.Xb(3,"image"),u.Mb(4,"ion-card-header"),u.Mb(5,"ion-card-subtitle"),u.lc(6),u.Lb(),u.Lb(),u.Mb(7,"ion-card-content"),u.Mb(8,"h2"),u.lc(9),u.Lb(),u.Lb(),u.Lb(),u.Lb()}if(2&i){const i=e.$implicit;u.zb(2),u.cc("src",u.Yb(3,3,i.poster_path),u.hc),u.zb(4),u.mc(i.release_date),u.zb(3),u.mc(i.title)}}function M(i,e){if(1&i&&(u.Mb(0,"ion-grid",9),u.Mb(1,"ion-row"),u.jc(2,v,10,5,"ion-col",10),u.Lb(),u.Lb()),2&i){const i=u.Wb();u.zb(2),u.cc("ngForOf",i.movies)}}function L(i,e){1&i&&u.Kb(0,"app-spinner")}const w=[{path:"",component:(()=>{class i{constructor(i,e){this._movies=i,this._modal=e,this.textSearch="",this.movies=[],this.ideas=["Spiderman","Avengers","El se\xf1or de los anillos"],this.searchingMovies=!1,this._subscription=new l.a}ngOnDestroy(){this._subscription.unsubscribe()}onSearchChange(i){const{detail:e}=i;""!==e.value?this.searchMovies(e.value):(this.movies=[],this.textSearch="")}searchMovies(i){this.searchingMovies=!0,this._subscription.add(this._movies.searchMovies(i).subscribe(i=>{this.movies=i.results,this.searchingMovies=!1},i=>{this.searchingMovies=!1}))}pasteToSearch(i){this.textSearch=i}movieDetails(i){return Object(b.a)(this,void 0,void 0,function*(){const e=yield this._modal.create({component:h.a,componentProps:{id:i.id}});yield e.present()})}}return i.\u0275fac=function(e){return new(e||i)(u.Jb(f.a),u.Jb(o.G))},i.\u0275cmp=u.Db({type:i,selectors:[["app-tab2"]],decls:11,vars:7,consts:[[3,"translucent"],["placeholder","Search Movie","animated","","showCancelButton","always",3,"debounce","value","ionChange"],[3,"fullscreen"],[4,"ngIf"],["fixed","",4,"ngIf","ngIfElse"],["spinner",""],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],["color","primary"],["fixed",""],["size","6",4,"ngFor","ngForOf"],["size","6"],[3,"click"],[3,"src"]],template:function(i,e){if(1&i&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.lc(3," Search Movie "),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-toolbar"),u.Mb(5,"ion-searchbar",1),u.Ub("ionChange",function(i){return e.onSearchChange(i)}),u.Lb(),u.Lb(),u.Mb(6,"ion-content",2),u.jc(7,g,5,1,"ion-list",3),u.jc(8,M,3,1,"ion-grid",4),u.Lb(),u.jc(9,L,1,0,"ng-template",null,5,u.kc)),2&i){const i=u.fc(10);u.cc("translucent",!0),u.zb(5),u.cc("debounce",700)("value",e.textSearch),u.zb(1),u.cc("fullscreen",!0),u.zb(1),u.cc("ngIf",0===e.movies.length),u.zb(1),u.cc("ngIf",!e.searchingMovies)("ngIfElse",i)}},directives:[o.m,o.D,o.C,o.v,o.H,o.j,t.i,o.q,o.r,o.p,t.h,o.o,o.l,o.u,o.i,o.d,o.f,o.g,o.e,p.a],pipes:[d.a],styles:[""]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=u.Hb({type:i}),i.\u0275inj=u.Gb({imports:[[a.i.forChild(w)],a.i]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=u.Hb({type:i}),i.\u0275inj=u.Gb({imports:[[o.E,t.b,c.a,r.a,s.a,S]]}),i})()}}]);