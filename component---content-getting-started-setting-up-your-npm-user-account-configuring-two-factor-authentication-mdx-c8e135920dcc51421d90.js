(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),i=n("q1tI"),c=n.n(i),l=n("7ljp"),b=n("pD55"),p=n("8Aig"),m=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return c.a.createElement("strong",null,t)},g=n("gnlW"),O=n("mwnC"),f=n("/Rw0"),y=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return c.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,v=n("MfeC");function A(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,i.variant.title),c.a.createElement(A.Menu,{direction:e.direction,width:e.menuWidth},r)))}A.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var F=A,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),E=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,w=i.description,A=i.status,_=i.source,P=i.additionalContributors,I=void 0===P?[]:P,W=v.a.getVariantRoot(a.pathname);return c.a.createElement(l.a,{components:{Index:m.a,Note:s.a,Prompt:d,PromptReply:h,Screenshot:g.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(b.a,{title:j,description:w}),c.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),c.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(T,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},j),w))),null!=W?c.a.createElement(E,null,c.a.createElement(F,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(N,{items:n.tableOfContents.items})):null,c.a.createElement(C,null,A||_?c.a.createElement(o.k,{mb:3,alignItems:"center"},A?c.a.createElement(y.a,{status:A}):null,c.a.createElement(o.e,{mx:"auto"}),_?c.a.createElement(f.a,{href:_}):null):null,n.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:r.b,mr:2}):c.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(I.map((function(e){return{login:e}})))}))))))}},ttOR:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return g}));var a=n("zLVn"),o=n("q1tI"),r=n("7ljp"),i=n("O6H6"),c=n("4LHR"),l={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=b("Note"),m=b("Screenshot"),s=b("Prompt"),u=b("PromptReply"),d={_frontmatter:l},h=i.a;function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(h,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can enable two-factor authentication (2FA) on your npm user account to protect against unauthorized access to your account and packages, either by using a ",Object(r.b)("a",{parentName:"p",href:"https://webauthn.guide/"},"security-key")," or ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time-based_one-time_password"},"time-based one-time password (TOTP)")," from a mobile app."),Object(r.b)(p,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": The security-key flow using ",Object(r.b)("a",{parentName:"p",href:"https://webauthn.guide/"},"WebAuthn")," is currently in beta.")),Object(r.b)("h2",null,"Prerequisites"),Object(r.b)("p",null,"Before you enable 2FA on your npm user account, you must:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Update your npm client to version 5.5.1 or higher."),Object(r.b)("li",{parentName:"ul"},"To configure a security-key requires a modern browser that support ",Object(r.b)("a",{parentName:"li",href:"https://caniuse.com/#search=webauthn"},"WebAuthn"),". This will allow you to configure a biometric devices such as Apple ",Object(r.b)("a",{parentName:"li",href:"https://support.apple.com/en-gb/HT204587"},"Touch ID"),", ",Object(r.b)("a",{parentName:"li",href:"https://support.apple.com/en-us/HT208108"},"Face ID"),", or ",Object(r.b)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/windows/learn-about-windows-hello-and-set-it-up-dae28983-8242-bb2a-d3d1-87c9d265a5f0"},"Windows Hello")," as well as physical keys such as ",Object(r.b)("a",{parentName:"li",href:"https://www.yubico.com/"},"Yubikey"),", ",Object(r.b)("a",{parentName:"li",href:"https://thetis.io/"},"Thetis"),", or ",Object(r.b)("a",{parentName:"li",href:"https://www.ftsafe.com/"},"Feitian"),"."),Object(r.b)("li",{parentName:"ul"},"To configure TOTP you will need to install an authenticator application that can generate OTPs such as ",Object(r.b)("a",{parentName:"li",href:"https://authy.com/download/"},"Authy"),", ",Object(r.b)("a",{parentName:"li",href:"https://support.google.com/accounts/answer/1066447"},"Google Authenticator"),", or ",Object(r.b)("a",{parentName:"li",href:"https://www.microsoft.com/security/mobile-authenticator-app"},"Microsoft Authenticator")," on your mobile device.")),Object(r.b)("p",null,'For more information on supported 2FA methods, see "',Object(r.b)("a",{parentName:"p",href:"/about-two-factor-authentication"},"About two-factor authentication"),'".'),Object(r.b)(p,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," npm does not accept SMS (text-to-phone) as a 2FA method.")),Object(r.b)("h2",null,"Configuring 2FA from the website"),Object(r.b)("h3",null,"Enabling 2FA"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["user-login"].text),Object(r.b)(o.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["account-settings"].text),Object(r.b)(o.Fragment,null,c.a["account-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'On the account settings page, under "Two-Factor Authentication", click ',Object(r.b)("strong",{parentName:"p"},"Enable 2FA"),"."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-enable.png",alt:"Screenshot showing Enable 2FA button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted provide your current account password and then click ",Object(r.b)("strong",{parentName:"p"},"Confirm password to continue"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the 2FA method page, select the method you would like to enable and click ",Object(r.b)("strong",{parentName:"p"},"Continue"),'. For more information on supported 2FA methods, see "',Object(r.b)("a",{parentName:"p",href:"/about-two-factor-authentication"},"About two-factor authentication"),'".'),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/device-selection.png",alt:"Screenshot showing 2FA types",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure the 2FA method of your choice:"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When using a ",Object(r.b)("strong",{parentName:"p"},"security-key"),", provide a name for it and click ",Object(r.b)("strong",{parentName:"p"},"Add security key"),". Follow the browser specific steps to add your security-key."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-add-security-key.png",alt:"Screenshot showing security key setup",mdxType:"Screenshot"}),Object(r.b)("p",{parentName:"li"},"Below is an example of configuration from Microsoft Edge running on a MacOS"),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/touch-id-mac-edge.png",alt:"Screenshot showing 2FA device selection",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When using an ",Object(r.b)("strong",{parentName:"p"},"authenticator application")," on your phone, open it and scan the QR code on the two-step verification page. Enter the code generated by the app, then click ",Object(r.b)("strong",{parentName:"p"},"Verify"),"."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-verify.png",alt:"Screenshot showing 2FA device selection",mdxType:"Screenshot"}))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the recovery code page, copy the recovery codes to your computer or other safe location that is not your second factor device. We recommend using a password manager."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/recovery-code.png",alt:"Screenshot showing the Recovery Code page",mdxType:"Screenshot"}))),Object(r.b)("p",null,"   ",Object(r.b)("em",{parentName:"p"},"Recovery codes are the only way to recover your account if you lose access to your second factor device. Each code can be used only once. You can ",Object(r.b)("a",{parentName:"em",href:"/recovering-your-2fa-enabled-account#viewing-and-regenerating-recovery-code"},"view and regenerate your recovery code")," from your 2FA settings page.")),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Go back to settings")," after confirming that you have saved your codes.")),Object(r.b)("h3",null,"Disabling 2FA for writes"),Object(r.b)("p",null,"Check the ",Object(r.b)("a",{parentName:"p",href:"/about-two-factor-authentication#authorization-and-writes"},"Authorization and writes")," section for more information on different operations that requires 2FA when this mode is enabled."),Object(r.b)(p,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": As a recommended setting, 2FA for write operations are ",Object(r.b)("em",{parentName:"p"},"automatically enabled")," when setting up 2FA. The following steps explain how to disable it. ")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["user-login"].text),Object(r.b)(o.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["account-settings"].text),Object(r.b)(o.Fragment,null,c.a["account-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'On the account settings page, under "Two-Factor Authentication", click ',Object(r.b)("strong",{parentName:"p"},"Modify 2FA"),"."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-modify.png",alt:"Screenshot showing Modify 2FA button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'From the "Manage Two-Factor Authentication" navigate to "Additional Options" section')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Clear the checkbox for "Require two-factor authentication for write actions" and click "Update Preferences"'),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/disable-2fa-button.png",alt:"Screenshot showing a cleared check box to disable 2fa under Addition options",mdxType:"Screenshot"}))),Object(r.b)("h3",null,"Disabling 2FA"),Object(r.b)("p",null,"If you have 2FA enabled, you can remove it from your account settings page."),Object(r.b)(p,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' You cannot remove 2FA if you are a member of an organization that enforces 2FA. You can view the list of organizations memberships from your profile page under the "Organizations" tab.')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["user-login"].text),Object(r.b)(o.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["account-settings"].text),Object(r.b)(o.Fragment,null,c.a["account-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'On the account settings page, under "Two-Factor Authentication", click ',Object(r.b)("strong",{parentName:"p"},"Modify 2FA"),"."),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-modify.png",alt:"Screenshot showing Modify 2FA button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Scroll to the bottom of the "Manage Two-Factor Authentication" page and click Disable 2FA.'),Object(r.b)(m,{src:"/getting-started/setting-up-your-npm-user-account/2fa-disable.png",alt:"Screenshot showing Disable 2FA button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Agree to the prompt from the browser."))),Object(r.b)("h2",null,"Configuring 2FA from the command line"),Object(r.b)("h3",null,"Enabling 2FA from the command line"),Object(r.b)("p",null,"Although security-key with WebAuthn can be used for authentication from both the web and the command line, it can only be configured from the web. When enabling 2FA from the command line, currently the only available option is to use an TOTP mobile app."),Object(r.b)(p,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Settings you configure on the command line will also apply to your profile settings on the npm website.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you are logged out on the command line, log in using ",Object(r.b)("inlineCode",{parentName:"p"},"npm login")," command.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the command line, type the ",Object(r.b)("a",{parentName:"p",href:"/cli/profile"},Object(r.b)("inlineCode",{parentName:"a"},"npm profile"))," command along with the option for the 2FA mode you want to enable:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To enable 2FA for authorization and writes, type:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"npm profile enable-2fa auth-and-writes\n\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To enable 2FA for authorization only, type:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"npm profile enable-2fa auth-only\n"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To add npm to your authenticator application, using the device with the app, you can either:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Scan the QR code displayed on the command line."),Object(r.b)("li",{parentName:"ul"},"Type the number displayed below the QR code."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted to add an OTP code from your authenticator, on the command line, enter a one-time password generated by your authenticator app."))),Object(r.b)("h3",null,"Sending a one-time password from the command line"),Object(r.b)("p",null,"If you have enabled 2FA auth-and-writes, you will need to send the TOTP from the command line for certain commands to work. To do this, append  ",Object(r.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(r.b)("em",{parentName:"p"},"123456")," is the code generated by your authenticator) at the end of the command. Here are a few examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm publish [<tarball>|<folder>][--tag <tag>] --otp=123456\nnpm owner add <user > --otp=123456\nnpm owner rm <user> --otp=123456\nnpm dist-tags add <pkg>@<version> [<tag>] --otp=123456\nnpm access edit [<package>) --otp=123456\nnpm unpublish [<@scope>/]<pkg>[@<version>] --otp=123456\n")),Object(r.b)("h3",null,"Removing 2FA from the command line"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you are logged out on the command line, log in using ",Object(r.b)("inlineCode",{parentName:"p"},"npm login")," command.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the command line, type the following command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"npm profile disable-2fa\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted, enter your npm password:"),Object(r.b)(s,{mdxType:"Prompt"},"npm password:")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted for a one-time password, enter a password from your authenticator app:"),Object(r.b)(s,{mdxType:"Prompt"},"Enter one-time password from your authenticator: ",Object(r.b)(u,{mdxType:"PromptReply"},"123456")))),Object(r.b)("h2",null,"Resolving TOTP errors"),Object(r.b)("p",null,"If you are entering what seems to be a valid ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time-based_one-time_password"},"TOTP")," but you see an error, be sure that you are using the correct authenticator account. If you have multiple authenticator accounts, using an TOTP from the wrong account will cause an error."),Object(r.b)("p",null,"Also, when you reset two-factor authentication after it has been disabled, the authenticator might create a second account with the same name. Please see the authenticator documentation to delete the old account."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-configuring-two-factor-authentication-mdx-c8e135920dcc51421d90.js.map