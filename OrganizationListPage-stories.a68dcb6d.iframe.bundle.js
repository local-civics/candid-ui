"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[735],{"./stories/OrganizationListPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,Joined:()=>Joined,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OrganizationListPage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Card=__webpack_require__("./node_modules/@mantine/core/esm/Card/Card.js"),Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Menu=__webpack_require__("./node_modules/@mantine/core/esm/Menu/Menu.js"),ActionIcon=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),Modal=__webpack_require__("./node_modules/@mantine/core/esm/Modal/Modal.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),Divider=__webpack_require__("./node_modules/@mantine/core/esm/Divider/Divider.js"),PinInput=__webpack_require__("./node_modules/@mantine/core/esm/PinInput/PinInput.js"),IconDotsVertical=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js"),IconDoorExit=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDoorExit.js"),IconBuildingCommunity=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBuildingCommunity.js"),IconBarcode=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBarcode.js"),events=__webpack_require__("./node_modules/@mantine/modals/esm/events.js"),PlaceholderBanner=__webpack_require__("./src/components/core/placeholder/PlaceholderBanner.tsx"),use_form=__webpack_require__("./node_modules/@mantine/form/esm/use-form.js"),SummaryGrid=__webpack_require__("./src/components/core/summary/SummaryGrid.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,create_styles.k)((theme=>({card:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[7]:theme.white,height:"max-content",width:"20rem"},section:{borderBottom:`${(0,rem.h)(1)} solid ${"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3]}`,paddingLeft:theme.spacing.md,paddingRight:theme.spacing.md,paddingBottom:theme.spacing.md}})));function OrganizationListPage(props){const theme=(0,MantineProvider.rZ)(),{classes}=useStyles(),form=function useForm(props){const form=(0,use_form.c)({initialValues:{opened:!1,stage:-1,node:void 0,name:"",code:""},transformValues:values=>({name:values.name})}),open=stage=>form.setValues({...form.values,opened:!0,stage}),close=()=>form.setValues({...form.values,opened:!1}),join=()=>{close(),form.reset(),props.onJoin&&props.onJoin(form.values.code)},cancel=()=>{close(),form.reset()};return{opened:form.values.opened,open,children:()=>form.values.node?form.values.node:0===form.getInputProps("stage").value?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Text.x,{size:14,pb:10,children:"Organization code"}),(0,jsx_runtime.jsx)(PinInput.E,{...form.getInputProps("code"),length:6}),(0,jsx_runtime.jsxs)(Group.Z,{ml:"auto",w:"max-content",mt:"md",spacing:10,children:[(0,jsx_runtime.jsx)(Button.z,{variant:"default",type:"button",onClick:cancel,children:"Cancel"}),(0,jsx_runtime.jsx)(Button.z,{disabled:form.values.code.length<6,type:"submit",onClick:join,children:"Join"})]})]}):null}}(props),joined=props.data.organizations.filter((v=>"member"===v.status)).map((v=>(0,jsx_runtime.jsxs)(Card.Z,{withBorder:!0,radius:"md",p:"md",className:classes.card,children:[(0,jsx_runtime.jsx)(Card.Z.Section,{sx:theme=>({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:theme.fn.gradient({from:"blue.8",to:"blue.7",deg:20}),color:theme.white}),px:20,pt:20,pb:50,children:(0,jsx_runtime.jsxs)(Group.Z,{grow:!0,align:"start",position:"apart",spacing:0,children:[(0,jsx_runtime.jsx)(Text.x,{fz:"lg",maw:"initial",fw:500,children:v.name}),(0,jsx_runtime.jsxs)(Menu.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,jsx_runtime.jsx)(Menu.v.Target,{children:(0,jsx_runtime.jsx)(ActionIcon.A,{variant:"transparent",maw:"max-content",children:(0,jsx_runtime.jsx)(IconDotsVertical.Z,{color:"white",size:"1rem",stroke:1.5})})}),(0,jsx_runtime.jsx)(Menu.v.Dropdown,{children:(0,jsx_runtime.jsx)(Menu.v.Item,{color:"red",icon:(0,jsx_runtime.jsx)(IconDoorExit.Z,{size:"1rem",stroke:1.5}),onClick:()=>{events.qk.openConfirmModal({title:"Leave Organization",centered:!0,children:(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:"Are you sure you want to leave your organization? You will no longer be able to access it's content."}),labels:{confirm:"Leave Organization",cancel:"No don't leave"},confirmProps:{color:"red"},onConfirm:()=>props.onLeave&&props.onLeave(v)})},children:"Leave"})})]})]})}),(0,jsx_runtime.jsx)(Card.Z.Section,{className:classes.section,mt:"md",children:(0,jsx_runtime.jsx)(Group.Z,{spacing:20})})]},v.name)));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Modal.u,{opened:form.opened,onClose:close,size:"auto",withCloseButton:!1,centered:!0,children:form.children()}),(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Stack.K,{spacing:10,children:[(0,jsx_runtime.jsxs)(Flex.k,{children:[(0,jsx_runtime.jsxs)(Group.Z,{w:"100%",children:[(0,jsx_runtime.jsx)(IconBuildingCommunity.Z,{color:theme.colors.dark[4]}),(0,jsx_runtime.jsx)(Title.D,{color:"dark.4",children:"Organizations"})]}),(0,jsx_runtime.jsx)(Button.z,{onClick:()=>form.open(0),maw:"max-content",variant:"subtle",leftIcon:(0,jsx_runtime.jsx)(IconBarcode.Z,{}),children:"Join"})]}),(0,jsx_runtime.jsx)(SummaryGrid.E,{data:props.data.summary}),(0,jsx_runtime.jsx)(Divider.i,{}),(0,jsx_runtime.jsx)(Title.D,{mt:10,underline:!0,size:"sm",color:"dark.4",children:"Joined"}),(0,jsx_runtime.jsxs)(Flex.k,{mt:10,gap:15,children:[!!joined.length&&joined,!joined.length&&(0,jsx_runtime.jsx)(PlaceholderBanner.V,{title:"No joined organizations"})]})]})})]})}try{OrganizationListPage.displayName="OrganizationListPage",OrganizationListPage.__docgenInfo={description:"OrganizationListPage",displayName:"OrganizationListPage",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ summary: SummaryData; organizations: OrganizationData[]; }"}},onJoin:{defaultValue:null,description:"",name:"onJoin",required:!1,type:{name:"((code: string) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((data: OrganizationData) => void)"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"((data: OrganizationData) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/organization/OrganizationListPage.tsx#OrganizationListPage"]={docgenInfo:OrganizationListPage.__docgenInfo,name:"OrganizationListPage",path:"src/pages/organization/OrganizationListPage.tsx#OrganizationListPage"})}catch(__react_docgen_typescript_loader_error){}const MOCK_DATA={organizations:[{name:"Organization #1",status:"admin"},{name:"Organization #2",status:"admin"},{name:"Organization #3",status:"member"},{name:"Organization #4",status:"member"},{name:"Organization #5",status:"archived"},{name:"Organization #6",status:"archived"}]},OrganizationListPage_stories={title:"Page/OrganizationListPage",component:OrganizationListPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},Template={args:{data:{organizations:[],summary:[{title:"Organizations",value:MOCK_DATA.organizations.length,description:"Total # of organizations"}]}},render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,page:(0,jsx_runtime.jsx)(OrganizationListPage,{...args})})})})},Empty={...Template},Joined={...Template,args:{...Template.args,data:{...MOCK_DATA,organizations:MOCK_DATA.organizations.filter((a=>"member"===a.status))}}};Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Empty.parameters?.docs?.source}}},Joined.parameters={...Joined.parameters,docs:{...Joined.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    ...Template.args,\n    data: {\n      ...MOCK_DATA,\n      organizations: MOCK_DATA.organizations.filter(a => a.status === 'member')\n    }\n  }\n}",...Joined.parameters?.docs?.source}}};const __namedExportsOrder=["Empty","Joined"]},"./src/components/core/placeholder/PlaceholderBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PlaceholderBanner});__webpack_require__("./node_modules/react/index.js");var _mantine_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.k)((theme=>({wrapper:{display:"flex",alignItems:"center",borderRadius:theme.radius.md,backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[8]:theme.white,border:`1px solid ${"dark"===theme.colorScheme?theme.colors.dark[8]:theme.colors.gray[3]}`,[`@media (max-width: ${theme.breakpoints.sm}px)`]:{flexDirection:"column-reverse",padding:theme.spacing.xl}},title:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,textAlign:"center",fontWeight:900,fontSize:(0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.h)(100),maxWidth:"50rem",lineHeight:1,marginBottom:`calc(${theme.spacing.xl} * 1.5)`,color:"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[2],[theme.fn.smallerThan("sm")]:{fontSize:(0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.h)(50)}}})));function PlaceholderBanner(props){const{classes}=useStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Z,{spacing:20,p:50,className:classes.wrapper,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:classes.title,children:props.title})})}PlaceholderBanner.displayName="PlaceholderBanner";try{PlaceholderBanner.displayName="PlaceholderBanner",PlaceholderBanner.__docgenInfo={description:"PlaceholderBanner",displayName:"PlaceholderBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/core/placeholder/PlaceholderBanner.tsx#PlaceholderBanner"]={docgenInfo:PlaceholderBanner.__docgenInfo,name:"PlaceholderBanner",path:"src/components/core/placeholder/PlaceholderBanner.tsx#PlaceholderBanner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/core/summary/SummaryGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>SummaryGrid});__webpack_require__("./node_modules/react/index.js");var _mantine_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mantine/core/esm/Paper/Paper.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mantine/core/esm/ThemeIcon/ThemeIcon.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconPointFilled.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowUpRight.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDownRight.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.k)((theme=>({label:{fontFamily:`Greycliff CF, ${theme.fontFamily}`}})));function SummaryGrid(props){const{classes}=useStyles(),stats=props.data.map((stat=>{const DiffIcon=stat.diff?stat.diff>0?_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.Z:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__.Z:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.Z;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.X,{withBorder:!0,p:"md",radius:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{position:"apart",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.x,{c:"dimmed",tt:"uppercase",fw:700,fz:"xs",className:classes.label,children:stat.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.x,{fw:700,fz:"xl",children:stat.value})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.k,{color:"gray",variant:"light",sx:theme=>({color:stat.diff?stat.diff>0?theme.colors.teal[6]:theme.colors.red[6]:theme.colors.dark[2]}),size:38,radius:"md",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DiffIcon,{size:"1.8rem",stroke:1.5})})]}),!!stat.diff&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.x,{c:"dimmed",fz:"sm",mt:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.x,{component:"span",c:stat.diff>0?"teal":"red",fw:700,children:[stat.diff,"%"]})," ",stat.diff>0?"increase":"decrease"," compared to last month"]}),!stat.diff&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.x,{c:"dimmed",fz:"sm",mt:"md",children:stat.description})]},stat.title)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.M,{cols:3,breakpoints:[{maxWidth:"sm",cols:1}],children:stats})}SummaryGrid.displayName="SummaryGrid";try{SummaryGrid.displayName="SummaryGrid",SummaryGrid.__docgenInfo={description:"SummaryGrid",displayName:"SummaryGrid",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"SummaryData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/core/summary/SummaryGrid.tsx#SummaryGrid"]={docgenInfo:SummaryGrid.__docgenInfo,name:"SummaryGrid",path:"src/components/core/summary/SummaryGrid.tsx#SummaryGrid"})}catch(__react_docgen_typescript_loader_error){}}}]);