(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),m=n("pD55"),b=n("8Aig"),s=n("ReZb"),p=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var k=N,w=n("MfeC");function E(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=E,v=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,E=o.status,D=o.source,R=o.additionalContributors,z=void 0===R?[]:R,H=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:y,description:N}),r.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=H?r.a.createElement(I,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,E||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(g.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(j.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},b6u2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"  npm token list [--json|--parseable]\n  npm token create [--read-only] [--cidr=1.1.1.1/24,2.2.2.2/16]\n  npm token revoke <id|token>\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This lets you list, create and revoke authentication tokens."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm token list"),":\nShows a table of all active authentication tokens. You can request\nthis as JSON with ",Object(l.b)("inlineCode",{parentName:"li"},"--json")," or tab-separated values with ",Object(l.b)("inlineCode",{parentName:"li"},"--parseable"),".")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"+--------+---------+------------+----------+----------------+\n| id     | token   | created    | read-only | CIDR whitelist |\n+--------+---------+------------+----------+----------------+\n| 7f3134 | 1fa9ba… | 2017-10-02 | yes      |                |\n+--------+---------+------------+----------+----------------+\n| c03241 | af7aef… | 2017-10-02 | no       | 192.168.0.1/24 |\n+--------+---------+------------+----------+----------------+\n| e0cf92 | 3a436a… | 2017-10-02 | no       |                |\n+--------+---------+------------+----------+----------------+\n| 63eb9d | 74ef35… | 2017-09-28 | no       |                |\n+--------+---------+------------+----------+----------------+\n| 2daaa8 | cbad5f… | 2017-09-26 | no       |                |\n+--------+---------+------------+----------+----------------+\n| 68c2fe | 127e51… | 2017-09-23 | no       |                |\n+--------+---------+------------+----------+----------------+\n| 6334e1 | 1dadd1… | 2017-09-23 | no       |                |\n+--------+---------+------------+----------+----------------+\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"npm token create [--read-only] [--cidr=<cidr-ranges>]"),":\nCreate a new authentication token. It can be ",Object(l.b)("inlineCode",{parentName:"p"},"--read-only"),", or accept\na list of\n",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR"),"\nranges with which to limit use of this token. This will prompt you for\nyour password, and, if you have two-factor authentication enabled, an\notp."),Object(l.b)("p",{parentName:"li"},"Currently, the cli can not generate automation tokens. Please refer to\nthe ",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-and-viewing-access-tokens"},"docs\nwebsite"),"\nfor more information on generating automation tokens."))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"+----------------+--------------------------------------+\n| token          | a73c9572-f1b9-8983-983d-ba3ac3cc913d |\n+----------------+--------------------------------------+\n| cidr_whitelist |                                      |\n+----------------+--------------------------------------+\n| readonly       | false                                |\n+----------------+--------------------------------------+\n| created        | 2017-10-02T07:52:24.838Z             |\n+----------------+--------------------------------------+\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm token revoke <token|id>"),":\nImmediately removes an authentication token from the registry.  You\nwill no longer be able to use it.  This can accept both complete\ntokens (such as those you get back from ",Object(l.b)("inlineCode",{parentName:"li"},"npm token create"),", and those\nfound in your ",Object(l.b)("inlineCode",{parentName:"li"},".npmrc"),"), and ids as seen in the parseable or json\noutput of ",Object(l.b)("inlineCode",{parentName:"li"},"npm token list"),".  This will NOT accept the truncated token\nfound in the normal ",Object(l.b)("inlineCode",{parentName:"li"},"npm token list")," output.")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"read-only")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"This is used to mark a token as unable to publish when configuring limited\naccess tokens with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm token create")," command."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"cidr")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String (can be set multiple times)")),Object(l.b)("p",null,"This is a list of CIDR address to be used when configuring limited access\ntokens with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm token create")," command."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"registry")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "',Object(l.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(l.b)("li",{parentName:"ul"},"Type: URL")),Object(l.b)("p",null,"The base URL of the npm registry."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"otp")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-adduser"},"npm adduser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-whoami"},"npm whoami")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-profile"},"npm profile"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-token-md-6738909bf36c48d79f32.js.map