"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[594],{"./node_modules/@mantine/core/esm/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");const sizes={xs:(0,rem.h)(1),sm:(0,rem.h)(2),md:(0,rem.h)(3),lg:(0,rem.h)(4),xl:(0,rem.h)(5)};function getColor(theme,color){const themeColor=theme.fn.variant({variant:"outline",color}).border;return"string"==typeof color&&(color in theme.colors||color.split(".")[0]in theme.colors)?themeColor:void 0===color?"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[4]:color}const Divider_styles=(0,create_styles.k)(((theme,{color},{size,variant})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,rem.h)(1),borderTop:`${(0,get_size.a)({size,sizes})} ${variant} ${getColor(theme,color)}`,marginRight:theme.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,get_size.a)({size,sizes})} ${variant} ${getColor(theme,color)}`,marginLeft:theme.spacing.xs}},labelDefaultStyles:{color:"dark"===color?theme.colors.dark[1]:theme.fn.themeColor(color,"dark"===theme.colorScheme?5:theme.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,rem.h)((0,get_size.a)({size,sizes})),borderTopColor:getColor(theme,color),borderTopStyle:variant,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,rem.h)((0,get_size.a)({size,sizes})),borderLeftColor:getColor(theme,color),borderLeftStyle:variant}})));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const defaultProps={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},Divider=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Divider",defaultProps,props),{className,color,orientation,size,label,labelPosition,labelProps,variant,styles,classNames,unstyled}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes,cx}=Divider_styles({color},{classNames,styles,unstyled,name:"Divider",variant,size}),vertical="vertical"===orientation,horizontal="horizontal"===orientation,withLabel=!!label&&horizontal,useLabelDefaultStyles=!(null==labelProps?void 0:labelProps.color);return react.createElement(Box.x,__spreadValues({ref,className:cx(classes.root,{[classes.vertical]:vertical,[classes.horizontal]:horizontal,[classes.withLabel]:withLabel},className),role:"separator"},others),withLabel&&react.createElement(Text.x,(a=__spreadValues({},labelProps),b={size:(null==labelProps?void 0:labelProps.size)||"xs",mt:(0,rem.h)(2),className:cx(classes.label,classes[labelPosition],{[classes.labelDefaultStyles]:useLabelDefaultStyles})},__defProps(a,__getOwnPropDescs(b))),label));var a,b}));Divider.displayName="@mantine/core/Divider"},"./node_modules/@mantine/form/esm/use-form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useForm});var react=__webpack_require__("./node_modules/react/index.js"),fast_deep_equal=__webpack_require__("./node_modules/fast-deep-equal/index.js"),fast_deep_equal_default=__webpack_require__.n(fast_deep_equal);function filterErrors(errors){return null===errors||"object"!=typeof errors?{}:Object.keys(errors).reduce(((acc,key)=>{const errorValue=errors[key];return null!=errorValue&&!1!==errorValue&&(acc[key]=errorValue),acc}),{})}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function clearListState(field,state){if(null===state||"object"!=typeof state)return{};const clone=__spreadValues({},state);return Object.keys(state).forEach((errorKey=>{errorKey.includes(`${String(field)}.`)&&delete clone[errorKey]})),clone}const FORM_INDEX="__MANTINE_FORM_INDEX__";function shouldValidateOnChange(path,validateInputOnChange){return!!validateInputOnChange&&("boolean"==typeof validateInputOnChange?validateInputOnChange:!!Array.isArray(validateInputOnChange)&&validateInputOnChange.includes(path.replace(/[.][0-9]/g,`.${FORM_INDEX}`)))}function set(obj,key,val){"object"==typeof val.value&&(val.value=klona(val.value)),val.enumerable&&!val.get&&!val.set&&val.configurable&&val.writable&&"__proto__"!==key?obj[key]=val.value:Object.defineProperty(obj,key,val)}function klona(x){if("object"!=typeof x)return x;var k,list,tmp,i=0,str=Object.prototype.toString.call(x);if("[object Object]"===str?tmp=Object.create(x.__proto__||null):"[object Array]"===str?tmp=Array(x.length):"[object Set]"===str?(tmp=new Set,x.forEach((function(val){tmp.add(klona(val))}))):"[object Map]"===str?(tmp=new Map,x.forEach((function(val,key){tmp.set(klona(key),klona(val))}))):"[object Date]"===str?tmp=new Date(+x):"[object RegExp]"===str?tmp=new RegExp(x.source,x.flags):"[object DataView]"===str?tmp=new x.constructor(klona(x.buffer)):"[object ArrayBuffer]"===str?tmp=x.slice(0):"Array]"===str.slice(-6)&&(tmp=new x.constructor(x)),tmp){for(list=Object.getOwnPropertySymbols(x);i<list.length;i++)set(tmp,list[i],Object.getOwnPropertyDescriptor(x,list[i]));for(i=0,list=Object.getOwnPropertyNames(x);i<list.length;i++)Object.hasOwnProperty.call(tmp,k=list[i])&&tmp[k]===x[k]||set(tmp,k,Object.getOwnPropertyDescriptor(x,k))}return tmp||x}function getSplittedPath(path){return"string"!=typeof path?[]:path.split(".")}function setPath(path,value,values){const splittedPath=getSplittedPath(path);if(0===splittedPath.length)return values;const cloned=klona(values);if(1===splittedPath.length)return cloned[splittedPath[0]]=value,cloned;let val=cloned[splittedPath[0]];for(let i=1;i<splittedPath.length-1;i+=1){if(void 0===val)return cloned;val=val[splittedPath[i]]}return val[splittedPath[splittedPath.length-1]]=value,cloned}function getPath(path,values){const splittedPath=getSplittedPath(path);if(0===splittedPath.length||"object"!=typeof values||null===values)return;let value=values[splittedPath[0]];for(let i=1;i<splittedPath.length&&void 0!==value;i+=1)value=value[splittedPath[i]];return value}function getValidationResults(errors){const filteredErrors=filterErrors(errors);return{hasErrors:Object.keys(filteredErrors).length>0,errors:filteredErrors}}function validateRulesRecord(rules,values,path="",errors={}){return"object"!=typeof rules||null===rules?errors:Object.keys(rules).reduce(((acc,ruleKey)=>{const rule=rules[ruleKey],rulePath=`${""===path?"":`${path}.`}${ruleKey}`,value=getPath(rulePath,values);let arrayValidation=!1;return"function"==typeof rule&&(acc[rulePath]=rule(value,values,rulePath)),"object"==typeof rule&&Array.isArray(value)&&(arrayValidation=!0,value.forEach(((_item,index)=>validateRulesRecord(rule,values,`${rulePath}.${index}`,acc)))),"object"==typeof rule&&"object"==typeof value&&null!==value&&(arrayValidation||validateRulesRecord(rule,values,rulePath,acc)),acc}),errors)}function validateValues(validate,values){return getValidationResults("function"==typeof validate?validate(values):validateRulesRecord(validate,values))}function validateFieldValue(path,rules,values){if("string"!=typeof path)return{hasError:!1,error:null};const results=validateValues(rules,values),pathInError=Object.keys(results.errors).find((errorKey=>path.split(".").every(((pathPart,i)=>pathPart===errorKey.split(".")[i]))));return{hasError:!!pathInError,error:pathInError?results.errors[pathInError]:null}}var reorder_errors_defProp=Object.defineProperty,reorder_errors_getOwnPropSymbols=Object.getOwnPropertySymbols,reorder_errors_hasOwnProp=Object.prototype.hasOwnProperty,reorder_errors_propIsEnum=Object.prototype.propertyIsEnumerable,reorder_errors_defNormalProp=(obj,key,value)=>key in obj?reorder_errors_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,reorder_errors_spreadValues=(a,b)=>{for(var prop in b||(b={}))reorder_errors_hasOwnProp.call(b,prop)&&reorder_errors_defNormalProp(a,prop,b[prop]);if(reorder_errors_getOwnPropSymbols)for(var prop of reorder_errors_getOwnPropSymbols(b))reorder_errors_propIsEnum.call(b,prop)&&reorder_errors_defNormalProp(a,prop,b[prop]);return a};var change_error_indices_defProp=Object.defineProperty,change_error_indices_getOwnPropSymbols=Object.getOwnPropertySymbols,change_error_indices_hasOwnProp=Object.prototype.hasOwnProperty,change_error_indices_propIsEnum=Object.prototype.propertyIsEnumerable,change_error_indices_defNormalProp=(obj,key,value)=>key in obj?change_error_indices_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,change_error_indices_spreadValues=(a,b)=>{for(var prop in b||(b={}))change_error_indices_hasOwnProp.call(b,prop)&&change_error_indices_defNormalProp(a,prop,b[prop]);if(change_error_indices_getOwnPropSymbols)for(var prop of change_error_indices_getOwnPropSymbols(b))change_error_indices_propIsEnum.call(b,prop)&&change_error_indices_defNormalProp(a,prop,b[prop]);return a};function getIndexFromKeyAfterPath(key,path){const split=key.substring(path.length+1).split(".")[0];return parseInt(split,10)}function changeErrorIndices(path,index,errors,change){if(void 0===index)return errors;const pathString=`${String(path)}`;let clearedErrors=errors;-1===change&&(clearedErrors=clearListState(`${pathString}.${index}`,clearedErrors));const cloned=change_error_indices_spreadValues({},clearedErrors),changedKeys=new Set;return Object.entries(clearedErrors).filter((([key])=>{if(!key.startsWith(`${pathString}.`))return!1;const currIndex=getIndexFromKeyAfterPath(key,pathString);return!Number.isNaN(currIndex)&&currIndex>=index})).forEach((([key,value])=>{const currIndex=getIndexFromKeyAfterPath(key,pathString),newKey=key.replace(`${pathString}.${currIndex}`,`${pathString}.${currIndex+change}`);cloned[newKey]=value,changedKeys.add(newKey),changedKeys.has(key)||delete cloned[key]})),cloned}function getStatus(status,path){const paths=Object.keys(status);if("string"==typeof path){const nestedPaths=paths.filter((statusPath=>statusPath.startsWith(`${path}.`)));return status[path]||nestedPaths.some((statusPath=>status[statusPath]))||!1}return paths.some((statusPath=>status[statusPath]))}var use_form_defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,use_form_getOwnPropSymbols=Object.getOwnPropertySymbols,use_form_hasOwnProp=Object.prototype.hasOwnProperty,use_form_propIsEnum=Object.prototype.propertyIsEnumerable,use_form_defNormalProp=(obj,key,value)=>key in obj?use_form_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,use_form_spreadValues=(a,b)=>{for(var prop in b||(b={}))use_form_hasOwnProp.call(b,prop)&&use_form_defNormalProp(a,prop,b[prop]);if(use_form_getOwnPropSymbols)for(var prop of use_form_getOwnPropSymbols(b))use_form_propIsEnum.call(b,prop)&&use_form_defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b));function useForm({initialValues={},initialErrors={},initialDirty={},initialTouched={},clearInputErrorOnChange=!0,validateInputOnChange=!1,validateInputOnBlur=!1,transformValues=values=>values,validate:rules}={}){const[touched,setTouched]=(0,react.useState)(initialTouched),[dirty,setDirty]=(0,react.useState)(initialDirty),[values,_setValues]=(0,react.useState)(initialValues),[errors,_setErrors]=(0,react.useState)(filterErrors(initialErrors)),valuesSnapshot=(0,react.useRef)(initialValues),setValuesSnapshot=_values=>{valuesSnapshot.current=_values},resetTouched=(0,react.useCallback)((()=>setTouched({})),[]),setErrors=(0,react.useCallback)((errs=>_setErrors((current=>filterErrors("function"==typeof errs?errs(current):errs)))),[]),clearErrors=(0,react.useCallback)((()=>_setErrors({})),[]),reset=(0,react.useCallback)((()=>{_setValues(initialValues),clearErrors(),setValuesSnapshot(initialValues),setDirty({}),resetTouched()}),[]),setFieldError=(0,react.useCallback)(((path,error)=>setErrors((current=>__spreadProps(use_form_spreadValues({},current),{[path]:error})))),[]),clearFieldError=(0,react.useCallback)((path=>setErrors((current=>{if("string"!=typeof path)return current;const clone=use_form_spreadValues({},current);return delete clone[path],clone}))),[]),clearFieldDirty=(0,react.useCallback)((path=>setDirty((current=>{if("string"!=typeof path)return current;const result=clearListState(path,current);return delete result[path],result}))),[]),setFieldValue=(0,react.useCallback)(((path,value)=>{const shouldValidate=shouldValidateOnChange(path,validateInputOnChange);clearFieldDirty(path),setTouched((currentTouched=>__spreadProps(use_form_spreadValues({},currentTouched),{[path]:!0}))),_setValues((current=>{const result=setPath(path,value,current);if(shouldValidate){const validationResults=validateFieldValue(path,rules,result);validationResults.hasError?setFieldError(path,validationResults.error):clearFieldError(path)}return result})),!shouldValidate&&clearInputErrorOnChange&&setFieldError(path,null)}),[]),setValues=(0,react.useCallback)((payload=>{_setValues((currentValues=>{const valuesPartial="function"==typeof payload?payload(currentValues):payload;return use_form_spreadValues(use_form_spreadValues({},currentValues),valuesPartial)})),clearInputErrorOnChange&&clearErrors()}),[]),reorderListItem=(0,react.useCallback)(((path,payload)=>{clearFieldDirty(path),_setValues((current=>function reorderPath(path,{from,to},values){const currentValue=getPath(path,values);if(!Array.isArray(currentValue))return values;const cloned=[...currentValue],item=currentValue[from];return cloned.splice(from,1),cloned.splice(to,0,item),setPath(path,cloned,values)}(path,payload,current))),_setErrors((errs=>function reorderErrors(path,{from,to},errors){const oldKeyStart=`${path}.${from}`,newKeyStart=`${path}.${to}`,clone=reorder_errors_spreadValues({},errors);return Object.keys(errors).every((key=>{let oldKey,newKey;if(key.startsWith(oldKeyStart)&&(oldKey=key,newKey=key.replace(oldKeyStart,newKeyStart)),key.startsWith(newKeyStart)&&(oldKey=key.replace(newKeyStart,oldKeyStart),newKey=key),oldKey&&newKey){const value1=clone[oldKey],value2=clone[newKey];return void 0===value2?delete clone[oldKey]:clone[oldKey]=value2,void 0===value1?delete clone[newKey]:clone[newKey]=value1,!1}return!0})),clone}(path,payload,errs)))}),[]),removeListItem=(0,react.useCallback)(((path,index)=>{clearFieldDirty(path),_setValues((current=>function removePath(path,index,values){const currentValue=getPath(path,values);return Array.isArray(currentValue)?setPath(path,currentValue.filter(((_,itemIndex)=>itemIndex!==index)),values):values}(path,index,current))),_setErrors((errs=>changeErrorIndices(path,index,errs,-1)))}),[]),insertListItem=(0,react.useCallback)(((path,item,index)=>{clearFieldDirty(path),_setValues((current=>function insertPath(path,value,index,values){const currentValue=getPath(path,values);if(!Array.isArray(currentValue))return values;const cloned=[...currentValue];return cloned.splice("number"==typeof index?index:cloned.length,0,value),setPath(path,cloned,values)}(path,item,index,current))),_setErrors((errs=>changeErrorIndices(path,index,errs,1)))}),[]),validate=(0,react.useCallback)((()=>{const results=validateValues(rules,values);return _setErrors(results.errors),results}),[values,rules]),validateField=(0,react.useCallback)((path=>{const results=validateFieldValue(path,rules,values);return results.hasError?setFieldError(path,results.error):clearFieldError(path),results}),[values,rules]),onReset=(0,react.useCallback)((event=>{event.preventDefault(),reset()}),[]),isTouched=(0,react.useCallback)((path=>getStatus(touched,path)),[touched]),isValid=(0,react.useCallback)((path=>path?!validateFieldValue(path,rules,values).hasError:!validateValues(rules,values).hasErrors),[values,rules]);return{values,errors,setValues,setErrors,setFieldValue,setFieldError,clearFieldError,clearErrors,reset,validate,validateField,reorderListItem,removeListItem,insertListItem,getInputProps:(path,{type="input",withError=!0,withFocus=!0}={})=>{const payload={onChange:function getInputOnChange(setValue){return val=>{if(val)if("function"==typeof val)setValue(val);else if("object"==typeof val&&"nativeEvent"in val){const{currentTarget}=val;currentTarget instanceof HTMLInputElement?"checkbox"===currentTarget.type?setValue(currentTarget.checked):setValue(currentTarget.value):(currentTarget instanceof HTMLTextAreaElement||currentTarget instanceof HTMLSelectElement)&&setValue(currentTarget.value)}else setValue(val);else setValue(val)}}((value=>setFieldValue(path,value)))};return withError&&(payload.error=errors[path]),"checkbox"===type?payload.checked=getPath(path,values):payload.value=getPath(path,values),withFocus&&(payload.onFocus=()=>setTouched((current=>__spreadProps(use_form_spreadValues({},current),{[path]:!0}))),payload.onBlur=()=>{if(shouldValidateOnChange(path,validateInputOnBlur)){const validationResults=validateFieldValue(path,rules,values);validationResults.hasError?setFieldError(path,validationResults.error):clearFieldError(path)}}),payload},onSubmit:(handleSubmit,handleValidationFailure)=>event=>{null==event||event.preventDefault();const results=validate();results.hasErrors?null==handleValidationFailure||handleValidationFailure(results.errors,values,event):null==handleSubmit||handleSubmit(transformValues(values),event)},onReset,isDirty:path=>{if(path){const overriddenValue=getPath(path,dirty);if("boolean"==typeof overriddenValue)return overriddenValue;const sliceOfValues=getPath(path,values),sliceOfInitialValues=getPath(path,valuesSnapshot.current);return!fast_deep_equal_default()(sliceOfValues,sliceOfInitialValues)}return Object.keys(dirty).length>0?getStatus(dirty):!fast_deep_equal_default()(values,valuesSnapshot.current)},isTouched,setTouched,setDirty,resetTouched,resetDirty:_values=>{const newSnapshot=_values?use_form_spreadValues(use_form_spreadValues({},values),_values):values;setValuesSnapshot(newSnapshot),setDirty({})},isValid,getTransformedValues:input=>transformValues(input||values)}}},"./node_modules/fast-deep-equal/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);