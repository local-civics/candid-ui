"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[561],{"./src/components/user/helpers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>buildUserAvatarURL});var avatar_initials__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/avatar-initials/esm/index.js");function buildUserAvatarURL(url,name,settings){if(url||!name)return url;let initials=name.split(/[ -]/).map((n=>n.charAt(0))).join("");return avatar_initials__WEBPACK_IMPORTED_MODULE_0__.Z.initialAvatar({background:"transparent",color:"#fff",fontFamily:"'Lato', 'Lato-Regular', 'Helvetica Neue'",fontSize:24,fontWeight:350,size:60,initials,...settings})}},"./src/components/user/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useUserStyles});const useUserStyles=(0,__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js").k)((theme=>({userAvatar:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.colors.blue[7]},userAvatarButton:{cursor:"pointer",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.blue[6],"&:hover":{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.colors.blue[7]}}})))},"./src/layouts/app/AppLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>AppLayout});var react=__webpack_require__("./node_modules/react/index.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),AppShell=__webpack_require__("./node_modules/@mantine/core/esm/AppShell/AppShell.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Image=__webpack_require__("./node_modules/@mantine/core/esm/Image/Image.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),ActionIcon=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),Center=__webpack_require__("./node_modules/@mantine/core/esm/Center/Center.js"),Loader=__webpack_require__("./node_modules/@mantine/core/esm/Loader/Loader.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),ModalsProvider=__webpack_require__("./node_modules/@mantine/modals/esm/ModalsProvider.js"),Notifications=__webpack_require__("./node_modules/@mantine/notifications/esm/Notifications/Notifications.js"),IconBrandInstagram=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandInstagram.js"),IconBrandLinkedin=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.js"),IconBrandFacebook=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandFacebook.js"),IconEyeExclamation=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconEyeExclamation.js"),IconUserCircle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconUserCircle.js"),IconAt=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAt.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),Header=__webpack_require__("./node_modules/@mantine/core/esm/AppShell/Header/Header.js"),Burger=__webpack_require__("./node_modules/@mantine/core/esm/Burger/Burger.js"),Avatar=__webpack_require__("./node_modules/@mantine/core/esm/Avatar/Avatar.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),TextInput=__webpack_require__("./node_modules/@mantine/core/esm/TextInput/TextInput.js"),IconSearch=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.js"),IconArrowRight=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.js"),Menu=__webpack_require__("./node_modules/@mantine/core/esm/Menu/Menu.js"),IconCertificate2=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCertificate2.js"),IconChalkboard=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconChalkboard.js"),IconBuildingCommunity=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBuildingCommunity.js"),IconSettings=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.js"),IconAdjustmentsDollar=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustmentsDollar.js"),IconBatteryEco=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBatteryEco.js"),IconLogout=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.js"),helpers=__webpack_require__("./src/components/user/helpers.tsx"),styles=__webpack_require__("./src/components/user/styles.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UserAvatarButton(props){const{classes}=(0,styles.j)();if(!props.fullName||!props.email)return(0,jsx_runtime.jsx)(Button.z,{onClick:props.onSignIn,leftIcon:(0,jsx_runtime.jsx)(IconUserCircle.Z,{size:16}),variant:"outline",children:"Sign in"});const avatarURL=(0,helpers.x)(props.avatarURL,props.fullName);return(0,jsx_runtime.jsxs)(Menu.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,jsx_runtime.jsx)(Menu.v.Target,{children:(0,jsx_runtime.jsx)(Avatar.q,{size:30,className:classes.userAvatarButton,src:avatarURL,radius:"xl"})}),(0,jsx_runtime.jsxs)(Menu.v.Dropdown,{children:[(0,jsx_runtime.jsxs)("div",{style:{minWidth:"12rem",padding:"0.5rem",flex:1},children:[(0,jsx_runtime.jsx)(Text.x,{size:"sm",weight:500,children:props.fullName}),(0,jsx_runtime.jsx)(Text.x,{color:"dimmed",size:"xs",children:props.email})]}),(0,jsx_runtime.jsx)(Menu.v.Divider,{}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/my/profile",icon:(0,jsx_runtime.jsx)(IconCertificate2.Z,{size:"1rem",stroke:1.5}),children:"My profile"}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/my/classes",icon:(0,jsx_runtime.jsx)(IconChalkboard.Z,{size:"1rem",stroke:1.5}),children:"My classes"}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/my/organizations",icon:(0,jsx_runtime.jsx)(IconBuildingCommunity.Z,{size:"1rem",stroke:1.5}),children:"My organizations"}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/my/settings",icon:(0,jsx_runtime.jsx)(IconSettings.Z,{size:"1rem",stroke:1.5}),children:"My settings"}),(0,jsx_runtime.jsx)(Menu.v.Divider,{}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/upgrade",icon:(0,jsx_runtime.jsx)(IconAdjustmentsDollar.Z,{size:"1rem",stroke:1.5}),children:"Upgrade"}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/log-service",icon:(0,jsx_runtime.jsx)(IconBatteryEco.Z,{size:"1rem",stroke:1.5}),children:"Log service"}),(0,jsx_runtime.jsx)(Menu.v.Item,{component:dist.rU,to:"/sign-out",icon:(0,jsx_runtime.jsx)(IconLogout.Z,{size:"1rem",stroke:1.5}),children:"Sign out"})]})]})}UserAvatarButton.displayName="UserAvatarButton";try{UserAvatarButton.displayName="UserAvatarButton",UserAvatarButton.__docgenInfo={description:"UserAvatarButton",displayName:"UserAvatarButton",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!1,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string"}},impactStatement:{defaultValue:null,description:"",name:"impactStatement",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"BadgeData[]"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onSignIn:{defaultValue:null,description:"",name:"onSignIn",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/user/UserAvatarButton.tsx#UserAvatarButton"]={docgenInfo:UserAvatarButton.__docgenInfo,name:"UserAvatarButton",path:"src/components/user/UserAvatarButton.tsx#UserAvatarButton"})}catch(__react_docgen_typescript_loader_error){}const useStyles=(0,create_styles.k)((theme=>({search:{[theme.fn.smallerThan("sm")]:{display:"none"}}})));function AppHeader(props){const theme=(0,MantineProvider.rZ)(),{classes}=useStyles(),[query,setQuery]=react.useState("");return(0,jsx_runtime.jsx)(Header.h,{height:60,px:"xl",py:"xs",children:(0,jsx_runtime.jsxs)(Group.Z,{position:"apart",children:[(0,jsx_runtime.jsxs)(Group.Z,{position:"apart",spacing:"sm",children:[(0,jsx_runtime.jsx)(Burger.O,{opened:!1,onClick:props.onMenuClick,size:"sm"}),(0,jsx_runtime.jsx)(Center.M,{children:(0,jsx_runtime.jsx)(Avatar.q,{color:"blue",radius:"sm",children:(0,jsx_runtime.jsx)("div",{style:{width:15,marginLeft:"auto",marginRight:"auto"},children:(0,jsx_runtime.jsx)(Image.E,{fit:"contain",src:"https://cdn.localcivics.io/brand/l.png"})})})})]}),(0,jsx_runtime.jsx)(Flex.k,{className:classes.search,w:{base:200,sm:"auto"},mx:"auto",gap:"sm",justify:"center",align:"center",children:(0,jsx_runtime.jsx)(TextInput.o,{miw:{sm:450},icon:(0,jsx_runtime.jsx)(IconSearch.Z,{size:"1.1rem",stroke:1.5}),radius:"xl",size:"md",onChange:e=>setQuery(e.target.value),rightSection:(0,jsx_runtime.jsx)(ActionIcon.A,{onClick:()=>props.onSearch&&props.onSearch(query),size:32,radius:"xl",color:theme.primaryColor,variant:"filled",children:(0,jsx_runtime.jsx)(IconArrowRight.Z,{size:"1.1rem",stroke:1.5})}),placeholder:"Search",rightSectionWidth:42,...props})}),(0,jsx_runtime.jsx)(UserAvatarButton,{...props})]})})}AppHeader.displayName="AppHeader";try{AppHeader.displayName="AppHeader",AppHeader.__docgenInfo={description:"AppHeader",displayName:"AppHeader",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!1,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string"}},impactStatement:{defaultValue:null,description:"",name:"impactStatement",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"BadgeData[]"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onSignIn:{defaultValue:null,description:"",name:"onSignIn",required:!1,type:{name:"(() => void)"}},onMenuClick:{defaultValue:null,description:"",name:"onMenuClick",required:!0,type:{name:"() => void"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((q: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layouts/app/AppHeader.tsx#AppHeader"]={docgenInfo:AppHeader.__docgenInfo,name:"AppHeader",path:"src/layouts/app/AppHeader.tsx#AppHeader"})}catch(__react_docgen_typescript_loader_error){}var Navbar=__webpack_require__("./node_modules/@mantine/core/esm/AppShell/Navbar/Navbar.js"),ScrollArea=__webpack_require__("./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js"),IconHome2=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconHome2.js"),IconBook=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBook.js"),IconThumbUp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),IconLayoutKanban=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutKanban.js"),IconBookmark=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmark.js"),IconTimelineEvent=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTimelineEvent.js"),IconFlame=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconFlame.js"),IconMoodCheck=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconMoodCheck.js"),IconHourglassLow=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconHourglassLow.js"),IconBackpack=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBackpack.js"),IconBallpen=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBallpen.js"),IconSchool=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSchool.js"),IconGavel=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconGavel.js"),IconOlympics=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconOlympics.js"),IconPalette=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconPalette.js"),IconRecycle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconRecycle.js"),IconLivePhoto=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLivePhoto.js"),Icon360=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/Icon360.js"),IconHelpSquareRounded=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconHelpSquareRounded.js"),IconCookie=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCookie.js"),IconSectionSign=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSectionSign.js"),get_styles_ref=__webpack_require__("./node_modules/@mantine/styles/esm/tss/get-styles-ref.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),ThemeIcon=__webpack_require__("./node_modules/@mantine/core/esm/ThemeIcon/ThemeIcon.js");const AppLink_useStyles=(0,create_styles.k)(((theme,_params)=>{const icon=(0,get_styles_ref.A)("icon");return{controlButton:{cursor:"pointer"},badge:{pointerEvents:"none"},link:{...theme.fn.focusStyles(),display:"flex",alignItems:"center",textDecoration:"none",fontSize:theme.fontSizes.sm,color:"dark"===theme.colorScheme?theme.colors.dark[1]:theme.colors.gray[7],padding:`${theme.spacing.xs} ${theme.spacing.sm}`,borderRadius:theme.radius.sm,fontWeight:500,"&:hover":{backgroundColor:theme.fn.variant({variant:"light",color:theme.primaryColor}).background,color:theme.fn.variant({variant:"light",color:theme.primaryColor}).color,[`& .${icon}`]:{color:theme.fn.variant({variant:"light",color:theme.primaryColor}).color}}},linkActive:{"&, &:hover":{backgroundColor:theme.fn.variant({variant:"light",color:theme.primaryColor}).background,color:theme.fn.variant({variant:"light",color:theme.primaryColor}).color,[`& .${icon}`]:{color:theme.fn.variant({variant:"light",color:theme.primaryColor}).color}}},chevron:{transition:"transform 200ms ease"},linkIcon:{ref:icon}}}));function AppLink(props){const{classes,cx}=AppLink_useStyles();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Group.Z,{className:cx(classes.link,{[classes.linkActive]:!!props.isActive}),onClick:()=>props.onNavigate&&props.onNavigate(props.label),position:"apart",spacing:0,children:(0,jsx_runtime.jsxs)(Box.x,{sx:{display:"flex",alignItems:"center"},children:[(0,jsx_runtime.jsx)(ThemeIcon.k,{variant:"light",size:30,children:(0,jsx_runtime.jsx)(props.icon,{className:classes.linkIcon,size:18})}),(0,jsx_runtime.jsx)(Box.x,{ml:"md",children:(0,jsx_runtime.jsx)(Text.x,{component:dist.rU,to:props.href||"#",children:props.label})})]})})})}try{AppLink.displayName="AppLink",AppLink.__docgenInfo={description:"NavbarLink",displayName:"AppLink",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"Icon"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"((next: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layouts/app/AppLink.tsx#AppLink"]={docgenInfo:AppLink.__docgenInfo,name:"AppLink",path:"src/layouts/app/AppLink.tsx#AppLink"})}catch(__react_docgen_typescript_loader_error){}const AppNavbar_useStyles=(0,create_styles.k)(((theme,_params)=>({navbar:{height:"initial",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.white},sectionOne:{paddingBottom:theme.spacing.sm},section:{paddingTop:theme.spacing.sm,paddingBottom:theme.spacing.sm,borderTop:`1px solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[2]}`},sectionTitle:{color:"dark"===theme.colorScheme?theme.colors.dark[1]:theme.colors.gray[7]}})));function AppNavbar(props){const{classes,cx}=AppNavbar_useStyles(),[active,setActive]=react.useState(props.defaultActiveLinkName),onNavigate=next=>setActive(next);return(0,jsx_runtime.jsx)(Navbar.w,{width:{base:300},p:"sm",className:classes.navbar,children:(0,jsx_runtime.jsxs)(Navbar.w.Section,{component:ScrollArea.x,grow:!0,children:[(0,jsx_runtime.jsx)(Navbar.w.Section,{className:cx(classes.sectionOne),children:(0,jsx_runtime.jsx)(AppLink,{isActive:"Home"===active,icon:IconHome2.Z,href:"/home",label:"Home",onNavigate})}),(0,jsx_runtime.jsxs)(Navbar.w.Section,{className:cx(classes.section),children:[(0,jsx_runtime.jsx)(AppLink,{isActive:"Library"===active,icon:IconBook.Z,href:"/library",label:"Library",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Liked content"===active,icon:IconThumbUp.Z,href:"/library/liked-content",label:"Liked content",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Assignments"===active,icon:IconLayoutKanban.Z,href:"/library/assignments",label:"Assignments",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Saved for later"===active,icon:IconBookmark.Z,href:"/library/saved-for-later",label:"Saved for later",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"History"===active,icon:IconTimelineEvent.Z,href:"/library/history",label:"History",onNavigate})]}),(0,jsx_runtime.jsxs)(Navbar.w.Section,{className:cx(classes.section),children:[(0,jsx_runtime.jsx)(Title.D,{className:classes.sectionTitle,mb:5,size:"medium",children:"Explore"}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Trending"===active,icon:IconFlame.Z,href:"/feeds/trending",label:"Trending",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Top Rated"===active,icon:IconMoodCheck.Z,href:"/feeds/top-rated",label:"Top Rated",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Under 5min."===active,icon:IconHourglassLow.Z,href:"/feeds/under-5min",label:"Under 5min.",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Elementary & Middle School"===active,icon:IconBackpack.Z,href:"/feeds/elementary-and-middle-school",label:"Elementary & Middle School",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"High School"===active,icon:IconBallpen.Z,href:"/feeds/high-school",label:"High School",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"College & Career"===active,icon:IconSchool.Z,href:"/feeds/college-and-career",label:"College & Career",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Civics"===active,icon:IconGavel.Z,href:"/feeds/civics",label:"Civics",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Recreation"===active,icon:IconOlympics.Z,href:"/feeds/recreation",label:"Recreation",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Arts & Culture"===active,icon:IconPalette.Z,href:"/feeds/arts-and-culture",label:"Arts & Culture",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Volunteer"===active,icon:IconRecycle.Z,href:"/feeds/volunteer",label:"Volunteer",onNavigate}),(0,jsx_runtime.jsx)(AppLink,{isActive:"Live"===active,icon:IconLivePhoto.Z,href:"/feeds/live",label:"Live",onNavigate})]}),(0,jsx_runtime.jsxs)(Navbar.w.Section,{className:cx(classes.section),children:[(0,jsx_runtime.jsx)(AppLink,{icon:Icon360.Z,label:"Getting started",href:"/getting-started"}),(0,jsx_runtime.jsx)(AppLink,{icon:IconHelpSquareRounded.Z,label:"Help",href:"/help"}),(0,jsx_runtime.jsx)(AppLink,{icon:IconCookie.Z,label:"Privacy Policy",href:"/privacy-policy"}),(0,jsx_runtime.jsx)(AppLink,{icon:IconSectionSign.Z,label:"Terms & Conditions",href:"/terms-and-conditions"})]})]})})}AppNavbar.displayName="AppNavbar";try{AppNavbar.displayName="AppNavbar",AppNavbar.__docgenInfo={description:"AppNavbar",displayName:"AppNavbar",props:{defaultActiveLinkName:{defaultValue:null,description:"",name:"defaultActiveLinkName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layouts/app/AppNavbar.tsx#AppNavbar"]={docgenInfo:AppNavbar.__docgenInfo,name:"AppNavbar",path:"src/layouts/app/AppNavbar.tsx#AppNavbar"})}catch(__react_docgen_typescript_loader_error){}var use_media_query=__webpack_require__("./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js");const AppLayout_useStyles=(0,create_styles.k)((theme=>({footer:{paddingTop:theme.spacing.md,paddingBottom:theme.spacing.md,paddingLeft:theme.spacing.md,backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.colors.gray[0],borderTop:`1px solid ${"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.gray[2]}`,[theme.fn.largerThan("sm")]:{paddingTop:theme.spacing.xl,paddingBottom:theme.spacing.xl,paddingRight:100}},footerWithMenu:{paddingLeft:350},page:{},logo:{maxWidth:200,[theme.fn.smallerThan("sm")]:{display:"flex",flexDirection:"column",alignItems:"center"}},description:{marginTop:5,[theme.fn.smallerThan("sm")]:{marginTop:theme.spacing.xs,textAlign:"center"}},inner:{display:"flex",justifyContent:"space-between",[theme.fn.smallerThan("sm")]:{flexDirection:"column",alignItems:"center"}},groups:{display:"flex",flexWrap:"wrap",[theme.fn.smallerThan("sm")]:{display:"none"}},wrapper:{width:160},link:{display:"block",color:"dark"===theme.colorScheme?theme.colors.dark[1]:theme.colors.gray[6],fontSize:theme.fontSizes.sm,paddingTop:3,paddingBottom:3,"&:hover":{textDecoration:"underline"}},title:{fontSize:theme.fontSizes.md,fontWeight:700,fontFamily:`Greycliff CF, ${theme.fontFamily}`,marginBottom:theme.spacing.xs,color:"dark"===theme.colorScheme?theme.white:theme.black},afterFooter:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:theme.spacing.xl,paddingTop:theme.spacing.xl,paddingBottom:theme.spacing.xl,borderTop:`1px solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[2]}`,[theme.fn.smallerThan("sm")]:{flexDirection:"column"}},social:{[theme.fn.smallerThan("sm")]:{marginTop:theme.spacing.xs}}}))),AppLayout=props=>{const theme=(0,MantineProvider.rZ)(),{classes,cx}=AppLayout_useStyles(),isSmallDevice=(0,use_media_query.a)(`(max-width: ${theme.breakpoints.sm})`),[menu,setMenu]=react.useState(!isSmallDevice);react.useEffect((()=>{setMenu(!isSmallDevice)}),[isSmallDevice]);return(0,jsx_runtime.jsxs)(MantineProvider.Me,{withNormalizeCSS:!0,withGlobalStyles:!0,children:[(0,jsx_runtime.jsx)(Notifications.T,{limit:5}),(0,jsx_runtime.jsx)(ModalsProvider.$,{children:(0,jsx_runtime.jsx)(AppShell.V,{padding:"xs",header:(0,jsx_runtime.jsx)(AppHeader,{...props,onMenuClick:()=>setMenu(!menu)}),navbar:menu?(0,jsx_runtime.jsx)(AppNavbar,{...props}):void 0,footer:(0,jsx_runtime.jsxs)("footer",{className:cx(classes.footer,{[classes.footerWithMenu]:menu}),children:[(0,jsx_runtime.jsxs)(Container.W,{className:classes.inner,children:[(0,jsx_runtime.jsxs)("div",{className:classes.logo,children:[(0,jsx_runtime.jsxs)(Group.Z,{spacing:"xs",children:[(0,jsx_runtime.jsx)("div",{style:{width:15},children:(0,jsx_runtime.jsx)(Image.E,{fit:"contain",src:"https://cdn.localcivics.io/brand/l.png"})}),(0,jsx_runtime.jsx)(Title.D,{color:"dimmed",size:"h5",children:"Local Civics"})]}),(0,jsx_runtime.jsx)(Text.x,{size:"xs",color:"dimmed",className:classes.description,children:"We connect students to powerful civic learning experiences."})]}),(0,jsx_runtime.jsx)("div",{className:classes.groups,children:(0,jsx_runtime.jsxs)("div",{className:classes.wrapper,children:[(0,jsx_runtime.jsx)(Text.x,{className:classes.link,component:"a",href:"https://www.localcivics.io",target:"_blank",children:"About"}),(0,jsx_runtime.jsx)(Text.x,{className:classes.link,component:"a",href:"https://www.localcivics.io/terms-of-service",target:"_blank",children:"Terms"}),(0,jsx_runtime.jsx)(Text.x,{className:classes.link,component:"a",href:"https://www.localcivics.io/privacy-policy",target:"_blank",children:"Privacy"}),(0,jsx_runtime.jsx)(Text.x,{className:classes.link,component:"a",href:"https://localcivics.notion.site/Help-Center-b52300f587b64fc0a61f512686e7626d",target:"_blank",children:"Help Center"})]})})]}),(0,jsx_runtime.jsxs)(Container.W,{className:classes.afterFooter,children:[(0,jsx_runtime.jsxs)(Text.x,{color:"dimmed",size:"sm",children:["© ",(new Date).getFullYear()," Local Civics. All rights reserved."]}),(0,jsx_runtime.jsxs)(Group.Z,{spacing:0,className:classes.social,position:"right",noWrap:!0,children:[(0,jsx_runtime.jsx)(ActionIcon.A,{component:"a",target:"_blank",href:"https://www.instagram.com/localcivics/",size:"lg",children:(0,jsx_runtime.jsx)(IconBrandInstagram.Z,{size:18,stroke:1.5})}),(0,jsx_runtime.jsx)(ActionIcon.A,{component:"a",target:"_blank",href:"https://www.linkedin.com/company/localcivics",size:"lg",children:(0,jsx_runtime.jsx)(IconBrandLinkedin.Z,{size:18,stroke:1.5})}),(0,jsx_runtime.jsx)(ActionIcon.A,{component:"a",target:"_blank",href:"https://www.facebook.com/localcivics/",size:"lg",children:(0,jsx_runtime.jsx)(IconBrandFacebook.Z,{size:18,stroke:1.5})})]})]})]}),styles:theme=>({main:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[8]:theme.colors.gray[0]}}),children:(0,jsx_runtime.jsx)("div",{className:classes.page,style:{position:"relative"},children:(0,jsx_runtime.jsx)(Page,{...props})})})})]})};function Page(props){const theme=(0,MantineProvider.rZ)();return props.isLoading?(0,jsx_runtime.jsx)(Center.M,{style:{height:400},children:(0,jsx_runtime.jsx)(Loader.a,{})}):props.isSignInRequired?(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Stack.K,{mx:"auto",mt:100,maw:"max-content",align:"center",justify:"center",spacing:20,px:30,py:20,children:[(0,jsx_runtime.jsx)(Group.Z,{mx:"auto",children:(0,jsx_runtime.jsx)(IconEyeExclamation.Z,{size:75,color:theme.colors.dark[4]})}),props.signInRequiredTitle&&(0,jsx_runtime.jsx)(Title.D,{size:20,align:"center",color:"dark.4",children:props.signInRequiredTitle}),props.signInRequiredDescription&&(0,jsx_runtime.jsx)(Text.x,{align:"center",color:"dark.4",children:props.signInRequiredDescription}),(0,jsx_runtime.jsx)(Button.z,{variant:"filled",color:"dark",mx:"auto",maw:"max-content",onClick:props.onSignIn,leftIcon:(0,jsx_runtime.jsx)(IconUserCircle.Z,{size:16}),children:"Sign in"})]})}):props.isPermissionRequired?(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Stack.K,{mx:"auto",mt:100,maw:"max-content",align:"center",justify:"center",spacing:20,px:30,py:20,children:[(0,jsx_runtime.jsx)(Group.Z,{mx:"auto",children:(0,jsx_runtime.jsx)(IconEyeExclamation.Z,{size:75,color:theme.colors.dark[4]})}),(0,jsx_runtime.jsx)(Title.D,{size:20,align:"center",color:"dark.4",children:"You don't have permission"}),(0,jsx_runtime.jsx)(Text.x,{align:"center",color:"dark.4",children:"Contact customer support if you believe you should have access"}),(0,jsx_runtime.jsx)(Button.z,{component:dist.rU,variant:"filled",color:"dark",mx:"auto",maw:"max-content",to:"mailto:support@localcivics.io",leftIcon:(0,jsx_runtime.jsx)(IconAt.Z,{size:16}),children:"Contact us"})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.page})}AppLayout.displayName="AppLayout";try{AppLayout.displayName="AppLayout",AppLayout.__docgenInfo={description:"AppLayout",displayName:"AppLayout",props:{defaultActiveLinkName:{defaultValue:null,description:"",name:"defaultActiveLinkName",required:!1,type:{name:"string"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isSignInRequired:{defaultValue:null,description:"",name:"isSignInRequired",required:!1,type:{name:"boolean"}},isPermissionRequired:{defaultValue:null,description:"",name:"isPermissionRequired",required:!1,type:{name:"boolean"}},signInRequiredTitle:{defaultValue:null,description:"",name:"signInRequiredTitle",required:!1,type:{name:"string"}},signInRequiredDescription:{defaultValue:null,description:"",name:"signInRequiredDescription",required:!1,type:{name:"string"}},onSignIn:{defaultValue:null,description:"",name:"onSignIn",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layouts/app/AppLayout.tsx#AppLayout"]={docgenInfo:AppLayout.__docgenInfo,name:"AppLayout",path:"src/layouts/app/AppLayout.tsx#AppLayout"})}catch(__react_docgen_typescript_loader_error){}}}]);