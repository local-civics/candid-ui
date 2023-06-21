"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[975],{"./node_modules/@mantine/core/esm/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_polymorphic_component=__webpack_require__("./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js"),Paper=__webpack_require__("./node_modules/@mantine/core/esm/Paper/Paper.js");const CardContext=(0,react.createContext)({padding:0}),CardProvider=CardContext.Provider;var create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");const CardSection_styles=(0,create_styles.k)(((theme,{padding,withBorder,inheritPadding})=>{const spacing=(0,get_size.a)({size:padding,sizes:theme.spacing}),offset=`calc(-1 * ${spacing})`,borderColor="dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3];return{cardSection:{display:"block",marginLeft:offset,marginRight:offset,paddingLeft:inheritPadding?spacing:void 0,paddingRight:inheritPadding?spacing:void 0,borderTop:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0,borderBottom:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:offset,borderTop:0,borderBottom:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0},"&[data-last]":{marginBottom:offset,borderBottom:0}}}}));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={withBorder:!1,inheritPadding:!1},_CardSection=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("CardSection",defaultProps,props),{className,withBorder,inheritPadding,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","withBorder","inheritPadding","unstyled","variant"]),{classes,cx}=CardSection_styles({padding:(0,react.useContext)(CardContext).padding,withBorder,inheritPadding},{name:"Card",unstyled,variant});return react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.cardSection,className),ref},others))}));_CardSection.displayName="@mantine/core/CardSection";const CardSection=(0,create_polymorphic_component.F)(_CardSection);const Card_styles=(0,create_styles.k)((theme=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.white}})));var Card_defProp=Object.defineProperty,Card_getOwnPropSymbols=Object.getOwnPropertySymbols,Card_hasOwnProp=Object.prototype.hasOwnProperty,Card_propIsEnum=Object.prototype.propertyIsEnumerable,Card_defNormalProp=(obj,key,value)=>key in obj?Card_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const Card_defaultProps={padding:"md"},_Card=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Card",Card_defaultProps,props),{className,padding,radius,children,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Card_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Card_getOwnPropSymbols)for(var prop of Card_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Card_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","padding","radius","children","unstyled","variant"]),{classes,cx}=Card_styles(null,{name:"Card",unstyled,variant}),_children=react.Children.toArray(children),content=_children.map(((child,index)=>"object"==typeof child&&child&&"type"in child&&child.type===CardSection?(0,react.cloneElement)(child,{variant,padding,"data-first":0===index||void 0,"data-last":index===_children.length-1||void 0}):child));return react.createElement(CardProvider,{value:{padding}},react.createElement(Paper.X,((a,b)=>{for(var prop in b||(b={}))Card_hasOwnProp.call(b,prop)&&Card_defNormalProp(a,prop,b[prop]);if(Card_getOwnPropSymbols)for(var prop of Card_getOwnPropSymbols(b))Card_propIsEnum.call(b,prop)&&Card_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),radius,p:padding,ref},others),content))}));_Card.Section=CardSection,_Card.displayName="@mantine/core/Card";const Card=(0,create_polymorphic_component.F)(_Card)},"./node_modules/@mantine/core/esm/PinInput/PinInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>PinInput});var react=__webpack_require__("./node_modules/react/index.js"),use_id=__webpack_require__("./node_modules/@mantine/hooks/esm/use-id/use-id.js"),use_uncontrolled=__webpack_require__("./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js");function createPinArray(length,value){if(length<1)return[];const values=new Array(length).fill("");if(value){const splitted=value.trim().split("");for(let i=0;i<Math.min(length,splitted.length);i+=1)values[i]=splitted[i]}return values}var rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");const sizes={xs:(0,rem.h)(28),sm:(0,rem.h)(32),md:(0,rem.h)(36),lg:(0,rem.h)(40),xl:(0,rem.h)(48)};const PinInput_styles=(0,create_styles.k)(((_theme,_params,{size})=>({root:{},input:{width:(0,get_size.a)({size,sizes}),height:(0,get_size.a)({size,sizes}),textAlign:"center",minHeight:"auto",padding:0,lineHeight:(0,get_size.a)({size,sizes}),"&::selection":{background:"transparent"}}})));var Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Input=__webpack_require__("./node_modules/@mantine/core/esm/Input/Input.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const regex={number:/^[0-9]+$/,alphanumeric:/^[a-zA-Z0-9]+$/i},defaultProps={spacing:"sm",size:"sm",length:4,manageFocus:!0,placeholder:"○",type:"alphanumeric"},PinInput=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("PinInput",defaultProps,props),{name,form,className,value,defaultValue,variant,spacing,size,classNames,styles,unstyled,sx,length,onChange,onComplete,manageFocus,autoFocus,error,radius,disabled,oneTimeCode,placeholder,type,mask,"aria-label":ariaLabel,readOnly,inputType,inputMode}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["name","form","className","value","defaultValue","variant","spacing","size","classNames","styles","unstyled","sx","length","onChange","onComplete","manageFocus","autoFocus","error","radius","disabled","oneTimeCode","placeholder","type","mask","aria-label","readOnly","inputType","inputMode"]),uuid=(0,use_id.M)(name),{classes,cx}=PinInput_styles(null,{name:"PinInput",classNames,styles,unstyled,variant,size}),[focusedIndex,setFocusedIndex]=(0,react.useState)(-1),[_value,setValues]=(0,use_uncontrolled.C)({value,defaultValue,finalValue:"",onChange}),inputsRef=(0,react.useRef)([]),validate=code=>{const re=type instanceof RegExp?type:type in regex?regex[type]:null;return null==re?void 0:re.test(code)},focusInputField=(dir,index)=>{if(manageFocus){if("next"===dir){const nextIndex=index+1;inputsRef.current[nextIndex<length?nextIndex:index].focus()}if("prev"===dir){const nextIndex=index-1;inputsRef.current[nextIndex>-1?nextIndex:index].focus()}}},setFieldValue=(val,index)=>{const values=[...createPinArray(length,_value)];values[index]=val,setValues(values.join(""))},handleBlur=()=>{setFocusedIndex(-1)},handlePaste=event=>{event.preventDefault();const copyValue=event.clipboardData.getData("Text");validate(copyValue)&&setValues(copyValue)};return(0,react.useEffect)((()=>{_value.length===length&&(null==onComplete||onComplete(_value))}),[_value]),react.createElement(react.Fragment,null,react.createElement(Group.Z,__spreadValues({role:"group",spacing,ref,className:cx(classes.root,className),sx,unstyled,id:uuid,noWrap:!0},others),createPinArray(length,_value).map(((char,index)=>{return react.createElement(Input.I,{__staticSelector:"PinInput",id:`${uuid}-${index+1}`,key:`${uuid}-${index}`,inputMode:inputMode||("number"===type?"numeric":"text"),onChange:event=>((event,index)=>{const inputValue=event.target.value,nextChar=inputValue.length>1?inputValue.split("")[inputValue.length-1]:inputValue;validate(nextChar)?(setFieldValue(nextChar,index),focusInputField("next",index)):setFieldValue("",index)})(event,index),onKeyDown:event=>((event,index)=>{"Backspace"===event.key&&(""!==event.target.value?setFieldValue("",index):focusInputField("prev",index))})(event,index),onFocus:event=>((event,index)=>{event.target.select(),setFocusedIndex(index)})(event,index),onBlur:handleBlur,onPaste:handlePaste,type:inputType||(mask?"password":"number"===type?"tel":"text"),radius,error,variant,size,disabled,ref:node=>{inputsRef.current[index]=node},autoComplete:oneTimeCode?"one-time-code":"off",placeholder:focusedIndex===index?"":placeholder,value:char,autoFocus:autoFocus&&0===index,classNames:(a=__spreadValues({},classNames),b={input:cx(classes.input,null==classNames?void 0:classNames.input)},__defProps(a,__getOwnPropDescs(b))),styles,unstyled,"aria-label":ariaLabel,readOnly});var a,b}))),react.createElement("input",{type:"hidden",name,form,value:_value}))}));PinInput.displayName="@mantine/core/PinInput"},"./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SimpleGrid});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),breakpoints_breakpoints=__webpack_require__("./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),get_sorted_breakpoints=__webpack_require__("./node_modules/@mantine/core/esm/SimpleGrid/get-sorted-breakpoints/get-sorted-breakpoints.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const SimpleGrid_styles=(0,create_styles.k)(((theme,{spacing,breakpoints,cols,verticalSpacing})=>{const hasVerticalSpacing=null!=verticalSpacing,gridBreakpoints=(0,get_sorted_breakpoints.I)(theme,breakpoints).reduce(((acc,breakpoint)=>{var _a,_b;const property="maxWidth"in breakpoint?"max-width":"min-width",breakpointSize=(0,get_size.a)({size:"max-width"===property?breakpoint.maxWidth:breakpoint.minWidth,sizes:theme.breakpoints,units:"em"}),breakpointValue=(0,breakpoints_breakpoints.oI)(breakpointSize)-("max-width"===property?1:0);return acc[`@media (${property}: ${(0,rem.em)(breakpointValue)})`]={gridTemplateColumns:`repeat(${breakpoint.cols}, minmax(0, 1fr))`,gap:`${(0,get_size.a)({size:null!=(_a=breakpoint.verticalSpacing)?_a:hasVerticalSpacing?verticalSpacing:spacing,sizes:theme.spacing})} ${(0,get_size.a)({size:null!=(_b=breakpoint.spacing)?_b:spacing,sizes:theme.spacing})}`},acc}),{});return{root:__spreadValues({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`,gap:`${(0,get_size.a)({size:hasVerticalSpacing?verticalSpacing:spacing,sizes:theme.spacing})} ${(0,get_size.a)({size:spacing,sizes:theme.spacing})}`},gridBreakpoints)}}));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),SimpleGrid_defProp=Object.defineProperty,SimpleGrid_getOwnPropSymbols=Object.getOwnPropertySymbols,SimpleGrid_hasOwnProp=Object.prototype.hasOwnProperty,SimpleGrid_propIsEnum=Object.prototype.propertyIsEnumerable,SimpleGrid_defNormalProp=(obj,key,value)=>key in obj?SimpleGrid_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={breakpoints:[],cols:1,spacing:"md"},SimpleGrid=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("SimpleGrid",defaultProps,props),{className,breakpoints,cols,spacing,verticalSpacing,children,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)SimpleGrid_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&SimpleGrid_getOwnPropSymbols)for(var prop of SimpleGrid_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&SimpleGrid_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes,cx}=SimpleGrid_styles({breakpoints,cols,spacing,verticalSpacing},{name:"SimpleGrid",unstyled,variant});return react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))SimpleGrid_hasOwnProp.call(b,prop)&&SimpleGrid_defNormalProp(a,prop,b[prop]);if(SimpleGrid_getOwnPropSymbols)for(var prop of SimpleGrid_getOwnPropSymbols(b))SimpleGrid_propIsEnum.call(b,prop)&&SimpleGrid_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),ref},others),children)}));SimpleGrid.displayName="@mantine/core/SimpleGrid"},"./node_modules/@mantine/core/esm/SimpleGrid/get-sorted-breakpoints/get-sorted-breakpoints.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>getSortedBreakpoints});var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js"),_mantine_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");function getSortedBreakpoints(theme,breakpoints){if(0===breakpoints.length)return breakpoints;const property="maxWidth"in breakpoints[0]?"maxWidth":"minWidth",sorted=[...breakpoints].sort(((a,b)=>(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.oI)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.a)({size:b[property],sizes:theme.breakpoints}))-(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.oI)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.a)({size:a[property],sizes:theme.breakpoints}))));return"minWidth"===property?sorted.reverse():sorted}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDownRight.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconArrowDownRight});var IconArrowDownRight=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowUpRight.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconArrowUpRight});var IconArrowUpRight=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconBarcode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconBarcode});var IconBarcode=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("barcode","IconBarcode",[["path",{d:"M4 7v-1a2 2 0 0 1 2 -2h2",key:"svg-0"}],["path",{d:"M4 17v1a2 2 0 0 0 2 2h2",key:"svg-1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1",key:"svg-2"}],["path",{d:"M16 20h2a2 2 0 0 0 2 -2v-1",key:"svg-3"}],["path",{d:"M5 11h1v2h-1z",key:"svg-4"}],["path",{d:"M10 11l0 2",key:"svg-5"}],["path",{d:"M14 11h1v2h-1z",key:"svg-6"}],["path",{d:"M19 11l0 2",key:"svg-7"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconDoorExit.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconDoorExit});var IconDoorExit=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("door-exit","IconDoorExit",[["path",{d:"M13 12v.01",key:"svg-0"}],["path",{d:"M3 21h18",key:"svg-1"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5",key:"svg-2"}],["path",{d:"M14 7h7m-3 -3l3 3l-3 3",key:"svg-3"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconDotsVertical});var IconDotsVertical=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconPointFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconPointFilled});var IconPointFilled=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("point-filled","IconPointFilled",[["path",{d:"M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]])}}]);