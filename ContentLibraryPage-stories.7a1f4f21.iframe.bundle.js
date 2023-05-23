"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[299],{"./stories/ContentLibraryPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ContentLibraryPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),PostCard=__webpack_require__("./src/components/core/post/PostCard.tsx"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Anchor=__webpack_require__("./node_modules/@mantine/core/esm/Anchor/Anchor.js"),SimpleGrid=__webpack_require__("./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),LoadingOverlay=__webpack_require__("./node_modules/@mantine/core/esm/LoadingOverlay/LoadingOverlay.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),IconBook=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBook.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContentLibraryPage(props){const theme=(0,MantineProvider.rZ)(),dates=props.data?.map((d=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)(Flex.k,{children:[(0,jsx_runtime.jsx)(Title.D,{w:"100%",size:30,color:"dark.4",children:d.title}),(0,jsx_runtime.jsx)(Anchor.e,{to:d.href,component:react_router_dom_dist.rU,size:"sm",weight:600,underline:!0,miw:"max-content",children:"See all"})]}),(0,jsx_runtime.jsx)(SimpleGrid.M,{cols:3,spacing:"lg",breakpoints:[{maxWidth:"70rem",cols:2,spacing:"sm"},{maxWidth:"36rem",cols:1,spacing:"sm"}],children:d.content.map((p=>(0,jsx_runtime.jsx)(PostCard.y,{size:"sm",data:p,onLikeClick:()=>props.onLikePost&&props.onLikePost(p),onSave:()=>props.onSavePost&&props.onSavePost(p),onAssign:()=>props.onAssignPost&&props.onAssignPost(p),onOpen:()=>props.onOpenPost&&props.onOpenPost(p)},`${d.title}${p.href}`)))})]},d.title)));return(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Box.x,{pos:"relative",children:[(0,jsx_runtime.jsx)(LoadingOverlay.f,{visible:!!props.loading,overlayBlur:2}),(0,jsx_runtime.jsxs)(Stack.K,{spacing:"lg",children:[(0,jsx_runtime.jsxs)(Flex.k,{align:"center",gap:5,children:[(0,jsx_runtime.jsx)(IconBook.Z,{size:30,color:theme.colors.dark[4]}),(0,jsx_runtime.jsx)(Title.D,{size:30,color:"dark.4",children:"Library"})]}),dates]})]})})}ContentLibraryPage.displayName="ContentLibraryPage";try{ContentLibraryPage.displayName="ContentLibraryPage",ContentLibraryPage.__docgenInfo={description:"ContentLibraryPage",displayName:"ContentLibraryPage",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"{ title: string; href: string; content: PostCardData[]; }[]"}},onLikePost:{defaultValue:null,description:"",name:"onLikePost",required:!1,type:{name:"((post: PostCardData) => void)"}},onSavePost:{defaultValue:null,description:"",name:"onSavePost",required:!1,type:{name:"((post: PostCardData) => void)"}},onAssignPost:{defaultValue:null,description:"",name:"onAssignPost",required:!1,type:{name:"((post: PostCardData) => void)"}},onOpenPost:{defaultValue:null,description:"",name:"onOpenPost",required:!1,type:{name:"((post: PostCardData) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/content/ContentLibraryPage.tsx#ContentLibraryPage"]={docgenInfo:ContentLibraryPage.__docgenInfo,name:"ContentLibraryPage",path:"src/pages/content/ContentLibraryPage.tsx#ContentLibraryPage"})}catch(__react_docgen_typescript_loader_error){}var AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx");const ContentLibraryPage_stories={title:"Page/ContentLibraryPage",component:ContentLibraryPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},MOCK_DATA=[{title:"Liked content",content:[{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:4.567,liked:!0,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."}]},{title:"Saved for later",content:[{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:4.567,liked:!0,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4.167,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:2.567,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."}]},{title:"History",content:[{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:4.567,liked:!0,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4.167,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach",category:"Lesson Opportunity",rating:4,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."},{image:"https://cdn.localcivics.io/hub/landing.jpg",title:"Verudela Beach w. A Side of Fries",category:"Badge Opportunity",rating:2.567,description:"Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula."}]}],Default={...{render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,defaultActiveLinkName:"Home",page:(0,jsx_runtime.jsx)(ContentLibraryPage,{...args,data:args.data||MOCK_DATA})})})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/core/post/PostCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>PostCard});__webpack_require__("./node_modules/react/index.js");var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUpFilled.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmark.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTransitionRight.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconStarFilled.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mantine/core/esm/Card/Card.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mantine/core/esm/Spoiler/Spoiler.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mantine/core/esm/Menu/Menu.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@mantine/core/esm/Image/Image.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.k)((theme=>({card:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[7]:theme.white,height:"max-content"},section:{borderBottom:`${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.h)(1)} solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3]}`,paddingLeft:theme.spacing.md,paddingRight:theme.spacing.md,paddingBottom:theme.spacing.md},like:{color:theme.colors.blue[6]},rating:{color:theme.colors.yellow[6]},label:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontWeight:700,lineHeight:1},image:{cursor:"pointer"}}))),MIN_RATING=0;function PostCard(props){const{classes}=useStyles(),rating=props.data.rating||0,LikeIcon=props.data.liked?_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__.Z:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.Z;return"sm"===props.size?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Z,{withBorder:!0,radius:"md",p:"md",pt:"xl",className:classes.card,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Z.Section,{className:classes.section,mt:"md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.o,{maxHeight:120,hideLabel:"Show less",showLabel:"Show more",styles:{control:{fontSize:"0.9rem"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.k,{align:"start",wrap:"nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{fz:"lg",w:"100%",fw:500,children:props.data.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Target,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.A,{maw:"max-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_12__.Z,{size:"1rem",stroke:1.5})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Dropdown,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Item,{onClick:props.onSave,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__.Z,{size:"1rem",stroke:1.5}),children:"Save for later"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Item,{onClick:props.onAssign,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__.Z,{size:"1rem",stroke:1.5}),children:"Assign"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{fz:"0.8rem",mt:"xs",children:props.data.description})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_15__.Z,{mt:"xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_16__.z,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_17__.rU,to:props.data.href,px:5,radius:"md",style:{flex:1},onClick:props.onOpen,children:"Show details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.A,{onClick:props.onLikeClick,variant:"default",radius:"md",size:36,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LikeIcon,{size:"1.1rem",className:classes.like,stroke:1.5})}),rating>MIN_RATING&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.k,{gap:"0.2rem",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{ta:"center",fz:"sm",className:classes.label,children:rating.toFixed(1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_18__.Z,{className:classes.rating,size:"0.8rem"})]})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Z,{withBorder:!0,radius:"md",p:"md",className:classes.card,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Z.Section,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_19__.k,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_17__.rU,to:props.data.href,onClick:props.onOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_20__.E,{className:classes.image,src:props.data.image,alt:props.data.title,height:180})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Z.Section,{className:classes.section,mt:"md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.o,{maxHeight:120,hideLabel:"Show less",showLabel:"Show more",styles:{control:{fontSize:"0.9rem"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.k,{align:"start",wrap:"nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{fz:"lg",w:"100%",fw:500,children:props.data.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Target,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.A,{maw:"max-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_12__.Z,{size:"1rem",stroke:1.5})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Dropdown,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Item,{onClick:props.onSave,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_13__.Z,{size:"1rem",stroke:1.5}),children:"Save for later"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.v.Item,{onClick:props.onAssign,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_14__.Z,{size:"1rem",stroke:1.5}),children:"Assign"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{fz:"0.8rem",mt:"xs",children:props.data.description})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_15__.Z,{mt:"xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_16__.z,{component:react_router_dom__WEBPACK_IMPORTED_MODULE_17__.rU,to:props.data.href,px:5,radius:"md",style:{flex:1},onClick:props.onOpen,children:"Show details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.A,{onClick:props.onLikeClick,variant:"default",radius:"md",size:36,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LikeIcon,{size:"1.1rem",className:classes.like,stroke:1.5})}),rating>MIN_RATING&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.k,{gap:"0.2rem",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.x,{ta:"center",fz:"sm",className:classes.label,children:rating.toFixed(1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_18__.Z,{className:classes.rating,size:"0.8rem"})]})]})]})}PostCard.displayName="PostCard";try{PostCard.displayName="PostCard",PostCard.__docgenInfo={description:"PostCard",displayName:"PostCard",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"PostCardData"}},onLikeClick:{defaultValue:null,description:"",name:"onLikeClick",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onAssign:{defaultValue:null,description:"",name:"onAssign",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/core/post/PostCard.tsx#PostCard"]={docgenInfo:PostCard.__docgenInfo,name:"PostCard",path:"src/components/core/post/PostCard.tsx#PostCard"})}catch(__react_docgen_typescript_loader_error){}}}]);