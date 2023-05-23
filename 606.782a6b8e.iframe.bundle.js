"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[606],{"./node_modules/@mantine/core/esm/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_polymorphic_component=__webpack_require__("./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js"),Paper=__webpack_require__("./node_modules/@mantine/core/esm/Paper/Paper.js");const CardContext=(0,react.createContext)({padding:0}),CardProvider=CardContext.Provider;var create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");const CardSection_styles=(0,create_styles.k)(((theme,{padding,withBorder,inheritPadding})=>{const spacing=(0,get_size.a)({size:padding,sizes:theme.spacing}),offset=`calc(-1 * ${spacing})`,borderColor="dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3];return{cardSection:{display:"block",marginLeft:offset,marginRight:offset,paddingLeft:inheritPadding?spacing:void 0,paddingRight:inheritPadding?spacing:void 0,borderTop:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0,borderBottom:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:offset,borderTop:0,borderBottom:withBorder?`${(0,rem.h)(1)} solid ${borderColor}`:void 0},"&[data-last]":{marginBottom:offset,borderBottom:0}}}}));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={withBorder:!1,inheritPadding:!1},_CardSection=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("CardSection",defaultProps,props),{className,withBorder,inheritPadding,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","withBorder","inheritPadding","unstyled","variant"]),{classes,cx}=CardSection_styles({padding:(0,react.useContext)(CardContext).padding,withBorder,inheritPadding},{name:"Card",unstyled,variant});return react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.cardSection,className),ref},others))}));_CardSection.displayName="@mantine/core/CardSection";const CardSection=(0,create_polymorphic_component.F)(_CardSection);const Card_styles=(0,create_styles.k)((theme=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.white}})));var Card_defProp=Object.defineProperty,Card_getOwnPropSymbols=Object.getOwnPropertySymbols,Card_hasOwnProp=Object.prototype.hasOwnProperty,Card_propIsEnum=Object.prototype.propertyIsEnumerable,Card_defNormalProp=(obj,key,value)=>key in obj?Card_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const Card_defaultProps={padding:"md"},_Card=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Card",Card_defaultProps,props),{className,padding,radius,children,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Card_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Card_getOwnPropSymbols)for(var prop of Card_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Card_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","padding","radius","children","unstyled","variant"]),{classes,cx}=Card_styles(null,{name:"Card",unstyled,variant}),_children=react.Children.toArray(children),content=_children.map(((child,index)=>"object"==typeof child&&child&&"type"in child&&child.type===CardSection?(0,react.cloneElement)(child,{variant,padding,"data-first":0===index||void 0,"data-last":index===_children.length-1||void 0}):child));return react.createElement(CardProvider,{value:{padding}},react.createElement(Paper.X,((a,b)=>{for(var prop in b||(b={}))Card_hasOwnProp.call(b,prop)&&Card_defNormalProp(a,prop,b[prop]);if(Card_getOwnPropSymbols)for(var prop of Card_getOwnPropSymbols(b))Card_propIsEnum.call(b,prop)&&Card_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),radius,p:padding,ref},others),content))}));_Card.Section=CardSection,_Card.displayName="@mantine/core/Card";const Card=(0,create_polymorphic_component.F)(_Card)},"./node_modules/@mantine/core/esm/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),is_element=__webpack_require__("./node_modules/@mantine/utils/esm/is-element/is-element.js"),use_merged_ref=__webpack_require__("./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js"),get_default_z_index=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js");const TooltipGroupContext=(0,react.createContext)(!1),TooltipGroupProvider=TooltipGroupContext.Provider;function TooltipGroup({children,openDelay=0,closeDelay=0}){return react.createElement(TooltipGroupProvider,{value:!0},react.createElement(floating_ui_react_esm.e0,{delay:{open:openDelay,close:closeDelay}},children))}TooltipGroup.displayName="@mantine/core/TooltipGroup";var create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function getColors(theme,color){if(!color)return{backgroundColor:"dark"===theme.colorScheme?theme.colors.gray[2]:theme.colors.gray[9],color:"dark"===theme.colorScheme?theme.black:theme.white};const colors=theme.fn.variant({variant:"filled",color,primaryFallback:!1});return{backgroundColor:colors.background,color:colors.color}}const Tooltip_styles=(0,create_styles.k)(((theme,{color,radius,width,multiline})=>{return{tooltip:(a=__spreadValues(__spreadValues({},theme.fn.fontStyles()),getColors(theme,color)),b={lineHeight:theme.lineHeight,fontSize:theme.fontSizes.sm,borderRadius:theme.fn.radius(radius),padding:`calc(${theme.spacing.xs} / 2) ${theme.spacing.xs}`,position:"absolute",whiteSpace:multiline?"unset":"nowrap",pointerEvents:"none",width},__defProps(a,__getOwnPropDescs(b))),arrow:{backgroundColor:"inherit",border:0,zIndex:1}};var a,b})),TOOLTIP_ERRORS={children:"Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"};var floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs");var OptionalPortal=__webpack_require__("./node_modules/@mantine/core/esm/Portal/OptionalPortal.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),TooltipFloating_defProp=Object.defineProperty,TooltipFloating_defProps=Object.defineProperties,TooltipFloating_getOwnPropDescs=Object.getOwnPropertyDescriptors,TooltipFloating_getOwnPropSymbols=Object.getOwnPropertySymbols,TooltipFloating_hasOwnProp=Object.prototype.hasOwnProperty,TooltipFloating_propIsEnum=Object.prototype.propertyIsEnumerable,TooltipFloating_defNormalProp=(obj,key,value)=>key in obj?TooltipFloating_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,TooltipFloating_spreadValues=(a,b)=>{for(var prop in b||(b={}))TooltipFloating_hasOwnProp.call(b,prop)&&TooltipFloating_defNormalProp(a,prop,b[prop]);if(TooltipFloating_getOwnPropSymbols)for(var prop of TooltipFloating_getOwnPropSymbols(b))TooltipFloating_propIsEnum.call(b,prop)&&TooltipFloating_defNormalProp(a,prop,b[prop]);return a},TooltipFloating_spreadProps=(a,b)=>TooltipFloating_defProps(a,TooltipFloating_getOwnPropDescs(b));const defaultProps={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:(0,get_default_z_index.w)("popover")};function TooltipFloating(props){var _b;const _a=(0,MantineProvider.N4)("TooltipFloating",defaultProps,props),{children,refProp,withinPortal,portalProps,style,className,classNames,styles,unstyled,radius,color,label,offset,position,multiline,width,zIndex,disabled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)TooltipFloating_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&TooltipFloating_getOwnPropSymbols)for(var prop of TooltipFloating_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&TooltipFloating_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["children","refProp","withinPortal","portalProps","style","className","classNames","styles","unstyled","radius","color","label","offset","position","multiline","width","zIndex","disabled","variant"]),{handleMouseMove,x,y,opened,boundaryRef,floating,setOpened}=function useFloatingTooltip({offset,position}){const[opened,setOpened]=(0,react.useState)(!1),boundaryRef=(0,react.useRef)(),{x,y,reference,floating,refs,update,placement}=(0,floating_ui_react_esm.YF)({placement:position,middleware:[(0,floating_ui_core_browser_min.uY)({crossAxis:!0,padding:5,rootBoundary:"document"})]}),horizontalOffset=placement.includes("right")?offset:position.includes("left")?-1*offset:0,verticalOffset=placement.includes("bottom")?offset:position.includes("top")?-1*offset:0,handleMouseMove=(0,react.useCallback)((({clientX,clientY})=>{reference({getBoundingClientRect:()=>({width:0,height:0,x:clientX,y:clientY,left:clientX+horizontalOffset,top:clientY+verticalOffset,right:clientX,bottom:clientY})})}),[reference]);return(0,react.useEffect)((()=>{if(refs.floating.current){const boundary=boundaryRef.current;boundary.addEventListener("mousemove",handleMouseMove);const parents=(0,floating_ui_dom_browser_min.Kx)(refs.floating.current);return parents.forEach((parent=>{parent.addEventListener("scroll",update)})),()=>{boundary.removeEventListener("mousemove",handleMouseMove),parents.forEach((parent=>{parent.removeEventListener("scroll",update)}))}}}),[reference,refs.floating.current,update,handleMouseMove,opened]),{handleMouseMove,x,y,opened,setOpened,boundaryRef,floating}}({offset,position}),{classes,cx}=Tooltip_styles({radius,color,multiline,width},{name:"TooltipFloating",classNames,styles,unstyled,variant});if(!(0,is_element.k)(children))throw new Error(TOOLTIP_ERRORS.children);const targetRef=(0,use_merged_ref.Y)(boundaryRef,children.ref);return react.createElement(react.Fragment,null,react.createElement(OptionalPortal.q,TooltipFloating_spreadProps(TooltipFloating_spreadValues({},portalProps),{withinPortal}),react.createElement(Box.x,TooltipFloating_spreadProps(TooltipFloating_spreadValues({},others),{ref:floating,className:cx(classes.tooltip,className),style:TooltipFloating_spreadProps(TooltipFloating_spreadValues({},style),{zIndex,display:!disabled&&opened?"block":"none",top:null!=y?y:"",left:null!=(_b=Math.round(x))?_b:""})}),label)),(0,react.cloneElement)(children,TooltipFloating_spreadProps(TooltipFloating_spreadValues({},children.props),{[refProp]:targetRef,onMouseEnter:event=>{var _a2,_b2;null==(_b2=(_a2=children.props).onMouseEnter)||_b2.call(_a2,event),handleMouseMove(event),setOpened(!0)},onMouseLeave:event=>{var _a2,_b2;null==(_b2=(_a2=children.props).onMouseLeave)||_b2.call(_a2,event),setOpened(!1)}})))}TooltipFloating.displayName="@mantine/core/TooltipFloating";var floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),use_id=__webpack_require__("./node_modules/@mantine/hooks/esm/use-id/use-id.js"),use_did_update=__webpack_require__("./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js"),use_floating_auto_update=__webpack_require__("./node_modules/@mantine/core/esm/Floating/use-floating-auto-update.js");function useTooltip(settings){const[uncontrolledOpened,setUncontrolledOpened]=(0,react.useState)(!1),opened="boolean"==typeof settings.opened?settings.opened:uncontrolledOpened,withinGroup=(0,react.useContext)(TooltipGroupContext),uid=(0,use_id.M)(),{delay:groupDelay,currentId,setCurrentId}=(0,floating_ui_react_esm.tj)(),onChange=(0,react.useCallback)((_opened=>{setUncontrolledOpened(_opened),_opened&&setCurrentId(uid)}),[setCurrentId,uid]),{x,y,reference,floating,context,refs,update,placement,middlewareData:{arrow:{x:arrowX,y:arrowY}={}}}=(0,floating_ui_react_esm.YF)({placement:settings.position,open:opened,onOpenChange:onChange,middleware:[(0,floating_ui_core_browser_min.cv)(settings.offset),(0,floating_ui_core_browser_min.uY)({padding:8}),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_react_dom_esm.x7)({element:settings.arrowRef,padding:settings.arrowOffset}),...settings.inline?[(0,floating_ui_core_browser_min.Qo)()]:[]]}),{getReferenceProps,getFloatingProps}=(0,floating_ui_react_esm.NI)([(0,floating_ui_react_esm.XI)(context,{enabled:settings.events.hover,delay:withinGroup?groupDelay:{open:settings.openDelay,close:settings.closeDelay},mouseOnly:!settings.events.touch}),(0,floating_ui_react_esm.KK)(context,{enabled:settings.events.focus,keyboardOnly:!0}),(0,floating_ui_react_esm.qs)(context,{role:"tooltip"}),(0,floating_ui_react_esm.bQ)(context,{enabled:void 0===typeof settings.opened}),(0,floating_ui_react_esm.Qu)(context,{id:uid})]);(0,use_floating_auto_update.L)({opened,position:settings.position,positionDependencies:settings.positionDependencies,floating:{refs,update}}),(0,use_did_update.l)((()=>{var _a;null==(_a=settings.onPositionChange)||_a.call(settings,placement)}),[placement]);return{x,y,arrowX,arrowY,reference,floating,getFloatingProps,getReferenceProps,isGroupPhase:opened&&currentId&&currentId!==uid,opened,placement}}var get_floating_position=__webpack_require__("./node_modules/@mantine/core/esm/Floating/get-floating-position/get-floating-position.js"),Transition=__webpack_require__("./node_modules/@mantine/core/esm/Transition/Transition.js"),FloatingArrow=__webpack_require__("./node_modules/@mantine/core/esm/Floating/FloatingArrow/FloatingArrow.js"),Tooltip_defProp=Object.defineProperty,Tooltip_defProps=Object.defineProperties,Tooltip_getOwnPropDescs=Object.getOwnPropertyDescriptors,Tooltip_getOwnPropSymbols=Object.getOwnPropertySymbols,Tooltip_hasOwnProp=Object.prototype.hasOwnProperty,Tooltip_propIsEnum=Object.prototype.propertyIsEnumerable,Tooltip_defNormalProp=(obj,key,value)=>key in obj?Tooltip_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,Tooltip_spreadValues=(a,b)=>{for(var prop in b||(b={}))Tooltip_hasOwnProp.call(b,prop)&&Tooltip_defNormalProp(a,prop,b[prop]);if(Tooltip_getOwnPropSymbols)for(var prop of Tooltip_getOwnPropSymbols(b))Tooltip_propIsEnum.call(b,prop)&&Tooltip_defNormalProp(a,prop,b[prop]);return a},Tooltip_spreadProps=(a,b)=>Tooltip_defProps(a,Tooltip_getOwnPropDescs(b));const Tooltip_defaultProps={position:"top",refProp:"ref",withinPortal:!1,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},width:"auto",events:{hover:!0,focus:!1,touch:!1},zIndex:(0,get_default_z_index.w)("popover"),positionDependencies:[]},_Tooltip=(0,react.forwardRef)(((props,ref)=>{var _b;const arrowRef=(0,react.useRef)(null),_a=(0,MantineProvider.N4)("Tooltip",Tooltip_defaultProps,props),{children,position,refProp,label,openDelay,closeDelay,onPositionChange,opened,withinPortal,portalProps,radius,color,classNames,styles,unstyled,style,className,withArrow,arrowSize,arrowOffset,arrowRadius,arrowPosition,offset,transitionProps,multiline,width,events,zIndex,disabled,positionDependencies,onClick,onMouseEnter,onMouseLeave,inline,variant,keepMounted}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Tooltip_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Tooltip_getOwnPropSymbols)for(var prop of Tooltip_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Tooltip_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["children","position","refProp","label","openDelay","closeDelay","onPositionChange","opened","withinPortal","portalProps","radius","color","classNames","styles","unstyled","style","className","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","offset","transitionProps","multiline","width","events","zIndex","disabled","positionDependencies","onClick","onMouseEnter","onMouseLeave","inline","variant","keepMounted"]),{classes,cx,theme}=Tooltip_styles({radius,color,width,multiline},{name:"Tooltip",classNames,styles,unstyled,variant}),tooltip=useTooltip({position:(0,get_floating_position._)(theme.dir,position),closeDelay,openDelay,onPositionChange,opened,events,arrowRef,arrowOffset,offset:offset+(withArrow?arrowSize/2:0),positionDependencies:[...positionDependencies,children],inline});if(!(0,is_element.k)(children))throw new Error(TOOLTIP_ERRORS.children);const targetRef=(0,use_merged_ref.Y)(tooltip.reference,children.ref,ref);return react.createElement(react.Fragment,null,react.createElement(OptionalPortal.q,Tooltip_spreadProps(Tooltip_spreadValues({},portalProps),{withinPortal}),react.createElement(Transition.u,Tooltip_spreadProps(Tooltip_spreadValues({keepMounted,mounted:!disabled&&tooltip.opened},transitionProps),{transition:transitionProps.transition||"fade",duration:tooltip.isGroupPhase?10:null!=(_b=transitionProps.duration)?_b:100}),(transitionStyles=>{var _a2,_b2;return react.createElement(Box.x,Tooltip_spreadValues(Tooltip_spreadValues({},others),tooltip.getFloatingProps({ref:tooltip.floating,className:classes.tooltip,style:Tooltip_spreadProps(Tooltip_spreadValues(Tooltip_spreadValues({},style),transitionStyles),{zIndex,top:null!=(_a2=tooltip.y)?_a2:0,left:null!=(_b2=tooltip.x)?_b2:0})})),label,react.createElement(FloatingArrow.Y,{ref:arrowRef,arrowX:tooltip.arrowX,arrowY:tooltip.arrowY,visible:withArrow,position:tooltip.placement,arrowSize,arrowOffset,arrowRadius,arrowPosition,className:classes.arrow}))}))),(0,react.cloneElement)(children,tooltip.getReferenceProps(Tooltip_spreadValues({onClick,onMouseEnter,onMouseLeave,onMouseMove:props.onMouseMove,onPointerDown:props.onPointerDown,onPointerEnter:props.onPointerEnter,[refProp]:targetRef,className:cx(className,children.props.className)},children.props))))}));_Tooltip.Group=TooltipGroup,_Tooltip.Floating=TooltipFloating,_Tooltip.displayName="@mantine/core/Tooltip";const Tooltip=_Tooltip},"./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconDotsVertical});var IconDotsVertical=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconFocusCentered.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconFocusCentered});var IconFocusCentered=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("focus-centered","IconFocusCentered",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M4 8v-2a2 2 0 0 1 2 -2h2",key:"svg-1"}],["path",{d:"M4 16v2a2 2 0 0 0 2 2h2",key:"svg-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"svg-3"}],["path",{d:"M16 20h2a2 2 0 0 0 2 -2v-2",key:"svg-4"}]])}}]);