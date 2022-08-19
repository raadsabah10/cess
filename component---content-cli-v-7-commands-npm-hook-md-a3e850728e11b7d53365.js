(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"6ieD":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},i={_frontmatter:r},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm hook ls [pkg]\nnpm hook add <entity> <url> <secret>\nnpm hook update <id> <url> [secret]\nnpm hook rm <id>\n")),Object(o.b)("p",null,"Note: This command is unaware of workspaces."),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,"Allows you to manage ",Object(o.b)("a",{parentName:"p",href:"https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm"},"npm\nhooks"),",\nincluding adding, removing, listing, and updating."),Object(o.b)("p",null,"Hooks allow you to configure URL endpoints that will be notified whenever a\nchange happens to any of the supported entity types. Three different types\nof entities can be watched by hooks: packages, owners, and scopes."),Object(o.b)("p",null,"To create a package hook, simply reference the package name."),Object(o.b)("p",null,"To create an owner hook, prefix the owner name with ",Object(o.b)("inlineCode",{parentName:"p"},"~")," (as in,\n",Object(o.b)("inlineCode",{parentName:"p"},"~youruser"),")."),Object(o.b)("p",null,"To create a scope hook, prefix the scope name with ",Object(o.b)("inlineCode",{parentName:"p"},"@")," (as in,\n",Object(o.b)("inlineCode",{parentName:"p"},"@yourscope"),")."),Object(o.b)("p",null,"The hook ",Object(o.b)("inlineCode",{parentName:"p"},"id")," used by ",Object(o.b)("inlineCode",{parentName:"p"},"update")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rm")," are the IDs listed in ",Object(o.b)("inlineCode",{parentName:"p"},"npm hook ls"),"\nfor that particular hook."),Object(o.b)("p",null,"The shared secret will be sent along to the URL endpoint so you can verify\nthe request came from your own configured hook."),Object(o.b)("h3",null,"Example"),Object(o.b)("p",null,"Add a hook to watch a package for changes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add lodash https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"Add a hook to watch packages belonging to the user ",Object(o.b)("inlineCode",{parentName:"p"},"substack"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add ~substack https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"Add a hook to watch packages in the scope ",Object(o.b)("inlineCode",{parentName:"p"},"@npm")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add @npm https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"List all your active hooks:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook ls\n")),Object(o.b)("p",null,"List your active hooks for the ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," package:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook ls lodash\n")),Object(o.b)("p",null,"Update an existing hook's url:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook update id-deadbeef https://my-new-website.here/\n")),Object(o.b)("p",null,"Remove a hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook rm id-deadbeef\n")),Object(o.b)("h3",null,"Configuration"),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"registry")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Default: "',Object(o.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(o.b)("li",{parentName:"ul"},"Type: URL")),Object(o.b)("p",null,"The base URL of the npm registry."),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"otp")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: null"),Object(o.b)("li",{parentName:"ul"},"Type: null or String")),Object(o.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(o.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(o.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(o.b)("h3",null,"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm"},'"Introducing Hooks" blog post'))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,E=n("MfeC");function N(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},l)))}N.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=N,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),v=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,k=r.description,N=r.status,A=r.source,D=r.additionalContributors,H=void 0===D?[]:D,R=E.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(p.a,{title:y,description:k}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(v,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},y),k))),null!=R?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:R,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(T,null,N||A?i.a.createElement(o.k,{mb:3,alignItems:"center"},N?i.a.createElement(j.a,{status:N}):null,i.a.createElement(o.e,{mx:"auto"}),A?i.a.createElement(O.a,{href:A}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-hook-md-a3e850728e11b7d53365.js.map