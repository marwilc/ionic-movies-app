(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{tmrb:function(o,i,e){"use strict";e.r(i),e.d(i,"Tab1PageModule",function(){return D});var s=e("ofXK"),t=e("3Pt+"),n=e("TEn/"),r=e("j1ZV"),c=e("iTUp"),l=e("tyNb"),a=e("quSY"),p=e("fXoL"),b=e("sUQ5"),u=e("mrSG"),d=e("151J"),f=e("bruO");const h=function(){return{"object-fit":"cover"}};function m(o,i){if(1&o){const o=p.Nb();p.Mb(0,"ion-slide"),p.Mb(1,"ion-card",2),p.Ub("click",function(){p.gc(o);const e=i.$implicit;return p.Wb().showDetail(e.id)}),p.Kb(2,"img",3),p.Xb(3,"image"),p.Lb(),p.Lb()}if(2&o){const o=i.$implicit;p.zb(2),p.cc("src",p.Yb(3,2,o.backdrop_path),p.hc)("ngStyle",p.dc(4,h))}}let v=(()=>{class o{constructor(o){this._modal=o,this.movies=[],this.slideOpts={slidesPerView:1.3,freeMode:!0}}ngOnInit(){}showDetail(o){return Object(u.a)(this,void 0,void 0,function*(){const i=yield this._modal.create({component:d.a,componentProps:{id:o}});yield i.present()})}}return o.\u0275fac=function(i){return new(i||o)(p.Jb(n.G))},o.\u0275cmp=p.Db({type:o,selectors:[["app-slideshow-backdrop"]],inputs:{movies:"movies"},decls:2,vars:2,consts:[[3,"options"],[4,"ngFor","ngForOf"],[3,"click"],[3,"src","ngStyle"]],template:function(o,i){1&o&&(p.Mb(0,"ion-slides",0),p.jc(1,m,4,5,"ion-slide",1),p.Lb()),2&o&&(p.cc("options",i.slideOpts),p.zb(1),p.cc("ngForOf",i.movies))},directives:[n.x,s.h,n.w,n.d,s.j],pipes:[f.a],styles:[""]}),o})();var M=e("3HUv");let g=(()=>{class o{transform(o){return o.reduce((o,i,e,s)=>(e%2==0&&o.push(s.slice(e,e+2)),o),[])}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275pipe=p.Ib({name:"par",type:o,pure:!0}),o})();const w=function(){return{"object-fit":"cover",height:"100%"}};function L(o,i){if(1&o){const o=p.Nb();p.Mb(0,"ion-col",6),p.Mb(1,"ion-card",7),p.Ub("click",function(){p.gc(o);const e=i.$implicit;return p.Wb(2).showDetail(e.id)}),p.Kb(2,"img",8),p.Xb(3,"image"),p.Lb(),p.Lb()}if(2&o){const o=i.$implicit;p.zb(2),p.cc("src",p.Yb(3,2,o.poster_path),p.hc)("ngStyle",p.dc(4,w))}}function y(o,i){if(1&o&&(p.Mb(0,"ion-slide"),p.Mb(1,"ion-row"),p.jc(2,L,4,5,"ion-col",5),p.Lb(),p.Lb()),2&o){const o=i.$implicit;p.zb(2),p.cc("ngForOf",o)}}let F=(()=>{class o{constructor(o){this._modal=o,this.movies=[],this.loadMoreMovies=new p.o,this.slideOpts={slidesPerView:3.3,freeMode:!0,spaceBetween:-10}}ngOnInit(){}loadMore(){this.loadMoreMovies.emit()}showDetail(o){return Object(u.a)(this,void 0,void 0,function*(){const i=yield this._modal.create({component:d.a,componentProps:{id:o}});yield i.present()})}}return o.\u0275fac=function(i){return new(i||o)(p.Jb(n.G))},o.\u0275cmp=p.Db({type:o,selectors:[["app-slide-show-par"]],inputs:{movies:"movies"},outputs:{loadMoreMovies:"loadMoreMovies"},decls:6,vars:4,consts:[[3,"options"],[4,"ngFor","ngForOf"],[1,"slide-more"],["expand","full","size","large",1,"btn-more",3,"click"],["slot","icon-only","name","add"],["size","12",4,"ngFor","ngForOf"],["size","12"],[1,"poster",3,"click"],[3,"src","ngStyle"]],template:function(o,i){1&o&&(p.Mb(0,"ion-slides",0),p.jc(1,y,3,1,"ion-slide",1),p.Xb(2,"par"),p.Mb(3,"ion-slide",2),p.Mb(4,"ion-button",3),p.Ub("click",function(){return i.loadMore()}),p.Kb(5,"ion-icon",4),p.Lb(),p.Lb(),p.Lb()),2&o&&(p.cc("options",i.slideOpts),p.zb(1),p.cc("ngForOf",p.Yb(2,2,i.movies)))},directives:[n.x,s.h,n.w,n.b,n.n,n.u,n.i,n.d,s.j],pipes:[g,f.a],styles:[".slide-more[_ngcontent-%COMP%]{height:300px}.btn-more[_ngcontent-%COMP%]{position:relative;top:13%}"]}),o})();var O=e("e5sC");let P=(()=>{class o{transform(o){return o.filter(o=>o.backdrop_path)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275pipe=p.Ib({name:"filterBackdrop",type:o,pure:!0}),o})();function j(o,i){if(1&o&&(p.Kb(0,"app-slideshow-backdrop",5),p.Xb(1,"filterBackdrop")),2&o){const o=p.Wb();p.cc("movies",p.Yb(1,1,o.movies))}}function k(o,i){if(1&o&&p.Kb(0,"app-slideshow-poster",5),2&o){const o=p.Wb();p.cc("movies",o.movies)}}function _(o,i){if(1&o){const o=p.Nb();p.Mb(0,"app-slide-show-par",6),p.Ub("loadMoreMovies",function(){return p.gc(o),p.Wb().loadPopular()}),p.Lb()}if(2&o){const o=p.Wb();p.cc("movies",o.popular)}}function I(o,i){1&o&&p.Kb(0,"app-spinner")}const z=[{path:"",component:(()=>{class o{constructor(o){this._movies=o,this.movies=[],this.popular=[],this.loadingFeatureMovies=!0,this.loadingPopularMovies=!0,this.loadingFeatureMoviesError=!1,this.loadingPopularMoviesError=!1,this._subscription=new a.a}ngOnDestroy(){this._subscription.unsubscribe()}ngOnInit(){this.loadFeatureMovies(),this.loadPopular()}loadFeatureMovies(){this._subscription.add(this._movies.getFeature().subscribe(o=>{this.movies=o.results,this.loadingFeatureMovies=!1},o=>{this.loadingFeatureMovies=!1,this.loadingFeatureMoviesError=!0}))}loadPopular(){this._subscription.add(this._movies.getPopular().subscribe(o=>{this.popular=this.popular.concat(o.results),this.loadingPopularMovies=!1},o=>{this.loadingPopularMovies=!1,this.loadingPopularMoviesError=!0}))}}return o.\u0275fac=function(i){return new(i||o)(p.Jb(b.a))},o.\u0275cmp=p.Db({type:o,selectors:[["app-tab1"]],decls:21,vars:7,consts:[[3,"fullscreen"],["fixed",""],[3,"movies",4,"ngIf","ngIfElse"],[3,"movies","loadMoreMovies",4,"ngIf","ngIfElse"],["spinner",""],[3,"movies"],[3,"movies","loadMoreMovies"]],template:function(o,i){if(1&o&&(p.Mb(0,"ion-content",0),p.Mb(1,"ion-grid",1),p.Mb(2,"ion-row"),p.Mb(3,"ion-col"),p.Mb(4,"h3"),p.lc(5,"New Movies"),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.jc(6,j,2,3,"app-slideshow-backdrop",2),p.Mb(7,"ion-grid",1),p.Mb(8,"ion-row"),p.Mb(9,"ion-col"),p.Mb(10,"h3"),p.lc(11,"Charts"),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.jc(12,k,1,1,"app-slideshow-poster",2),p.Mb(13,"ion-grid",1),p.Mb(14,"ion-row"),p.Mb(15,"ion-col"),p.Mb(16,"h3"),p.lc(17,"Popular"),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.jc(18,_,1,1,"app-slide-show-par",3),p.Lb(),p.jc(19,I,1,0,"ng-template",null,4,p.kc)),2&o){const o=p.fc(20);p.cc("fullscreen",!0),p.zb(6),p.cc("ngIf",!i.loadingFeatureMovies)("ngIfElse",o),p.zb(6),p.cc("ngIf",!i.loadingFeatureMovies)("ngIfElse",o),p.zb(6),p.cc("ngIf",!i.loadingPopularMovies)("ngIfElse",o)}},directives:[n.j,n.l,n.u,n.i,s.i,v,M.a,F,O.a],pipes:[P],styles:[""]}),o})()}];let E=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=p.Hb({type:o}),o.\u0275inj=p.Gb({imports:[[l.i.forChild(z)],l.i]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=p.Hb({type:o}),o.\u0275inj=p.Gb({imports:[[n.E,s.b,t.a,E,c.a,r.a]]}),o})()}}]);