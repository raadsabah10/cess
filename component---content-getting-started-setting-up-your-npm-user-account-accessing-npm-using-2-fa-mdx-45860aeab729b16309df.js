(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return l.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var j=w,k=n("MfeC");function v(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,i.variant.title),l.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,E=i.title,w=i.description,v=i.status,W=i.source,z=i.additionalContributors,H=void 0===z?[]:z,M=k.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:b,PromptReply:h,Screenshot:f.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(m.a,{title:E,description:w}),l.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),l.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},E),w))),null!=M?l.a.createElement(S,null,l.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?l.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(j,{items:n.tableOfContents.items})):null,l.a.createElement(P,null,v||W?l.a.createElement(o.k,{mb:3,alignItems:"center"},v?l.a.createElement(O.a,{status:v}):null,l.a.createElement(o.e,{mx:"auto"}),W?l.a.createElement(g.a,{href:W}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:r.b,mr:2}):l.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},VlP8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=l("Screenshot"),m=l("Prompt"),s={_frontmatter:i},p=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Sign in from the command line using security-key flow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the command line, type the ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/adduser"},Object(o.b)("inlineCode",{parentName:"a"},"npm login"))," command.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When prompted, provide your username, password, and email address."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"user@host:~$ npm login\nnpm notice Log in on https://registry.npmjs.org/\nUsername: mona\nPassword:\nEmail: (this IS public) mona@github.com\nnpm notice Open https://www.npmjs.com/login/913c3ab1-89a0-44bd-be8d-d946e2e906f0 to use your security key for authentication or enter OTP from your authenticator app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you have configured a security-key, open the provided URL shown in the command line. Alternatively, if you have configured a mobile authenticator skip to step 6.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("em",{parentName:"p"},"Use security key")," and follow the browser specific steps to authenticate."),Object(o.b)(c,{src:"/getting-started/setting-up-your-npm-user-account/2fa-use-security-key.png",alt:"Screenshot showing security key prompt",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the generated token"),Object(o.b)(c,{src:"/getting-started/setting-up-your-npm-user-account/webauthn-cli-login-token.png",alt:"Screenshot showing a sample token generated while using WebAuthn for cli login",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter the one-time password into the CLI prompt."),Object(o.b)(m,{mdxType:"Prompt"},"Enter one-time password:"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-accessing-npm-using-2-fa-mdx-45860aeab729b16309df.js.map