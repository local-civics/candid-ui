"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[1647],{"./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SimpleGrid});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),breakpoints_breakpoints=__webpack_require__("./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),get_sorted_breakpoints=__webpack_require__("./node_modules/@mantine/core/esm/SimpleGrid/get-sorted-breakpoints/get-sorted-breakpoints.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const SimpleGrid_styles=(0,create_styles.k)(((theme,{spacing,breakpoints,cols,verticalSpacing})=>{const hasVerticalSpacing=null!=verticalSpacing,gridBreakpoints=(0,get_sorted_breakpoints.I)(theme,breakpoints).reduce(((acc,breakpoint)=>{var _a,_b;const property="maxWidth"in breakpoint?"max-width":"min-width",breakpointSize=(0,get_size.a)({size:"max-width"===property?breakpoint.maxWidth:breakpoint.minWidth,sizes:theme.breakpoints,units:"em"}),breakpointValue=(0,breakpoints_breakpoints.oI)(breakpointSize)-("max-width"===property?1:0);return acc[`@media (${property}: ${(0,rem.em)(breakpointValue)})`]={gridTemplateColumns:`repeat(${breakpoint.cols}, minmax(0, 1fr))`,gap:`${(0,get_size.a)({size:null!=(_a=breakpoint.verticalSpacing)?_a:hasVerticalSpacing?verticalSpacing:spacing,sizes:theme.spacing})} ${(0,get_size.a)({size:null!=(_b=breakpoint.spacing)?_b:spacing,sizes:theme.spacing})}`},acc}),{});return{root:__spreadValues({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,gap:`${(0,get_size.a)({size:hasVerticalSpacing?verticalSpacing:spacing,sizes:theme.spacing})} ${(0,get_size.a)({size:spacing,sizes:theme.spacing})}`},gridBreakpoints)}}));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),SimpleGrid_defProp=Object.defineProperty,SimpleGrid_getOwnPropSymbols=Object.getOwnPropertySymbols,SimpleGrid_hasOwnProp=Object.prototype.hasOwnProperty,SimpleGrid_propIsEnum=Object.prototype.propertyIsEnumerable,SimpleGrid_defNormalProp=(obj,key,value)=>key in obj?SimpleGrid_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={breakpoints:[],cols:1,spacing:"md"},SimpleGrid=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("SimpleGrid",defaultProps,props),{className,breakpoints,cols,spacing,verticalSpacing,children,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)SimpleGrid_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&SimpleGrid_getOwnPropSymbols)for(var prop of SimpleGrid_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&SimpleGrid_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes,cx}=SimpleGrid_styles({breakpoints,cols,spacing,verticalSpacing},{name:"SimpleGrid",unstyled,variant});return react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))SimpleGrid_hasOwnProp.call(b,prop)&&SimpleGrid_defNormalProp(a,prop,b[prop]);if(SimpleGrid_getOwnPropSymbols)for(var prop of SimpleGrid_getOwnPropSymbols(b))SimpleGrid_propIsEnum.call(b,prop)&&SimpleGrid_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),ref},others),children)}));SimpleGrid.displayName="@mantine/core/SimpleGrid"},"./node_modules/@mantine/core/esm/SimpleGrid/get-sorted-breakpoints/get-sorted-breakpoints.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>getSortedBreakpoints});var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js"),_mantine_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");function getSortedBreakpoints(theme,breakpoints){if(0===breakpoints.length)return breakpoints;const property="maxWidth"in breakpoints[0]?"maxWidth":"minWidth",sorted=[...breakpoints].sort(((a,b)=>(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.oI)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.a)({size:b[property],sizes:theme.breakpoints}))-(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.oI)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.a)({size:a[property],sizes:theme.breakpoints}))));return"minWidth"===property?sorted.reverse():sorted}},"./stories/LikedPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LikedPage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),TaskCard=__webpack_require__("./src/components/task/TaskCard.tsx"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),LoadingOverlay=__webpack_require__("./node_modules/@mantine/core/esm/LoadingOverlay/LoadingOverlay.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),SimpleGrid=__webpack_require__("./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js"),IconThumbUp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LikedPage(props){const theme=(0,MantineProvider.rZ)(),tasks=props.data?.map((p=>(0,jsx_runtime.jsx)(TaskCard.s,{size:"sm",data:p,onLikeClick:()=>props.onLikeTask&&props.onLikeTask(p),onSave:()=>props.onSaveTask&&props.onSaveTask(p),onAssign:()=>props.onAssignTask&&props.onAssignTask(p),onOpen:()=>props.onOpenTask&&props.onOpenTask(p)},p.href)));return(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Box.x,{pos:"relative",children:[(0,jsx_runtime.jsx)(LoadingOverlay.f,{visible:!!props.loading,overlayBlur:2}),(0,jsx_runtime.jsxs)(Stack.K,{spacing:"lg",children:[(0,jsx_runtime.jsxs)(Flex.k,{align:"center",gap:5,children:[(0,jsx_runtime.jsx)(IconThumbUp.Z,{size:30,color:theme.colors.dark[4]}),(0,jsx_runtime.jsx)(Title.D,{size:30,color:"dark.4",children:"Liked"})]}),(0,jsx_runtime.jsx)(SimpleGrid.M,{cols:3,spacing:"lg",breakpoints:[{maxWidth:"70rem",cols:2,spacing:"sm"},{maxWidth:"36rem",cols:1,spacing:"sm"}],children:tasks})]})]})})}LikedPage.displayName="LikedPage";try{LikedPage.displayName="LikedPage",LikedPage.__docgenInfo={description:"LikedPage",displayName:"LikedPage",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TaskData[]"}},onLikeTask:{defaultValue:null,description:"",name:"onLikeTask",required:!1,type:{name:"((data: TaskData) => void)"}},onSaveTask:{defaultValue:null,description:"",name:"onSaveTask",required:!1,type:{name:"((data: TaskData) => void)"}},onAssignTask:{defaultValue:null,description:"",name:"onAssignTask",required:!1,type:{name:"((data: TaskData) => void)"}},onOpenTask:{defaultValue:null,description:"",name:"onOpenTask",required:!1,type:{name:"((data: TaskData) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/task/LikedPage.tsx#LikedPage"]={docgenInfo:LikedPage.__docgenInfo,name:"LikedPage",path:"src/pages/task/LikedPage.tsx#LikedPage"})}catch(__react_docgen_typescript_loader_error){}var AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx");const LikedPage_stories={title:"Page/Library/LikedPage",component:LikedPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},MOCK_DATA=[{imageURL:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:4.567,liked:!0,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{imageURL:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4.167,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{imageURL:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{imageURL:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:2.567,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."}],Default={...{render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,defaultActiveLinkName:"Home",page:(0,jsx_runtime.jsx)(LikedPage,{...args,data:args.data||MOCK_DATA})})})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/badge/BadgeIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>BadgeIcon});var _styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/badge/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function BadgeIcon(props){const{classes,cx}=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.P)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:cx(classes.badgeIcon,{[classes.badgeIconLg]:"lg"===props.size}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{style:{width:"100%",height:"100%"},viewBox:"0 0 940 1100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[!!props.level&&props.level>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M482.921 47.8734L891.581 301.279C892.463 301.826 893 302.79 893 303.828V796.694C893 797.78 892.413 798.781 891.466 799.311L466.728 1037.16C465.809 1037.68 464.687 1037.67 463.772 1037.15L48.5103 799.603C47.5763 799.069 47 798.076 47 796.999V304.573C47 303.511 47.5618 302.528 48.4771 301.989L479.817 47.8383C480.777 47.2722 481.973 47.2857 482.921 47.8734Z",fill:"none",stroke:"#1EE2B0",strokeWidth:"94"}),!!props.level&&props.level>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M494.044 136.608L824.747 341.5C832.987 346.606 838 355.609 838 365.302V764.144C838 774.282 832.52 783.628 823.672 788.579L479.785 980.994C471.211 985.791 460.749 985.744 452.219 980.868L116.106 788.758C107.383 783.773 102 774.496 102 764.449V366.047C102 356.129 107.247 346.95 115.795 341.918L465.092 136.281C474.055 131.004 485.203 131.13 494.044 136.608Z",fill:"none",stroke:"#FFD44D",strokeWidth:"44"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M467.125 26.2992C476.092 21.0157 487.25 21.1418 496.095 26.6267L904.756 280.032C912.991 285.138 918 294.139 918 303.828V796.694C918 806.828 912.523 816.172 903.681 821.124L478.943 1058.98C470.364 1063.78 459.894 1063.73 451.359 1058.85L36.0968 821.304C27.3791 816.317 22 807.043 22 796.999V304.573C22 294.658 27.2435 285.483 35.786 280.449L467.125 26.2992Z",fill:"none",stroke:"#3BD0F2",strokeWidth:"44"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classes.badgeIconImageContainer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",height:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{"data-cache":"disabled","data-src":props.iconURL,className:classes.badgeIconImage,viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"})})})]})}BadgeIcon.displayName="BadgeIcon";try{BadgeIcon.displayName="BadgeIcon",BadgeIcon.__docgenInfo={description:"BadgeIcon",displayName:"BadgeIcon",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},totalNumberOfLikes:{defaultValue:null,description:"",name:"totalNumberOfLikes",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},etc:{defaultValue:null,description:"",name:"etc",required:!1,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"string[]"}},avgRating:{defaultValue:null,description:"",name:"avgRating",required:!1,type:{name:"number"}},preview:{defaultValue:null,description:"",name:"preview",required:!1,type:{name:"{ title: string; }[]"}},numberOfQuestions:{defaultValue:null,description:"",name:"numberOfQuestions",required:!1,type:{name:"number"}},uploadedOn:{defaultValue:null,description:"",name:"uploadedOn",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"FormItemData[]"}},timeSpent:{defaultValue:null,description:"",name:"timeSpent",required:!1,type:{name:"number"}},elapsedTime:{defaultValue:null,description:"",name:"elapsedTime",required:!1,type:{name:"number"}},stopWatchStarted:{defaultValue:null,description:"",name:"stopWatchStarted",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"available"'},{value:'"in progress"'},{value:'"locked"'},{value:'"completed"'}]}},syllabus:{defaultValue:null,description:"",name:"syllabus",required:!1,type:{name:"BadgeSyllabusData"}},level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"number"}},iconURL:{defaultValue:null,description:"",name:"iconURL",required:!1,type:{name:"string"}},userLiked:{defaultValue:null,description:"",name:"userLiked",required:!1,type:{name:"boolean"}},userSaved:{defaultValue:null,description:"",name:"userSaved",required:!1,type:{name:"boolean"}},userReflection:{defaultValue:null,description:"",name:"userReflection",required:!1,type:{name:"string"}},userRating:{defaultValue:null,description:"",name:"userRating",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/BadgeIcon.tsx#BadgeIcon"]={docgenInfo:BadgeIcon.__docgenInfo,name:"BadgeIcon",path:"src/components/badge/BadgeIcon.tsx#BadgeIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/badge/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>useBadgeStyles});const useBadgeStyles=(0,__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js").k)((theme=>({badgeButton:{"&:hover":{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.blue[6]}},badgeIcon:{width:"100px",height:"100px",position:"relative",overflow:"hidden",marginLeft:"auto",marginRight:"auto"},badgeIconLg:{width:"150px",height:"150px"},badgeIconImageContainer:{position:"absolute",left:0,right:0,top:0,bottom:0,margin:"auto"},badgeIconImage:{margin:"auto",width:"40px",height:"40px",verticalAlign:"middle"},badgeSyllabusWrapper:{paddingTop:`calc(${theme.spacing.xl} * 2)`,paddingBottom:`calc(${theme.spacing.xl} * 2)`,minHeight:650},badgeSyllabusTitle:{marginBottom:`calc(${theme.spacing.xl} * 1.5)`},badgeSyllabusSessionItem:{borderBottom:`1px solid ${theme.colors.gray[3]}`},badgeSyllabusControl:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,[theme.fn.smallerThan("md")]:{width:"100%"}}})))},"./src/components/task/TaskCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>TaskCard});__webpack_require__("./node_modules/react/index.js");var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUpFilled.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmark.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTransitionRight.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconStarFilled.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mantine/core/esm/Card/Card.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mantine/core/esm/Spoiler/Spoiler.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mantine/core/esm/Menu/Menu.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@mantine/core/esm/Image/Image.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/badge/BadgeIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.k)((theme=>({card:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[7]:theme.white,height:"max-content"},cardLg:{display:"flex",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[7]:theme.white,height:"max-content"},section:{borderBottom:`${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.h)(1)} solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3]}`,paddingLeft:theme.spacing.md,paddingRight:theme.spacing.md,paddingBottom:theme.spacing.md},sectionRight:{borderBottom:`${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.h)(1)} solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3]}`,paddingLeft:theme.spacing.md,paddingRight:theme.spacing.lg,paddingBottom:theme.spacing.md,flexBasis:"90%"},like:{color:theme.colors.blue[6]},rating:{color:theme.colors.yellow[6]},label:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontWeight:700,lineHeight:1},image:{cursor:"pointer"}}))),MIN_RATING=0;function TaskCard(props){const{classes}=useStyles(),rating=props.data.avgRating||0,LikeIcon=props.data.userLiked?_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.Z:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__.Z;return"sm"===props.size?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{withBorder:!0,radius:"md",p:"md",pt:"xl",className:classes.card,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z.Section,{className:classes.section,mt:"md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.o,{maxHeight:120,hideLabel:"Show less",showLabel:"Show more",styles:{control:{fontSize:"0.9rem"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{align:"start",wrap:"nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"lg",w:"100%",fw:500,children:props.data.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Target,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{maw:"max-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__.Z,{size:"1rem",stroke:1.5})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Dropdown,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onSave,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__.Z,{size:"1rem",stroke:1.5}),children:"Save for later"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onAssign,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_15__.Z,{size:"1rem",stroke:1.5}),children:"Assign"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"0.8rem",mt:"xs",children:props.data.description})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_16__.Z,{mt:"xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_17__.z,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",px:5,radius:"md",style:{flex:1},onClick:props.onOpen,children:"Show details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:props.onLikeClick,variant:"default",radius:"md",size:36,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LikeIcon,{size:"1.1rem",className:classes.like,stroke:1.5})}),rating>MIN_RATING&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{gap:"0.2rem",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{ta:"center",fz:"sm",className:classes.label,children:rating.toFixed(1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_19__.Z,{className:classes.rating,size:"0.8rem"})]})]})]}):"lg"===props.size?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{withBorder:!0,radius:"md",p:"md",className:classes.cardLg,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z.Section,{w:300,p:0,children:[!!props.data.iconURL&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_20__.k,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",onClick:props.onOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_21__.x,{py:30,px:20,h:"100%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_1__.V,{...props.data})})}),!props.data.iconURL&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_20__.k,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",onClick:props.onOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_22__.E,{h:"100%",className:classes.image,src:props.data.imageURL,alt:props.data.title})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z.Section,{className:classes.sectionRight,mt:"md",ml:20,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{align:"start",wrap:"nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"lg",fw:500,lineClamp:1,children:props.data.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_21__.x,{ml:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Target,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{maw:"max-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__.Z,{size:"1rem",stroke:1.5})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Dropdown,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onSave,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__.Z,{size:"1rem",stroke:1.5}),children:"Save for later"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onAssign,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_15__.Z,{size:"1rem",stroke:1.5}),children:"Assign"})]})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"0.8rem",mt:"xs",lineClamp:1,pr:10,children:props.data.description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_16__.Z,{mt:"lg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:props.onLikeClick,variant:"default",radius:"md",size:36,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LikeIcon,{size:"1.1rem",className:classes.like,stroke:1.5})}),rating>MIN_RATING&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{gap:"0.2rem",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{ta:"center",fz:"sm",className:classes.label,children:rating.toFixed(1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_19__.Z,{className:classes.rating,size:"0.8rem"})]})]})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{withBorder:!0,radius:"md",p:"md",className:classes.card,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z.Section,{children:[!!props.data.iconURL&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_20__.k,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",onClick:props.onOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_21__.x,{py:20,px:10,h:180,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_1__.V,{...props.data,size:"lg"})})}),!props.data.iconURL&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_20__.k,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",onClick:props.onOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_22__.E,{className:classes.image,src:props.data.imageURL,alt:props.data.title,height:180})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z.Section,{className:classes.section,mt:"md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.o,{maxHeight:120,hideLabel:"Show less",showLabel:"Show more",styles:{control:{fontSize:"0.9rem"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{align:"start",wrap:"nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"lg",w:"100%",fw:500,children:props.data.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Target,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{maw:"max-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__.Z,{size:"1rem",stroke:1.5})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Dropdown,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onSave,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__.Z,{size:"1rem",stroke:1.5}),children:"Save for later"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.v.Item,{onClick:props.onAssign,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_15__.Z,{size:"1rem",stroke:1.5}),children:"Assign"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{fz:"0.8rem",mt:"xs",children:props.data.description})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_16__.Z,{mt:"xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_17__.z,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_18__.rU,to:props.data.href||"",px:5,radius:"md",style:{flex:1},onClick:props.onOpen,children:"Show details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_12__.A,{onClick:props.onLikeClick,variant:"default",radius:"md",size:36,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LikeIcon,{size:"1.1rem",className:classes.like,stroke:1.5})}),rating>MIN_RATING&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{gap:"0.2rem",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.x,{ta:"center",fz:"sm",className:classes.label,children:rating.toFixed(1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_19__.Z,{className:classes.rating,size:"0.8rem"})]})]})]})}TaskCard.displayName="TaskCard";try{TaskCard.displayName="TaskCard",TaskCard.__docgenInfo={description:"TaskCard",displayName:"TaskCard",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TaskData"}},onLikeClick:{defaultValue:null,description:"",name:"onLikeClick",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onAssign:{defaultValue:null,description:"",name:"onAssign",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/task/TaskCard.tsx#TaskCard"]={docgenInfo:TaskCard.__docgenInfo,name:"TaskCard",path:"src/components/task/TaskCard.tsx#TaskCard"})}catch(__react_docgen_typescript_loader_error){}}}]);