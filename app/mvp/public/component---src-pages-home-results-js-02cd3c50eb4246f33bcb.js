(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{BaJ9:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("bXiM"),o=t("lO0E"),c=t("ofer"),s=t("R/WZ"),l=t("tr08"),p=t("Wbzz"),m=t("jFb6"),d=t("kKAo"),x=t("tRbT"),g=t("Z3vd"),u=t("30+C"),f=t("lFIR"),h=t("oa/T"),b=t("PsDL"),v=t("hlFM"),w=t("HIvh"),E=t("ldhQ"),N=t.n(E),S=t("Rme4"),y=t.n(S);m.siteMetadata.mapboxToken;function k(e,a,t,n){return{name:e,price1:a,price2:t,rating:n}}var B=[k("Breda Yacht Suppliers",2.12,5.23,4),k("Rotterdam Yacht Suppliers",2.22,4.23,3)],j=Object(s.a)((function(e){var a,t;return{margin:{margin:e.spacing(1),boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important"},root:{flexGrow:1,display:"flex",background:"#eeeeee",minHeight:"100vh",flexWrap:"wrap"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},searchInput:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",background:"white",border:"1px solid #eee",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important"},input:{marginLeft:e.spacing(1),flex:1,color:"#666"},iconButton:{padding:10},divider:{height:28,margin:4},cont:(a={background:"white",margin:"0px",width:"100%",maxWidth:"1100px"},a.margin="auto",a.marginTop="20px",a.borderRadius="10px",a.overflow="hidden",a),textField:{color:"white!important"},navIcon:{color:"white!important"},appBar:(t={background:"black",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important"},t[e.breakpoints.up("sm")]={marginLeft:240},t),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},paper:{background:"none",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important"},innerContent:{padding:"24px"},media:{height:140},shipper:{color:"#666",border:"1px solid #eee",background:"white",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important",marginBottom:"24px"},shipperName:{letterSpacing:"0.5px",fontSize:"18px",margin:"0",marginTop:"6px",paddingLeft:"12px"},shipperDesc:{letterSpacing:"0.5px",fontSize:"14px",margin:"0",marginTop:"6px",paddingLeft:"12px"},shipperRating:{letterSpacing:"0.5px",fontSize:"12px",margin:"0",marginTop:"6px",paddingLeft:"12px"},paddingLeft:{paddingLeft:"8px"},searchBtn:{display:"block",textAlign:"center",width:"100%",paddingTop:"12px",paddingBottom:"2px",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important",background:"#2E5263","&:hover":{background:"#214454"},color:"white!important"},dealerHeading:{fontSize:"24px",marginBottom:"24px",marginTop:"12px"},subNav:{maxWidth:"1100px",margin:"auto",background:"none",boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .0)!important",color:"#000"},subNavButton:{color:"#666!important",fontSize:"14px"},searchAgainButton:{boxShadow:"0 0px 0px 0px rgba(255, 255, 255, .3)!important",color:"#333",padding:"10px 40px",fontSize:"13px",background:"#eeeeee","&:hover":{background:"#dddddd"}}}}));a.default=function(e){var a=r.a.useState(null),t=(a[0],a[1],r.a.useState(null)),n=(t[0],t[1],e.window,j()),s=(Object(l.a)(),r.a.useState(!1)),m=(s[0],s[1],r.a.useState(2)),E=(m[0],m[1],B.map((function(e){return r.a.createElement(u.a,{className:n.shipper},r.a.createElement(p.Link,{to:"/home/cart",style:{textDecoration:"none",color:"#666"}},r.a.createElement(f.a,null,r.a.createElement(h.a,{key:e},r.a.createElement("p",{className:n.shipperName},e.name),r.a.createElement("p",{className:n.shipperDesc},e.price1," - ",e.price2," € / Litre"),r.a.createElement("p",{className:n.shipperRating},"Rating:"),r.a.createElement(v.a,{className:n.paddingLeft,component:"fieldset",mb:0,borderColor:"transparent"},r.a.createElement(w.a,{name:"read-only",value:e.rating,readOnly:!0,size:"small"}))))))})));return r.a.createElement("div",{className:n.root},r.a.createElement(i.a,{position:"fixed",className:n.appBar},r.a.createElement(o.a,null,r.a.createElement(c.a,{variant:"h6",className:n.title},"Bunkermate"),r.a.createElement(b.a,{href:"/home",edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(y.a,{className:n.navIcon})),r.a.createElement(b.a,{href:"/",edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(N.a,{className:n.navIcon})))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(i.a,{position:"static",className:n.subNav},r.a.createElement(o.a,null,r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu"}),r.a.createElement(c.a,{variant:"h6",className:n.title}),r.a.createElement(g.a,{className:n.subNavButton,href:"/home/",color:"inherit"},"New Order"),r.a.createElement(g.a,{className:n.subNavButton,href:"/home/order/",color:"inherit"},"Current Order"),r.a.createElement(g.a,{className:n.subNavButton,href:"/home/orders/",color:"inherit"},"Past Orders"))),r.a.createElement("div",{className:n.cont},r.a.createElement("div",{className:n.maps}),r.a.createElement("div",{className:n.innerContent},r.a.createElement(x.a,{container:!0,spacing:3,className:n.orderforms},r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{variant:"h5",component:"h5",className:n.dealerHeading}),r.a.createElement("p",{style:{fontSize:"16px"}},r.a.createElement("strong",null,"Pickup:")," Breda Harbour, Breda, Netherlands"),r.a.createElement("p",{style:{fontSize:"16px"}},r.a.createElement("strong",null,"Dropoff:")," Rotterdam Harbour, Rotterdam, Netherlands"),r.a.createElement(d.a,{className:n.paper},r.a.createElement(p.Link,{style:{textDecoration:"none"},to:"/home/"},r.a.createElement(g.a,{className:n.searchAgainButton,size:"large",variant:"contained",color:"primary"},"Search Again")))),r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{variant:"h5",component:"h5",className:n.dealerHeading},B.length," suppliers found"),E))))))}},tRbT:function(e,a,t){"use strict";var n=t("Ff2n"),r=t("wx14"),i=t("q1tI"),o=t("iuhU"),c=t("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var m=i.forwardRef((function(e,a){var t=e.alignContent,c=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,p=e.classes,m=e.className,d=e.component,x=void 0===d?"div":d,g=e.container,u=void 0!==g&&g,f=e.direction,h=void 0===f?"row":f,b=e.item,v=void 0!==b&&b,w=e.justify,E=void 0===w?"flex-start":w,N=e.lg,S=void 0!==N&&N,y=e.md,k=void 0!==y&&y,B=e.sm,j=void 0!==B&&B,z=e.spacing,C=void 0===z?0:z,W=e.wrap,I=void 0===W?"wrap":W,R=e.xl,O=void 0!==R&&R,L=e.xs,T=void 0!==L&&L,D=e.zeroMinWidth,M=void 0!==D&&D,H=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(p.root,m,u&&[p.container,0!==C&&p["spacing-xs-".concat(String(C))]],v&&p.item,M&&p.zeroMinWidth,"row"!==h&&p["direction-xs-".concat(String(h))],"wrap"!==I&&p["wrap-xs-".concat(String(I))],"stretch"!==l&&p["align-items-xs-".concat(String(l))],"stretch"!==c&&p["align-content-xs-".concat(String(c))],"flex-start"!==E&&p["justify-xs-".concat(String(E))],!1!==T&&p["grid-xs-".concat(String(T))],!1!==j&&p["grid-sm-".concat(String(j))],!1!==k&&p["grid-md-".concat(String(k))],!1!==S&&p["grid-lg-".concat(String(S))],!1!==O&&p["grid-xl-".concat(String(O))]);return i.createElement(x,Object(r.a)({className:G,ref:a},H))})),d=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(t["spacing-".concat(a,"-").concat(n)]={margin:"-".concat(p(r,2)),width:"calc(100% + ".concat(p(r),")"),"& > $item":{padding:p(r,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(a,t){return function(e,a,t){var n={};l.forEach((function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(r.a)(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a}),{}))}),{name:"MuiGrid"})(m);a.a=d}}]);
//# sourceMappingURL=component---src-pages-home-results-js-02cd3c50eb4246f33bcb.js.map