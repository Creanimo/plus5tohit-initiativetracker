var R=Symbol.for("immer-nothing"),z=Symbol.for("immer-draftable"),u=Symbol.for("immer-state");function h(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var N=Object.getPrototypeOf;function O(e){return !!e&&!!e[u]}function I(e){return e?ue(e)||Array.isArray(e)||!!e[z]||!!e.constructor?.[z]||v(e)||k(e):false}var me=Object.prototype.constructor.toString();function ue(e){if(!e||typeof e!="object")return  false;let t=N(e);if(t===null)return  true;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?true:typeof r=="function"&&Function.toString.call(r)===me}function _(e,t){j(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e);}):e.forEach((r,n)=>t(n,r,e));}function j(e){let t=e[u];return t?t.o:Array.isArray(e)?1:v(e)?2:k(e)?3:0}function C(e,t){return j(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function X(e,t,r){let n=j(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r;}function ye(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function v(e){return e instanceof Map}function k(e){return e instanceof Set}function T(e){return e.e||e.t}function L(e,t){if(v(e))return new Map(e);if(k(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=ue(e);if(t===true||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[u];let i=Reflect.ownKeys(n);for(let f=0;f<i.length;f++){let l=i[f],c=n[l];c.writable===false&&(c.writable=true,c.configurable=true),(c.get||c.set)&&(n[l]={configurable:true,writable:true,enumerable:c.enumerable,value:e[l]});}return Object.create(N(e),n)}else {let n=N(e);if(n!==null&&r)return {...e};let i=Object.create(n);return Object.assign(i,e)}}function H(e,t=false){return $(e)||O(e)||!I(e)||(j(e)>1&&(e.set=e.add=e.clear=e.delete=Pe),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>H(n,true))),e}function Pe(){h(2);}function $(e){return Object.isFrozen(e)}var re={};function w(e){let t=re[e];return t||h(0,e),t}var U;function K(){return U}function xe(e,t){return {a:[],i:e,p:t,P:true,d:0}}function ne(e,t){t&&(w("Patches"),e.f=[],e.h=[],e.b=t);}function V(e){Y(e),e.a.forEach(ge),e.a=null;}function Y(e){e===U&&(U=e.i);}function ae(e){return U=xe(U,e)}function ge(e){let t=e[u];t.o===0||t.o===1?t.x():t.m=true;}function oe(e,t){t.d=t.a.length;let r=t.a[0];return e!==void 0&&e!==r?(r[u].s&&(V(t),h(4)),I(e)&&(e=Z(t,e),t.i||ee(t,e)),t.f&&w("Patches").T(r[u].t,e,t.f,t.h)):e=Z(t,r,[]),V(t),t.f&&t.b(t.f,t.h),e!==R?e:void 0}function Z(e,t,r){if($(t))return t;let n=t[u];if(!n)return _(t,(i,f)=>le(e,n,t,i,f,r)),t;if(n.n!==e)return t;if(!n.s)return ee(e,n.t,true),n.t;if(!n.c){n.c=true,n.n.d--;let i=n.e,f=i,l=false;n.o===3&&(f=new Set(i),i.clear(),l=true),_(f,(c,b)=>le(e,n,i,c,b,r,l)),ee(e,i,false),r&&e.f&&w("Patches").g(n,r,e.f,e.h);}return n.e}function le(e,t,r,n,i,f,l){if(O(i)){let c=f&&t&&t.o!==3&&!C(t.r,n)?f.concat(n):void 0,b=Z(e,i,c);if(X(r,n,b),O(b))e.P=false;else return}else l&&r.add(i);if(I(i)&&!$(i)){if(!e.p.y&&e.d<1)return;Z(e,i),(!t||!t.n.i)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&ee(e,i);}}function ee(e,t,r=false){!e.i&&e.p.y&&e.P&&H(t,r);}function pe(e,t){let r=Array.isArray(e),n={o:r?1:0,n:t?t.n:K(),s:false,c:false,r:{},i:t,t:e,u:null,e:null,x:null,l:false},i=n,f=ce;r&&(i=[n],f=q);let{revoke:l,proxy:c}=Proxy.revocable(i,f);return n.u=c,n.x=l,c}var ce={get(e,t){if(t===u)return e;let r=T(e);if(!C(r,t))return be(e,r,t);let n=r[t];return e.c||!I(n)?n:n===ie(e.t,t)?(se(e),e.e[t]=B(n,e)):n},has(e,t){return t in T(e)},ownKeys(e){return Reflect.ownKeys(T(e))},set(e,t,r){let n=de(T(e),t);if(n?.set)return n.set.call(e.u,r),true;if(!e.s){let i=ie(T(e),t),f=i?.[u];if(f&&f.t===r)return e.e[t]=r,e.r[t]=false,true;if(ye(r,i)&&(r!==void 0||C(e.t,t)))return  true;se(e),E(e);}return e.e[t]===r&&(r!==void 0||t in e.e)||Number.isNaN(r)&&Number.isNaN(e.e[t])||(e.e[t]=r,e.r[t]=true),true},deleteProperty(e,t){return ie(e.t,t)!==void 0||t in e.t?(e.r[t]=false,se(e),E(e)):delete e.r[t],e.e&&delete e.e[t],true},getOwnPropertyDescriptor(e,t){let r=T(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:true,configurable:e.o!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){h(11);},getPrototypeOf(e){return N(e.t)},setPrototypeOf(){h(12);}},q={};_(ce,(e,t)=>{q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};});q.deleteProperty=function(e,t){return q.set.call(this,e,t,void 0)};q.set=function(e,t,r){return ce.set.call(this,e[0],t,r,e[0])};function ie(e,t){let r=e[u];return (r?T(r):e)[t]}function be(e,t,r){let n=de(t,r);return n?"value"in n?n.value:n.get?.call(e.u):void 0}function de(e,t){if(!(t in e))return;let r=N(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=N(r);}}function E(e){e.s||(e.s=true,e.i&&E(e.i));}function se(e){e.e||(e.e=L(e.t,e.n.p.S));}var te=class{constructor(t){this.y=true;this.S=false;this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let f=r;r=t;let l=this;return function(b=f,...a){return l.produce(b,o=>r.call(this,o,...a))}}typeof r!="function"&&h(6),n!==void 0&&typeof n!="function"&&h(7);let i;if(I(t)){let f=ae(this),l=B(t,void 0),c=true;try{i=r(l),c=!1;}finally{c?V(f):Y(f);}return ne(f,n),oe(i,f)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===R&&(i=void 0),this.y&&H(i,true),n){let f=[],l=[];w("Patches").T(t,i,f,l),n(f,l);}return i}else h(1,t);};this.produceWithPatches=(t,r)=>{if(typeof t=="function")return (l,...c)=>this.produceWithPatches(l,b=>t(b,...c));let n,i;return [this.produce(t,r,(l,c)=>{n=l,i=c;}),n,i]};typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof t?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy);}createDraft(t){I(t)||h(8),O(t)&&(t=fe(t));let r=ae(this),n=B(t,void 0);return n[u].l=true,Y(r),n}finishDraft(t,r){let n=t&&t[u];(!n||!n.l)&&h(9);let{n:i}=n;return ne(i,r),oe(void 0,i)}setAutoFreeze(t){this.y=t;}setUseStrictShallowCopy(t){this.S=t;}applyPatches(t,r){let n;for(n=r.length-1;n>=0;n--){let f=r[n];if(f.path.length===0&&f.op==="replace"){t=f.value;break}}n>-1&&(r=r.slice(n+1));let i=w("Patches").A;return O(t)?i(t,r):this.produce(t,f=>i(f,r))}};function B(e,t){let r=v(e)?w("MapSet").I(e,t):k(e)?w("MapSet").D(e,t):pe(e,t);return (t?t.n:K()).a.push(r),r}function fe(e){return O(e)||h(10,e),he(e)}function he(e){if(!I(e)||$(e))return e;let t=e[u],r;if(t){if(!t.s)return t.t;t.c=true,r=L(e,t.n.p.S);}else r=L(e,true);return _(r,(n,i)=>{X(r,n,he(i));}),t&&(t.c=false),r}var M=new te,qt=M.produce;M.produceWithPatches.bind(M);M.setAutoFreeze.bind(M);M.setUseStrictShallowCopy.bind(M);M.applyPatches.bind(M);M.createDraft.bind(M);M.finishDraft.bind(M);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var browser = {};

var createLogger = {};

var config = {};

var hasRequiredConfig;

function requireConfig () {
	if (hasRequiredConfig) return config;
	hasRequiredConfig = 1;
	Object.defineProperty(config, "__esModule", { value: true });
	config.ROARR_LOG_FORMAT_VERSION = config.ROARR_VERSION = void 0;
	// This needs to be updated manually because there is no way
	// to know the package version at the build time.
	config.ROARR_VERSION = '5.0.0';
	config.ROARR_LOG_FORMAT_VERSION = '2.0.0';
	
	return config;
}

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	Object.defineProperty(constants, "__esModule", { value: true });
	constants.logLevels = void 0;
	constants.logLevels = {
	    debug: 20,
	    error: 50,
	    fatal: 60,
	    info: 30,
	    trace: 10,
	    warn: 40,
	};
	
	return constants;
}

var hasOwnProperty = {};

var hasRequiredHasOwnProperty;

function requireHasOwnProperty () {
	if (hasRequiredHasOwnProperty) return hasOwnProperty;
	hasRequiredHasOwnProperty = 1;
	Object.defineProperty(hasOwnProperty, "__esModule", { value: true });
	hasOwnProperty.hasOwnProperty = void 0;
	/**
	 * A stricter type guard.
	 * @see https://tsplay.dev/WK8zGw
	 */
	const hasOwnProperty$1 = (object, property) => {
	    return Object.prototype.hasOwnProperty.call(object, property);
	};
	hasOwnProperty.hasOwnProperty = hasOwnProperty$1;
	
	return hasOwnProperty;
}

var isBrowser = {};

var hasRequiredIsBrowser;

function requireIsBrowser () {
	if (hasRequiredIsBrowser) return isBrowser;
	hasRequiredIsBrowser = 1;
	Object.defineProperty(isBrowser, "__esModule", { value: true });
	isBrowser.isBrowser = void 0;
	const isBrowser$1 = () => typeof window !== 'undefined';
	isBrowser.isBrowser = isBrowser$1;
	
	return isBrowser;
}

var isTruthy = {};

var hasRequiredIsTruthy;

function requireIsTruthy () {
	if (hasRequiredIsTruthy) return isTruthy;
	hasRequiredIsTruthy = 1;
	Object.defineProperty(isTruthy, "__esModule", { value: true });
	isTruthy.isTruthy = void 0;
	const isTruthy$1 = (value) => {
	    return ['true', 't', 'yes', 'y', 'on', '1'].includes(value.trim().toLowerCase());
	};
	isTruthy.isTruthy = isTruthy$1;
	
	return isTruthy;
}

var createMockLogger = {};

var hasRequiredCreateMockLogger;

function requireCreateMockLogger () {
	if (hasRequiredCreateMockLogger) return createMockLogger;
	hasRequiredCreateMockLogger = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createMockLogger = void 0;
		const constants_1 = requireConstants();
		const createChildLogger = (log, logLevel) => {
		    return (a, b, c, d, e, f, g, h, index, index_) => {
		        log.child({
		            logLevel,
		        })(a, b, c, d, e, f, g, h, index, index_);
		    };
		};
		const createMockLogger = (onMessage, parentContext) => {
		    // eslint-disable-next-line unicorn/consistent-function-scoping
		    const log = () => {
		        return undefined;
		    };
		    log.adopt = async (routine) => {
		        return routine();
		    };
		    log.child = () => {
		        return (0, exports.createMockLogger)(onMessage, parentContext);
		    };
		    log.getContext = () => {
		        return {};
		    };
		    log.debug = createChildLogger(log, constants_1.logLevels.debug);
		    log.debugOnce = createChildLogger(log, constants_1.logLevels.debug);
		    log.error = createChildLogger(log, constants_1.logLevels.error);
		    log.errorOnce = createChildLogger(log, constants_1.logLevels.error);
		    log.fatal = createChildLogger(log, constants_1.logLevels.fatal);
		    log.fatalOnce = createChildLogger(log, constants_1.logLevels.fatal);
		    log.info = createChildLogger(log, constants_1.logLevels.info);
		    log.infoOnce = createChildLogger(log, constants_1.logLevels.info);
		    log.trace = createChildLogger(log, constants_1.logLevels.trace);
		    log.traceOnce = createChildLogger(log, constants_1.logLevels.trace);
		    log.warn = createChildLogger(log, constants_1.logLevels.warn);
		    log.warnOnce = createChildLogger(log, constants_1.logLevels.warn);
		    return log;
		};
		exports.createMockLogger = createMockLogger;
		
	} (createMockLogger));
	return createMockLogger;
}

var printf = {};

var createPrintf = {};

var boolean$1 = {};

var hasRequiredBoolean$1;

function requireBoolean$1 () {
	if (hasRequiredBoolean$1) return boolean$1;
	hasRequiredBoolean$1 = 1;
	Object.defineProperty(boolean$1, "__esModule", { value: true });
	boolean$1.boolean = void 0;
	/**
	 * Copy function from deprecated `boolean` npm package v3.2.0 to avoid breaking changes.
	 *
	 * @see https://www.npmjs.com/package/boolean?activeTab=code
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- any from source `boolean` package v3.2.0
	const boolean = function (value) {
	    switch (Object.prototype.toString.call(value)) {
	        case '[object String]':
	            return ['true', 't', 'yes', 'y', 'on', '1'].includes(value.trim().toLowerCase());
	        case '[object Number]':
	            return value.valueOf() === 1;
	        case '[object Boolean]':
	            return value.valueOf();
	        default:
	            return false;
	    }
	};
	boolean$1.boolean = boolean;
	return boolean$1;
}

var tokenize = {};

var hasRequiredTokenize;

function requireTokenize () {
	if (hasRequiredTokenize) return tokenize;
	hasRequiredTokenize = 1;
	Object.defineProperty(tokenize, "__esModule", { value: true });
	tokenize.tokenize = void 0;
	const TokenRule = /(?:%(?<flag>([+0-]|-\+))?(?<width>\d+)?(?<position>\d+\$)?(?<precision>\.\d+)?(?<conversion>[%BCESb-iosux]))|(\\%)/g;
	const tokenize$1 = (subject) => {
	    let matchResult;
	    const tokens = [];
	    let argumentIndex = 0;
	    let lastIndex = 0;
	    let lastToken = null;
	    while ((matchResult = TokenRule.exec(subject)) !== null) {
	        if (matchResult.index > lastIndex) {
	            lastToken = {
	                literal: subject.slice(lastIndex, matchResult.index),
	                type: 'literal',
	            };
	            tokens.push(lastToken);
	        }
	        const match = matchResult[0];
	        lastIndex = matchResult.index + match.length;
	        if (match === '\\%' || match === '%%') {
	            if (lastToken && lastToken.type === 'literal') {
	                lastToken.literal += '%';
	            }
	            else {
	                lastToken = {
	                    literal: '%',
	                    type: 'literal',
	                };
	                tokens.push(lastToken);
	            }
	        }
	        else if (matchResult.groups) {
	            lastToken = {
	                conversion: matchResult.groups.conversion,
	                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- intentional per @gajus
	                flag: matchResult.groups.flag || null,
	                placeholder: match,
	                position: matchResult.groups.position ? Number.parseInt(matchResult.groups.position, 10) - 1 : argumentIndex++,
	                precision: matchResult.groups.precision ? Number.parseInt(matchResult.groups.precision.slice(1), 10) : null,
	                type: 'placeholder',
	                width: matchResult.groups.width ? Number.parseInt(matchResult.groups.width, 10) : null,
	            };
	            tokens.push(lastToken);
	        }
	    }
	    if (lastIndex <= subject.length - 1) {
	        if (lastToken && lastToken.type === 'literal') {
	            lastToken.literal += subject.slice(lastIndex);
	        }
	        else {
	            tokens.push({
	                literal: subject.slice(lastIndex),
	                type: 'literal',
	            });
	        }
	    }
	    return tokens;
	};
	tokenize.tokenize = tokenize$1;
	return tokenize;
}

var hasRequiredCreatePrintf;

function requireCreatePrintf () {
	if (hasRequiredCreatePrintf) return createPrintf;
	hasRequiredCreatePrintf = 1;
	Object.defineProperty(createPrintf, "__esModule", { value: true });
	createPrintf.createPrintf = void 0;
	const boolean_1 = requireBoolean$1();
	const tokenize_1 = requireTokenize();
	const formatDefaultUnboundExpression = (_subject, token) => {
	    return token.placeholder;
	};
	const createPrintf$1 = (configuration) => {
	    var _a;
	    // eslint-disable-next-line unicorn/consistent-function-scoping -- intentional per @gajus
	    const padValue = (value, width, flag) => {
	        if (flag === '-') {
	            return value.padEnd(width, ' ');
	        }
	        else if (flag === '-+') {
	            return ((Number(value) >= 0 ? '+' : '') + value).padEnd(width, ' ');
	        }
	        else if (flag === '+') {
	            return ((Number(value) >= 0 ? '+' : '') + value).padStart(width, ' ');
	        }
	        else if (flag === '0') {
	            return value.padStart(width, '0');
	        }
	        else {
	            return value.padStart(width, ' ');
	        }
	    };
	    const formatUnboundExpression = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.formatUnboundExpression) !== null && _a !== void 0 ? _a : formatDefaultUnboundExpression;
	    const cache = {};
	    // eslint-disable-next-line complexity
	    return (subject, ...boundValues) => {
	        let tokens = cache[subject];
	        if (!tokens) {
	            tokens = cache[subject] = (0, tokenize_1.tokenize)(subject);
	        }
	        let result = '';
	        for (const token of tokens) {
	            if (token.type === 'literal') {
	                result += token.literal;
	            }
	            else {
	                let boundValue = boundValues[token.position];
	                if (boundValue === undefined) {
	                    result += formatUnboundExpression(subject, token, boundValues);
	                }
	                else if (token.conversion === 'b') {
	                    result += (0, boolean_1.boolean)(boundValue) ? 'true' : 'false';
	                }
	                else if (token.conversion === 'B') {
	                    result += (0, boolean_1.boolean)(boundValue) ? 'TRUE' : 'FALSE';
	                }
	                else if (token.conversion === 'c') {
	                    result += boundValue;
	                }
	                else if (token.conversion === 'C') {
	                    result += String(boundValue).toUpperCase();
	                }
	                else if (token.conversion === 'i' || token.conversion === 'd') {
	                    boundValue = String(Math.trunc(boundValue));
	                    if (token.width !== null) {
	                        boundValue = padValue(boundValue, token.width, token.flag);
	                    }
	                    result += boundValue;
	                }
	                else if (token.conversion === 'e') {
	                    result += Number(boundValue)
	                        .toExponential();
	                }
	                else if (token.conversion === 'E') {
	                    result += Number(boundValue)
	                        .toExponential()
	                        .toUpperCase();
	                }
	                else if (token.conversion === 'f') {
	                    if (token.precision !== null) {
	                        boundValue = Number(boundValue).toFixed(token.precision);
	                    }
	                    if (token.width !== null) {
	                        boundValue = padValue(String(boundValue), token.width, token.flag);
	                    }
	                    result += boundValue;
	                }
	                else if (token.conversion === 'o') {
	                    result += (Number.parseInt(String(boundValue), 10) >>> 0).toString(8);
	                }
	                else if (token.conversion === 's') {
	                    if (token.width !== null) {
	                        boundValue = padValue(String(boundValue), token.width, token.flag);
	                    }
	                    result += boundValue;
	                }
	                else if (token.conversion === 'S') {
	                    if (token.width !== null) {
	                        boundValue = padValue(String(boundValue), token.width, token.flag);
	                    }
	                    result += String(boundValue).toUpperCase();
	                }
	                else if (token.conversion === 'u') {
	                    result += Number.parseInt(String(boundValue), 10) >>> 0;
	                }
	                else if (token.conversion === 'x') {
	                    boundValue = (Number.parseInt(String(boundValue), 10) >>> 0).toString(16);
	                    if (token.width !== null) {
	                        boundValue = padValue(String(boundValue), token.width, token.flag);
	                    }
	                    result += boundValue;
	                }
	                else {
	                    throw new Error('Unknown format specifier.');
	                }
	            }
	        }
	        return result;
	    };
	};
	createPrintf.createPrintf = createPrintf$1;
	return createPrintf;
}

var hasRequiredPrintf;

function requirePrintf () {
	if (hasRequiredPrintf) return printf;
	hasRequiredPrintf = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.printf = exports.createPrintf = void 0;
		const createPrintf_1 = requireCreatePrintf();
		Object.defineProperty(exports, "createPrintf", { enumerable: true, get: function () { return createPrintf_1.createPrintf; } });
		exports.printf = (0, createPrintf_1.createPrintf)(); 
	} (printf));
	return printf;
}

var safeStableStringify = {exports: {}};

var hasRequiredSafeStableStringify;

function requireSafeStableStringify () {
	if (hasRequiredSafeStableStringify) return safeStableStringify.exports;
	hasRequiredSafeStableStringify = 1;
	(function (module, exports) {

		const { hasOwnProperty } = Object.prototype;

		const stringify = configure();

		// @ts-expect-error
		stringify.configure = configure;
		// @ts-expect-error
		stringify.stringify = stringify;

		// @ts-expect-error
		stringify.default = stringify;

		// @ts-expect-error used for named export
		exports.stringify = stringify;
		// @ts-expect-error used for named export
		exports.configure = configure;

		module.exports = stringify;

		// eslint-disable-next-line no-control-regex
		const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;

		// Escape C0 control characters, double quotes, the backslash and every code
		// unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
		function strEscape (str) {
		  // Some magic numbers that worked out fine while benchmarking with v8 8.0
		  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
		    return `"${str}"`
		  }
		  return JSON.stringify(str)
		}

		function sort (array, comparator) {
		  // Insertion sort is very efficient for small input sizes, but it has a bad
		  // worst case complexity. Thus, use native array sort for bigger values.
		  if (array.length > 2e2 || comparator) {
		    return array.sort(comparator)
		  }
		  for (let i = 1; i < array.length; i++) {
		    const currentValue = array[i];
		    let position = i;
		    while (position !== 0 && array[position - 1] > currentValue) {
		      array[position] = array[position - 1];
		      position--;
		    }
		    array[position] = currentValue;
		  }
		  return array
		}

		const typedArrayPrototypeGetSymbolToStringTag =
		  Object.getOwnPropertyDescriptor(
		    Object.getPrototypeOf(
		      Object.getPrototypeOf(
		        new Int8Array()
		      )
		    ),
		    Symbol.toStringTag
		  ).get;

		function isTypedArrayWithEntries (value) {
		  return typedArrayPrototypeGetSymbolToStringTag.call(value) !== undefined && value.length !== 0
		}

		function stringifyTypedArray (array, separator, maximumBreadth) {
		  if (array.length < maximumBreadth) {
		    maximumBreadth = array.length;
		  }
		  const whitespace = separator === ',' ? '' : ' ';
		  let res = `"0":${whitespace}${array[0]}`;
		  for (let i = 1; i < maximumBreadth; i++) {
		    res += `${separator}"${i}":${whitespace}${array[i]}`;
		  }
		  return res
		}

		function getCircularValueOption (options) {
		  if (hasOwnProperty.call(options, 'circularValue')) {
		    const circularValue = options.circularValue;
		    if (typeof circularValue === 'string') {
		      return `"${circularValue}"`
		    }
		    if (circularValue == null) {
		      return circularValue
		    }
		    if (circularValue === Error || circularValue === TypeError) {
		      return {
		        toString () {
		          throw new TypeError('Converting circular structure to JSON')
		        }
		      }
		    }
		    throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
		  }
		  return '"[Circular]"'
		}

		function getDeterministicOption (options) {
		  let value;
		  if (hasOwnProperty.call(options, 'deterministic')) {
		    value = options.deterministic;
		    if (typeof value !== 'boolean' && typeof value !== 'function') {
		      throw new TypeError('The "deterministic" argument must be of type boolean or comparator function')
		    }
		  }
		  return value === undefined ? true : value
		}

		function getBooleanOption (options, key) {
		  let value;
		  if (hasOwnProperty.call(options, key)) {
		    value = options[key];
		    if (typeof value !== 'boolean') {
		      throw new TypeError(`The "${key}" argument must be of type boolean`)
		    }
		  }
		  return value === undefined ? true : value
		}

		function getPositiveIntegerOption (options, key) {
		  let value;
		  if (hasOwnProperty.call(options, key)) {
		    value = options[key];
		    if (typeof value !== 'number') {
		      throw new TypeError(`The "${key}" argument must be of type number`)
		    }
		    if (!Number.isInteger(value)) {
		      throw new TypeError(`The "${key}" argument must be an integer`)
		    }
		    if (value < 1) {
		      throw new RangeError(`The "${key}" argument must be >= 1`)
		    }
		  }
		  return value === undefined ? Infinity : value
		}

		function getItemCount (number) {
		  if (number === 1) {
		    return '1 item'
		  }
		  return `${number} items`
		}

		function getUniqueReplacerSet (replacerArray) {
		  const replacerSet = new Set();
		  for (const value of replacerArray) {
		    if (typeof value === 'string' || typeof value === 'number') {
		      replacerSet.add(String(value));
		    }
		  }
		  return replacerSet
		}

		function getStrictOption (options) {
		  if (hasOwnProperty.call(options, 'strict')) {
		    const value = options.strict;
		    if (typeof value !== 'boolean') {
		      throw new TypeError('The "strict" argument must be of type boolean')
		    }
		    if (value) {
		      return (value) => {
		        let message = `Object can not safely be stringified. Received type ${typeof value}`;
		        if (typeof value !== 'function') message += ` (${value.toString()})`;
		        throw new Error(message)
		      }
		    }
		  }
		}

		function configure (options) {
		  options = { ...options };
		  const fail = getStrictOption(options);
		  if (fail) {
		    if (options.bigint === undefined) {
		      options.bigint = false;
		    }
		    if (!('circularValue' in options)) {
		      options.circularValue = Error;
		    }
		  }
		  const circularValue = getCircularValueOption(options);
		  const bigint = getBooleanOption(options, 'bigint');
		  const deterministic = getDeterministicOption(options);
		  const comparator = typeof deterministic === 'function' ? deterministic : undefined;
		  const maximumDepth = getPositiveIntegerOption(options, 'maximumDepth');
		  const maximumBreadth = getPositiveIntegerOption(options, 'maximumBreadth');

		  function stringifyFnReplacer (key, parent, stack, replacer, spacer, indentation) {
		    let value = parent[key];

		    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
		      value = value.toJSON(key);
		    }
		    value = replacer.call(parent, key, value);

		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        let res = '';
		        let join = ',';
		        const originalIndentation = indentation;

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          if (spacer !== '') {
		            indentation += spacer;
		            res += `\n${indentation}`;
		            join = `,\n${indentation}`;
		          }
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          if (spacer !== '') {
		            res += `\n${originalIndentation}`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        let whitespace = '';
		        let separator = '';
		        if (spacer !== '') {
		          indentation += spacer;
		          join = `,\n${indentation}`;
		          whitespace = ' ';
		        }
		        const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (deterministic && !isTypedArrayWithEntries(value)) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifyFnReplacer(key, value, stack, replacer, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`;
		            separator = join;
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
		          separator = join;
		        }
		        if (spacer !== '' && separator.length > 1) {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifyArrayReplacer (key, value, stack, replacer, spacer, indentation) {
		    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
		      value = value.toJSON(key);
		    }

		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        const originalIndentation = indentation;
		        let res = '';
		        let join = ',';

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          if (spacer !== '') {
		            indentation += spacer;
		            res += `\n${indentation}`;
		            join = `,\n${indentation}`;
		          }
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          if (spacer !== '') {
		            res += `\n${originalIndentation}`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }
		        stack.push(value);
		        let whitespace = '';
		        if (spacer !== '') {
		          indentation += spacer;
		          join = `,\n${indentation}`;
		          whitespace = ' ';
		        }
		        let separator = '';
		        for (const key of replacer) {
		          const tmp = stringifyArrayReplacer(key, value[key], stack, replacer, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`;
		            separator = join;
		          }
		        }
		        if (spacer !== '' && separator.length > 1) {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifyIndent (key, value, stack, spacer, indentation) {
		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (typeof value.toJSON === 'function') {
		          value = value.toJSON(key);
		          // Prevent calling `toJSON` again.
		          if (typeof value !== 'object') {
		            return stringifyIndent(key, value, stack, spacer, indentation)
		          }
		          if (value === null) {
		            return 'null'
		          }
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }
		        const originalIndentation = indentation;

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          indentation += spacer;
		          let res = `\n${indentation}`;
		          const join = `,\n${indentation}`;
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          res += `\n${originalIndentation}`;
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        indentation += spacer;
		        const join = `,\n${indentation}`;
		        let res = '';
		        let separator = '';
		        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (isTypedArrayWithEntries(value)) {
		          res += stringifyTypedArray(value, join, maximumBreadth);
		          keys = keys.slice(value.length);
		          maximumPropertiesToStringify -= value.length;
		          separator = join;
		        }
		        if (deterministic) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifyIndent(key, value[key], stack, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}: ${tmp}`;
		            separator = join;
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
		          separator = join;
		        }
		        if (separator !== '') {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifySimple (key, value, stack) {
		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (typeof value.toJSON === 'function') {
		          value = value.toJSON(key);
		          // Prevent calling `toJSON` again
		          if (typeof value !== 'object') {
		            return stringifySimple(key, value, stack)
		          }
		          if (value === null) {
		            return 'null'
		          }
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        let res = '';

		        const hasLength = value.length !== undefined;
		        if (hasLength && Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifySimple(String(i), value[i], stack);
		            res += tmp !== undefined ? tmp : 'null';
		            res += ',';
		          }
		          const tmp = stringifySimple(String(i), value[i], stack);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `,"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        let separator = '';
		        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (hasLength && isTypedArrayWithEntries(value)) {
		          res += stringifyTypedArray(value, ',', maximumBreadth);
		          keys = keys.slice(value.length);
		          maximumPropertiesToStringify -= value.length;
		          separator = ',';
		        }
		        if (deterministic) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifySimple(key, value[key], stack);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${tmp}`;
		            separator = ',';
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringify (value, replacer, space) {
		    if (arguments.length > 1) {
		      let spacer = '';
		      if (typeof space === 'number') {
		        spacer = ' '.repeat(Math.min(space, 10));
		      } else if (typeof space === 'string') {
		        spacer = space.slice(0, 10);
		      }
		      if (replacer != null) {
		        if (typeof replacer === 'function') {
		          return stringifyFnReplacer('', { '': value }, [], replacer, spacer, '')
		        }
		        if (Array.isArray(replacer)) {
		          return stringifyArrayReplacer('', value, [], getUniqueReplacerSet(replacer), spacer, '')
		        }
		      }
		      if (spacer.length !== 0) {
		        return stringifyIndent('', value, [], spacer, '')
		      }
		    }
		    return stringifySimple('', value, [])
		  }

		  return stringify
		} 
	} (safeStableStringify, safeStableStringify.exports));
	return safeStableStringify.exports;
}

var hasRequiredCreateLogger;

function requireCreateLogger () {
	if (hasRequiredCreateLogger) return createLogger;
	hasRequiredCreateLogger = 1;
	(function (exports) {
		var __importDefault = (createLogger && createLogger.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createLogger = void 0;
		const config_1 = requireConfig();
		const constants_1 = requireConstants();
		const hasOwnProperty_1 = requireHasOwnProperty();
		const isBrowser_1 = requireIsBrowser();
		const isTruthy_1 = requireIsTruthy();
		const createMockLogger_1 = requireCreateMockLogger();
		const fast_printf_1 = requirePrintf();
		const safe_stable_stringify_1 = __importDefault(requireSafeStableStringify());
		let loggedWarningAsyncLocalContext = false;
		const getGlobalRoarrContext = () => {
		    return globalThis.ROARR;
		};
		const createDefaultAsyncLocalContext = () => {
		    return {
		        messageContext: {},
		        transforms: [],
		    };
		};
		const getAsyncLocalContext = () => {
		    const asyncLocalStorage = getGlobalRoarrContext().asyncLocalStorage;
		    if (!asyncLocalStorage) {
		        throw new Error('AsyncLocalContext is unavailable.');
		    }
		    const asyncLocalContext = asyncLocalStorage.getStore();
		    if (asyncLocalContext) {
		        return asyncLocalContext;
		    }
		    return createDefaultAsyncLocalContext();
		};
		const isAsyncLocalContextAvailable = () => {
		    return Boolean(getGlobalRoarrContext().asyncLocalStorage);
		};
		const getSequence = () => {
		    if (isAsyncLocalContextAvailable()) {
		        const asyncLocalContext = getAsyncLocalContext();
		        if ((0, hasOwnProperty_1.hasOwnProperty)(asyncLocalContext, 'sequenceRoot') &&
		            (0, hasOwnProperty_1.hasOwnProperty)(asyncLocalContext, 'sequence') &&
		            typeof asyncLocalContext.sequence === 'number') {
		            return (String(asyncLocalContext.sequenceRoot) +
		                '.' +
		                String(asyncLocalContext.sequence++));
		        }
		        return String(getGlobalRoarrContext().sequence++);
		    }
		    return String(getGlobalRoarrContext().sequence++);
		};
		const createChildLogger = (log, logLevel) => {
		    return (a, b, c, d, e, f, g, h, index, index_) => {
		        log.child({
		            logLevel,
		        })(a, b, c, d, e, f, g, h, index, index_);
		    };
		};
		const MAX_ONCE_ENTRIES = 1000;
		const createOnceChildLogger = (log, logLevel) => {
		    return (a, b, c, d, e, f, g, h, index, index_) => {
		        const key = (0, safe_stable_stringify_1.default)({
		            a,
		            b,
		            c,
		            d,
		            e,
		            f,
		            g,
		            h,
		            i: index,
		            j: index_,
		            logLevel,
		        });
		        if (!key) {
		            throw new Error('Expected key to be a string');
		        }
		        const onceLog = getGlobalRoarrContext().onceLog;
		        if (onceLog.has(key)) {
		            return;
		        }
		        onceLog.add(key);
		        if (onceLog.size > MAX_ONCE_ENTRIES) {
		            onceLog.clear();
		        }
		        log.child({
		            logLevel,
		        })(a, b, c, d, e, f, g, h, index, index_);
		    };
		};
		const createLogger$1 = (onMessage, parentMessageContext = {}, transforms = []) => {
		    var _a;
		    if (!(0, isBrowser_1.isBrowser)() && typeof process !== 'undefined') {
		        // eslint-disable-next-line node/no-process-env
		        const enabled = (0, isTruthy_1.isTruthy)((_a = process.env.ROARR_LOG) !== null && _a !== void 0 ? _a : '');
		        if (!enabled) {
		            return (0, createMockLogger_1.createMockLogger)(onMessage, parentMessageContext);
		        }
		    }
		    const log = (a, b, c, d, e, f, g, h, index, index_) => {
		        const time = Date.now();
		        const sequence = getSequence();
		        let asyncLocalContext;
		        if (isAsyncLocalContextAvailable()) {
		            asyncLocalContext = getAsyncLocalContext();
		        }
		        else {
		            asyncLocalContext = createDefaultAsyncLocalContext();
		        }
		        let context;
		        let message;
		        if (typeof a === 'string') {
		            context = {
		                ...asyncLocalContext.messageContext,
		                ...parentMessageContext,
		            };
		        }
		        else {
		            context = {
		                ...asyncLocalContext.messageContext,
		                ...parentMessageContext,
		                ...a,
		            };
		        }
		        if (typeof a === 'string' && b === undefined) {
		            message = a;
		        }
		        else if (typeof a === 'string') {
		            if (!a.includes('%')) {
		                throw new Error('When a string parameter is followed by other arguments, then it is assumed that you are attempting to format a message using printf syntax. You either forgot to add printf bindings or if you meant to add context to the log message, pass them in an object as the first parameter.');
		            }
		            message = (0, fast_printf_1.printf)(a, b, c, d, e, f, g, h, index, index_);
		        }
		        else {
		            let fallbackMessage = b;
		            if (typeof b !== 'string') {
		                if (b === undefined) {
		                    fallbackMessage = '';
		                }
		                else {
		                    throw new TypeError('Message must be a string. Received ' + typeof b + '.');
		                }
		            }
		            message = (0, fast_printf_1.printf)(fallbackMessage, c, d, e, f, g, h, index, index_);
		        }
		        let packet = {
		            context,
		            message,
		            sequence,
		            time,
		            version: config_1.ROARR_LOG_FORMAT_VERSION,
		        };
		        for (const transform of [...asyncLocalContext.transforms, ...transforms]) {
		            packet = transform(packet);
		            if (typeof packet !== 'object' || packet === null) {
		                throw new Error('Message transform function must return a message object.');
		            }
		        }
		        onMessage(packet);
		    };
		    /**
		     * Creates a child logger with the provided context.
		     * If context is an object, then its properties are prepended to all descending logs.
		     * If context is a function, then that function is used to process all descending logs.
		     */
		    log.child = (context) => {
		        let asyncLocalContext;
		        if (isAsyncLocalContextAvailable()) {
		            asyncLocalContext = getAsyncLocalContext();
		        }
		        else {
		            asyncLocalContext = createDefaultAsyncLocalContext();
		        }
		        if (typeof context === 'function') {
		            return (0, exports.createLogger)(onMessage, {
		                ...asyncLocalContext.messageContext,
		                ...parentMessageContext,
		                ...context,
		            }, [context, ...transforms]);
		        }
		        return (0, exports.createLogger)(onMessage, {
		            ...asyncLocalContext.messageContext,
		            ...parentMessageContext,
		            ...context,
		        }, transforms);
		    };
		    log.getContext = () => {
		        let asyncLocalContext;
		        if (isAsyncLocalContextAvailable()) {
		            asyncLocalContext = getAsyncLocalContext();
		        }
		        else {
		            asyncLocalContext = createDefaultAsyncLocalContext();
		        }
		        return {
		            ...asyncLocalContext.messageContext,
		            ...parentMessageContext,
		        };
		    };
		    log.adopt = async (routine, context) => {
		        if (!isAsyncLocalContextAvailable()) {
		            if (loggedWarningAsyncLocalContext === false) {
		                loggedWarningAsyncLocalContext = true;
		                onMessage({
		                    context: {
		                        logLevel: constants_1.logLevels.warn,
		                        package: 'roarr',
		                    },
		                    message: 'async_hooks are unavailable; Roarr.adopt will not function as expected',
		                    sequence: getSequence(),
		                    time: Date.now(),
		                    version: config_1.ROARR_LOG_FORMAT_VERSION,
		                });
		            }
		            return routine();
		        }
		        const asyncLocalContext = getAsyncLocalContext();
		        let sequenceRoot;
		        if ((0, hasOwnProperty_1.hasOwnProperty)(asyncLocalContext, 'sequenceRoot') &&
		            (0, hasOwnProperty_1.hasOwnProperty)(asyncLocalContext, 'sequence') &&
		            typeof asyncLocalContext.sequence === 'number') {
		            sequenceRoot =
		                asyncLocalContext.sequenceRoot +
		                    '.' +
		                    String(asyncLocalContext.sequence++);
		        }
		        else {
		            sequenceRoot = String(getGlobalRoarrContext().sequence++);
		        }
		        let nextContext = {
		            ...asyncLocalContext.messageContext,
		        };
		        const nextTransforms = [...asyncLocalContext.transforms];
		        if (typeof context === 'function') {
		            nextTransforms.push(context);
		        }
		        else {
		            nextContext = {
		                ...nextContext,
		                ...context,
		            };
		        }
		        const asyncLocalStorage = getGlobalRoarrContext().asyncLocalStorage;
		        if (!asyncLocalStorage) {
		            throw new Error('Async local context unavailable.');
		        }
		        return asyncLocalStorage.run({
		            messageContext: nextContext,
		            sequence: 0,
		            sequenceRoot,
		            transforms: nextTransforms,
		        }, () => {
		            return routine();
		        });
		    };
		    log.debug = createChildLogger(log, constants_1.logLevels.debug);
		    log.debugOnce = createOnceChildLogger(log, constants_1.logLevels.debug);
		    log.error = createChildLogger(log, constants_1.logLevels.error);
		    log.errorOnce = createOnceChildLogger(log, constants_1.logLevels.error);
		    log.fatal = createChildLogger(log, constants_1.logLevels.fatal);
		    log.fatalOnce = createOnceChildLogger(log, constants_1.logLevels.fatal);
		    log.info = createChildLogger(log, constants_1.logLevels.info);
		    log.infoOnce = createOnceChildLogger(log, constants_1.logLevels.info);
		    log.trace = createChildLogger(log, constants_1.logLevels.trace);
		    log.traceOnce = createOnceChildLogger(log, constants_1.logLevels.trace);
		    log.warn = createChildLogger(log, constants_1.logLevels.warn);
		    log.warnOnce = createOnceChildLogger(log, constants_1.logLevels.warn);
		    return log;
		};
		exports.createLogger = createLogger$1;
		
	} (createLogger));
	return createLogger;
}

var createRoarrInitialGlobalStateBrowser = {};

var semverCompare;
var hasRequiredSemverCompare;

function requireSemverCompare () {
	if (hasRequiredSemverCompare) return semverCompare;
	hasRequiredSemverCompare = 1;
	semverCompare = function cmp (a, b) {
	    var pa = a.split('.');
	    var pb = b.split('.');
	    for (var i = 0; i < 3; i++) {
	        var na = Number(pa[i]);
	        var nb = Number(pb[i]);
	        if (na > nb) return 1;
	        if (nb > na) return -1;
	        if (!isNaN(na) && isNaN(nb)) return 1;
	        if (isNaN(na) && !isNaN(nb)) return -1;
	    }
	    return 0;
	};
	return semverCompare;
}

var hasRequiredCreateRoarrInitialGlobalStateBrowser;

function requireCreateRoarrInitialGlobalStateBrowser () {
	if (hasRequiredCreateRoarrInitialGlobalStateBrowser) return createRoarrInitialGlobalStateBrowser;
	hasRequiredCreateRoarrInitialGlobalStateBrowser = 1;
	var __importDefault = (createRoarrInitialGlobalStateBrowser && createRoarrInitialGlobalStateBrowser.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(createRoarrInitialGlobalStateBrowser, "__esModule", { value: true });
	createRoarrInitialGlobalStateBrowser.createRoarrInitialGlobalStateBrowser = void 0;
	const config_1 = requireConfig();
	const semver_compare_1 = __importDefault(requireSemverCompare());
	const createRoarrInitialGlobalStateBrowser$1 = (currentState) => {
	    const versions = (currentState.versions || []).concat();
	    if (versions.length > 1) {
	        versions.sort(semver_compare_1.default);
	    }
	    if (!versions.includes(config_1.ROARR_VERSION)) {
	        versions.push(config_1.ROARR_VERSION);
	    }
	    versions.sort(semver_compare_1.default);
	    return {
	        sequence: 0,
	        ...currentState,
	        versions,
	    };
	};
	createRoarrInitialGlobalStateBrowser.createRoarrInitialGlobalStateBrowser = createRoarrInitialGlobalStateBrowser$1;
	
	return createRoarrInitialGlobalStateBrowser;
}

var stringify = {};

var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify;
	hasRequiredStringify = 1;
	Object.defineProperty(stringify, "__esModule", { value: true });
	stringify.stringify = void 0;
	const safe_stable_stringify_1 = requireSafeStableStringify();
	const safeStringify = (0, safe_stable_stringify_1.configure)({
	    deterministic: false,
	    // The reason for the following values is because it is fairly easy
	    // to accidentally pass astronomically large objects to the logger.
	    // For context, we were debugging a UI slowdown that was caused by
	    // unknowingly trying to pass 5MB worth of data to the logger context.
	    //
	    // I am starting with hard limits for now to assess the impact of the changes,
	    // but we may want to make these configurable in the future.
	    maximumBreadth: 20,
	    maximumDepth: 10,
	    strict: false,
	});
	const stringify$1 = (value) => {
	    var _a;
	    try {
	        return (_a = safeStringify(value)) !== null && _a !== void 0 ? _a : '';
	    }
	    catch (error) {
	        // The only time I've seen this happen is when the value was excessively large.
	        // eslint-disable-next-line no-console
	        console.error('[roarr] could not serialize value', value);
	        throw error;
	    }
	};
	stringify.stringify = stringify$1;
	
	return stringify;
}

var getLogLevelName = {};

var hasRequiredGetLogLevelName;

function requireGetLogLevelName () {
	if (hasRequiredGetLogLevelName) return getLogLevelName;
	hasRequiredGetLogLevelName = 1;
	Object.defineProperty(getLogLevelName, "__esModule", { value: true });
	getLogLevelName.getLogLevelName = void 0;
	const getLogLevelName$1 = (numericLogLevel) => {
	    if (numericLogLevel <= 10) {
	        return 'trace';
	    }
	    if (numericLogLevel <= 20) {
	        return 'debug';
	    }
	    if (numericLogLevel <= 30) {
	        return 'info';
	    }
	    if (numericLogLevel <= 40) {
	        return 'warn';
	    }
	    if (numericLogLevel <= 50) {
	        return 'error';
	    }
	    return 'fatal';
	};
	getLogLevelName.getLogLevelName = getLogLevelName$1;
	
	return getLogLevelName;
}

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser;
	hasRequiredBrowser = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.getLogLevelName = exports.logLevels = exports.Roarr = exports.ROARR = void 0;
		const createLogger_1 = requireCreateLogger();
		const createRoarrInitialGlobalStateBrowser_1 = requireCreateRoarrInitialGlobalStateBrowser();
		const stringify_1 = requireStringify();
		const ROARR = (0, createRoarrInitialGlobalStateBrowser_1.createRoarrInitialGlobalStateBrowser)(globalThis.ROARR || {});
		exports.ROARR = ROARR;
		globalThis.ROARR = ROARR;
		const serializeMessage = (message) => {
		    return (0, stringify_1.stringify)(message);
		};
		const Roarr = (0, createLogger_1.createLogger)((message) => {
		    var _a;
		    if (ROARR.write) {
		        // Stringify message as soon as it is received to prevent
		        // properties of the context from being modified by reference.
		        ROARR.write(((_a = ROARR.serializeMessage) !== null && _a !== void 0 ? _a : serializeMessage)(message));
		    }
		});
		exports.Roarr = Roarr;
		var constants_1 = requireConstants();
		Object.defineProperty(exports, "logLevels", { enumerable: true, get: function () { return constants_1.logLevels; } });
		var getLogLevelName_1 = requireGetLogLevelName();
		Object.defineProperty(exports, "getLogLevelName", { enumerable: true, get: function () { return getLogLevelName_1.getLogLevelName; } });
		
	} (browser));
	return browser;
}

var browserExports = requireBrowser();

var dist = {};

var createLogWriter = {};

var createLogMethods = {};

var hasRequiredCreateLogMethods;

function requireCreateLogMethods () {
	if (hasRequiredCreateLogMethods) return createLogMethods;
	hasRequiredCreateLogMethods = 1;
	/* eslint-disable no-console */
	Object.defineProperty(createLogMethods, "__esModule", { value: true });
	createLogMethods.createLogMethods = void 0;
	var createLogMethods$1 = function () {
	    return {
	        debug: console.debug.bind(console),
	        error: console.error.bind(console),
	        fatal: console.error.bind(console),
	        info: console.info.bind(console),
	        trace: console.debug.bind(console),
	        warn: console.warn.bind(console),
	    };
	};
	createLogMethods.createLogMethods = createLogMethods$1;
	return createLogMethods;
}

var lib = {};

var boolean = {};

var hasRequiredBoolean;

function requireBoolean () {
	if (hasRequiredBoolean) return boolean;
	hasRequiredBoolean = 1;
	Object.defineProperty(boolean, "__esModule", { value: true });
	boolean.boolean = void 0;
	const boolean$1 = function (value) {
	    switch (Object.prototype.toString.call(value)) {
	        case '[object String]':
	            return ['true', 't', 'yes', 'y', 'on', '1'].includes(value.trim().toLowerCase());
	        case '[object Number]':
	            return value.valueOf() === 1;
	        case '[object Boolean]':
	            return value.valueOf();
	        default:
	            return false;
	    }
	};
	boolean.boolean = boolean$1;
	return boolean;
}

var isBooleanable = {};

var hasRequiredIsBooleanable;

function requireIsBooleanable () {
	if (hasRequiredIsBooleanable) return isBooleanable;
	hasRequiredIsBooleanable = 1;
	Object.defineProperty(isBooleanable, "__esModule", { value: true });
	isBooleanable.isBooleanable = void 0;
	const isBooleanable$1 = function (value) {
	    switch (Object.prototype.toString.call(value)) {
	        case '[object String]':
	            return [
	                'true', 't', 'yes', 'y', 'on', '1',
	                'false', 'f', 'no', 'n', 'off', '0'
	            ].includes(value.trim().toLowerCase());
	        case '[object Number]':
	            return [0, 1].includes(value.valueOf());
	        case '[object Boolean]':
	            return true;
	        default:
	            return false;
	    }
	};
	isBooleanable.isBooleanable = isBooleanable$1;
	return isBooleanable;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.isBooleanable = exports.boolean = void 0;
		const boolean_1 = requireBoolean();
		Object.defineProperty(exports, "boolean", { enumerable: true, get: function () { return boolean_1.boolean; } });
		const isBooleanable_1 = requireIsBooleanable();
		Object.defineProperty(exports, "isBooleanable", { enumerable: true, get: function () { return isBooleanable_1.isBooleanable; } }); 
	} (lib));
	return lib;
}

var isArguments;
var hasRequiredIsArguments;

function requireIsArguments () {
	if (hasRequiredIsArguments) return isArguments;
	hasRequiredIsArguments = 1;

	var toStr = Object.prototype.toString;

	isArguments = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};
	return isArguments;
}

var implementation;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;

	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = requireIsArguments(); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}

			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}

			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}

			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	implementation = keysShim;
	return implementation;
}

var objectKeys;
var hasRequiredObjectKeys;

function requireObjectKeys () {
	if (hasRequiredObjectKeys) return objectKeys;
	hasRequiredObjectKeys = 1;

	var slice = Array.prototype.slice;
	var isArgs = requireIsArguments();

	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : requireImplementation();

	var originalKeys = Object.keys;

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	objectKeys = keysShim;
	return objectKeys;
}

var esDefineProperty;
var hasRequiredEsDefineProperty;

function requireEsDefineProperty () {
	if (hasRequiredEsDefineProperty) return esDefineProperty;
	hasRequiredEsDefineProperty = 1;

	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	esDefineProperty = $defineProperty;
	return esDefineProperty;
}

var syntax;
var hasRequiredSyntax;

function requireSyntax () {
	if (hasRequiredSyntax) return syntax;
	hasRequiredSyntax = 1;

	/** @type {import('./syntax')} */
	syntax = SyntaxError;
	return syntax;
}

var type;
var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;

	/** @type {import('./type')} */
	type = TypeError;
	return type;
}

var gOPD;
var hasRequiredGOPD;

function requireGOPD () {
	if (hasRequiredGOPD) return gOPD;
	hasRequiredGOPD = 1;

	/** @type {import('./gOPD')} */
	gOPD = Object.getOwnPropertyDescriptor;
	return gOPD;
}

var gopd;
var hasRequiredGopd;

function requireGopd () {
	if (hasRequiredGopd) return gopd;
	hasRequiredGopd = 1;

	/** @type {import('.')} */
	var $gOPD = /*@__PURE__*/ requireGOPD();

	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	gopd = $gOPD;
	return gopd;
}

var defineDataProperty;
var hasRequiredDefineDataProperty;

function requireDefineDataProperty () {
	if (hasRequiredDefineDataProperty) return defineDataProperty;
	hasRequiredDefineDataProperty = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var gopd = /*@__PURE__*/ requireGopd();

	/** @type {import('.')} */
	defineDataProperty = function defineDataProperty(
		obj,
		property,
		value
	) {
		if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
			throw new $TypeError('`obj` must be an object or a function`');
		}
		if (typeof property !== 'string' && typeof property !== 'symbol') {
			throw new $TypeError('`property` must be a string or a symbol`');
		}
		if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
			throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
			throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
			throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
			throw new $TypeError('`loose`, if provided, must be a boolean');
		}

		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;

		/* @type {false | TypedPropertyDescriptor<unknown>} */
		var desc = !!gopd && gopd(obj, property);

		if ($defineProperty) {
			$defineProperty(obj, property, {
				configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
				enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
				value: value,
				writable: nonWritable === null && desc ? desc.writable : !nonWritable
			});
		} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
			// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
			obj[property] = value; // eslint-disable-line no-param-reassign
		} else {
			throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
		}
	};
	return defineDataProperty;
}

var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;

function requireHasPropertyDescriptors () {
	if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
	hasRequiredHasPropertyDescriptors = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var hasPropertyDescriptors = function hasPropertyDescriptors() {
		return !!$defineProperty;
	};

	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		// node v0.6 has a bug where array lengths can be Set but not Defined
		if (!$defineProperty) {
			return null;
		}
		try {
			return $defineProperty([], 'length', { value: 1 }).length !== 1;
		} catch (e) {
			// In Firefox 4-22, defining length on an array throws an exception.
			return true;
		}
	};

	hasPropertyDescriptors_1 = hasPropertyDescriptors;
	return hasPropertyDescriptors_1;
}

var defineProperties_1;
var hasRequiredDefineProperties;

function requireDefineProperties () {
	if (hasRequiredDefineProperties) return defineProperties_1;
	hasRequiredDefineProperties = 1;

	var keys = requireObjectKeys();
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var defineDataProperty = /*@__PURE__*/ requireDefineDataProperty();

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var supportsDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors()();

	var defineProperty = function (object, name, value, predicate) {
		if (name in object) {
			if (predicate === true) {
				if (object[name] === value) {
					return;
				}
			} else if (!isFunction(predicate) || !predicate()) {
				return;
			}
		}

		if (supportsDescriptors) {
			defineDataProperty(object, name, value, true);
		} else {
			defineDataProperty(object, name, value);
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	defineProperties_1 = defineProperties;
	return defineProperties_1;
}

var implementation_browser = {exports: {}};

/* eslint no-negated-condition: 0, no-new-func: 0 */

var hasRequiredImplementation_browser;

function requireImplementation_browser () {
	if (hasRequiredImplementation_browser) return implementation_browser.exports;
	hasRequiredImplementation_browser = 1;

	if (typeof self !== 'undefined') {
		implementation_browser.exports = self;
	} else if (typeof window !== 'undefined') {
		implementation_browser.exports = window;
	} else {
		implementation_browser.exports = Function('return this')();
	}
	return implementation_browser.exports;
}

var polyfill;
var hasRequiredPolyfill;

function requirePolyfill () {
	if (hasRequiredPolyfill) return polyfill;
	hasRequiredPolyfill = 1;

	var implementation = requireImplementation_browser();

	polyfill = function getPolyfill() {
		if (typeof commonjsGlobal !== 'object' || !commonjsGlobal || commonjsGlobal.Math !== Math || commonjsGlobal.Array !== Array) {
			return implementation;
		}
		return commonjsGlobal;
	};
	return polyfill;
}

var shim;
var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim;
	hasRequiredShim = 1;

	var define = requireDefineProperties();
	var gOPD = /*@__PURE__*/ requireGopd();
	var getPolyfill = requirePolyfill();

	shim = function shimGlobal() {
		var polyfill = getPolyfill();
		if (define.supportsDescriptors) {
			var descriptor = gOPD(polyfill, 'globalThis');
			if (
				!descriptor
				|| (
					descriptor.configurable
					&& (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)
				)
			) {
				Object.defineProperty(polyfill, 'globalThis', {
					configurable: true,
					enumerable: false,
					value: polyfill,
					writable: true
				});
			}
		} else if (typeof globalThis !== 'object' || globalThis !== polyfill) {
			polyfill.globalThis = polyfill;
		}
		return polyfill;
	};
	return shim;
}

var globalthis;
var hasRequiredGlobalthis;

function requireGlobalthis () {
	if (hasRequiredGlobalthis) return globalthis;
	hasRequiredGlobalthis = 1;

	var defineProperties = requireDefineProperties();

	var implementation = requireImplementation_browser();
	var getPolyfill = requirePolyfill();
	var shim = requireShim();

	var polyfill = getPolyfill();

	var getGlobal = function () { return polyfill; };

	defineProperties(getGlobal, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	globalthis = getGlobal;
	return globalthis;
}

var Liqe = {};

var errors = {};

var cjs = {};

var helpers = {};

var hasRequiredHelpers;

function requireHelpers () {
	if (hasRequiredHelpers) return helpers;
	hasRequiredHelpers = 1;
	helpers.__esModule = undefined;
	helpers.__esModule = true;

	// Misc helpers

	var objectSetPrototypeOfIsDefined = typeof Object.setPrototypeOf === "function";
	var objectGetPrototypeOfIsDefined = typeof Object.getPrototypeOf === "function";
	var objectDefinePropertyIsDefined = typeof Object.defineProperty === "function";
	var objectCreateIsDefined = typeof Object.create === "function";
	var objectHasOwnPropertyIsDefined =
	  typeof Object.prototype.hasOwnProperty === "function";

	var setPrototypeOf = function setPrototypeOf(target, prototype) {
	  if (objectSetPrototypeOfIsDefined) {
	    Object.setPrototypeOf(target, prototype);
	  } else {
	    target.__proto__ = prototype;
	  }
	};
	helpers.setPrototypeOf = setPrototypeOf;

	var getPrototypeOf = function getPrototypeOf(target) {
	  if (objectGetPrototypeOfIsDefined) {
	    return Object.getPrototypeOf(target);
	  } else {
	    return target.__proto__ || target.prototype;
	  }
	};
	helpers.getPrototypeOf = getPrototypeOf;

	// Object.defineProperty exists in IE8, but the implementation is buggy, so we
	// need to test if the call fails, and, if so, set a flag to use the shim, as if
	// the function were not defined. When this error is caught the first time, the
	// function is called again recursively, after the flag is set, so the desired
	// effect is achieved anyway.
	var ie8ObjectDefinePropertyBug = false;
	var defineProperty = function defineProperty(target, name, propertyDescriptor) {
	  if (objectDefinePropertyIsDefined && !ie8ObjectDefinePropertyBug) {
	    try {
	      Object.defineProperty(target, name, propertyDescriptor);
	    } catch (e) {
	      ie8ObjectDefinePropertyBug = true;
	      defineProperty(target, name, propertyDescriptor);
	    }
	  } else {
	    target[name] = propertyDescriptor.value;
	  }
	};
	helpers.defineProperty = defineProperty;

	var hasOwnProperty = function hasOwnProperty(target, name) {
	  if (objectHasOwnPropertyIsDefined) {
	    return target.hasOwnProperty(target, name);
	  } else {
	    return target[name] === undefined;
	  }
	};
	helpers.hasOwnProperty = hasOwnProperty;

	var objectCreate = function objectCreate(prototype, propertyDescriptors) {
	  if (objectCreateIsDefined) {
	    return Object.create(prototype, propertyDescriptors);
	  } else {
	    var F = function F() {};
	    F.prototype = prototype;
	    var result = new F();
	    if (typeof propertyDescriptors === "undefined") {
	      return result;
	    }
	    if (typeof propertyDescriptors === "null") {
	      throw new Error("PropertyDescriptors must not be null.");
	    }
	    if (typeof propertyDescriptors === "object") {
	      for (var key in propertyDescriptors) {
	        if (hasOwnProperty(propertyDescriptors, key)) {
	          result[key] = propertyDescriptors[key].value;
	        }
	      }
	    }

	    return result;
	  }
	};
	helpers.objectCreate = objectCreate;
	return helpers;
}

var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;
	(function (exports) {
		exports.__esModule = undefined;
		exports.__esModule = true;

		var helpers = requireHelpers();
		var setPrototypeOf = helpers.setPrototypeOf;
		var getPrototypeOf = helpers.getPrototypeOf;
		var defineProperty = helpers.defineProperty;
		var objectCreate = helpers.objectCreate;

		// Small test for IE6-8, which checks if the environment prints errors "nicely"
		// If not, a toString() method to be added to the error objects with formatting
		// like in more modern browsers
		var uglyErrorPrinting = new Error().toString() === "[object Error]";

		// For compatibility
		var extendableErrorName = "";

		function ExtendableError(message) {
		  // Get the constructor
		  var originalConstructor = this.constructor;
		  // Get the constructor name from the non-standard name property. If undefined
		  // (on old IEs), it uses the string representation of the function to extract
		  // the name. This should work in all cases, except for directly instantiated
		  // ExtendableError objects, for which the name of the ExtendableError class /
		  // function is used
		  var constructorName =
		    originalConstructor.name ||
		    (function () {
		      var constructorNameMatch = originalConstructor
		        .toString()
		        .match(/^function\s*([^\s(]+)/);
		      return constructorNameMatch === null
		        ? extendableErrorName
		          ? extendableErrorName
		          : "Error"
		        : constructorNameMatch[1];
		    })();
		  // If the constructor name is "Error", ...
		  var constructorNameIsError = constructorName === "Error";
		  // change it to the name of the ExtendableError class / function
		  var name = constructorNameIsError ? extendableErrorName : constructorName;

		  // Obtain a new Error instance. This also sets the message property already.
		  var instance = Error.apply(this, arguments);

		  // Set the prototype of this to the prototype of instance
		  setPrototypeOf(instance, getPrototypeOf(this));

		  // On old IEs, the instance will not extend our subclasses this way. The fix is to use this from the function call instead.
		  if (
		    !(instance instanceof originalConstructor) ||
		    !(instance instanceof ExtendableError)
		  ) {
		    var instance = this;
		    Error.apply(this, arguments);
		    defineProperty(instance, "message", {
		      configurable: true,
		      enumerable: false,
		      value: message,
		      writable: true,
		    });
		  }

		  // define the name property
		  defineProperty(instance, "name", {
		    configurable: true,
		    enumerable: false,
		    value: name,
		    writable: true,
		  });

		  // Use Error.captureStackTrace on V8 to capture the proper stack trace excluding any of our error classes
		  if (Error.captureStackTrace) {
		    // prettier-ignore
		    Error.captureStackTrace(
		      instance,
		      constructorNameIsError ? ExtendableError : originalConstructor
		    );
		  }
		  // instance.stack can still be undefined, in which case the best solution is to create a new Error object and get it from there
		  if (instance.stack === undefined) {
		    var err = new Error(message);
		    err.name = instance.name;
		    instance.stack = err.stack;
		  }

		  // If the environment does not have a proper string representation (IE), provide an alternative toString()
		  if (uglyErrorPrinting) {
		    defineProperty(instance, "toString", {
		      configurable: true,
		      enumerable: false,
		      value: function toString() {
		        return (
		          (this.name || "Error") +
		          (typeof this.message === "undefined" ? "" : ": " + this.message)
		        );
		      },
		      writable: true,
		    });
		  }

		  // We're done!
		  return instance;
		}

		// Get the name of the ExtendableError function or use the string literal
		extendableErrorName = ExtendableError.name || "ExtendableError";

		// Set the prototype of ExtendableError to an Error object
		ExtendableError.prototype = objectCreate(Error.prototype, {
		  constructor: {
		    value: Error,
		    enumerable: false,
		    writable: true,
		    configurable: true,
		  },
		});

		// Export
		exports.ExtendableError = ExtendableError;
		exports["default"] = exports.ExtendableError; 
	} (cjs));
	return cjs;
}

var hasRequiredErrors;

function requireErrors () {
	if (hasRequiredErrors) return errors;
	hasRequiredErrors = 1;
	Object.defineProperty(errors, "__esModule", { value: true });
	errors.SyntaxError = errors.LiqeError = void 0;
	const ts_error_1 = requireCjs();
	class LiqeError extends ts_error_1.ExtendableError {
	}
	errors.LiqeError = LiqeError;
	class SyntaxError extends LiqeError {
	    constructor(message, offset, line, column) {
	        super(message);
	        this.message = message;
	        this.offset = offset;
	        this.line = line;
	        this.column = column;
	    }
	}
	errors.SyntaxError = SyntaxError;
	return errors;
}

var filter = {};

var internalFilter = {};

var createStringTest = {};

var convertWildcardToRegex = {};

var hasRequiredConvertWildcardToRegex;

function requireConvertWildcardToRegex () {
	if (hasRequiredConvertWildcardToRegex) return convertWildcardToRegex;
	hasRequiredConvertWildcardToRegex = 1;
	Object.defineProperty(convertWildcardToRegex, "__esModule", { value: true });
	convertWildcardToRegex.convertWildcardToRegex = void 0;
	const WILDCARD_RULE = /(\*+)|(\?)/g;
	const convertWildcardToRegex$1 = (pattern) => {
	    return new RegExp(pattern.replaceAll(WILDCARD_RULE, (_match, p1) => {
	        return p1 ? '(.+?)' : '(.)';
	    }));
	};
	convertWildcardToRegex.convertWildcardToRegex = convertWildcardToRegex$1;
	return convertWildcardToRegex;
}

var escapeRegexString = {};

var hasRequiredEscapeRegexString;

function requireEscapeRegexString () {
	if (hasRequiredEscapeRegexString) return escapeRegexString;
	hasRequiredEscapeRegexString = 1;
	Object.defineProperty(escapeRegexString, "__esModule", { value: true });
	escapeRegexString.escapeRegexString = void 0;
	const ESCAPE_RULE = /[$()*+.?[\\\]^{|}]/g;
	const DASH_RULE = /-/g;
	const escapeRegexString$1 = (subject) => {
	    return subject.replaceAll(ESCAPE_RULE, '\\$&').replaceAll(DASH_RULE, '\\x2d');
	};
	escapeRegexString.escapeRegexString = escapeRegexString$1;
	return escapeRegexString;
}

var parseRegex = {};

var hasRequiredParseRegex;

function requireParseRegex () {
	if (hasRequiredParseRegex) return parseRegex;
	hasRequiredParseRegex = 1;
	Object.defineProperty(parseRegex, "__esModule", { value: true });
	parseRegex.parseRegex = void 0;
	const RegExpRule = /(\/?)(.+)\1([a-z]*)/;
	const FlagRule = /^(?!.*?(.).*?\1)[AJUXgimsux]+$/;
	const parseRegex$1 = (subject) => {
	    const match = RegExpRule.exec(subject);
	    if (!match) {
	        throw new Error('Invalid RegExp.');
	    }
	    if (match[3] && !FlagRule.test(match[3])) {
	        return new RegExp(subject);
	    }
	    return new RegExp(match[2], match[3]);
	};
	parseRegex.parseRegex = parseRegex$1;
	return parseRegex;
}

var hasRequiredCreateStringTest;

function requireCreateStringTest () {
	if (hasRequiredCreateStringTest) return createStringTest;
	hasRequiredCreateStringTest = 1;
	Object.defineProperty(createStringTest, "__esModule", { value: true });
	createStringTest.createStringTest = void 0;
	const convertWildcardToRegex_1 = requireConvertWildcardToRegex();
	const escapeRegexString_1 = requireEscapeRegexString();
	const parseRegex_1 = requireParseRegex();
	const createRegexTest = (regexCache, regex) => {
	    let rule;
	    if (regexCache[regex]) {
	        rule = regexCache[regex];
	    }
	    else {
	        rule = (0, parseRegex_1.parseRegex)(regex);
	        regexCache[regex] = rule;
	    }
	    return (subject) => {
	        var _a, _b;
	        return (_b = (_a = subject.match(rule)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : false;
	    };
	};
	const createStringTest$1 = (regexCache, ast) => {
	    if (ast.type !== 'Tag') {
	        throw new Error('Expected a tag expression.');
	    }
	    const { expression } = ast;
	    if (expression.type === 'RangeExpression') {
	        throw new Error('Unexpected range expression.');
	    }
	    if (expression.type === 'RegexExpression') {
	        return createRegexTest(regexCache, expression.value);
	    }
	    if (expression.type !== 'LiteralExpression') {
	        throw new Error('Expected a literal expression.');
	    }
	    const value = String(expression.value);
	    if ((value.includes('*') || value.includes('?')) &&
	        expression.quoted === false) {
	        return createRegexTest(regexCache, String((0, convertWildcardToRegex_1.convertWildcardToRegex)(value)) + 'ui');
	    }
	    else {
	        return createRegexTest(regexCache, '/(' + (0, escapeRegexString_1.escapeRegexString)(value) + ')/' + (expression.quoted ? 'u' : 'ui'));
	    }
	};
	createStringTest.createStringTest = createStringTest$1;
	return createStringTest;
}

var testComparisonRange = {};

var hasRequiredTestComparisonRange;

function requireTestComparisonRange () {
	if (hasRequiredTestComparisonRange) return testComparisonRange;
	hasRequiredTestComparisonRange = 1;
	Object.defineProperty(testComparisonRange, "__esModule", { value: true });
	testComparisonRange.testComparisonRange = void 0;
	const testComparisonRange$1 = (query, value, operator) => {
	    switch (operator) {
	        case ':<':
	            return value < query;
	        case ':<=':
	            return value <= query;
	        case ':=':
	            return value === query;
	        case ':>':
	            return value > query;
	        case ':>=':
	            return value >= query;
	        default:
	            throw new Error(`Unimplemented comparison operator: ${operator}`);
	    }
	};
	testComparisonRange.testComparisonRange = testComparisonRange$1;
	return testComparisonRange;
}

var testRange = {};

var hasRequiredTestRange;

function requireTestRange () {
	if (hasRequiredTestRange) return testRange;
	hasRequiredTestRange = 1;
	Object.defineProperty(testRange, "__esModule", { value: true });
	testRange.testRange = void 0;
	const testRange$1 = (value, range) => {
	    if (typeof value === 'number') {
	        if (value < range.min) {
	            return false;
	        }
	        if (value === range.min && !range.minInclusive) {
	            return false;
	        }
	        if (value > range.max) {
	            return false;
	        }
	        if (value === range.max && !range.maxInclusive) {
	            return false;
	        }
	        return true;
	    }
	    // @todo handle non-numeric ranges -- https://github.com/gajus/liqe/issues/3
	    return false;
	};
	testRange.testRange = testRange$1;
	return testRange;
}

var hasRequiredInternalFilter;

function requireInternalFilter () {
	if (hasRequiredInternalFilter) return internalFilter;
	hasRequiredInternalFilter = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.internalFilter = void 0;
		const createStringTest_1 = requireCreateStringTest();
		const testComparisonRange_1 = requireTestComparisonRange();
		const testRange_1 = requireTestRange();
		const createValueTest = (ast) => {
		    if (ast.type !== 'Tag') {
		        throw new Error('Expected a tag expression.');
		    }
		    const { expression } = ast;
		    if (expression.type === 'RangeExpression') {
		        return (value) => {
		            return (0, testRange_1.testRange)(value, expression.range);
		        };
		    }
		    if (expression.type === 'EmptyExpression') {
		        return () => {
		            return false;
		        };
		    }
		    const expressionValue = expression.value;
		    if (ast.operator && ast.operator.operator !== ':') {
		        const operator = ast.operator;
		        if (typeof expressionValue !== 'number') {
		            throw new TypeError('Expected a number.');
		        }
		        return (value) => {
		            if (typeof value !== 'number') {
		                return false;
		            }
		            return (0, testComparisonRange_1.testComparisonRange)(expressionValue, value, operator.operator);
		        };
		    }
		    else if (typeof expressionValue === 'boolean') {
		        return (value) => {
		            return value === expressionValue;
		        };
		    }
		    else if (expressionValue === null) {
		        return (value) => {
		            return value === null;
		        };
		    }
		    else {
		        const testString = (0, createStringTest_1.createStringTest)({}, ast);
		        return (value) => {
		            return testString(String(value));
		        };
		    }
		};
		const testValue = (ast, value, resultFast, path, highlights) => {
		    if (Array.isArray(value)) {
		        let foundMatch = false;
		        let index = 0;
		        for (const item of value) {
		            if (testValue(ast, item, resultFast, [...path, String(index++)], highlights)) {
		                if (resultFast) {
		                    return true;
		                }
		                foundMatch = true;
		            }
		        }
		        return foundMatch;
		    }
		    else if (typeof value === 'object' && value !== null) {
		        let foundMatch = false;
		        for (const key in value) {
		            if (testValue(ast, value[key], resultFast, [...path, key], highlights)) {
		                if (resultFast) {
		                    return true;
		                }
		                foundMatch = true;
		            }
		        }
		        return foundMatch;
		    }
		    if (ast.type !== 'Tag') {
		        throw new Error('Expected a tag expression.');
		    }
		    if (!ast.test) {
		        throw new Error('Expected test to be defined.');
		    }
		    const result = ast.test(value);
		    if (result) {
		        highlights.push({
		            ...(typeof result === 'string' && { keyword: result }),
		            path: path.join('.'),
		        });
		        return true;
		    }
		    return Boolean(result);
		};
		const testField = (row, ast, resultFast, path, highlights) => {
		    if (ast.type !== 'Tag') {
		        throw new Error('Expected a tag expression.');
		    }
		    if (!ast.test) {
		        ast.test = createValueTest(ast);
		    }
		    if (ast.field.type === 'ImplicitField') {
		        let foundMatch = false;
		        for (const fieldName in row) {
		            if (testValue({
		                ...ast,
		                field: {
		                    location: {
		                        end: -1,
		                        start: -1,
		                    },
		                    name: fieldName,
		                    quoted: true,
		                    quotes: 'double',
		                    type: 'Field',
		                },
		            }, row[fieldName], resultFast, [...path, fieldName], highlights)) {
		                if (resultFast) {
		                    return true;
		                }
		                foundMatch = true;
		            }
		        }
		        return foundMatch;
		    }
		    if (ast.field.name in row) {
		        return testValue(ast, row[ast.field.name], resultFast, path, highlights);
		    }
		    else if (ast.getValue && ast.field.path) {
		        return testValue(ast, ast.getValue(row), resultFast, ast.field.path, highlights);
		    }
		    else if (ast.field.path) {
		        let value = row;
		        for (const key of ast.field.path) {
		            if (typeof value !== 'object' || value === null) {
		                return false;
		            }
		            else if (key in value) {
		                value = value[key];
		            }
		            else {
		                return false;
		            }
		        }
		        return testValue(ast, value, resultFast, ast.field.path, highlights);
		    }
		    else {
		        return false;
		    }
		};
		const internalFilter = (ast, rows, resultFast = true, path = [], highlights = []) => {
		    if (ast.type === 'Tag') {
		        return rows.filter((row) => {
		            return testField(row, ast, resultFast, ast.field.type === 'ImplicitField' ? path : [...path, ast.field.name], highlights);
		        });
		    }
		    if (ast.type === 'UnaryOperator') {
		        const removeRows = (0, exports.internalFilter)(ast.operand, rows, resultFast, path, []);
		        return rows.filter((row) => {
		            return !removeRows.includes(row);
		        });
		    }
		    if (ast.type === 'ParenthesizedExpression') {
		        return (0, exports.internalFilter)(ast.expression, rows, resultFast, path, highlights);
		    }
		    if (!ast.left) {
		        throw new Error('Expected left to be defined.');
		    }
		    const leftRows = (0, exports.internalFilter)(ast.left, rows, resultFast, path, highlights);
		    if (!ast.right) {
		        throw new Error('Expected right to be defined.');
		    }
		    if (ast.type !== 'LogicalExpression') {
		        throw new Error('Expected a tag expression.');
		    }
		    if (ast.operator.operator === 'OR') {
		        const rightRows = (0, exports.internalFilter)(ast.right, rows, resultFast, path, highlights);
		        return Array.from(new Set([...leftRows, ...rightRows]));
		    }
		    else if (ast.operator.operator === 'AND') {
		        return (0, exports.internalFilter)(ast.right, leftRows, resultFast, path, highlights);
		    }
		    throw new Error('Unexpected state.');
		};
		exports.internalFilter = internalFilter; 
	} (internalFilter));
	return internalFilter;
}

var hasRequiredFilter;

function requireFilter () {
	if (hasRequiredFilter) return filter;
	hasRequiredFilter = 1;
	Object.defineProperty(filter, "__esModule", { value: true });
	filter.filter = void 0;
	const internalFilter_1 = requireInternalFilter();
	const filter$1 = (ast, data) => {
	    return (0, internalFilter_1.internalFilter)(ast, data);
	};
	filter.filter = filter$1;
	return filter;
}

var highlight = {};

var hasRequiredHighlight;

function requireHighlight () {
	if (hasRequiredHighlight) return highlight;
	hasRequiredHighlight = 1;
	Object.defineProperty(highlight, "__esModule", { value: true });
	highlight.highlight = void 0;
	const escapeRegexString_1 = requireEscapeRegexString();
	const internalFilter_1 = requireInternalFilter();
	const highlight$1 = (ast, data) => {
	    const highlights = [];
	    (0, internalFilter_1.internalFilter)(ast, [data], false, [], highlights);
	    const aggregatedHighlights = [];
	    for (const highlightNode of highlights) {
	        let aggregatedHighlight = aggregatedHighlights.find((maybeTarget) => {
	            return maybeTarget.path === highlightNode.path;
	        });
	        if (!aggregatedHighlight) {
	            aggregatedHighlight = {
	                keywords: [],
	                path: highlightNode.path,
	            };
	            aggregatedHighlights.push(aggregatedHighlight);
	        }
	        if (highlightNode.keyword) {
	            aggregatedHighlight.keywords.push(highlightNode.keyword);
	        }
	    }
	    return aggregatedHighlights.map((aggregatedHighlight) => {
	        if (aggregatedHighlight.keywords.length > 0) {
	            return {
	                path: aggregatedHighlight.path,
	                query: new RegExp('(' +
	                    aggregatedHighlight.keywords
	                        .map((keyword) => {
	                        return (0, escapeRegexString_1.escapeRegexString)(keyword.trim());
	                    })
	                        .join('|') +
	                    ')'),
	            };
	        }
	        return {
	            path: aggregatedHighlight.path,
	        };
	    });
	};
	highlight.highlight = highlight$1;
	return highlight;
}

var isSafeUnquotedExpression = {};

var hasRequiredIsSafeUnquotedExpression;

function requireIsSafeUnquotedExpression () {
	if (hasRequiredIsSafeUnquotedExpression) return isSafeUnquotedExpression;
	hasRequiredIsSafeUnquotedExpression = 1;
	Object.defineProperty(isSafeUnquotedExpression, "__esModule", { value: true });
	isSafeUnquotedExpression.isSafeUnquotedExpression = void 0;
	const isSafeUnquotedExpression$1 = (expression) => {
	    return /^[#$*@A-Z_a-z][#$*.@A-Z_a-z-]*$/.test(expression);
	};
	isSafeUnquotedExpression.isSafeUnquotedExpression = isSafeUnquotedExpression$1;
	return isSafeUnquotedExpression;
}

var parse = {};

var grammar = {};

var hasRequiredGrammar;

function requireGrammar () {
	if (hasRequiredGrammar) return grammar;
	hasRequiredGrammar = 1;
	Object.defineProperty(grammar, "__esModule", { value: true });
	// Generated automatically by nearley, version 2.20.1
	// http://github.com/Hardmath123/nearley
	// Bypasses TS6133. Allow declared but unused functions.
	//
	function id(d) {
	    return d[0];
	}
	const grammar$1 = {
	    Lexer: undefined,
	    ParserRules: [
	        {
	            name: 'main',
	            postprocess: (data) => data[1],
	            symbols: ['_', 'logical_expression', '_'],
	        },
	        { name: '_$ebnf$1', symbols: [] },
	        {
	            name: '_$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['_$ebnf$1', 'whitespace_character'],
	        },
	        { name: '_', postprocess: (data) => data[0].length, symbols: ['_$ebnf$1'] },
	        { name: '__$ebnf$1', symbols: ['whitespace_character'] },
	        {
	            name: '__$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['__$ebnf$1', 'whitespace_character'],
	        },
	        {
	            name: '__',
	            postprocess: (data) => data[0].length,
	            symbols: ['__$ebnf$1'],
	        },
	        { name: 'whitespace_character', postprocess: id, symbols: [/[\t\n\v\f ]/] },
	        { name: 'decimal$ebnf$1', postprocess: id, symbols: [{ literal: '-' }] },
	        { name: 'decimal$ebnf$1', postprocess: () => null, symbols: [] },
	        { name: 'decimal$ebnf$2', symbols: [/\d/] },
	        {
	            name: 'decimal$ebnf$2',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['decimal$ebnf$2', /\d/],
	        },
	        { name: 'decimal$ebnf$3$subexpression$1$ebnf$1', symbols: [/\d/] },
	        {
	            name: 'decimal$ebnf$3$subexpression$1$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['decimal$ebnf$3$subexpression$1$ebnf$1', /\d/],
	        },
	        {
	            name: 'decimal$ebnf$3$subexpression$1',
	            symbols: [{ literal: '.' }, 'decimal$ebnf$3$subexpression$1$ebnf$1'],
	        },
	        {
	            name: 'decimal$ebnf$3',
	            postprocess: id,
	            symbols: ['decimal$ebnf$3$subexpression$1'],
	        },
	        { name: 'decimal$ebnf$3', postprocess: () => null, symbols: [] },
	        {
	            name: 'decimal',
	            postprocess: (data) => Number.parseFloat((data[0] || '') +
	                data[1].join('') +
	                (data[2] ? '.' + data[2][1].join('') : '')),
	            symbols: ['decimal$ebnf$1', 'decimal$ebnf$2', 'decimal$ebnf$3'],
	        },
	        { name: 'dqstring$ebnf$1', symbols: [] },
	        {
	            name: 'dqstring$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['dqstring$ebnf$1', 'dstrchar'],
	        },
	        {
	            name: 'dqstring',
	            postprocess: (data) => data[1].join(''),
	            symbols: [{ literal: '"' }, 'dqstring$ebnf$1', { literal: '"' }],
	        },
	        { name: 'sqstring$ebnf$1', symbols: [] },
	        {
	            name: 'sqstring$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['sqstring$ebnf$1', 'sstrchar'],
	        },
	        {
	            name: 'sqstring',
	            postprocess: (data) => data[1].join(''),
	            symbols: [{ literal: "'" }, 'sqstring$ebnf$1', { literal: "'" }],
	        },
	        { name: 'dstrchar', postprocess: id, symbols: [/[^\n"\\]/] },
	        {
	            name: 'dstrchar',
	            postprocess: (data) => JSON.parse('"' + data.join('') + '"'),
	            symbols: [{ literal: '\\' }, 'strescape'],
	        },
	        { name: 'sstrchar', postprocess: id, symbols: [/[^\n'\\]/] },
	        {
	            name: 'sstrchar',
	            postprocess: (data) => JSON.parse('"' + data.join('') + '"'),
	            symbols: [{ literal: '\\' }, 'strescape'],
	        },
	        {
	            name: 'sstrchar$string$1',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: '\\' }, { literal: "'" }],
	        },
	        {
	            name: 'sstrchar',
	            postprocess: () => "'",
	            symbols: ['sstrchar$string$1'],
	        },
	        { name: 'strescape', postprocess: id, symbols: [/["/\\bfnrt]/] },
	        {
	            name: 'strescape',
	            postprocess: (data) => data.join(''),
	            symbols: [
	                { literal: 'u' },
	                /[\dA-Fa-f]/,
	                /[\dA-Fa-f]/,
	                /[\dA-Fa-f]/,
	                /[\dA-Fa-f]/,
	            ],
	        },
	        {
	            name: 'logical_expression',
	            postprocess: id,
	            symbols: ['two_op_logical_expression'],
	        },
	        {
	            name: 'two_op_logical_expression',
	            postprocess: (data) => ({
	                left: data[0],
	                location: {
	                    end: data[2].location.end,
	                    start: data[0].location.start,
	                },
	                operator: data[1],
	                right: data[2],
	                type: 'LogicalExpression',
	            }),
	            symbols: [
	                'pre_two_op_logical_expression',
	                'boolean_operator',
	                'post_one_op_logical_expression',
	            ],
	        },
	        {
	            name: 'two_op_logical_expression',
	            postprocess: (data) => ({
	                left: data[0],
	                location: {
	                    end: data[2].location.end,
	                    start: data[0].location.start,
	                },
	                operator: {
	                    operator: 'AND',
	                    type: 'ImplicitBooleanOperator',
	                },
	                right: data[2],
	                type: 'LogicalExpression',
	            }),
	            symbols: [
	                'pre_two_op_implicit_logical_expression',
	                '__',
	                'post_one_op_implicit_logical_expression',
	            ],
	        },
	        {
	            name: 'two_op_logical_expression',
	            postprocess: (d) => d[0],
	            symbols: ['one_op_logical_expression'],
	        },
	        {
	            name: 'pre_two_op_implicit_logical_expression',
	            postprocess: (d) => d[0],
	            symbols: ['two_op_logical_expression'],
	        },
	        {
	            name: 'pre_two_op_implicit_logical_expression',
	            postprocess: (d) => ({
	                expression: d[2],
	                location: { end: d[4].location.start + 1, start: d[0].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                'parentheses_open',
	                '_',
	                'two_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'post_one_op_implicit_logical_expression',
	            postprocess: (d) => d[0],
	            symbols: ['one_op_logical_expression'],
	        },
	        {
	            name: 'post_one_op_implicit_logical_expression',
	            postprocess: (d) => ({
	                expression: d[2],
	                location: { end: d[4].location.start + 1, start: d[0].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                'parentheses_open',
	                '_',
	                'one_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'pre_two_op_logical_expression',
	            postprocess: (d) => d[0],
	            symbols: ['two_op_logical_expression', '__'],
	        },
	        {
	            name: 'pre_two_op_logical_expression',
	            postprocess: (d) => ({
	                expression: d[2],
	                location: { end: d[4].location.start + 1, start: d[0].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                'parentheses_open',
	                '_',
	                'two_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'one_op_logical_expression',
	            postprocess: (d) => ({
	                expression: {
	                    location: {
	                        end: d[0].location.start + 1,
	                        start: d[0].location.start + 1,
	                    },
	                    type: 'EmptyExpression',
	                },
	                location: { end: d[2].location.start + 1, start: d[0].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: ['parentheses_open', '_', 'parentheses_close'],
	        },
	        {
	            name: 'one_op_logical_expression',
	            postprocess: (d) => ({
	                expression: d[2],
	                location: { end: d[4].location.start + 1, start: d[0].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                'parentheses_open',
	                '_',
	                'two_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'one_op_logical_expression$string$1',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: 'N' }, { literal: 'O' }, { literal: 'T' }],
	        },
	        {
	            name: 'one_op_logical_expression',
	            postprocess: (data, start) => {
	                return {
	                    location: {
	                        end: data[1].location.end,
	                        start,
	                    },
	                    operand: data[1],
	                    operator: 'NOT',
	                    type: 'UnaryOperator',
	                };
	            },
	            symbols: ['one_op_logical_expression$string$1', 'post_boolean_primary'],
	        },
	        {
	            name: 'one_op_logical_expression',
	            postprocess: (data, start) => {
	                return {
	                    location: {
	                        end: data[1].location.end,
	                        start,
	                    },
	                    operand: data[1],
	                    operator: '-',
	                    type: 'UnaryOperator',
	                };
	            },
	            symbols: [{ literal: '-' }, 'boolean_primary'],
	        },
	        {
	            name: 'one_op_logical_expression',
	            postprocess: (d) => d[0],
	            symbols: ['boolean_primary'],
	        },
	        {
	            name: 'post_one_op_logical_expression',
	            postprocess: (d) => d[1],
	            symbols: ['__', 'one_op_logical_expression'],
	        },
	        {
	            name: 'post_one_op_logical_expression',
	            postprocess: (d) => ({
	                expression: d[2],
	                location: { end: d[4].location + 1, start: d[0].location },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                'parentheses_open',
	                '_',
	                'one_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'parentheses_open',
	            postprocess: (data, start) => ({ location: { start } }),
	            symbols: [{ literal: '(' }],
	        },
	        {
	            name: 'parentheses_close',
	            postprocess: (data, start) => ({ location: { start } }),
	            symbols: [{ literal: ')' }],
	        },
	        {
	            name: 'boolean_operator$string$1',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: 'O' }, { literal: 'R' }],
	        },
	        {
	            name: 'boolean_operator',
	            postprocess: (data, start) => ({
	                location: { end: start + 2, start },
	                operator: 'OR',
	                type: 'BooleanOperator',
	            }),
	            symbols: ['boolean_operator$string$1'],
	        },
	        {
	            name: 'boolean_operator$string$2',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: 'A' }, { literal: 'N' }, { literal: 'D' }],
	        },
	        {
	            name: 'boolean_operator',
	            postprocess: (data, start) => ({
	                location: { end: start + 3, start },
	                operator: 'AND',
	                type: 'BooleanOperator',
	            }),
	            symbols: ['boolean_operator$string$2'],
	        },
	        { name: 'boolean_primary', postprocess: id, symbols: ['tag_expression'] },
	        {
	            name: 'post_boolean_primary',
	            postprocess: (d) => ({
	                expression: d[3],
	                location: { end: d[5].location.start + 1, start: d[1].location.start },
	                type: 'ParenthesizedExpression',
	            }),
	            symbols: [
	                '__',
	                'parentheses_open',
	                '_',
	                'two_op_logical_expression',
	                '_',
	                'parentheses_close',
	            ],
	        },
	        {
	            name: 'post_boolean_primary',
	            postprocess: (d) => d[1],
	            symbols: ['__', 'boolean_primary'],
	        },
	        {
	            name: 'tag_expression',
	            postprocess: (data, start) => {
	                const field = {
	                    location: data[0].location,
	                    name: data[0].name,
	                    path: data[0].name.split('.').filter(Boolean),
	                    quoted: data[0].quoted,
	                    quotes: data[0].quotes,
	                    type: 'Field',
	                };
	                if (!data[0].quotes) {
	                    delete field.quotes;
	                }
	                return {
	                    field,
	                    location: {
	                        end: data[2].expression.location.end,
	                        start,
	                    },
	                    operator: data[1],
	                    ...data[2],
	                };
	            },
	            symbols: ['field', 'comparison_operator', 'expression'],
	        },
	        {
	            name: 'tag_expression',
	            postprocess: (data, start) => {
	                const field = {
	                    location: data[0].location,
	                    name: data[0].name,
	                    path: data[0].name.split('.').filter(Boolean),
	                    quoted: data[0].quoted,
	                    quotes: data[0].quotes,
	                    type: 'Field',
	                };
	                if (!data[0].quotes) {
	                    delete field.quotes;
	                }
	                return {
	                    expression: {
	                        location: {
	                            end: data[1].location.end,
	                            start: data[1].location.end,
	                        },
	                        type: 'EmptyExpression',
	                    },
	                    field,
	                    location: {
	                        end: data[1].location.end,
	                        start,
	                    },
	                    operator: data[1],
	                    type: 'Tag',
	                };
	            },
	            symbols: ['field', 'comparison_operator'],
	        },
	        {
	            name: 'tag_expression',
	            postprocess: (data, start) => {
	                return {
	                    field: { type: 'ImplicitField' },
	                    location: { end: data[0].expression.location.end, start },
	                    ...data[0],
	                };
	            },
	            symbols: ['expression'],
	        },
	        { name: 'field$ebnf$1', symbols: [] },
	        {
	            name: 'field$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['field$ebnf$1', /[\w$.]/],
	        },
	        {
	            name: 'field',
	            postprocess: (data, start) => ({
	                location: { end: start + (data[0] + data[1].join('')).length, start },
	                name: data[0] + data[1].join(''),
	                quoted: false,
	                type: 'LiteralExpression',
	            }),
	            symbols: [/[$A-Z_a-z]/, 'field$ebnf$1'],
	        },
	        {
	            name: 'field',
	            postprocess: (data, start) => ({
	                location: { end: start + data[0].length + 2, start },
	                name: data[0],
	                quoted: true,
	                quotes: 'single',
	                type: 'LiteralExpression',
	            }),
	            symbols: ['sqstring'],
	        },
	        {
	            name: 'field',
	            postprocess: (data, start) => ({
	                location: { end: start + data[0].length + 2, start },
	                name: data[0],
	                quoted: true,
	                quotes: 'double',
	                type: 'LiteralExpression',
	            }),
	            symbols: ['dqstring'],
	        },
	        {
	            name: 'expression',
	            postprocess: (data, start) => ({
	                expression: {
	                    location: { end: start + data.join('').length, start },
	                    quoted: false,
	                    type: 'LiteralExpression',
	                    value: Number(data.join('')),
	                },
	                type: 'Tag',
	            }),
	            symbols: ['decimal'],
	        },
	        {
	            name: 'expression',
	            postprocess: (data, start) => ({
	                expression: {
	                    location: { end: start + data.join('').length, start },
	                    type: 'RegexExpression',
	                    value: data.join(''),
	                },
	                type: 'Tag',
	            }),
	            symbols: ['regex'],
	        },
	        { name: 'expression', postprocess: (data) => data[0], symbols: ['range'] },
	        {
	            name: 'expression',
	            postprocess: (data, start, reject) => {
	                const value = data.join('');
	                if (data[0] === 'AND' || data[0] === 'OR' || data[0] === 'NOT') {
	                    return reject;
	                }
	                let normalizedValue;
	                if (value === 'true') {
	                    normalizedValue = true;
	                }
	                else if (value === 'false') {
	                    normalizedValue = false;
	                }
	                else if (value === 'null') {
	                    normalizedValue = null;
	                }
	                else {
	                    normalizedValue = value;
	                }
	                return {
	                    expression: {
	                        location: {
	                            end: start + value.length,
	                            start,
	                        },
	                        quoted: false,
	                        type: 'LiteralExpression',
	                        value: normalizedValue,
	                    },
	                    type: 'Tag',
	                };
	            },
	            symbols: ['unquoted_value'],
	        },
	        {
	            name: 'expression',
	            postprocess: (data, start) => ({
	                expression: {
	                    location: { end: start + data.join('').length + 2, start },
	                    quoted: true,
	                    quotes: 'single',
	                    type: 'LiteralExpression',
	                    value: data.join(''),
	                },
	                type: 'Tag',
	            }),
	            symbols: ['sqstring'],
	        },
	        {
	            name: 'expression',
	            postprocess: (data, start) => ({
	                expression: {
	                    location: { end: start + data.join('').length + 2, start },
	                    quoted: true,
	                    quotes: 'double',
	                    type: 'LiteralExpression',
	                    value: data.join(''),
	                },
	                type: 'Tag',
	            }),
	            symbols: ['dqstring'],
	        },
	        {
	            name: 'range$string$1',
	            postprocess: (d) => d.join(''),
	            symbols: [
	                { literal: ' ' },
	                { literal: 'T' },
	                { literal: 'O' },
	                { literal: ' ' },
	            ],
	        },
	        {
	            name: 'range',
	            postprocess: (data, start) => {
	                return {
	                    expression: {
	                        location: {
	                            end: data[4].location.start + 1,
	                            start: data[0].location.start,
	                        },
	                        range: {
	                            max: data[3],
	                            maxInclusive: data[4].inclusive,
	                            min: data[1],
	                            minInclusive: data[0].inclusive,
	                        },
	                        type: 'RangeExpression',
	                    },
	                    location: {
	                        start,
	                    },
	                    type: 'Tag',
	                };
	            },
	            symbols: [
	                'range_open',
	                'decimal',
	                'range$string$1',
	                'decimal',
	                'range_close',
	            ],
	        },
	        {
	            name: 'range_open',
	            postprocess: (data, start) => ({ inclusive: true, location: { start } }),
	            symbols: [{ literal: '[' }],
	        },
	        {
	            name: 'range_open',
	            postprocess: (data, start) => ({ inclusive: false, location: { start } }),
	            symbols: [{ literal: '{' }],
	        },
	        {
	            name: 'range_close',
	            postprocess: (data, start) => ({ inclusive: true, location: { start } }),
	            symbols: [{ literal: ']' }],
	        },
	        {
	            name: 'range_close',
	            postprocess: (data, start) => ({ inclusive: false, location: { start } }),
	            symbols: [{ literal: '}' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: [{ literal: ':' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1$string$1',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: ':' }, { literal: '=' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: ['comparison_operator$subexpression$1$string$1'],
	        },
	        {
	            name: 'comparison_operator$subexpression$1$string$2',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: ':' }, { literal: '>' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: ['comparison_operator$subexpression$1$string$2'],
	        },
	        {
	            name: 'comparison_operator$subexpression$1$string$3',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: ':' }, { literal: '<' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: ['comparison_operator$subexpression$1$string$3'],
	        },
	        {
	            name: 'comparison_operator$subexpression$1$string$4',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: ':' }, { literal: '>' }, { literal: '=' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: ['comparison_operator$subexpression$1$string$4'],
	        },
	        {
	            name: 'comparison_operator$subexpression$1$string$5',
	            postprocess: (d) => d.join(''),
	            symbols: [{ literal: ':' }, { literal: '<' }, { literal: '=' }],
	        },
	        {
	            name: 'comparison_operator$subexpression$1',
	            symbols: ['comparison_operator$subexpression$1$string$5'],
	        },
	        {
	            name: 'comparison_operator',
	            postprocess: (data, start) => ({
	                location: { end: start + data[0][0].length, start },
	                operator: data[0][0],
	                type: 'ComparisonOperator',
	            }),
	            symbols: ['comparison_operator$subexpression$1'],
	        },
	        {
	            name: 'regex',
	            postprocess: (d) => d.join(''),
	            symbols: ['regex_body', 'regex_flags'],
	        },
	        { name: 'regex_body$ebnf$1', symbols: [] },
	        {
	            name: 'regex_body$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['regex_body$ebnf$1', 'regex_body_char'],
	        },
	        {
	            name: 'regex_body',
	            postprocess: (data) => '/' + data[1].join('') + '/',
	            symbols: [{ literal: '/' }, 'regex_body$ebnf$1', { literal: '/' }],
	        },
	        { name: 'regex_body_char', postprocess: id, symbols: [/[^\\]/] },
	        {
	            name: 'regex_body_char',
	            postprocess: (d) => '\\' + d[1],
	            symbols: [{ literal: '\\' }, /[^\\]/],
	        },
	        { name: 'regex_flags', symbols: [] },
	        { name: 'regex_flags$ebnf$1', symbols: [/[dgimsuy]/] },
	        {
	            name: 'regex_flags$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['regex_flags$ebnf$1', /[dgimsuy]/],
	        },
	        {
	            name: 'regex_flags',
	            postprocess: (d) => d[0].join(''),
	            symbols: ['regex_flags$ebnf$1'],
	        },
	        { name: 'unquoted_value$ebnf$1', symbols: [] },
	        {
	            name: 'unquoted_value$ebnf$1',
	            postprocess: (d) => d[0].concat([d[1]]),
	            symbols: ['unquoted_value$ebnf$1', /[\w#$*.?@\u0080-\uFFFF\-]/],
	        },
	        {
	            name: 'unquoted_value',
	            postprocess: (d) => d[0] + d[1].join(''),
	            symbols: [/[#$*?@A-Z_a-z\u0080-\uFFFF]/, 'unquoted_value$ebnf$1'],
	        },
	    ],
	    ParserStart: 'main',
	};
	grammar.default = grammar$1;
	return grammar;
}

var hydrateAst = {};

var createGetValueFunctionBody = {};

var isSafePath = {};

var hasRequiredIsSafePath;

function requireIsSafePath () {
	if (hasRequiredIsSafePath) return isSafePath;
	hasRequiredIsSafePath = 1;
	Object.defineProperty(isSafePath, "__esModule", { value: true });
	isSafePath.isSafePath = void 0;
	const SAFE_PATH_RULE = /^(\.(?:[_a-zA-Z]\w*|\0|[1-9]\d*))+$/u;
	const isSafePath$1 = (path) => {
	    return SAFE_PATH_RULE.test(path);
	};
	isSafePath.isSafePath = isSafePath$1;
	return isSafePath;
}

var hasRequiredCreateGetValueFunctionBody;

function requireCreateGetValueFunctionBody () {
	if (hasRequiredCreateGetValueFunctionBody) return createGetValueFunctionBody;
	hasRequiredCreateGetValueFunctionBody = 1;
	Object.defineProperty(createGetValueFunctionBody, "__esModule", { value: true });
	createGetValueFunctionBody.createGetValueFunctionBody = void 0;
	const isSafePath_1 = requireIsSafePath();
	const createGetValueFunctionBody$1 = (path) => {
	    if (!(0, isSafePath_1.isSafePath)(path)) {
	        throw new Error('Unsafe path.');
	    }
	    const body = 'return subject' + path;
	    return body.replaceAll(/(\.(\d+))/g, '.[$2]').replaceAll('.', '?.');
	};
	createGetValueFunctionBody.createGetValueFunctionBody = createGetValueFunctionBody$1;
	return createGetValueFunctionBody;
}

var hasRequiredHydrateAst;

function requireHydrateAst () {
	if (hasRequiredHydrateAst) return hydrateAst;
	hasRequiredHydrateAst = 1;
	(function (exports) {
		/* eslint-disable no-new-func */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.hydrateAst = void 0;
		const createGetValueFunctionBody_1 = requireCreateGetValueFunctionBody();
		const isSafePath_1 = requireIsSafePath();
		const hydrateAst = (subject) => {
		    const newSubject = {
		        ...subject,
		    };
		    if (subject.type === 'Tag' &&
		        subject.field.type === 'Field' &&
		        'field' in subject &&
		        (0, isSafePath_1.isSafePath)(subject.field.name)) {
		        newSubject.getValue = new Function('subject', (0, createGetValueFunctionBody_1.createGetValueFunctionBody)(subject.field.name));
		    }
		    if ('left' in subject) {
		        newSubject.left = (0, exports.hydrateAst)(subject.left);
		    }
		    if ('right' in subject) {
		        newSubject.right = (0, exports.hydrateAst)(subject.right);
		    }
		    if ('operand' in subject) {
		        newSubject.operand = (0, exports.hydrateAst)(subject.operand);
		    }
		    return newSubject;
		};
		exports.hydrateAst = hydrateAst; 
	} (hydrateAst));
	return hydrateAst;
}

var nearley$1 = {exports: {}};

var nearley = nearley$1.exports;

var hasRequiredNearley;

function requireNearley () {
	if (hasRequiredNearley) return nearley$1.exports;
	hasRequiredNearley = 1;
	(function (module) {
		(function(root, factory) {
		    if (module.exports) {
		        module.exports = factory();
		    } else {
		        root.nearley = factory();
		    }
		}(nearley, function() {

		    function Rule(name, symbols, postprocess) {
		        this.id = ++Rule.highestId;
		        this.name = name;
		        this.symbols = symbols;        // a list of literal | regex class | nonterminal
		        this.postprocess = postprocess;
		        return this;
		    }
		    Rule.highestId = 0;

		    Rule.prototype.toString = function(withCursorAt) {
		        var symbolSequence = (typeof withCursorAt === "undefined")
		                             ? this.symbols.map(getSymbolShortDisplay).join(' ')
		                             : (   this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(' ')
		                                 + " ● "
		                                 + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(' ')     );
		        return this.name + " → " + symbolSequence;
		    };


		    // a State is a rule at a position from a given starting point in the input stream (reference)
		    function State(rule, dot, reference, wantedBy) {
		        this.rule = rule;
		        this.dot = dot;
		        this.reference = reference;
		        this.data = [];
		        this.wantedBy = wantedBy;
		        this.isComplete = this.dot === rule.symbols.length;
		    }

		    State.prototype.toString = function() {
		        return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
		    };

		    State.prototype.nextState = function(child) {
		        var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
		        state.left = this;
		        state.right = child;
		        if (state.isComplete) {
		            state.data = state.build();
		            // Having right set here will prevent the right state and its children
		            // form being garbage collected
		            state.right = undefined;
		        }
		        return state;
		    };

		    State.prototype.build = function() {
		        var children = [];
		        var node = this;
		        do {
		            children.push(node.right.data);
		            node = node.left;
		        } while (node.left);
		        children.reverse();
		        return children;
		    };

		    State.prototype.finish = function() {
		        if (this.rule.postprocess) {
		            this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
		        }
		    };


		    function Column(grammar, index) {
		        this.grammar = grammar;
		        this.index = index;
		        this.states = [];
		        this.wants = {}; // states indexed by the non-terminal they expect
		        this.scannable = []; // list of states that expect a token
		        this.completed = {}; // states that are nullable
		    }


		    Column.prototype.process = function(nextColumn) {
		        var states = this.states;
		        var wants = this.wants;
		        var completed = this.completed;

		        for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
		            var state = states[w];

		            if (state.isComplete) {
		                state.finish();
		                if (state.data !== Parser.fail) {
		                    // complete
		                    var wantedBy = state.wantedBy;
		                    for (var i = wantedBy.length; i--; ) { // this line is hot
		                        var left = wantedBy[i];
		                        this.complete(left, state);
		                    }

		                    // special-case nullables
		                    if (state.reference === this.index) {
		                        // make sure future predictors of this rule get completed.
		                        var exp = state.rule.name;
		                        (this.completed[exp] = this.completed[exp] || []).push(state);
		                    }
		                }

		            } else {
		                // queue scannable states
		                var exp = state.rule.symbols[state.dot];
		                if (typeof exp !== 'string') {
		                    this.scannable.push(state);
		                    continue;
		                }

		                // predict
		                if (wants[exp]) {
		                    wants[exp].push(state);

		                    if (completed.hasOwnProperty(exp)) {
		                        var nulls = completed[exp];
		                        for (var i = 0; i < nulls.length; i++) {
		                            var right = nulls[i];
		                            this.complete(state, right);
		                        }
		                    }
		                } else {
		                    wants[exp] = [state];
		                    this.predict(exp);
		                }
		            }
		        }
		    };

		    Column.prototype.predict = function(exp) {
		        var rules = this.grammar.byName[exp] || [];

		        for (var i = 0; i < rules.length; i++) {
		            var r = rules[i];
		            var wantedBy = this.wants[exp];
		            var s = new State(r, 0, this.index, wantedBy);
		            this.states.push(s);
		        }
		    };

		    Column.prototype.complete = function(left, right) {
		        var copy = left.nextState(right);
		        this.states.push(copy);
		    };


		    function Grammar(rules, start) {
		        this.rules = rules;
		        this.start = start || this.rules[0].name;
		        var byName = this.byName = {};
		        this.rules.forEach(function(rule) {
		            if (!byName.hasOwnProperty(rule.name)) {
		                byName[rule.name] = [];
		            }
		            byName[rule.name].push(rule);
		        });
		    }

		    // So we can allow passing (rules, start) directly to Parser for backwards compatibility
		    Grammar.fromCompiled = function(rules, start) {
		        var lexer = rules.Lexer;
		        if (rules.ParserStart) {
		          start = rules.ParserStart;
		          rules = rules.ParserRules;
		        }
		        var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
		        var g = new Grammar(rules, start);
		        g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
		        return g;
		    };


		    function StreamLexer() {
		      this.reset("");
		    }

		    StreamLexer.prototype.reset = function(data, state) {
		        this.buffer = data;
		        this.index = 0;
		        this.line = state ? state.line : 1;
		        this.lastLineBreak = state ? -state.col : 0;
		    };

		    StreamLexer.prototype.next = function() {
		        if (this.index < this.buffer.length) {
		            var ch = this.buffer[this.index++];
		            if (ch === '\n') {
		              this.line += 1;
		              this.lastLineBreak = this.index;
		            }
		            return {value: ch};
		        }
		    };

		    StreamLexer.prototype.save = function() {
		      return {
		        line: this.line,
		        col: this.index - this.lastLineBreak,
		      }
		    };

		    StreamLexer.prototype.formatError = function(token, message) {
		        // nb. this gets called after consuming the offending token,
		        // so the culprit is index-1
		        var buffer = this.buffer;
		        if (typeof buffer === 'string') {
		            var lines = buffer
		                .split("\n")
		                .slice(
		                    Math.max(0, this.line - 5), 
		                    this.line
		                );

		            var nextLineBreak = buffer.indexOf('\n', this.index);
		            if (nextLineBreak === -1) nextLineBreak = buffer.length;
		            var col = this.index - this.lastLineBreak;
		            var lastLineDigits = String(this.line).length;
		            message += " at line " + this.line + " col " + col + ":\n\n";
		            message += lines
		                .map(function(line, i) {
		                    return pad(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
		                }, this)
		                .join("\n");
		            message += "\n" + pad("", lastLineDigits + col) + "^\n";
		            return message;
		        } else {
		            return message + " at index " + (this.index - 1);
		        }

		        function pad(n, length) {
		            var s = String(n);
		            return Array(length - s.length + 1).join(" ") + s;
		        }
		    };

		    function Parser(rules, start, options) {
		        if (rules instanceof Grammar) {
		            var grammar = rules;
		            var options = start;
		        } else {
		            var grammar = Grammar.fromCompiled(rules, start);
		        }
		        this.grammar = grammar;

		        // Read options
		        this.options = {
		            keepHistory: false,
		            lexer: grammar.lexer || new StreamLexer,
		        };
		        for (var key in (options || {})) {
		            this.options[key] = options[key];
		        }

		        // Setup lexer
		        this.lexer = this.options.lexer;
		        this.lexerState = undefined;

		        // Setup a table
		        var column = new Column(grammar, 0);
		        this.table = [column];

		        // I could be expecting anything.
		        column.wants[grammar.start] = [];
		        column.predict(grammar.start);
		        // TODO what if start rule is nullable?
		        column.process();
		        this.current = 0; // token index
		    }

		    // create a reserved token for indicating a parse fail
		    Parser.fail = {};

		    Parser.prototype.feed = function(chunk) {
		        var lexer = this.lexer;
		        lexer.reset(chunk, this.lexerState);

		        var token;
		        while (true) {
		            try {
		                token = lexer.next();
		                if (!token) {
		                    break;
		                }
		            } catch (e) {
		                // Create the next column so that the error reporter
		                // can display the correctly predicted states.
		                var nextColumn = new Column(this.grammar, this.current + 1);
		                this.table.push(nextColumn);
		                var err = new Error(this.reportLexerError(e));
		                err.offset = this.current;
		                err.token = e.token;
		                throw err;
		            }
		            // We add new states to table[current+1]
		            var column = this.table[this.current];

		            // GC unused states
		            if (!this.options.keepHistory) {
		                delete this.table[this.current - 1];
		            }

		            var n = this.current + 1;
		            var nextColumn = new Column(this.grammar, n);
		            this.table.push(nextColumn);

		            // Advance all tokens that expect the symbol
		            var literal = token.text !== undefined ? token.text : token.value;
		            var value = lexer.constructor === StreamLexer ? token.value : token;
		            var scannable = column.scannable;
		            for (var w = scannable.length; w--; ) {
		                var state = scannable[w];
		                var expect = state.rule.symbols[state.dot];
		                // Try to consume the token
		                // either regex or literal
		                if (expect.test ? expect.test(value) :
		                    expect.type ? expect.type === token.type
		                                : expect.literal === literal) {
		                    // Add it
		                    var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
		                    nextColumn.states.push(next);
		                }
		            }

		            // Next, for each of the rules, we either
		            // (a) complete it, and try to see if the reference row expected that
		            //     rule
		            // (b) predict the next nonterminal it expects by adding that
		            //     nonterminal's start state
		            // To prevent duplication, we also keep track of rules we have already
		            // added

		            nextColumn.process();

		            // If needed, throw an error:
		            if (nextColumn.states.length === 0) {
		                // No states at all! This is not good.
		                var err = new Error(this.reportError(token));
		                err.offset = this.current;
		                err.token = token;
		                throw err;
		            }

		            // maybe save lexer state
		            if (this.options.keepHistory) {
		              column.lexerState = lexer.save();
		            }

		            this.current++;
		        }
		        if (column) {
		          this.lexerState = lexer.save();
		        }

		        // Incrementally keep track of results
		        this.results = this.finish();

		        // Allow chaining, for whatever it's worth
		        return this;
		    };

		    Parser.prototype.reportLexerError = function(lexerError) {
		        var tokenDisplay, lexerMessage;
		        // Planning to add a token property to moo's thrown error
		        // even on erroring tokens to be used in error display below
		        var token = lexerError.token;
		        if (token) {
		            tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
		            lexerMessage = this.lexer.formatError(token, "Syntax error");
		        } else {
		            tokenDisplay = "input (lexer error)";
		            lexerMessage = lexerError.message;
		        }
		        return this.reportErrorCommon(lexerMessage, tokenDisplay);
		    };

		    Parser.prototype.reportError = function(token) {
		        var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
		        var lexerMessage = this.lexer.formatError(token, "Syntax error");
		        return this.reportErrorCommon(lexerMessage, tokenDisplay);
		    };

		    Parser.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
		        var lines = [];
		        lines.push(lexerMessage);
		        var lastColumnIndex = this.table.length - 2;
		        var lastColumn = this.table[lastColumnIndex];
		        var expectantStates = lastColumn.states
		            .filter(function(state) {
		                var nextSymbol = state.rule.symbols[state.dot];
		                return nextSymbol && typeof nextSymbol !== "string";
		            });

		        if (expectantStates.length === 0) {
		            lines.push('Unexpected ' + tokenDisplay + '. I did not expect any more input. Here is the state of my parse table:\n');
		            this.displayStateStack(lastColumn.states, lines);
		        } else {
		            lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
		            // Display a "state stack" for each expectant state
		            // - which shows you how this state came to be, step by step.
		            // If there is more than one derivation, we only display the first one.
		            var stateStacks = expectantStates
		                .map(function(state) {
		                    return this.buildFirstStateStack(state, []) || [state];
		                }, this);
		            // Display each state that is expecting a terminal symbol next.
		            stateStacks.forEach(function(stateStack) {
		                var state = stateStack[0];
		                var nextSymbol = state.rule.symbols[state.dot];
		                var symbolDisplay = this.getSymbolDisplay(nextSymbol);
		                lines.push('A ' + symbolDisplay + ' based on:');
		                this.displayStateStack(stateStack, lines);
		            }, this);
		        }
		        lines.push("");
		        return lines.join("\n");
		    };
		    
		    Parser.prototype.displayStateStack = function(stateStack, lines) {
		        var lastDisplay;
		        var sameDisplayCount = 0;
		        for (var j = 0; j < stateStack.length; j++) {
		            var state = stateStack[j];
		            var display = state.rule.toString(state.dot);
		            if (display === lastDisplay) {
		                sameDisplayCount++;
		            } else {
		                if (sameDisplayCount > 0) {
		                    lines.push('    ^ ' + sameDisplayCount + ' more lines identical to this');
		                }
		                sameDisplayCount = 0;
		                lines.push('    ' + display);
		            }
		            lastDisplay = display;
		        }
		    };

		    Parser.prototype.getSymbolDisplay = function(symbol) {
		        return getSymbolLongDisplay(symbol);
		    };

		    /*
		    Builds a the first state stack. You can think of a state stack as the call stack
		    of the recursive-descent parser which the Nearley parse algorithm simulates.
		    A state stack is represented as an array of state objects. Within a
		    state stack, the first item of the array will be the starting
		    state, with each successive item in the array going further back into history.

		    This function needs to be given a starting state and an empty array representing
		    the visited states, and it returns an single state stack.

		    */
		    Parser.prototype.buildFirstStateStack = function(state, visited) {
		        if (visited.indexOf(state) !== -1) {
		            // Found cycle, return null
		            // to eliminate this path from the results, because
		            // we don't know how to display it meaningfully
		            return null;
		        }
		        if (state.wantedBy.length === 0) {
		            return [state];
		        }
		        var prevState = state.wantedBy[0];
		        var childVisited = [state].concat(visited);
		        var childResult = this.buildFirstStateStack(prevState, childVisited);
		        if (childResult === null) {
		            return null;
		        }
		        return [state].concat(childResult);
		    };

		    Parser.prototype.save = function() {
		        var column = this.table[this.current];
		        column.lexerState = this.lexerState;
		        return column;
		    };

		    Parser.prototype.restore = function(column) {
		        var index = column.index;
		        this.current = index;
		        this.table[index] = column;
		        this.table.splice(index + 1);
		        this.lexerState = column.lexerState;

		        // Incrementally keep track of results
		        this.results = this.finish();
		    };

		    // nb. deprecated: use save/restore instead!
		    Parser.prototype.rewind = function(index) {
		        if (!this.options.keepHistory) {
		            throw new Error('set option `keepHistory` to enable rewinding')
		        }
		        // nb. recall column (table) indicies fall between token indicies.
		        //        col 0   --   token 0   --   col 1
		        this.restore(this.table[index]);
		    };

		    Parser.prototype.finish = function() {
		        // Return the possible parsings
		        var considerations = [];
		        var start = this.grammar.start;
		        var column = this.table[this.table.length - 1];
		        column.states.forEach(function (t) {
		            if (t.rule.name === start
		                    && t.dot === t.rule.symbols.length
		                    && t.reference === 0
		                    && t.data !== Parser.fail) {
		                considerations.push(t);
		            }
		        });
		        return considerations.map(function(c) {return c.data; });
		    };

		    function getSymbolLongDisplay(symbol) {
		        var type = typeof symbol;
		        if (type === "string") {
		            return symbol;
		        } else if (type === "object") {
		            if (symbol.literal) {
		                return JSON.stringify(symbol.literal);
		            } else if (symbol instanceof RegExp) {
		                return 'character matching ' + symbol;
		            } else if (symbol.type) {
		                return symbol.type + ' token';
		            } else if (symbol.test) {
		                return 'token matching ' + String(symbol.test);
		            } else {
		                throw new Error('Unknown symbol type: ' + symbol);
		            }
		        }
		    }

		    function getSymbolShortDisplay(symbol) {
		        var type = typeof symbol;
		        if (type === "string") {
		            return symbol;
		        } else if (type === "object") {
		            if (symbol.literal) {
		                return JSON.stringify(symbol.literal);
		            } else if (symbol instanceof RegExp) {
		                return symbol.toString();
		            } else if (symbol.type) {
		                return '%' + symbol.type;
		            } else if (symbol.test) {
		                return '<' + String(symbol.test) + '>';
		            } else {
		                throw new Error('Unknown symbol type: ' + symbol);
		            }
		        }
		    }

		    return {
		        Parser: Parser,
		        Grammar: Grammar,
		        Rule: Rule,
		    };

		})); 
	} (nearley$1));
	return nearley$1.exports;
}

var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse;
	hasRequiredParse = 1;
	var __importDefault = (parse && parse.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(parse, "__esModule", { value: true });
	parse.parse = void 0;
	const errors_1 = requireErrors();
	const grammar_1 = __importDefault(requireGrammar());
	const hydrateAst_1 = requireHydrateAst();
	const nearley_1 = __importDefault(requireNearley());
	const rules = nearley_1.default.Grammar.fromCompiled(grammar_1.default);
	const MESSAGE_RULE = /Syntax error at line (?<line>\d+) col (?<column>\d+)/;
	const parse$1 = (query) => {
	    if (query.trim() === '') {
	        return {
	            location: {
	                end: 0,
	                start: 0,
	            },
	            type: 'EmptyExpression',
	        };
	    }
	    const parser = new nearley_1.default.Parser(rules);
	    let results;
	    try {
	        results = parser.feed(query).results;
	    }
	    catch (error) {
	        if (typeof (error === null || error === void 0 ? void 0 : error.message) === 'string' &&
	            typeof (error === null || error === void 0 ? void 0 : error.offset) === 'number') {
	            const match = error.message.match(MESSAGE_RULE);
	            if (!match) {
	                throw error;
	            }
	            throw new errors_1.SyntaxError(`Syntax error at line ${match.groups.line} column ${match.groups.column}`, error.offset, Number(match.groups.line), Number(match.groups.column));
	        }
	        throw error;
	    }
	    if (results.length === 0) {
	        throw new Error('Found no parsings.');
	    }
	    if (results.length > 1) {
	        const firstResult = JSON.stringify(results[0]);
	        for (const result of results) {
	            // Only throw if the results are different.
	            if (JSON.stringify(result) !== firstResult) {
	                throw new errors_1.LiqeError('Ambiguous results.');
	            }
	        }
	    }
	    const hydratedAst = (0, hydrateAst_1.hydrateAst)(results[0]);
	    return hydratedAst;
	};
	parse.parse = parse$1;
	return parse;
}

var serialize = {};

var hasRequiredSerialize;

function requireSerialize () {
	if (hasRequiredSerialize) return serialize;
	hasRequiredSerialize = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.serialize = void 0;
		const quote = (value, quotes) => {
		    if (quotes === 'double') {
		        return `"${value}"`;
		    }
		    if (quotes === 'single') {
		        return `'${value}'`;
		    }
		    return value;
		};
		const serializeExpression = (expression) => {
		    if (expression.type === 'LiteralExpression') {
		        if (expression.quoted && typeof expression.value === 'string') {
		            return quote(expression.value, expression.quotes);
		        }
		        return String(expression.value);
		    }
		    if (expression.type === 'RegexExpression') {
		        return String(expression.value);
		    }
		    if (expression.type === 'RangeExpression') {
		        const { max, maxInclusive, min, minInclusive } = expression.range;
		        return `${minInclusive ? '[' : '{'}${min} TO ${max}${maxInclusive ? ']' : '}'}`;
		    }
		    if (expression.type === 'EmptyExpression') {
		        return '';
		    }
		    throw new Error('Unexpected AST type.');
		};
		const serializeTag = (ast) => {
		    if (ast.type !== 'Tag') {
		        throw new Error('Expected a tag expression.');
		    }
		    const { expression, field, operator } = ast;
		    if (field.type === 'ImplicitField') {
		        return serializeExpression(expression);
		    }
		    const left = field.quoted ? quote(field.name, field.quotes) : field.name;
		    const patEnd = ' '.repeat(expression.location.start - operator.location.end);
		    return left + operator.operator + patEnd + serializeExpression(expression);
		};
		const serialize = (ast) => {
		    if (ast.type === 'ParenthesizedExpression') {
		        if (!('location' in ast.expression)) {
		            throw new Error('Expected location in expression.');
		        }
		        if (!ast.location.end) {
		            throw new Error('Expected location end.');
		        }
		        const patStart = ' '.repeat(ast.expression.location.start - (ast.location.start + 1));
		        const patEnd = ' '.repeat(ast.location.end - ast.expression.location.end - 1);
		        return `(${patStart}${(0, exports.serialize)(ast.expression)}${patEnd})`;
		    }
		    if (ast.type === 'Tag') {
		        return serializeTag(ast);
		    }
		    if (ast.type === 'LogicalExpression') {
		        let operator = '';
		        if (ast.operator.type === 'BooleanOperator') {
		            operator += ' '.repeat(ast.operator.location.start - ast.left.location.end);
		            operator += ast.operator.operator;
		            operator += ' '.repeat(ast.right.location.start - ast.operator.location.end);
		        }
		        else {
		            operator = ' '.repeat(ast.right.location.start - ast.left.location.end);
		        }
		        return `${(0, exports.serialize)(ast.left)}${operator}${(0, exports.serialize)(ast.right)}`;
		    }
		    if (ast.type === 'UnaryOperator') {
		        return ((ast.operator === 'NOT' ? 'NOT ' : ast.operator) + (0, exports.serialize)(ast.operand));
		    }
		    if (ast.type === 'EmptyExpression') {
		        return '';
		    }
		    throw new Error('Unexpected AST type.');
		};
		exports.serialize = serialize; 
	} (serialize));
	return serialize;
}

var test = {};

var hasRequiredTest;

function requireTest () {
	if (hasRequiredTest) return test;
	hasRequiredTest = 1;
	Object.defineProperty(test, "__esModule", { value: true });
	test.test = void 0;
	const filter_1 = requireFilter();
	const test$1 = (ast, subject) => {
	    return (0, filter_1.filter)(ast, [subject]).length === 1;
	};
	test.test = test$1;
	return test;
}

var hasRequiredLiqe;

function requireLiqe () {
	if (hasRequiredLiqe) return Liqe;
	hasRequiredLiqe = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.test = exports.serialize = exports.parse = exports.isSafeUnquotedExpression = exports.highlight = exports.filter = exports.SyntaxError = exports.LiqeError = void 0;
		var errors_1 = requireErrors();
		Object.defineProperty(exports, "LiqeError", { enumerable: true, get: function () { return errors_1.LiqeError; } });
		Object.defineProperty(exports, "SyntaxError", { enumerable: true, get: function () { return errors_1.SyntaxError; } });
		var filter_1 = requireFilter();
		Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return filter_1.filter; } });
		var highlight_1 = requireHighlight();
		Object.defineProperty(exports, "highlight", { enumerable: true, get: function () { return highlight_1.highlight; } });
		var isSafeUnquotedExpression_1 = requireIsSafeUnquotedExpression();
		Object.defineProperty(exports, "isSafeUnquotedExpression", { enumerable: true, get: function () { return isSafeUnquotedExpression_1.isSafeUnquotedExpression; } });
		var parse_1 = requireParse();
		Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.parse; } });
		var serialize_1 = requireSerialize();
		Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return serialize_1.serialize; } });
		var test_1 = requireTest();
		Object.defineProperty(exports, "test", { enumerable: true, get: function () { return test_1.test; } }); 
	} (Liqe));
	return Liqe;
}

var hasRequiredCreateLogWriter;

function requireCreateLogWriter () {
	if (hasRequiredCreateLogWriter) return createLogWriter;
	hasRequiredCreateLogWriter = 1;
	var __rest = (createLogWriter && createLogWriter.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};
	var __importDefault = (createLogWriter && createLogWriter.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(createLogWriter, "__esModule", { value: true });
	createLogWriter.createLogWriter = void 0;
	var createLogMethods_1 = requireCreateLogMethods();
	var boolean_1 = requireLib();
	var globalthis_1 = __importDefault(requireGlobalthis());
	var liqe_1 = requireLiqe();
	var roarr_1 = requireBrowser();
	var globalThis = (0, globalthis_1.default)();
	var logLevelColors = {
	    debug: {
	        backgroundColor: '#712bde',
	        color: '#fff',
	    },
	    error: {
	        backgroundColor: '#f05033',
	        color: '#fff',
	    },
	    fatal: {
	        backgroundColor: '#f05033',
	        color: '#fff',
	    },
	    info: {
	        backgroundColor: '#3174f1',
	        color: '#fff',
	    },
	    trace: {
	        backgroundColor: '#666',
	        color: '#fff',
	    },
	    warn: {
	        backgroundColor: '#f5a623',
	        color: '#000',
	    },
	};
	var namespaceColors = {
	    debug: {
	        color: '#8367d3',
	    },
	    error: {
	        color: '#ff1a1a',
	    },
	    fatal: {
	        color: '#ff1a1a',
	    },
	    info: {
	        color: '#3291ff',
	    },
	    trace: {
	        color: '#999',
	    },
	    warn: {
	        color: '#f7b955',
	    },
	};
	var findLiqeQuery = function (storage) {
	    var query = storage.getItem('ROARR_FILTER');
	    return query ? (0, liqe_1.parse)(query) : null;
	};
	var createLogWriter$1 = function (configuration) {
	    var _a, _b, _c;
	    if (configuration === void 0) { configuration = {}; }
	    var styleOutput = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.styleOutput) !== null && _a !== void 0 ? _a : true;
	    var storage = (_b = configuration === null || configuration === void 0 ? void 0 : configuration.storage) !== null && _b !== void 0 ? _b : globalThis.localStorage;
	    var logMethods = (_c = configuration === null || configuration === void 0 ? void 0 : configuration.logMethods) !== null && _c !== void 0 ? _c : (0, createLogMethods_1.createLogMethods)();
	    if (!storage && !globalThis.localStorage) {
	        // eslint-disable-next-line no-console
	        console.warn('initiated Roarr browser log writer in non-browser context');
	        return function () {
	            // Do nothing.
	        };
	    }
	    if (!(0, boolean_1.boolean)(storage.getItem('ROARR_LOG'))) {
	        return function () {
	            // Do nothing.
	        };
	    }
	    var liqeQuery = findLiqeQuery(storage);
	    if (styleOutput) {
	        return function (message) {
	            var payload = JSON.parse(message);
	            var _a = payload.context, numericLogLevel = _a.logLevel, namespace = _a.namespace, context = __rest(_a, ["logLevel", "namespace"]);
	            if (liqeQuery && !(0, liqe_1.test)(liqeQuery, payload)) {
	                return;
	            }
	            var logLevelName = (0, roarr_1.getLogLevelName)(Number(numericLogLevel));
	            var logMethod = logMethods[logLevelName];
	            var logColor = logLevelColors[logLevelName];
	            var styles = "\n        background-color: ".concat(logColor.backgroundColor, ";\n        color: ").concat(logColor.color, ";\n        font-weight: bold;\n      ");
	            var namespaceStyles = "\n        color: ".concat(namespaceColors[logLevelName].color, ";\n      ");
	            var resetStyles = "\n        color: inherit;\n      ";
	            if (Object.keys(context).length > 0) {
	                logMethod("%c ".concat(logLevelName, " %c").concat(namespace ? " [".concat(String(namespace), "]:") : '', "%c ").concat(payload.message, " %O"), styles, namespaceStyles, resetStyles, context);
	            }
	            else {
	                logMethod("%c ".concat(logLevelName, " %c").concat(namespace ? " [".concat(String(namespace), "]:") : '', "%c ").concat(payload.message), styles, namespaceStyles, resetStyles);
	            }
	        };
	    }
	    return function (message) {
	        var payload = JSON.parse(message);
	        var _a = payload.context, numericLogLevel = _a.logLevel, namespace = _a.namespace, context = __rest(_a, ["logLevel", "namespace"]);
	        if (liqeQuery && !(0, liqe_1.test)(liqeQuery, payload)) {
	            return;
	        }
	        var logLevelName = (0, roarr_1.getLogLevelName)(Number(numericLogLevel));
	        var logMethod = logMethods[logLevelName];
	        if (Object.keys(context).length > 0) {
	            logMethod("".concat(logLevelName, " ").concat(namespace ? " [".concat(String(namespace), "]:") : '', " ").concat(payload.message), context);
	        }
	        else {
	            logMethod("".concat(logLevelName, " ").concat(namespace ? " [".concat(String(namespace), "]:") : '', " ").concat(payload.message));
	        }
	    };
	};
	createLogWriter.createLogWriter = createLogWriter$1;
	return createLogWriter;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createLogWriter = void 0;
		var createLogWriter_1 = requireCreateLogWriter();
		Object.defineProperty(exports, "createLogWriter", { enumerable: true, get: function () { return createLogWriter_1.createLogWriter; } }); 
	} (dist));
	return dist;
}

var distExports = requireDist();

globalThis.ROARR = globalThis.ROARR ?? {};
globalThis.ROARR.write = distExports.createLogWriter();

const createId = (length = 8) => {
  return [...crypto.getRandomValues(new Uint8Array(length))]
    .map(byte => byte.toString().padStart(2, '0'))
    .join('')
    .slice(0, length);
};

class Dependencies {
    constructor() {
        this.log = browserExports.Roarr;
        this.createId = createId;
    }
}

const dependencyInjection = new Dependencies();

/**
 * @typedef {"creature"|"event"|"legendaryCreature"|"generic"} EncounterElementTypes
 */

class EncounterElement {
    [z] = true;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    id;

    /**
     * @type {EncounterElementTypes}
     */
    type;

    /**
     * @type {ContentBlock[]}
     */
    contents;

    /**
     * @type {Dependencies}
     */
    _dependencies;

    /**
     *
     * @param {string} name
     * @param {string} id
     * @param {EncounterElementTypes} type
     * @param {ContentBlock[]} content
     * @param {Dependencies} dependencies
     */
    constructor({
                    name,
                    id = "",
                    type = "generic",
                    contents = [],
                    dependencies = dependencyInjection,
    }) {
        this._dependencies = dependencies;
        if (id === "") {
            id = this._dependencies.createId();
        }
        this.id = id;
        this.name = name;
        this.contents = contents;
        this.type = type;
    }

    /**
     *
     * @param {{}} updates
     * @returns {EncounterElement}
     * @private
     */
    _withUpdate(updates) {
        return qt(this, draft => {
            Object.assign(draft, updates);
        })
    }

    /**
     *
     * @param {string} newName
     * @returns {EncounterElement}
     */
    withName(newName) {
        return this._withUpdate({name: newName})
    }

    /**
     * @param {string} id 
     * @returns {EncounterElement} 
     */
    withId(id) {
        return this._withUpdate({ id })
    }

    /**
     *
     * @param {ContentBlock[]} contents
     * @returns {EncounterElement}
     */
    withContents(contents) {
        return this._withUpdate({contents: contents})
    }
}

window.process = {
    env: {
        NODE_ENV: "production"
    }
};

let firstEncounterElement = new EncounterElement({name: "A first name"});
console.log(firstEncounterElement);
firstEncounterElement.withName("Gnurx Goblin");
console.log(firstEncounterElement);
firstEncounterElement = firstEncounterElement.withName("Sarah Secondtry");
console.log(firstEncounterElement);
firstEncounterElement.name = "Change";
//# sourceMappingURL=app.esm.js.map
