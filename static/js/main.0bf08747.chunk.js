(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){},180:function(e,t,n){},251:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(25),s=n.n(c),r=(n(160),n.p,n(161),n(24)),o=n(133),l=n(134),j=n(153),d=n(149),u=n(151),h=n(67),b=n(37),m=n(268),f=n(150),O=n(135),g=n.n(O),x=n(74),p=n(266),y=(n(180),n(7)),v=["children"],S=function(e){var t=e.children,n=Object(x.a)(e,v);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(p.a,Object(r.a)(Object(r.a)({className:"common-card-style"},n),{},{children:t}))})},C=n(91),k=n.n(C),A=n(265),I=n(68),z=n(45),R=n(269),F=n.p+"static/media/index.653c4dd3.less",N=function(e){var t=e.loading,n=e.error,a=e.data,i=e.onRetry,c=void 0===i?function(){}:i,s=e.style,o=void 0===s?{minHeight:200}:s,l=e.children,j=Object(y.jsx)(z.a,{style:{fontSize:25}}),d=k()(a);return Object(y.jsx)("div",{className:F.suspense,style:o,children:Object(y.jsxs)(A.a,{spinning:t,indicator:j,style:o,children:[!(n||t)&&!d&&l,!(n||t)&&d&&Object(y.jsx)("div",{className:F.errorWrap,style:Object(r.a)({},o),children:Object(y.jsx)(I.a,{image:Object(y.jsx)(R.a,{style:{fontSize:30,color:"#acacac"}}),description:"No Data",imageStyle:{height:40}})}),n&&Object(y.jsx)("div",{className:F.errorWrap,style:Object(r.a)({},o),children:Object(y.jsx)(I.a,{image:Object(y.jsx)(R.a,{style:{fontSize:30,color:"#acacac"}}),description:a.msg||"Fail to get the data",imageStyle:{height:40},children:Object(y.jsx)(f.a,{size:"small",type:"primary",onClick:c,children:"Retry"})})})]})})},w=n(96),L=(n(251),n(139)),D=n.n(L),P=n(270),Y=n(271),B=function(e){var t=e.data,n=t.copyright,i=t.date,c=t.explanation,s=t.url,r=t.title,o=t.media_type,l=Object(a.useState)(!1),j=Object(w.a)(l,2),d=j[0],h=j[1];return Object(y.jsx)("div",{className:"imageCard",children:Object(y.jsx)(p.a,{hoverable:!0,style:{width:"100%",display:"inline-block",textAlign:"center",marginBottom:"24px"},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(y.jsxs)("div",{style:{textAlign:"left"},children:[o&&"image"===o?Object(y.jsx)("img",{src:s}):"",o&&"video"===o?Object(y.jsx)("iframe",{src:s,allowfullscreen:"true"}):""]}),Object(y.jsxs)("div",{style:{textAlign:"left",flex:1,margin:"30px"},children:[Object(y.jsx)("p",{style:{fontSize:"48px",fontWeight:"bold"},children:r}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("p",{style:{fontSize:"24px",display:"inline-block"},children:["Date: ",i," | ",n||"Anonymous"]}),Object(y.jsx)(P.a,{style:{float:"right",fontSize:"32px",marginLeft:"8px"},onClick:function(){D()(s,{debug:!0})&&u.b.success("The link of ".concat(r," has copied successfully, send it to your friends!"))}}),Object(y.jsx)(Y.a,{style:{float:"right",fontSize:"32px",color:d?"red":""},onClick:function(){h(!d),u.b.success("You have ".concat(d?"unliked":"liked"," the ").concat(r))}})]}),Object(y.jsx)("p",{style:{fontSize:"30px"},children:c})]})]})})})},M=function(e){var t=e.data,n=e.api;return Object(y.jsxs)(h.a,{gutter:8,children:[Object(y.jsxs)(b.a,{xl:24,lg:24,sm:24,xs:24,children:[Object(y.jsx)("p",{style:{fontSize:"32px",fontWeight:"bold",textAlign:"left",marginBottom:0},children:"Spacestagram"}),Object(y.jsx)("p",{style:{fontSize:"18px",color:"rgb(138, 135, 135)",textAlign:"left"},children:"Brought to you by NASA's ".concat(n," API")})]}),t.map((function(e){return Object(y.jsx)(b.a,{xl:24,lg:24,sm:24,xs:24,children:Object(y.jsx)(B,{data:e})})}))]})},_=n(81),T=n(54),W=n.n(T),V=n(267),E=n(141),G=n.n(E),J=n(142),q=n.n(J),H=["formItem","onFieldChange"],Q=["component","name","formItemOptions"],Z=V.a.Item,K=function(e){var t=e.formItem,n=e.onFieldChange,a=Object(x.a)(e,H),i=V.a.useForm(),c=Object(w.a)(i,1)[0];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(V.a,Object(r.a)(Object(r.a)({layout:"inline"},a),{},{onValuesChange:function(e,t){n&&Object.values(t).every((function(e){return!(!q()(e)&&!G()(e))||!k()(e)}))&&n(t)},form:c,children:t.map((function(e){var t=e.component,n=e.name,a=e.formItemOptions,i=void 0===a?{}:a,c=Object(x.a)(e,Q);return Object(y.jsx)(Z,Object(r.a)(Object(r.a)({name:n},i),{},{children:Object(y.jsx)(t,Object(r.a)({},c))}))}))}))})},U=n(146),X=n(143),$=n.n(X),ee=n(144),te=n.n(ee),ne=Object(U.b)($.a);function ae(e,t,n){return Object(r.a)({name:e,formItemOptions:Object(r.a)({rules:[{required:!0,message:"pick up the date"}]},n),component:ne.RangePicker,size:"middle",locale:te.a},t)}var ie=function(e){var t=e.defaultValue,n=e.onTimeRangeChange,i=void 0===n?function(){}:n,c=e.name,s=void 0===c?"time":c,r=Object(a.useMemo)((function(){return t||[W()().subtract(1,"week"),W()()]}),[t]),o=Object(a.useMemo)((function(){return[ae(s,{},{initialValue:t||[W()().subtract(1,"week"),W()()]})]}),[s]);return Object(a.useEffect)((function(){i(Object(_.a)({},s,r))}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"range-filter",style:{marginLeft:"16px"},children:Object(y.jsx)(K,{formItem:o,onFieldChange:i})})})},ce=(n(261),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).showNasaImages=function(){e.fetchImages()},e.refresh=function(){e.fetchImages()},e.fetchImages=function(){var t="https://api.nasa.gov",n=e.state,a=n.select_api,i=n.timeRange;"APOD"===a?(t=t+"/planetary/apod?api_key="+"aplpG2wFRQCZie4Ak0ik3RABe0zABoPAS0GC1oIj"+"&start_date=".concat(i.time[0].format("YYYY-MM-DD"),"&end_date=").concat(i.time[1].format("YYYY-MM-DD")),e.setState({isLoading:!0,initial:!1}),g.a.get(t).then((function(t){e.setState({info:t.data,isLoading:!1,error:200!==t.status&&304!==t.status})})).catch((function(t){e.setState({info:t.response.data,isLoading:!1,error:200!==t.response.status&&304!==t.response.status})}))):u.b.error("more links will release soon")},e.onSourceChange=function(t){e.setState({select_api:t})},e.onTimeRangeChange=function(t){e.setState((function(e){return{timeRange:Object(r.a)(Object(r.a)({},e.timeRange),t)}}))},e.state={select_api:"APOD",info:void 0,isLoading:!1,initial:!0,error:!1,timeRange:void 0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.select_api,n=e.initial,a=e.isLoading,i=e.info,c=e.error;return Object(y.jsxs)(h.a,{gutter:8,className:"main",children:[Object(y.jsx)(b.a,{span:24,children:Object(y.jsx)(S,{title:"Welcome! Please select an image source",headStyle:{fontSize:"46px"},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"8px"},children:[Object(y.jsxs)(m.a,{style:{width:300},placeholder:"Select a source",value:t,onChange:this.onSourceChange,children:[Object(y.jsx)(m.a.Option,{value:"APOD",children:"Astronomy Picture of the Day"}),Object(y.jsx)(m.a.Option,{value:"NeoWs",children:"More Links Will Coming Soon"})]}),Object(y.jsx)(ie,{onTimeRangeChange:this.onTimeRangeChange}),Object(y.jsx)(f.a,{style:{marginLeft:"16px"},onClick:this.showNasaImages,children:"Search"})]})})}),Object(y.jsx)(b.a,{span:24,children:Object(y.jsx)(S,{style:{background:"rgb(218, 220, 224)"},children:n?Object(y.jsx)("p",{style:{fontSize:"24px"},children:"Let's start the travel"}):Object(y.jsx)(N,{loading:a,error:c,data:i,onRetry:this.refresh,children:Object(y.jsx)(M,{data:i,api:t})})})})]})}}]),n}(a.Component));var se=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(ce,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};n(262);s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(se,{})}),document.getElementById("root")),re()}},[[263,1,2]]]);
//# sourceMappingURL=main.0bf08747.chunk.js.map