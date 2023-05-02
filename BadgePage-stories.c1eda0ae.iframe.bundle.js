"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[636],{"./stories/BadgePage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgePage_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx"),Carousel=__webpack_require__("./node_modules/@mantine/carousel/esm/Carousel.js"),use_media_query=__webpack_require__("./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),ActionIcon=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Popover=__webpack_require__("./node_modules/@mantine/core/esm/Popover/Popover.js"),Input=__webpack_require__("./node_modules/@mantine/core/esm/Input/Input.js"),CopyButton=__webpack_require__("./node_modules/@mantine/core/esm/CopyButton/CopyButton.js"),Tabs=__webpack_require__("./node_modules/@mantine/core/esm/Tabs/Tabs.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),PostFAQ=__webpack_require__("./src/components/post/PostFAQ.tsx"),PostOverview=__webpack_require__("./src/components/post/PostOverview.tsx"),create_safe_context=__webpack_require__("./node_modules/@mantine/utils/esm/create-safe-context/create-safe-context.js");const[GridProvider,useGridContext]=(0,create_safe_context.R)("Grid component was not found in tree");var get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),default_theme=__webpack_require__("./node_modules/@mantine/styles/esm/theme/default-theme.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const getColumnFlexBasis=(colSpan,columns)=>"content"===colSpan?"auto":"auto"===colSpan?"0rem":colSpan?100/(columns/colSpan)+"%":void 0,getColumnMaxWidth=(colSpan,columns,grow)=>grow||"auto"===colSpan||"content"===colSpan?"unset":getColumnFlexBasis(colSpan,columns),getColumnFlexGrow=(colSpan,grow)=>{if(colSpan)return"auto"===colSpan||grow?1:0},getColumnOffset=(offset,columns)=>0===offset?0:offset?100/(columns/offset)+"%":void 0,getGutterSize=(gutter,theme)=>void 0!==gutter?`calc(${(0,get_size.a)({size:gutter,sizes:theme.spacing})} / 2)`:void 0;function getBreakpointsStyles({sizes,offsets,orders,theme,columns,gutters,grow}){return default_theme.j1.reduce(((acc,size)=>(acc[`@media (min-width: ${(0,rem.em)(theme.breakpoints[size])})`]={order:orders[size],flexBasis:getColumnFlexBasis(sizes[size],columns),padding:getGutterSize(gutters[size],theme),flexShrink:0,width:"content"===sizes[size]?"auto":void 0,maxWidth:getColumnMaxWidth(sizes[size],columns,grow),marginLeft:getColumnOffset(offsets[size],columns),flexGrow:getColumnFlexGrow(sizes[size],grow)},acc)),{})}const Col_styles=(0,create_styles.k)(((theme,{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,grow,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,columns,span,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl})=>({col:__spreadValues({boxSizing:"border-box",flexGrow:getColumnFlexGrow(span,grow),order,padding:getGutterSize(gutter,theme),marginLeft:getColumnOffset(offset,columns),flexBasis:getColumnFlexBasis(span,columns),flexShrink:0,width:"content"===span?"auto":void 0,maxWidth:getColumnMaxWidth(span,columns,grow)},getBreakpointsStyles({sizes:{xs,sm,md,lg,xl},offsets:{xs:offsetXs,sm:offsetSm,md:offsetMd,lg:offsetLg,xl:offsetXl},orders:{xs:orderXs,sm:orderSm,md:orderMd,lg:orderLg,xl:orderXl},gutters:{xs:gutterXs,sm:gutterSm,md:gutterMd,lg:gutterLg,xl:gutterXl},theme,columns,grow}))})));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Col_defProp=Object.defineProperty,Col_getOwnPropSymbols=Object.getOwnPropertySymbols,Col_hasOwnProp=Object.prototype.hasOwnProperty,Col_propIsEnum=Object.prototype.propertyIsEnumerable,Col_defNormalProp=(obj,key,value)=>key in obj?Col_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={};const Col=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("GridCol",defaultProps,props),{children,span,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl,className,id,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Col_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Col_getOwnPropSymbols)for(var prop of Col_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Col_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),ctx=useGridContext(),colSpan=span||ctx.columns,{classes,cx}=Col_styles({gutter:ctx.gutter,gutterXs:ctx.gutterXs,gutterSm:ctx.gutterSm,gutterMd:ctx.gutterMd,gutterLg:ctx.gutterLg,gutterXl:ctx.gutterXl,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl,grow:ctx.grow,columns:ctx.columns,span:colSpan},{unstyled,name:"Grid",variant});return!function isValidSpan(span){return"auto"===span||"content"===span||"number"==typeof span&&span>0&&span%1==0}(colSpan)||colSpan>ctx.columns?null:react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))Col_hasOwnProp.call(b,prop)&&Col_defNormalProp(a,prop,b[prop]);if(Col_getOwnPropSymbols)for(var prop of Col_getOwnPropSymbols(b))Col_propIsEnum.call(b,prop)&&Col_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.col,className),ref},others),children)}));Col.displayName="@mantine/core/Col";var Grid_styles_defProp=Object.defineProperty,Grid_styles_getOwnPropSymbols=Object.getOwnPropertySymbols,Grid_styles_hasOwnProp=Object.prototype.hasOwnProperty,Grid_styles_propIsEnum=Object.prototype.propertyIsEnumerable,Grid_styles_defNormalProp=(obj,key,value)=>key in obj?Grid_styles_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,Grid_styles_spreadValues=(a,b)=>{for(var prop in b||(b={}))Grid_styles_hasOwnProp.call(b,prop)&&Grid_styles_defNormalProp(a,prop,b[prop]);if(Grid_styles_getOwnPropSymbols)for(var prop of Grid_styles_getOwnPropSymbols(b))Grid_styles_propIsEnum.call(b,prop)&&Grid_styles_defNormalProp(a,prop,b[prop]);return a};function getGutterStyles(gutters,theme){return default_theme.j1.reduce(((acc,size)=>(void 0!==gutters[size]&&(acc[`@media (min-width: ${theme.breakpoints[size]})`]={margin:`calc(-${(0,get_size.a)({size:gutters[size],sizes:theme.spacing})} / 2)`}),acc)),{})}const Grid_styles=(0,create_styles.k)(((theme,{justify,align,gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl})=>({root:Grid_styles_spreadValues({margin:`calc(-${(0,get_size.a)({size:gutter,sizes:theme.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:justify,alignItems:align},getGutterStyles({xs:gutterXs,sm:gutterSm,md:gutterMd,lg:gutterLg,xl:gutterXl},theme))})));var Grid_defProp=Object.defineProperty,Grid_getOwnPropSymbols=Object.getOwnPropertySymbols,Grid_hasOwnProp=Object.prototype.hasOwnProperty,Grid_propIsEnum=Object.prototype.propertyIsEnumerable,Grid_defNormalProp=(obj,key,value)=>key in obj?Grid_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const Grid_defaultProps={gutter:"md",justify:"flex-start",align:"stretch",columns:12},Grid=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Grid",Grid_defaultProps,props),{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,children,grow,justify,align,columns,className,id,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Grid_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Grid_getOwnPropSymbols)for(var prop of Grid_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Grid_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes,cx}=Grid_styles({gutter,justify,align,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl},{unstyled,name:"Grid",variant});return react.createElement(GridProvider,{value:{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,grow,columns}},react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))Grid_hasOwnProp.call(b,prop)&&Grid_defNormalProp(a,prop,b[prop]);if(Grid_getOwnPropSymbols)for(var prop of Grid_getOwnPropSymbols(b))Grid_propIsEnum.call(b,prop)&&Grid_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),ref},others),children))}));Grid.Col=Col,Grid.displayName="@mantine/core/Grid";var createReactComponent=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js"),IconClockFilled=(0,createReactComponent.Z)("clock-filled","IconClockFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),IconPencil=(0,createReactComponent.Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]]),IconVideo=(0,createReactComponent.Z)("video","IconVideo",[["path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",key:"svg-0"}],["path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),IconPhoto=(0,createReactComponent.Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PostSyllabus_useStyles=(0,create_styles.k)((theme=>({wrapper:{paddingTop:`calc(${theme.spacing.xl} * 2)`,paddingBottom:`calc(${theme.spacing.xl} * 2)`,minHeight:650},title:{marginBottom:`calc(${theme.spacing.xl} * 1.5)`},sessionItem:{borderBottom:`1px solid ${theme.colors.gray[3]}`},control:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,[theme.fn.smallerThan("md")]:{width:"100%"}}})));function PostSyllabus(props){const{classes,cx}=PostSyllabus_useStyles(),title=props.syllabusTitle||"What You'll Learn",sessions=props.syllabusItems.map(((v,i)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Grid.Col,{span:3,pr:"9rem",children:[(0,jsx_runtime.jsx)(Text.x,{size:"sm",w:"max-content",mx:"auto",children:"SESSION"}),(0,jsx_runtime.jsx)(Text.x,{mt:5,w:"max-content",mx:"auto",weight:700,size:"2rem",children:i+1})]}),(0,jsx_runtime.jsx)(Grid.Col,{span:9,pb:40,className:cx({[classes.sessionItem]:i<props.syllabusItems.length-1}),children:(0,jsx_runtime.jsxs)(Stack.K,{spacing:20,children:[(0,jsx_runtime.jsxs)(Group.Z,{spacing:5,children:[(0,jsx_runtime.jsx)(IconClockFilled,{size:18}),(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:v.estimate})]}),(0,jsx_runtime.jsx)(Text.x,{size:"lg",children:v.title}),(0,jsx_runtime.jsx)(Text.x,{size:"md",children:v.description}),(0,jsx_runtime.jsxs)(Group.Z,{spacing:5,children:[(0,jsx_runtime.jsx)(IconPencil,{size:18}),(0,jsx_runtime.jsxs)(Text.x,{size:"sm",children:[v.questionCount," questions"]}),!!v.videoCount&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconVideo,{size:18}),(0,jsx_runtime.jsxs)(Text.x,{size:"sm",children:[v.videoCount," videos"]})]}),!!v.imageCount&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconPhoto,{size:18}),(0,jsx_runtime.jsxs)(Text.x,{size:"sm",children:[v.imageCount," images"]})]})]}),(0,jsx_runtime.jsx)("div",{style:{width:"max-content"},children:(0,jsx_runtime.jsx)(Button.z,{onClick:()=>props.onStartSyllabusItem&&props.onStartSyllabusItem(v),variant:"gradient",gradient:{from:"indigo",to:"cyan"},size:"md",className:classes.control,mt:10,children:"Get started"})})]})})]})));return(0,jsx_runtime.jsxs)(Container.W,{fluid:!0,p:25,mx:0,className:classes.wrapper,children:[(0,jsx_runtime.jsx)(Title.D,{className:classes.title,children:title}),(0,jsx_runtime.jsx)(Grid,{children:sessions})]})}PostSyllabus.displayName="PostSyllabus";try{PostSyllabus.displayName="PostSyllabus",PostSyllabus.__docgenInfo={description:"PostSyllabus",displayName:"PostSyllabus",props:{syllabusTitle:{defaultValue:null,description:"",name:"syllabusTitle",required:!1,type:{name:"string"}},syllabusItems:{defaultValue:null,description:"",name:"syllabusItems",required:!0,type:{name:"SyllabusItem[]"}},onStartSyllabusItem:{defaultValue:null,description:"",name:"onStartSyllabusItem",required:!1,type:{name:"((item: SyllabusItem) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/post/PostSyllabus.tsx#PostSyllabus"]={docgenInfo:PostSyllabus.__docgenInfo,name:"PostSyllabus",path:"src/components/post/PostSyllabus.tsx#PostSyllabus"})}catch(__react_docgen_typescript_loader_error){}var numbers=__webpack_require__("./src/utils/numbers.ts"),PostDots=__webpack_require__("./src/components/post/PostDots.tsx"),IconTransitionRight=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTransitionRight.js"),IconBrandGoogle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGoogle.js"),IconLetterC=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLetterC.js"),IconBrandWhatsapp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandWhatsapp.js"),IconBrandFacebook=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandFacebook.js"),IconBrandTwitter=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTwitter.js"),IconAt=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAt.js"),IconBrandReddit=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandReddit.js"),IconBrandLinkedin=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.js"),IconThumbUp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),IconThumbUpFilled=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUpFilled.js"),IconBookmark=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmark.js"),IconBookmarkOff=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmarkOff.js"),IconTargetArrow=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTargetArrow.js"),IconShare3=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconShare3.js"),IconCopy=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.js");const BadgePage_useStyles=(0,create_styles.k)((theme=>({root:{marginTop:"-1rem",marginLeft:"-1rem",maxWidth:"initial"},inner:{display:"flex",position:"relative",justifyContent:"space-between",[theme.fn.smallerThan("md")]:{flexDirection:"column"}},dots:{position:"absolute",color:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.gray[1],[theme.fn.smallerThan("md")]:{display:"none"}},content:{zIndex:1,paddingTop:`calc(${theme.spacing.xl} * 4)`,paddingBottom:`calc(${theme.spacing.xl} * 3)`,width:"100%",overflowX:"hidden",[theme.fn.smallerThan("md")]:{marginRight:0}},title:{color:theme.white,textAlign:"center",fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontWeight:900,lineHeight:1.05,maxWidth:(0,rem.h)(500),fontSize:(0,rem.h)(48)},control:{paddingLeft:(0,rem.h)(50),paddingRight:(0,rem.h)(50),fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontSize:(0,rem.h)(22),[theme.fn.smallerThan("md")]:{width:"100%"}}}))),FAQ_QUESTIONS=[{control:"When can I start this badge?",panel:""},{control:"Can I earn class credit for this badge?",panel:""},{control:"How do I assign a badge?",panel:""},{control:"How do I submit a badge?",panel:""},{control:"Can I try a badge for free?",panel:""},{control:"Who can I contact if I have another question?",panel:""}],SHARE_LINKS=[{title:"Assign",icon:IconTransitionRight.Z,onClick:props=>props.onAssign&&props.onAssign()},{title:"Google",icon:IconBrandGoogle.Z,href:"https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fclassroom.google.com&passive=true"},{title:"Clever",icon:IconLetterC.Z,href:"https://clever.com/login"},{title:"WhatsApp",icon:IconBrandWhatsapp.Z,href:props=>`https://api.whatsapp.com/send/?text=${encodeURIComponent(props.href)}`},{title:"Facebook",icon:IconBrandFacebook.Z,href:"https://www.facebook.com/login"},{title:"Twitter",icon:IconBrandTwitter.Z,href:"https://twitter.com/i/flow/login"},{title:"Email",icon:IconAt.Z,href:props=>`mailto:?body=${encodeURIComponent(props.href)}`},{title:"Reddit",icon:IconBrandReddit.Z,href:props=>`https://www.reddit.com/submit?url=${encodeURIComponent(props.href)}`},{title:"LinkedIn",icon:IconBrandLinkedin.Z,href:"https://www.linkedin.com/checkpoint/lg/login"}];function BadgePage(props){const{classes}=BadgePage_useStyles(),theme=(0,MantineProvider.rZ)(),mobile=(0,use_media_query.a)(`(max-width: ${theme.breakpoints.sm})`),LikeIcon=props.liked?IconThumbUpFilled.Z:IconThumbUp.Z,SaveIcon=props.saved?IconBookmarkOff.Z:IconBookmark.Z,likeLabel=props.liked?"Liked by you":"Like",saveLabel=props.saved?"Saved for later":"Save",likes=props.likes||0,shareLinks=SHARE_LINKS.map((l=>(0,jsx_runtime.jsx)(Carousel.l.Slide,{py:6,size:20,children:(0,jsx_runtime.jsxs)(Stack.K,{w:"3.5rem",align:"center",spacing:10,children:[!!l.href&&(0,jsx_runtime.jsx)(ActionIcon.A,{component:react_router_dom_dist.rU,to:l.href?"string"==typeof l.href?l.href:l.href(props):"#",target:"_blank",onClick:()=>props.onShare&&props.onShare(l.title),rel:"noopener noreferrer",size:"xl",variant:"light",radius:"xl",children:(0,jsx_runtime.jsx)(l.icon,{size:"1rem"})}),!!l.onClick&&(0,jsx_runtime.jsx)(ActionIcon.A,{onClick:()=>{l.onClick(props)},size:"xl",variant:"light",radius:"xl",children:(0,jsx_runtime.jsx)(l.icon,{size:"1rem"})}),(0,jsx_runtime.jsx)(Text.x,{color:"dark.4",size:"xs",children:l.title})]})})));return(0,jsx_runtime.jsxs)(Container.W,{className:classes.root,fluid:!0,size:"lg",px:0,pb:"xl",children:[(0,jsx_runtime.jsxs)(Stack.K,{pl:0,pr:5,pb:5,sx:theme=>({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:theme.fn.gradient({from:"blue.9",to:"blue.5",deg:20}),color:theme.white}),children:[(0,jsx_runtime.jsx)(PostDots.v,{className:classes.dots,style:{left:0,top:0}}),(0,jsx_runtime.jsx)(PostDots.v,{className:classes.dots,style:{left:60,top:0}}),(0,jsx_runtime.jsx)(PostDots.v,{className:classes.dots,style:{left:0,top:140}}),(0,jsx_runtime.jsx)(PostDots.v,{className:classes.dots,style:{right:25,top:60}}),(0,jsx_runtime.jsxs)(Stack.K,{spacing:25,px:0,className:classes.content,align:"center",children:[(0,jsx_runtime.jsx)(IconTargetArrow.Z,{size:24}),(0,jsx_runtime.jsx)(Title.D,{className:classes.title,children:props.title}),(0,jsx_runtime.jsx)("div",{style:{width:"max-content"},children:(0,jsx_runtime.jsx)(Button.z,{onClick:props.onStart,variant:"gradient",gradient:{from:"indigo",to:"cyan"},size:"xl",className:classes.control,mt:10,children:"Get started"})})]}),(0,jsx_runtime.jsxs)(Stack.K,{ml:"auto",mb:5,mr:5,children:[likes>1&&(0,jsx_runtime.jsxs)(Group.Z,{ml:"auto",pr:5,spacing:2,color:"white",children:[(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:"Liked by"}),(0,jsx_runtime.jsxs)(Text.x,{size:"sm",weight:700,children:[(0,numbers.J)(likes),"+"]}),(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:"people"})]}),(0,jsx_runtime.jsxs)(Button.z.Group,{children:[(0,jsx_runtime.jsx)(Button.z,{radius:"lg",size:"xs",leftIcon:(0,jsx_runtime.jsx)(LikeIcon,{size:"1rem"}),variant:"filled",onClick:props.onLike,children:likeLabel}),(0,jsx_runtime.jsxs)(Popover.J,{position:"bottom-end",width:8*props.href.length,withArrow:!0,withinPortal:!0,shadow:"md",children:[(0,jsx_runtime.jsx)(Popover.J.Target,{children:(0,jsx_runtime.jsx)(Button.z,{size:"xs",leftIcon:(0,jsx_runtime.jsx)(IconShare3.Z,{size:"1rem"}),variant:"filled",children:"Share"})}),(0,jsx_runtime.jsx)(Popover.J.Dropdown,{w:"25rem !important",children:(0,jsx_runtime.jsxs)(Stack.K,{px:5,mx:0,spacing:15,children:[(0,jsx_runtime.jsx)(Text.x,{weight:700,size:"sm",color:"dark.4",mt:5,children:"Share"}),(0,jsx_runtime.jsx)(Carousel.l,{pl:"2rem",pr:0,slideGap:"xs",align:"start",slidesToScroll:mobile?2:4,styles:{controls:{paddingLeft:0,paddingRight:0},indicators:{bottom:"-0.5rem"},indicator:{backgroundColor:theme.colors.gray[6],width:(0,rem.h)(12),height:(0,rem.h)(4),transition:"width 250ms ease","&[data-active]":{width:(0,rem.h)(40)}}},children:shareLinks}),(0,jsx_runtime.jsxs)(Group.Z,{grow:!0,children:[(0,jsx_runtime.jsx)(Input.I,{disabled:!0,maw:"initial",value:props.href,icon:(0,jsx_runtime.jsx)(IconCopy.Z,{size:"1rem"}),placeholder:"Uh, something is not right"}),(0,jsx_runtime.jsx)(CopyButton.q,{value:props.href,children:({copied,copy})=>(0,jsx_runtime.jsx)(Button.z,{color:copied?"teal":"blue",onClick:()=>{copy(),props.onCopy&&props.onCopy()},children:copied?"Copied":"Copy"})})]})]})})]}),(0,jsx_runtime.jsx)(Button.z,{radius:"lg",size:"xs",leftIcon:(0,jsx_runtime.jsx)(SaveIcon,{size:"1rem"}),variant:"filled",onClick:props.onSave,children:saveLabel})]})]})]}),(0,jsx_runtime.jsxs)(Tabs.m,{defaultValue:"overview",children:[(0,jsx_runtime.jsxs)(Tabs.m.List,{children:[(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"overview",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"Overview"})}),(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"syllabus",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"Syllabus"})}),(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"faq",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"FAQ"})})]}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"overview",pt:"xs",children:(0,jsx_runtime.jsx)(PostOverview.j,{...props})}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"syllabus",pt:"xs",children:(0,jsx_runtime.jsx)(PostSyllabus,{...props})}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"faq",pt:"xs",children:(0,jsx_runtime.jsx)(PostFAQ.Z,{questions:FAQ_QUESTIONS})})]})]})}BadgePage.displayName="BadgePage";try{BadgePage.displayName="BadgePage",BadgePage.__docgenInfo={description:"BadgePage",displayName:"BadgePage",props:{overviewTitle:{defaultValue:null,description:"",name:"overviewTitle",required:!1,type:{name:"string"}},overviewDescription:{defaultValue:null,description:"",name:"overviewDescription",required:!1,type:{name:"string"}},overviewEstimate:{defaultValue:null,description:"",name:"overviewEstimate",required:!1,type:{name:"string"}},overviewTags:{defaultValue:null,description:"",name:"overviewTags",required:!0,type:{name:"string[]"}},syllabusTitle:{defaultValue:null,description:"",name:"syllabusTitle",required:!1,type:{name:"string"}},syllabusItems:{defaultValue:null,description:"",name:"syllabusItems",required:!0,type:{name:"SyllabusItem[]"}},onStartSyllabusItem:{defaultValue:null,description:"",name:"onStartSyllabusItem",required:!1,type:{name:"((item: SyllabusItem) => void)"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},liked:{defaultValue:null,description:"",name:"liked",required:!1,type:{name:"boolean"}},saved:{defaultValue:null,description:"",name:"saved",required:!1,type:{name:"boolean"}},likes:{defaultValue:null,description:"",name:"likes",required:!1,type:{name:"number"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"(() => void)"}},onLike:{defaultValue:null,description:"",name:"onLike",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onAssign:{defaultValue:null,description:"",name:"onAssign",required:!1,type:{name:"(() => void)"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"(() => void)"}},onShare:{defaultValue:null,description:"",name:"onShare",required:!1,type:{name:"((via: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/post/badge/BadgePage.tsx#BadgePage"]={docgenInfo:BadgePage.__docgenInfo,name:"BadgePage",path:"src/pages/post/badge/BadgePage.tsx#BadgePage"})}catch(__react_docgen_typescript_loader_error){}const MOCK_SYLLABUS_ITEMS=[{title:"The Social Media Landscape",description:"This week you'll get an introduction to the Meta Social Media Marketing Professional Certificate program, then you'll dive into an introduction to marketing and social media marketing, learn about how businesses use social media and get a basic overview of the social media landscape.",estimate:"30m",videoCount:2,questionCount:10},{title:"Social Media Platforms Overview",description:"In week two, you'll learn the ins and outs of some of the major social media platforms as well as the differences between how individuals and businesses can and do use them.",estimate:"15m",questionCount:10},{title:"Goals and Planning for Success",description:"In week three, you'll dig into two foundational skills for a marketer, defining SMART goals and key performance indicators. These are key components in building out a marketing campaign no matter what platform you operate on. At the end of the week you'll complete your first project and apply your learning to a real life scenario.",estimate:"45m",videoCount:2,imageCount:3,questionCount:15}],MOCK_TAGS=["tag #1","tag #2","tag #3","tag #4","tag #5","tag #6","tag #7","tag #8","tag #9","tag #10","tag #11","tag #12","tag #13"],BadgePage_stories={title:"BadgePage",component:BadgePage,tags:["autodocs"],parameters:{layout:"fullscreen"}},Default={...{render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,page:(0,jsx_runtime.jsx)(BadgePage,{...args,title:args.title||"30 Second Elevator Pitch",likes:args.likes||3e4,href:"https://www.localcivics.io/L_1uo12y431982",overviewDescription:args.overviewDescription||"Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",overviewEstimate:args.overviewEstimate||"30m",overviewTags:args.overviewTags||MOCK_TAGS,syllabusItems:args.syllabusItems||MOCK_SYLLABUS_ITEMS})})})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);