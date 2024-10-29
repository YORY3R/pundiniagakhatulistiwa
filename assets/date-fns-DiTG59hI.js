var ce=Object.defineProperty;var le=(n,a,e)=>a in n?ce(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var i=(n,a,e)=>le(n,typeof a!="symbol"?a+"":a,e);const G=Symbol.for("constructDateFrom");function g(n,a){return typeof n=="function"?n(a):n&&typeof n=="object"&&G in n?n[G](a):n instanceof Date?new n.constructor(a):new Date(a)}function P(n,a){return g(a||n,n)}function ee(n,a,e){const t=P(n,e==null?void 0:e.in);return isNaN(a)?g((e==null?void 0:e.in)||n,NaN):(a&&t.setDate(t.getDate()+a),t)}let de={};function I(){return de}function O(n,a){var u,h,w,k;const e=I(),t=(a==null?void 0:a.weekStartsOn)??((h=(u=a==null?void 0:a.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??e.weekStartsOn??((k=(w=e.locale)==null?void 0:w.options)==null?void 0:k.weekStartsOn)??0,r=P(n,a==null?void 0:a.in),s=r.getDay(),o=(s<t?7:0)+s-t;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function E(n,a){return O(n,{...a,weekStartsOn:1})}function he(n,a){const e=P(n,a==null?void 0:a.in),t=e.getFullYear(),r=g(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const s=E(r),o=g(e,0);o.setFullYear(t,0,4),o.setHours(0,0,0,0);const u=E(o);return e.getTime()>=s.getTime()?t+1:e.getTime()>=u.getTime()?t:t-1}function te(n){const a=P(n),e=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return e.setUTCFullYear(a.getFullYear()),+n-+e}function me(n,a){const e=he(n,a),t=g(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),E(t)}const fe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},we=(n,a,e)=>{let t;const r=fe[n];return typeof r=="string"?t=r:a===1?t=r.one:t=r.other.replace("{{count}}",a.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+t:t+" ago":t};function H(n){return(a={})=>{const e=a.width?String(a.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const ye={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},be={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ge={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ke={date:H({formats:ye,defaultWidth:"full"}),time:H({formats:be,defaultWidth:"full"}),dateTime:H({formats:ge,defaultWidth:"full"})},Pe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xe=(n,a,e,t)=>Pe[n];function D(n){return(a,e)=>{const t=e!=null&&e.context?String(e.context):"standalone";let r;if(t==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,u=e!=null&&e.width?String(e.width):o;r=n.formattingValues[u]||n.formattingValues[o]}else{const o=n.defaultWidth,u=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[u]||n.values[o]}const s=n.argumentCallback?n.argumentCallback(a):a;return r[s]}}const Me={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},De={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Te={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},pe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},We={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ye=(n,a)=>{const e=Number(n),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Oe={ordinalNumber:Ye,era:D({values:Me,defaultWidth:"wide"}),quarter:D({values:De,defaultWidth:"wide",argumentCallback:n=>n-1}),month:D({values:Te,defaultWidth:"wide"}),day:D({values:pe,defaultWidth:"wide"}),dayPeriod:D({values:ve,defaultWidth:"wide",formattingValues:We,defaultFormattingWidth:"wide"})};function T(n){return(a,e={})=>{const t=e.width,r=t&&n.matchPatterns[t]||n.matchPatterns[n.defaultMatchWidth],s=a.match(r);if(!s)return null;const o=s[0],u=t&&n.parsePatterns[t]||n.parsePatterns[n.defaultParseWidth],h=Array.isArray(u)?He(u,x=>x.test(o)):_e(u,x=>x.test(o));let w;w=n.valueCallback?n.valueCallback(h):h,w=e.valueCallback?e.valueCallback(w):w;const k=a.slice(o.length);return{value:w,rest:k}}}function _e(n,a){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&a(n[e]))return e}function He(n,a){for(let e=0;e<n.length;e++)if(a(n[e]))return e}function re(n){return(a,e={})=>{const t=a.match(n.matchPattern);if(!t)return null;const r=t[0],s=a.match(n.parsePattern);if(!s)return null;let o=n.valueCallback?n.valueCallback(s[0]):s[0];o=e.valueCallback?e.valueCallback(o):o;const u=a.slice(r.length);return{value:o,rest:u}}}const Ee=/^(\d+)(th|st|nd|rd)?/i,Ie=/\d+/i,qe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fe={any:[/^b/i,/^(a|c)/i]},Ne={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ce={any:[/1/i,/2/i,/3/i,/4/i]},Re={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ae={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$e={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Le={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},je={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xe={ordinalNumber:re({matchPattern:Ee,parsePattern:Ie,valueCallback:n=>parseInt(n,10)}),era:T({matchPatterns:qe,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),quarter:T({matchPatterns:Ne,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any",valueCallback:n=>n+1}),month:T({matchPatterns:Re,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any"}),day:T({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:Le,defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:Qe,defaultMatchWidth:"any",parsePatterns:je,defaultParseWidth:"any"})},Je={code:"en-US",formatDistance:we,formatLong:ke,formatRelative:xe,localize:Oe,match:Xe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ve(n,a){const e=P(n,a==null?void 0:a.in),t=+E(e)-+me(e);return Math.round(t/6048e5)+1}function ae(n,a){var k,x,W,_;const e=P(n,a==null?void 0:a.in),t=e.getFullYear(),r=I(),s=(a==null?void 0:a.firstWeekContainsDate)??((x=(k=a==null?void 0:a.locale)==null?void 0:k.options)==null?void 0:x.firstWeekContainsDate)??r.firstWeekContainsDate??((_=(W=r.locale)==null?void 0:W.options)==null?void 0:_.firstWeekContainsDate)??1,o=g((a==null?void 0:a.in)||n,0);o.setFullYear(t+1,0,s),o.setHours(0,0,0,0);const u=O(o,a),h=g((a==null?void 0:a.in)||n,0);h.setFullYear(t,0,s),h.setHours(0,0,0,0);const w=O(h,a);return+e>=+u?t+1:+e>=+w?t:t-1}function Ke(n,a){var u,h,w,k;const e=I(),t=(a==null?void 0:a.firstWeekContainsDate)??((h=(u=a==null?void 0:a.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??e.firstWeekContainsDate??((k=(w=e.locale)==null?void 0:w.options)==null?void 0:k.firstWeekContainsDate)??1,r=ae(n,a),s=g((a==null?void 0:a.in)||n,0);return s.setFullYear(r,0,t),s.setHours(0,0,0,0),O(s,a)}function Be(n,a){const e=P(n,a==null?void 0:a.in),t=+O(e,a)-+Ke(e,a);return Math.round(t/6048e5)+1}const Z=(n,a)=>{switch(n){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},ne=(n,a)=>{switch(n){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},ze=(n,a)=>{const e=n.match(/(P+)(p+)?/)||[],t=e[1],r=e[2];if(!r)return Z(n,a);let s;switch(t){case"P":s=a.dateTime({width:"short"});break;case"PP":s=a.dateTime({width:"medium"});break;case"PPP":s=a.dateTime({width:"long"});break;case"PPPP":default:s=a.dateTime({width:"full"});break}return s.replace("{{date}}",Z(t,a)).replace("{{time}}",ne(r,a))},U={p:ne,P:ze},Ge=/^D+$/,Ze=/^Y+$/,Ue=["D","DD","YY","YYYY"];function Se(n){return Ge.test(n)}function et(n){return Ze.test(n)}function S(n,a,e){const t=tt(n,a,e);if(console.warn(t),Ue.includes(n))throw new RangeError(t)}function tt(n,a,e){const t=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}function rt(){return Object.assign({},I())}function at(n,a){const e=P(n,a==null?void 0:a.in).getDay();return e===0?7:e}function nt(n,a){const e=st(a)?new a(0):g(a,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function st(n){var a;return typeof n=="function"&&((a=n.prototype)==null?void 0:a.constructor)===n}const it=10;class se{constructor(){i(this,"subPriority",0)}validate(a,e){return!0}}class ot extends se{constructor(a,e,t,r,s){super(),this.value=a,this.validateValue=e,this.setValue=t,this.priority=r,s&&(this.subPriority=s)}validate(a,e){return this.validateValue(a,this.value,e)}set(a,e,t){return this.setValue(a,e,this.value,t)}}class ut extends se{constructor(e,t){super();i(this,"priority",it);i(this,"subPriority",-1);this.context=e||(r=>g(t,r))}set(e,t){return t.timestampIsSet?e:g(e,nt(e,this.context))}}class l{run(a,e,t,r){const s=this.parse(a,e,t,r);return s?{setter:new ot(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(a,e,t){return!0}}class ct extends l{constructor(){super(...arguments);i(this,"priority",140);i(this,"incompatibleTokens",["R","u","t","T"])}parse(e,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,t,r){return t.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}const y={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},p={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function b(n,a){return n&&{value:a(n.value),rest:n.rest}}function d(n,a){const e=a.match(n);return e?{value:parseInt(e[0],10),rest:a.slice(e[0].length)}:null}function v(n,a){const e=a.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:a.slice(1)};const t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,s=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:t*(r*36e5+s*6e4+o*1e3),rest:a.slice(e[0].length)}}function ie(n){return d(y.anyDigitsSigned,n)}function f(n,a){switch(n){case 1:return d(y.singleDigit,a);case 2:return d(y.twoDigits,a);case 3:return d(y.threeDigits,a);case 4:return d(y.fourDigits,a);default:return d(new RegExp("^\\d{1,"+n+"}"),a)}}function q(n,a){switch(n){case 1:return d(y.singleDigitSigned,a);case 2:return d(y.twoDigitsSigned,a);case 3:return d(y.threeDigitsSigned,a);case 4:return d(y.fourDigitsSigned,a);default:return d(new RegExp("^-?\\d{1,"+n+"}"),a)}}function N(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function oe(n,a){const e=a>0,t=e?a:1-a;let r;if(t<=50)r=n||100;else{const s=t+50,o=Math.trunc(s/100)*100,u=n>=s%100;r=n+o-(u?100:0)}return e?r:1-r}function ue(n){return n%400===0||n%4===0&&n%100!==0}class lt extends l{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,t,r){const s=o=>({year:o,isTwoDigitYear:t==="yy"});switch(t){case"y":return b(f(4,e),s);case"yo":return b(r.ordinalNumber(e,{unit:"year"}),s);default:return b(f(t.length,e),s)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r){const s=e.getFullYear();if(r.isTwoDigitYear){const u=oe(r.year,s);return e.setFullYear(u,0,1),e.setHours(0,0,0,0),e}const o=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class dt extends l{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,t,r){const s=o=>({year:o,isTwoDigitYear:t==="YY"});switch(t){case"Y":return b(f(4,e),s);case"Yo":return b(r.ordinalNumber(e,{unit:"year"}),s);default:return b(f(t.length,e),s)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r,s){const o=ae(e,s);if(r.isTwoDigitYear){const h=oe(r.year,o);return e.setFullYear(h,0,s.firstWeekContainsDate),e.setHours(0,0,0,0),O(e,s)}const u=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(u,0,s.firstWeekContainsDate),e.setHours(0,0,0,0),O(e,s)}}class ht extends l{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,t){return q(t==="R"?4:t.length,e)}set(e,t,r){const s=g(e,0);return s.setFullYear(r,0,4),s.setHours(0,0,0,0),E(s)}}class mt extends l{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,t){return q(t==="u"?4:t.length,e)}set(e,t,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}class ft extends l{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,t,r){switch(t){case"Q":case"QQ":return f(t.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class wt extends l{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,t,r){switch(t){case"q":case"qq":return f(t.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class yt extends l{constructor(){super(...arguments);i(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);i(this,"priority",110)}parse(e,t,r){const s=o=>o-1;switch(t){case"M":return b(d(y.month,e),s);case"MM":return b(f(2,e),s);case"Mo":return b(r.ordinalNumber(e,{unit:"month"}),s);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class bt extends l{constructor(){super(...arguments);i(this,"priority",110);i(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,t,r){const s=o=>o-1;switch(t){case"L":return b(d(y.month,e),s);case"LL":return b(f(2,e),s);case"Lo":return b(r.ordinalNumber(e,{unit:"month"}),s);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}function gt(n,a,e){const t=P(n,e==null?void 0:e.in),r=Be(t,e)-a;return t.setDate(t.getDate()-r*7),P(t,e==null?void 0:e.in)}class kt extends l{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,t,r){switch(t){case"w":return d(y.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return f(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r,s){return O(gt(e,r,s),s)}}function Pt(n,a,e){const t=P(n,e==null?void 0:e.in),r=Ve(t,e)-a;return t.setDate(t.getDate()-r*7),t}class xt extends l{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,t,r){switch(t){case"I":return d(y.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return f(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r){return E(Pt(e,r))}}const Mt=[31,28,31,30,31,30,31,31,30,31,30,31],Dt=[31,29,31,30,31,30,31,31,30,31,30,31];class Tt extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"subPriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,t,r){switch(t){case"d":return d(y.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return f(t.length,e)}}validate(e,t){const r=e.getFullYear(),s=ue(r),o=e.getMonth();return s?t>=1&&t<=Dt[o]:t>=1&&t<=Mt[o]}set(e,t,r){return e.setDate(r),e.setHours(0,0,0,0),e}}class pt extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"subpriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,t,r){switch(t){case"D":case"DD":return d(y.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return f(t.length,e)}}validate(e,t){const r=e.getFullYear();return ue(r)?t>=1&&t<=366:t>=1&&t<=365}set(e,t,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}}function C(n,a,e){var x,W,_,Y;const t=I(),r=(e==null?void 0:e.weekStartsOn)??((W=(x=e==null?void 0:e.locale)==null?void 0:x.options)==null?void 0:W.weekStartsOn)??t.weekStartsOn??((Y=(_=t.locale)==null?void 0:_.options)==null?void 0:Y.weekStartsOn)??0,s=P(n,e==null?void 0:e.in),o=s.getDay(),h=(a%7+7)%7,w=7-r,k=a<0||a>6?a-(o+w)%7:(h+w)%7-(o+w)%7;return ee(s,k,e)}class vt extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,s){return e=C(e,r,s),e.setHours(0,0,0,0),e}}class Wt extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,t,r,s){const o=u=>{const h=Math.floor((u-1)/7)*7;return(u+s.weekStartsOn+6)%7+h};switch(t){case"e":case"ee":return b(f(t.length,e),o);case"eo":return b(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,s){return e=C(e,r,s),e.setHours(0,0,0,0),e}}class Yt extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,t,r,s){const o=u=>{const h=Math.floor((u-1)/7)*7;return(u+s.weekStartsOn+6)%7+h};switch(t){case"c":case"cc":return b(f(t.length,e),o);case"co":return b(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,s){return e=C(e,r,s),e.setHours(0,0,0,0),e}}function Ot(n,a,e){const t=P(n,e==null?void 0:e.in),r=at(t,e),s=a-r;return ee(t,s,e)}class _t extends l{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,t,r){const s=o=>o===0?7:o;switch(t){case"i":case"ii":return f(t.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return b(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),s);case"iiiii":return b(r.day(e,{width:"narrow",context:"formatting"}),s);case"iiiiii":return b(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),s);case"iiii":default:return b(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),s)}}validate(e,t){return t>=1&&t<=7}set(e,t,r){return e=Ot(e,r),e.setHours(0,0,0,0),e}}class Ht extends l{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(N(r),0,0,0),e}}class Et extends l{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(N(r),0,0,0),e}}class It extends l{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","b","t","T"])}parse(e,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(N(r),0,0,0),e}}class qt extends l{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,t,r){switch(t){case"h":return d(y.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return f(t.length,e)}}validate(e,t){return t>=1&&t<=12}set(e,t,r){const s=e.getHours()>=12;return s&&r<12?e.setHours(r+12,0,0,0):!s&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}}class Ft extends l{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,t,r){switch(t){case"H":return d(y.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return f(t.length,e)}}validate(e,t){return t>=0&&t<=23}set(e,t,r){return e.setHours(r,0,0,0),e}}class Nt extends l{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,t,r){switch(t){case"K":return d(y.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return f(t.length,e)}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}}class Ct extends l{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,t,r){switch(t){case"k":return d(y.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return f(t.length,e)}}validate(e,t){return t>=1&&t<=24}set(e,t,r){const s=r<=24?r%24:r;return e.setHours(s,0,0,0),e}}class Rt extends l{constructor(){super(...arguments);i(this,"priority",60);i(this,"incompatibleTokens",["t","T"])}parse(e,t,r){switch(t){case"m":return d(y.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return f(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setMinutes(r,0,0),e}}class At extends l{constructor(){super(...arguments);i(this,"priority",50);i(this,"incompatibleTokens",["t","T"])}parse(e,t,r){switch(t){case"s":return d(y.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return f(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setSeconds(r,0),e}}class $t extends l{constructor(){super(...arguments);i(this,"priority",30);i(this,"incompatibleTokens",["t","T"])}parse(e,t){const r=s=>Math.trunc(s*Math.pow(10,-t.length+3));return b(f(t.length,e),r)}set(e,t,r){return e.setMilliseconds(r),e}}class Lt extends l{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","x"])}parse(e,t){switch(t){case"X":return v(p.basicOptionalMinutes,e);case"XX":return v(p.basic,e);case"XXXX":return v(p.basicOptionalSeconds,e);case"XXXXX":return v(p.extendedOptionalSeconds,e);case"XXX":default:return v(p.extended,e)}}set(e,t,r){return t.timestampIsSet?e:g(e,e.getTime()-te(e)-r)}}class Qt extends l{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","X"])}parse(e,t){switch(t){case"x":return v(p.basicOptionalMinutes,e);case"xx":return v(p.basic,e);case"xxxx":return v(p.basicOptionalSeconds,e);case"xxxxx":return v(p.extendedOptionalSeconds,e);case"xxx":default:return v(p.extended,e)}}set(e,t,r){return t.timestampIsSet?e:g(e,e.getTime()-te(e)-r)}}class jt extends l{constructor(){super(...arguments);i(this,"priority",40);i(this,"incompatibleTokens","*")}parse(e){return ie(e)}set(e,t,r){return[g(e,r*1e3),{timestampIsSet:!0}]}}class Xt extends l{constructor(){super(...arguments);i(this,"priority",20);i(this,"incompatibleTokens","*")}parse(e){return ie(e)}set(e,t,r){return[g(e,r),{timestampIsSet:!0}]}}const Jt={G:new ct,y:new lt,Y:new dt,R:new ht,u:new mt,Q:new ft,q:new wt,M:new yt,L:new bt,w:new kt,I:new xt,d:new Tt,D:new pt,E:new vt,e:new Wt,c:new Yt,i:new _t,a:new Ht,b:new Et,B:new It,h:new qt,H:new Ft,K:new Nt,k:new Ct,m:new Rt,s:new At,S:new $t,X:new Lt,x:new Qt,t:new jt,T:new Xt},Vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bt=/^'([^]*?)'?$/,zt=/''/g,Gt=/\S/,Zt=/[a-zA-Z]/;function Or(n,a,e,t){var A,$,L,Q,j,X,J,V;const r=()=>g((t==null?void 0:t.in)||e,NaN),s=rt(),o=(t==null?void 0:t.locale)??s.locale??Je,u=(t==null?void 0:t.firstWeekContainsDate)??(($=(A=t==null?void 0:t.locale)==null?void 0:A.options)==null?void 0:$.firstWeekContainsDate)??s.firstWeekContainsDate??((Q=(L=s.locale)==null?void 0:L.options)==null?void 0:Q.firstWeekContainsDate)??1,h=(t==null?void 0:t.weekStartsOn)??((X=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:X.weekStartsOn)??s.weekStartsOn??((V=(J=s.locale)==null?void 0:J.options)==null?void 0:V.weekStartsOn)??0,w={firstWeekContainsDate:u,weekStartsOn:h,locale:o},k=[new ut(t==null?void 0:t.in,e)],x=a.match(Kt).map(c=>{const m=c[0];if(m in U){const M=U[m];return M(c,o.formatLong)}return c}).join("").match(Vt),W=[];for(let c of x){!(t!=null&&t.useAdditionalWeekYearTokens)&&et(c)&&S(c,a,n),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Se(c)&&S(c,a,n);const m=c[0],M=Jt[m];if(M){const{incompatibleTokens:K}=M;if(Array.isArray(K)){const B=W.find(z=>K.includes(z.token)||z.token===m);if(B)throw new RangeError(`The format string mustn't contain \`${B.fullToken}\` and \`${c}\` at the same time`)}else if(M.incompatibleTokens==="*"&&W.length>0)throw new RangeError(`The format string mustn't contain \`${c}\` and any other token at the same time`);W.push({token:m,fullToken:c});const F=M.run(n,c,o.match,w);if(!F)return r();k.push(F.setter),n=F.rest}else{if(m.match(Zt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");if(c==="''"?c="'":m==="'"&&(c=Ut(c)),n.indexOf(c)===0)n=n.slice(c.length);else return r()}}if(n.length>0&&Gt.test(n))return r();const _=k.map(c=>c.priority).sort((c,m)=>m-c).filter((c,m,M)=>M.indexOf(c)===m).map(c=>k.filter(m=>m.priority===c).sort((m,M)=>M.subPriority-m.subPriority)).map(c=>c[0]);let Y=P(e,t==null?void 0:t.in);if(isNaN(+Y))return r();const R={};for(const c of _){if(!c.validate(Y,w))return r();const m=c.set(Y,R,w);Array.isArray(m)?(Y=m[0],Object.assign(R,m[1])):Y=m}return Y}function Ut(n){return n.match(Bt)[1].replace(zt,"'")}const St={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},er=(n,a,e)=>{let t;const r=St[n];return typeof r=="string"?t=r:a===1?t=r.one:t=r.other.replace("{{count}}",a.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"dalam waktu "+t:t+" yang lalu":t},tr={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},rr={full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},ar={full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nr={date:H({formats:tr,defaultWidth:"full"}),time:H({formats:rr,defaultWidth:"full"}),dateTime:H({formats:ar,defaultWidth:"full"})},sr={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"},ir=(n,a,e,t)=>sr[n],or={narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},ur={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},cr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},lr={narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},dr={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},hr={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},mr=(n,a)=>"ke-"+Number(n),fr={ordinalNumber:mr,era:D({values:or,defaultWidth:"wide"}),quarter:D({values:ur,defaultWidth:"wide",argumentCallback:n=>n-1}),month:D({values:cr,defaultWidth:"wide"}),day:D({values:lr,defaultWidth:"wide"}),dayPeriod:D({values:dr,defaultWidth:"wide",formattingValues:hr,defaultFormattingWidth:"wide"})},wr=/^ke-(\d+)?/i,yr=/\d+/i,br={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},gr={any:[/^s/i,/^(m|e)/i]},kr={narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},Pr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},Mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dr={narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},Tr={narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},pr={narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},vr={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},Wr={ordinalNumber:re({matchPattern:wr,parsePattern:yr,valueCallback:n=>parseInt(n,10)}),era:T({matchPatterns:br,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any"}),quarter:T({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any",valueCallback:n=>n+1}),month:T({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),day:T({matchPatterns:Dr,defaultMatchWidth:"wide",parsePatterns:Tr,defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:pr,defaultMatchWidth:"any",parsePatterns:vr,defaultParseWidth:"any"})},_r={code:"id",formatDistance:er,formatLong:nr,formatRelative:ir,localize:fr,match:Wr,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{_r as i,Or as p};