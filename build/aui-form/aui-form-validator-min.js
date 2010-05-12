AUI.add("aui-form-validator",function(U){var N=U.Lang,M=U.Object,i=N.isArray,o=N.isBoolean,h=N.isDate,Z=M.isEmpty,W=N.isFunction,AD=N.isNumber,v=N.isObject,Q=N.isString,B=N.trim,S="",R="form-validator",d="Invalid Date",k="|",AA="blurHandlers",H="checkbox",E="container",q="error",AB="errorClass",n="errorContainer",D="form",F="inputHandlers",u="message",a="messages",C="messageContainer",p="name",t="radio",T="rules",z="showAllMessages",b="showMessages",X="type",y="valid",f="validateOnBlur",s="validateOnInput",r="validClass",P="blur",m="errorField",w="input",j="reset",c="submit",g="submitError",K="validateField",e="validField",J=U.ClassNameManager.getClassName,AC=J(R,q),G=J(R,y),Y=J(R,q,E),I=J(R,u,E),V='<label class="'+Y+'"></label>',x='<div class="'+I+'"></div>';function l(){l.superclass.constructor.apply(this,arguments);}U.mix(l,{NAME:R,ATTRS:{errorContainer:{getter:function(A){return U.Node.create(A).cloneNode(true);},value:V},errorClass:{value:AC,validator:Q},form:{setter:U.one},messages:{value:{},validator:v},messageContainer:{getter:function(A){return U.Node.create(A).cloneNode(true);},value:x},rules:{validator:v,value:{}},showMessages:{value:true,validator:o},showAllMessages:{value:false,validator:o},validateOnBlur:{value:true,validator:o},validateOnInput:{value:false,validator:o},validClass:{value:G,validator:Q}},MESSAGES:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(AE,O,AF){var L=null;if(Q(AF)){var A=AF.split(/,\s*|\b\s*/).join(k);L=new RegExp("[.]("+A+")$","i");}return L&&L.test(AE);},date:function(O,L,AE){var A=new Date(O);return(h(A)&&(A!=d)&&!isNaN(A));},equalTo:function(O,L,AE){var A=U.one(AE);return A&&(B(A.val())==O);},max:function(L,A,O){return(l.toNumber(L)<=O);},maxLength:function(L,A,O){return(L.length<=O);},min:function(L,A,O){return(l.toNumber(L)>=O);},minLength:function(L,A,O){return(L.length>=O);},range:function(O,L,AE){var A=l.toNumber(O);return(A>=AE[0])&&(A<=AE[1]);},rangeLength:function(O,L,AE){var A=O.length;return(A>=AE[0])&&(A<=AE[1]);},required:function(AF,O,AG){var A=this;if(U.FormValidator.isCheckable(O)){var L=O.get(p);var AE=A.getElementsByName(L);return(AE.filter(":checked").size()>0);}else{return !!AF;}}},isCheckable:function(L){var A=L.get(X).toLowerCase();return(A==H||A==t);},toNumber:function(A){return parseFloat(A)||0;}});U.each(l.REGEX,function(L,A){l.RULES[A]=function(AE,O,AF){return l.REGEX[A].test(AE);};});U.extend(l,U.Base,{blurHandlers:[],inputHandlers:[],errorContainers:{},errors:{},initializer:function(){var A=this;A.bindUI();},bindUI:function(){var A=this;A._createEvents();A._bindValidation();},addFieldError:function(AE,O){var A=this;var AF=A.errors;var L=AE.get(p);if(!AF[L]){AF[L]=[];}AF[L].push(O);},clearFieldError:function(L){var A=this;delete A.errors[L.get(p)];},eachRule:function(L){var A=this;U.each(A.get(T),function(O,AE){if(W(L)){L.apply(A,[O,AE]);}});},getField:function(L){var A=this;if(Q(L)){L=A.getElementsByName(L).item(0);}return L;},getFieldError:function(L){var A=this;return A.errors[L.get(p)];},hasErrors:function(){var A=this;
return !Z(A.errors);},getElementsByName:function(L){var A=this;return A.get(D).all('[name="'+L+'"]');},getFieldErrorContainer:function(AE){var A=this;var L=AE.get(p);var O=A.errorContainers;if(!O[L]){O[L]=A.get(n);}return O[L];},getFieldErrorMessage:function(AH,AG){var AI=this;var AJ=AH.get(p);var O=AI.get(a)[AJ]||{};var A=AI.get(T)[AJ];var L=l.MESSAGES;var AF={};if(AG in A){var AE=U.Array(A[AG]);U.each(AE,function(AM,AL){AF[AL]=[AM].join(S);});}var AK=(O[AG]||L[AG]||L.DEFAULT);return U.substitute(AK,AF);},highlight:function(AE){var L=this;var A=L.get(AB);var O=L.get(r);AE.removeClass(O).addClass(A);},unhighlight:function(AE){var L=this;var A=L.get(AB);var O=L.get(r);AE.removeClass(A).addClass(O);},printErrorStack:function(O,L,AE){var A=this;if(!A.get(z)){AE=AE.slice(0,1);}L.empty();U.each(AE,function(AG,AF){var AH=A.getFieldErrorMessage(O,AG);var AI=A.get(C).addClass(AG);L.append(AI.html(AH));});},resetAllFields:function(){var A=this;A.eachRule(function(O,AE){var L=A.getField(AE);A.resetField(L);});},resetField:function(AF){var L=this;var A=L.get(AB);var AE=L.get(r);var O=L.getFieldErrorContainer(AF);O.remove();L.clearFieldError(AF);AF.removeClass(AE).removeClass(A);},validatable:function(O){var A=this;var AF=A.get(T)[O.get(p)];var AE=AF.required;var L=l.RULES.required.apply(A,[O.val(),O]);return(AE||(!AE&&L));},validate:function(){var A=this;A.eachRule(function(L,O){A.validateField(O);});},validateField:function(AE){var A=this;var O=A.getField(AE);var L=A.validatable(O);A.resetField(O);if(L){A.fire(K,{validator:{field:O}});}},_afterValidateOnBlurChange:function(L){var A=this;A._uiSetValidateOnBlur(L.newVal);},_afterValidateOnInputChange:function(L){var A=this;A._uiSetValidateOnInput(L.newVal);},_bindValidation:function(){var A=this;var L=A.get(D);A._uiSetValidateOnBlur(A.get(f));A._uiSetValidateOnInput(A.get(s));A.after("validateOnBlurChange",A._afterValidateOnBlurChange);A.after("validateOnInputChange",A._afterValidateOnInputChange);L.on(j,U.bind(A._onFormReset,A));L.on(c,U.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var L=function(O,AE){A.publish(O,{defaultFn:AE});};L(m,A._defErrorFieldFn);L(e,A._defValidFieldFn);L(K,A._defValidateFieldFn);},_defErrorFieldFn:function(AE){var A=this;var O=AE.validator;var AF=O.field;A.highlight(AF);if(A.get(b)){var L=A.getFieldErrorContainer(AF);AF.placeBefore(L);A.printErrorStack(AF,L,O.errors);}},_defValidFieldFn:function(L){var A=this;var O=L.validator.field;A.unhighlight(O);},_defValidateFieldFn:function(O){var L=this;var AE=O.validator.field;var AF=L.get(T)[AE.get(p)];U.each(AF,function(AJ,AH){var AI=l.RULES[AH];var AG=B(AE.val());if(W(AI)&&!AI.apply(L,[AG,AE,AJ])){L.addFieldError(AE,AH);}});var A=L.getFieldError(AE);if(A){L.fire(m,{validator:{field:AE,errors:A}});}else{L.fire(e,{validator:{field:AE}});}},_onBlurField:function(L){var A=this;var O=L.currentTarget.get(p);A.validateField(O);},_onFieldInputChange:function(L){var A=this;A.validateField(L.currentTarget);},_onFormSubmit:function(L){var A=this;var O={validator:{formEvent:L}};A.validate();if(A.hasErrors()){O.validator.errors=A.errors;A.fire(g,O);L.halt();}else{A.fire(c,O);}},_onFormReset:function(L){var A=this;A.resetAllFields();},_bindValidateHelper:function(AG,AF,O,L){var A=this;var AE=A.get(D);A._unbindHandlers(L);if(AG){A.eachRule(function(AI,AJ){var AH=A.getElementsByName(AJ);A[L].push(AH.on(AF,U.bind(O,A)));});}},_uiSetValidateOnInput:function(L){var A=this;A._bindValidateHelper(L,w,A._onFieldInputChange,F);},_uiSetValidateOnBlur:function(L){var A=this;A._bindValidateHelper(L,P,A._onBlurField,AA);},_unbindHandlers:function(L){var A=this;U.each(A[L],function(O){O.detach();});A[L]=[];}});U.FormValidator=l;},"@VERSION@",{requires:["aui-base","aui-event-input","substitute"]});