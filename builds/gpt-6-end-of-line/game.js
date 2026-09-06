(()=>{var px=Object.defineProperty;var mx=(n,e)=>{for(var t in e)px(n,t,{get:e[t],enumerable:!0})};var wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zp=0,Tf=1,kp=2;var js=1,Hp=2,Zr=3,Ui=0,mi=1,Kt=2,li=0,bn=1,Ki=2,wf=3,Ef=4,Vp=5;var hs=100,Gp=101,Wp=102,Xp=103,qp=104,Yp=200,$p=201,Zp=202,Kp=203,Hl=204,Vl=205,Jp=206,jp=207,Qp=208,em=209,tm=210,im=211,nm=212,sm=213,rm=214,Gl=0,Wl=1,Xl=2,qs=3,ql=4,Yl=5,$l=6,Zl=7,Af=0,om=1,am=2,rn=0,ba=1,Ma=2,Sa=3,Qs=4,Ta=5,wa=6,Ea=7;var Rf=300,bs=301,er=302,zn=303,Tc=304,Aa=306,Bi=1e3,ei=1001,Kl=1002,tt=1003,lm=1004;var Ra=1005;var It=1006,wc=1007;var Ms=1008,Cf=1008,gi=1009,Kr=1010,Ca=1011,Ss=1012,Ts=1013,Ti=1014,ut=1015,Et=1016,Ec=1017,Ac=1018,Jr=1020,If=35902,Pf=35899,Df=1021,Lf=1022,rt=1023,Fn=1026,ws=1027,An=1028,jr=1029,dn=1030,Es=1031;var As=1033,Ia=33776,Pa=33777,Da=33778,La=33779,Rc=35840,Cc=35841,Ic=35842,Pc=35843,Dc=36196,Lc=37492,Fc=37496,Nc=37488,Uc=37489,Fa=37490,Bc=37491,Oc=37808,zc=37809,kc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,$c=37818,Zc=37819,Kc=37820,Jc=37821,jc=36492,Qc=36494,eu=36495,tu=36283,iu=36284,Na=36285,nu=36286;var Vo=2300,Jl=2301,kl=2302,cf=2303,uf=2400,hf=2401,ff=2402;var cm=3200;var su=0,um=1,Qn="",Vi="srgb",Go="srgb-linear",Wo="linear",Ct="srgb";var Gs=7680;var df=519,hm=512,fm=513,dm=514,ru=515,pm=516,mm=517,ou=518,gm=519,pf=35044,Ff=35048;var Nf="300 es",yn=2e3,Fr=2001;function gx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xm(){let n=Xo("canvas");return n.style.display="block",n}var np={},Nr=null;function Uf(...n){let e="THREE."+n.shift();Nr?Nr("log",e,...n):console.log(e,...n)}function vm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=vm(n);let e="THREE."+n.shift();if(Nr)Nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=vm(n);let e="THREE."+n.shift();if(Nr)Nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Xs(...n){let e=n.join(" ");e in np||(np[e]=!0,Ze(...n))}function _m(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ym={[Gl]:Wl,[Xl]:$l,[ql]:Zl,[qs]:Yl,[Wl]:Gl,[$l]:Xl,[Zl]:ql,[Yl]:qs},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sp=1234567,Oo=Math.PI/180,Ur=180/Math.PI;function tr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Li[n&255]+Li[n>>8&255]+Li[n>>16&255]+Li[n>>24&255]+"-"+Li[e&255]+Li[e>>8&255]+"-"+Li[e>>16&15|64]+Li[e>>24&255]+"-"+Li[t&63|128]+Li[t>>8&255]+"-"+Li[t>>16&255]+Li[t>>24&255]+Li[i&255]+Li[i>>8&255]+Li[i>>16&255]+Li[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Bf(n,e){return(n%e+e)%e}function vx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _x(n,e,t){return n!==e?(t-n)/(e-n):0}function zo(n,e,t){return(1-t)*n+t*e}function yx(n,e,t,i){return zo(n,e,1-Math.exp(-t*i))}function bx(n,e=1){return e-Math.abs(Bf(n,e*2)-e)}function Mx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Sx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wx(n,e){return n+Math.random()*(e-n)}function Ex(n){return n*(.5-Math.random())}function Ax(n){n!==void 0&&(sp=n);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rx(n){return n*Oo}function Cx(n){return n*Ur}function Ix(n){return(n&n-1)===0&&n!==0}function Px(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Of={DEG2RAD:Oo,RAD2DEG:Ur,generateUUID:tr,clamp:et,euclideanModulo:Bf,mapLinear:vx,inverseLerp:_x,lerp:zo,damp:yx,pingpong:bx,smoothstep:Mx,smootherstep:Sx,randInt:Tx,randFloat:wx,randFloatSpread:Ex,seededRandom:Ax,degToRad:Rx,radToDeg:Cx,isPowerOfTwo:Ix,ceilPowerOfTwo:Px,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Lx,normalize:Hi,denormalize:Dr},te=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*v;p<0&&(u=-u,d=-d,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),_=Math.sin(y);g=Math.sin(g*y)/_,a=Math.sin(a*y)/_,l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+v*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-a*d,e[t+2]=c*m+h*d+a*u-l*f,e[t+3]=h*m-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nh=new R,rp=new Gi,it=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],v=s[0],p=s[3],g=s[6],y=s[1],_=s[4],x=s[7],M=s[2],S=s[5],w=s[8];return r[0]=o*v+a*y+l*M,r[3]=o*p+a*_+l*S,r[6]=o*g+a*x+l*w,r[1]=c*v+h*y+f*M,r[4]=c*p+h*_+f*S,r[7]=c*g+h*x+f*w,r[2]=u*v+d*y+m*M,r[5]=u*p+d*_+m*S,r[8]=u*g+d*x+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=f*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uh.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uh.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uh=new it,op=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){let n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:e,whitePoint:i,transfer:Wo,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),n}var xt=Fx();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xr,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xr===void 0&&(xr=Xo("canvas")),xr.width=e.width,xr.height=e.height;let s=xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=xr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nx=0,fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bh(s[o].image)):r.push(Bh(s[o]))}else r=Bh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Ux=0,Oh=new R,Wi=class n extends Mn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ei,s=ei,r=It,o=Ms,a=rt,l=gi,c=n.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=tr(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wi.DEFAULT_IMAGE=null;Wi.DEFAULT_MAPPING=Rf;Wi.DEFAULT_ANISOTROPY=1;var St=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(d+1)/2,M=(g+1)/2,S=(h+u)/4,w=(f+v)/4,b=(m+p)/4;return _>x&&_>M?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=w/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=b/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ql=class extends Mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wi(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pt=class extends Ql{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ds=class extends Wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tt,this.minFilter=tt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qo=class extends Pt{constructor(e=1,t=1,i=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new ds(null,e,t,i),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},ec=class extends Wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tt,this.minFilter=tt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,v,p)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,v,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=a*h,v=a*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,Ox)}lookAt(e,t,i){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),rs.crossVectors(i,en),rs.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),rs.crossVectors(i,en)),rs.normalize(),fl.crossVectors(en,rs),s[0]=rs.x,s[4]=fl.x,s[8]=en.x,s[1]=rs.y,s[5]=fl.y,s[9]=en.y,s[2]=rs.z,s[6]=fl.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],v=i[6],p=i[10],g=i[14],y=i[3],_=i[7],x=i[11],M=i[15],S=s[0],w=s[4],b=s[8],E=s[12],A=s[1],P=s[5],I=s[9],F=s[13],B=s[2],N=s[6],k=s[10],Y=s[14],ie=s[3],ue=s[7],xe=s[11],me=s[15];return r[0]=o*S+a*A+l*B+c*ie,r[4]=o*w+a*P+l*N+c*ue,r[8]=o*b+a*I+l*k+c*xe,r[12]=o*E+a*F+l*Y+c*me,r[1]=h*S+f*A+u*B+d*ie,r[5]=h*w+f*P+u*N+d*ue,r[9]=h*b+f*I+u*k+d*xe,r[13]=h*E+f*F+u*Y+d*me,r[2]=m*S+v*A+p*B+g*ie,r[6]=m*w+v*P+p*N+g*ue,r[10]=m*b+v*I+p*k+g*xe,r[14]=m*E+v*F+p*Y+g*me,r[3]=y*S+_*A+x*B+M*ie,r[7]=y*w+_*P+x*N+M*ue,r[11]=y*b+_*I+x*k+M*xe,r[15]=y*E+_*F+x*Y+M*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],v=e[7],p=e[11],g=e[15],y=l*d-c*u,_=a*d-c*f,x=a*u-l*f,M=o*d-c*h,S=o*u-l*h,w=o*f-a*h;return t*(v*y-p*_+g*x)-i*(m*y-p*M+g*S)+s*(m*_-v*M+g*w)-r*(m*x-v*S+p*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],v=e[13],p=e[14],g=e[15],y=t*a-i*o,_=t*l-s*o,x=t*c-r*o,M=i*l-s*a,S=i*c-r*a,w=s*c-r*l,b=h*v-f*m,E=h*p-u*m,A=h*g-d*m,P=f*p-u*v,I=f*g-d*v,F=u*g-d*p,B=y*F-_*I+x*P+M*A-S*E+w*b;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/B;return e[0]=(a*F-l*I+c*P)*N,e[1]=(s*I-i*F-r*P)*N,e[2]=(v*w-p*S+g*M)*N,e[3]=(u*S-f*w-d*M)*N,e[4]=(l*A-o*F-c*E)*N,e[5]=(t*F-s*A+r*E)*N,e[6]=(p*x-m*w-g*_)*N,e[7]=(h*w-u*x+d*_)*N,e[8]=(o*I-a*A+c*b)*N,e[9]=(i*A-t*I-r*b)*N,e[10]=(m*S-v*x+g*y)*N,e[11]=(f*x-h*S-d*y)*N,e[12]=(a*E-o*P-l*b)*N,e[13]=(t*P-i*E+s*b)*N,e[14]=(v*_-m*M-p*y)*N,e[15]=(h*M-f*_+u*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,v=o*h,p=o*f,g=a*f,y=l*c,_=l*h,x=l*f,M=i.x,S=i.y,w=i.z;return s[0]=(1-(v+g))*M,s[1]=(d+x)*M,s[2]=(m-_)*M,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(u+g))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(m+_)*w,s[9]=(p-y)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);let c=1/o,h=1/a,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===yn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Fr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===yn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Fr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vr=new R,xn=new He,Bx=new R(0,0,0),Ox=new R(1,1,1),rs=new R,fl=new R,en=new R,lp=new He,cp=new Gi,Kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zx=0,up=new R,_r=new Gi,Gn=new He,dl=new R,Io=new R,kx=new R,Hx=new Gi,hp=new R(1,0,0),fp=new R(0,1,0),dp=new R(0,0,1),pp={type:"added"},Vx={type:"removed"},yr={type:"childadded",child:null},zh={type:"childremoved",child:null},Zt=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new Kn,i=new Gi,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new it}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dl.copy(e):dl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Io,dl,this.up):Gn.lookAt(dl,Io,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Gn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),yr.child=e,this.dispatchEvent(yr),yr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Zt.DEFAULT_UP=new R(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gx={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},pl={h:0,s:0,l:0};function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=Bf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=kh(o,r,e+1/3),this.g=kh(o,r,e),this.b=kh(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vi){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){let i=bm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return xt.workingToColorSpace(Fi.copy(this),e),Math.round(et(Fi.r*255,0,255))*65536+Math.round(et(Fi.g*255,0,255))*256+Math.round(et(Fi.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Fi.copy(this),t);let i=Fi.r,s=Fi.g,r=Fi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Fi.copy(this),t),e.r=Fi.r,e.g=Fi.g,e.b=Fi.b,e}getStyle(e=Vi){xt.workingToColorSpace(Fi.copy(this),e);let t=Fi.r,i=Fi.g,s=Fi.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(pl);let i=zo(os.h,pl.h,t),s=zo(os.s,pl.s,t),r=zo(os.l,pl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new Le;Le.NAMES=bm;var Yo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Nn=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new R,Wn=new R,Hh=new R,Xn=new R,br=new R,Mr=new R,mp=new R,Vh=new R,Gh=new R,Wh=new R,Xh=new St,qh=new St,Yh=new St,Ni=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Wn.subVectors(i,t),Hh.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Wn),l=vn.dot(Hh),c=Wn.dot(Wn),h=Wn.dot(Hh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Xh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xh,r.x),o.addScaledVector(qh,r.y),o.addScaledVector(Yh,r.z),o}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Wn.subVectors(e,t),vn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;br.subVectors(s,i),Mr.subVectors(r,i),Vh.subVectors(e,i);let l=br.dot(Vh),c=Mr.dot(Vh);if(l<=0&&c<=0)return t.copy(i);Gh.subVectors(e,s);let h=br.dot(Gh),f=Mr.dot(Gh);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(br,o);Wh.subVectors(e,r);let d=br.dot(Wh),m=Mr.dot(Wh);if(m>=0&&d<=m)return t.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Mr,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return mp.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(mp,a);let g=1/(p+v+u);return o=v*g,a=u*g,t.copy(i).addScaledVector(br,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),gl.subVectors(this.max,Po),Sr.subVectors(e.a,Po),Tr.subVectors(e.b,Po),wr.subVectors(e.c,Po),as.subVectors(Tr,Sr),ls.subVectors(wr,Tr),zs.subVectors(Sr,wr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-zs.z,zs.y,as.z,0,-as.x,ls.z,0,-ls.x,zs.z,0,-zs.x,-as.y,as.x,0,-ls.y,ls.x,0,-zs.y,zs.x,0];return!$h(t,Sr,Tr,wr,gl)||(t=[1,0,0,0,1,0,0,0,1],!$h(t,Sr,Tr,wr,gl))?!1:(xl.crossVectors(as,ls),t=[xl.x,xl.y,xl.z],$h(t,Sr,Tr,wr,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,ml=new Xt,Sr=new R,Tr=new R,wr=new R,as=new R,ls=new R,zs=new R,Po=new R,gl=new R,xl=new R,ks=new R;function $h(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ks.fromArray(n,r);let a=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),h=i.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $n=Wx();function Wx(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Xx(n){Math.abs(n)>65504&&Ze("DataUtils.toHalfFloat(): Value out of range."),n=et(n,-65504,65504),$n.floatView[0]=n;let e=$n.uint32View[0],t=e>>23&511;return $n.baseTable[t]+((e&8388607)>>$n.shiftTable[t])}function qx(n){let e=n>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[e]+(n&1023)]+$n.exponentTable[e],$n.floatView[0]}var Xi=class{static toHalfFloat(e){return Xx(e)}static fromHalfFloat(e){return qx(e)}},ui=new R,vl=new te,Yx=0,vt=class extends Mn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pf,this.updateRanges=[],this.gpuType=ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix3(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),i=Hi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),i=Hi(i,this.array),s=Hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Hi(t,this.array),i=Hi(i,this.array),s=Hi(s,this.array),r=Hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zo=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _t=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},$x=new Xt,Do=new R,Zh=new R,Un=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$x.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);let t=Do.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Do,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Zh)),this.expandByPoint(Do.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zx=0,un=new He,Kh=new Zt,Er=new R,tn=new Xt,Lo=new Xt,Mi=new R,ft=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?Zo:$o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mi.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Mi),Mi.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Mi)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Mi.addVectors(tn.min,Lo.min),tn.expandByPoint(Mi),Mi.addVectors(tn.max,Lo.max),tn.expandByPoint(Mi)):(tn.expandByPoint(Lo.min),tn.expandByPoint(Lo.max))}tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mi.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mi));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mi.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),Mi.add(Er)),s=Math.max(s,i.distanceToSquared(Mi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new R,l[b]=new R;let c=new R,h=new R,f=new R,u=new te,d=new te,m=new te,v=new R,p=new R;function g(b,E,A){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),u.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[b].add(v),a[E].add(v),a[A].add(v),l[b].add(p),l[E].add(p),l[A].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,E=y.length;b<E;++b){let A=y[b],P=A.start,I=A.count;for(let F=P,B=P+I;F<B;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new R,x=new R,M=new R,S=new R;function w(b){M.fromBufferAttribute(s,b),S.copy(M);let E=a[b];_.copy(E),_.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(S,E);let P=x.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,E=y.length;b<E;++b){let A=y[b],P=A.start,I=A.count;for(let F=P,B=P+I;F<B;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mi.fromBufferAttribute(e,t),Mi.normalize(),e.setXYZ(t,Mi.x,Mi.y,Mi.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new vt(u,h,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kx=0,Bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=bn,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bn&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new R,Jh=new R,_l=new R,cs=new R,jh=new R,yl=new R,Qh=new R,Sn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Jh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=cs.dot(this.direction),l=-cs.dot(_l),c=cs.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jh).addScaledVector(_l,u),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){jh.subVectors(t,e),yl.subVectors(i,e),Qh.crossVectors(jh,yl);let o=this.direction.dot(Qh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);let l=a*this.direction.dot(yl.crossVectors(cs,yl));if(l<0)return null;let c=a*this.direction.dot(jh.cross(cs));if(c<0||l+c>o)return null;let h=-a*cs.dot(Qh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gp=new He,Hs=new Sn,bl=new Un,xp=new R,Ml=new R,Sl=new R,Tl=new R,ef=new R,wl=new R,vp=new R,El=new R,yt=class extends Zt{constructor(e=new ft,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(ef.fromBufferAttribute(f,e),o?wl.addScaledVector(ef,h):wl.addScaledVector(ef.sub(t),h))}t.add(wl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(bl.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(bl,xp)===null||Hs.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(gp.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(gp),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,M=_;x<M;x+=3){let S=a.getX(x),w=a.getX(x+1),b=a.getX(x+2);s=Al(this,g,e,i,c,h,f,S,w,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){let y=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);s=Al(this,o,e,i,c,h,f,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,M=_;x<M;x+=3){let S=x,w=x+1,b=x+2;s=Al(this,g,e,i,c,h,f,S,w,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){let y=p,_=p+1,x=p+2;s=Al(this,o,e,i,c,h,f,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Jx(n,e,t,i,s,r,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;El.copy(a),El.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(El);return c<t.near||c>t.far?null:{distance:c,point:El.clone(),object:n}}function Al(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ml),n.getVertexPosition(l,Sl),n.getVertexPosition(c,Tl);let h=Jx(n,e,t,i,Ml,Sl,Tl,vp);if(h){let f=new R;Ni.getBarycoord(vp,Ml,Sl,Tl,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,f,new te)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,f,new te)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Ni.getNormal(Ml,Sl,Tl,u.normal),h.face=u,h.barycoord=f}return h}var qt=class extends Wi{constructor(e=null,t=1,i=1,s,r,o,a,l,c=tt,h=tt,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new He,_p=new He,Rl=[],yp=new Xt,jx=new He,Fo=new yt,No=new Un,Ko=class extends yt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),yp.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),No.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),_p.multiplyMatrices(i,Ar),Fo.matrixWorld=_p,Fo.raycast(e,Rl);for(let o=0,a=Rl.length;o<a;o++){let l=Rl[o];l.instanceId=r,l.object=this,t.push(l)}Rl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qt(new Float32Array(s*this.count),s,this.count,An,ut));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tf=new R,Qx=new R,ev=new it,Si=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tf.subVectors(i,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(tf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ev.getNormalMatrix(e),s=this.coplanarPoint(tf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new Un,tv=new te(.5,.5),Cl=new R,kr=class{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],p=r[10],g=r[11],y=r[12],_=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,d-h,g-m,M-y).normalize(),s[1].setComponents(c+o,d+h,g+m,M+y).normalize(),s[2].setComponents(c+a,d+f,g+v,M+_).normalize(),s[3].setComponents(c-a,d-f,g-v,M-_).normalize(),i)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,d-u,g-p,M-x).normalize();else if(s[4].setComponents(c-l,d-u,g-p,M-x).normalize(),t===yn)s[5].setComponents(c+l,d+u,g+p,M+x).normalize();else if(t===Fr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=tv.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Cl.x=s.normal.x>0?e.max.x:e.min.x,Cl.y=s.normal.y>0?e.max.y:e.min.y,Cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tc=new R,ic=new R,bp=new He,Uo=new Sn,Il=new Un,nf=new R,Mp=new R,$s=class extends Zt{constructor(e=new ft,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)tc.fromBufferAttribute(t,s-1),ic.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=tc.distanceTo(ic);e.setAttribute("lineDistance",new _t(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,e.ray.intersectsSphere(Il)===!1)return;bp.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,p=m-1;v<p;v+=c){let g=h.getX(v),y=h.getX(v+1),_=Pl(this,e,Uo,l,g,y,v);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(m-1),p=h.getX(d),g=Pl(this,e,Uo,l,v,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,p=m-1;v<p;v+=c){let g=Pl(this,e,Uo,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=Pl(this,e,Uo,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(tc.fromBufferAttribute(a,s),ic.fromBufferAttribute(a,r),t.distanceSqToSegment(tc,ic,nf,Mp)>i)return;nf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(nf);if(!(c<e.near||c>e.far))return{distance:c,point:Mp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Hr=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sp=new He,mf=new Sn,Dl=new Un,Ll=new R,Jo=class extends Zt{constructor(e=new ft,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Sp.copy(s).invert(),mf.copy(e.ray).applyMatrix4(Sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,v=d;m<v;m++){let p=c.getX(m);Ll.fromBufferAttribute(f,p),Tp(Ll,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,v=d;m<v;m++)Ll.fromBufferAttribute(f,m),Tp(Ll,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tp(n,e,t,i,s,r,o){let a=mf.distanceSqToPoint(n);if(a<t){let l=new R;mf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var jo=class extends Wi{constructor(e=[],t=bs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends Wi{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends Wi{constructor(e,t,i=Ti,s,r,o,a=tt,l=tt,c,h=Fn,f=1){if(h!==Fn&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nc=class extends Jn{constructor(e,t=Ti,i=bs,s,r,o=tt,a=tt,l,c=Fn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends Wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class n extends ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function m(v,p,g,y,_,x,M,S,w,b,E){let A=x/w,P=M/b,I=x/2,F=M/2,B=S/2,N=w+1,k=b+1,Y=0,ie=0,ue=new R;for(let xe=0;xe<k;xe++){let me=xe*P-F;for(let Me=0;Me<N;Me++){let Je=Me*A-I;ue[v]=Je*y,ue[p]=me*_,ue[g]=B,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[g]=S>0?1:-1,h.push(ue.x,ue.y,ue.z),f.push(Me/w),f.push(1-xe/b),Y+=1}}for(let xe=0;xe<b;xe++)for(let me=0;me<w;me++){let Me=u+me+N*xe,Je=u+me+N*(xe+1),ht=u+(me+1)+N*(xe+1),$=u+(me+1)+N*xe;l.push(Me,Je,$),l.push(Je,ht,$),ie+=6}a.addGroup(d,ie,E),d+=ie,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ri=class n extends ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,v=[],p=i/2,g=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function y(){let x=new R,M=new R,S=0,w=(t-e)/i;for(let b=0;b<=r;b++){let E=[],A=b/r,P=A*(t-e)+e;for(let I=0;I<=s;I++){let F=I/s,B=F*l+a,N=Math.sin(B),k=Math.cos(B);M.x=P*N,M.y=-A*i+p,M.z=P*k,f.push(M.x,M.y,M.z),x.set(N,w,k).normalize(),u.push(x.x,x.y,x.z),d.push(F,1-A),E.push(m++)}v.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let A=v[E][b],P=v[E+1][b],I=v[E+1][b+1],F=v[E][b+1];(e>0||E!==0)&&(h.push(A,P,F),S+=3),(t>0||E!==r-1)&&(h.push(P,I,F),S+=3)}c.addGroup(g,S,0),g+=S}function _(x){let M=m,S=new te,w=new R,b=0,E=x===!0?e:t,A=x===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*A,0),u.push(0,A,0),d.push(.5,.5),m++;let P=m;for(let I=0;I<=s;I++){let B=I/s*l+a,N=Math.cos(B),k=Math.sin(B);w.x=E*k,w.y=p*A,w.z=E*N,f.push(w.x,w.y,w.z),u.push(0,A,0),S.x=N*.5+.5,S.y=k*.5*A+.5,d.push(S.x,S.y),m++}for(let I=0;I<s;I++){let F=M+I,B=P+I;x===!0?h.push(B,B+1,F):h.push(B+1,B,F),b+=3}c.addGroup(g,b,x===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class n extends Ri{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class n extends ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new R,x=new R,M=new R;for(let S=0;S<t.length;S+=3)d(t[S+0],_),d(t[S+1],x),d(t[S+2],M),l(_,x,M,y)}function l(y,_,x,M){let S=M+1,w=[];for(let b=0;b<=S;b++){w[b]=[];let E=y.clone().lerp(x,b/S),A=_.clone().lerp(x,b/S),P=S-b;for(let I=0;I<=P;I++)I===0&&b===S?w[b][I]=E:w[b][I]=E.clone().lerp(A,I/P)}for(let b=0;b<S;b++)for(let E=0;E<2*(S-b)-1;E++){let A=Math.floor(E/2);E%2===0?(u(w[b][A+1]),u(w[b+1][A]),u(w[b][A])):(u(w[b][A+1]),u(w[b+1][A+1]),u(w[b+1][A]))}}function c(y){let _=new R;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let y=new R;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let x=p(y)/2/Math.PI+.5,M=g(y)/Math.PI+.5;o.push(x,1-M)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){let _=o[y+0],x=o[y+2],M=o[y+4],S=Math.max(_,x,M),w=Math.min(_,x,M);S>.9&&w<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,_){let x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let y=new R,_=new R,x=new R,M=new R,S=new te,w=new te,b=new te;for(let E=0,A=0;E<r.length;E+=9,A+=6){y.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),S.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),M.copy(y).add(_).add(x).divideScalar(3);let P=p(M);v(S,A+0,y,P),v(w,A+2,_,P),v(b,A+4,x,P)}}function v(y,_,x,M){M<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],o=[],a=new R,l=new He;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sc=class extends Vr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var wp=new R,Ep=new R,sf=new zf,rf=new zf,of=new zf,jn=class extends nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ep.subVectors(s[0],s[1]).add(s[0]),c=Ep);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),sf.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,p),rf.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,p),of.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),rf.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),of.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(sf.calc(l),rf.calc(l),of.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ap(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function iv(n,e){let t=1-n;return t*t*e}function nv(n,e){return 2*(1-n)*n*e}function sv(n,e){return n*n*e}function ko(n,e,t,i){return iv(n,e)+nv(n,t)+sv(n,i)}function rv(n,e){let t=1-n;return t*t*t*e}function ov(n,e){let t=1-n;return 3*t*t*n*e}function av(n,e){return 3*(1-n)*n*n*e}function lv(n,e){return n*n*n*e}function Ho(n,e,t,i,s){return rv(n,e)+ov(n,t)+av(n,i)+lv(n,s)}var ia=class extends nn{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,s.x,r.x,o.x,a.x),Ho(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rc=class extends nn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,s.x,r.x,o.x,a.x),Ho(e,s.y,r.y,o.y,a.y),Ho(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends nn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends nn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends nn{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ko(e,s.x,r.x,o.x),ko(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends nn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ko(e,s.x,r.x,o.x),ko(e,s.y,r.y,o.y),ko(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Ap(a,l.x,c.x,h.x,f.x),Ap(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:jn,CubicBezierCurve:ia,CubicBezierCurve3:rc,EllipseCurve:Vr,LineCurve:na,LineCurve3:oc,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ra,SplineCurve:oa}),lc=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},aa=class extends lc{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new na(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new sa(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ia(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Vr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gr=class extends aa{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new aa().fromJSON(s))}return this}};function cv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Mm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=pv(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return la(r,o,t,a,l,c,0),o}function Mm(n,e,t,i,s){let r;if(s===wv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Rp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Rp(o/i|0,n[o],n[o+1],r);return r&&Wr(r,r.next)&&(ua(r),r=r.next),r}function Ks(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function la(n,e,t,i,s,r,o){if(!n)return;!o&&r&&_v(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?hv(n,i,s,r):uv(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=fv(Ks(n),e),la(n,e,t,i,s,r,2)):o===2&&dv(n,e,t,i,s,r):la(Ks(n),e,t,i,s,r,1);break}}}function uv(n){let e=n.prev,t=n,i=n.next;if(Qt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Bo(s,a,r,l,o,c,m.x,m.y)&&Qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),v=Math.max(a,l,c),p=Math.max(h,f,u),g=gf(d,m,e,t,i),y=gf(v,p,e,t,i),_=n.prevZ,x=n.nextZ;for(;_&&_.z>=g&&x&&x.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Bo(a,h,l,f,c,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Bo(a,h,l,f,c,u,x.x,x.y)&&Qt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Bo(a,h,l,f,c,u,_.x,_.y)&&Qt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Bo(a,h,l,f,c,u,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function fv(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Wr(i,s)&&Tm(i,t,t.next,s)&&ca(i,s)&&ca(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return Ks(t)}function dv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mv(o,a)){let l=wm(o,a);o=Ks(o,o.next),l=Ks(l,l.next),la(o,e,t,i,s,r,0),la(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function pv(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Mm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(bv(c))}s.sort(mv);for(let r=0;r<s.length;r++)t=gv(s[r],t);return t}function mv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function gv(n,e){let t=xv(n,e);if(!t)return e;let i=wm(t,n);return Ks(i,i.next),Ks(t,t.next)}function xv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Wr(n,t))return t;do{if(Wr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Sm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);ca(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&vv(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function vv(n,e){return Qt(n.prev,n,e.prev)<0&&Qt(e.next,n,n.next)<0}function _v(n,e,t,i){let s=n;do s.z===0&&(s.z=gf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yv(s)}function yv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function gf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function bv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Sm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Bo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Sm(n,e,t,i,s,r,o,a)}function Mv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Sv(n,e)&&(ca(n,e)&&ca(e,n)&&Tv(n,e)&&(Qt(n.prev,n,e.prev)||Qt(n,e.prev,e))||Wr(n,e)&&Qt(n.prev,n,n.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wr(n,e){return n.x===e.x&&n.y===e.y}function Tm(n,e,t,i){let s=Nl(Qt(n,e,t)),r=Nl(Qt(n,e,i)),o=Nl(Qt(t,i,n)),a=Nl(Qt(t,i,e));return!!(s!==r&&o!==a||s===0&&Fl(n,t,e)||r===0&&Fl(n,i,e)||o===0&&Fl(t,n,i)||a===0&&Fl(t,e,i))}function Fl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Nl(n){return n>0?1:n<0?-1:0}function Sv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ca(n,e){return Qt(n.prev,n,n.next)<0?Qt(n,e,n.next)>=0&&Qt(n,n.prev,e)>=0:Qt(n,e,n.prev)<0||Qt(n,n.next,e)<0}function Tv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wm(n,e){let t=xf(n.i,n.x,n.y),i=xf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rp(n,e,t,i){let s=xf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function xf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var vf=class{static triangulate(e,t,i=2){return cv(e,t,i)}},Ws=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Cp(e),Ip(i,e);let o=e.length;t.forEach(Cp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ip(i,t[l]);let a=vf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ip(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ha=class n extends ft{constructor(e=new Gr([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ev,_,x=!1,M,S,w,b;if(g){_=g.getSpacedPoints(h),x=!0,u=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,oe),S=new R,w=new R,b=new R}u||(p=0,d=0,m=0,v=0);let E=a.extractPoints(c),A=E.shape,P=E.holes;if(!Ws.isClockWise(A)){A=A.reverse();for(let oe=0,he=P.length;oe<he;oe++){let fe=P[oe];Ws.isClockWise(fe)&&(P[oe]=fe.reverse())}}function F(oe){let fe=10000000000000001e-36,Te=oe[0];for(let G=1;G<=oe.length;G++){let Ue=G%oe.length,Fe=oe[Ue],qe=Fe.x-Te.x,Qe=Fe.y-Te.y,O=qe*qe+Qe*Qe,Mt=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Te.x),Math.abs(Te.y)),ot=fe*Mt*Mt;if(O<=ot){oe.splice(Ue,1),G--;continue}Te=Fe}}F(A),P.forEach(F);let B=P.length,N=A;for(let oe=0;oe<B;oe++){let he=P[oe];A=A.concat(he)}function k(oe,he,fe){return he||je("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(he,fe)}let Y=A.length;function ie(oe,he,fe){let Te,G,Ue,Fe=oe.x-he.x,qe=oe.y-he.y,Qe=fe.x-oe.x,O=fe.y-oe.y,Mt=Fe*Fe+qe*qe,ot=Fe*O-qe*Qe;if(Math.abs(ot)>Number.EPSILON){let D=Math.sqrt(Mt),T=Math.sqrt(Qe*Qe+O*O),W=he.x-qe/D,q=he.y+Fe/D,j=fe.x-O/T,ve=fe.y+Qe/T,_e=((j-W)*O-(ve-q)*Qe)/(Fe*O-qe*Qe);Te=W+Fe*_e-oe.x,G=q+qe*_e-oe.y;let Q=Te*Te+G*G;if(Q<=2)return new te(Te,G);Ue=Math.sqrt(Q/2)}else{let D=!1;Fe>Number.EPSILON?Qe>Number.EPSILON&&(D=!0):Fe<-Number.EPSILON?Qe<-Number.EPSILON&&(D=!0):Math.sign(qe)===Math.sign(O)&&(D=!0),D?(Te=-qe,G=Fe,Ue=Math.sqrt(Mt)):(Te=Fe,G=qe,Ue=Math.sqrt(Mt/2))}return new te(Te/Ue,G/Ue)}let ue=[];for(let oe=0,he=N.length,fe=he-1,Te=oe+1;oe<he;oe++,fe++,Te++)fe===he&&(fe=0),Te===he&&(Te=0),ue[oe]=ie(N[oe],N[fe],N[Te]);let xe=[],me,Me=ue.concat();for(let oe=0,he=B;oe<he;oe++){let fe=P[oe];me=[];for(let Te=0,G=fe.length,Ue=G-1,Fe=Te+1;Te<G;Te++,Ue++,Fe++)Ue===G&&(Ue=0),Fe===G&&(Fe=0),me[Te]=ie(fe[Te],fe[Ue],fe[Fe]);xe.push(me),Me=Me.concat(me)}let Je;if(p===0)Je=Ws.triangulateShape(N,P);else{let oe=[],he=[];for(let fe=0;fe<p;fe++){let Te=fe/p,G=d*Math.cos(Te*Math.PI/2),Ue=m*Math.sin(Te*Math.PI/2)+v;for(let Fe=0,qe=N.length;Fe<qe;Fe++){let Qe=k(N[Fe],ue[Fe],Ue);ne(Qe.x,Qe.y,-G),Te===0&&oe.push(Qe)}for(let Fe=0,qe=B;Fe<qe;Fe++){let Qe=P[Fe];me=xe[Fe];let O=[];for(let Mt=0,ot=Qe.length;Mt<ot;Mt++){let D=k(Qe[Mt],me[Mt],Ue);ne(D.x,D.y,-G),Te===0&&O.push(D)}Te===0&&he.push(O)}}Je=Ws.triangulateShape(oe,he)}let ht=Je.length,$=m+v;for(let oe=0;oe<Y;oe++){let he=u?k(A[oe],Me[oe],$):A[oe];x?(w.copy(M.normals[0]).multiplyScalar(he.x),S.copy(M.binormals[0]).multiplyScalar(he.y),b.copy(_[0]).add(w).add(S),ne(b.x,b.y,b.z)):ne(he.x,he.y,0)}for(let oe=1;oe<=h;oe++)for(let he=0;he<Y;he++){let fe=u?k(A[he],Me[he],$):A[he];x?(w.copy(M.normals[oe]).multiplyScalar(fe.x),S.copy(M.binormals[oe]).multiplyScalar(fe.y),b.copy(_[oe]).add(w).add(S),ne(b.x,b.y,b.z)):ne(fe.x,fe.y,f/h*oe)}for(let oe=p-1;oe>=0;oe--){let he=oe/p,fe=d*Math.cos(he*Math.PI/2),Te=m*Math.sin(he*Math.PI/2)+v;for(let G=0,Ue=N.length;G<Ue;G++){let Fe=k(N[G],ue[G],Te);ne(Fe.x,Fe.y,f+fe)}for(let G=0,Ue=P.length;G<Ue;G++){let Fe=P[G];me=xe[G];for(let qe=0,Qe=Fe.length;qe<Qe;qe++){let O=k(Fe[qe],me[qe],Te);x?ne(O.x,O.y+_[h-1].y,_[h-1].x+fe):ne(O.x,O.y,f+fe)}}}U(),X();function U(){let oe=s.length/3;if(u){let he=0,fe=Y*he;for(let Te=0;Te<ht;Te++){let G=Je[Te];ge(G[2]+fe,G[1]+fe,G[0]+fe)}he=h+p*2,fe=Y*he;for(let Te=0;Te<ht;Te++){let G=Je[Te];ge(G[0]+fe,G[1]+fe,G[2]+fe)}}else{for(let he=0;he<ht;he++){let fe=Je[he];ge(fe[2],fe[1],fe[0])}for(let he=0;he<ht;he++){let fe=Je[he];ge(fe[0]+Y*h,fe[1]+Y*h,fe[2]+Y*h)}}i.addGroup(oe,s.length/3-oe,0)}function X(){let oe=s.length/3,he=0;H(N,he),he+=N.length;for(let fe=0,Te=P.length;fe<Te;fe++){let G=P[fe];H(G,he),he+=G.length}i.addGroup(oe,s.length/3-oe,1)}function H(oe,he){let fe=oe.length;for(;--fe>=0;){let Te=fe,G=fe-1;G<0&&(G=oe.length-1);for(let Ue=0,Fe=h+p*2;Ue<Fe;Ue++){let qe=Y*Ue,Qe=Y*(Ue+1),O=he+Te+qe,Mt=he+G+qe,ot=he+G+Qe,D=he+Te+Qe;de(O,Mt,ot,D)}}}function ne(oe,he,fe){l.push(oe),l.push(he),l.push(fe)}function ge(oe,he,fe){Ae(oe),Ae(he),Ae(fe);let Te=s.length/3,G=y.generateTopUV(i,s,Te-3,Te-2,Te-1);Re(G[0]),Re(G[1]),Re(G[2])}function de(oe,he,fe,Te){Ae(oe),Ae(he),Ae(Te),Ae(he),Ae(fe),Ae(Te);let G=s.length/3,Ue=y.generateSideWallUV(i,s,G-6,G-3,G-2,G-1);Re(Ue[0]),Re(Ue[1]),Re(Ue[3]),Re(Ue[1]),Re(Ue[2]),Re(Ue[3])}function Ae(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function Re(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Av(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ac[s.type]().fromJSON(s)),new n(i,e.options)}},Ev={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new te(r,o),new te(a,l),new te(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],v=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-f),new te(u,1-m),new te(v,1-g)]:[new te(a,1-l),new te(h,1-f),new te(d,1-m),new te(p,1-g)]}};function Av(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fa=class n extends ta{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var da=class n extends ta{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oi=class n extends ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let _=0;_<c;_++){let x=_*f-r;m.push(x,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let _=y+c*g,x=y+c*(g+1),M=y+1+c*(g+1),S=y+1+c*g;d.push(_,x,S),d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Js=class n extends ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new R,u=new R,d=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){let y=[],_=g/i,x=o+_*a,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),w=0;g===0&&o===0?w=.5/t:g===i&&l===Math.PI&&(w=-.5/t);for(let b=0;b<=t;b++){let E=b/t,A=s+E*r;f.x=-S*Math.cos(A),f.y=M,f.z=S*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(E+w,1-_),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let _=h[g][y+1],x=h[g][y],M=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&d.push(_,x,S),(g!==i-1||l<Math.PI)&&d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hn=class n extends ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new R,d=new R,m=new R;for(let v=0;v<=i;v++){let p=o+v/i*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){let g=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,_=(s+1)*(v-1)+p,x=(s+1)*v+p;l.push(g,y,x),l.push(y,_,x)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ms=class n extends ft{constructor(e=new ra(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new te,h=new R,f=[],u=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function v(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),y(),g()}function p(_){h=e.getPointAt(_/t,h);let x=o.normals[_],M=o.binormals[_];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,b=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+b*M.x,l.y=E*x.y+b*M.y,l.z=E*x.z+b*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){let M=(s+1)*(_-1)+(x-1),S=(s+1)*_+(x-1),w=(s+1)*_+x,b=(s+1)*(_-1)+x;m.push(M,S,b),m.push(S,w,b)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ir(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Pp(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Pp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function zi(n){let e={};for(let t=0;t<n.length;t++){let i=ir(n[t]);for(let s in i)e[s]=i[s]}return e}function Pp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Rn={clone:ir,merge:zi},Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new He().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xr=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var cc=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uc=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var qr=class extends Ys{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ul(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hc=class extends gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hf:r=e,a=2*t-i;break;case ff:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hf:o=e,l=2*i-t;break;case ff:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),v=m*m,p=v*m,g=-u*p+2*u*v-u*m,y=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*m+1,_=(-1-d)*p+(1.5+d)*v+.5*m,x=d*p-d*v;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+y*o[c+M]+_*o[l+M]+x*o[f+M];return r}},fc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},dc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pc=class extends gs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),v=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let v=o[c+m],p=o[l+m],g=d*u+m*2,y=f[g],_=f[g+1],x=e*u+m*2,M=h[x],S=h[x+1],w=(i-t)/(s-t),b,E,A,P,I;for(let F=0;F<8;F++){b=w*w,E=b*w,A=1-w,P=A*A,I=P*A;let N=I*t+3*P*w*y+3*A*b*M+E*s-i;if(Math.abs(N)<1e-10)break;let k=3*P*(y-t)+6*A*w*(M-y)+3*b*(s-M);if(Math.abs(k)<1e-10)break;w=w-N/k,w=Math.max(0,Math.min(1,w))}r[m]=I*v+3*P*w*_+3*A*b*S+E*p}return r}},sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Jl:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break;case cf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return kl;case this.InterpolantFactoryMethodBezier:return cf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&xx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let v=t[f+m];if(v!==t[u+m]||v!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Jl;var xs=class extends sn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Vo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends sn{constructor(e,t,i,s){super(e,t,i,s)}};mc.prototype.ValueTypeName="color";var gc=class extends sn{constructor(e,t,i,s){super(e,t,i,s)}};gc.prototype.ValueTypeName="number";var xc=class extends gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},pa=class extends sn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends sn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Vo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends sn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="vector";var _c=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Em=new _c,yc=class{constructor(e){this.manager=e!==void 0?e:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ma=class extends Yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},af=new He,Dp=new R,Lp=new R,bc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lp),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bl=new R,Ol=new Gi,Ln=new R,ga=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,Ol,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,Ol,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Bl,Ol,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,Ol,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new R,Fp=new te,Np=new te,ai=class extends ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Np),t.subVectors(Np,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _f=class extends bc{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},Tn=class extends Yr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yf=class extends bc{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new yf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rr=-90,Cr=1,Mc=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ai(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new ai(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let o=new ai(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let a=new ai(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let l=new ai(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new ai(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Sc=class extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Pv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Pv(){this._document.hidden===!1&&this.reset()}var Hf="\\[\\]\\.:\\/",Dv=new RegExp("["+Hf+"]","g"),Vf="[^"+Hf+"]",Lv="[^"+Hf.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",Vf),Nv=/(WCOD+)?/.source.replace("WCOD",Lv),Uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vf),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vf),Ov=new RegExp("^"+Fv+Nv+Uv+Bv+"$"),zv=["material","materials","bones","map"],bf=class{constructor(e,t,i){let s=i||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dv,"")}static parseTrackName(e){let t=Ov.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=bf;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ST=new Float32Array(1);var Up=new He,va=class{constructor(e,t,i=0,s=1/0){this.ray=new Sn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(e,t=!0,i=[]){return Mf(e,this,i,t),i.sort(Bp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mf(e[s],this,i,t);return i.sort(Bp),i}};function Bp(n,e){return n.distance-e.distance}function Mf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Mf(r[o],e,t,!0)}}var _a=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ys=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sf=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Op=new R,zl=new R,Ir=new R,Pr=new R,lf=new R,kv=new R,Hv=new R,qi=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Op.subVectors(e,this.start),zl.subVectors(this.end,this.start);let i=zl.dot(zl);if(i===0)return 0;let r=zl.dot(Op)/i;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=kv,i=Hv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Ir.subVectors(c,a),Pr.subVectors(h,l),lf.subVectors(a,l);let f=Ir.dot(Ir),u=Pr.dot(Pr),d=Pr.dot(lf);if(f<=s&&u<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(f<=s)r=0,o=d/u,o=et(o,0,1);else{let m=Ir.dot(lf);if(u<=s)o=0,r=et(-m/f,0,1);else{let v=Ir.dot(Pr),p=f*u-v*v;p!==0?r=et((v*d-m*u)/p,0,1):r=0,o=(v*r+d)/u,o<0?(o=0,r=et(-m/f,0,1)):o>1&&(o=1,r=et((v-m)/f,0,1))}}return t.copy(a).addScaledVector(Ir,r),i.copy(l).addScaledVector(Pr,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ya=class extends Mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Gf(n,e,t,i){let s=Vv(i);switch(t){case Df:return n*e;case An:return n*e/s.components*s.byteLength;case jr:return n*e/s.components*s.byteLength;case dn:return n*e*2/s.components*s.byteLength;case Es:return n*e*2/s.components*s.byteLength;case Lf:return n*e*3/s.components*s.byteLength;case rt:return n*e*4/s.components*s.byteLength;case As:return n*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Pc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(n,8)*Math.max(e,8)/2;case Dc:case Lc:case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Fa:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(n){switch(n){case gi:case Kr:return{byteLength:1,components:1};case Ss:case Ca:case Et:return{byteLength:2,components:1};case Ec:case Ac:return{byteLength:2,components:4};case Ti:case Ts:case ut:return{byteLength:4,components:1};case If:case Pf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $v(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ry=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Zv,alphahash_pars_fragment:Kv,alphamap_fragment:Jv,alphamap_pars_fragment:jv,alphatest_fragment:Qv,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:i_,batching_pars_vertex:n_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:x_,common:v_,cube_uv_reflection_fragment:__,defaultnormal_vertex:y_,displacementmap_pars_vertex:b_,displacementmap_vertex:M_,emissivemap_fragment:S_,emissivemap_pars_fragment:T_,colorspace_fragment:w_,colorspace_pars_fragment:E_,envmap_fragment:A_,envmap_common_pars_fragment:R_,envmap_pars_fragment:C_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:H_,envmap_vertex:P_,fog_vertex:D_,fog_pars_vertex:L_,fog_fragment:F_,fog_pars_fragment:N_,gradientmap_pars_fragment:U_,lightmap_pars_fragment:B_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:z_,lights_pars_begin:k_,lights_toon_fragment:V_,lights_toon_pars_fragment:G_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:$_,lights_fragment_maps:Z_,lights_fragment_end:K_,lightprobes_pars_fragment:J_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:ey,logdepthbuf_vertex:ty,map_fragment:iy,map_pars_fragment:ny,map_particle_fragment:sy,map_particle_pars_fragment:ry,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ay,morphinstance_vertex:ly,morphcolor_vertex:cy,morphnormal_vertex:uy,morphtarget_pars_vertex:hy,morphtarget_vertex:fy,normal_fragment_begin:dy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:xy,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:by,iridescence_pars_fragment:My,opaque_fragment:Sy,packing:Ty,premultiplied_alpha_fragment:wy,project_vertex:Ey,dithering_fragment:Ay,dithering_pars_fragment:Ry,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Py,shadowmap_pars_vertex:Dy,shadowmap_vertex:Ly,shadowmask_pars_fragment:Fy,skinbase_vertex:Ny,skinning_pars_vertex:Uy,skinning_vertex:By,skinnormal_vertex:Oy,specularmap_fragment:zy,specularmap_pars_fragment:ky,tonemapping_fragment:Hy,tonemapping_pars_fragment:Vy,transmission_fragment:Gy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:Yy,worldpos_vertex:$y,background_vert:Zy,background_frag:Ky,backgroundCube_vert:Jy,backgroundCube_frag:jy,cube_vert:Qy,cube_frag:eb,depth_vert:tb,depth_frag:ib,distance_vert:nb,distance_frag:sb,equirect_vert:rb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:hb,meshlambert_frag:fb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:xb,meshphong_frag:vb,meshphysical_vert:_b,meshphysical_frag:yb,meshtoon_vert:bb,meshtoon_frag:Mb,points_vert:Sb,points_frag:Tb,shadow_vert:wb,shadow_frag:Eb,sprite_vert:Ab,sprite_frag:Rb},Ie={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Hn={basic:{uniforms:zi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zi([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zi([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Le(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zi([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zi([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zi([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zi([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zi([Ie.common,Ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zi([Ie.lights,Ie.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Hn.physical={uniforms:zi([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var au={r:0,b:0,g:0},Cb=new He,Km=new it;Km.set(-1,0,0,0,1,0,0,0,1);function Ib(n,e,t,i,s,r){let o=new Le(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let x=y.backgroundBlurriness>0;_=e.get(_,x)}return _}function m(y){let _=!1,x=d(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),_=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,_){let x=d(_);x&&(x.isCubeTexture||x.mapping===Aa)?(c===void 0&&(c=new yt(new ps(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:ir(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Km),c.material.toneMapped=xt.getTransfer(x.colorSpace)!==Ct,(h!==x||f!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new yt(new Oi(2,2),new Tt({name:"BackgroundMaterial",uniforms:ir(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=xt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(au,kf(n)),t.buffers.color.setClear(au.r,au.g,au.b,_,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),a=_,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:v,dispose:g}}function Pb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(P,I,F,B,N){let k=!1,Y=f(P,B,F,I);r!==Y&&(r=Y,c(r.object)),k=d(P,B,F,N),k&&m(P,B,F,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(P,I,F,B),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function f(P,I,F,B){let N=B.wireframe===!0,k=i[I.id];k===void 0&&(k={},i[I.id]=k);let Y=P.isInstancedMesh===!0?P.id:0,ie=k[Y];ie===void 0&&(ie={},k[Y]=ie);let ue=ie[F.id];ue===void 0&&(ue={},ie[F.id]=ue);let xe=ue[N];return xe===void 0&&(xe=u(l()),ue[N]=xe),xe}function u(P){let I=[],F=[],B=[];for(let N=0;N<t;N++)I[N]=0,F[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:P,attributes:{},index:null}}function d(P,I,F,B){let N=r.attributes,k=I.attributes,Y=0,ie=F.getAttributes();for(let ue in ie)if(ie[ue].location>=0){let me=N[ue],Me=k[ue];if(Me===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function m(P,I,F,B){let N={},k=I.attributes,Y=0,ie=F.getAttributes();for(let ue in ie)if(ie[ue].location>=0){let me=k[ue];me===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),N[ue]=Me,Y++}r.attributes=N,r.attributesNum=Y,r.index=B}function v(){let P=r.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function p(P){g(P,0)}function g(P,I){let F=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;F[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),N[P]!==I&&(n.vertexAttribDivisor(P,I),N[P]=I)}function y(){let P=r.newAttributes,I=r.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==P[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function _(P,I,F,B,N,k,Y){Y===!0?n.vertexAttribIPointer(P,I,F,N,k):n.vertexAttribPointer(P,I,F,B,N,k)}function x(P,I,F,B){v();let N=B.attributes,k=F.getAttributes(),Y=I.defaultAttributeValues;for(let ie in k){let ue=k[ie];if(ue.location>=0){let xe=N[ie];if(xe===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),xe!==void 0){let me=xe.normalized,Me=xe.itemSize,Je=e.get(xe);if(Je===void 0)continue;let ht=Je.buffer,$=Je.type,U=Je.bytesPerElement,X=$===n.INT||$===n.UNSIGNED_INT||xe.gpuType===Ts;if(xe.isInterleavedBufferAttribute){let H=xe.data,ne=H.stride,ge=xe.offset;if(H.isInstancedInterleavedBuffer){for(let de=0;de<ue.locationSize;de++)g(ue.location+de,H.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let de=0;de<ue.locationSize;de++)p(ue.location+de);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let de=0;de<ue.locationSize;de++)_(ue.location+de,Me/ue.locationSize,$,me,ne*U,(ge+Me/ue.locationSize*de)*U,X)}else{if(xe.isInstancedBufferAttribute){for(let H=0;H<ue.locationSize;H++)g(ue.location+H,xe.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let H=0;H<ue.locationSize;H++)p(ue.location+H);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let H=0;H<ue.locationSize;H++)_(ue.location+H,Me/ue.locationSize,$,me,Me*U,Me/ue.locationSize*H*U,X)}}else if(Y!==void 0){let me=Y[ie];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(ue.location,me);break;case 3:n.vertexAttrib3fv(ue.location,me);break;case 4:n.vertexAttrib4fv(ue.location,me);break;default:n.vertexAttrib1fv(ue.location,me)}}}}y()}function M(){E();for(let P in i){let I=i[P];for(let F in I){let B=I[F];for(let N in B){let k=B[N];for(let Y in k)h(k[Y].object),delete k[Y];delete B[N]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let I=i[P.id];for(let F in I){let B=I[F];for(let N in B){let k=B[N];for(let Y in k)h(k[Y].object),delete k[Y];delete B[N]}}delete i[P.id]}function w(P){for(let I in i){let F=i[I];for(let B in F){let N=F[B];if(N[P.id]===void 0)continue;let k=N[P.id];for(let Y in k)h(k[Y].object),delete k[Y];delete N[P.id]}}}function b(P){for(let I in i){let F=i[I],B=P.isInstancedMesh===!0?P.id:0,N=F[B];if(N!==void 0){for(let k in N){let Y=N[k];for(let ie in Y)h(Y[ie].object),delete Y[ie];delete N[k]}delete F[B],Object.keys(F).length===0&&delete i[I]}}}function E(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Db(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Lb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==rt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let b=w===Et&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ut&&!b)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,maxSamples:M,samples:S}}function Fb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Si,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,_=y*4,x=g.clippingState||null;l.value=x,x=h(m,u,_,d);for(let M=0;M!==_;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=d+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,x=d;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Rs=4,Am=[.125,.215,.35,.446,.526,.582],nr=20,Nb=256,Ua=new _s,Rm=new Le,Wf=null,Xf=0,qf=0,Yf=!1,Ub=new R,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Ub}=r;Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,Xf,qf),this._renderer.xr.enabled=Yf,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Et,format:rt,colorSpace:Go,depthBuffer:!1},s=Cm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bb(r)),this._blurMaterial=zb(r,e,t),this._ggxMaterial=Ob(r,e,t)}return s}_compileMaterial(e){let t=new yt(new ft,e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,s,r){let l=new ai(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Rm),f.toneMapping=rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new ps,new fi({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,g=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(Rm),g=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let M=this._cubeSize;Qr(s,x*M,_>2?M:0,M,M),f.setRenderTarget(s),g&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===bs||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ua)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:m}=this,v=this._sizeLods[i],p=3*v*(i>m-Rs?i-m+Rs:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Qr(r,p,g,3*v,2*v),s.setRenderTarget(r),s.render(a,Ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Qr(e,p,g,3*v,2*v),s.setRenderTarget(e),s.render(a,Ua)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*nr-1),v=r/m,p=isFinite(r)?1+Math.floor(h*v):nr;p>nr&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);let g=[],y=0;for(let w=0;w<nr;++w){let b=w/v,E=Math.exp(-b*b/2);g.push(E),w===0?y+=E:w<p&&(y+=2*E)}for(let w=0;w<g.length;w++)g[w]=g[w]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;let x=this._sizeLods[s],M=3*x*(s>_-Rs?s-_+Rs:0),S=4*(this._cubeSize-x);Qr(t,M,S,3*x,2*x),l.setRenderTarget(t),l.render(f,Ua)}};function Bb(n){let e=[],t=[],i=[],s=n,r=n-Rs+1+Am.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rs?l=Am[o-n+Rs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,v=3,p=2,g=1,y=new Float32Array(v*m*d),_=new Float32Array(p*m*d),x=new Float32Array(g*m*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,b=S>2?0:-1,E=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];y.set(E,v*m*S),_.set(u,p*m*S);let A=[S,S,S,S,S,S];x.set(A,g*m*S)}let M=new ft;M.setAttribute("position",new vt(y,v)),M.setAttribute("uv",new vt(_,p)),M.setAttribute("faceIndex",new vt(x,g)),i.push(new yt(M,null)),s>Rs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Cm(n,e,t){let i=new Pt(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ob(n,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zb(n,e,t){let i=new Float32Array(nr),s=new R(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Im(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Pm(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var cu=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ps(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:li});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=It),new Mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function kb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===zn||d===Tc)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new cu(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===zn||d===Tc,v=d===bs||d===er;if(m||v){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new to(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new to(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===zn?u.mapping=bs:d===Tc&&(u.mapping=er),u}function l(u){let d=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Hb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Xs("WebGLRenderer: "+i+" extension not supported."),s}}}function Vb(n,e,t,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let y=d.array;v=d.version;for(let _=0,x=y.length;_<x;_+=3){let M=y[_+0],S=y[_+1],w=y[_+2];u.push(M,S,S,w,w,M)}}else{let y=m.array;v=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let M=_+0,S=_+1,w=_+2;u.push(M,S,S,w,w,M)}}let p=new(m.count>=65535?Zo:$o)(u,1);p.version=v;let g=r.get(f);g&&e.remove(g),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Gb(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=u[p];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xb(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let E=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*M*4*f),w=new ds(S,x,M,f);w.type=ut,w.needsUpdate=!0;let b=_*4;for(let A=0;A<f;A++){let P=p[A],I=g[A],F=y[A],B=x*M*4*A;for(let N=0;N<P.count;N++){let k=N*b;d===!0&&(s.fromBufferAttribute(P,N),S[B+k+0]=s.x,S[B+k+1]=s.y,S[B+k+2]=s.z,S[B+k+3]=0),m===!0&&(s.fromBufferAttribute(I,N),S[B+k+4]=s.x,S[B+k+5]=s.y,S[B+k+6]=s.z,S[B+k+7]=0),v===!0&&(s.fromBufferAttribute(F,N),S[B+k+8]=s.x,S[B+k+9]=s.y,S[B+k+10]=s.z,S[B+k+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new te(x,M)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function qb(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Yb={[ba]:"LINEAR_TONE_MAPPING",[Ma]:"REINHARD_TONE_MAPPING",[Sa]:"CINEON_TONE_MAPPING",[Qs]:"ACES_FILMIC_TONE_MAPPING",[wa]:"AGX_TONE_MAPPING",[Ea]:"NEUTRAL_TONE_MAPPING",[Ta]:"CUSTOM_TONE_MAPPING"};function $b(n,e,t,i,s,r){let o=new Pt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Jn(e,t):void 0}),a=new Pt(e,t,{type:Et,depthBuffer:!1,stencilBuffer:!1}),l=new ft;l.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _t([0,2,0,0,2,0],2));let c=new Xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new yt(l,c),f=new _s(-1,1,1,-1,0,1),u=null,d=null,m=!1,v,p=null,g=[],y=!1;this.setSize=function(_,x){o.setSize(_,x),a.setSize(_,x);for(let M=0;M<g.length;M++){let S=g[M];S.setSize&&S.setSize(_,x)}},this.setEffects=function(_){g=_,y=g.length>0&&g[0].isRenderPass===!0;let x=o.width,M=o.height;for(let S=0;S<g.length;S++){let w=g[S];w.setSize&&w.setSize(x,M)}},this.begin=function(_,x){if(m||_.toneMapping===rn&&g.length===0)return!1;if(p=x,x!==null){let M=x.width,S=x.height;(o.width!==M||o.height!==S)&&this.setSize(M,S)}return y===!1&&_.setRenderTarget(o),v=_.toneMapping,_.toneMapping=rn,!0},this.hasRenderPass=function(){return y},this.end=function(_,x){_.toneMapping=v,m=!0;let M=o,S=a;for(let w=0;w<g.length;w++){let b=g[w];if(b.enabled!==!1&&(b.render(_,S,M,x),b.needsSwap!==!1)){let E=M;M=S,S=E}}if(u!==_.outputColorSpace||d!==_.toneMapping){u=_.outputColorSpace,d=_.toneMapping,c.defines={},xt.getTransfer(u)===Ct&&(c.defines.SRGB_TRANSFER="");let w=Yb[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(h,f),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Jm=new Wi,Kf=new Jn(1,1),jm=new ds,Qm=new ec,e0=new jo,Dm=[],Lm=[],Fm=new Float32Array(16),Nm=new Float32Array(9),Um=new Float32Array(4);function io(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Dm[s];if(r===void 0&&(r=new Float32Array(s),Dm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xi(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vi(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function du(n,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xi(t,e))return;n.uniform2fv(this.addr,e),vi(t,e)}}function Jb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xi(t,e))return;n.uniform3fv(this.addr,e),vi(t,e)}}function jb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xi(t,e))return;n.uniform4fv(this.addr,e),vi(t,e)}}function Qb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xi(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vi(t,e)}else{if(xi(t,i))return;Um.set(i),n.uniformMatrix2fv(this.addr,!1,Um),vi(t,i)}}function eM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xi(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vi(t,e)}else{if(xi(t,i))return;Nm.set(i),n.uniformMatrix3fv(this.addr,!1,Nm),vi(t,i)}}function tM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xi(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vi(t,e)}else{if(xi(t,i))return;Fm.set(i),n.uniformMatrix4fv(this.addr,!1,Fm),vi(t,i)}}function iM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xi(t,e))return;n.uniform2iv(this.addr,e),vi(t,e)}}function sM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xi(t,e))return;n.uniform3iv(this.addr,e),vi(t,e)}}function rM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xi(t,e))return;n.uniform4iv(this.addr,e),vi(t,e)}}function oM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xi(t,e))return;n.uniform2uiv(this.addr,e),vi(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xi(t,e))return;n.uniform3uiv(this.addr,e),vi(t,e)}}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xi(t,e))return;n.uniform4uiv(this.addr,e),vi(t,e)}}function uM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kf.compareFunction=t.isReversedDepthBuffer()?ou:ru,r=Kf):r=Jm,t.setTexture2D(e||r,s)}function hM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qm,s)}function fM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||e0,s)}function dM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jm,s)}function pM(n){switch(n){case 5126:return Zb;case 35664:return Kb;case 35665:return Jb;case 35666:return jb;case 35674:return Qb;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return iM;case 35667:case 35671:return nM;case 35668:case 35672:return sM;case 35669:case 35673:return rM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}function mM(n,e){n.uniform1fv(this.addr,e)}function gM(n,e){let t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function xM(n,e){let t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function vM(n,e){let t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function _M(n,e){let t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yM(n,e){let t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bM(n,e){let t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MM(n,e){n.uniform1iv(this.addr,e)}function SM(n,e){n.uniform2iv(this.addr,e)}function TM(n,e){n.uniform3iv(this.addr,e)}function wM(n,e){n.uniform4iv(this.addr,e)}function EM(n,e){n.uniform1uiv(this.addr,e)}function AM(n,e){n.uniform2uiv(this.addr,e)}function RM(n,e){n.uniform3uiv(this.addr,e)}function CM(n,e){n.uniform4uiv(this.addr,e)}function IM(n,e,t){let i=this.cache,s=e.length,r=du(t,s);xi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Kf:o=Jm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function PM(n,e,t){let i=this.cache,s=e.length,r=du(t,s);xi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qm,r[o])}function DM(n,e,t){let i=this.cache,s=e.length,r=du(t,s);xi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||e0,r[o])}function LM(n,e,t){let i=this.cache,s=e.length,r=du(t,s);xi(i,r)||(n.uniform1iv(this.addr,r),vi(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jm,r[o])}function FM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return vM;case 35674:return _M;case 35675:return yM;case 35676:return bM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return EM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}var Jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}},jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}},Qf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$f=/(\w+)(\])?(\[|\.)?/g;function Bm(n,e){n.seq.push(e),n.map[e.id]=e}function NM(n,e,t){let i=n.name,s=i.length;for($f.lastIndex=0;;){let r=$f.exec(i),o=$f.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bm(t,c===void 0?new Jf(a,n,e):new jf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Qf(a),Bm(t,f)),t=f}}}var eo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);NM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Om(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var UM=37297,BM=0;function OM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var zm=new it;function zM(n){xt._getMatrix(zm,xt.workingColorSpace,n);let e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Wo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function km(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+OM(n.getShaderSource(e),a)}else return r}function kM(n,e){let t=zM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var HM={[ba]:"Linear",[Ma]:"Reinhard",[Sa]:"Cineon",[Qs]:"ACESFilmic",[wa]:"AgX",[Ea]:"Neutral",[Ta]:"Custom"};function VM(n,e){let t=HM[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lu=new R;function GM(){xt.getLuminanceCoefficients(lu);let n=lu.x.toFixed(4),e=lu.y.toFixed(4),t=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function XM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oa(n){return n!==""}function Hm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(n){return n.replace(YM,ZM)}var $M=new Map;function ZM(n,e){let t=dt[e];if(t===void 0){let i=$M.get(e);if(i!==void 0)t=dt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ed(t)}var KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(n){return n.replace(KM,JM)}function JM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var jM={[js]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function QM(n){return jM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eS={[bs]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function tS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var iS={[er]:"ENVMAP_MODE_REFRACTION"};function nS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sS={[Af]:"ENVMAP_BLENDING_MULTIPLY",[om]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function rS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sS[n.combine]||"ENVMAP_BLENDING_NONE"}function oS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function aS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=QM(t),c=tS(t),h=nS(t),f=rS(t),u=oS(t),d=WM(t),m=XM(r),v=s.createProgram(),p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oa).join(`
`),g.length>0&&(g+=`
`)):(p=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),g=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?dt.tonemapping_pars_fragment:"",t.toneMapping!==rn?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),o=ed(o),o=Hm(o,t),o=Vm(o,t),a=ed(a),a=Hm(a,t),a=Vm(a,t),o=Gm(o),a=Gm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+p+o,x=y+g+a,M=Om(s,s.VERTEX_SHADER,_),S=Om(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(S)||"",N=I.trim(),k=F.trim(),Y=B.trim(),ie=!0,ue=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,S);else{let xe=km(s,M,"vertex"),me=km(s,S,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+xe+`
`+me)}else N!==""?Ze("WebGLProgram: Program Info Log:",N):(k===""||Y==="")&&(ue=!1);ue&&(P.diagnostics={runnable:ie,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(M),s.deleteShader(S),b=new eo(s,v),E=qM(s,v)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,UM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=S,this}var lS=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new id(e),t.set(e,i)),i}},id=class{constructor(e){this.id=lS++,this.code=e,this.usedTimes=0}};function cS(n){return n===dn||n===Fa||n===Na}function uS(n,e,t,i,s,r){let o=new Br,a=new td,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,E,A,P,I,F){let B=P.fog,N=I.geometry,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,Y=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ie=e.get(b.envMap||k,Y),ue=ie&&ie.mapping===Aa?ie.image.height:null,xe=d[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&Ze("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let me=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Me=me!==void 0?me.length:0,Je=0;N.morphAttributes.position!==void 0&&(Je=1),N.morphAttributes.normal!==void 0&&(Je=2),N.morphAttributes.color!==void 0&&(Je=3);let ht,$,U,X;if(xe){let ke=Hn[xe];ht=ke.vertexShader,$=ke.fragmentShader}else{ht=b.vertexShader,$=b.fragmentShader;let ke=a.getVertexShaderStage(b),L=a.getFragmentShaderStage(b);a.update(b,ke,L),U=ke.id,X=L.id}let H=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ge=I.isInstancedMesh===!0,de=I.isBatchedMesh===!0,Ae=!!b.map,Re=!!b.matcap,oe=!!ie,he=!!b.aoMap,fe=!!b.lightMap,Te=!!b.bumpMap&&b.wireframe===!1,G=!!b.normalMap,Ue=!!b.displacementMap,Fe=!!b.emissiveMap,qe=!!b.metalnessMap,Qe=!!b.roughnessMap,O=b.anisotropy>0,Mt=b.clearcoat>0,ot=b.dispersion>0,D=b.iridescence>0,T=b.sheen>0,W=b.transmission>0,q=O&&!!b.anisotropyMap,j=Mt&&!!b.clearcoatMap,ve=Mt&&!!b.clearcoatNormalMap,_e=Mt&&!!b.clearcoatRoughnessMap,Q=D&&!!b.iridescenceMap,se=D&&!!b.iridescenceThicknessMap,we=T&&!!b.sheenColorMap,Ge=T&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,ye=!!b.specularColorMap,ze=!!b.specularIntensityMap,Ke=W&&!!b.transmissionMap,nt=W&&!!b.thicknessMap,z=!!b.gradientMap,be=!!b.alphaMap,re=b.alphaTest>0,Se=!!b.alphaHash,Ce=!!b.extensions,le=rn;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(le=n.toneMapping);let Ve={shaderID:xe,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:$,defines:b.defines,customVertexShaderID:U,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:de,batchingColor:de&&I._colorsTexture!==null,instancing:ge,instancingColor:ge&&I.instanceColor!==null,instancingMorph:ge&&I.morphTexture!==null,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:Re,envMap:oe,envMapMode:oe&&ie.mapping,envMapCubeUVHeight:ue,aoMap:he,lightMap:fe,bumpMap:Te,normalMap:G,displacementMap:Ue,emissiveMap:Fe,normalMapObjectSpace:G&&b.normalMapType===um,normalMapTangentSpace:G&&b.normalMapType===su,packedNormalMap:G&&b.normalMapType===su&&cS(b.normalMap.format),metalnessMap:qe,roughnessMap:Qe,anisotropy:O,anisotropyMap:q,clearcoat:Mt,clearcoatMap:j,clearcoatNormalMap:ve,clearcoatRoughnessMap:_e,dispersion:ot,iridescence:D,iridescenceMap:Q,iridescenceThicknessMap:se,sheen:T,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Ee,specularColorMap:ye,specularIntensityMap:ze,transmission:W,transmissionMap:Ke,thicknessMap:nt,gradientMap:z,opaque:b.transparent===!1&&b.blending===bn&&b.alphaToCoverage===!1,alphaMap:be,alphaTest:re,alphaHash:Se,combine:b.combine,mapUv:Ae&&m(b.map.channel),aoMapUv:he&&m(b.aoMap.channel),lightMapUv:fe&&m(b.lightMap.channel),bumpMapUv:Te&&m(b.bumpMap.channel),normalMapUv:G&&m(b.normalMap.channel),displacementMapUv:Ue&&m(b.displacementMap.channel),emissiveMapUv:Fe&&m(b.emissiveMap.channel),metalnessMapUv:qe&&m(b.metalnessMap.channel),roughnessMapUv:Qe&&m(b.roughnessMap.channel),anisotropyMapUv:q&&m(b.anisotropyMap.channel),clearcoatMapUv:j&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(b.sheenRoughnessMap.channel),specularMapUv:Ee&&m(b.specularMap.channel),specularColorMapUv:ye&&m(b.specularColorMap.channel),specularIntensityMapUv:ze&&m(b.specularIntensityMap.channel),transmissionMapUv:Ke&&m(b.transmissionMap.channel),thicknessMapUv:nt&&m(b.thicknessMap.channel),alphaMapUv:be&&m(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(G||O),vertexNormals:!!N.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Ae||be),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||N.attributes.normal===void 0&&G===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Ct,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kt,flipSided:b.side===mi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)E.push(A),E.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(g(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function g(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function _(b){let E=d[b.type],A;if(E){let P=Hn[E];A=Rn.clone(P.uniforms)}else A=b.uniforms;return A}function x(b,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new aS(n,E,b,s),c.push(A),h.set(E,A)),A}function M(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function S(b){a.remove(b)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function hS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,v,p,g){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},n[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function l(u,d,m,v,p,g){let y=a(u,d,m,v,p,g);m.transmission>0?i.push(y):m.transparent===!0?s.push(y):t.push(y)}function c(u,d,m,v,p,g){let y=a(u,d,m,v,p,g);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d,m){t.length>1&&t.sort(u||fS),i.length>1&&i.sort(d||Xm),s.length>1&&s.sort(d||Xm),m&&(t.reverse(),i.reverse(),s.reverse())}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function dS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new qm,n.set(i,[o])):s>=r.length?(o=new qm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function mS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var gS=0;function xS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n){let e=new pS,t=mS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new He,o=new He;function a(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,y=0,_=0,x=0,M=0,S=0,w=0;c.sort(xS);for(let E=0,A=c.length;E<A;E++){let P=c[E],I=P.color,F=P.intensity,B=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===dn?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*F,f+=I.g*F,u+=I.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],F);w++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,ie=t.get(P);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[v]=k;let Y=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,Y.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[v]=Y.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=N,x++}v++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(I).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=k,p++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let Y=P.shadow,ie=t.get(P);ie.shadowIntensity=Y.intensity,ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,ie.shadowCameraNear=Y.camera.near,ie.shadowCameraFar=Y.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[g]=k,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let b=i.hash;(b.directionalLength!==d||b.pointLength!==m||b.spotLength!==v||b.rectAreaLength!==p||b.hemiLength!==g||b.numDirectionalShadows!==y||b.numPointShadows!==_||b.numSpotShadows!==x||b.numSpotMaps!==M||b.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,b.directionalLength=d,b.pointLength=m,b.spotLength=v,b.rectAreaLength=p,b.hemiLength=g,b.numDirectionalShadows=y,b.numPointShadows=_,b.numSpotShadows=x,b.numSpotMaps=M,b.numLightProbes=w,i.version=gS++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,p=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let _=c[g];if(_.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(_.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(_.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Ym(n){let e=new vS(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _S(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ym(n),e.set(s,[a])):r>=o.length?(a=new Ym(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MS=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],SS=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],$m=new He,Ba=new R,Zf=new R;function TS(n,e,t){let i=new kr,s=new te,r=new te,o=new St,a=new cc,l=new uc,c={},h=t.maxTextureSize,f={[Ui]:mi,[mi]:Ui,[Kt]:Kt},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:yS,fragmentShader:bS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new ft;m.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let g=this.type;this.render=function(S,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Hp&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);let E=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=g!==this.type;F&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=S.length;B<N;B++){let k=S[B],Y=k.shadow;if(Y===void 0){Ze("WebGLShadowMap:",k,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ie=Y.getFrameExtents();s.multiply(ie),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,Y.mapSize.y=r.y));let ue=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ue,Y.map===null||F===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Zr){if(k.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Pt(s.x,s.y,{format:dn,type:Et,minFilter:It,magFilter:It,generateMipmaps:!1}),Y.map.texture.name=k.name+".shadowMap",Y.map.depthTexture=new Jn(s.x,s.y,ut),Y.map.depthTexture.name=k.name+".shadowMapDepth",Y.map.depthTexture.format=Fn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=tt,Y.map.depthTexture.magFilter=tt}else k.isPointLight?(Y.map=new cu(s.x),Y.map.depthTexture=new nc(s.x,Ti)):(Y.map=new Pt(s.x,s.y),Y.map.depthTexture=new Jn(s.x,s.y,Ti)),Y.map.depthTexture.name=k.name+".shadowMap",Y.map.depthTexture.format=Fn,this.type===js?(Y.map.depthTexture.compareFunction=ue?ou:ru,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=tt,Y.map.depthTexture.magFilter=tt);Y.camera.updateProjectionMatrix()}let xe=Y.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<xe;me++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,me),n.clear();else{me===0&&(n.setRenderTarget(Y.map),n.clear());let Me=Y.getViewport(me);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(o)}if(k.isPointLight){let Me=Y.camera,Je=Y.matrix,ht=k.distance||Me.far;ht!==Me.far&&(Me.far=ht,Me.updateProjectionMatrix()),Ba.setFromMatrixPosition(k.matrixWorld),Me.position.copy(Ba),Zf.copy(Me.position),Zf.add(MS[me]),Me.up.copy(SS[me]),Me.lookAt(Zf),Me.updateMatrixWorld(),Je.makeTranslation(-Ba.x,-Ba.y,-Ba.z),$m.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),Y._frustum.setFromProjectionMatrix($m,Me.coordinateSystem,Me.reversedDepth)}else Y.updateMatrices(k);i=Y.getFrustum(),x(w,b,Y.camera,k,this.type)}Y.isPointLightShadow!==!0&&this.type===Zr&&y(Y,b),Y.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(E,A,P)};function y(S,w){let b=e.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pt(s.x,s.y,{format:dn,type:Et})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,b,u,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,b,d,v,null)}function _(S,w,b,E){let A=null,P=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=b.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=A.uuid,F=w.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let N=B[F];N===void 0&&(N=A.clone(),B[F]=N,w.addEventListener("dispose",M)),A=N}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Zr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=n.properties.get(A);I.light=b}return A}function x(S,w,b,E,A){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Zr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let F=e.update(S),B=S.material;if(Array.isArray(B)){let N=F.groups;for(let k=0,Y=N.length;k<Y;k++){let ie=N[k],ue=B[ie.materialIndex];if(ue&&ue.visible){let xe=_(S,ue,E,A);S.onBeforeShadow(n,S,w,b,F,xe,ie),n.renderBufferDirect(b,null,F,xe,S,ie),S.onAfterShadow(n,S,w,b,F,xe,ie)}}}else if(B.visible){let N=_(S,B,E,A);S.onBeforeShadow(n,S,w,b,F,N,null),n.renderBufferDirect(b,null,F,N,S,null),S.onAfterShadow(n,S,w,b,F,N,null)}}let I=S.children;for(let F=0,B=I.length;F<B;F++)x(I[F],w,b,E,A)}function M(S){S.target.removeEventListener("dispose",M);for(let b in c){let E=c[b],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function wS(n,e){function t(){let z=!1,be=new St,re=null,Se=new St(0,0,0,0);return{setMask:function(Ce){re!==Ce&&!z&&(n.colorMask(Ce,Ce,Ce,Ce),re=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,le,Ve,ke,L){L===!0&&(Ce*=ke,le*=ke,Ve*=ke),be.set(Ce,le,Ve,ke),Se.equals(be)===!1&&(n.clearColor(Ce,le,Ve,ke),Se.copy(be))},reset:function(){z=!1,re=null,Se.set(-1,0,0,0)}}}function i(){let z=!1,be=!1,re=null,Se=null,Ce=null;return{setReversed:function(le){if(be!==le){let Ve=e.get("EXT_clip_control");le?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),be=le;let ke=Ce;Ce=null,this.setClear(ke)}},getReversed:function(){return be},setTest:function(le){le?H(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(le){re!==le&&!z&&(n.depthMask(le),re=le)},setFunc:function(le){if(be&&(le=ym[le]),Se!==le){switch(le){case Gl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case Xl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case ql:n.depthFunc(n.EQUAL);break;case Yl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=le}},setLocked:function(le){z=le},setClear:function(le){Ce!==le&&(Ce=le,be&&(le=1-le),n.clearDepth(le))},reset:function(){z=!1,re=null,Se=null,Ce=null,be=!1}}}function s(){let z=!1,be=null,re=null,Se=null,Ce=null,le=null,Ve=null,ke=null,L=null;return{setTest:function(ee){z||(ee?H(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(ee){be!==ee&&!z&&(n.stencilMask(ee),be=ee)},setFunc:function(ee,pe,Xe){(re!==ee||Se!==pe||Ce!==Xe)&&(n.stencilFunc(ee,pe,Xe),re=ee,Se=pe,Ce=Xe)},setOp:function(ee,pe,Xe){(le!==ee||Ve!==pe||ke!==Xe)&&(n.stencilOp(ee,pe,Xe),le=ee,Ve=pe,ke=Xe)},setLocked:function(ee){z=ee},setClear:function(ee){L!==ee&&(n.clearStencil(ee),L=ee)},reset:function(){z=!1,be=null,re=null,Se=null,Ce=null,le=null,Ve=null,ke=null,L=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],v=null,p=!1,g=null,y=null,_=null,x=null,M=null,S=null,w=null,b=new Le(0,0,0),E=0,A=!1,P=null,I=null,F=null,B=null,N=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ie=0,ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Y=ie>=1):ue.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Y=ie>=2);let xe=null,me={},Me=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),ht=new St().fromArray(Me),$=new St().fromArray(Je);function U(z,be,re,Se){let Ce=new Uint8Array(4),le=n.createTexture();n.bindTexture(z,le),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<re;Ve++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(be+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return le}let X={};X[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(qs),Te(!1),G(Tf),H(n.CULL_FACE),he(li);function H(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function ne(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function ge(z,be){return u[z]!==be?(n.bindFramebuffer(z,be),u[z]=be,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function de(z,be){let re=m,Se=!1;if(z){re=d.get(be),re===void 0&&(re=[],d.set(be,re));let Ce=z.textures;if(re.length!==Ce.length||re[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ve=Ce.length;le<Ve;le++)re[le]=n.COLOR_ATTACHMENT0+le;re.length=Ce.length,Se=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Se=!0);Se&&n.drawBuffers(re)}function Ae(z){return v!==z?(n.useProgram(z),v=z,!0):!1}let Re={[hs]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};Re[Xp]=n.MIN,Re[qp]=n.MAX;let oe={[Yp]:n.ZERO,[$p]:n.ONE,[Zp]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[Jp]:n.DST_ALPHA,[Kp]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[jp]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[nm]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function he(z,be,re,Se,Ce,le,Ve,ke,L,ee){if(z===li){p===!0&&(ne(n.BLEND),p=!1);return}if(p===!1&&(H(n.BLEND),p=!0),z!==Vp){if(z!==g||ee!==A){if((y!==hs||M!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,M=hs),ee)switch(z){case bn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFunc(n.ONE,n.ONE);break;case wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ef:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",z);break}else switch(z){case bn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wf:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ef:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",z);break}_=null,x=null,S=null,w=null,b.set(0,0,0),E=0,g=z,A=ee}return}Ce=Ce||be,le=le||re,Ve=Ve||Se,(be!==y||Ce!==M)&&(n.blendEquationSeparate(Re[be],Re[Ce]),y=be,M=Ce),(re!==_||Se!==x||le!==S||Ve!==w)&&(n.blendFuncSeparate(oe[re],oe[Se],oe[le],oe[Ve]),_=re,x=Se,S=le,w=Ve),(ke.equals(b)===!1||L!==E)&&(n.blendColor(ke.r,ke.g,ke.b,L),b.copy(ke),E=L),g=z,A=!1}function fe(z,be){z.side===Kt?ne(n.CULL_FACE):H(n.CULL_FACE);let re=z.side===mi;be&&(re=!re),Te(re),z.blending===bn&&z.transparent===!1?he(li):he(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Se=z.stencilWrite;a.setTest(Se),Se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(z){P!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),P=z)}function G(z){z!==zp?(H(n.CULL_FACE),z!==I&&(z===Tf?n.cullFace(n.BACK):z===kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),I=z}function Ue(z){z!==F&&(Y&&n.lineWidth(z),F=z)}function Fe(z,be,re){z?(H(n.POLYGON_OFFSET_FILL),(B!==be||N!==re)&&(B=be,N=re,o.getReversed()&&(be=-be),n.polygonOffset(be,re))):ne(n.POLYGON_OFFSET_FILL)}function qe(z){z?H(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function Qe(z){z===void 0&&(z=n.TEXTURE0+k-1),xe!==z&&(n.activeTexture(z),xe=z)}function O(z,be,re){re===void 0&&(xe===null?re=n.TEXTURE0+k-1:re=xe);let Se=me[re];Se===void 0&&(Se={type:void 0,texture:void 0},me[re]=Se),(Se.type!==z||Se.texture!==be)&&(xe!==re&&(n.activeTexture(re),xe=re),n.bindTexture(z,be||X[z]),Se.type=z,Se.texture=be)}function Mt(){let z=me[xe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function T(){try{n.texSubImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function W(){try{n.texSubImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function ve(){try{n.texStorage2D(...arguments)}catch(z){je("WebGLState:",z)}}function _e(){try{n.texStorage3D(...arguments)}catch(z){je("WebGLState:",z)}}function Q(){try{n.texImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function se(){try{n.texImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function we(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function Ge(z,be){f[z]!==be&&(n.pixelStorei(z,be),f[z]=be)}function Ee(z){ht.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ht.copy(z))}function ye(z){$.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function ze(z,be){let re=c.get(be);re===void 0&&(re=new WeakMap,c.set(be,re));let Se=re.get(z);Se===void 0&&(Se=n.getUniformBlockIndex(be,z.name),re.set(z,Se))}function Ke(z,be){let Se=c.get(be).get(z);l.get(be)!==Se&&(n.uniformBlockBinding(be,Se,z.__bindingPointIndex),l.set(be,Se))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},xe=null,me={},u={},d=new WeakMap,m=[],v=null,p=!1,g=null,y=null,_=null,x=null,M=null,S=null,w=null,b=new Le(0,0,0),E=0,A=!1,P=null,I=null,F=null,B=null,N=null,ht.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:ne,bindFramebuffer:ge,drawBuffers:de,useProgram:Ae,setBlending:he,setMaterial:fe,setFlipSided:Te,setCullFace:G,setLineWidth:Ue,setPolygonOffset:Fe,setScissorTest:qe,activeTexture:Qe,bindTexture:O,unbindTexture:Mt,compressedTexImage2D:ot,compressedTexImage3D:D,texImage2D:Q,texImage3D:se,pixelStorei:Ge,getParameter:we,updateUBOMapping:ze,uniformBlockBinding:Ke,texStorage2D:ve,texStorage3D:_e,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:Ee,viewport:ye,reset:nt}}function ES(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,T){return m?new OffscreenCanvas(D,T):Xo("canvas")}function p(D,T,W){let q=1,j=ot(D);if((j.width>W||j.height>W)&&(q=W/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ve=Math.floor(q*j.width),_e=Math.floor(q*j.height);u===void 0&&(u=v(ve,_e));let Q=T?v(ve,_e):u;return Q.width=ve,Q.height=_e,Q.getContext("2d").drawImage(D,0,0,ve,_e),Ze("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ve+"x"+_e+")."),Q}else return"data"in D&&Ze("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function g(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(D,T,W,q,j,ve=!1){if(D!==null){if(n[D]!==void 0)return n[D];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e;q&&(_e=e.get("EXT_texture_norm16"),_e||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8),W===n.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),W===n.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),T===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8),W===n.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),W===n.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),W===n.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),T===n.RGBA){let se=ve?Wo:xt.getTransfer(j);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=se===Ct?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),W===n.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(D,T){let W;return D?T===null||T===Ti||T===Jr?W=n.DEPTH24_STENCIL8:T===ut?W=n.DEPTH32F_STENCIL8:T===Ss&&(W=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ti||T===Jr?W=n.DEPTH_COMPONENT24:T===ut?W=n.DEPTH_COMPONENT32F:T===Ss&&(W=n.DEPTH_COMPONENT16),W}function S(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==tt&&D.minFilter!==It?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function w(D){let T=D.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function b(D){let T=D.target;T.removeEventListener("dispose",b),P(T)}function E(D){let T=i.get(D);if(T.__webglInit===void 0)return;let W=D.source,q=d.get(W);if(q){let j=q[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(D),Object.keys(q).length===0&&d.delete(W)}i.remove(D)}function A(D){let T=i.get(D);n.deleteTexture(T.__webglTexture);let W=D.source,q=d.get(W);delete q[T.__cacheKey],o.memory.textures--}function P(D){let T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let j=0;j<T.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(T.__webglFramebuffer[q][j]);else n.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)n.deleteFramebuffer(T.__webglFramebuffer[q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=D.textures;for(let q=0,j=W.length;q<j;q++){let ve=i.get(W[q]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(W[q])}i.remove(D)}let I=0;function F(){I=0}function B(){return I}function N(D){I=D}function k(){let D=I;return D>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),I+=1,D}function Y(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ie(D,T){let W=i.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){let q=D.image;if(q===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,D,T);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function ue(D,T){let W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,T);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function xe(D,T){let W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function me(D,T){let W=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ge(W,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let Me={[Bi]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},Je={[tt]:n.NEAREST,[lm]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[wc]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},ht={[hm]:n.NEVER,[gm]:n.ALWAYS,[fm]:n.LESS,[ru]:n.LEQUAL,[dm]:n.EQUAL,[ou]:n.GEQUAL,[pm]:n.GREATER,[mm]:n.NOTEQUAL};function $(D,T){if(T.type===ut&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===It||T.magFilter===wc||T.magFilter===Ra||T.magFilter===Ms||T.minFilter===It||T.minFilter===wc||T.minFilter===Ra||T.minFilter===Ms)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Me[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Me[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Me[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Je[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Je[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ht[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tt||T.minFilter!==Ra&&T.minFilter!==Ms||T.type===ut&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function U(D,T){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",w));let q=T.source,j=d.get(q);j===void 0&&(j={},d.set(q,j));let ve=Y(T);if(ve!==D.__cacheKey){j[ve]===void 0&&(j[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),j[ve].usedTimes++;let _e=j[D.__cacheKey];_e!==void 0&&(j[D.__cacheKey].usedTimes--,_e.usedTimes===0&&A(T)),D.__cacheKey=ve,D.__webglTexture=j[ve].texture}return W}function X(D,T,W){return Math.floor(Math.floor(D/W)/T)}function H(D,T,W,q){let ve=D.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,q,T.data);else{ve.sort((Ge,Ee)=>Ge.start-Ee.start);let _e=0;for(let Ge=1;Ge<ve.length;Ge++){let Ee=ve[_e],ye=ve[Ge],ze=Ee.start+Ee.count,Ke=X(ye.start,T.width,4),nt=X(Ee.start,T.width,4);ye.start<=ze+1&&Ke===nt&&X(ye.start+ye.count-1,T.width,4)===Ke?Ee.count=Math.max(Ee.count,ye.start+ye.count-Ee.start):(++_e,ve[_e]=ye)}ve.length=_e+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Ge=0,Ee=ve.length;Ge<Ee;Ge++){let ye=ve[Ge],ze=Math.floor(ye.start/4),Ke=Math.ceil(ye.count/4),nt=ze%T.width,z=Math.floor(ze/T.width),be=Ke,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,nt,z,be,re,W,q,T.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function ne(D,T,W){let q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=n.TEXTURE_3D);let j=U(D,T),ve=T.source;t.bindTexture(q,D.__webglTexture,n.TEXTURE0+W);let _e=i.get(ve);if(ve.version!==_e.__version||j===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=xt.getPrimaries(xt.workingColorSpace),Se=T.colorSpace===Qn?null:xt.getPrimaries(T.colorSpace),Ce=T.colorSpace===Qn||re===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let se=p(T.image,!1,s.maxTextureSize);se=Mt(T,se);let we=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type),Ee=x(T.internalFormat,we,Ge,T.normalized,T.colorSpace,T.isVideoTexture);$(q,T);let ye,ze=T.mipmaps,Ke=T.isVideoTexture!==!0,nt=_e.__version===void 0||j===!0,z=ve.dataReady,be=S(T,se);if(T.isDepthTexture)Ee=M(T.format===ws,T.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,we,Ge,null));else if(T.isDataTexture)if(ze.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,be,Ee,ze[0].width,ze[0].height);for(let re=0,Se=ze.length;re<Se;re++)ye=ze[re],Ke?z&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,we,Ge,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,we,Ge,ye.data);T.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,be,Ee,se.width,se.height),z&&H(T,se,we,Ge)):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,we,Ge,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ee,ze[0].width,ze[0].height,se.depth);for(let re=0,Se=ze.length;re<Se;re++)if(ye=ze[re],T.format!==rt)if(we!==null)if(Ke){if(z)if(T.layerUpdates.size>0){let Ce=Gf(ye.width,ye.height,T.format,T.type);for(let le of T.layerUpdates){let Ve=ye.data.subarray(le*Ce/ye.data.BYTES_PER_ELEMENT,(le+1)*Ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,le,ye.width,ye.height,1,we,Ve)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,se.depth,we,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,se.depth,0,ye.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,se.depth,we,Ge,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,se.depth,0,we,Ge,ye.data)}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,be,Ee,ze[0].width,ze[0].height);for(let re=0,Se=ze.length;re<Se;re++)ye=ze[re],T.format!==rt?we!==null?Ke?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,ye.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?z&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,we,Ge,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,we,Ge,ye.data)}else if(T.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ee,se.width,se.height,se.depth),z)if(T.layerUpdates.size>0){let re=Gf(se.width,se.height,T.format,T.type);for(let Se of T.layerUpdates){let Ce=se.data.subarray(Se*re/se.data.BYTES_PER_ELEMENT,(Se+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,se.width,se.height,1,we,Ge,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,Ge,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,we,Ge,se.data);else if(T.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,be,Ee,se.width,se.height,se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,Ge,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,we,Ge,se.data);else if(T.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,be,Ee,se.width,se.height);else{let re=se.width,Se=se.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ee,re,Se,0,we,Ge,null),re>>=1,Se>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),se.parentNode!==re){re.appendChild(se),f.add(T),re.onpaint=Se=>{let Ce=Se.changedElements;for(let le of f)Ce.includes(le.image)&&(le.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ce=n.RGBA,le=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,le,Ve,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ke&&nt){let re=ot(ze[0]);t.texStorage2D(n.TEXTURE_2D,be,Ee,re.width,re.height)}for(let re=0,Se=ze.length;re<Se;re++)ye=ze[re],Ke?z&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,we,Ge,ye):t.texImage2D(n.TEXTURE_2D,re,Ee,we,Ge,ye);T.generateMipmaps=!1}else if(Ke){if(nt){let re=ot(se);t.texStorage2D(n.TEXTURE_2D,be,Ee,re.width,re.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ge,se)}else t.texImage2D(n.TEXTURE_2D,0,Ee,we,Ge,se);g(T)&&y(q),_e.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ge(D,T,W){if(T.image.length!==6)return;let q=U(D,T),j=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+W);let ve=i.get(j);if(j.version!==ve.__version||q===!0){t.activeTexture(n.TEXTURE0+W);let _e=xt.getPrimaries(xt.workingColorSpace),Q=T.colorSpace===Qn?null:xt.getPrimaries(T.colorSpace),se=T.colorSpace===Qn||_e===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,Ee=[];for(let le=0;le<6;le++)!we&&!Ge?Ee[le]=p(T.image[le],!0,s.maxCubemapSize):Ee[le]=Ge?T.image[le].image:T.image[le],Ee[le]=Mt(T,Ee[le]);let ye=Ee[0],ze=r.convert(T.format,T.colorSpace),Ke=r.convert(T.type),nt=x(T.internalFormat,ze,Ke,T.normalized,T.colorSpace),z=T.isVideoTexture!==!0,be=ve.__version===void 0||q===!0,re=j.dataReady,Se=S(T,ye);$(n.TEXTURE_CUBE_MAP,T);let Ce;if(we){z&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,nt,ye.width,ye.height);for(let le=0;le<6;le++){Ce=Ee[le].mipmaps;for(let Ve=0;Ve<Ce.length;Ve++){let ke=Ce[Ve];T.format!==rt?ze!==null?z?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,nt,ke.width,ke.height,0,ke.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,ke.width,ke.height,ze,Ke,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,nt,ke.width,ke.height,0,ze,Ke,ke.data)}}}else{if(Ce=T.mipmaps,z&&be){Ce.length>0&&Se++;let le=ot(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,nt,le.width,le.height)}for(let le=0;le<6;le++)if(Ge){z?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ee[le].width,Ee[le].height,ze,Ke,Ee[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,Ee[le].width,Ee[le].height,0,ze,Ke,Ee[le].data);for(let Ve=0;Ve<Ce.length;Ve++){let L=Ce[Ve].image[le].image;z?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,L.width,L.height,ze,Ke,L.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,nt,L.width,L.height,0,ze,Ke,L.data)}}else{z?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,Ke,Ee[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,ze,Ke,Ee[le]);for(let Ve=0;Ve<Ce.length;Ve++){let ke=Ce[Ve];z?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,ze,Ke,ke.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,nt,ze,Ke,ke.image[le])}}}g(T)&&y(n.TEXTURE_CUBE_MAP),ve.__version=j.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,W,q,j,ve){let _e=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),se=x(W.internalFormat,_e,Q,W.normalized,W.colorSpace),we=i.get(T),Ge=i.get(W);if(Ge.__renderTarget=T,!we.__hasExternalTextures){let Ee=Math.max(1,T.width>>ve),ye=Math.max(1,T.height>>ve);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ve,se,Ee,ye,T.depth,0,_e,Q,null):t.texImage2D(j,ve,se,Ee,ye,0,_e,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Qe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,Ge.__webglTexture,0,qe(T)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,Ge.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(D,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){let q=T.depthTexture,j=q&&q.isDepthTexture?q.type:null,ve=M(T.stencilBuffer,j),_e=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(T),ve,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(T),ve,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,D)}else{let q=T.textures;for(let j=0;j<q.length;j++){let ve=q[j],_e=r.convert(ve.format,ve.colorSpace),Q=r.convert(ve.type),se=x(ve.internalFormat,_e,Q,ve.normalized,ve.colorSpace);Qe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(T),se,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(T),se,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,se,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(D,T,W){let q=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(T.depthTexture);if(j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),$(n.TEXTURE_CUBE_MAP,T.depthTexture);let we=r.convert(T.depthTexture.format),Ge=r.convert(T.depthTexture.type),Ee;T.depthTexture.format===Fn?Ee=n.DEPTH_COMPONENT24:T.depthTexture.format===ws&&(Ee=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ee,T.width,T.height,0,we,Ge,null)}}else ie(T.depthTexture,0);let ve=j.__webglTexture,_e=qe(T),Q=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,se=T.depthTexture.format===ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Fn)Qe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,ve,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,ve,0);else if(T.depthTexture.format===ws)Qe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,ve,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(D){let T=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let q=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=q}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)Re(T.__webglFramebuffer[q],D,q);else{let q=D.texture.mipmaps;q&&q.length>0?Re(T.__webglFramebuffer[0],D,0):Re(T.__webglFramebuffer,D,0)}else if(W){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=n.createRenderbuffer(),Ae(T.__webglDepthbuffer[q],D,!1);else{let j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ve)}}else{let q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ae(T.__webglDepthbuffer,D,!1);else{let j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(D,T,W){let q=i.get(D);T!==void 0&&de(q.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&oe(D)}function fe(D){let T=D.texture,W=i.get(D),q=i.get(T);D.addEventListener("dispose",b);let j=D.textures,ve=D.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=T.version,o.memory.textures++),ve){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let se=0;se<T.mipmaps.length;se++)W.__webglFramebuffer[Q][se]=n.createFramebuffer()}else W.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)W.__webglFramebuffer[Q]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(_e)for(let Q=0,se=j.length;Q<se;Q++){let we=i.get(j[Q]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Qe(D)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let se=j[Q];W.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let we=r.convert(se.format,se.colorSpace),Ge=r.convert(se.type),Ee=x(se.internalFormat,we,Ge,se.normalized,se.colorSpace,D.isXRRenderTarget===!0),ye=qe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ee,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$(n.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)de(W.__webglFramebuffer[Q][se],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se);else de(W.__webglFramebuffer[Q],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(T)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Q=0,se=j.length;Q<se;Q++){let we=j[Q],Ge=i.get(we),Ee=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ge.__webglTexture),$(Ee,we),de(W.__webglFramebuffer,D,we,n.COLOR_ATTACHMENT0+Q,Ee,0),g(we)&&y(Ee)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),$(Q,T),T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)de(W.__webglFramebuffer[se],D,T,n.COLOR_ATTACHMENT0,Q,se);else de(W.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,Q,0);g(T)&&y(Q),t.unbindTexture()}D.depthBuffer&&oe(D)}function Te(D){let T=D.textures;for(let W=0,q=T.length;W<q;W++){let j=T[W];if(g(j)){let ve=_(D),_e=i.get(j).__webglTexture;t.bindTexture(ve,_e),y(ve),t.unbindTexture()}}}let G=[],Ue=[];function Fe(D){if(D.samples>0){if(Qe(D)===!1){let T=D.textures,W=D.width,q=D.height,j=n.COLOR_BUFFER_BIT,ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(D),Q=T.length>1;if(Q)for(let we=0;we<T.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let se=D.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<T.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);let Ge=i.get(T[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,W,q,0,0,W,q,j,n.NEAREST),l===!0&&(G.length=0,Ue.length=0,G.push(n.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(G.push(ve),Ue.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let we=0;we<T.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);let Ge=i.get(T[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function qe(D){return Math.min(s.maxSamples,D.samples)}function Qe(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(D){let T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Mt(D,T){let W=D.colorSpace,q=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Go&&W!==Qn&&(xt.getTransfer(W)===Ct?(q!==rt||j!==gi)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",W)),T}function ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=ie,this.setTexture2DArray=ue,this.setTexture3D=xe,this.setTextureCube=me,this.rebindTextures=he,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AS(n,e){function t(i,s=Qn){let r,o=xt.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kr)return n.BYTE;if(i===Ca)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===Ts)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===ut)return n.FLOAT;if(i===Et)return n.HALF_FLOAT;if(i===Df)return n.ALPHA;if(i===Lf)return n.RGB;if(i===rt)return n.RGBA;if(i===Fn)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===An)return n.RED;if(i===jr)return n.RED_INTEGER;if(i===dn)return n.RG;if(i===Es)return n.RG_INTEGER;if(i===As)return n.RGBA_INTEGER;if(i===Ia||i===Pa||i===Da||i===La)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Ic||i===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dc||i===Lc||i===Fc||i===Nc||i===Uc||i===Fa||i===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dc||i===Lc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nc)return r.COMPRESSED_R11_EAC;if(i===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return r.COMPRESSED_RG11_EAC;if(i===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Kc||i===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tu||i===iu||i===Na||i===nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Tt({vertexShader:RS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends Mn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,v=typeof XRWebGLBinding<"u",p=new nd,g={},y=t.getContextAttributes(),_=null,x=null,M=[],S=[],w=new te,b=null,E=new ai;E.viewport=new St;let A=new ai;A.viewport=new St;let P=[E,A],I=new Sc,F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=M[U];return X===void 0&&(X=new Or,M[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=M[U];return X===void 0&&(X=new Or,M[U]=X),X.getGripSpace()},this.getHand=function(U){let X=M[U];return X===void 0&&(X=new Or,M[U]=X),X.getHandSpace()};function N(U){let X=S.indexOf(U.inputSource);if(X===-1)return;let H=M[X];H!==void 0&&(H.update(U.inputSource,U.frame,c||o),H.dispatchEvent({type:U.type,data:U.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let U=0;U<M.length;U++){let X=S[U];X!==null&&(S[U]=null,M[U].disconnect(X))}F=null,B=null,p.reset();for(let U in g)delete g[U];e.setRenderTarget(_),d=null,u=null,f=null,s=null,x=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,ne=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=y.stencil?ws:Fn,ne=y.stencil?Jr:Ti);let de={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(de),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Pt(u.textureWidth,u.textureHeight,{format:rt,type:gi,depthTexture:new Jn(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let H={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Pt(d.framebufferWidth,d.framebufferHeight,{format:rt,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(U){for(let X=0;X<U.removed.length;X++){let H=U.removed[X],ne=S.indexOf(H);ne>=0&&(S[ne]=null,M[ne].disconnect(H))}for(let X=0;X<U.added.length;X++){let H=U.added[X],ne=S.indexOf(H);if(ne===-1){for(let de=0;de<M.length;de++)if(de>=S.length){S.push(H),ne=de;break}else if(S[de]===null){S[de]=H,ne=de;break}if(ne===-1)break}let ge=M[ne];ge&&ge.connect(H)}}let ie=new R,ue=new R;function xe(U,X,H){ie.setFromMatrixPosition(X.matrixWorld),ue.setFromMatrixPosition(H.matrixWorld);let ne=ie.distanceTo(ue),ge=X.projectionMatrix.elements,de=H.projectionMatrix.elements,Ae=ge[14]/(ge[10]-1),Re=ge[14]/(ge[10]+1),oe=(ge[9]+1)/ge[5],he=(ge[9]-1)/ge[5],fe=(ge[8]-1)/ge[0],Te=(de[8]+1)/de[0],G=Ae*fe,Ue=Ae*Te,Fe=ne/(-fe+Te),qe=Fe*-fe;if(X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(qe),U.translateZ(Fe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ge[10]===-1)U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Qe=Ae+Fe,O=Re+Fe,Mt=G-qe,ot=Ue+(ne-qe),D=oe*Re/O*Qe,T=he*Re/O*Qe;U.projectionMatrix.makePerspective(Mt,ot,D,T,Qe,O),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function me(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let X=U.near,H=U.far;p.texture!==null&&(p.depthNear>0&&(X=p.depthNear),p.depthFar>0&&(H=p.depthFar)),I.near=A.near=E.near=X,I.far=A.far=E.far=H,(F!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,B=I.far),I.layers.mask=U.layers.mask|6,E.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let ne=U.parent,ge=I.cameras;me(I,ne);for(let de=0;de<ge.length;de++)me(ge[de],ne);ge.length===2?xe(I,E,A):I.projectionMatrix.copy(E.projectionMatrix),Me(U,I,ne)};function Me(U,X,H){H===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(H.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ur*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(U){return g[U]};let Je=null;function ht(U,X){if(h=X.getViewerPose(c||o),m=X,h!==null){let H=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ne=!1;H.length!==I.cameras.length&&(I.cameras.length=0,ne=!0);for(let Re=0;Re<H.length;Re++){let oe=H[Re],he=null;if(d!==null)he=d.getViewport(oe);else{let Te=f.getViewSubImage(u,oe);he=Te.viewport,Re===0&&(e.setRenderTargetTextures(x,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(x))}let fe=P[Re];fe===void 0&&(fe=new ai,fe.layers.enable(Re),fe.viewport=new St,P[Re]=fe),fe.matrix.fromArray(oe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(oe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(he.x,he.y,he.width,he.height),Re===0&&(I.matrix.copy(fe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ne===!0&&I.cameras.push(fe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Re=f.getDepthInformation(H[0]);Re&&Re.isValid&&Re.texture&&p.init(Re,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Re=0;Re<H.length;Re++){let oe=H[Re].camera;if(oe){let he=g[oe];he||(he=new ea,g[oe]=he);let fe=f.getCameraImage(oe);he.sourceTexture=fe}}}}for(let H=0;H<M.length;H++){let ne=S[H],ge=M[H];ne!==null&&ge!==void 0&&ge.update(ne,X,c||o)}Je&&Je(U,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),m=null}let $=new Zm;$.setAnimationLoop(ht),this.setAnimationLoop=function(U){Je=U},this.dispose=function(){}}},IS=new He,t0=new it;t0.set(-1,0,0,0,1,0,0,0,1);function PS(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,kf(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,_,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,_):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===mi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===mi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),_=y.envMap,x=y.envMapRotation;_&&(p.envMap.value=_,p.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(t0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=_*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function DS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let S=M.program;i.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(p(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",y));let w=M.program;i.updateUBOMapping(x,w);let b=e.render.frame;r[x.id]!==b&&(u(x),r[x.id]=b)}function h(x){let M=f();x.__bindingPointIndex=M;let S=n.createBuffer(),w=x.__size,b=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=s[x.id],S=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,E=S.length;b<E;b++){let A=S[b];if(Array.isArray(A))for(let P=0,I=A.length;P<I;P++)d(A[P],b,P,w);else d(A,b,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,M,S,w){if(v(x,M,S,w)===!0){let b=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let I=E[P],F=g(I);m(I,x.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,x.__data)}}function m(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function v(x,M,S,w){let b=x.value,E=M+"_"+S;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:ArrayBuffer.isView(b)?w[E]=b.slice():w[E]=b.clone(),!0;{let A=w[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return w[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function p(x){let M=x.uniforms,S=0,w=16;for(let E=0,A=M.length;E<A;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let I=0,F=P.length;I<F;I++){let B=P[I],N=Array.isArray(B.value)?B.value:[B.value];for(let k=0,Y=N.length;k<Y;k++){let ie=N[k],ue=g(ie),xe=S%w,me=xe%ue.boundary,Me=xe+me;S+=me,Me!==0&&w-Me<ue.storage&&(S+=w-Me),B.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=ue.storage}}}let b=S%w;return b>0&&(S+=w-b),x.__size=S,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",x),M}function y(x){let M=x.target;M.removeEventListener("dispose",y);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function _(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}var LS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function FS(){return kn===null&&(kn=new qt(LS,16,16,dn,Et),kn.name="DFG_LUT",kn.minFilter=It,kn.magFilter=It,kn.wrapS=ei,kn.wrapT=ei,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var uu=class{constructor(e={}){let{canvas:t=xm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=gi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let v=d,p=new Set([As,Es,jr]),g=new Set([gi,Ti,Ss,Jr,Ec,Ac]),y=new Uint32Array(4),_=new Int32Array(4),x=new R,M=null,S=null,w=[],b=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,I=null,F=null,B=null,N=null;this._outputColorSpace=Vi;let k=0,Y=0,ie=null,ue=-1,xe=null,me=new St,Me=new St,Je=null,ht=new Le(0),$=0,U=t.width,X=t.height,H=1,ne=null,ge=null,de=new St(0,0,U,X),Ae=new St(0,0,U,X),Re=!1,oe=new kr,he=!1,fe=!1,Te=new He,G=new R,Ue=new St,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Qe(){return ie===null?H:1}let O=i;function Mt(C,V){return t.getContext(C,V)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){let V="webgl2";if(O=Mt(V,C),O===null)throw Mt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw je("WebGLRenderer: "+C.message),C}let ot,D,T,W,q,j,ve,_e,Q,se,we,Ge,Ee,ye,ze,Ke,nt,z,be,re,Se,Ce,le;function Ve(){ot=new Hb(O),ot.init(),Se=new AS(O,ot),D=new Lb(O,ot,e,Se),T=new wS(O,ot),D.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),F=O.createFramebuffer(),B=O.createFramebuffer(),N=O.createFramebuffer(),W=new Wb(O),q=new hS,j=new ES(O,ot,T,q,D,Se,W),ve=new kb(A),_e=new $v(O),Ce=new Pb(O,_e),Q=new Vb(O,_e,W,Ce),se=new qb(O,Q,_e,Ce,W),z=new Xb(O,D,j),ze=new Fb(q),we=new uS(A,ve,ot,D,Ce,ze),Ge=new PS(A,q),Ee=new dS,ye=new _S(ot),nt=new Ib(A,ve,T,se,m,l),Ke=new TS(A,se,D),le=new DS(O,W,D,T),be=new Db(O,ot,W),re=new Gb(O,ot,W),W.programs=we.programs,A.capabilities=D,A.extensions=ot,A.properties=q,A.renderLists=Ee,A.shadowMap=Ke,A.state=T,A.info=W}Ve(),v!==gi&&(E=new $b(v,t.width,t.height,a,s,r));let ke=new sd(A,O);this.xr=ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(U,X,!1))},this.getSize=function(C){return C.set(U,X)},this.setSize=function(C,V,J=!0){if(ke.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,X=V,t.width=Math.floor(C*H),t.height=Math.floor(V*H),J===!0&&(t.style.width=C+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(U*H,X*H).floor()},this.setDrawingBufferSize=function(C,V,J){U=C,X=V,H=J,t.width=Math.floor(C*J),t.height=Math.floor(V*J),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(v===gi){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(me)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,V,J,Z){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,V,J,Z),T.viewport(me.copy(de).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Ae)},this.setScissor=function(C,V,J,Z){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,V,J,Z),T.scissor(Me.copy(Ae).multiplyScalar(H).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){T.setScissorTest(Re=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){ge=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,J=!0){let Z=0;if(C){let K=!1;if(ie!==null){let De=ie.texture.format;K=p.has(De)}if(K){let De=ie.texture.type,Oe=g.has(De),Pe=nt.getClearColor(),We=nt.getClearAlpha(),Ye=Pe.r,at=Pe.g,mt=Pe.b;Oe?(y[0]=Ye,y[1]=at,y[2]=mt,y[3]=We,O.clearBufferuiv(O.COLOR,0,y)):(_[0]=Ye,_[1]=at,_[2]=mt,_[3]=We,O.clearBufferiv(O.COLOR,0,_))}else Z|=O.COLOR_BUFFER_BIT}V&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),nt.dispose(),Ee.dispose(),ye.dispose(),q.dispose(),ve.dispose(),se.dispose(),Ce.dispose(),le.dispose(),we.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ci),ke.removeEventListener("sessionend",ki),ln.stop()};function L(C){C.preventDefault(),Uf("WebGLRenderer: Context Lost."),P=!0}function ee(){Uf("WebGLRenderer: Context Restored."),P=!1;let C=W.autoReset,V=Ke.enabled,J=Ke.autoUpdate,Z=Ke.needsUpdate,K=Ke.type;Ve(),W.autoReset=C,Ke.enabled=V,Ke.autoUpdate=J,Ke.needsUpdate=Z,Ke.type=K}function pe(C){je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xe(C){let V=C.target;V.removeEventListener("dispose",Xe),Ne(V)}function Ne(C){st(C),q.remove(C)}function st(C){let V=q.get(C).programs;V!==void 0&&(V.forEach(function(J){we.releaseProgram(J)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,J,Z,K,De){V===null&&(V=Fe);let Oe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pe=hx(C,V,J,Z,K);T.setMaterial(Z,Oe);let We=J.index,Ye=1;if(Z.wireframe===!0){if(We=Q.getWireframeAttribute(J),We===void 0)return;Ye=2}let at=J.drawRange,mt=J.attributes.position,$e=at.start*Ye,Nt=(at.start+at.count)*Ye;De!==null&&($e=Math.max($e,De.start*Ye),Nt=Math.min(Nt,(De.start+De.count)*Ye)),We!==null?($e=Math.max($e,0),Nt=Math.min(Nt,We.count)):mt!=null&&($e=Math.max($e,0),Nt=Math.min(Nt,mt.count));let ri=Nt-$e;if(ri<0||ri===1/0)return;Ce.setup(K,Z,Pe,J,We);let ti,Ot=be;if(We!==null&&(ti=_e.get(We),Ot=re,Ot.setIndex(ti)),K.isMesh)Z.wireframe===!0?(T.setLineWidth(Z.wireframeLinewidth*Qe()),Ot.setMode(O.LINES)):Ot.setMode(O.TRIANGLES);else if(K.isLine){let Di=Z.linewidth;Di===void 0&&(Di=1),T.setLineWidth(Di*Qe()),K.isLineSegments?Ot.setMode(O.LINES):K.isLineLoop?Ot.setMode(O.LINE_LOOP):Ot.setMode(O.LINE_STRIP)}else K.isPoints?Ot.setMode(O.POINTS):K.isSprite&&Ot.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Di=K._multiDrawStarts,Be=K._multiDrawCounts,Qi=K._multiDrawCount,wt=We?_e.get(We).bytesPerElement:1,cn=q.get(Z).currentProgram.getUniforms();for(let Dn=0;Dn<Qi;Dn++)cn.setValue(O,"_gl_DrawID",Dn),Ot.render(Di[Dn]/wt,Be[Dn])}else if(K.isInstancedMesh)Ot.renderInstances($e,ri,K.count);else if(J.isInstancedBufferGeometry){let Di=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Be=Math.min(J.instanceCount,Di);Ot.renderInstances($e,ri,Be)}else Ot.render($e,ri)};function Gt(C,V,J){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=mi,C.needsUpdate=!0,hl(C,V,J),C.side=Ui,C.needsUpdate=!0,hl(C,V,J),C.side=Kt):hl(C,V,J)}this.compile=function(C,V,J=null){J===null&&(J=C),S=ye.get(J),S.init(V),b.push(S),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),C!==J&&C.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();let Z=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let De=K.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){let Pe=De[Oe];Gt(Pe,J,K),Z.add(Pe)}else Gt(De,J,K),Z.add(De)}),S=b.pop(),Z},this.compileAsync=function(C,V,J=null){let Z=this.compile(C,V,J);return new Promise(K=>{function De(){if(Z.forEach(function(Oe){q.get(Oe).currentProgram.isReady()&&Z.delete(Oe)}),Z.size===0){K(C);return}setTimeout(De,10)}ot.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let si=null;function Ai(C){si&&si(C)}function ci(){ln.stop()}function ki(){ln.start()}let ln=new Zm;ln.setAnimationLoop(Ai),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(C){si=C,ke.setAnimationLoop(C),C===null?ln.stop():ln.start()},ke.addEventListener("sessionstart",ci),ke.addEventListener("sessionend",ki),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,V);let J=ke.enabled===!0&&ke.isPresenting===!0,Z=E!==null&&(ie===null||J)&&E.begin(A,ie);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(V),V=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,V,ie),S=ye.get(C,b.length),S.init(V),S.state.textureUnits=j.getTextureUnits(),b.push(S),Te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(Te,yn,V.reversedDepth),fe=this.localClippingEnabled,he=ze.init(this.clippingPlanes,fe),M=Ee.get(C,w.length),M.init(),w.push(M),ke.enabled===!0&&ke.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();Oe!==null&&Fh(Oe,V,-1/0,A.sortObjects)}Fh(C,V,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(ne,ge,V.reversedDepth),qe=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,qe&&nt.addToRenderList(M,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&ze.beginShadows();let K=S.state.shadowsArray;if(Ke.render(K,C,V),he===!0&&ze.endShadows(),(Z&&E.hasRenderPass())===!1){let Oe=M.opaque,Pe=M.transmissive;if(S.setupLights(),V.isArrayCamera){let We=V.cameras;if(Pe.length>0)for(let Ye=0,at=We.length;Ye<at;Ye++){let mt=We[Ye];jd(Oe,Pe,C,mt)}qe&&nt.render(C);for(let Ye=0,at=We.length;Ye<at;Ye++){let mt=We[Ye];Jd(M,C,mt,mt.viewport)}}else Pe.length>0&&jd(Oe,Pe,C,V),qe&&nt.render(C),Jd(M,C,V)}ie!==null&&Y===0&&(j.updateMultisampleRenderTarget(ie),j.updateRenderTargetMipmap(ie)),Z&&E.end(A),C.isScene===!0&&C.onAfterRender(A,C,V),Ce.resetDefaultState(),ue=-1,xe=null,b.pop(),b.length>0?(S=b[b.length-1],j.setTextureUnits(S.state.textureUnits),he===!0&&ze.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,I!==null&&I.renderEnd()};function Fh(C,V,J,Z){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){Z&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);let Oe=se.update(C),Pe=C.material;Pe.visible&&M.push(C,Oe,Pe,J,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){let Oe=se.update(C),Pe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ue.copy(Oe.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(Pe)){let We=Oe.groups;for(let Ye=0,at=We.length;Ye<at;Ye++){let mt=We[Ye],$e=Pe[mt.materialIndex];$e&&$e.visible&&M.push(C,Oe,$e,J,Ue.z,mt)}}else Pe.visible&&M.push(C,Oe,Pe,J,Ue.z,null)}}let De=C.children;for(let Oe=0,Pe=De.length;Oe<Pe;Oe++)Fh(De[Oe],V,J,Z)}function Jd(C,V,J,Z){let{opaque:K,transmissive:De,transparent:Oe}=C;S.setupLightsView(J),he===!0&&ze.setGlobalState(A.clippingPlanes,J),Z&&T.viewport(me.copy(Z)),K.length>0&&ul(K,V,J),De.length>0&&ul(De,V,J),Oe.length>0&&ul(Oe,V,J),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function jd(C,V,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let $e=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Pt(1,1,{generateMipmaps:!0,type:$e?Et:gi,minFilter:Ms,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let De=S.state.transmissionRenderTarget[Z.id],Oe=Z.viewport||me;De.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let Pe=A.getRenderTarget(),We=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(ht),$=A.getClearAlpha(),$<1&&A.setClearColor(16777215,.5),A.clear(),qe&&nt.render(J);let at=A.toneMapping;A.toneMapping=rn;let mt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),he===!0&&ze.setGlobalState(A.clippingPlanes,Z),ul(C,J,Z),j.updateMultisampleRenderTarget(De),j.updateRenderTargetMipmap(De),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Nt=0,ri=V.length;Nt<ri;Nt++){let ti=V[Nt],{object:Ot,geometry:Di,material:Be,group:Qi}=ti;if(Be.side===Kt&&Ot.layers.test(Z.layers)){let wt=Be.side;Be.side=mi,Be.needsUpdate=!0,Qd(Ot,J,Z,Di,Be,Qi),Be.side=wt,Be.needsUpdate=!0,$e=!0}}$e===!0&&(j.updateMultisampleRenderTarget(De),j.updateRenderTargetMipmap(De))}A.setRenderTarget(Pe,We,Ye),A.setClearColor(ht,$),mt!==void 0&&(Z.viewport=mt),A.toneMapping=at}function ul(C,V,J){let Z=V.isScene===!0?V.overrideMaterial:null;for(let K=0,De=C.length;K<De;K++){let Oe=C[K],{object:Pe,geometry:We,group:Ye}=Oe,at=Oe.material;at.allowOverride===!0&&Z!==null&&(at=Z),Pe.layers.test(J.layers)&&Qd(Pe,V,J,We,at,Ye)}}function Qd(C,V,J,Z,K,De){C.onBeforeRender(A,V,J,Z,K,De),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,V,J,Z,C,De),K.transparent===!0&&K.side===Kt&&K.forceSinglePass===!1?(K.side=mi,K.needsUpdate=!0,A.renderBufferDirect(J,V,Z,K,C,De),K.side=Ui,K.needsUpdate=!0,A.renderBufferDirect(J,V,Z,K,C,De),K.side=Kt):A.renderBufferDirect(J,V,Z,K,C,De),C.onAfterRender(A,V,J,Z,K,De)}function hl(C,V,J){V.isScene!==!0&&(V=Fe);let Z=q.get(C),K=S.state.lights,De=S.state.shadowsArray,Oe=K.state.version,Pe=we.getParameters(C,K.state,De,V,J,S.state.lightProbeGridArray),We=we.getProgramCacheKey(Pe),Ye=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=ve.get(C.envMap||Z.environment,at),Z.envMapRotation=Z.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Xe),Ye=new Map,Z.programs=Ye);let mt=Ye.get(We);if(mt!==void 0){if(Z.currentProgram===mt&&Z.lightsStateVersion===Oe)return tp(C,Pe),mt}else Pe.uniforms=we.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,J,Pe),C.onBeforeCompile(Pe,A),mt=we.acquireProgram(Pe,We),Ye.set(We,mt),Z.uniforms=Pe.uniforms;let $e=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=ze.uniform),tp(C,Pe),Z.needsLights=dx(C),Z.lightsStateVersion=Oe,Z.needsLights&&($e.ambientLightColor.value=K.state.ambient,$e.lightProbe.value=K.state.probe,$e.directionalLights.value=K.state.directional,$e.directionalLightShadows.value=K.state.directionalShadow,$e.spotLights.value=K.state.spot,$e.spotLightShadows.value=K.state.spotShadow,$e.rectAreaLights.value=K.state.rectArea,$e.ltc_1.value=K.state.rectAreaLTC1,$e.ltc_2.value=K.state.rectAreaLTC2,$e.pointLights.value=K.state.point,$e.pointLightShadows.value=K.state.pointShadow,$e.hemisphereLights.value=K.state.hemi,$e.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$e.spotLightMatrix.value=K.state.spotLightMatrix,$e.spotLightMap.value=K.state.spotLightMap,$e.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=mt,Z.uniformsList=null,mt}function ep(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=eo.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function tp(C,V){let J=q.get(C);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function ux(C,V){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let J=0,Z=C.length;J<Z;J++){let K=C[J];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function hx(C,V,J,Z,K){V.isScene!==!0&&(V=Fe),j.resetTextureUnits();let De=V.fog,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Pe=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:xt.workingColorSpace,We=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ye=ve.get(Z.envMap||Oe,We),at=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,mt=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$e=!!J.morphAttributes.position,Nt=!!J.morphAttributes.normal,ri=!!J.morphAttributes.color,ti=rn;Z.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ti=A.toneMapping);let Ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Di=Ot!==void 0?Ot.length:0,Be=q.get(Z),Qi=S.state.lights;if(he===!0&&(fe===!0||C!==xe)){let Wt=C===xe&&Z.id===ue;ze.setState(Z,C,Wt)}let wt=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Qi.state.version||Be.outputColorSpace!==Pe||K.isBatchedMesh&&Be.batching===!1||!K.isBatchedMesh&&Be.batching===!0||K.isBatchedMesh&&Be.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Be.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||K.isInstancedMesh&&Be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Be.instancingMorph===!1&&K.morphTexture!==null||Be.envMap!==Ye||Z.fog===!0&&Be.fog!==De||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ze.numPlanes||Be.numIntersection!==ze.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==mt||Be.morphTargets!==$e||Be.morphNormals!==Nt||Be.morphColors!==ri||Be.toneMapping!==ti||Be.morphTargetsCount!==Di||!!Be.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Be.__version=Z.version);let cn=Be.currentProgram;wt===!0&&(cn=hl(Z,V,K),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,cn,Be));let Dn=!1,is=!1,mr=!1,zt=cn.getUniforms(),oi=Be.uniforms;if(T.useProgram(cn.program)&&(Dn=!0,is=!0,mr=!0),Z.id!==ue&&(ue=Z.id,is=!0),Be.needsLights){let Wt=ux(S.state.lightProbeGridArray,K);Be.lightProbeGrid!==Wt&&(Be.lightProbeGrid=Wt,is=!0)}if(Dn||xe!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(O,"projectionMatrix",C.projectionMatrix),zt.setValue(O,"viewMatrix",C.matrixWorldInverse);let ss=zt.map.cameraPosition;ss!==void 0&&ss.setValue(O,G.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&zt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&zt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),xe!==C&&(xe=C,is=!0,mr=!0)}if(Be.needsLights&&(Qi.state.directionalShadowMap.length>0&&zt.setValue(O,"directionalShadowMap",Qi.state.directionalShadowMap,j),Qi.state.spotShadowMap.length>0&&zt.setValue(O,"spotShadowMap",Qi.state.spotShadowMap,j),Qi.state.pointShadowMap.length>0&&zt.setValue(O,"pointShadowMap",Qi.state.pointShadowMap,j)),K.isSkinnedMesh){zt.setOptional(O,K,"bindMatrix"),zt.setOptional(O,K,"bindMatrixInverse");let Wt=K.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),zt.setValue(O,"boneTexture",Wt.boneTexture,j))}K.isBatchedMesh&&(zt.setOptional(O,K,"batchingTexture"),zt.setValue(O,"batchingTexture",K._matricesTexture,j),zt.setOptional(O,K,"batchingIdTexture"),zt.setValue(O,"batchingIdTexture",K._indirectTexture,j),zt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(O,"batchingColorTexture",K._colorsTexture,j));let ns=J.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&z.update(K,J,cn),(is||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,zt.setValue(O,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(oi.envMapIntensity.value=V.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=FS()),is){if(zt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Be.needsLights&&fx(oi,mr),De&&Z.fog===!0&&Ge.refreshFogUniforms(oi,De),Ge.refreshMaterialUniforms(oi,Z,H,X,S.state.transmissionRenderTarget[C.id]),Be.needsLights&&Be.lightProbeGrid){let Wt=Be.lightProbeGrid;oi.probesSH.value=Wt.texture,oi.probesMin.value.copy(Wt.boundingBox.min),oi.probesMax.value.copy(Wt.boundingBox.max),oi.probesResolution.value.copy(Wt.resolution)}eo.upload(O,ep(Be),oi,j)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(eo.upload(O,ep(Be),oi,j),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&zt.setValue(O,"center",K.center),zt.setValue(O,"modelViewMatrix",K.modelViewMatrix),zt.setValue(O,"normalMatrix",K.normalMatrix),zt.setValue(O,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Wt=Z.uniformsGroups;for(let ss=0,gr=Wt.length;ss<gr;ss++){let ip=Wt[ss];le.update(ip,cn),le.bind(ip,cn)}}return cn}function fx(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function dx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(C,V,J){let Z=q.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(C.texture).__webglTexture=V,q.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){let J=q.get(C);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,J=0){ie=C,k=V,Y=J;let Z=null,K=!1,De=!1;if(C){let Pe=q.get(C);if(Pe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,Pe.__webglFramebuffer),me.copy(C.viewport),Me.copy(C.scissor),Je=C.scissorTest,T.viewport(me),T.scissor(Me),T.setScissorTest(Je),ue=-1;return}else if(Pe.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Pe.__hasExternalTextures)j.rebindTextures(C,q.get(C.texture).__webglTexture,q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&q.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}let We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);let Ye=q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?Z=Ye[V][J]:Z=Ye[V],K=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?Z=q.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[J]:Z=Ye,me.copy(C.viewport),Me.copy(C.scissor),Je=C.scissorTest}else me.copy(de).multiplyScalar(H).floor(),Me.copy(Ae).multiplyScalar(H).floor(),Je=Re;if(J!==0&&(Z=F),T.bindFramebuffer(O.FRAMEBUFFER,Z)&&T.drawBuffers(C,Z),T.viewport(me),T.scissor(Me),T.setScissorTest(Je),K){let Pe=q.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,J)}else if(De){let Pe=V;for(let We=0;We<C.textures.length;We++){let Ye=q.get(C.textures[We]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+We,Ye.__webglTexture,J,Pe)}}else if(C!==null&&J!==0){let Pe=q.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,J)}ue=-1},this.readRenderTargetPixels=function(C,V,J,Z,K,De,Oe,Pe=0){if(!(C&&C.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){T.bindFramebuffer(O.FRAMEBUFFER,We);try{let Ye=C.textures[Pe],at=Ye.format,mt=Ye.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe),!D.textureFormatReadable(at)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(mt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Z&&J>=0&&J<=C.height-K&&O.readPixels(V,J,Z,K,Se.convert(at),Se.convert(mt),De)}finally{let Ye=ie!==null?q.get(ie).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,V,J,Z,K,De,Oe,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We)if(V>=0&&V<=C.width-Z&&J>=0&&J<=C.height-K){T.bindFramebuffer(O.FRAMEBUFFER,We);let Ye=C.textures[Pe],at=Ye.format,mt=Ye.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe),!D.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.bufferData(O.PIXEL_PACK_BUFFER,De.byteLength,O.STREAM_READ),O.readPixels(V,J,Z,K,Se.convert(at),Se.convert(mt),0);let Nt=ie!==null?q.get(ie).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Nt);let ri=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _m(O,ri,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,De),O.deleteBuffer($e),O.deleteSync(ri),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,J=0){let Z=Math.pow(2,-J),K=Math.floor(C.image.width*Z),De=Math.floor(C.image.height*Z),Oe=V!==null?V.x:0,Pe=V!==null?V.y:0;j.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Oe,Pe,K,De),T.unbindTexture()},this.copyTextureToTexture=function(C,V,J=null,Z=null,K=0,De=0){let Oe,Pe,We,Ye,at,mt,$e,Nt,ri,ti=C.isCompressedTexture?C.mipmaps[De]:C.image;if(J!==null)Oe=J.max.x-J.min.x,Pe=J.max.y-J.min.y,We=J.isBox3?J.max.z-J.min.z:1,Ye=J.min.x,at=J.min.y,mt=J.isBox3?J.min.z:0;else{let oi=Math.pow(2,-K);Oe=Math.floor(ti.width*oi),Pe=Math.floor(ti.height*oi),C.isDataArrayTexture?We=ti.depth:C.isData3DTexture?We=Math.floor(ti.depth*oi):We=1,Ye=0,at=0,mt=0}Z!==null?($e=Z.x,Nt=Z.y,ri=Z.z):($e=0,Nt=0,ri=0);let Ot=Se.convert(V.format),Di=Se.convert(V.type),Be;V.isData3DTexture?(j.setTexture3D(V,0),Be=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(j.setTexture2DArray(V,0),Be=O.TEXTURE_2D_ARRAY):(j.setTexture2D(V,0),Be=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let Qi=T.getParameter(O.UNPACK_ROW_LENGTH),wt=T.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=T.getParameter(O.UNPACK_SKIP_PIXELS),Dn=T.getParameter(O.UNPACK_SKIP_ROWS),is=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,ti.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ti.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(O.UNPACK_SKIP_ROWS,at),T.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);let mr=C.isDataArrayTexture||C.isData3DTexture,zt=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){let oi=q.get(C),ns=q.get(V),Wt=q.get(oi.__renderTarget),ss=q.get(ns.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,Wt.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let gr=0;gr<We;gr++)mr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(C).__webglTexture,K,mt+gr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(V).__webglTexture,De,ri+gr)),O.blitFramebuffer(Ye,at,Oe,Pe,$e,Nt,Oe,Pe,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||q.has(C)){let oi=q.get(C),ns=q.get(V);T.bindFramebuffer(O.READ_FRAMEBUFFER,B),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let Wt=0;Wt<We;Wt++)mr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,oi.__webglTexture,K,mt+Wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,oi.__webglTexture,K),zt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ns.__webglTexture,De,ri+Wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ns.__webglTexture,De),K!==0?O.blitFramebuffer(Ye,at,Oe,Pe,$e,Nt,Oe,Pe,O.COLOR_BUFFER_BIT,O.NEAREST):zt?O.copyTexSubImage3D(Be,De,$e,Nt,ri+Wt,Ye,at,Oe,Pe):O.copyTexSubImage2D(Be,De,$e,Nt,Ye,at,Oe,Pe);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Be,De,$e,Nt,ri,Oe,Pe,We,Ot,Di,ti.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,De,$e,Nt,ri,Oe,Pe,We,Ot,ti.data):O.texSubImage3D(Be,De,$e,Nt,ri,Oe,Pe,We,Ot,Di,ti):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,De,$e,Nt,Oe,Pe,Ot,Di,ti.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,De,$e,Nt,ti.width,ti.height,Ot,ti.data):O.texSubImage2D(O.TEXTURE_2D,De,$e,Nt,Oe,Pe,Ot,Di,ti);T.pixelStorei(O.UNPACK_ROW_LENGTH,Qi),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),T.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),T.pixelStorei(O.UNPACK_SKIP_ROWS,Dn),T.pixelStorei(O.UNPACK_SKIP_IMAGES,is),De===0&&V.generateMipmaps&&O.generateMipmap(Be),T.unbindTexture()},this.initRenderTarget=function(C){q.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){k=0,Y=0,ie=null,T.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var i0={type:"change"},od={type:"start"},s0={type:"end"},pu=new Sn,n0=new Si,NS=Math.cos(70*Of.DEG2RAD),_i=new R,Ji=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6,mu=class extends ya{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Gi,this._lastTargetPosition=new R,this._quat=new Gi().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new R,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new R,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=BS.bind(this),this._onPointerDown=US.bind(this),this._onPointerUp=OS.bind(this),this._onContextMenu=XS.bind(this),this._onMouseWheel=HS.bind(this),this._onKeyDown=VS.bind(this),this._onTouchStart=GS.bind(this),this._onTouchMove=WS.bind(this),this._onMouseDown=zS.bind(this),this._onMouseMove=kS.bind(this),this._interceptControlDown=qS.bind(this),this._interceptControlUp=YS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(i0),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;_i.copy(t).sub(this.target),_i.applyQuaternion(this._quat),this._spherical.setFromVector3(_i),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ji:i>Math.PI&&(i-=Ji),s<-Math.PI?s+=Ji:s>Math.PI&&(s-=Ji),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_i.setFromSpherical(this._spherical),_i.applyQuaternion(this._quatInverse),t.copy(this.target).add(_i),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=_i.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_i.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pu.origin.copy(this.object.position),pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pu.direction))<NS?this.object.lookAt(this.target):(n0.setFromNormalAndCoplanarPoint(this.object.up,this.target),pu.intersectPlane(n0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(i0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ji/60*this.autoRotateSpeed*e:Ji/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_i.setFromMatrixColumn(t,0),_i.multiplyScalar(-e),this._panOffset.add(_i)}_panUp(e,t){this.screenSpacePanning===!0?_i.setFromMatrixColumn(t,1):(_i.setFromMatrixColumn(t,0),_i.crossVectors(this.object.up,_i)),_i.multiplyScalar(e),this._panOffset.add(_i)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;_i.copy(s).sub(this.target);let r=_i.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function US(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function BS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function OS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(s0),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ut.DOLLY;break;case wn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ut.ROTATE}break;case wn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(od)}function kS(n){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function HS(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(n.preventDefault(),this.dispatchEvent(od),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(s0))}function VS(n){this.enabled!==!1&&this._handleKeyDown(n)}function GS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ut.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ut.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(od)}function WS(n){switch(this._trackPointer(n),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ut.NONE}}function XS(n){this.enabled!==!1&&n.preventDefault()}function qS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var no={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var on=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$S=new _s(-1,1,1,-1,0,1),ad=class extends ft{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},ZS=new ad,yi=class{constructor(e){this._mesh=new yt(ZS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$S)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var so=class extends on{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ka=class extends on{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gu=class extends on{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Et}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new so(no),this.copyPass.material.blending=li,this.timer=new xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ka!==void 0&&(o instanceof ka?i=!0:o instanceof gu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vu=class extends on{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var r0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ro=class n extends on{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(r,o,{type:Et}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Pt(r,o,{type:Et});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Pt(r,o,{type:Et});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=r0;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(no.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,premultipliedAlpha:!0,blending:Ki,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new fi,this._fsQuad=new yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ro.BlurDirectionX=new te(1,0);ro.BlurDirectionY=new te(0,1);var Ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _u=class extends on{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(Ha.uniforms),this.material=new Xr({name:Ha.name,uniforms:this.uniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ba?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ta&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bi=Object.freeze({cols:18,rows:12,tile:2.4}),di=Object.freeze({pulse:{label:"01",name:"Pulse repeater",cost:90,color:"#45f5ff",range:6.8,damage:15,interval:.42,description:"Rapid plasma fire. A dependable front line against light cycles."},arc:{label:"02",name:"Arc conductor",cost:140,color:"#ad8bff",range:6.6,damage:25,interval:.95,description:"Lightning chains through enemies. Deals 45% more damage to chilled targets and drains shields."},cryo:{label:"03",name:"Cryo reactor",cost:110,color:"#8cffe2",range:5.8,damage:10,interval:1.2,description:"Freezes a cluster of enemies, slowing movement and amplifying arc damage."},rail:{label:"04",name:"Rail accelerator",cost:180,color:"#ffdc83",range:11.8,damage:100,interval:2.3,description:"Long-range piercing rounds ignore armor and strike enemies in a line."},mortar:{label:"05",name:"Solar artillery",cost:160,color:"#ff8a5c",range:10.2,damage:65,interval:2.35,description:"Explosive solar shells devastate packed formations with splash damage."}}),Cs=Object.freeze([{id:"causeway",name:"Ion Causeway",subtitle:"THE MACHINE CITY",description:"A rising defense platform above the electric heart of a colossal machine city.",waves:10,initialCredits:420,color:"#45f5ff",path:[[-1,3],[4,3],[4,8],[9,8],[9,2],[14,2],[14,6],[18,6]]},{id:"cataract",name:"Cataract Divide",subtitle:"THE FALLING OCEAN",description:"Climb the canyon terraces between luminous waterfalls and deep blue reservoirs.",waves:12,initialCredits:460,color:"#539cff",path:[[-1,3],[3,3],[3,9],[7,9],[7,2],[12,2],[12,8],[15,8],[15,6],[18,6]]},{id:"caldera",name:"Obsidian Caldera",subtitle:"THE MOLTEN CORE",description:"Defend volcanic ridges where black glass, molten rivers, and crimson machinery converge.",waves:14,initialCredits:500,color:"#ff704f",path:[[-1,3],[3,3],[3,1],[8,1],[8,6],[5,6],[5,10],[12,10],[12,4],[16,4],[16,6],[18,6]]}]),oo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function ld(n,e,t){return n===1?.3+oo(-12,-6,e)*3.8-oo(4,10,e)*2.4:n===2?.3+oo(-11,-3,t)*2.6-oo(4,11,t)*1.9+oo(-7,4,e)*1.8:.3+oo(-6,5,e)*1.8}function bu(n,e,t){return!(!Number.isInteger(e)||!Number.isInteger(t)||e<0||t<0||e>=bi.cols||t>=bi.rows||n===1&&e>=8&&e<=10||n===2&&(e<=2&&t>=8||e>=14&&t<=1))}var KS={cycle:{hp:52,shield:0,speed:3.7,armor:0,bounty:8,leak:3,size:.7,color:"#ff5d86"},drone:{hp:75,shield:22,speed:2.75,armor:0,bounty:11,leak:4,size:.85,color:"#f6a5ff"},walker:{hp:210,shield:0,speed:1.5,armor:.36,bounty:20,leak:9,size:1.2,color:"#ff9565"},carrier:{hp:145,shield:115,speed:1.85,armor:.14,bounty:22,leak:7,size:1.1,color:"#e298ff"},boss:{hp:1800,shield:750,speed:1.08,armor:.24,bounty:180,leak:35,size:2.5,color:"#ff436c"}},Vn=(n,e)=>(n.x-e.x)**2+(n.z-e.z)**2,Ci=n=>({ok:!1,reason:n}),yu=class{constructor({onEvent:e}={}){this.onEvent=typeof e=="function"?e:()=>{},this.start(0)}start(e=0){this.sectorIndex=Number.isInteger(e)&&Cs[e]?e:0,this.sector=Cs[this.sectorIndex],this.state="ready",this.credits=this.sector.initialCredits,this.integrity=this.maxIntegrity=100,this.wave=0,this.totalWaves=this.sector.waves,this.score=this.kills=this.time=0,this.enemies=[],this.towers=[],this.cooldowns={nova:0,overdrive:0},this.overdriveRemaining=0,this._nextId=1,this._spawnQueue=[],this._waveTime=0,this._roadCells=new Set,this._path=this.sector.path.map(([t,i])=>this.cellToWorld(t,i)),this._segments=[],this.pathLength=0;for(let t=1;t<this._path.length;t++){let i=this._path[t-1],s=this._path[t],r=Math.hypot(s.x-i.x,s.z-i.z);this._segments.push({from:i,to:s,length:r,start:this.pathLength}),this.pathLength+=r;let[o,a]=this.sector.path[t-1],[l,c]=this.sector.path[t],h=Math.max(Math.abs(l-o),Math.abs(c-a));for(let f=0;f<=h;f++)this._roadCells.add(`${o+Math.sign(l-o)*f},${a+Math.sign(c-a)*f}`)}return{ok:!0}}cellToWorld(e,t){return{x:(e-(bi.cols-1)/2)*bi.tile,z:(t-(bi.rows-1)/2)*bi.tile}}worldToCell(e,t){return{col:Math.round(e/bi.tile+(bi.cols-1)/2),row:Math.round(t/bi.tile+(bi.rows-1)/2)}}groundHeight(e,t){return ld(this.sectorIndex,e,t)}isRoad(e,t){return this._roadCells.has(`${e},${t}`)}canBuild(e,t){return(this.state==="ready"||this.state==="wave")&&bu(this.sectorIndex,e,t)&&!this.isRoad(e,t)&&!this.towers.some(i=>i.col===e&&i.row===t)}build(e,t,i){if(!Object.hasOwn(di,e))return Ci("Unknown defense system.");if(!this.canBuild(t,i))return Ci("Choose an empty platform tile off the enemy route.");if(this.credits<di[e].cost)return Ci("Insufficient credits.");let{x:s,z:r}=this.cellToWorld(t,i),o={id:this._nextId++,type:e,col:t,row:i,x:s,z:r,y:this.groundHeight(s,r),level:1,branch:null,cooldown:0,angle:0,spent:di[e].cost,kills:0,damageDealt:0};return this.credits-=o.spent,this.towers.push(o),this._emit("build",{tower:o}),{ok:!0,tower:o}}getTowerStats(e){let t=di[e.type],i=e.level-1,s=e.branch==="power",r=e.branch==="utility",o=this.towers.filter(l=>l.id!==e.id&&l.type!==e.type&&Vn(l,e)<=16.01).length,a=1+Math.min(3,o)*.1;return{...t,level:e.level,branch:e.branch,links:o,range:t.range*(1+i*.08)*(r?1+i*.1:1),damage:t.damage*(1+i*.45)*(s?1+i*.18:1),interval:t.interval*(1-i*.08)/a/(this.overdriveRemaining>0?1.7:1),chains:3+(r?i:0),splash:3.2+(r?i*.65:0),slowFactor:Math.max(.24,.52-(r?i*.12:i*.035)),slowDuration:2.9+i*.4,pierce:3+(r?i*2:i),upgradeCost:e.level<3?Math.round(t.cost*(.75+e.level*.45)/5)*5:null,sellValue:Math.floor(e.spent*.7)}}upgrade(e,t){if(this.state!=="ready"&&this.state!=="wave")return Ci("The operation has ended.");let i=this.towers.find(r=>r.id===e);if(!i)return Ci("Defense system not found.");if(i.level>=3)return Ci("Maximum evolution reached.");if(i.level===1&&t!=="power"&&t!=="utility")return Ci("Choose the power or utility evolution.");if(i.level>1&&t&&t!==i.branch)return Ci("An evolution path cannot be changed.");let{upgradeCost:s}=this.getTowerStats(i);return this.credits<s?Ci("Insufficient credits."):(this.credits-=s,i.spent+=s,i.level===1&&(i.branch=t),i.level++,this._emit("upgrade",{tower:i}),{ok:!0,tower:i})}sell(e){if(this.state!=="ready"&&this.state!=="wave")return Ci("The operation has ended.");let t=this.towers.findIndex(r=>r.id===e);if(t===-1)return Ci("Defense system not found.");let i=this.towers[t],s=this.getTowerStats(i).sellValue;return this.credits+=s,this.towers.splice(t,1),this._emit("sell",{tower:i,refund:s}),{ok:!0,refund:s}}startWave(){if(this.state!=="ready")return Ci("Finish the current wave first.");if(this.wave>=this.totalWaves)return Ci("All waves are complete.");this.wave++,this.state="wave",this._waveTime=0,this._spawnQueue=[];let e=8+this.wave*2+this.sectorIndex*2;for(let t=0;t<e;t++){let i="cycle";this.wave>=2&&t%4===2&&(i="drone"),this.wave>=3&&t%6===4&&(i="walker"),this.wave>=4&&t%7===5&&(i="carrier"),this.wave>=7&&t%8===1&&(i="walker"),this._spawnQueue.push({at:t*Math.max(.38,.92-this.wave*.035),type:i})}return(this.wave%5===0||this.wave===this.totalWaves)&&this._spawnQueue.push({at:e*.45,type:"boss"}),this._spawnQueue.sort((t,i)=>t.at-i.at),this._emit("wave",{wave:this.wave,count:this._spawnQueue.length}),{ok:!0,wave:this.wave}}ability(e,t=0,i=0){if(this.state!=="wave")return Ci("Abilities are available during combat.");if(e!=="nova"&&e!=="overdrive")return Ci("Unknown ability.");if(this.cooldowns[e]>0)return Ci(`Recharging: ${Math.ceil(this.cooldowns[e])}s.`);if(e==="nova"&&(!Number.isFinite(t)||!Number.isFinite(i)))return Ci("Choose a valid target.");if(this.cooldowns[e]=e==="nova"?42:55,this._emit("ability",{ability:e,x:t,z:i}),e==="overdrive")this.overdriveRemaining=9;else{for(let s of this.enemies)s.hp>0&&Vn(s,{x:t,z:i})<=8.5**2&&(s.slow=Math.min(s.slow,.22),s.slowRemaining=Math.max(s.slowRemaining,2.5),this._damage(s,250+this.wave*22,{armorPierce:!0,shieldMultiplier:1.6}));this.enemies=this.enemies.filter(s=>s.hp>0)}return{ok:!0}}update(e){if(!Number.isFinite(e)||e<=0||this.state==="victory"||this.state==="defeat")return;let t=Math.min(e,5);for(;t>1e-6;){let i=Math.min(t,.05);if(t-=i,this._step(i),this.state==="victory"||this.state==="defeat")break}}_step(e){if(this.time+=e,this.cooldowns.nova=Math.max(0,this.cooldowns.nova-e),this.cooldowns.overdrive=Math.max(0,this.cooldowns.overdrive-e),this.overdriveRemaining=Math.max(0,this.overdriveRemaining-e),this.state==="wave"){for(this._waveTime+=e;this._spawnQueue.length&&this._spawnQueue[0].at<=this._waveTime;)this._spawn(this._spawnQueue.shift().type);for(let t of this.enemies)if(!(t.hp<=0)){if(t.slowRemaining=Math.max(0,t.slowRemaining-e),t.slowRemaining||(t.slow=1),t.progress+=t.speed*t.slow*e,this._positionEnemy(t),t.progress>=this.pathLength&&(t.hp=0,t.leaked=!0,this.integrity=Math.max(0,this.integrity-t.leak),this._emit("leak",{enemy:t}),this.integrity<=0)){this.state="defeat",this._emit("defeat",{});return}if(t.type==="carrier"&&t.hp>0&&(t.auraCooldown-=e,t.auraCooldown<=0)){t.auraCooldown=1.2;for(let i of this.enemies)i.hp>0&&i.maxShield>0&&!i.isBoss&&Vn(t,i)<5**2&&(i.shield=Math.min(i.maxShield,i.shield+9))}}for(let t of this.towers){t.cooldown=Math.max(0,t.cooldown-e);let i=this.getTowerStats(t),s=this.enemies.filter(o=>o.hp>0&&Vn(o,t)<=i.range**2).sort((o,a)=>a.progress-o.progress);if(!s.length)continue;let r=s[0];t.angle=Math.atan2(r.x-t.x,r.z-t.z),t.targetId=r.id,!(t.cooldown>0)&&(t.cooldown=i.interval,this._fire(t,r,i))}if(this.enemies=this.enemies.filter(t=>t.hp>0),!this.enemies.length&&!this._spawnQueue.length&&this.state==="wave"){let t=48+this.wave*8+this.sectorIndex*6;this.credits+=t,this.score+=t*5,this.state=this.wave===this.totalWaves?"victory":"ready",this._emit("waveClear",{wave:this.wave,reward:t}),this.state==="victory"&&this._emit("victory",{score:this.score})}}}_spawn(e){let t=KS[e],i=(1+(this.wave-1)*.115)*(1+this.sectorIndex*.15),s=e==="boss"?.74+this.wave*.045:1,r={id:this._nextId++,type:e,x:this._path[0].x,z:this._path[0].z,y:0,angle:0,hp:Math.round(t.hp*i*s),maxHp:Math.round(t.hp*i*s),shield:Math.round(t.shield*i),maxShield:Math.round(t.shield*i),progress:0,speed:t.speed*(1+(this.wave-1)*.012),slow:1,slowRemaining:0,color:t.color,size:t.size,isBoss:e==="boss",armor:t.armor,bounty:Math.round(t.bounty*(1+(this.wave-1)*.025)),leak:t.leak,phase:1,auraCooldown:1.2};this._positionEnemy(r),this.enemies.push(r),this._emit("spawn",{enemy:r})}_positionEnemy(e){let t=this._segments.find(s=>e.progress<s.start+s.length)||this._segments[this._segments.length-1],i=Math.min(1,Math.max(0,(e.progress-t.start)/t.length));e.x=t.from.x+(t.to.x-t.from.x)*i,e.z=t.from.z+(t.to.z-t.from.z)*i,e.y=this.groundHeight(e.x,e.z),e.angle=Math.atan2(t.to.x-t.from.x,t.to.z-t.from.z)}_fire(e,t,i){let s=[t];if(e.type==="arc")for(;s.length<i.chains;){let r=s[s.length-1],o=this.enemies.filter(a=>a.hp>0&&!s.includes(a)&&Vn(a,r)<5.4**2).sort((a,l)=>Vn(a,r)-Vn(l,r))[0];if(!o)break;s.push(o)}else if(e.type==="mortar"||e.type==="cryo"){let r=e.type==="cryo"?i.splash*.86:i.splash;s=this.enemies.filter(o=>o.hp>0&&Vn(o,t)<=r**2)}else if(e.type==="rail"){let r=t.x-e.x,o=t.z-e.z,a=Math.hypot(r,o)||1;s=this.enemies.filter(l=>{if(l.hp<=0)return!1;let c=l.x-e.x,h=l.z-e.z,f=(c*r+h*o)/a,u=Math.abs(c*o-h*r)/a;return f>=0&&f<=i.range&&u<=.8+l.size*.25}).sort((l,c)=>Vn(l,e)-Vn(c,e)).slice(0,i.pierce)}this._emit("shot",{tower:e,targets:[...s],from:{x:e.x,y:e.y+2,z:e.z},to:{x:t.x,y:t.y+.6,z:t.z},weapon:e.type});for(let r=0;r<s.length;r++){let o=s[r];e.type==="cryo"&&(o.slow=Math.min(o.slow,i.slowFactor),o.slowRemaining=Math.max(o.slowRemaining,i.slowDuration));let a=i.damage*(e.type==="arc"?(o.slow<1?1.45:1)*.84**r:1);this._damage(o,a,{tower:e,armorPierce:e.type==="rail",shieldMultiplier:e.type==="arc"?1.7:1})}}_damage(e,t,{tower:i,armorPierce:s=!1,shieldMultiplier:r=1}={}){if(e.hp<=0)return;let o=e.hp,a=e.shield;if(e.shield>0){let l=Math.min(e.shield,t*r);e.shield-=l,t-=l/r}e.hp=Math.max(0,e.hp-Math.max(0,t)*(s?1:1-e.armor)),i&&(i.damageDealt+=o-e.hp+a-e.shield),e.isBoss&&a>0&&e.shield<=0&&e.phase===1&&(e.phase=2,e.armor*=.5,this._emit("bossPhase",{enemy:e,phase:"exposed"})),e.isBoss&&e.hp>0&&e.hp<e.maxHp*.45&&e.phase<3&&(e.phase=3,e.speed*=1.4,e.color="#ffbf70",this._emit("bossPhase",{enemy:e,phase:"enraged"})),e.hp<=0&&(this.credits+=e.bounty,this.kills++,this.score+=e.bounty*(e.isBoss?20:10),i&&i.kills++,this._emit("kill",{enemy:e,tower:i}))}getSnapshot(){return{state:this.state,sector:this.sector,sectorIndex:this.sectorIndex,credits:this.credits,integrity:this.integrity,maxIntegrity:this.maxIntegrity,wave:this.wave,totalWaves:this.totalWaves,score:this.score,kills:this.kills,enemies:this.enemies,towers:this.towers,time:this.time,cooldowns:{...this.cooldowns},overdriveRemaining:this.overdriveRemaining,incoming:this._spawnQueue.length}}_emit(e,t){this.onEvent({type:e,...t})}};function Mu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ft,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=o0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][u]);let m=o0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function o0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new vt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let v=h.getComponent(u,m);a.setComponent(u+f,m,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var cd=new Map,ao=new Map,a0={pulse:"#46edff",arc:"#b396ff",cryo:"#8bebff",rail:"#ffcb62",mortar:"#ff7869"},Yi=Math.PI*2;function sr(n,e){return cd.has(n)||cd.set(n,e()),cd.get(n)}function rr(n,e){return ao.has(n)||ao.set(n,new fn(e)),ao.get(n)}var ii=rr("metal",{color:"#192735",metalness:.83,roughness:.29}),ct=rr("armor",{color:"#314555",metalness:.78,roughness:.32}),kt=rr("edge",{color:"#71869a",metalness:.92,roughness:.2}),bt=rr("black",{color:"#07121b",metalness:.62,roughness:.51}),Cn=rr("copper",{color:"#b48c61",metalness:.9,roughness:.24}),Va=rr("ceramic",{color:"#a9c4cd",metalness:.35,roughness:.24});function Jt(n,e=2.4){return rr(`glow:${n}:${e}`,{color:n,emissive:n,emissiveIntensity:e,metalness:.45,roughness:.25})}function JS(n,e,t,i=.035){return i=Math.min(i,n/5,e/5,t/5),sr(`bevel:${n},${e},${t},${i}`,()=>{let s=new Gr,r=n/2-i,o=e/2-i;s.moveTo(-r,-o),s.lineTo(r,-o),s.lineTo(r,o),s.lineTo(-r,o),s.closePath();let a=new ha(s,{depth:t-2*i,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,steps:1});return a.translate(0,0,-t/2+i),a})}function Ga(n,e,t,i=12){return sr(`cylinder:${n},${e},${t},${i}`,()=>new Ri(n,e,t,i))}function jS(n,e=.025,t=Yi){return sr(`torus:${n},${e},${t}`,()=>new hn(n,e,6,Math.max(12,Math.round(48*t/Yi)),t))}function Is(n,e=0){return sr(`ico:${n},${e}`,()=>new fa(n,e))}function Ii(n,e,t,i=0,s=0,r=0,o=0,a=0,l=0){let c=new yt(e,t);return c.position.set(i,s,r),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function ce(n,e,t,i,s,r=0,o=0,a=0,l=0,c=0,h=0){return Ii(n,JS(e,t,i),s,r,o,a,l,c,h)}function pt(n,e,t,i,s=0,r=0,o=0,a=12,l=e){return Ii(n,Ga(l,e,t,a),i,s,r,o)}function gt(n,e,t,i,s=0,r=0,o=0,a=Math.PI/2,l=0,c=0,h=Yi){return Ii(n,jS(e,t,h),i,s,r,o,a,l,c)}function lt(n,e=0,t=0,i=0){let s=new hi;return s.position.set(e,t,i),n.add(s),s}function wi(n,e,t,i=.035,s=kt,r=8){let o=new R(...e),a=new R(...t),l=o.distanceTo(a),c=Ii(n,Ga(i,i,Number(l.toFixed(5)),r),s);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new R(0,1,0),a.sub(o).normalize()),c}function Wa(n,e,t,i=.025){let s=`cable:${JSON.stringify(e)}:${i}`,r=sr(s,()=>new ms(new jn(e.map(o=>new R(...o))),16,i,5,!1));return Ii(n,r,t)}function $i(n,e,t="y",i=1){return e.userData.axis=t,e.userData.speed=i,n.userData.rotors.push(e),e}function Su(){let n=new hi;return n.userData.rotors=[],n.userData.glows=[],n}function c0(n,e){return n.userData.glows.push(e),e}function Tu(n){let e=new Set(n.userData.rotors||[]);n.traverse(s=>{for(let[r,o]of Object.entries(s.userData))if(r!=="glows"){if(o?.isObject3D)e.add(o);else if(Array.isArray(o))for(let a of o)a?.isObject3D&&e.add(a)}});let t=new Map;function i(s){for(let o of[...s.children])i(o);if(!s.isGroup)return;let r=new Map;for(let o of s.children){if(!o.isMesh||o.isInstancedMesh||o.children.length||e.has(o)||Array.isArray(o.material))continue;o.updateMatrix();let a=Object.keys(o.geometry.attributes).sort().join(","),l=`${o.material.uuid}:${o.castShadow}:${o.receiveShadow}:${o.visible}:${o.layers.mask}:${o.renderOrder}:${o.frustumCulled}:${a}`;r.has(l)||r.set(l,[]),r.get(l).push(o)}for(let[o,a]of r){if(a.length<2)continue;let l=`merged:${o}:${a.map(u=>`${u.geometry.uuid}@${u.matrix.elements.join(",")}`).join("|")}`,c=sr(l,()=>{let u=a.map(m=>{let v=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();return v.applyMatrix4(m.matrix),v}),d=Mu(u,!1);for(let m of u)m.dispose();if(!d)throw new Error("Model geometry batching failed.");return d}),h=a[0],f=new yt(c,h.material);f.name=`batched-${h.material.name||h.material.type}`,f.castShadow=h.castShadow,f.receiveShadow=h.receiveShadow,f.visible=h.visible,f.layers.mask=h.layers.mask,f.renderOrder=h.renderOrder,f.frustumCulled=h.frustumCulled;for(let u of a)s.remove(u),t.set(u,f);s.add(f)}}return i(n),n.userData.glows=[...new Set(n.userData.glows.map(s=>t.get(s)||s))],n}function Xa(n,e,t,i,s){let r=new Zt;r.position.set(t,i,s),e.add(r),n.userData.muzzle=r}function QS(n,e,t){let i=Jt(e);pt(n,.82,.14,bt,0,.07,0,8),pt(n,.72,.16,ct,0,.2,0,8,.64),gt(n,.63,.022,i,0,.284),pt(n,.41,.19,bt,0,.365,0,12),pt(n,.45,.065,kt,0,.44,0,12),pt(n,.35,.23,ii,0,.55,0,12,.29);for(let s=0;s<4;s++){let r=Math.PI/4+s*Math.PI/2,o=lt(n,Math.sin(r)*.56,.23,Math.cos(r)*.56);o.rotation.y=r,ce(o,.22,.23,.45,ct),ce(o,.08,.035,.25,i,0,.135,.055),pt(o,.042,.028,kt,0,.138,-.1,6)}if(t>=2)for(let s=0;s<4;s++){let r=s*Math.PI/2;ce(n,.15,.28,.22,ii,Math.sin(r)*.62,.43,Math.cos(r)*.62,0,r),ce(n,.045,.19,.03,i,Math.sin(r)*.74,.45,Math.cos(r)*.74,0,r)}if(t>=3){let s=$i(n,lt(n,0,.35),"y",.18);for(let r=0;r<3;r++)gt(s,.85,.023,i,0,0,0,Math.PI/2,0,r*Yi/3,1.35)}}function e1(n,e,t,i){let s=Jt(t);pt(e,.3,.48,ct,0,.04,0,12),ce(e,.92,.38,.62,ii,0,.3,-.05),ce(e,.53,.24,.62,ct,0,.55,-.1,.13),ce(e,.29,.05,.23,s,0,.69,-.09);for(let o of[-1,1]){ce(e,.23,.32,.57,ct,o*.4,.33,-.08,0,0,o*-.1);let a=lt(e,o*.26,.39,.36),l=pt(a,.105,.72,bt);l.rotation.x=Math.PI/2;for(let c of[-.28,.04,.29]){let h=pt(a,.131,.085,kt,0,0,c,8);h.rotation.x=Math.PI/2}ce(a,.055,.075,.57,s,0,.105,0),gt(a,.079,.018,s,0,0,.38,0),wi(e,[o*.38,.03,-.24],[o*.4,.22,.25],.033,Cn);for(let c=0;c<3;c++)ce(e,.023,.11,.21,bt,o*.528,.33,-.19+c*.105)}let r=$i(n,lt(e,0,.81,-.2),"y",.48);if(pt(r,.05,.15,kt),ce(r,.33,.1,.1,bt,0,.095),ce(r,.24,.032,.016,s,0,.095,.057),i>1)for(let o of[-1,1])ce(e,.16,.17,.39,Va,o*.57,.38,-.17),ce(e,.037,.055,.3,s,o*.66,.39,-.17);Xa(n,e,0,.39,.78)}function t1(n,e,t,i){let s=Jt(t);pt(e,.32,.6,bt,0,.25);for(let o=0;o<4;o++)pt(e,.38-o*.025,.06,o%2?s:ct,0,.12+o*.17);let r=lt(e,0,1.08);c0(n,Ii(r,Is(.19,1),Jt(t,5)));for(let o=0;o<3;o++){let a=lt(r);a.rotation.set(o*.85,o*1.1,o*.65);let l=$i(n,lt(a),o===1?"x":"z",o%2?-.9:.62);gt(l,.36+o*.105,.022,kt,0,0,0,0),gt(l,.36+o*.105,.012,s,0,0,.027,0,0,0,Math.PI*.65),ce(l,.105,.19,.105,ii,.36+o*.105,0,0)}for(let o of[-1,1]){ce(e,.21,.68,.34,ct,o*.49,.43,0,0,0,o*-.25),ce(e,.12,.55,.2,ii,o*.67,1.02,0,0,0,o*.13),ce(e,.15,.21,.25,kt,o*.63,1.39,0),ce(e,.042,.39,.042,s,o*.65,1.07,.114),pt(e,.105,.25,Cn,o*.37,.47,-.23,8),Wa(e,[[o*.23,.23,-.17],[o*.57,.26,-.35],[o*.68,.85,-.2]],s,.021);for(let a=0;a<3;a++)gt(e,.11,.018,bt,o*.37,.4+a*.075,-.23)}if(i>1){let o=$i(n,lt(e,0,1.54),"y",-.4);gt(o,.56,.025,s);for(let a=0;a<4;a++)ce(o,.14,.13,.14,ii,Math.sin(a*Math.PI/2)*.56,0,Math.cos(a*Math.PI/2)*.56)}Xa(n,e,0,1.08,0)}function i1(n,e,t,i){let s=Jt(t);pt(e,.32,.4,ct,0,.1),ce(e,.74,.42,.67,ii,0,.38,-.06);let r=lt(e,0,.57,.2),o=pt(r,.34,.5,ct);o.rotation.x=Math.PI/2;for(let l of[-.26,.04,.28])gt(r,.35,.035,l===.04?s:kt,0,0,l,0);Ii(r,Is(.19,2),Jt(t,5),0,0,.3);let a=$i(n,lt(r,0,0,.35),"z",-.6);for(let l=0;l<8;l++){let c=l*Yi/8;ce(a,.075,.19,.075,Va,Math.sin(c)*.25,Math.cos(c)*.25,0,0,0,-c-.45)}gt(r,.21,.014,s,0,0,.4,0);for(let l of[-1,1]){ce(e,.19,.42,.66,Va,l*.48,.42,-.13,0,0,l*-.12);for(let c=0;c<4;c++)ce(e,.09,.3,.04,bt,l*.57,.42,-.37+c*.135);pt(e,.095,.43,bt,l*.35,.62,-.42,10),pt(e,.073,.3,s,l*.35,.64,-.42,10),pt(e,.11,.06,kt,l*.35,.86,-.42,10),Wa(e,[[l*.35,.9,-.42],[l*.19,1,-.22],[l*.15,.84,0]],Cn)}if(i>1)for(let l of[-1,1])ce(e,.08,.42,.52,ct,l*.7,.57,-.18,0,0,l*.2),ce(e,.033,.34,.055,s,l*.71,.63,.12,0,0,l*.2);Xa(n,e,0,.57,.66)}function n1(n,e,t,i){let s=Jt(t);pt(e,.33,.48,ct,0,.05,0,8),ce(e,.64,.39,.65,ii,0,.28,-.32),ce(e,.41,.14,.65,ct,0,.55,-.31,-.1),ce(e,.21,.18,1.71,bt,0,.32,.36),ce(e,.09,.035,1.56,s,0,.424,.43);for(let o of[-1,1]){ce(e,.13,.18,1.56,kt,o*.18,.36,.44),ce(e,.038,.04,1.35,s,o*.254,.36,.43),ce(e,.16,.3,.46,ct,o*.43,.24,-.35),wi(e,[o*.27,.05,-.41],[o*.27,.25,.47],.04,Cn);for(let a=0;a<4;a++)ce(e,.28,.3,.09,ii,o*.2,.35,-.02+a*.34);Wa(e,[[o*.5,.29,-.45],[o*.58,.04,-.15],[o*.2,.15,.3]],s,.025)}ce(e,.55,.27,.15,ct,0,.35,1.22),ce(e,.16,.115,.018,bt,0,.35,1.305),ce(e,.09,.044,.022,s,0,.35,1.318);let r=pt(e,.075,.38,bt,0,.65,-.27,10);if(r.rotation.x=Math.PI/2,gt(e,.067,.011,s,0,.65,-.065,0),i>1)for(let o of[-1,1])ce(e,.075,.35,.46,Va,o*.34,.59,-.35,0,0,o*-.12),ce(e,.035,.07,.4,s,o*.37,.77,-.35);Xa(n,e,0,.35,1.34)}function s1(n,e,t,i){let s=Jt(t);pt(e,.41,.45,ii,0,.04,0,12),gt(e,.4,.025,s,0,.2),ce(e,.89,.29,.67,ct,0,.27);let r=lt(e,0,.53,0);r.rotation.x=-.55,ce(r,.97,.75,.72,ii),ce(r,1.06,.09,.8,ct,0,.42),ce(r,1.06,.09,.8,ct,0,-.42);for(let o of[-.25,.25])for(let a of[-.2,.2]){let l=lt(r,o,a,.16),c=pt(l,.18,.5,bt,0,0,0,8);c.rotation.x=Math.PI/2,gt(l,.174,.03,kt,0,0,.25,0),gt(l,.135,.018,s,0,0,.264,0);let h=Ii(l,Ga(.02,.088,.16,8),Cn,0,0,.22,Math.PI/2);h.rotation.x=Math.PI/2}for(let o of[-1,1]){let a=pt(e,.17,.16,kt,o*.55,.46,0,12);a.rotation.z=Math.PI/2,gt(e,.11,.018,s,o*.64,.46,0,0,Math.PI/2),wi(e,[o*.37,.1,-.3],[o*.48,.73,-.29],.042,Cn),ce(r,.045,.54,.07,s,o*.53,0,.26);for(let l=0;l<3;l++)ce(r,.04,.055,.26,bt,o*.526,-.15+l*.15,-.1)}if(i>1){ce(r,.77,.13,.72,ct,0,.55);for(let o of[-1,1])ce(r,.12,.17,.59,s,o*.26,.56)}Xa(n,e,0,.85,.54)}function ud(n,e=1,t=null){a0[n]||(n="pulse");let i=Su();i.name=`tower-${n}-${e}`,i.userData.type=n,i.userData.level=e,i.userData.branch=t;let s=a0[n];QS(i,s,e);let r=lt(i,0,n==="arc"?.63:.82);if(i.userData.turret=r,{pulse:e1,arc:t1,cryo:i1,rail:n1,mortar:s1}[n](i,r,s,e),t){let o=/power|damage|over|pierc|sniper|volt|shatter|burst|nova|barrage|assault|focus|a$|left/i.test(String(t)),a=Jt(s);if(o)for(let l of[-1,1])ce(r,.105,.34,.5,Cn,l*.58,.65,-.4,-.18,0,l*-.18),ce(r,.034,.28,.045,a,l*.6,.69,-.15,0,0,l*-.18);else{let l=$i(i,lt(i,0,.67),"y",.28);for(let c=0;c<4;c++)gt(l,.76,.025,a,0,0,0,Math.PI/2,0,c*Math.PI/2,1.12);for(let c of[-1,1])ce(r,.12,.4,.41,Va,c*.61,.35,-.28,0,0,c*.15)}}return Tu(i)}function l0(n){let e=Jt("#ff7654",4);for(let t of[-.46,.46]){let i=$i(n,lt(n,0,.25,t),"x",6),s=pt(i,.25,.13,bt,0,0,0,16);s.rotation.z=Math.PI/2;for(let r of[-.08,.08]){gt(i,.211,.027,e,r,0,0,0,Math.PI/2);let o=pt(i,.084,.018,ct,r,0,0,8);o.rotation.z=Math.PI/2;for(let a=0;a<3;a++){let l=a*Yi/3;wi(i,[r,0,0],[r,Math.sin(l)*.18,Math.cos(l)*.18],.022,ii)}}}ce(n,.23,.25,.66,ct,0,.31,-.02,-.1),ce(n,.24,.12,.46,ii,0,.5,.14,-.27),ce(n,.18,.18,.27,bt,0,.67,-.03,-.6),Ii(n,Is(.123,1),ct,0,.77,.14),ce(n,.145,.04,.06,e,0,.79,.24);for(let t of[-1,1])ce(n,.045,.048,.57,e,t*.145,.39,-.04),wi(n,[t*.16,.26,-.44],[t*.17,.48,.15],.028,kt),wi(n,[t*.12,.57,.28],[t*.075,.68,-.02],.035,bt);ce(n,.14,.05,.05,e,0,.39,.62),n.userData.body=n}function r1(n){let e=Jt("#ff9c5d"),t=lt(n,0,.82);n.userData.body=t,ce(t,.35,.23,.64,ct,0,0,.02,-.08),ce(t,.2,.13,.42,bt,0,.17,-.04,-.1),ce(t,.25,.055,.06,e,0,.03,.36);for(let i of[-1,1]){let s=lt(t,i*.43,0,-.13);s.rotation.y=i*-.38,s.rotation.z=i*-.15,ce(s,.63,.11,.34,ii),ce(s,.48,.035,.048,e,i*.035,.075,.12),ce(s,.24,.13,.46,ct,i*.28,-.04,-.06,.13);let r=$i(n,lt(s,i*.24,-.08,-.08),"y",i*4);gt(r,.17,.036,kt),gt(r,.133,.018,e,0,-.025);for(let o=0;o<3;o++)ce(r,.25,.02,.052,bt,0,0,0,0,o*Math.PI/3);wi(t,[i*.12,-.1,-.21],[i*.45,-.26,-.26],.029,kt)}ce(t,.075,.1,.32,bt,0,-.19,.23),ce(t,.04,.046,.06,e,0,-.19,.42),Ii(t,Is(.085,1),e,0,-.19,-.06)}function o1(n){let e=Jt("#ff5470"),t=lt(n,0,.63);n.userData.body=t,ce(t,.61,.32,.8,ii),ce(t,.47,.15,.59,ct,0,.23,-.04,-.1),ce(t,.33,.095,.17,bt,0,.37,.12),ce(t,.3,.036,.04,e,0,.37,.215);for(let i of[-1,1])for(let s of[-.3,.3]){let r=lt(n,i*.33,.56,s),o=pt(r,.12,.13,kt,0,0,0,8);o.rotation.z=Math.PI/2,wi(r,[0,0,0],[i*.2,-.08,s>0?.13:-.13],.068,ct),wi(r,[i*.2,-.08,s>0?.13:-.13],[i*.24,-.45,s>0?.19:-.19],.044,kt),ce(r,.17,.08,.28,bt,i*.24,-.49,s>0?.19:-.19),ce(r,.08,.05,.14,e,i*.24,-.443,s>0?.22:-.16)}for(let i of[-1,1]){ce(t,.09,.17,.62,ct,i*.35,.07),ce(t,.027,.046,.48,e,i*.41,.1);for(let s=0;s<3;s++)ce(t,.025,.09,.09,bt,i*.406,-.03,-.2+s*.17)}}function a1(n){let e=Jt("#d586ff"),t=lt(n,0,.7);n.userData.body=t,pt(t,.52,.3,ii,0,0,0,8,.42),pt(t,.35,.21,ct,0,.24,0,8,.24),Ii(t,Is(.2,1),e,0,.43);let i=$i(n,lt(t,0,.5),"y",-.6);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=lt(t,Math.sin(r)*.46,0,Math.cos(r)*.46);o.rotation.y=r,ce(o,.3,.39,.27,ct,0,.05,.12,-.24),ce(o,.22,.065,.035,e,0,.17,.28),ce(o,.35,.11,.5,bt,0,-.3,.03),gt(o,.14,.025,e,0,-.37,.04),pt(o,.11,.07,ii,0,-.3,.04,8),wi(o,[0,-.1,0],[0,-.25,-.15],.043,Cn),gt(i,.55,.025,e,0,0,0,Math.PI/2,0,r,1)}gt(t,.42,.025,kt,0,.15),gt(t,.66,.016,Jt("#d586ff",2),0,.03,0,0,0,0,Math.PI),gt(t,.66,.016,Jt("#d586ff",2),0,.03,0,0,Math.PI/2,0,Math.PI)}function l1(n){let e=Jt("#ff5140",4.5),t=lt(n,0,0);n.userData.body=t;let i=lt(t);n.userData.armorPanels=i,ce(t,3.75,.68,1.1,ii,0,3.25,0),ce(t,3.2,.33,1.25,ct,0,3.71,-.04,.08),ce(t,2.5,.11,.07,e,0,3.42,.64),ce(t,1.35,.45,.86,bt,0,2.88,.06),ce(t,.86,.075,.06,e,0,2.98,.52);let s=lt(t,0,2.88,.55);n.userData.exposedCore=s,s.visible=!1,gt(s,.31,.043,Cn,0,0,0,0),gt(s,.24,.019,Jt("#ffba68",2.6),0,0,.035,0),Ii(s,Is(.19,1),Jt("#fff0a2",3.2),0,0,.1);for(let o=0;o<4;o++){let a=o*Math.PI/2;wi(s,[Math.sin(a)*.19,Math.cos(a)*.19,.05],[Math.sin(a)*.37,Math.cos(a)*.37,-.025],.027,kt)}for(let o of[-1,1]){ce(t,.73,1.13,.94,ct,o*1.56,2.8,0,0,0,o*.1),ce(i,.93,.21,1.16,ct,o*1.49,3.49,.04,0,0,o*-.09),ce(i,.64,.11,.045,e,o*1.49,3.52,.646,0,0,o*-.09);let a=pt(t,.32,.9,bt,o*1.66,2.07,0,12);a.rotation.z=Math.PI/2,gt(t,.24,.035,e,o*2.13,2.07,0,0,Math.PI/2),ce(t,.62,1.33,.8,ii,o*1.78,1.3,-.1,.12,0,o*.03),ce(t,.9,.24,1.44,bt,o*1.81,.21,.25),ce(t,.79,.28,1.02,ct,o*1.81,.44,.2,-.12),ce(t,.67,.045,.12,e,o*1.81,.37,.98);for(let l=0;l<4;l++)ce(i,.76,.18,.16,ct,o*1.78,.82+l*.29,.37,-.12),ce(i,.42,.035,.03,e,o*1.78,.85+l*.29,.466);wi(t,[o*1.34,2.75,-.44],[o*1.36,.65,-.36],.078,Cn),wi(t,[o*2.02,2.62,-.35],[o*2.15,.72,-.3],.07,kt);for(let l of[-.43,.43]){let c=lt(t,o*1.49,3.76,l);pt(c,.25,.34,bt,0,.04,0,12),gt(c,.21,.03,e,0,.23),pt(c,.12,.12,e,0,.18,0,8)}for(let l=0;l<4;l++)ce(t,.12,.26,.035,bt,o*(.87+l*.2),3.68,.615);Wa(t,[[o*.69,3.03,-.54],[o*1.03,2.49,-.68],[o*1.49,2.59,-.47]],Jt("#ff7a38",2.5),.045)}let r=$i(n,lt(t,0,4.08),"y",.2);for(let o=0;o<4;o++)gt(r,.84,.045,kt,0,0,0,Math.PI/2,0,o*Math.PI/2,1.05),gt(r,.75,.018,e,0,.02,0,Math.PI/2,0,o*Math.PI/2,1.05);Ii(r,Is(.24,1),e,0,.02),n.userData.muzzle=lt(t,0,2.95,.64)}function c1(n,e){let t=e==="boss"?"#ff9869":"#ba8dff",i=`containment:${t}`;ao.has(i)||ao.set(i,new On({color:t,emissive:t,emissiveIntensity:.3,metalness:.08,roughness:.19,clearcoat:1,transparent:!0,opacity:.06,depthWrite:!1,side:Kt}));let s=lt(n,0,e==="boss"?2.18:.74);s.name=`${e}-containment-shield`,n.userData.shield=s,s.scale.set(...e==="boss"?[2.52,2.31,1.42]:[.94,.78,.94]);let r=sr("containment-sphere",()=>new Js(1,24,16)),o=Ii(s,r,ao.get(i));o.castShadow=!1,o.receiveShadow=!1;let a=Jt(t,1.25);for(let l=0;l<3;l++){let c=lt(s);c.rotation.set(l===1?Math.PI/2:0,l===2?Math.PI/2:0,0);for(let h=0;h<3;h++){let f=gt(c,1.005,.008,a,0,0,0,0,0,h*Yi/3+l*.31,.62);f.castShadow=!1}}}function u0(n){let e=Su();return e.name=`enemy-${n}`,e.userData.type=n,({cycle:l0,drone:r1,walker:o1,carrier:a1,boss:l1}[n]||l0)(e),(n==="carrier"||n==="boss")&&c1(e,n),Tu(e)}function h0(){let n=Su();n.name="reactor";let e=Jt("#53edff",2.6),t=Jt("#7fa9ff",1.5);pt(n,2.5,.35,bt,0,.175,0,12,2.32),pt(n,2.16,.22,ct,0,.46,0,12,2.02),gt(n,2.08,.035,e,0,.585),pt(n,1.52,.7,ii,0,.9,0,12,1.36),pt(n,1.25,.2,kt,0,1.3,0,12),pt(n,.65,4.65,bt,0,3.65,0,12,.47),pt(n,.22,7.6,e,0,5.1,0,12,.13),pt(n,.075,2.1,t,0,9.74,0,8,.015);for(let o=0;o<6;o++){let a=o*Yi/6,l=lt(n,Math.sin(a)*1.4,0,Math.cos(a)*1.4);l.rotation.y=a,ce(l,.63,.72,.82,ct,0,.87,.27),ce(l,.23,.08,.63,e,0,1.27,.28);let c=lt(l,0,1.15,.06);c.rotation.x=-.12,Ii(c,Ga(.13,.36,5.5,4),ii,0,2.75,0,0,Math.PI/4),ce(c,.07,4.8,.045,e,0,2.72,.23),ce(c,.24,1.1,.36,ct,0,.8,.1),ce(c,.21,.22,.26,kt,0,4.63,.04),wi(l,[0,.75,.66],[0,4.42,-.32],.065,kt),Wa(l,[[0,1.05,.48],[.24,2.18,.7],[0,3.31,.12]],t,.04);for(let h=0;h<3;h++)ce(l,.21,.095,.1,bt,0,.68+h*.17,.725)}for(let o=0;o<5;o++){let a=2.25+o*1.25,l=.8+Math.sin(o*.8)*.38,c=$i(n,lt(n,0,a),"y",(o%2?-1:1)*(.15+o*.03));gt(c,l,.065,ct),gt(c,l-.1,.024,o%2?t:e,0,.06);for(let h=0;h<3;h++){let f=h*Yi/3;ce(c,.19,.3,.19,bt,Math.sin(f)*l,0,Math.cos(f)*l,0,f),ce(c,.07,.16,.07,e,Math.sin(f)*(l+.1),0,Math.cos(f)*(l+.1),0,f)}}let i=$i(n,lt(n,0,7.45),"y",.27);c0(n,Ii(i,Is(.61,1),e)),gt(i,1.01,.045,kt,0,0,0,0,0,Math.PI/5),gt(i,.89,.022,t,0,0,0,0,Math.PI/2.6);let s=$i(n,lt(n,0,8.8),"y",-.11);s.rotation.z=.11;for(let o=0;o<6;o++){let a=o*Yi/6;gt(s,2.05,.14,ct,0,Math.sin(a)*.18,0,Math.PI/2,0,a,.76),gt(s,1.87,.035,e,0,Math.sin(a)*.18-.035,0,Math.PI/2,0,a,.76),ce(s,.19,.64,.34,bt,Math.sin(a)*2.05,Math.sin(a)*.18,Math.cos(a)*2.05,0,a)}let r=$i(n,lt(n,0,10.45),"y",.09);for(let o=0;o<3;o++){let a=o*Yi/3,l=lt(r,Math.sin(a)*.48,0,Math.cos(a)*.48);l.rotation.y=a,Ii(l,Ga(.018,.13,1.9,4),ct,0,0,0,.16,Math.PI/4),ce(l,.036,1.4,.025,e,0,-.12,.1,.16)}return Tu(n)}function f0(){let n=Su();n.name="portal";let e=Jt("#ffa667",3),t=Jt("#ffddb5",3.5),i=lt(n,0,2.4);for(let r=0;r<6;r++){let o=r*Yi/6+Math.PI/6,a=(r+1)*Yi/6+Math.PI/6,l=[Math.cos(o)*2.1,Math.sin(o)*2.1,0],c=[Math.cos(a)*2.1,Math.sin(a)*2.1,0];wi(i,l,c,.2,ct,6),wi(i,[l[0]*.88,l[1]*.88,.17],[c[0]*.88,c[1]*.88,.17],.045,e,6);let h=o+.035,f=a-.035;wi(i,[Math.cos(h)*2.26,Math.sin(h)*2.26,-.07],[Math.cos(f)*2.26,Math.sin(f)*2.26,-.07],.041,kt,6);let u=lt(i,l[0],l[1],0);u.rotation.z=o,ce(u,.44,.49,.6,bt),ce(u,.25,.32,.09,ct,0,0,.33),ce(u,.075,.19,.035,t,0,0,.393)}for(let r of[-1,1]){ce(n,.86,.3,1.41,bt,r*2.1,.15),ce(n,.6,1.73,.76,ct,r*2.1,1.09,-.06,0,0,r*.08),ce(n,.13,1.31,.07,e,r*2.15,1.14,.35,0,0,r*.08),ce(n,.73,.23,.92,ii,r*2.03,1.96,-.02),pt(n,.14,.34,Cn,r*2.08,2.24,-.07,8);for(let o=0;o<4;o++)ce(n,.38,.06,.12,bt,r*2.1,.7+o*.22,.375);wi(n,[r*2.28,.31,-.55],[r*1.94,2.06,-.25],.08,kt)}let s=$i(n,lt(i,0,0,-.04),"z",.15);for(let r=0;r<3;r++)gt(s,1.63,.021,e,0,0,0,0,0,r*Yi/3,1.2),gt(s,1.56,.011,t,0,0,.055,0,0,r*Yi/3+.13,.78);return n.userData.opening=lt(n,0,2.4),Tu(n)}var qa=class n extends yt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Si,f=new R,u=new R,d=new R,m=new He,v=new R(0,0,-1),p=new St,g=new R,y=new R,_=new St,x=new He,M=new Pt(r,o,{samples:c,type:Et}),S=new Tt({name:l.name!==void 0?l.name:"unspecified",uniforms:Rn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});S.uniforms.tDiffuse.value=M.texture,S.uniforms.color.value=s,S.uniforms.textureMatrix.value=x,this.material=S,this.onBeforeRender=function(w,b,E){let A=this.getReflectionCamera(E);if(u.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(E.matrixWorld),m.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(m),g.subVectors(u,d),g.dot(f)>0===!0&&this.forceUpdate===!1)return;g.reflect(f).negate(),g.add(u),m.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(d),y.subVectors(u,v),y.reflect(f).negate(),y.add(u),A.position.copy(g),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(f),A.lookAt(y),A.far=E.far,A.updateMatrixWorld(),A.projectionMatrix.copy(E.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(A.projectionMatrix),x.multiply(A.matrixWorldInverse),x.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(f,u),h.applyMatrix4(A.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=A.projectionMatrix;A.isOrthographicCamera?(_.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],_.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],_.z=-E.far,_.w=1):(_.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],_.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],_.z=-1,_.w=(1+I.elements[10])/I.elements[14]),p.multiplyScalar(2/p.dot(_)),I.elements[2]=p.x,I.elements[6]=p.y,A.isOrthographicCamera?(I.elements[10]=p.z-a,I.elements[14]=p.w-1):(I.elements[10]=p.z+1-a,I.elements[14]=p.w),i.visible=!1;let F=w.getRenderTarget(),B=w.xr.enabled,N=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(M),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(b,A),w.xr.enabled=B,w.shadowMap.autoUpdate=N,w.setRenderTarget(F);let k=E.viewport;k!==void 0&&w.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()},this.getReflectionCamera=function(w){let b=this._reflectionCameras.get(w);return b===void 0&&(b=w.clone(),this._reflectionCameras.set(w,b)),b}}};qa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var d0=Math.PI*2,m0=new ps(1,1,1);function u1(n){return()=>(n=Math.imul(n,1664525)+1013904223|0,(n>>>0)/4294967296)}function lo(n,e=.38,t=.75){return new fn({color:n,roughness:e,metalness:t})}function Ya(n,e=3){return new fn({color:n,emissive:n,emissiveIntensity:e,roughness:.3,metalness:.25})}function jt(n,e,t,i,s,r,o,a,l=0){let c=new yt(m0,e);return c.position.set(t,i,s),c.scale.set(r,o,a),c.rotation.z=l,n.add(c),c}function $t(n,e,t,i=0,s=0,r=0){let o=new yt(e,t);return o.position.set(i,s,r),n.add(o),o}function h1(n){n.updateMatrixWorld(!0);let e=new Map;n.traverse(t=>{if(!t.isMesh)return;e.has(t.material)||e.set(t.material,[]);let i=t.geometry.clone().applyMatrix4(t.matrixWorld);if(i.index){let s=i.toNonIndexed();i.dispose(),i=s}for(let s of Object.keys(i.attributes))["position","normal","uv"].includes(s)||i.deleteAttribute(s);e.get(t.material).push(i)}),n.clear();for(let[t,i]of e){let s=Mu(i,!1);if(i.forEach(o=>o.dispose()),!s)continue;let r=new yt(s,t);r.castShadow=!0,r.receiveShadow=!0,n.add(r)}}var p0=`varying vec2 vUv; varying vec3 vWorld;
void main(){vUv=uv; vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,f1=`uniform float time; uniform vec3 tint; varying vec2 vUv; varying vec3 vWorld;
float hash(float n){return fract(sin(n*127.1)*43758.5453);}
void main(){
 float streak=pow(.5+.5*sin(vUv.x*185.+sin(vUv.x*49.)*7.+time*2.),7.);
 float flow=pow(.5+.5*sin(vUv.y*56.+time*8.+vUv.x*38.),12.);
 float edges=smoothstep(0.,.08,vUv.x)*(1.-smoothstep(.92,1.,vUv.x));
 float foam=pow(vUv.y,8.)*.4+pow(1.-vUv.y,12.)*.8;
 float light=.12+streak*.8+flow*.3+foam;
 gl_FragColor=vec4(tint*light*2.8,edges*(.35+light*.45));
}`,d1=`uniform float time; varying vec2 vUv; varying vec3 vWorld;
void main(){
 vec2 p=vWorld.xz;float veins=abs(sin(p.x*1.8+sin(p.y*1.7+time*.13)))*abs(sin(p.y*2.6+cos(p.x*1.25-time*.1)));
 float fissure=1.-smoothstep(.025,.14,veins);float pulse=.78+.22*sin(time*1.4+p.x*.7+p.y*.4);
 vec3 crust=vec3(.065,.018,.013);vec3 heat=mix(vec3(1.5,.12,.015),vec3(3.2,1.1,.13),pow(fissure,3.));
 gl_FragColor=vec4(mix(crust,heat*pulse,fissure),1.);
}`;function g0(n,e,t=0){let i=Cs[t],s=u1(2107+t*771),r=($,U)=>ld(t,$,U),o=new hi,a=new hi,l=[];o.add(a),n.add(o);let c=[{glow:"#49e5ff",secondary:"#327eae",rock:"#182d3b",surface:"#162431",sky:"#050d17",fog:"#081824"},{glow:"#69ffe4",secondary:"#2379c4",rock:"#213747",surface:"#243946",sky:"#06151e",fog:"#123443"},{glow:"#ff8a48",secondary:"#c33549",rock:"#282630",surface:"#302b34",sky:"#140c19",fog:"#291326"}][t];n.background=new Le(c.sky),n.fog=new Yo(c.fog,.0085);let h=lo(c.surface),f=lo(c.rock,.68,.4),u=lo("#0b131e",.32,.7),d=lo("#597582",.28,.86),m=Ya(c.glow,2.2),v=Ya(c.secondary,.65),p=Ya("#ff8741",3),g=Ya(c.glow,1.05),y=new On({color:"#0a1b24",metalness:.75,roughness:.2,clearcoat:1,clearcoatRoughness:.12}),_=[h,lo(c.surface,.44),lo(c.rock,.53)],x=bi.tile/2;for(let $=0;$<bi.rows;$++)for(let U=0;U<bi.cols;U++){if(!bu(t,U,$))continue;let X=(U-8.5)*bi.tile,H=($-5.5)*bi.tile,ne=r(X,H),ge=new Oi(bi.tile-.065,bi.tile-.065,2,2);ge.rotateX(-Math.PI/2);let de=ge.attributes.position;for(let Ae=0;Ae<de.count;Ae++)de.setY(Ae,r(X+de.getX(Ae),H+de.getZ(Ae)));if(ge.computeVertexNormals(),$t(a,ge,_[Math.floor(s()*3)],X,0,H),$===0||$===11||U===0||U===17||t===1&&(U===7||U===11)){let Ae=Math.min(r(X-x,H-x),r(X+x,H-x),r(X-x,H+x),r(X+x,H+x))-.04;jt(a,f,X,(Ae-6)/2,H,2.34,Ae+6,2.34);let Re=t===1&&(U===7||U===11),oe=U===0||Re&&U===11?X-x+.08:U===17||Re&&U===7?X+x-.08:X,he=$===0?H-x+.08:$===11?H+x-.08:H;jt(a,m,oe,r(oe,he)+.06,he,U===0||U===17||Re?.045:2.34,.055,$===0||$===11?.045:2.34),(U+$)%2===0&&(jt(a,u,X,Ae-1.3,H,2.1,1.8,2.48),jt(a,v,X,Ae-.75,H+($===0?-1.255:1.255),1.65,.07,.045))}}if(t===1){jt(a,f,-12,-4.8,0,19.2,2,28.8),jt(a,f,13.2,-4.8,0,16.8,2,28.8);for(let U of[-1,1])for(let X=0;X<16;X++){let H=-14.2+X*1.9,ne=U<0?-3.1:5.5,ge=Math.min(r(ne-.95,H),r(ne+.95,H))-.2-s()*.25,de=$t(a,new Ri(.65+s()*.2,.9+s()*.4,ge+10.8,5),f,ne,(ge-10.8)/2,H);de.rotation.y=s()*Math.PI,$t(a,new Ri(.35,.7,4+s()*3,5),u,ne+U*.15,-7,H+.5).rotation.z=U*.12}let $=(2-5.5)*bi.tile;for(let U of[-1,1]){let X=[];for(let ne=0;ne<=16;ne++){let ge=ne/16,de=-3.5+ge*9.4,Ae=r(de,$)-2.9+Math.sin(ge*Math.PI)*2.45;if(X.push(new R(de,Ae,$+U*1.3)),ne%2===0){let Re=r(de,$)-.12;jt(a,d,de,(Ae+Re)/2,$+U*1.3,.095,Re-Ae,.095),jt(a,u,de,Re+.42,$+U*1.3,.075,.85,.075)}}$t(a,new ms(new jn(X),36,.14,7,!1),d);let H=X.map(ne=>new R(ne.x,r(ne.x,$)+.68,ne.z));$t(a,new ms(new jn(H),24,.045,5,!1),g)}}else jt(a,f,0,-4.8,0,43.2,2,28.8);for(let $=0;$<12;$++)for(let U=0;U<18;U++){if(!bu(t,U,$))continue;let X=(U-8.5)*2.4,H=($-5.5)*2.4;for(let ne of[-1,1])for(let ge of[-1,1]){let de=X+ne*.79,Ae=H+ge*.79;jt(a,v,de,r(de,Ae)+.025,Ae,.25,.018,.035),jt(a,v,de+ne*.11,r(de,Ae)+.025,Ae-ge*.1,.03,.018,.23)}}let M=i.path.map(([$,U])=>new R(($-8.5)*2.4,0,(U-5.5)*2.4)),S=[];for(let $=0;$<M.length-1;$++){let U=M[$],X=M[$+1],H=U.distanceTo(X),ne=Math.ceil(H/.6),ge=X.clone().sub(U).normalize(),de=new R(-ge.z,0,ge.x);for(let Ae=0;Ae<ne;Ae++){let Re=U.clone().lerp(X,Ae/ne),oe=U.clone().lerp(X,(Ae+1)/ne),he=[],fe=[],Te=[Re.clone().addScaledVector(de,-1.1),Re.clone().addScaledVector(de,1.1),oe.clone().addScaledVector(de,-1.1),oe.clone().addScaledVector(de,1.1)];for(let Ue of Te)he.push(Ue.x,r(Ue.x,Ue.z)+.065,Ue.z);fe.push(0,0,1,0,0,1,1,1);let G=new ft;G.setAttribute("position",new _t(he,3)),G.setAttribute("uv",new _t(fe,2)),G.setIndex([0,1,2,1,3,2]),G.computeVertexNormals(),$t(a,G,y);for(let Ue of[-1,1]){let Fe=Re.clone().addScaledVector(de,1.055*Ue),qe=oe.clone().addScaledVector(de,1.055*Ue);Fe.y=r(Fe.x,Fe.z)+.11,qe.y=r(qe.x,qe.z)+.11;let Qe=$t(a,new Ri(.025,.025,Fe.distanceTo(qe),4),m);Qe.position.copy(Fe).lerp(qe,.5),Qe.quaternion.setFromUnitVectors(new R(0,1,0),qe.sub(Fe).normalize())}if(Ae%5===0){let Ue=Re.clone().lerp(oe,.5);Ue.y=r(Ue.x,Ue.z)+.1;let Fe=$t(a,new Zs(.16,.45,3),v,Ue.x,Ue.y,Ue.z);Fe.rotation.x=Math.PI/2,Fe.rotation.z=Math.atan2(-ge.x,ge.z),Fe.scale.z=.1}S.push(new R(Re.x,r(Re.x,Re.z)+.2,Re.z))}}for(let $ of[-18,-9,0,9,18])for(let U of[-17.2,17.2]){let X=r($,U),H=$t(a,new Ri(.6,1.5,13,6),u,$,-5,U);jt(a,d,$,X-1,U,1.5,1.5,1.5),jt(a,g,$,X-.2,U,1.65,.1,1.65),jt(a,u,$,X+1,U,.35,2.5,.35),jt(a,m,$,X+1.4,U,.08,.85,.42);for(let ne=0;ne<3;ne++)$t(a,new hn(.67+ne*.09,.035,4,12),v,$,-ne*1.4-2,U).rotation.x=Math.PI/2}for(let $=0;$<86;$++){let U=s()*d0,X=49+s()*100,H=Math.cos(U)*X,ne=Math.sin(U)*X;if(ne>14&&Math.abs(H)<53)continue;let ge=2+s()*6,de=3+s()*6,Ae=9+s()**2*62;jt(a,u,H,Ae/2-9,ne,ge,Ae,de),jt(a,f,H+ge*.13,Ae/2-5,ne,ge*.43,Ae+5,de*.55),jt(a,v,H-ge/2-.025,Ae/2-9,ne+de/2,.045,Ae*.92,.045),jt(a,$%9===0?p:m,H+ge/2,Ae/2-9,ne-de/2,.06,Ae*.7,.055);for(let Re=1;Re<Ae/2;Re++)s()<.25||(jt(a,v,H,Re*2-9,ne+de/2+.015,ge*.8,.08,.02),Re%4===0&&jt(a,h,H,Re*2-9.4,ne,ge*1.12,.24,de*1.1));$%5===0&&($t(a,new Ri(.035,.09,6,5),d,H,Ae-6,ne),$t(a,new Js(.15,6,4),p,H,Ae-3,ne))}for(let $=0;$<3;$++)$t(a,new hn(22+$*.9,$===0?.3:.075,6,150,Math.PI*1.63),$===1?m:u,-38,20,-75).rotation.set(.1,-.3,-.4);let w=new hi;if(a.add(w),t>0)for(let $=0;$<75;$++){let U=(s()-.5)*64,X=(s()-.5)*46;if(Math.abs(U)<23&&Math.abs(X)<15)continue;let H=3+s()*11,ne=$t(w,new Ri(.5+s()*1.5,1+s()*2,H,t===2?5:6),f,U,-3+H/2,X);if(ne.rotation.z=(s()-.5)*.25,$%3===0){let ge=$t(w,new Zs(.3+s()*.5,2+s()*3,5),t===2?p:m,U,H-1,X);ge.rotation.z=(s()-.5)*.5}}for(let $ of[M[0],M.at(-1)]){let U=$===M.at(-1),X=$.x+(U?1.2:-.25),H=r(X,$.z),ne=$t(a,new Ri(U?4:2.8,U?3.5:2.4,.7,8),u,X,H-.35,$.z);$t(a,new hn(U?3.85:2.6,.055,5,8),m,X,H+.035,$.z).rotation.x=Math.PI/2,jt(a,u,$.x+(U?-1.4:1.4),H-.25,$.z,4,.5,2.3)}let b=[{x:-18,z:9.6,width:7.2,depth:9.6},{x:16.8,z:-12,width:9.6,depth:4.8}];if(t===2)for(let $ of b)for(let U=0;U<18;U++){let X=s()-.5,H=$.x+(U%2?X*($.width-1.2):(U%4?-1:1)*($.width/2-.65)),ne=$.z+(U%2?(U%4===1?-1:1)*($.depth/2-.65):X*($.depth-1.2)),ge=.65+s()*2.8;$t(a,new Ri(.15+s()*.35,.6+s()*.35,ge,5),f,H,r(H,ne)+ge/2-.45,ne).rotation.set((s()-.5)*.25,s()*d0,(s()-.5)*.3),U%5===0&&$t(a,new Zs(.13,ge*.7,4),p,H+.1,r(H,ne)+ge*.25,ne+.15)}h1(a);let E=h0(),A=M.at(-1);E.position.set(A.x+1.2,r(A.x,A.z),A.z),o.add(E);let P=f0(),I=M[0];P.position.set(I.x-.25,r(I.x,I.z),I.z),P.rotation.y=Math.PI/2,o.add(P);let F=[],B=[],N=t===1?[[-1.8,-8.5,7,Math.PI/2],[-1.8,8,8,Math.PI/2],[4.15,1,9,-Math.PI/2],[4.15,-11.3,5,-Math.PI/2],[-8,14.7,6],[13,14.7,5],[-28,-20,8]]:t===0?[[-17,-14.6,2],[6,14.6,2]]:[[-11,14.6,2],[13,-14.7,3]];for(let[$,U,X,H=0]of N){let ne=r($,U)+.05,ge=t===1?ne+10.75:12+s()*5,de=new Tt({vertexShader:p0,fragmentShader:f1,uniforms:{time:{value:0},tint:{value:new Le(t===2?"#ff5b21":"#39c6f2")}},transparent:!0,side:Kt,depthWrite:!1,blending:Ki}),Ae=$t(o,new Oi(X,ge,1,1),de,$,ne-ge/2,U);Ae.rotation.y=H,Ae.userData.photoMaterial=new On({color:t===2?"#a62c13":"#178899",emissive:t===2?"#ff4515":"#27c9ef",emissiveIntensity:1.6,roughness:.17,metalness:.15,side:Kt}),F.push(de);let Re=$t(o,new Oi(X*1.5,2),new fi({color:c.glow,transparent:!0,opacity:.09,side:Kt,depthWrite:!1,blending:Ki}),$,ne-ge+1,U);Re.rotation.y=H,Re.userData.noPhoto=!0}if(t===1){let $=new On({color:"#065f9c",emissive:"#0366a2",emissiveIntensity:.52,metalness:.45,roughness:.15,clearcoat:1}),U=$t(o,new Oi(7.2,100,1,1),$,1.2,-10.74,0);U.rotation.x=-Math.PI/2;for(let H=0;H<5;H++){let ne=$t(o,new Oi(.035+H*.008,100),Ya("#2cbbdd",.8),-1.4+H*1.25,-10.7,0);ne.rotation.x=-Math.PI/2}let X=new Tn("#199cff",140,27,2);X.position.set(1.2,-5,4),o.add(X)}if(t===2)for(let $ of b){let U=new Tt({vertexShader:p0,fragmentShader:d1,uniforms:{time:{value:0}},side:Kt}),X=new Oi($.width,$.depth,12,12);X.rotateX(-Math.PI/2);let H=X.attributes.position;for(let de=0;de<H.count;de++)H.setY(de,r($.x+H.getX(de),$.z+H.getZ(de))-.42);X.computeVertexNormals();let ne=$t(o,X,U,$.x,0,$.z);ne.userData.photoMaterial=new fn({color:"#6e1908",emissive:"#ff5b12",emissiveIntensity:1.7,metalness:.3,roughness:.24,side:Kt}),B.push(U);let ge=new Tn("#ff5b13",70,17,2);ge.position.set($.x,r($.x,$.z)+1,$.z),o.add(ge)}let k=new qa(new Oi(350,350),{clipBias:.003,textureWidth:1024,textureHeight:1024,color:t===2?3350823:2571853,multisample:0});k.rotation.x=-Math.PI/2,k.position.y=-11,o.add(k),k.userData.photoMaterial=new On({color:c.rock,metalness:.85,roughness:.17,clearcoat:1});let Y=new Float32Array(330*3);for(let $=0;$<330;$++)Y[$*3]=(s()-.5)*170,Y[$*3+1]=s()*64,Y[$*3+2]=(s()-.5)*170;let ie=new ft;ie.setAttribute("position",new vt(Y,3));let ue=new Jo(ie,new Hr({color:c.glow,size:.08,transparent:!0,opacity:.65,depthWrite:!1}));o.add(ue);let xe=new hi;o.add(xe);for(let $=0;$<14;$++){let U=new hi;jt(U,u,0,0,0,.45,.25,2.8),jt(U,m,0,0,1.5,.3,.13,1.8),U.position.set((s()-.5)*150,8+s()*20,-25-s()*100),xe.add(U),l.push({object:U,speed:2+s()*5})}let me=$t(o,new hn(3.1,.025,5,80),m,E.position.x,E.position.y+.07,E.position.z);me.rotation.x=Math.PI/2;let Me=new Tn("#56e6ff",180,30,2);Me.position.copy(E.position).add(new R(0,5,0)),o.add(Me);let Je=new Tn("#ff792f",120,22,2);Je.position.copy(P.position).add(new R(0,3,0)),o.add(Je);let ht=new Tn(c.glow,65,42,2);return ht.position.set(-6,10,8),o.add(ht),{root:o,reactor:E,portal:P,height:r,palette:c,roadPoints:S,abyss:k,update($,U,X=100){F.forEach(H=>H.uniforms.time.value=$),B.forEach(H=>H.uniforms.time.value=$),ue.rotation.y=$*.006;for(let H of l)H.object.position.x+=U*H.speed,H.object.position.x>95&&(H.object.position.x=-95);for(let H of[E,P])for(let ne of H.userData.rotors||[])ne.rotation[ne.userData.axis||"y"]+=U*(ne.userData.speed||.2);Me.intensity=170+Math.sin($*2)*15+(X<30?Math.sin($*14)*80:0),X<30?Me.color.set("#ff6948"):Me.color.set("#56e6ff")},dispose(){n.remove(o),o.remove(E,P),k.getRenderTarget().dispose();let $=new Set,U=new Set;o.traverse(X=>{X.geometry&&X.geometry!==m0&&$.add(X.geometry),X.material&&(Array.isArray(X.material)?X.material:[X.material]).forEach(H=>U.add(H)),X.userData.photoMaterial&&U.add(X.userData.photoMaterial)}),$.forEach(X=>X.dispose()),U.forEach(X=>X.dispose())}}}var p1=new R(0,1,0),m1=new Ri(1,1,1,6),g1=new hn(1,.018,4,64),wu=class{constructor(e){this.scene=e,this.particles=[],this.trails=[],this.rings=[],this.flashes=[],this.capacity=1400,this.mesh=new Ko(new da(1,0),new fi({color:16777215,transparent:!0,opacity:.9,blending:Ki,depthWrite:!1}),this.capacity),this.mesh.instanceMatrix.setUsage(Ff),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.userData.noPhoto=!0,e.add(this.mesh),this.dummy=new Zt;for(let t=0;t<6;t++){let i=new Tn(16777215,0,12,2);e.add(i),this.flashes.push({light:i,life:0,power:0})}}burst(e,t="#69e7ff",i=22,s=1){let r=new Le(t);for(let o=0;o<i&&this.particles.length<this.capacity;o++){let a=Math.random()*Math.PI*2,l=(1+Math.random()*5)*s;this.particles.push({x:e.x,y:e.y,z:e.z,vx:Math.cos(a)*l,vy:(1+Math.random()*5)*s,vz:Math.sin(a)*l,life:.4+Math.random()*.7,max:1.1,size:.025+Math.random()*.07*s,color:r})}this.flash(e,t,50*s)}flash(e,t,i=40){let s=this.flashes.reduce((r,o)=>r.life<o.life?r:o);s.light.position.copy(e),s.light.color.set(t),s.life=.22,s.power=i}beam(e,t,i,s=.045,r=.12){let o=t.clone().sub(e),a=new fi({color:i,transparent:!0,opacity:.95,blending:Ki,depthWrite:!1}),l=new yt(m1,a);l.position.copy(e).lerp(t,.5),l.quaternion.setFromUnitVectors(p1,o.clone().normalize()),l.scale.set(s,o.length(),s),this.scene.add(l),this.trails.push({obj:l,life:r,max:r})}lightning(e,t,i="#b89bff"){let s=e.clone(),r=Math.ceil(e.distanceTo(t)/.6);for(let o=1;o<=r;o++){let a=e.clone().lerp(t,o/r);o<r&&(a.x+=(Math.random()-.5)*.65,a.y+=(Math.random()-.5)*.65,a.z+=(Math.random()-.5)*.65),this.beam(s,a,i,.028,.15),s=a}}ring(e,t,i=3,s=.65){let r=new fi({color:t,transparent:!0,opacity:.9,blending:Ki,depthWrite:!1}),o=new yt(g1,r);o.rotation.x=-Math.PI/2,o.position.copy(e),o.userData.noPhoto=!0,this.scene.add(o),this.rings.push({obj:o,life:s,max:s,radius:i})}update(e){this.particles=this.particles.filter(t=>(t.life-=e,t.life<=0?!1:(t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vy-=e*6,t.vx*=Math.exp(-e*1.4),t.vz*=Math.exp(-e*1.4),!0))),this.particles.forEach((t,i)=>{this.dummy.position.set(t.x,t.y,t.z),this.dummy.scale.setScalar(t.size*Math.min(1,t.life*4)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(i,this.dummy.matrix),this.mesh.setColorAt(i,t.color)}),this.mesh.count=this.particles.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.trails=this.trails.filter(t=>(t.life-=e,t.life<=0?(this.scene.remove(t.obj),t.obj.material.dispose(),!1):(t.obj.material.opacity=t.life/t.max,!0))),this.rings=this.rings.filter(t=>{if(t.life-=e,t.life<=0)return this.scene.remove(t.obj),t.obj.material.dispose(),!1;let i=1-t.life/t.max;return t.obj.scale.setScalar(Math.max(.01,t.radius*(1-(1-i)**3))),t.obj.material.opacity=(1-i)**2,!0}),this.flashes.forEach(t=>{t.life=Math.max(0,t.life-e),t.light.intensity=t.power*t.life/.22})}clear(){this.particles=[],this.update(10)}},Eu=class{constructor(){this.enabled=!0,this.ctx=null,this.lastShot=0}start(){if(this.ctx){this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.22:0,this.master.connect(this.ctx.destination),this.drone=this.ctx.createGain(),this.drone.gain.value=.055,this.drone.connect(this.master),[55,82.4069,110.15].forEach((t,i)=>{let s=this.ctx.createOscillator();s.type=i?"sine":"triangle",s.frequency.value=t,s.connect(this.drone),s.start()}),this.timer=setInterval(()=>{if(!this.enabled||document.hidden)return;let t=[220,0,329.63,0,293.66,0,164.81,0];this.step=((this.step||0)+1)%8,t[this.step]&&this.tone(t[this.step],.26,.035,"sine")},320)}catch{this.enabled=!1}}toggle(){return this.enabled=!this.enabled,this.master&&this.master.gain.setTargetAtTime(this.enabled?.22:0,this.ctx.currentTime,.1),this.enabled}tone(e,t,i=.15,s="sine",r=e*.5){if(!this.ctx||!this.enabled)return;let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=s,a.frequency.setValueAtTime(e,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.008),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(this.master),a.start(o),a.stop(o+t+.03)}play(e){if(e==="shot"){if(!this.ctx||this.ctx.currentTime-this.lastShot<.09)return;this.lastShot=this.ctx.currentTime,this.tone(500,.1,.045,"triangle",100)}e==="build"&&this.tone(260,.3,.2,"sine",1040),e==="kill"&&this.tone(95,.18,.12,"sawtooth",24),e==="wave"&&(this.tone(110,.8,.2,"sawtooth",165),setTimeout(()=>this.tone(220,.5,.1,"sine",330),180)),e==="nova"&&(this.tone(45,1.4,.5,"sawtooth",22),this.tone(1100,1.6,.12,"sine",45)),e==="rail"&&this.tone(1800,.23,.09,"sawtooth",60)}};var co=Math.pow(2,-24),$a=Symbol("SKIP_GENERATION"),Au={strategy:0,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[$a]:!1};function Ht(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function hd(n){let e=-1,t=-1/0;for(let i=0;i<3;i++){let s=n[i+3]-n[i];s>t&&(t=s,e=i)}return e}function fd(n,e){e.set(n)}function dd(n,e,t){let i,s;for(let r=0;r<3;r++){let o=r+3;i=n[r],s=e[r],t[r]=i<s?i:s,i=n[o],s=e[o],t[o]=i>s?i:s}}function Za(n,e,t){for(let i=0;i<3;i++){let s=e[n+2*i],r=e[n+2*i+1],o=s-r,a=s+r;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function uo(n){let e=n[3]-n[0],t=n[4]-n[1],i=n[5]-n[2];return 2*(e*t+t*i+i*e)}function At(n,e){return e[n+15]===65535}function Dt(n,e){return e[n+6]}function Bt(n,e){return e[n+14]}function Lt(n){return n+8}function Ft(n,e){let t=e[n+6];return n+t*8}function Ps(n,e){return e[n+7]}function Ru(n,e,t,i,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,f=1/0,u=1/0,d=1/0,m=-1/0,v=-1/0,p=-1/0,g=n.offset||0;for(let y=(e-g)*6,_=(e+t-g)*6;y<_;y+=6){let x=n[y+0],M=n[y+1],S=x-M,w=x+M;S<r&&(r=S),w>l&&(l=w),x<f&&(f=x),x>m&&(m=x);let b=n[y+2],E=n[y+3],A=b-E,P=b+E;A<o&&(o=A),P>c&&(c=P),b<u&&(u=b),b>v&&(v=b);let I=n[y+4],F=n[y+5],B=I-F,N=I+F;B<a&&(a=B),N>h&&(h=N),I<d&&(d=I),I>p&&(p=I)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,s[0]=f,s[1]=u,s[2]=d,s[3]=m,s[4]=v,s[5]=p}var es=32,_1=(n,e)=>n.candidate-e.candidate,Ds=new Array(es).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Cu=new Float32Array(6);function _0(n,e,t,i,s,r){let o=-1,a=0;if(r===0)o=hd(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=hd(n),o!==-1&&(a=y1(t,i,s,o));else if(r===2){let l=uo(n),c=1.25*s,h=t.offset||0,f=(i-h)*6,u=(i+s-h)*6;for(let d=0;d<3;d++){let m=e[d],g=(e[d+3]-m)/es;if(s<es/4){let y=[...Ds];y.length=s;let _=0;for(let M=f;M<u;M+=6,_++){let S=y[_];S.candidate=t[M+2*d],S.count=0;let{bounds:w,leftCacheBounds:b,rightCacheBounds:E}=S;for(let A=0;A<3;A++)E[A]=1/0,E[A+3]=-1/0,b[A]=1/0,b[A+3]=-1/0,w[A]=1/0,w[A+3]=-1/0;Za(M,t,w)}y.sort(_1);let x=s;for(let M=0;M<x;M++){let S=y[M];for(;M+1<x&&y[M+1].candidate===S.candidate;)y.splice(M+1,1),x--}for(let M=f;M<u;M+=6){let S=t[M+2*d];for(let w=0;w<x;w++){let b=y[w];S>=b.candidate?Za(M,t,b.rightCacheBounds):(Za(M,t,b.leftCacheBounds),b.count++)}}for(let M=0;M<x;M++){let S=y[M],w=S.count,b=s-S.count,E=S.leftCacheBounds,A=S.rightCacheBounds,P=0;w!==0&&(P=uo(E)/l);let I=0;b!==0&&(I=uo(A)/l);let F=1+1.25*(P*w+I*b);F<c&&(o=d,c=F,a=S.candidate)}}else{for(let x=0;x<es;x++){let M=Ds[x];M.count=0,M.candidate=m+g+x*g;let S=M.bounds;for(let w=0;w<3;w++)S[w]=1/0,S[w+3]=-1/0}for(let x=f;x<u;x+=6){let w=~~((t[x+2*d]-m)/g);w>=es&&(w=es-1);let b=Ds[w];b.count++,Za(x,t,b.bounds)}let y=Ds[es-1];fd(y.bounds,y.rightCacheBounds);for(let x=es-2;x>=0;x--){let M=Ds[x],S=Ds[x+1];dd(M.bounds,S.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let x=0;x<es-1;x++){let M=Ds[x],S=M.count,w=M.bounds,E=Ds[x+1].rightCacheBounds;S!==0&&(_===0?fd(w,Cu):dd(w,Cu,Cu)),_+=S;let A=0,P=0;_!==0&&(A=uo(Cu)/l);let I=s-_;I!==0&&(P=uo(E)/l);let F=1+1.25*(A*_+P*I);F<c&&(o=d,c=F,a=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function y1(n,e,t,i){let s=0,r=n.offset;for(let o=e,a=e+t;o<a;o++)s+=n[(o-r)*6+i*2];return s/t}var ho=class{constructor(){this.boundingData=new Float32Array(6)}};function y0(n,e,t,i,s,r){let o=i,a=i+s-1,l=r.pos,c=r.axis*2,h=t.offset||0;for(;;){for(;o<=a&&t[(o-h)*6+c]<l;)o++;for(;o<=a&&t[(a-h)*6+c]>=l;)a--;if(o<a){for(let f=0;f<e;f++){let u=n[o*e+f];n[o*e+f]=n[a*e+f],n[a*e+f]=u}for(let f=0;f<6;f++){let u=o-h,d=a-h,m=t[u*6+f];t[u*6+f]=t[d*6+f],t[d*6+f]=m}o++,a--}else return o}}var b0,Iu,pd,M0,b1=Math.pow(2,32);function Pu(n){return"count"in n?1:1+Pu(n.left)+Pu(n.right)}function S0(n,e,t){return b0=new Float32Array(t),Iu=new Uint32Array(t),pd=new Uint16Array(t),M0=new Uint8Array(t),md(n,e)}function md(n,e){let t=n/4,i=n/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)b0[t+o]=r[o];if(s)return e.buffer?(M0.set(new Uint8Array(e.buffer),n),n+e.buffer.byteLength):(Iu[t+6]=e.offset,pd[i+14]=e.count,pd[i+15]=65535,n+32);{let{left:o,right:a,splitAxis:l}=e,c=n+32,h=md(c,o),f=n/32,d=h/32-f;if(d>b1)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Iu[t+6]=d,Iu[t+7]=l,md(h,a)}}function M1(n,e,t,i,s,r){let{maxDepth:o,verbose:a,maxLeafSize:l,strategy:c,onProgress:h}=s,f=n.primitiveBuffer,u=n.primitiveBufferStride,d=new Float32Array(6),m=!1,v=new ho;return Ru(e,t,i,v.boundingData,d),g(v,t,i,d),v;function p(y){h&&h((y-r.offset)/r.count)}function g(y,_,x,M=null,S=0){if(!m&&S>=o&&(m=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),x<=l||S>=o)return p(_+x),y.offset=_,y.count=x,y;let w=_0(y.boundingData,M,e,_,x,c);if(w.axis===-1)return p(_+x),y.offset=_,y.count=x,y;let b=y0(f,u,e,_,x,w);if(b===_||b===_+x)p(_+x),y.offset=_,y.count=x;else{y.splitAxis=w.axis;let E=new ho,A=_,P=b-_;y.left=E,Ru(e,A,P,E.boundingData,d),g(E,A,P,d,S+1);let I=new ho,F=b,B=x-P;y.right=I,Ru(e,F,B,I.boundingData,d),g(I,F,B,d,S+1)}return y}}function T0(n,e){let t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=n.getRootRanges(e.range),s=i[0],r=i[i.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,n.computePrimitiveBounds(o.offset,o.count,a),n._roots=i.map(l=>{let c=M1(n,a,l.offset,l.count,e,o),h=Pu(c),f=new t(32*h);return S0(0,c,f),f})}var Ls=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var gd=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},Rt=new gd;var Fs,po,fo=[],Du=new Ls(()=>new Xt);function w0(n,e,t,i,s,r){Fs=Du.getPrimitive(),po=Du.getPrimitive(),fo.push(Fs,po),Rt.setBuffer(n._roots[e]);let o=xd(0,n.geometry,t,i,s,r);Rt.clearBuffer(),Du.releasePrimitive(Fs),Du.releasePrimitive(po),fo.pop(),fo.pop();let a=fo.length;return a>0&&(po=fo[a-1],Fs=fo[a-2]),o}function xd(n,e,t,i,s=null,r=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=Rt,h=n*2;if(At(h,l)){let u=Dt(n,c),d=Bt(h,l);return Ht(n,a,Fs),i(u,d,!1,o,r+n/8,Fs)}else{let A=function(I){let{uint16Array:F,uint32Array:B}=Rt,N=I*2;for(;!At(N,F);)I=Lt(I),N=I*2;return Dt(I,B)},P=function(I){let{uint16Array:F,uint32Array:B}=Rt,N=I*2;for(;!At(N,F);)I=Ft(I,B),N=I*2;return Dt(I,B)+Bt(N,F)},u=Lt(n),d=Ft(n,c),m=u,v=d,p,g,y,_;if(s&&(y=Fs,_=po,Ht(m,a,y),Ht(v,a,_),p=s(y),g=s(_),g<p)){m=d,v=u;let I=p;p=g,g=I,y=_}y||(y=Fs,Ht(m,a,y));let x=At(m*2,l),M=t(y,x,p,o+1,r+m/8),S;if(M===2){let I=A(m),B=P(m)-I;S=i(I,B,!0,o+1,r+m/8,y)}else S=M&&xd(m,e,t,i,s,r,o+1);if(S)return!0;_=po,Ht(v,a,_);let w=At(v*2,l),b=t(_,w,g,o+1,r+v/8),E;if(b===2){let I=A(v),B=P(v)-I;E=i(I,B,!0,o+1,r+v/8,_)}else E=b&&xd(v,e,t,i,s,r,o+1);return!!E}}var Ka=new Rt.constructor,Fu=new Rt.constructor,Ns=new Ls(()=>new Xt),mo=new Xt,go=new Xt,vd=new Xt,_d=new Xt,yd=!1;function E0(n,e,t,i){if(yd)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");yd=!0;let s=n._roots,r=e._roots,o,a=0,l=0,c=new He().copy(t).invert();for(let h=0,f=s.length;h<f;h++){Ka.setBuffer(s[h]),l=0;let u=Ns.getPrimitive();Ht(0,Ka.float32Array,u),u.applyMatrix4(c);for(let d=0,m=r.length;d<m&&(Fu.setBuffer(r[d]),o=In(0,0,t,c,i,a,l,0,0,u),Fu.clearBuffer(),l+=r[d].byteLength/32,!o);d++);if(Ns.releasePrimitive(u),Ka.clearBuffer(),a+=s[h].byteLength/32,o)break}return yd=!1,o}function In(n,e,t,i,s,r=0,o=0,a=0,l=0,c=null,h=!1){let f,u;h?(f=Fu,u=Ka):(f=Ka,u=Fu);let d=f.float32Array,m=f.uint32Array,v=f.uint16Array,p=u.float32Array,g=u.uint32Array,y=u.uint16Array,_=n*2,x=e*2,M=At(_,v),S=At(x,y),w=!1;if(S&&M)h?w=s(Dt(e,g),Bt(e*2,y),Dt(n,m),Bt(n*2,v),l,o+e/8,a,r+n/8):w=s(Dt(n,m),Bt(n*2,v),Dt(e,g),Bt(e*2,y),a,r+n/8,l,o+e/8);else if(S){let b=Ns.getPrimitive();Ht(e,p,b),b.applyMatrix4(t);let E=Lt(n),A=Ft(n,m);Ht(E,d,mo),Ht(A,d,go);let P=b.intersectsBox(mo),I=b.intersectsBox(go);w=P&&In(e,E,i,t,s,o,r,l,a+1,b,!h)||I&&In(e,A,i,t,s,o,r,l,a+1,b,!h),Ns.releasePrimitive(b)}else{let b=Lt(e),E=Ft(e,g);Ht(b,p,vd),Ht(E,p,_d);let A=c.intersectsBox(vd),P=c.intersectsBox(_d);if(A&&P)w=In(n,b,t,i,s,r,o,a,l+1,c,h)||In(n,E,t,i,s,r,o,a,l+1,c,h);else if(A)if(M)w=In(n,b,t,i,s,r,o,a,l+1,c,h);else{let I=Ns.getPrimitive();I.copy(vd).applyMatrix4(t);let F=Lt(n),B=Ft(n,m);Ht(F,d,mo),Ht(B,d,go);let N=I.intersectsBox(mo),k=I.intersectsBox(go);w=N&&In(b,F,i,t,s,o,r,l,a+1,I,!h)||k&&In(b,B,i,t,s,o,r,l,a+1,I,!h),Ns.releasePrimitive(I)}else if(P)if(M)w=In(n,E,t,i,s,r,o,a,l+1,c,h);else{let I=Ns.getPrimitive();I.copy(_d).applyMatrix4(t);let F=Lt(n),B=Ft(n,m);Ht(F,d,mo),Ht(B,d,go);let N=I.intersectsBox(mo),k=I.intersectsBox(go);w=N&&In(E,F,i,t,s,o,r,l,a+1,I,!h)||k&&In(E,B,i,t,s,o,r,l,a+1,I,!h),Ns.releasePrimitive(I)}}return w}var A0=new Xt,xo=new Float32Array(6),Nu=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Au,...e},T0(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,i,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let f=e,u=e+t;f<u;f++){this.writePrimitiveBounds(f,xo,0);let[d,m,v,p,g,y]=xo;d<r&&(r=d),p>l&&(l=p),m<o&&(o=m),g>c&&(c=g),v<a&&(a=v),y>h&&(h=y)}return i[s+0]=r,i[s+1]=o,i[s+2]=a,i[s+3]=l,i[s+4]=c,i[s+5]=h,i}computePrimitiveBounds(e,t,i){let s=i.offset||0;for(let r=e,o=e+t;r<o;r++){this.writePrimitiveBounds(r,xo,0);let[a,l,c,h,f,u]=xo,d=(a+h)/2,m=(l+f)/2,v=(c+u)/2,p=(h-a)/2,g=(f-l)/2,y=(u-c)/2,_=(r-s)*6;i[_+0]=d,i[_+1]=p+(Math.abs(d)+p)*co,i[_+2]=m,i[_+3]=g+(Math.abs(m)+g)*co,i[_+4]=v,i[_+5]=y+(Math.abs(v)+y)*co}return i}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let i=0,s=t.length;i<s;i++)t[i]+=e;else{let i=this._roots;for(let s=0;s<i.length;s++){let r=i[s],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/32;for(let c=0;c<l;c++){let h=8*c,f=2*h;At(f,a)&&(o[h+6]+=e)}}}}traverse(e,t=0){let i=this._roots[t],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){let c=a*2,h=At(c,r);if(h){let f=s[a+6],u=r[c+14];e(l,h,new Float32Array(i,a*4,6),f,u)}else{let f=Lt(a),u=Ft(a,s),d=Ps(a,s);e(l,h,new Float32Array(i,a*4,6),d)||(o(f,l+1),o(u,l+1))}}}refit(){let e=this._roots;for(let t=0,i=e.length;t<i;t++){let s=e[t],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),l=s.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,f=h*2;if(At(f,o)){let d=Dt(h,r),m=Bt(f,o);this.writePrimitiveRangeBounds(d,m,xo,0),a.set(xo,h)}else{let d=Lt(h),m=Ft(h,r);for(let v=0;v<3;v++){let p=a[d+v],g=a[d+v+3],y=a[m+v],_=a[m+v+3];a[h+v]=p<y?p:y,a[h+v+3]=g>_?g:_}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Ht(0,new Float32Array(i),A0),e.union(A0)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:i,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=e;if(s&&r){let f=s;s=(u,d,m,v,p)=>f(u,d,m,v,p)?!0:a(u,d,this,r,m,v,o)}else s||(r?s=(f,u,d,m)=>a(f,u,this,r,d,m,o):s=(f,u,d)=>d);let l=!1,c=0,h=this._roots;for(let f=0,u=h.length;f<u;f++){let d=h[f];if(l=w0(this,f,i,s,t,c),l)break;c+=d.byteLength/32}return l}bvhcast(e,t,i){let{intersectsRanges:s}=i;return E0(this,e,t,s)}};function R0(){return typeof SharedArrayBuffer<"u"}function Ja(n){return n.index?n.index.count:n.attributes.position.count}function Us(n){return Ja(n)/3}function bd(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function C0(n,e){if(!n.index){let t=n.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=bd(t,i);n.setIndex(new vt(s,1));for(let r=0;r<t;r++)s[r]=r}}function T1(n,e,t){let i=Ja(n)/t,s=e||n.drawRange,r=s.start/t,o=(s.start+s.count)/t,a=Math.max(0,r),l=Math.min(i,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function w1(n,e){return n.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Md(n,e,t){let i=T1(n,e,t),s=w1(n,t);if(!s.length)return[i];let r=[],o=i.offset,a=i.offset+i.count,l=Ja(n)/t,c=[];for(let u of s){let{offset:d,count:m}=u,v=d,p=isFinite(m)?m:l-d,g=d+p;v<a&&g>o&&(c.push({pos:Math.max(o,v),isStart:!0}),c.push({pos:Math.min(a,g),isStart:!1}))}c.sort((u,d)=>u.pos!==d.pos?u.pos-d.pos:u.type==="end"?-1:1);let h=0,f=null;for(let u of c){let d=u.pos;h!==0&&d!==f&&r.push({offset:f,count:d-f}),h+=u.isStart?1:-1,f=d}return r}function E1(n,e){let t=n[n.length-1],i=t.offset+t.count>2**16,s=n.reduce((c,h)=>c+h.count,0),r=i?4:2,o=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=i?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<n.length;c++){let{offset:h,count:f}=n[c];for(let u=0;u<f;u++)a[l+u]=h+u;l+=f}return a}var Uu=class extends Nu{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!R0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Au,...t},t[$a]||this.init(t)}init(e){let{geometry:t,primitiveStride:i}=this;if(e.indirect){let s=Md(t,e.range,i),r=E1(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else C0(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Xt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Md(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var an=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let l=e[r][t];i=l<i?l:i,s=l>s?l:s}this.min=i,this.max=s}setFromPoints(e,t){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],l=e.dot(a);i=l<i?l:i,s=l>s?l:s}this.min=i,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};an.prototype.setFromBox=(function(){let n=new R;return function(t,i){let s=i.min,r=i.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){n.x=s.x*l+r.x*(1-l),n.y=s.y*c+r.y*(1-c),n.z=s.z*h+r.z*(1-h);let f=t.dot(n);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();var A1=(function(){let n=new R,e=new R,t=new R;return function(s,r,o){let a=s.start,l=n,c=r.start,h=e;t.subVectors(a,c),n.subVectors(s.end,s.start),e.subVectors(r.end,r.start);let f=t.dot(h),u=h.dot(l),d=h.dot(h),m=t.dot(l),p=l.dot(l)*d-u*u,g,y;p!==0?g=(f*u-m*d)/p:g=0,y=(f+g*u)/d,o.x=g,o.y=y}})(),ja=(function(){let n=new te,e=new R,t=new R;return function(s,r,o,a){A1(s,r,n);let l=n.x,c=n.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=s.start:h=s.end;let f;c<0?f=r.start:f=r.end;let u=e,d=t;if(s.closestPointToPoint(f,!0,e),r.closestPointToPoint(h,!0,t),u.distanceToSquared(f)<=d.distanceToSquared(h)){o.copy(u),a.copy(f);return}else{o.copy(h),a.copy(d);return}}}})(),I0=(function(){let n=new R,e=new R,t=new Si,i=new qi;return function(r,o){let{radius:a,center:l}=r,{a:c,b:h,c:f}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a||(i.start=c,i.end=f,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a)||(i.start=h,i.end=f,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a))return!0;let v=o.getPlane(t);if(Math.abs(v.distanceToPoint(l))<=a){let g=v.projectPoint(l,e);if(o.containsPoint(g))return!0}return!1}})();var R1=["x","y","z"],ts=1e-15,P0=ts*ts;function pn(n){return Math.abs(n)<ts}var Pi=class extends Ni{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new an),this.points=[this.a,this.b,this.c],this.plane=new Si,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new qi,this.needsUpdate=!0}intersectsSphere(e){return I0(e,this)}update(){let e=this.a,t=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);let c=r[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,s);let f=r[2],u=o[2];f.subVectors(t,i),u.setFromPoints(f,s);let d=r[3],m=o[3];d.subVectors(i,e),m.setFromPoints(d,s);let v=c.length(),p=f.length(),g=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<ts?p<ts||g<ts?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(i)):p<ts?g<ts?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<ts&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};Pi.prototype.closestPointToSegment=(function(){let n=new R,e=new R,t=new qi;return function(s,r=null,o=null){let{start:a,end:l}=s,c=this.points,h,f=1/0;for(let u=0;u<3;u++){let d=(u+1)%3;t.start.copy(c[u]),t.end.copy(c[d]),ja(t,s,n,e),h=n.distanceToSquared(e),h<f&&(f=h,r&&r.copy(n),o&&o.copy(e))}return this.closestPointToPoint(a,n),h=a.distanceToSquared(n),h<f&&(f=h,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(l,n),h=l.distanceToSquared(n),h<f&&(f=h,r&&r.copy(n),o&&o.copy(l)),Math.sqrt(f)}})();Pi.prototype.intersectsTriangle=(function(){let n=new Pi,e=new an,t=new an,i=new R,s=new R,r=new R,o=new R,a=new qi,l=new qi,c=new R,h=new te,f=new te;function u(_,x,M,S){let w=i;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?w.copy(_.plane.normal):w.copy(x.plane.normal);let b=_.satBounds,E=_.satAxes;for(let I=1;I<4;I++){let F=b[I],B=E[I];if(e.setFromPoints(B,x.points),F.isSeparated(e)||(o.copy(w).cross(B),e.setFromPoints(o,_.points),t.setFromPoints(o,x.points),e.isSeparated(t)))return!1}let A=x.satBounds,P=x.satAxes;for(let I=1;I<4;I++){let F=A[I],B=P[I];if(e.setFromPoints(B,_.points),F.isSeparated(e)||(o.crossVectors(w,B),e.setFromPoints(o,_.points),t.setFromPoints(o,x.points),e.isSeparated(t)))return!1}return M&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function d(_,x,M,S,w,b,E,A,P,I,F){let B=E/(E-A);I.x=S+(w-S)*B,F.start.subVectors(x,_).multiplyScalar(B).add(_),B=E/(E-P),I.y=S+(b-S)*B,F.end.subVectors(M,_).multiplyScalar(B).add(_)}function m(_,x,M,S,w,b,E,A,P,I,F){if(w>0)d(_.c,_.a,_.b,S,x,M,P,E,A,I,F);else if(b>0)d(_.b,_.a,_.c,M,x,S,A,E,P,I,F);else if(A*P>0||E!=0)d(_.a,_.b,_.c,x,M,S,E,A,P,I,F);else if(A!=0)d(_.b,_.a,_.c,M,x,S,A,E,P,I,F);else if(P!=0)d(_.c,_.a,_.b,S,x,M,P,E,A,I,F);else return!0;return!1}function v(_,x,M,S){let w=x.degenerateSegment,b=_.plane.distanceToPoint(w.start),E=_.plane.distanceToPoint(w.end);return pn(b)?pn(E)?u(_,x,M,S):(M&&(M.start.copy(w.start),M.end.copy(w.start)),_.containsPoint(w.start)):pn(E)?(M&&(M.start.copy(w.end),M.end.copy(w.end)),_.containsPoint(w.end)):_.plane.intersectLine(w,i)!=null?(M&&(M.start.copy(i),M.end.copy(i)),_.containsPoint(i)):!1}function p(_,x,M){let S=x.a;return pn(_.plane.distanceToPoint(S))&&_.containsPoint(S)?(M&&(M.start.copy(S),M.end.copy(S)),!0):!1}function g(_,x,M){let S=_.degenerateSegment,w=x.a;return S.closestPointToPoint(w,!0,i),w.distanceToSquared(i)<P0?(M&&(M.start.copy(w),M.end.copy(w)),!0):!1}function y(_,x,M,S){if(_.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){let w=_.degenerateSegment,b=x.degenerateSegment,E=s,A=r;w.delta(E),b.delta(A);let P=i.subVectors(b.start,w.start),I=E.x*A.y-E.y*A.x;if(pn(I))return!1;let F=(P.x*A.y-P.y*A.x)/I,B=-(E.x*P.y-E.y*P.x)/I;if(F<0||F>1||B<0||B>1)return!1;let N=w.start.z+E.z*F,k=b.start.z+A.z*B;return pn(N-k)?(M&&(M.start.copy(w.start).addScaledVector(E,F),M.end.copy(w.start).addScaledVector(E,F)),!0):!1}else return x.isDegenerateIntoPoint?g(_,x,M):v(x,_,M,S);else{if(_.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(_.a)<P0?(M&&(M.start.copy(_.a),M.end.copy(_.a)),!0):!1:x.isDegenerateIntoSegment?g(x,_,M):p(x,_,M);if(x.isDegenerateIntoPoint)return p(_,x,M);if(x.isDegenerateIntoSegment)return v(_,x,M,S)}}return function(x,M=null,S=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(n.copy(x),n.update(),x=n);let w=y(this,x,M,S);if(w!==void 0)return w;let b=this.plane,E=x.plane,A=E.distanceToPoint(this.a),P=E.distanceToPoint(this.b),I=E.distanceToPoint(this.c);pn(A)&&(A=0),pn(P)&&(P=0),pn(I)&&(I=0);let F=A*P,B=A*I;if(F>0&&B>0)return!1;let N=b.distanceToPoint(x.a),k=b.distanceToPoint(x.b),Y=b.distanceToPoint(x.c);pn(N)&&(N=0),pn(k)&&(k=0),pn(Y)&&(Y=0);let ie=N*k,ue=N*Y;if(ie>0&&ue>0)return!1;s.copy(b.normal),r.copy(E.normal);let xe=s.cross(r),me=0,Me=Math.abs(xe.x),Je=Math.abs(xe.y);Je>Me&&(Me=Je,me=1),Math.abs(xe.z)>Me&&(me=2);let $=R1[me],U=this.a[$],X=this.b[$],H=this.c[$],ne=x.a[$],ge=x.b[$],de=x.c[$];if(m(this,U,X,H,F,B,A,P,I,h,a))return u(this,x,M,S);if(m(x,ne,ge,de,ie,ue,N,k,Y,f,l))return u(this,x,M,S);if(h.y<h.x){let Ae=h.y;h.y=h.x,h.x=Ae,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(f.y<f.x){let Ae=f.y;f.y=f.x,f.x=Ae,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<f.x||f.y<h.x?!1:(M&&(f.x>h.x?M.start.copy(l.start):M.start.copy(a.start),f.y<h.y?M.end.copy(l.end):M.end.copy(a.end)),!0)}})();Pi.prototype.distanceToPoint=(function(){let n=new R;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}})();Pi.prototype.distanceToTriangle=(function(){let n=new R,e=new R,t=["a","b","c"],i=new qi,s=new qi;return function(o,a=null,l=null){let c=a||l?i:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let f=0;f<3;f++){let u,d=t[f],m=o[d];this.closestPointToPoint(m,n),u=m.distanceToSquared(n),u<h&&(h=u,a&&a.copy(n),l&&l.copy(m));let v=this[d];o.closestPointToPoint(v,n),u=v.distanceToSquared(n),u<h&&(h=u,a&&a.copy(v),l&&l.copy(n))}for(let f=0;f<3;f++){let u=t[f],d=t[(f+1)%3];i.set(this[u],this[d]);for(let m=0;m<3;m++){let v=t[m],p=t[(m+1)%3];s.set(o[v],o[p]),ja(i,s,n,e);let g=n.distanceToSquared(e);g<h&&(h=g,a&&a.copy(n),l&&l.copy(e))}}return Math.sqrt(h)}})();var ni=class{constructor(e,t,i){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new He,this.invMatrix=new He,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new an),this.alignedSatBounds=new Array(3).fill().map(()=>new an),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};ni.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,i=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){let u=1*c|2*h|4*f,d=s[u];d.x=c?i.x:t.x,d.y=h?i.y:t.y,d.z=f?i.z:t.z,d.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){let h=o[c],f=r[c],u=1<<c,d=s[u];h.subVectors(a,d),f.setFromPoints(h,s)}let l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();ni.prototype.intersectsBox=(function(){let n=new an;return function(t){this.needsUpdate&&this.update();let i=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let l=0;l<3;l++){let c=o[l],h=r[l];if(n.setFromBox(c,t),h.isSeparated(n))return!1}return!0}})();ni.prototype.intersectsTriangle=(function(){let n=new Pi,e=new Array(3),t=new an,i=new an,s=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);let a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let u=0;u<3;u++){let d=a[u],m=l[u];if(t.setFromPoints(m,e),d.isSeparated(t))return!1}let c=o.satBounds,h=o.satAxes,f=this.points;for(let u=0;u<3;u++){let d=c[u],m=h[u];if(t.setFromPoints(m,f),d.isSeparated(t))return!1}for(let u=0;u<3;u++){let d=l[u];for(let m=0;m<4;m++){let v=h[m];if(s.crossVectors(d,v),t.setFromPoints(s,e),i.setFromPoints(s,f),t.isSeparated(i))return!1}}return!0}})();ni.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();ni.prototype.distanceToPoint=(function(){let n=new R;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}})();ni.prototype.distanceToBox=(function(){let n=["x","y","z"],e=new Array(12).fill().map(()=>new qi),t=new Array(12).fill().map(()=>new qi),i=new R,s=new R;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),l&&l.copy(i),c&&c.copy(s)),0;let h=a*a,f=o.min,u=o.max,d=this.points,m=1/0;for(let p=0;p<8;p++){let g=d[p];s.copy(g).clamp(f,u);let y=g.distanceToSquared(s);if(y<m&&(m=y,l&&l.copy(g),c&&c.copy(s),y<h))return Math.sqrt(y)}let v=0;for(let p=0;p<3;p++)for(let g=0;g<=1;g++)for(let y=0;y<=1;y++){let _=(p+1)%3,x=(p+2)%3,M=g<<_|y<<x,S=1<<p|g<<_|y<<x,w=d[M],b=d[S];e[v].set(w,b);let A=n[p],P=n[_],I=n[x],F=t[v],B=F.start,N=F.end;B[A]=f[A],B[P]=g?f[P]:u[P],B[I]=y?f[I]:u[P],N[A]=u[A],N[P]=g?f[P]:u[P],N[I]=y?f[I]:u[P],v++}for(let p=0;p<=1;p++)for(let g=0;g<=1;g++)for(let y=0;y<=1;y++){s.x=p?u.x:f.x,s.y=g?u.y:f.y,s.z=y?u.z:f.z,this.closestPointToPoint(s,i);let _=s.distanceToSquared(i);if(_<m&&(m=_,l&&l.copy(i),c&&c.copy(s),_<h))return Math.sqrt(_)}for(let p=0;p<12;p++){let g=e[p];for(let y=0;y<12;y++){let _=t[y];ja(g,_,i,s);let x=i.distanceToSquared(s);if(x<m&&(m=x,l&&l.copy(i),c&&c.copy(s),x<h))return Math.sqrt(x)}}return Math.sqrt(m)}})();var Sd=class extends Ls{constructor(){super(()=>new Pi)}},Zi=new Sd;var Qa=new R,Td=new R;function D0(n,e,t={},i=0,s=1/0){let r=i*i,o=s*s,a=1/0,l=null;if(n.shapecast({boundsTraverseOrder:h=>(Qa.copy(e).clamp(h.min,h.max),Qa.distanceToSquared(e)),intersectsBounds:(h,f,u)=>u<a&&u<o,intersectsTriangle:(h,f)=>{h.closestPointToPoint(e,Qa);let u=e.distanceToSquared(Qa);return u<a&&(Td.copy(Qa),a=u,l=f),u<r}}),a===1/0)return null;let c=Math.sqrt(a);return t.point?t.point.copy(Td):t.point=Td.clone(),t.distance=c,t.faceIndex=l,t}var Bu=parseInt("185")>=169,C1=parseInt("185")<=161,or=new R,ar=new R,lr=new R,Ou=new te,zu=new te,ku=new te,L0=new R,F0=new R,N0=new R,el=new R;function I1(n,e,t,i,s,r,o,a){let l;if(r===mi?l=n.intersectTriangle(i,t,e,!0,s):l=n.intersectTriangle(e,t,i,r!==Kt,s),l===null)return null;let c=n.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function U0(n,e,t,i,s,r,o,a,l,c,h){or.fromBufferAttribute(e,r),ar.fromBufferAttribute(e,o),lr.fromBufferAttribute(e,a);let f=I1(n,or,ar,lr,el,l,c,h);if(f){if(i){Ou.fromBufferAttribute(i,r),zu.fromBufferAttribute(i,o),ku.fromBufferAttribute(i,a),f.uv=new te;let d=Ni.getInterpolation(el,or,ar,lr,Ou,zu,ku,f.uv);Bu||(f.uv=d)}if(s){Ou.fromBufferAttribute(s,r),zu.fromBufferAttribute(s,o),ku.fromBufferAttribute(s,a),f.uv1=new te;let d=Ni.getInterpolation(el,or,ar,lr,Ou,zu,ku,f.uv1);Bu||(f.uv1=d),C1&&(f.uv2=f.uv1)}if(t){L0.fromBufferAttribute(t,r),F0.fromBufferAttribute(t,o),N0.fromBufferAttribute(t,a),f.normal=new R;let d=Ni.getInterpolation(el,or,ar,lr,L0,F0,N0,f.normal);f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1),Bu||(f.normal=d)}let u={a:r,b:o,c:a,normal:new R,materialIndex:0};if(Ni.getNormal(or,ar,lr,u.normal),f.face=u,f.faceIndex=r,Bu){let d=new R;Ni.getBarycoord(el,or,ar,lr,d),f.barycoord=d}}return f}function B0(n){return n&&n.isMaterial?n.side:n}function vo(n,e,t,i,s,r,o){let a=i*3,l=a+0,c=a+1,h=a+2,{index:f,groups:u}=n;n.index&&(l=f.getX(l),c=f.getX(c),h=f.getX(h));let{position:d,normal:m,uv:v,uv1:p}=n.attributes;if(Array.isArray(e)){let g=i*3;for(let y=0,_=u.length;y<_;y++){let{start:x,count:M,materialIndex:S}=u[y];if(g>=x&&g<x+M){let w=B0(e[S]),b=U0(t,d,m,v,p,l,c,h,w,r,o);if(b)if(b.faceIndex=i,b.face.materialIndex=S,s)s.push(b);else return b}}}else{let g=B0(e),y=U0(t,d,m,v,p,l,c,h,g,r,o);if(y)if(y.faceIndex=i,y.face.materialIndex=0,s)s.push(y);else return y}return null}function Vt(n,e,t,i){let s=n.a,r=n.b,o=n.c,a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function O0(n,e,t,i,s,r,o,a){let{geometry:l,_indirectBuffer:c}=n;for(let h=i,f=i+s;h<f;h++)vo(l,e,t,h,r,o,a)}function z0(n,e,t,i,s,r,o){let{geometry:a,_indirectBuffer:l}=n,c=1/0,h=null;for(let f=i,u=i+s;f<u;f++){let d;d=vo(a,e,t,f,null,r,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function k0(n,e,t,i,s,r,o){let{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=n,f=e+n;h<f;h++){let u;if(u=h,Vt(o,u*3,l,c),o.needsUpdate=!0,i(o,u,s,r))return!0}return!1}function H0(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,c=0,h=n._roots;for(let u=0,d=h.length;u<d;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(u,d,m=!1){let v=u*2;if(At(v,a)){let p=Dt(u,o),g=Bt(v,a),y=1/0,_=1/0,x=1/0,M=-1/0,S=-1/0,w=-1/0;for(let b=3*p,E=3*(p+g);b<E;b++){let A=i[b],P=s.getX(A),I=s.getY(A),F=s.getZ(A);P<y&&(y=P),P>M&&(M=P),I<_&&(_=I),I>S&&(S=I),F<x&&(x=F),F>w&&(w=F)}return l[u+0]!==y||l[u+1]!==_||l[u+2]!==x||l[u+3]!==M||l[u+4]!==S||l[u+5]!==w?(l[u+0]=y,l[u+1]=_,l[u+2]=x,l[u+3]=M,l[u+4]=S,l[u+5]=w,!0):!1}else{let p=Lt(u),g=Ft(u,o),y=m,_=!1,x=!1;if(e){if(!y){let A=p/8+d/32,P=g/8+d/32;_=e.has(A),x=e.has(P),y=!_&&!x}}else _=!0,x=!0;let M=y||_,S=y||x,w=!1;M&&(w=f(p,d,y));let b=!1;S&&(b=f(g,d,y));let E=w||b;if(E)for(let A=0;A<3;A++){let P=p+A,I=g+A,F=l[P],B=l[P+3],N=l[I],k=l[I+3];l[u+A]=F<N?F:N,l[u+A+3]=B>k?B:k}return E}}}function mn(n,e,t,i,s){let r,o,a,l,c,h,f=1/t.direction.x,u=1/t.direction.y,d=1/t.direction.z,m=t.origin.x,v=t.origin.y,p=t.origin.z,g=e[n],y=e[n+3],_=e[n+1],x=e[n+3+1],M=e[n+2],S=e[n+3+2];return f>=0?(r=(g-m)*f,o=(y-m)*f):(r=(y-m)*f,o=(g-m)*f),u>=0?(a=(_-v)*u,l=(x-v)*u):(a=(x-v)*u,l=(_-v)*u),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(M-p)*d,h=(S-p)*d):(c=(S-p)*d,h=(M-p)*d),r>h||c>o)?!1:((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),r<=s&&o>=i)}function V0(n,e,t,i,s,r,o,a){let{geometry:l,_indirectBuffer:c}=n;for(let h=i,f=i+s;h<f;h++){let u=c?c[h]:h;vo(l,e,t,u,r,o,a)}}function G0(n,e,t,i,s,r,o){let{geometry:a,_indirectBuffer:l}=n,c=1/0,h=null;for(let f=i,u=i+s;f<u;f++){let d;d=vo(a,e,t,l?l[f]:f,null,r,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function W0(n,e,t,i,s,r,o){let{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=n,f=e+n;h<f;h++){let u;if(u=t.resolveTriangleIndex(h),Vt(o,u*3,l,c),o.needsUpdate=!0,i(o,u,s,r))return!0}return!1}function X0(n,e,t,i,s,r,o){Rt.setBuffer(n._roots[e]),wd(0,n,t,i,s,r,o),Rt.clearBuffer()}function wd(n,e,t,i,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Rt,h=n*2;if(At(h,l)){let u=Dt(n,c),d=Bt(h,l);O0(e,t,i,u,d,s,r,o)}else{let u=Lt(n);mn(u,a,i,r,o)&&wd(u,e,t,i,s,r,o);let d=Ft(n,c);mn(d,a,i,r,o)&&wd(d,e,t,i,s,r,o)}}var P1=["x","y","z"];function q0(n,e,t,i,s,r){Rt.setBuffer(n._roots[e]);let o=Ed(0,n,t,i,s,r);return Rt.clearBuffer(),o}function Ed(n,e,t,i,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=Rt,c=n*2;if(At(c,a)){let f=Dt(n,l),u=Bt(c,a);return z0(e,t,i,f,u,s,r)}else{let f=Ps(n,l),u=P1[f],m=i.direction[u]>=0,v,p;m?(v=Lt(n),p=Ft(n,l)):(v=Ft(n,l),p=Lt(n));let y=mn(v,o,i,s,r)?Ed(v,e,t,i,s,r):null;if(y){let M=y.point[u];if(m?M<=o[p+f]:M>=o[p+f+3])return y}let x=mn(p,o,i,s,r)?Ed(p,e,t,i,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}var Hu=new Xt,_o=new Pi,yo=new Pi,tl=new He,Y0=new ni,Vu=new ni;function $0(n,e,t,i){Rt.setBuffer(n._roots[e]);let s=Ad(0,n,t,i);return Rt.clearBuffer(),s}function Ad(n,e,t,i,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=Rt,l=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Y0.set(t.boundingBox.min,t.boundingBox.max,i),s=Y0),At(l,o)){let h=e.geometry,f=h.index,u=h.attributes.position,d=t.index,m=t.attributes.position,v=Dt(n,a),p=Bt(l,o);if(tl.copy(i).invert(),t.boundsTree)return Ht(n,r,Vu),Vu.matrix.copy(tl),Vu.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Vu.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(i),y.b.applyMatrix4(i),y.c.applyMatrix4(i),y.needsUpdate=!0;for(let _=v*3,x=(p+v)*3;_<x;_+=3)if(Vt(yo,_,f,u),yo.needsUpdate=!0,y.intersectsTriangle(yo))return!0;return!1}});{let g=Us(t);for(let y=v*3,_=(p+v)*3;y<_;y+=3){Vt(_o,y,f,u),_o.a.applyMatrix4(tl),_o.b.applyMatrix4(tl),_o.c.applyMatrix4(tl),_o.needsUpdate=!0;for(let x=0,M=g*3;x<M;x+=3)if(Vt(yo,x,d,m),yo.needsUpdate=!0,_o.intersectsTriangle(yo))return!0}}}else{let h=Lt(n),f=Ft(n,a);return Ht(h,r,Hu),!!(s.intersectsBox(Hu)&&Ad(h,e,t,i,s)||(Ht(f,r,Hu),s.intersectsBox(Hu)&&Ad(f,e,t,i,s)))}}var Gu=new He,Rd=new ni,il=new ni,D1=new R,L1=new R,F1=new R,N1=new R;function Z0(n,e,t,i={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Rd.set(e.boundingBox.min,e.boundingBox.max,t),Rd.needsUpdate=!0;let a=n.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,f=e.index,u=Zi.getPrimitive(),d=Zi.getPrimitive(),m=D1,v=L1,p=null,g=null;s&&(p=F1,g=N1);let y=1/0,_=null,x=null;return Gu.copy(t).invert(),il.matrix.copy(Gu),n.shapecast({boundsTraverseOrder:M=>Rd.distanceToBox(M),intersectsBounds:(M,S,w)=>w<y&&w<o?(S&&(il.min.copy(M.min),il.max.copy(M.max),il.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:b=>il.distanceToBox(b),intersectsBounds:(b,E,A)=>A<y&&A<o,intersectsRange:(b,E)=>{for(let A=b,P=b+E;A<P;A++){Vt(d,3*A,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let I=M,F=M+S;I<F;I++){Vt(u,3*I,c,l),u.needsUpdate=!0;let B=u.distanceToTriangle(d,m,p);if(B<y&&(v.copy(m),g&&g.copy(p),y=B,_=I,x=A),B<r)return!0}}}});{let w=Us(e);for(let b=0,E=w;b<E;b++){Vt(d,3*b,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let A=M,P=M+S;A<P;A++){Vt(u,3*A,c,l),u.needsUpdate=!0;let I=u.distanceToTriangle(d,m,p);if(I<y&&(v.copy(m),g&&g.copy(p),y=I,_=A,x=b),I<r)return!0}}}}}),Zi.releasePrimitive(u),Zi.releasePrimitive(d),y===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=y,i.faceIndex=_,s&&(s.point?s.point.copy(g):s.point=g.clone(),s.point.applyMatrix4(Gu),v.applyMatrix4(Gu),s.distance=v.sub(s.point).length(),s.faceIndex=x),i)}function K0(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=n.geometry,i=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,c=0,h=n._roots;for(let u=0,d=h.length;u<d;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(u,d,m=!1){let v=u*2;if(At(v,a)){let p=Dt(u,o),g=Bt(v,a),y=1/0,_=1/0,x=1/0,M=-1/0,S=-1/0,w=-1/0;for(let b=p,E=p+g;b<E;b++){let A=3*n.resolveTriangleIndex(b);for(let P=0;P<3;P++){let I=A+P;I=i?i[I]:I;let F=s.getX(I),B=s.getY(I),N=s.getZ(I);F<y&&(y=F),F>M&&(M=F),B<_&&(_=B),B>S&&(S=B),N<x&&(x=N),N>w&&(w=N)}}return l[u+0]!==y||l[u+1]!==_||l[u+2]!==x||l[u+3]!==M||l[u+4]!==S||l[u+5]!==w?(l[u+0]=y,l[u+1]=_,l[u+2]=x,l[u+3]=M,l[u+4]=S,l[u+5]=w,!0):!1}else{let p=Lt(u),g=Ft(u,o),y=m,_=!1,x=!1;if(e){if(!y){let A=p/8+d/32,P=g/8+d/32;_=e.has(A),x=e.has(P),y=!_&&!x}}else _=!0,x=!0;let M=y||_,S=y||x,w=!1;M&&(w=f(p,d,y));let b=!1;S&&(b=f(g,d,y));let E=w||b;if(E)for(let A=0;A<3;A++){let P=p+A,I=g+A,F=l[P],B=l[P+3],N=l[I],k=l[I+3];l[u+A]=F<N?F:N,l[u+A+3]=B>k?B:k}return E}}}function J0(n,e,t,i,s,r,o){Rt.setBuffer(n._roots[e]),Cd(0,n,t,i,s,r,o),Rt.clearBuffer()}function Cd(n,e,t,i,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Rt,h=n*2;if(At(h,l)){let u=Dt(n,c),d=Bt(h,l);V0(e,t,i,u,d,s,r,o)}else{let u=Lt(n);mn(u,a,i,r,o)&&Cd(u,e,t,i,s,r,o);let d=Ft(n,c);mn(d,a,i,r,o)&&Cd(d,e,t,i,s,r,o)}}var U1=["x","y","z"];function j0(n,e,t,i,s,r){Rt.setBuffer(n._roots[e]);let o=Id(0,n,t,i,s,r);return Rt.clearBuffer(),o}function Id(n,e,t,i,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=Rt,c=n*2;if(At(c,a)){let f=Dt(n,l),u=Bt(c,a);return G0(e,t,i,f,u,s,r)}else{let f=Ps(n,l),u=U1[f],m=i.direction[u]>=0,v,p;m?(v=Lt(n),p=Ft(n,l)):(v=Ft(n,l),p=Lt(n));let y=mn(v,o,i,s,r)?Id(v,e,t,i,s,r):null;if(y){let M=y.point[u];if(m?M<=o[p+f]:M>=o[p+f+3])return y}let x=mn(p,o,i,s,r)?Id(p,e,t,i,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}var Wu=new Xt,bo=new Pi,Mo=new Pi,nl=new He,Q0=new ni,Xu=new ni;function eg(n,e,t,i){Rt.setBuffer(n._roots[e]);let s=Pd(0,n,t,i);return Rt.clearBuffer(),s}function Pd(n,e,t,i,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=Rt,l=n*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Q0.set(t.boundingBox.min,t.boundingBox.max,i),s=Q0),At(l,o)){let h=e.geometry,f=h.index,u=h.attributes.position,d=t.index,m=t.attributes.position,v=Dt(n,a),p=Bt(l,o);if(nl.copy(i).invert(),t.boundsTree)return Ht(n,r,Xu),Xu.matrix.copy(nl),Xu.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Xu.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(i),y.b.applyMatrix4(i),y.c.applyMatrix4(i),y.needsUpdate=!0;for(let _=v,x=p+v;_<x;_++)if(Vt(Mo,3*e.resolveTriangleIndex(_),f,u),Mo.needsUpdate=!0,y.intersectsTriangle(Mo))return!0;return!1}});{let g=Us(t);for(let y=v,_=p+v;y<_;y++){let x=e.resolveTriangleIndex(y);Vt(bo,3*x,f,u),bo.a.applyMatrix4(nl),bo.b.applyMatrix4(nl),bo.c.applyMatrix4(nl),bo.needsUpdate=!0;for(let M=0,S=g*3;M<S;M+=3)if(Vt(Mo,M,d,m),Mo.needsUpdate=!0,bo.intersectsTriangle(Mo))return!0}}}else{let h=Lt(n),f=Ft(n,a);return Ht(h,r,Wu),!!(s.intersectsBox(Wu)&&Pd(h,e,t,i,s)||(Ht(f,r,Wu),s.intersectsBox(Wu)&&Pd(f,e,t,i,s)))}}var qu=new He,Dd=new ni,sl=new ni,B1=new R,O1=new R,z1=new R,k1=new R;function tg(n,e,t,i={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Dd.set(e.boundingBox.min,e.boundingBox.max,t),Dd.needsUpdate=!0;let a=n.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,f=e.index,u=Zi.getPrimitive(),d=Zi.getPrimitive(),m=B1,v=O1,p=null,g=null;s&&(p=z1,g=k1);let y=1/0,_=null,x=null;return qu.copy(t).invert(),sl.matrix.copy(qu),n.shapecast({boundsTraverseOrder:M=>Dd.distanceToBox(M),intersectsBounds:(M,S,w)=>w<y&&w<o?(S&&(sl.min.copy(M.min),sl.max.copy(M.max),sl.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree){let w=e.boundsTree;return w.shapecast({boundsTraverseOrder:b=>sl.distanceToBox(b),intersectsBounds:(b,E,A)=>A<y&&A<o,intersectsRange:(b,E)=>{for(let A=b,P=b+E;A<P;A++){let I=w.resolveTriangleIndex(A);Vt(d,3*I,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let F=M,B=M+S;F<B;F++){let N=n.resolveTriangleIndex(F);Vt(u,3*N,c,l),u.needsUpdate=!0;let k=u.distanceToTriangle(d,m,p);if(k<y&&(v.copy(m),g&&g.copy(p),y=k,_=F,x=A),k<r)return!0}}}})}else{let w=Us(e);for(let b=0,E=w;b<E;b++){Vt(d,3*b,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let A=M,P=M+S;A<P;A++){let I=n.resolveTriangleIndex(A);Vt(u,3*I,c,l),u.needsUpdate=!0;let F=u.distanceToTriangle(d,m,p);if(F<y&&(v.copy(m),g&&g.copy(p),y=F,_=A,x=b),F<r)return!0}}}}}),Zi.releasePrimitive(u),Zi.releasePrimitive(d),y===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=y,i.faceIndex=_,s&&(s.point?s.point.copy(g):s.point=g.clone(),s.point.applyMatrix4(qu),v.applyMatrix4(qu),s.distance=v.sub(s.point).length(),s.faceIndex=x),i)}function Ld(n,e,t){return n===null?null:(n.point.applyMatrix4(e.matrixWorld),n.distance=n.point.distanceTo(t.ray.origin),n.object=e,n)}var Yu=new ni,$u=new Sn,ig=new R,ng=new He,sg=new R,Fd=["getX","getY","getZ"],Zu=class n extends Uu{static serialize(e,t={}){t={cloneBuffers:!0,...t};let i=e.geometry,s=e._roots,r=e._indirectBuffer,o=i.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};let{index:s,roots:r,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));let a=new n(t,{...i,[$a]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){let c=t.getIndex();if(c===null){let h=new vt(e.index,1,!1);t.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let f=c[h],u=new Uint32Array(f),d=new Uint16Array(f);for(let m=0,v=f.byteLength/32;m<v;m++){let p=8*m,g=2*p;At(g,d)||(u[p+6]=u[p+6]/8-m)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,i){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=(r?r[e]:e)*3,h=c+0,f=c+1,u=c+2;a&&(h=a[h],f=a[f],u=a[u]);for(let d=0;d<3;d++){let m=o[Fd[d]](h),v=o[Fd[d]](f),p=o[Fd[d]](u),g=m;v<g&&(g=v),p<g&&(g=p);let y=m;v>y&&(y=v),p>y&&(y=p),t[i+d]=g,t[i+d+3]=y}return t}computePrimitiveBounds(e,t,i){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(e<0||t+e-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,f=3;o.isInterleavedBufferAttribute&&(f=o.data.stride);let u=["getX","getY","getZ"],d=i.offset;for(let m=e,v=e+t;m<v;m++){let g=(r?r[m]:m)*3,y=(m-d)*6,_=g+0,x=g+1,M=g+2;a&&(_=a[_],x=a[x],M=a[M]),l||(_=_*f+h,x=x*f+h,M=M*f+h);for(let S=0;S<3;S++){let w,b,E;l?(w=o[u[S]](_),b=o[u[S]](x),E=o[u[S]](M)):(w=c[_+S],b=c[x+S],E=c[M+S]);let A=w;b<A&&(A=b),E<A&&(A=E);let P=w;b>P&&(P=b),E>P&&(P=E);let I=(P-A)/2,F=S*2;i[y+F+0]=A+I,i[y+F+1]=I+(Math.abs(A)+I)*co}}return i}raycastObject3D(e,t,i=[]){let{material:s}=e;if(s===void 0)return;ng.copy(e.matrixWorld).invert(),$u.copy(t.ray).applyMatrix4(ng),sg.setFromMatrixScale(e.matrixWorld),ig.copy($u.direction).multiply(sg);let r=ig.length(),o=t.near/r,a=t.far/r;if(t.firstHitOnly===!0){let l=this.raycastFirst($u,s,o,a);l=Ld(l,e,t),l&&i.push(l)}else{let l=this.raycast($u,s,o,a);for(let c=0,h=l.length;c<h;c++){let f=Ld(l[c],e,t);f&&i.push(f)}}return i}refit(e=null){return(this.indirect?K0:H0)(this,e)}raycast(e,t=Ui,i=0,s=1/0){let r=this._roots,o=[],a=this.indirect?J0:X0;for(let l=0,c=r.length;l<c;l++)a(this,l,t,e,o,i,s);return o}raycastFirst(e,t=Ui,i=0,s=1/0){let r=this._roots,o=null,a=this.indirect?j0:q0;for(let l=0,c=r.length;l<c;l++){let h=a(this,l,t,e,i,s);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(e,t){let i=!1,s=this._roots,r=this.indirect?eg:$0;for(let o=0,a=s.length;o<a&&(i=r(this,o,e,t),!i);o++);return i}shapecast(e){let t=Zi.getPrimitive(),i=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?W0:k0});return Zi.releasePrimitive(t),i}bvhcast(e,t,i){let{intersectsRanges:s,intersectsTriangles:r}=i,o=Zi.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{let v=this.resolveTriangleIndex(m);Vt(o,v*3,a,l)}:m=>{Vt(o,m*3,a,l)},h=Zi.getPrimitive(),f=e.geometry.index,u=e.geometry.attributes.position,d=e.indirect?m=>{let v=e.resolveTriangleIndex(m);Vt(h,v*3,f,u)}:m=>{Vt(h,m*3,f,u)};if(r){if(!(e instanceof n))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let m=(v,p,g,y,_,x,M,S)=>{for(let w=g,b=g+y;w<b;w++){d(w),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let E=v,A=v+p;E<A;E++)if(c(E),o.needsUpdate=!0,r(o,h,E,w,_,x,M,S))return!0}return!1};if(s){let v=s;s=function(p,g,y,_,x,M,S,w){return v(p,g,y,_,x,M,S,w)?!0:m(p,g,y,_,x,M,S,w)}}else s=m}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return Yu.set(e.min,e.max,t),Yu.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Yu.intersectsBox(i),intersectsTriangle:i=>Yu.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},s={},r=0,o=1/0){return(this.indirect?tg:Z0)(this,e,t,i,s,r,o)}closestPointToPoint(e,t={},i=0,s=1/0){return D0(this,e,t,i,s)}};function H1(n){switch(n){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function V1(n){switch(n){case 1:return An;case 2:return dn;case 3:return rt;case 4:return rt}}function rg(n){switch(n){case 1:return jr;case 2:return Es;case 3:return As;case 4:return As}}var Ku=class extends qt{constructor(){super(),this.minFilter=tt,this.magFilter=tt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,i=e.itemSize,s=e.count;if(t!==null){if(i*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*i/t}let r=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT,h=this._forcedType,f=r;if(h===null)switch(l){case Float32Array:h=ut;break;case Uint8Array:case Uint16Array:case Uint32Array:h=Ti;break;case Int8Array:case Int16Array:case Int32Array:h=Ts;break}let u,d,m,v,p=H1(r);switch(h){case ut:m=1,d=V1(r),a&&c===1?(v=l,p+="8",l===Uint8Array?u=gi:(u=Kr,p+="_SNORM")):(v=Float32Array,p+="32F",u=ut);break;case Ts:p+=c*8+"I",m=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=rg(r),c===1?(v=Int8Array,u=Kr):c===2?(v=Int16Array,u=Ca):(v=Int32Array,u=Ts);break;case Ti:p+=c*8+"UI",m=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=rg(r),c===1?(v=Uint8Array,u=gi):c===2?(v=Uint16Array,u=Ss):(v=Uint32Array,u=Ti);break}f===3&&(d===rt||d===As)&&(f=4);let g=Math.ceil(Math.sqrt(o))||1,y=f*g*g,_=new v(y),x=e.normalized;e.normalized=!1;for(let M=0;M<o;M++){let S=f*M;_[S]=e.getX(M)/m,r>=2&&(_[S+1]=e.getY(M)/m),r>=3&&(_[S+2]=e.getZ(M)/m,f===4&&(_[S+3]=1)),r>=4&&(_[S+3]=e.getW(M)/m)}e.normalized=x,this.internalFormat=p,this.format=d,this.type=u,this.image.width=g,this.image.height=g,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=s}},So=class extends Ku{constructor(){super(),this._forcedType=Ti}};var To=class extends Ku{constructor(){super(),this._forcedType=ut}};var Ju=class{constructor(){this.index=new So,this.position=new To,this.bvhBounds=new qt,this.bvhContents=new qt,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(W1(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let s=bd(Ja(t));this._cachedIndexAttr=new vt(s,1,!1)}G1(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:i,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),s&&s.dispose()}};function G1(n,e,t){let i=t.array,s=n.index?n.index.array:null;for(let r=0,o=e.length;r<o;r++){let a=3*r,l=3*e[r];for(let c=0;c<3;c++)i[a+c]=s?s[l+c]:l+c}}function W1(n,e,t){let i=n._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let s=i[0],r=new Uint16Array(s),o=new Uint32Array(s),a=new Float32Array(s),l=s.byteLength/32,c=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*c*c),f=Math.ceil(Math.sqrt(l)),u=new Uint32Array(2*f*f);for(let d=0;d<l;d++){let m=d*32/4,v=m*2,p=m;for(let g=0;g<3;g++)h[8*d+0+g]=a[p+0+g],h[8*d+4+g]=a[p+3+g];if(At(v,r)){let g=Bt(v,r),y=Dt(m,o),_=-65536|g;u[d*2+0]=_,u[d*2+1]=y}else{let g=o[m+6],y=Ps(m,o);u[d*2+0]=y,u[d*2+1]=g}}e.image.data=h,e.image.width=c,e.image.height=c,e.format=rt,e.type=ut,e.internalFormat="RGBA32F",e.minFilter=tt,e.magFilter=tt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=u,t.image.width=f,t.image.height=f,t.format=Es,t.type=Ti,t.internalFormat="RG32UI",t.minFilter=tt,t.magFilter=tt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var cr={};mx(cr,{bvh_distance_functions:()=>og,bvh_ray_functions:()=>Ud,bvh_struct_definitions:()=>ag,common_functions:()=>Nd});var Nd=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var og=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0 - v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;
			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;var Ud=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`;var ag=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var sC=`
	${Nd}
	${Ud}
`;function ju(n,e,t=0){if(n.isInterleavedBufferAttribute){let i=n.itemSize;for(let s=0,r=n.count;s<r;s++){let o=s+t;e.setX(o,n.getX(s)),i>=2&&e.setY(o,n.getY(s)),i>=3&&e.setZ(o,n.getZ(s)),i>=4&&e.setW(o,n.getW(s))}}else{let i=e.array,s=i.constructor,r=i.BYTES_PER_ELEMENT*n.itemSize*t;new s(i.buffer,r,n.array.length).set(n.array)}}function ur(n,e=null){let t=n.array.constructor,i=n.normalized,s=n.itemSize,r=e===null?n.count:e;return new vt(new t(s*r),s,i)}function Bs(n,e){if(!n&&!e)return!0;if(!!n!=!!e)return!1;let t=n.count===e.count,i=n.normalized===e.normalized,s=n.array.constructor===e.array.constructor,r=n.itemSize===e.itemSize;return!(!t||!i||!s||!r)}function X1(n){let e=n[0].index!==null,t=new Set(Object.keys(n[0].attributes));if(!n[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let i=0;i<n.length;++i){let s=n[i],r=0;if(e!==(s.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let o in s.attributes){if(!t.has(o))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.');r++}if(r!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function q1(n){let e=0;for(let t=0,i=n.length;t<i;t++)e+=n[t].getIndex().count;return e}function Y1(n){let e=0;for(let t=0,i=n.length;t<i;t++)e+=n[t].getAttribute("position").count;return e}function $1(n,e,t){n.index&&n.index.count!==e&&n.setIndex(null);let i=n.attributes;for(let s in i)i[s].count!==t&&n.deleteAttribute(s)}function lg(n,e={},t=new ft){let{useGroups:i=!1,forceUpdate:s=!1,skipAssigningAttributes:r=[],overwriteIndex:o=!0}=e;X1(n);let a=n[0].index!==null,l=a?q1(n):-1,c=Y1(n);if($1(t,l,c),i){let f=0;for(let u=0,d=n.length;u<d;u++){let m=n[u],v;a?v=m.getIndex().count:v=m.getAttribute("position").count,t.addGroup(f,v,u),f+=v}}if(a){let f=!1;if(t.index||(t.setIndex(new vt(new Uint32Array(l),1,!1)),f=!0),f||o){let u=0,d=0,m=t.getIndex();for(let v=0,p=n.length;v<p;v++){let g=n[v],y=g.getIndex();if(!(!s&&!f&&r[v]))for(let x=0;x<y.count;++x)m.setX(u+x,y.getX(x)+d);u+=y.count,d+=g.getAttribute("position").count}}}let h=Object.keys(n[0].attributes);for(let f=0,u=h.length;f<u;f++){let d=!1,m=h[f];if(!t.getAttribute(m)){let g=n[0].getAttribute(m);t.setAttribute(m,ur(g,c)),d=!0}let v=0,p=t.getAttribute(m);for(let g=0,y=n.length;g<y;g++){let _=n[g],x=!s&&!d&&r[g],M=_.getAttribute(m);if(!x)if(m==="color"&&p.itemSize!==M.itemSize)for(let S=v,w=M.count;S<w;S++)M.setXYZW(S,p.getX(S),p.getY(S),p.getZ(S),1);else ju(M,p,v);v+=M.count}}}function cg(n,e,t){let i=n.index,r=n.attributes.position.count,o=i?i.count:r,a=n.groups;a.length===0&&(a=[{count:o,start:0,materialIndex:0}]);let l=n.getAttribute("materialIndex");if(!l||l.count!==r){let h;t.length<=255?h=new Uint8Array(r):h=new Uint16Array(r),l=new vt(h,1,!1),n.deleteAttribute("materialIndex"),n.setAttribute("materialIndex",l)}let c=l.array;for(let h=0;h<a.length;h++){let f=a[h],u=f.start,d=f.count,m=Math.min(d,o-u),v=Array.isArray(e)?e[f.materialIndex]:e,p=t.indexOf(v);for(let g=0;g<m;g++){let y=u+g;i&&(y=i.getX(y)),c[y]=p}}}function ug(n,e){if(!n.index){let t=n.attributes.position.count,i=new Array(t);for(let s=0;s<t;s++)i[s]=s;n.setIndex(i)}if(!n.attributes.normal&&e&&e.includes("normal")&&n.computeVertexNormals(),!n.attributes.uv&&e&&e.includes("uv")){let t=n.attributes.position.count;n.setAttribute("uv",new vt(new Float32Array(t*2),2,!1))}if(!n.attributes.uv2&&e&&e.includes("uv2")){let t=n.attributes.position.count;n.setAttribute("uv2",new vt(new Float32Array(t*2),2,!1))}if(!n.attributes.tangent&&e&&e.includes("tangent"))if(n.attributes.uv&&n.attributes.normal)n.computeTangents();else{let t=n.attributes.position.count;n.setAttribute("tangent",new vt(new Float32Array(t*4),4,!1))}if(!n.attributes.color&&e&&e.includes("color")){let t=n.attributes.position.count,i=new Float32Array(t*4);i.fill(1),n.setAttribute("color",new vt(i,4))}}function wo(n){let e=0;if(n.byteLength!==0){let t=new Uint8Array(n);for(let i=0;i<n.byteLength;i++){let s=t[i];e=(e<<5)-e+s,e|=0}}return e}function hg(n){let e=n.uuid,t=Object.values(n.attributes);n.index&&(t.push(n.index),e+=`index|${n.index.version}`);let i=Object.keys(t).sort();for(let s of i){let r=t[s];e+=`${s}_${r.version}|`}return e}function fg(n){let e=n.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${wo(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var Qu=class{constructor(e=null){this.matrixWorld=new He,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=hg(t),this.primitiveCount=i,this.skeletonHash=fg(e)}didChange(e){let t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===hg(t)&&this.skeletonHash===fg(e)&&this.primitiveCount===i)}};var hr=new R,fr=new R,dr=new R,dg=new St,eh=new R,Bd=new R,pg=new St,mg=new St,th=new He,gg=new He;function xg(n,e,t){let i=n.skeleton,s=n.geometry,r=i.bones,o=i.boneInverses;pg.fromBufferAttribute(s.attributes.skinIndex,e),mg.fromBufferAttribute(s.attributes.skinWeight,e),th.elements.fill(0);for(let a=0;a<4;a++){let l=mg.getComponent(a);if(l!==0){let c=pg.getComponent(a);gg.multiplyMatrices(r[c].matrixWorld,o[c]),Z1(th,gg,l)}}return th.multiply(n.bindMatrix).premultiply(n.bindMatrixInverse),t.transformDirection(th),t}function Od(n,e,t,i,s){eh.set(0,0,0);for(let r=0,o=n.length;r<o;r++){let a=e[r],l=n[r];a!==0&&(Bd.fromBufferAttribute(l,i),t?eh.addScaledVector(Bd,a):eh.addScaledVector(Bd.sub(s),a))}s.add(eh)}function Z1(n,e,t){let i=n.elements,s=e.elements;for(let r=0,o=s.length;r<o;r++)i[r]+=s[r]*t}function K1(n){let{index:e,attributes:t}=n;if(e)for(let i=0,s=e.count;i<s;i+=3){let r=e.getX(i),o=e.getX(i+2);e.setX(i,o),e.setX(i+2,r)}else for(let i in t){let s=t[i],r=s.itemSize;for(let o=0,a=s.count;o<a;o+=3)for(let l=0;l<r;l++){let c=s.getComponent(o,l),h=s.getComponent(o+2,l);s.setComponent(o,l,h),s.setComponent(o+2,l,c)}}return n}function vg(n,e={},t=new ft){e={applyWorldTransforms:!0,attributes:[],...e};let i=n.geometry,s=e.applyWorldTransforms,r=e.attributes.includes("normal"),o=e.attributes.includes("tangent"),a=i.attributes,l=t.attributes;for(let y in t.attributes)(!e.attributes.includes(y)||!(y in i.attributes))&&t.deleteAttribute(y);!t.index&&i.index&&(t.index=i.index.clone()),l.position||t.setAttribute("position",ur(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",ur(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",ur(a.tangent)),Bs(i.index,t.index),Bs(a.position,l.position),r&&Bs(a.normal,l.normal),o&&Bs(a.tangent,l.tangent);let c=a.position,h=r?a.normal:null,f=o?a.tangent:null,u=i.morphAttributes.position,d=i.morphAttributes.normal,m=i.morphAttributes.tangent,v=i.morphTargetsRelative,p=n.morphTargetInfluences,g=new it;g.getNormalMatrix(n.matrixWorld),i.index&&t.index.array.set(i.index.array);for(let y=0,_=a.position.count;y<_;y++)hr.fromBufferAttribute(c,y),h&&fr.fromBufferAttribute(h,y),f&&(dg.fromBufferAttribute(f,y),dr.fromBufferAttribute(f,y)),p&&(u&&Od(u,p,v,y,hr),d&&Od(d,p,v,y,fr),m&&Od(m,p,v,y,dr)),n.isSkinnedMesh&&(n.applyBoneTransform(y,hr),h&&xg(n,y,fr),f&&xg(n,y,dr)),s&&hr.applyMatrix4(n.matrixWorld),l.position.setXYZ(y,hr.x,hr.y,hr.z),h&&(s&&fr.applyNormalMatrix(g),l.normal.setXYZ(y,fr.x,fr.y,fr.z)),f&&(s&&dr.transformDirection(n.matrixWorld),l.tangent.setXYZW(y,dr.x,dr.y,dr.z,dg.w));for(let y in e.attributes){let _=e.attributes[y];_==="position"||_==="tangent"||_==="normal"||!(_ in a)||(l[_]||t.setAttribute(_,ur(a[_])),Bs(a[_],l[_]),ju(a[_],l[_]))}return n.matrixWorld.determinant()<0&&K1(t),t}var ih=class extends ft{constructor(){super(),this.version=0,this.hash=null,this._diff=new Qu}isCompatible(e,t){let i=e.geometry;for(let s=0;s<t.length;s++){let r=t[s],o=i.attributes[r],a=this.attributes[r];if(o&&!Bs(o,a))return!1}return!0}updateFrom(e,t){let i=this._diff;return i.didChange(e)?(vg(e,t,this),i.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var sh=0,zd=1,kd=2;function J1(n,e){for(let t=0,i=n.length;t<i;t++)n[t].traverseVisible(r=>{r.isMesh&&e(r)})}function j1(n){let e=[];for(let t=0,i=n.length;t<i;t++){let s=n[t];Array.isArray(s.material)?e.push(...s.material):e.push(s.material)}return e}function Q1(n,e,t){if(n.length===0){e.setIndex(null);let i=e.attributes;for(let s in i)e.deleteAttribute(s);for(let s in t.attributes)e.setAttribute(t.attributes[s],new vt(new Float32Array(0),4,!1))}else lg(n,t,e);for(let i in e.attributes)e.attributes[i].needsUpdate=!0}var nh=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new fi,t=new ft;t.setAttribute("position",new vt(new Float32Array(9),3)),this._dummyMesh=new yt(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return J1(this.objects,t=>{e.push(t)}),e.sort((t,i)=>t.uuid>i.uuid?1:t.uuid<i.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),i=new Set(e.keys()),s={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let r=0,o=t.length;r<o;r++){let a=t[r],l=a.uuid;i.delete(l);let c=e.get(l);(!c||!c.isCompatible(a,this.attributes))&&(c&&c.dispose(),c=new ih,e.set(l,c)),c.updateFrom(a,s)&&this.generateMissingAttributes&&ug(c,this.attributes)}i.forEach(r=>{e.delete(r)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new ft){let{useGroups:t,overwriteIndex:i,_intermediateGeometry:s,_geometryMergeSets:r}=this,o=this._getMeshes(),a=[],l=[],c=r.get(e)||[];this._updateIntermediateGeometries();let h=!1;o.length!==c.length&&(h=!0);for(let u=0,d=o.length;u<d;u++){let m=o[u],v=s.get(m.uuid);l.push(v);let p=c[u];!p||p.uuid!==v.uuid?(a.push(!1),h=!0):p.version!==v.version?a.push(!1):a.push(!0)}Q1(l,e,{useGroups:t,forceUpdate:h,skipAssigningAttributes:a,overwriteIndex:i}),h&&e.dispose(),r.set(e,l.map(u=>({version:u.version,uuid:u.uuid})));let f=sh;return h?f=kd:a.includes(!1)&&(f=zd),{changeType:f,materials:j1(o),geometry:e}}};function eT(n){let e=new Set;for(let t=0,i=n.length;t<i;t++){let s=n[t];for(let r in s){let o=s[r];o&&o.isTexture&&e.add(o)}}return Array.from(e)}function tT(n){let e=[],t=new Set;for(let s=0,r=n.length;s<r;s++)n[s].traverse(o=>{o.visible&&(o.isRectAreaLight||o.isSpotLight||o.isPointLight||o.isDirectionalLight)&&(e.push(o),o.iesMap&&t.add(o.iesMap))});let i=Array.from(t).sort((s,r)=>s.uuid<r.uuid?1:s.uuid>r.uuid?-1:0);return{lights:e,iesTextures:i}}var rh=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new ft,this.staticGeometryGenerator=new nh(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:i,attributes:s}=this,r=t.objects;t.attributes=s,r.forEach(u=>{u.traverse(d=>{d.isSkinnedMesh&&d.skeleton&&d.skeleton.update()})});let o=t.generate(i),a=o.materials,l=o.changeType!==sh||this._materialUuids===null||this._materialUuids.length!==length;if(!l){for(let u=0,d=a.length;u<d;u++)if(a[u].uuid!==this._materialUuids[u]){l=!0;break}}let c=eT(a),{lights:h,iesTextures:f}=tT(r);if(l&&(cg(i,a,a),this._materialUuids=a.map(u=>u.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(o.changeType===kd){let u={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(i,u):this.bvh=new Zu(i,u)}else o.changeType===zd&&this.bvh.refit()}return{bvhChanged:o.changeType!==sh,bvh:this.bvh,needsMaterialIndexUpdate:l,lights:h,iesTextures:f,geometry:i,materials:a,textures:c,objects:r}}};var Os=class extends Tt{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(i){this.uniforms[t].value=i}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}};var oh=class extends Os{constructor(e){super({blending:li,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}};function ah(n=1){let e="uint";return n>1&&(e="uvec"+n),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function lh(n=1){let e="uint",t="float",i="",s=".r",r="1u";return n>1&&(e="uvec"+n,t="vec"+n,i=n+"",n===2?(s=".rg",r="uvec2( 1u, 2u )"):n===3?(s=".rgb",r="uvec3( 1u, 2u, 3u )"):(s="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${i}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${s};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var ch=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${ah(1)}
	${ah(2)}
	${ah(3)}
	${ah(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,_g=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,yg=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${lh(1)}
	${lh(2)}
	${lh(3)}
	${lh(4)}

`;var Hd=class extends Os{constructor(){super({blending:li,uniforms:{resolution:{value:new te}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${ch}
				${_g}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},uh=class{generate(e,t=256){let i=new Pt(t,t,{type:ut,format:rt,minFilter:tt,magFilter:tt,generateMipmaps:!1}),s=e.getRenderTarget();e.setRenderTarget(i);let r=new yi(new Hd);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(s),r.dispose(),i}};var hh=class extends ai{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}};var fh=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof hh?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function dh(n){let e=new Uint16Array(n.length);for(let t=0,i=n.length;t<i;++t)e[t]=Xi.toHalfFloat(n[t]);return e}function bg(n,e,t=0,i=n.length){let s=t,r=t+i-1;for(;s<r;){let o=s+r>>1;n[o]<e?s=o+1:r=o}return s-t}function iT(n,e,t){return .2126*n+.7152*e+.0722*t}function nT(n,e=Et){let t=n.clone();t.source=new fs({...t.image});let{width:i,height:s,data:r}=t.image,o=r;if(t.type!==e){e===Et?o=new Uint16Array(r.length):o=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let l=0,c=r.length;l<c;l++){let h=r[l];t.type===Et&&(h=Xi.fromHalfFloat(r[l])),t.type!==ut&&t.type!==Et&&(h/=a),e===Et&&(o[l]=Xi.toHalfFloat(h))}t.image.data=o,t.type=e}if(t.flipY){let a=o;o=o.slice();for(let l=0;l<s;l++)for(let c=0;c<i;c++){let h=s-l-1,f=4*(l*i+c),u=4*(h*i+c);o[u+0]=a[f+0],o[u+1]=a[f+1],o[u+2]=a[f+2],o[u+3]=a[f+3]}t.flipY=!1,t.image.data=o}return t}var ph=class{constructor(){let e=new qt(dh(new Float32Array([0,0,0,0])),1,1);e.type=Et,e.format=rt,e.minFilter=It,e.magFilter=It,e.wrapS=Bi,e.wrapT=Bi,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new qt(dh(new Float32Array([0,1])),1,2);t.type=Et,t.format=An,t.minFilter=It,t.magFilter=It,t.generateMipmaps=!1,t.needsUpdate=!0;let i=new qt(dh(new Float32Array([0,0,1,1])),2,2);i.type=Et,i.format=An,i.minFilter=It,i.magFilter=It,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=nT(e);t.wrapS=Bi,t.wrapT=ei;let{width:i,height:s,data:r}=t.image,o=new Float32Array(i*s),a=new Float32Array(i*s),l=new Float32Array(s),c=new Float32Array(s),h=0,f=0;for(let p=0;p<s;p++){let g=0;for(let y=0;y<i;y++){let _=p*i+y,x=Xi.fromHalfFloat(r[4*_+0]),M=Xi.fromHalfFloat(r[4*_+1]),S=Xi.fromHalfFloat(r[4*_+2]),w=iT(x,M,S);g+=w,h+=w,o[_]=w,a[_]=g}if(g!==0)for(let y=p*i,_=p*i+i;y<_;y++)o[y]/=g,a[y]/=g;f+=g,l[p]=g,c[p]=f}if(f!==0)for(let p=0,g=l.length;p<g;p++)l[p]/=f,c[p]/=f;let u=new Uint16Array(s),d=new Uint16Array(i*s);for(let p=0;p<s;p++){let g=(p+1)/s,y=bg(c,g);u[p]=Xi.toHalfFloat((y+.5)/s)}for(let p=0;p<s;p++)for(let g=0;g<i;g++){let y=p*i+g,_=(g+1)/i,x=bg(a,_,p*i,i);d[y]=Xi.toHalfFloat((x+.5)/i)}this.dispose();let{marginalWeights:m,conditionalWeights:v}=this;m.image={width:s,height:1,data:u},m.needsUpdate=!0,v.image={width:i,height:s,data:d},v.needsUpdate=!0,this.totalSum=h,this.map=t}};var Vd=6,sT=0,rT=1,oT=2,aT=3,lT=4,Pn=new R,ji=new R,Mg=new He,Eo=new Gi,Sg=new R,Ao=new R,cT=new R(0,1,0),mh=class{constructor(){let e=new qt(new Float32Array(4),1,1);e.format=rt,e.type=ut,e.wrapS=ei,e.wrapT=ei,e.generateMipmaps=!1,e.minFilter=tt,e.magFilter=tt,this.tex=e,this.count=0}updateFrom(e,t=[]){let i=this.tex,s=Math.max(e.length*Vd,1),r=Math.ceil(Math.sqrt(s));i.image.width!==r&&(i.dispose(),i.image.data=new Float32Array(r*r*4),i.image.width=r,i.image.height=r);let o=i.image.data;for(let l=0,c=e.length;l<c;l++){let h=e[l],f=l*Vd*4,u=0;for(let m=0;m<Vd*4;m++)o[f+m]=0;h.getWorldPosition(ji),o[f+u++]=ji.x,o[f+u++]=ji.y,o[f+u++]=ji.z;let d=sT;if(h.isRectAreaLight&&h.isCircular?d=rT:h.isSpotLight?d=oT:h.isDirectionalLight?d=aT:h.isPointLight&&(d=lT),o[f+u++]=d,o[f+u++]=h.color.r,o[f+u++]=h.color.g,o[f+u++]=h.color.b,o[f+u++]=h.intensity,h.getWorldQuaternion(Eo),h.isRectAreaLight)Pn.set(h.width,0,0).applyQuaternion(Eo),o[f+u++]=Pn.x,o[f+u++]=Pn.y,o[f+u++]=Pn.z,u++,ji.set(0,h.height,0).applyQuaternion(Eo),o[f+u++]=ji.x,o[f+u++]=ji.y,o[f+u++]=ji.z,o[f+u++]=Pn.cross(ji).length()*(h.isCircular?Math.PI/4:1);else if(h.isSpotLight){let m=h.radius||0;Sg.setFromMatrixPosition(h.matrixWorld),Ao.setFromMatrixPosition(h.target.matrixWorld),Mg.lookAt(Sg,Ao,cT),Eo.setFromRotationMatrix(Mg),Pn.set(1,0,0).applyQuaternion(Eo),o[f+u++]=Pn.x,o[f+u++]=Pn.y,o[f+u++]=Pn.z,u++,ji.set(0,1,0).applyQuaternion(Eo),o[f+u++]=ji.x,o[f+u++]=ji.y,o[f+u++]=ji.z,o[f+u++]=Math.PI*m*m,o[f+u++]=m,o[f+u++]=h.decay,o[f+u++]=h.distance,o[f+u++]=Math.cos(h.angle),o[f+u++]=Math.cos(h.angle*(1-h.penumbra)),o[f+u++]=h.iesMap?t.indexOf(h.iesMap):-1}else if(h.isPointLight){let m=Pn.setFromMatrixPosition(h.matrixWorld);o[f+u++]=m.x,o[f+u++]=m.y,o[f+u++]=m.z,u++,u+=4,u+=1,o[f+u++]=h.decay,o[f+u++]=h.distance}else if(h.isDirectionalLight){let m=Pn.setFromMatrixPosition(h.matrixWorld),v=ji.setFromMatrixPosition(h.target.matrixWorld);Ao.subVectors(m,v).normalize(),o[f+u++]=Ao.x,o[f+u++]=Ao.y,o[f+u++]=Ao.z}}this.count=e.length;let a=wo(o.buffer);return this.hash!==a?(this.hash=a,i.needsUpdate=!0,!0):!1}};function Tg(n,e,t,i,s){if(e>i)throw new Error;let r=n.length/e,o=n.constructor.BYTES_PER_ELEMENT*8,a=1;switch(n.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(o-1)-1;break}for(let l=0;l<r;l++){let c=4*l,h=e*l;for(let f=0;f<i;f++)t[s+c+f]=e>=f+1?n[h+f]/a:0}}var gh=class extends ds{constructor(){super(),this._textures=[],this.type=ut,this.format=rt,this.internalFormat="RGBA32F"}updateAttribute(e,t){let i=this._textures[e];i.updateFrom(t);let s=i.image,r=this.image;if(s.width!==r.width||s.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:o,height:a,data:l}=r,h=o*a*4*e,f=t.itemSize;f===3&&(f=4),Tg(i.image.data,f,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,i=e.length;for(let f=0,u=i;f<u;f++)if(e[f].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let s=this._textures;for(;s.length<i;){let f=new To;s.push(f)}for(;s.length>i;)s.pop();for(let f=0,u=i;f<u;f++)s[f].updateFrom(e[f]);let o=s[0].image,a=this.image;(o.width!==a.width||o.height!==a.height||o.depth!==i)&&(a.width=o.width,a.height=o.height,a.depth=i,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:l,width:c,height:h}=a;for(let f=0,u=i;f<u;f++){let d=s[f],v=c*h*4*f,p=e[f].itemSize;p===3&&(p=4),Tg(d.image.data,p,l,4,v)}this.dispose(),this.needsUpdate=!0}};var xh=class extends gh{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,i,s){this.setAttributes([e,t,i,s])}};function Gd(n,e){return n.uuid<e.uuid?1:n.uuid>e.uuid?-1:0}function vh(n){return`${n.source.uuid}:${n.colorSpace}`}function uT(n){let e=new Set,t=[];for(let i=0,s=n.length;i<s;i++){let r=n[i],o=vh(r);e.has(o)||(e.add(o),t.push(r))}return t}function wg(n){let e=n.map(i=>i.iesMap||null).filter(i=>i),t=new Set(e);return Array.from(t).sort(Gd)}function Eg(n){let e=new Set;for(let i=0,s=n.length;i<s;i++){let r=n[i];for(let o in r){let a=r[o];a&&a.isTexture&&e.add(a)}}let t=Array.from(e);return uT(t).sort(Gd)}function Ag(n){let e=[];return n.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(Gd)}var yh=47,Rg=yh*4,Wd=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},_h=class extends qt{constructor(){super(new Float32Array(4),1,1),this.format=rt,this.type=ut,this.wrapS=ei,this.wrapT=ei,this.minFilter=tt,this.magFilter=tt,this.generateMipmaps=!1,this.features=new Wd}updateFrom(e,t){function i(m,v,p=-1){if(v in m&&m[v]){let g=vh(m[v]);return f[g]}else return p}function s(m,v,p){return v in m?m[v]:p}function r(m,v,p,g){let y=m[v]&&m[v].isTexture?m[v]:null;if(y){y.matrixAutoUpdate&&y.updateMatrix();let _=y.matrix.elements,x=0;p[g+x++]=_[0],p[g+x++]=_[3],p[g+x++]=_[6],x++,p[g+x++]=_[1],p[g+x++]=_[4],p[g+x++]=_[7],x++}return 8}let o=0,a=e.length*yh,l=Math.ceil(Math.sqrt(a))||1,{image:c,features:h}=this,f={};for(let m=0,v=t.length;m<v;m++)f[vh(t[m])]=m;c.width!==l&&(this.dispose(),c.data=new Float32Array(l*l*4),c.width=l,c.height=l);let u=c.data;h.reset();for(let m=0,v=e.length;m<v;m++){let p=e[m];if(p.isFogVolumeMaterial){h.setUsed("FOG");for(let _=0;_<Rg;_++)u[o+_]=0;u[o+0+0]=p.color.r,u[o+0+1]=p.color.g,u[o+0+2]=p.color.b,u[o+8+3]=s(p,"emissiveIntensity",0),u[o+12+0]=p.emissive.r,u[o+12+1]=p.emissive.g,u[o+12+2]=p.emissive.b,u[o+52+1]=p.density,u[o+52+3]=0,u[o+56+2]=4,o+=Rg;continue}u[o++]=p.color.r,u[o++]=p.color.g,u[o++]=p.color.b,u[o++]=i(p,"map"),u[o++]=s(p,"metalness",0),u[o++]=i(p,"metalnessMap"),u[o++]=s(p,"roughness",0),u[o++]=i(p,"roughnessMap"),u[o++]=s(p,"ior",1.5),u[o++]=s(p,"transmission",0),u[o++]=i(p,"transmissionMap"),u[o++]=s(p,"emissiveIntensity",0),"emissive"in p?(u[o++]=p.emissive.r,u[o++]=p.emissive.g,u[o++]=p.emissive.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=i(p,"emissiveMap"),u[o++]=i(p,"normalMap"),"normalScale"in p?(u[o++]=p.normalScale.x,u[o++]=p.normalScale.y):(u[o++]=1,u[o++]=1),u[o++]=s(p,"clearcoat",0),u[o++]=i(p,"clearcoatMap"),u[o++]=s(p,"clearcoatRoughness",0),u[o++]=i(p,"clearcoatRoughnessMap"),u[o++]=i(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(u[o++]=p.clearcoatNormalScale.x,u[o++]=p.clearcoatNormalScale.y):(u[o++]=1,u[o++]=1),o++,u[o++]=s(p,"sheen",0),"sheenColor"in p?(u[o++]=p.sheenColor.r,u[o++]=p.sheenColor.g,u[o++]=p.sheenColor.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=i(p,"sheenColorMap"),u[o++]=s(p,"sheenRoughness",0),u[o++]=i(p,"sheenRoughnessMap"),u[o++]=i(p,"iridescenceMap"),u[o++]=i(p,"iridescenceThicknessMap"),u[o++]=s(p,"iridescence",0),u[o++]=s(p,"iridescenceIOR",1.3);let g=s(p,"iridescenceThicknessRange",[100,400]);u[o++]=g[0],u[o++]=g[1],"specularColor"in p?(u[o++]=p.specularColor.r,u[o++]=p.specularColor.g,u[o++]=p.specularColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=i(p,"specularColorMap"),u[o++]=s(p,"specularIntensity",1),u[o++]=i(p,"specularIntensityMap");let y=s(p,"thickness",0)===0&&s(p,"attenuationDistance",1/0)===1/0;if(u[o++]=Number(y),o++,"attenuationColor"in p?(u[o++]=p.attenuationColor.r,u[o++]=p.attenuationColor.g,u[o++]=p.attenuationColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=s(p,"attenuationDistance",1/0),u[o++]=i(p,"alphaMap"),u[o++]=p.opacity,u[o++]=p.alphaTest,!y&&p.transmission>0)u[o++]=0;else switch(p.side){case Ui:u[o++]=1;break;case mi:u[o++]=-1;break;case Kt:u[o++]=0;break}u[o++]=Number(s(p,"matte",!1)),u[o++]=Number(s(p,"castShadow",!0)),u[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,u[o++]=Number(p.transparent),o+=r(p,"map",u,o),o+=r(p,"metalnessMap",u,o),o+=r(p,"roughnessMap",u,o),o+=r(p,"transmissionMap",u,o),o+=r(p,"emissiveMap",u,o),o+=r(p,"normalMap",u,o),o+=r(p,"clearcoatMap",u,o),o+=r(p,"clearcoatNormalMap",u,o),o+=r(p,"clearcoatRoughnessMap",u,o),o+=r(p,"sheenColorMap",u,o),o+=r(p,"sheenRoughnessMap",u,o),o+=r(p,"iridescenceMap",u,o),o+=r(p,"iridescenceThicknessMap",u,o),o+=r(p,"specularColorMap",u,o),o+=r(p,"specularIntensityMap",u,o),o+=r(p,"alphaMap",u,o)}let d=wo(u.buffer);return this.hash!==d?(this.hash=d,this.needsUpdate=!0,!0):!1}};var Cg=new Le;function hT(n){return n?`${n.uuid}:${n.version}`:null}function fT(n,e){for(let t in e)t in n&&(n[t]=e[t])}var rl=class extends qo{constructor(e,t,i){let s={format:rt,type:gi,minFilter:It,magFilter:It,wrapS:Bi,wrapT:Bi,generateMipmaps:!1,...i};super(e,t,1,s),fT(this.texture,s),this.texture.setTextures=(...o)=>{this.setTextures(...o)},this.hashes=[null];let r=new yi(new Xd);this.fsQuad=r}setTextures(e,t,i=this.width,s=this.height){let r=e.getRenderTarget(),o=e.toneMapping,a=e.getClearAlpha();e.getClearColor(Cg);let l=t.length||1;(i!==this.width||s!==this.height||this.depth!==l)&&(this.setSize(i,s,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=rn;let c=this.fsQuad,h=this.hashes,f=!1;for(let u=0,d=l;u<d;u++){let m=t[u],v=hT(m);m&&(h[u]!==v||m.isWebGLRenderTarget)&&(m.matrixAutoUpdate=!1,m.matrix.identity(),c.material.map=m,e.setRenderTarget(this,u),c.render(e),m.updateMatrix(),m.matrixAutoUpdate=!0,h[u]=v,f=!0)}return c.material.map=null,e.setClearColor(Cg,a),e.setRenderTarget(r),e.toneMapping=o,f}dispose(){super.dispose(),this.fsQuad.dispose()}},Xd=class extends Tt{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function dT(n,e=Math.random()){for(let t=n.length-1;t>0;t--){let i=Math.floor(e()*(t+1)),s=n[t];n[t]=n[i],n[i]=s}return n}var bh=class{constructor(e,t,i=Math.random){let s=e**t,r=new Uint16Array(s),o=s;for(let a=0;a<s;a++)r[a]=a;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let a=0;a<s;a++)r[a]=a;o=0},this.reshuffle=function(){o=0},this.next=function(){let{samples:a}=this;o>=r.length&&(dT(r,i),this.reshuffle());let l=r[o++];for(let c=0;c<t;c++)a[c]=(l%e+i())/e,l=Math.floor(l/e);return a}}};var Mh=class{constructor(e,t,i=Math.random){let s=0;for(let l of t)s+=l;let r=new Float32Array(s),o=[],a=0;for(let l of t){let c=new bh(e,l,i);c.samples=new Float32Array(r.buffer,a,c.samples.length),a+=c.samples.length*4,o.push(c)}this.samples=r,this.strataCount=e,this.next=function(){for(let l of o)l.next();return r},this.reshuffle=function(){for(let l of o)l.reshuffle()},this.reset=function(){for(let l of o)l.reset()}}};var qd=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},Sh=class extends qt{constructor(e=1,t=1,i=8){super(new Float32Array(1),1,1,rt,ut),this.minFilter=tt,this.magFilter=tt,this.strata=i,this.sampler=null,this.generator=new qd,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,i)}init(e=this.image.height,t=this.image.width,i=this.strata){let{image:s}=this;if(s.width===t&&s.height===e&&this.sampler!==null)return;let r=new Array(e*t).fill(4),o=new Mh(i,r,this.random);s.width=t,s.height=e,s.data=o.samples,this.sampler=o,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function Ig(n,e=Math.random){for(let t=n.length-1;t>0;t--){let i=~~((e()-1e-6)*t),s=n[t];n[t]=n[i],n[i]=s}}function Pg(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}var ol=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,i=1/0,s=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==0)continue;let a=e[r];a<i&&(i=a,s=r)}return s}findCluster(){let{score:e,binaryPattern:t}=this,i=-1/0,s=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==1)continue;let a=e[r];a>i&&(i=a,s=r)}return s}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),i=2*t+1,s=new Float32Array(i*i),r=e*e;for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){let l=(t+a)*i+o+t,c=o*o+a*a;s[l]=Math.E**(-c/(2*r))}this.lookupTable=s,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let s=0,r=e.length;s<r;s++)if(e[s]===0){let o=~~(s/i),a=s-o*i;this.updateScore(a,o,1),e[s]=1}else e[s]=0}updateScore(e,t,i){let{size:s,score:r,lookupTable:o}=this,a=this.radius,l=2*a+1;for(let c=-a;c<=a;c++)for(let h=-a;h<=a;h++){let f=(a+h)*l+c+a,u=o[f],d=e+c;d=d<0?s+d:d%s;let m=t+h;m=m<0?s+m:m%s;let v=m*s+d;r[v]+=i*u}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,i=~~(e/t),s=e-i*t;this.updateScore(s,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,i=~~(e/t),s=e-i*t;this.updateScore(s,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}};var Th=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new ol(1),this.savedSamples=new ol(1)}generate(){let{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:s,size:r}=this;e.resize(r),e.setSigma(i);let o=Math.floor(r*r*s),a=e.binaryPattern;Pg(a,o),Ig(a,this.random);for(let f=0,u=a.length;f<u;f++)a[f]===1&&e.addPointIndex(f);for(;;){let f=e.findCluster();e.removePointIndex(f);let u=e.findVoid();if(f===u){e.addPointIndex(f);break}e.addPointIndex(u)}let l=new Uint32Array(r*r);t.copy(e);let c;for(c=e.count-1;c>=0;){let f=e.findCluster();e.removePointIndex(f),l[f]=c,c--}let h=r*r;for(c=t.count;c<h/2;){let f=t.findVoid();t.addPointIndex(f),l[f]=c,c++}for(t.invert();c<h;){let f=t.findCluster();t.removePointIndex(f),l[f]=c,c++}return{data:l,maxValue:h}}};function pT(n){return n>=3?4:n}function mT(n){switch(n){case 1:return An;case 2:return dn;default:return rt}}var wh=class extends qt{constructor(e=64,t=1){super(new Float32Array(4),1,1,rt,ut),this.minFilter=tt,this.magFilter=tt,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,i=new Th;i.channels=e,i.size=t;let s=pT(e),r=mT(s);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*s),this.format=r,this.dispose());let o=this.image.data;for(let a=0,l=e;a<l;a++){let c=i.generate(),h=c.data,f=c.maxValue;for(let u=0,d=h.length;u<d;u++){let m=h[u]/f;o[u*s+a]=m}}this.needsUpdate=!0}};var Dg=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var Lg=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var Fg=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`;var Ng=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`;var Ug=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`;var Bg=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`;var Og=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`;var zg=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`;var kg=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`;var Hg=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`;var Vg=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`;var Gg=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`;var Eh=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;var Yd=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`;var Wg=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`;var Xg=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`;var qg=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`;var Yg=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`;var $g=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`;var Zg=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`;var Kg=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`;var Jg=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`;var jg=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`;var Qg=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`;var ex=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`;var tx=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`;var ix=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;var Ah=class extends Os{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:yh},uniforms:{resolution:{value:new te},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new fh},cameraWorldMatrix:{value:new He},invProjectionMatrix:{value:new He},bvh:{value:new Ju},attributesArray:{value:new xh},materialIndexAttribute:{value:new So},materials:{value:new _h},textures:{value:new rl().texture},lights:{value:new mh},iesProfiles:{value:new rl(360,180,{type:Et,wrapS:ei,wrapT:ei}).texture},environmentIntensity:{value:1},environmentRotation:{value:new He},envMapInfo:{value:new ph},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new He},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new Sh},stratifiedOffsetTexture:{value:new wh(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${cr.common_functions}
				${cr.bvh_struct_definitions}
				${cr.bvh_ray_functions}

				// uniform structs
				${Dg}
				${Fg}
				${Lg}
				${Ng}
				${Ug}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Wg}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Yd}
					${ch}
					${yg}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${Yd}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${Gg}
				${kg}
				${Eh}
				${Hg}
				${Vg}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${zg}
				${Bg}
				${Og}

				${Kg}
				${Yg}
				${Zg}
				${$g}
				${qg}
				${Xg}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${tx}
				${jg}
				${ix}
				${Jg}
				${Qg}
				${ex}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}};function*xT(){let{_renderer:n,_fsQuad:e,_blendQuad:t,_primaryTarget:i,_blendTargets:s,_sobolTarget:r,_subframe:o,alpha:a,material:l}=this,c=new St,h=new St,f=t.material,[u,d]=s;for(;;){a?(f.opacity=this._opacityFactor/(this.samples+1),l.blending=li,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=bn);let[m,v,p,g]=o,y=i.width,_=i.height;l.resolution.set(y*p,_*g),l.sobolTexture=r.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let x=this.tiles.x||1,M=this.tiles.y||1,S=x*M,w=Math.ceil(y*p),b=Math.ceil(_*g),E=Math.floor(m*y),A=Math.floor(v*_),P=Math.ceil(w/x),I=Math.ceil(b/M);for(let F=0;F<M;F++)for(let B=0;B<x;B++){let N=n.getRenderTarget(),k=n.autoClear,Y=n.getScissorTest();n.getScissor(c),n.getViewport(h);let ie=B,ue=F;if(!this.stableTiles){let me=this._currentTile%(x*M);ie=me%x,ue=~~(me/x),this._currentTile=me+1}let xe=M-ue-1;i.scissor.set(E+ie*P,A+xe*I,Math.min(P,w-ie*P),Math.min(I,b-xe*I)),i.viewport.set(E,A,w,b),n.setRenderTarget(i),n.setScissorTest(!0),n.autoClear=!1,e.render(n),n.setViewport(h),n.setScissor(c),n.setScissorTest(Y),n.setRenderTarget(N),n.autoClear=k,a&&(f.target1=u.texture,f.target2=i.texture,n.setRenderTarget(d),t.render(n),n.setRenderTarget(N)),this.samples+=1/S,B===x-1&&F===M-1&&(this.samples=Math.round(this.samples)),yield}[u,d]=[d,u]}}var nx=new Le,al=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new te(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new St(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new yi(new Ah),this._blendQuad=new yi(new oh),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new uh().generate(e),this._primaryTarget=new Pt(1,1,{format:rt,type:ut,magFilter:tt,minFilter:tt}),this._blendTargets=[new Pt(1,1,{format:rt,type:ut,magFilter:tt,minFilter:tt}),new Pt(1,1,{format:rt,type:ut,magFilter:tt,minFilter:tt})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let i=0;e.projectionMatrix.elements[15]>0&&(i=1),e.isEquirectCamera&&(i=2),t.setDefine("CAMERA_TYPE",i),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:i}=this,s=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(nx),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(nx,r),e.setRenderTarget(s),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=xT.call(this)),this._task.next())}};var pr=new te,sx=new te,Rh=new ys,Ch=new Le,Ih=class extends qt{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,rt,ut,zn,Bi,ei,It,It),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:i}=this.image;for(let s=0;s<t;s++)for(let r=0;r<i;r++){sx.set(t,i),pr.set(s/t,r/i),pr.x-=.5,pr.y=1-pr.y,Rh.theta=pr.x*2*Math.PI,Rh.phi=pr.y*Math.PI,Rh.radius=1,this.generationCallback(Rh,pr,sx,Ch);let a=4*(r*t+s);e[a+0]=Ch.r,e[a+1]=Ch.g,e[a+2]=Ch.b,e[a+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}};var rx=new R,Ro=class extends Ih{constructor(e=512){super(e,e),this.topColor=new Le().set(16777215),this.bottomColor=new Le().set(0),this.exponent=2,this.generationCallback=(t,i,s,r)=>{rx.setFromSpherical(t);let o=rx.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,o**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}};var Ph=class extends Tt{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}};var $d=class extends Tt{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${Eh}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},ll=class{constructor(e){this._renderer=e,this._quad=new yi(new $d)}generate(e,t=null,i=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let s=e.images[0],r=this._renderer,o=this._quad;t===null&&(t=4*s.height),i===null&&(i=2*s.height);let a=new Pt(t,i,{type:ut,colorSpace:s.colorSpace}),l=s.height,c=Math.log2(l)-2,h=1/l,f=1/(3*Math.max(Math.pow(2,c),112));o.material.defines.CUBEUV_MAX_MIP=`${c}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=f,o.material.defines.CUBEUV_TEXEL_HEIGHT=h,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let u=r.getRenderTarget(),d=r.autoClear;r.autoClear=!0,r.setRenderTarget(a),o.render(r),r.setRenderTarget(u),r.autoClear=d;let m=new Uint16Array(t*i*4),v=new Float32Array(t*i*4);r.readRenderTargetPixels(a,0,0,t,i,v),a.dispose();for(let g=0,y=v.length;g<y;g++)m[g]=Xi.toHalfFloat(v[g]);let p=new qt(m,t,i,rt,Et);return p.minFilter=Cf,p.magFilter=It,p.wrapS=Bi,p.wrapT=Bi,p.mapping=zn,p.needsUpdate=!0,p}dispose(){this._quad.dispose()}};function vT(n){return n.extensions.get("EXT_float_blend")}var Co=new te,Dh=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new rh,this._pathTracer=new al(e),this._queueReset=!1,this._clock=new _a,this._compilePromise=null,this._lowResPathTracer=new al(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new yi(new Ph({map:null,transparent:!0,blending:li,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new te(1024,1024),this.rasterizeSceneCallback=(t,i)=>{this._renderer.render(t,i)},this.renderToCanvasCallback=(t,i,s)=>{let r=i.autoClear;i.autoClear=!1,s.render(i),i.autoClear=r},this.setScene(new Nn,new ai)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,i={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let s=this._generator;if(s.setObjects(e),this._buildAsync)return s.generateAsync(i.onProgress).then(r=>this._updateFromResults(e,t,r));{let r=s.generate();return this._updateFromResults(e,t,r)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,i=this._materials,s=this.textureSize,r=Eg(i);e.textures.setTextures(t,r,s.x,s.y),e.materials.updateFrom(i,r),this.reset()}updateLights(){let e=this.scene,t=this._renderer,i=this._pathTracer.material,s=Ag(e),r=wg(s);i.lights.updateFrom(s,r),i.iesProfiles.setTextures(t,r),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new Ro(16);let i=this._colorBackground;i.topColor.equals(e.background)||(i.topColor.set(e.background),i.bottomColor.set(e.background),i.update()),t.backgroundMap=i,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let i=new ll(this._renderer).generate(e.background);this._internalBackground=i,t.backgroundMap=i,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){let i=new ll(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(i)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,i){let{materials:s,geometry:r,bvh:o,bvhChanged:a,needsMaterialIndexUpdate:l}=i;this._materials=s;let h=this._pathTracer.material;return a&&(h.bvh.updateFrom(o),h.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color)),l&&h.materialIndexAttribute.updateFrom(r.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),i}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,i=this._renderer,s=this._clock,r=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,r.material.opacity=0,s.start());let o=s.getDelta()*1e3,a=s.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=a&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!vT(i),e.alpha=t.alpha,this.renderToCanvas){let l=this._renderer,c=this.minSamples;if(a>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?r.material.opacity=Math.min(r.material.opacity+o/this.fadeDuration,1):r.material.opacity=1),!this.enablePathTracing||this.samples<c||r.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let h=r.material.opacity;r.material.opacity=1-r.material.opacity,r.material.map=e.target.texture,r.render(l),r.material.opacity=h}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&r.material.opacity>0&&(r.material.opacity<1&&(r.material.blending=this.dynamicLowRes?Ki:bn),r.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,r),r.material.blending=li)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(Co);let e=Math.floor(this.renderScale*Co.x),t=Math.floor(this.renderScale*Co.y);if(this._pathTracer.getSize(Co),Co.x!==e||Co.y!==t){let i=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*i),Math.floor(t*i))}}}};var _T=()=>new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(n)));function Zd(n,e){n.matrixAutoUpdate=!1,n.matrix.copy(e),n.matrix.decompose(n.position,n.quaternion,n.scale),n.matrixWorld.copy(e)}function yT(n,e){n.updateMatrixWorld(!0);let t=new Nn;t.background=n.background?.isColor?n.background.clone():new Le("#030b15"),t.backgroundIntensity=n.backgroundIntensity??1,t.environmentIntensity=1.2;let i=new Set,s=new Map,r=new He,o=new He,a=new Le;function l(d,m=null){let v=`${d.uuid}:${m?`${m.r},${m.g},${m.b}`:""}`;if(s.has(v))return s.get(v);let p;if(d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)p=d.clone();else{let g=d.color?.clone()||new Le("#315269");p=new fn({color:g,metalness:0,roughness:d.shininess?Math.max(.12,Math.sqrt(2/(d.shininess+2))):.65,emissive:d.isMeshBasicMaterial?g:d.emissive||new Le(0),emissiveIntensity:d.isMeshBasicMaterial?1:d.emissiveIntensity??1,map:d.map||null,emissiveMap:d.isMeshBasicMaterial?d.map||null:d.emissiveMap||null,normalMap:d.normalMap||null,alphaMap:d.alphaMap||null,alphaTest:d.alphaTest||0,opacity:d.opacity??1,transparent:d.transparent||!1,side:d.side??Ui,vertexColors:d.vertexColors||!1})}return m&&p.color.multiply(m),d.visible===!1&&(p.transparent=!0,p.opacity=0),p.name=`photo:${d.name||d.type}`,s.set(v,p),i.add(p),p}function c(d,m){return Array.isArray(d)?d.map(v=>l(v,m)):l(d,m)}function h(d,m,v=null){let p=d.userData.photoMaterial||d.material;if(!p||!d.geometry?.attributes.position)return;let g=new yt(d.geometry,c(p,v));g.name=d.name,g.castShadow=d.castShadow,g.receiveShadow=d.receiveShadow,g.frustumCulled=d.frustumCulled,g.layers.mask=d.layers.mask,Zd(g,m),t.add(g)}function f(d){if(!(d.isPointLight||d.isSpotLight||d.isDirectionalLight||d.isRectAreaLight))return;let m=d.clone(!1);Zd(m,d.matrixWorld),d.target&&(d.target.updateWorldMatrix(!0,!1),m.target=new Zt,Zd(m.target,d.target.matrixWorld),t.add(m.target)),m.castShadow=!1,t.add(m)}function u(d,m=!0){let v=m&&d.visible&&!d.userData.noPhoto;if(!v)return;let p=(e.layers.mask&d.layers.mask)!==0;if(p&&d.isMesh&&!d.isPoints&&!d.isLine)if(d.isInstancedMesh)for(let g=0;g<d.count;g++)d.getMatrixAt(g,r),o.multiplyMatrices(d.matrixWorld,r),d.instanceColor&&d.getColorAt(g,a),h(d,o,d.instanceColor?a:null);else h(d,d.matrixWorld);else p&&d.isLight&&f(d);for(let g of d.children)u(g,v)}try{return u(n),t.updateMatrixWorld(!0),{scene:t,ownedMaterials:i}}catch(d){for(let m of i)m.dispose();throw d}}var Lh=class{constructor(e,t){this.renderer=e,this.camera=t,this.tracer=null,this.snapshot=null,this.environment=null,this.ownedMaterials=new Set,this._active=!1,this._preparing=!1,this._generation=0,this._shaderError=null,this._previousShaderError=null,this._shaderErrorHook=null}get active(){return this._active}get samples(){return this._active&&this.tracer?this.tracer.samples:0}get isCompiling(){return this._active&&!!this.tracer?.isCompiling}get status(){return this._preparing?"preparing":this._active?this.isCompiling?"compiling":"accumulating":"inactive"}async enter(e){(this._active||this._preparing||this.snapshot)&&this.exit();let t=++this._generation;if(this._preparing=!0,this._shaderError=null,await _T(),t===this._generation)try{let i=yT(e,this.camera);if(this.snapshot=i.scene,this.ownedMaterials=i.ownedMaterials,this.environment=new Ro(256),this.environment.topColor.setRGB(.6,.8,1.1),this.environment.bottomColor.setRGB(.1,.15,.2),this.environment.exponent=2,this.environment.update(),this.snapshot.environment=this.environment,this.tracer||(this.tracer=new Dh(this.renderer),this.tracer.bounces=5,this.tracer.transmissiveBounces=3,this.tracer.filterGlossyFactor=.5,this.tracer.tiles.set(3,3),this.tracer.renderScale=.75,this.tracer.dynamicLowRes=!0,this.tracer.lowResScale=.25,this.tracer.minSamples=1,this.tracer.renderDelay=0,this.tracer.fadeDuration=200,this.tracer.textureSize.set(512,512)),this._installShaderErrorHook(),this.camera.updateMatrixWorld(!0),this.tracer.setScene(this.snapshot,this.camera),this._shaderError)throw this._shaderError;this.renderer.setRenderTarget(null),this._active=!0,this._preparing=!1}catch(i){throw this.exit(),i}}render(){if(!(!this._active||!this.tracer))try{if(this._shaderError)throw this._shaderError;if(this.renderer.setRenderTarget(null),this.tracer.renderSample(),this._shaderError)throw this._shaderError}catch(e){throw this.exit(),e}}updateCamera(){!this._active||!this.tracer||(this.camera.updateMatrixWorld(!0),this.tracer.updateCamera())}_installShaderErrorHook(){let e=this.renderer.debug;e&&(this._previousShaderError=e.onShaderError,this._shaderErrorHook=(t,i,s,r)=>{let o=[t.getProgramInfoLog(i),t.getShaderInfoLog(s),t.getShaderInfoLog(r)].filter(Boolean).join(`
`);this._shaderError=new Error(`Path tracing shader compilation failed. ${o.slice(0,1800)}`),this._previousShaderError&&this._previousShaderError(t,i,s,r)},e.onShaderError=this._shaderErrorHook)}exit(){if(++this._generation,this._active=!1,this._preparing=!1,this.renderer.debug?.onShaderError===this._shaderErrorHook&&(this.renderer.debug.onShaderError=this._previousShaderError),this._shaderErrorHook=null,this._previousShaderError=null,this._shaderError=null,this.tracer&&this.snapshot)try{this.tracer.setScene(new Nn,this.camera)}catch(e){console.warn("Could not clear the photo scene; it will be replaced on next entry.",e)}for(let e of this.ownedMaterials)e.dispose();this.ownedMaterials.clear(),this.environment?.dispose(),this.environment=null,this.snapshot?.clear(),this.snapshot=null,this.renderer.setRenderTarget(null)}};var ae=n=>document.getElementById(n),Kd=n=>Math.floor(n).toLocaleString("en-US"),ox=n=>new R(n.x,n.y||0,n.z),ax=Object.keys(di),lx,cx;function gn(n){ae("toast").textContent=n,ae("toast").classList.add("visible"),clearTimeout(lx),lx=setTimeout(()=>ae("toast").classList.remove("visible"),3400)}function cl(n,e=""){ae("wave-banner").innerHTML=`<strong>${n}</strong><span>${e}</span>`,ae("wave-banner").classList.add("visible"),clearTimeout(cx),cx=setTimeout(()=>ae("wave-banner").classList.remove("visible"),3100)}async function bT(){await new Promise(requestAnimationFrame);let n=new Nn,e=new uu({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});e.toneMapping=Qs,e.toneMappingExposure=1.16,e.shadowMap.enabled=!0,e.shadowMap.type=js,e.info.autoReset=!1,e.setClearColor("#050d17"),e.domElement.setAttribute("aria-label","3D battlefield. Select a defense with keys 1 to 5, then click an empty platform. Right-drag to orbit."),e.domElement.tabIndex=0,ae("viewport").appendChild(e.domElement);let t=new ai(43,innerWidth/innerHeight,.2,360);t.position.set(39,36,44);let i=new mu(t,e.domElement);i.target.set(0,1,0),i.enableDamping=!0,i.dampingFactor=.075,i.minDistance=6,i.maxDistance=110,i.maxPolarAngle=Math.PI*.47,i.minPolarAngle=.17,i.mouseButtons={LEFT:null,MIDDLE:wn.PAN,RIGHT:wn.ROTATE},i.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},i.panSpeed=.8,i.rotateSpeed=.65;let s=document.createElement("canvas");s.width=1024,s.height=512;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,512);o.addColorStop(0,"#466182"),o.addColorStop(.45,"#19384c"),o.addColorStop(.5,"#819dad"),o.addColorStop(.62,"#142b3c"),o.addColorStop(1,"#050912"),r.fillStyle=o,r.fillRect(0,0,1024,512),r.fillStyle="#bed7e0",r.fillRect(135,55,90,165),r.fillStyle="#518393",r.fillRect(710,110,190,82);let a=new Qo(s);a.mapping=zn,a.colorSpace=Vi;let l=new to(e),c=l.fromEquirectangular(a);n.environment=c.texture,n.environmentIntensity=.65;let h=new ma("#88cdec","#12233a",1.3);n.add(h);let f=new $r("#c5eaff",3.7);f.position.set(-15,36,19),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-36,right:36,top:31,bottom:-31,near:.5,far:95}),f.shadow.bias=-4e-4,f.shadow.normalBias=.045,n.add(f);let u=new $r("#538eff",2.2);u.position.set(15,18,-30),n.add(u);let d=new Pt(innerWidth,innerHeight,{type:Et});d.samples=4;let m=new xu(e,d);m.addPass(new vu(n,t));let v=new ro(new te(innerWidth,innerHeight),.45,.5,1.15);m.addPass(v),m.addPass(new _u);let p=new so({uniforms:{tDiffuse:{value:null},amount:{value:.001}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
    void main(){vec2 d=vUv-.5; vec2 shift=d*dot(d,d)*amount; vec3 c=texture2D(tDiffuse,vUv).rgb; c.r=texture2D(tDiffuse,vUv+shift).r;c.b=texture2D(tDiffuse,vUv-shift).b;float v=1.-smoothstep(.22,.83,length(d))*.28;gl_FragColor=vec4(c*v,1.);}`});m.addPass(p);let g=new wu(n),y=new Eu,_=new Lh(e,t),x,M=0,S="menu",w=!1,b=1,E=null,A=null,P=!1,I=null,F=null,B=!1,N=!1,k=!1,Y=!1,ie=0,ue=0,xe=0,me=0,Me=60,Je="ultra",ht=new Map,$=new Map,U=new Map,X=new hi;X.userData.noPhoto=!0,n.add(X);let H=new hi;H.userData.noPhoto=!0,n.add(H);let ne=new Oi(43.2,28.8,90,60);ne.rotateX(-Math.PI/2);let ge=new yt(ne,new fi({visible:!1,side:Kt}));ge.userData.noPhoto=!0,n.add(ge);let de=new va,Ae=new te,Re={x:0,y:0,button:0},oe=new fi({color:"#132333",transparent:!0,opacity:.8,depthTest:!1}),he=new fi({color:"#ff8b71",depthTest:!1}),fe=new fi({color:"#b89aff",depthTest:!1}),Te=new Oi(1,.045),G=new yu({onEvent:Qe});function Ue(L){let ee=ht.get(L.id);ee&&n.remove(ee);let pe=ud(L.type,L.level,L.branch);pe.position.set(L.x,L.y+.07,L.z),pe.userData.towerId=L.id,n.add(pe),ht.set(L.id,pe),Q()}function Fe(L){let ee=u0(L.type);ee.position.set(L.x,L.y+.1,L.z),ee.rotation.y=L.angle,n.add(ee),$.set(L.id,ee);let pe=new hi;pe.userData.noPhoto=!0;let Xe=new yt(Te,oe);Xe.scale.set(1.3,2.3,1),pe.add(Xe);let Ne=new yt(Te,he);Ne.position.z=.01,pe.add(Ne);let st=new yt(Te,fe);st.position.set(0,.07,.01),pe.add(st),L.isBoss&&pe.scale.setScalar(2.7),pe.renderOrder=20,n.add(pe),U.set(L.id,{group:pe,hull:Ne,shield:st})}function qe(L){let ee=$.get(L.id);ee&&n.remove(ee),$.delete(L.id);let pe=U.get(L.id);pe&&n.remove(pe.group),U.delete(L.id)}function Qe(L){if((L.type==="build"||L.type==="upgrade")&&(Ue(L.tower),g.ring(new R(L.tower.x,L.tower.y+.15,L.tower.z),di[L.tower.type].color,2.1,.65),g.burst(new R(L.tower.x,L.tower.y+.4,L.tower.z),di[L.tower.type].color,18,.55),S==="game"&&y.play("build")),L.type==="sell"&&(n.remove(ht.get(L.tower.id)),ht.delete(L.tower.id),Q()),L.type==="spawn"&&(Fe(L.enemy),L.enemy.isBoss&&S==="game"&&(cl("RECOGNIZER INBOUND","Break its shield. Expose the reactor."),y.play("wave"))),L.type==="shot"){let ee=ht.get(L.tower.id),pe=ox(L.from),Xe=ox(L.to),Ne=di[L.weapon].color;if(ee?.userData.turret&&(ee.userData.turret.rotation.y=L.tower.angle),ee?.userData.muzzle&&(ee.updateMatrixWorld(!0),ee.userData.muzzle.getWorldPosition(pe)),L.weapon==="arc"){let st=pe;for(let Gt of L.targets){let si=new R(Gt.x,Gt.y+.8,Gt.z);g.lightning(st,si,Ne),st=si}}else if(L.weapon==="cryo")g.beam(pe,Xe,Ne,.045,.17),g.ring(Xe.clone().add(new R(0,-.45,0)),Ne,2.9,.55);else if(L.weapon==="mortar"){let st=pe;for(let Gt=1;Gt<=12;Gt++){let si=Gt/12,Ai=pe.clone().lerp(Xe,si);Ai.y+=Math.sin(si*Math.PI)*4,g.beam(st,Ai,Ne,.035,.2),st=Ai}g.burst(Xe,Ne,30,1.1),g.ring(Xe,Ne,3.2)}else g.beam(pe,Xe,Ne,L.weapon==="rail"?.065:.028,L.weapon==="rail"?.2:.08),g.burst(Xe,Ne,4,.35);g.flash(pe,Ne,L.weapon==="rail"?60:25),S==="game"&&y.play(L.weapon==="rail"?"rail":"shot")}if(L.type==="kill"&&(g.burst(new R(L.enemy.x,L.enemy.y+.6,L.enemy.z),L.enemy.color,L.enemy.isBoss?130:16,L.enemy.isBoss?2.5:.65),qe(L.enemy),S==="game"&&y.play("kill")),L.type==="leak"&&(g.ring(new R(L.enemy.x,L.enemy.y+.5,L.enemy.z),"#ff5e52",5),qe(L.enemy),S==="game"&&gn(`Core breach \xB7 ${L.enemy.leak} integrity lost`)),L.type==="wave"&&S==="game"&&(cl(`WAVE ${String(L.wave).padStart(2,"0")}`,L.wave%5===0?"Heavy signature detected. Ready your rail weapons.":"Hostile programs have entered the sector."),y.play("wave")),L.type==="waveClear"&&S==="game"&&cl("SECTOR STABILIZED",`Wave ${L.wave} cleared \xB7 +${L.reward} credits`),L.type==="ability")if(L.ability==="nova"){let ee=new R(L.x,G.groundHeight(L.x,L.z)+.3,L.z);g.ring(ee,"#efffff",8.5,1.8),g.ring(ee,"#67eaff",10,1.5),g.burst(ee.clone().add(new R(0,2,0)),"#8defff",190,3),g.beam(ee,ee.clone().add(new R(0,45,0)),"#bafcff",.42,.8),y.play("nova")}else G.towers.forEach(ee=>g.ring(new R(ee.x,ee.y+.1,ee.z),"#ffcb67",2.6,.9)),cl("GRID OVERDRIVE","All defense systems accelerated for 9 seconds"),y.play("wave");L.type==="bossPhase"&&S==="game"&&(cl(L.phase==="exposed"?"ARMOR BREACHED":"RECOGNIZER ENRAGED",L.phase==="exposed"?"Reactor exposed. Concentrate fire.":"The enemy is accelerating toward your core."),g.burst(new R(L.enemy.x,L.enemy.y+2,L.enemy.z),"#ff9b4a",50,1.5)),(L.type==="victory"||L.type==="defeat")&&S==="game"&&re(L.type)}function O(){ht.forEach(L=>n.remove(L)),$.forEach(L=>n.remove(L)),U.forEach(L=>n.remove(L.group)),ht.clear(),$.clear(),U.clear(),g.clear(),Mt(X),Mt(H),j()}function Mt(L){for(let ee of[...L.children])L.remove(ee),ee.geometry?.dispose(),ee.material&&ee.material.dispose()}function ot(L,ee=!1){O(),x?.dispose(),G.start(L),M=L,x=g0(n,e,L);let pe=ne.attributes.position;for(let Xe=0;Xe<pe.count;Xe++)pe.setY(Xe,G.groundHeight(pe.getX(Xe),pe.getZ(Xe))+.1);if(pe.needsUpdate=!0,ne.computeVertexNormals(),ne.computeBoundingSphere(),A=null,E=null,I=null,P=!1,ae("selection-panel").hidden=!0,ae("sector-name").textContent=Cs[L].name,ee){G.credits=1e4,[[5,4,"pulse"],[5,6,"arc"],[8,5,"cryo"],[12,4,"rail"],[12,7,"mortar"],[2,6,"pulse"],[15,4,"rail"]].forEach(([Ne,st,Gt])=>{let si=G.build(Gt,Ne,st);si.ok&&["rail","arc"].includes(Gt)&&G.upgrade(si.tower.id,"power")}),G.wave=5,G.startWave();for(let Ne=0;Ne<60;Ne++)G.update(.1)}ye(),Se(Je)}function D(L=S==="menu"){t.position.set(L?46:34,L?30:40,L?44:43),i.target.set(0,1,0),i.update(),L&&innerWidth>800?t.setViewOffset(innerWidth,innerHeight,-innerWidth*.19,0,innerWidth,innerHeight):t.clearViewOffset(),t.updateProjectionMatrix(),_.updateCamera()}function T(L=M){(_.active||k)&&le(),y.start(),S="game",w=!1,N=!1,b=1,B=!1,ae("hero").hidden=!0,ae("hud").hidden=!1,ae("sector-modal").hidden=!0,ae("result-modal").hidden=!0,ae("settings-modal").hidden=!0,ot(L),D(!1),q("pulse"),gn("Choose an empty socket to deploy. Link different towers for faster fire."),ye()}function W(){_.active&&le(),S="menu",w=!1,N=!1,B=!1,ae("hud").hidden=!0,ae("hero").hidden=!1,ae("result-modal").hidden=!0,ae("settings-modal").hidden=!0,ot(M,!0),D(!0)}function q(L){_.active||k||(E=L,A=null,P=!1,ae("selection-panel").hidden=!0,j(),Mt(H),document.querySelectorAll("[data-tower]").forEach(ee=>ee.classList.toggle("selected",ee.dataset.tower===L)),L&&(F=ud(L),F.userData.noPhoto=!0,F.traverse(ee=>{ee.isMesh&&(ee.material=ee.material.clone(),ee.material.transparent=!0,ee.material.opacity=.36,ee.material.depthWrite=!1,ee.castShadow=!1)}),F.visible=!1,n.add(F)),Ee(),_e())}function j(){F&&(n.remove(F),F.traverse(L=>{L.isMesh&&L.material.dispose()}),F=null)}function ve(L,ee,pe,Xe){Mt(H);let Ne=[];for(let Ai=0;Ai<=120;Ai++){let ci=Ai/120*Math.PI*2,ki=L+Math.cos(ci)*pe,ln=ee+Math.sin(ci)*pe;Ne.push(new R(ki,G.groundHeight(ki,ln)+.15,ln))}let st=new $s(new ft().setFromPoints(Ne),new qr({color:Xe,dashSize:.25,gapSize:.13,transparent:!0,opacity:.75,depthTest:!1}));st.computeLineDistances(),st.renderOrder=5,H.add(st);let Gt=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([Ai,ci])=>new R(L+Ai*1.12,G.groundHeight(L+Ai*1.12,ee+ci*1.12)+.15,ee+ci*1.12)),si=new $s(new ft().setFromPoints(Gt),new Ys({color:Xe,transparent:!0,opacity:.95,depthTest:!1}));H.add(si)}function _e(){if(!(S!=="game"||_.active)){if(F&&(F.visible=!!I),!I){A||Mt(H);return}if(P){ve(I.x,I.z,8.5,"#dcfdff");return}if(E){let{col:L,row:ee}=G.worldToCell(I.x,I.z),pe=G.cellToWorld(L,ee),Xe=G.canBuild(L,ee)&&G.credits>=di[E].cost;F.position.set(pe.x,G.groundHeight(pe.x,pe.z)+.08,pe.z),F.visible=L>=0&&ee>=0&&L<18&&ee<12,ve(pe.x,pe.z,di[E].range,Xe?di[E].color:"#ff5b64")}}}function Q(){Mt(X);for(let L=0;L<G.towers.length;L++)for(let ee=L+1;ee<G.towers.length;ee++){let pe=G.towers[L],Xe=G.towers[ee];if(pe.type===Xe.type||Math.hypot(pe.x-Xe.x,pe.z-Xe.z)>4.01)continue;let Ne=[];for(let Gt=0;Gt<=15;Gt++){let si=Gt/15,Ai=pe.x+(Xe.x-pe.x)*si,ci=pe.z+(Xe.z-pe.z)*si;Ne.push(new R(Ai,G.groundHeight(Ai,ci)+.17+Math.sin(si*Math.PI)*.24,ci))}let st=new $s(new ft().setFromPoints(Ne),new qr({color:"#b5edff",transparent:!0,opacity:.5,dashSize:.13,gapSize:.07}));st.computeLineDistances(),X.add(st)}}function se(L){q(null),A=L.id,ae("selection-panel").hidden=!1,ve(L.x,L.z,G.getTowerStats(L).range,di[L.type].color),Ge()}function we(){let L=G.towers.find(ee=>ee.id===A);L&&(B=!1,t.clearViewOffset(),i.target.set(L.x,L.y+1.1,L.z),t.position.set(L.x+8,L.y+7,L.z+10),i.update(),gn("Inspection view \xB7 Right-drag to orbit \xB7 Scroll closer \xB7 F returns to the full battlefield"))}function Ge(){let L=G.towers.find(Xe=>Xe.id===A);if(!L){ae("selection-panel").hidden=!0;return}let ee=G.getTowerStats(L);ae("selected-name").textContent=di[L.type].name,ae("selected-level").textContent=`Evolution ${L.level} / 3${L.branch?" \xB7 "+L.branch:""}`,ae("selected-description").textContent=di[L.type].description,ae("selected-stats").innerHTML=`<div><span>Damage</span><strong>${Math.round(ee.damage)}</strong></div><div><span>Range</span><strong>${ee.range.toFixed(1)} m</strong></div><div><span>Fire rate</span><strong>${(1/ee.interval).toFixed(1)} /s</strong></div><div><span>Eliminations</span><strong>${L.kills}</strong></div>`,ae("link-status").textContent=ee.links?`${Math.min(ee.links,3)} active links \xB7 +${Math.min(ee.links,3)*10}% fire rate`:"Place a different tower nearby to link +10% fire rate.";let pe=L.level>=3;ae("upgrade-power").textContent=pe?"Fully evolved":L.branch?`Evolve to level 3 \xB7 ${ee.upgradeCost}`:`Power evolution \xB7 ${ee.upgradeCost}`,ae("upgrade-utility").textContent=`Utility evolution \xB7 ${ee.upgradeCost}`,ae("upgrade-power").disabled=pe||G.credits<ee.upgradeCost,ae("upgrade-utility").disabled=pe||G.credits<ee.upgradeCost,ae("upgrade-utility").hidden=!!L.branch||pe,ae("upgrade-power").title="Increase damage. Later upgrades follow this branch.",ae("upgrade-utility").title="Increase range and improve chains, splash, slowing, or piercing.",ae("sell-button").textContent=`Dismantle \xB7 +${ee.sellValue}`}function Ee(){ae("hint").textContent=P?"Select a target for orbital nova \xB7 Esc to cancel":E?`${di[E].name} \xB7 ${di[E].cost} credits \xB7 Click an empty socket \xB7 Esc to cancel`:"1\u20135 deploy \xB7 Right-drag orbit \xB7 Scroll zoom \xB7 Space wave / pause \xB7 Q nova \xB7 E overdrive \xB7 F reset view",e.domElement.style.cursor=E||P?"crosshair":"grab"}function ye(){ae("credits-value").textContent=Kd(G.credits),ae("wave-value").textContent=`${String(G.wave).padStart(2,"0")} / ${G.totalWaves}`,ae("integrity-value").textContent=`${G.integrity}%`,ae("integrity-bar").style.width=`${G.integrity}%`,ae("integrity-bar").style.background=G.integrity<35?"#ff6b5e":"",ae("kills-value").textContent=Kd(G.kills),ae("pause-button").innerHTML=w?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',ae("pause-button").setAttribute("aria-label",w?"Resume battle":"Pause battle"),ae("pause-button").setAttribute("aria-pressed",String(w)),ae("speed-button").textContent=`${b}\xD7`;let L=G.wave+1;ae("wave-title").textContent=G.state==="wave"?w?"Battle paused":`Wave ${G.wave} in progress`:"Prepare your defenses",ae("wave-description").textContent=G.state==="wave"?`${G.enemies.length} hostile programs on the route${G.overdriveRemaining>0?" \xB7 OVERDRIVE ACTIVE":""}`:G.wave===0?"Deploy towers beside the illuminated route. Different systems link when placed together.":`Next: wave ${L}. Reinforce weak points and evolve your towers.`;let ee=L%5===0||L===G.totalWaves;ae("wave-preview").textContent=G.state==="wave"?G.enemies.some(pe=>pe.isBoss)?"RECOGNIZER \xB7 HEAVY SIGNATURE":"Protect the reactor at the end of the route.":ee?"Incoming: Recognizer + armored escort":L<2?"Incoming: light cycles":L<3?"Incoming: light cycles + shielded drones":L<4?"Incoming: armored walkers":"Incoming: mixed formation + shield carriers",ae("start-wave-button").textContent=G.state==="wave"?"Wave in progress":`Launch wave ${L}  [Space]`,ae("start-wave-button").disabled=G.state!=="ready"||_.active,document.querySelectorAll("[data-tower]").forEach(pe=>{let Xe=pe.dataset.tower;pe.classList.toggle("unaffordable",G.credits<di[Xe].cost),pe.querySelector("[data-cost]").textContent=di[Xe].cost,pe.querySelector(".tower-name").textContent=di[Xe].name}),ae("nova-cooldown").textContent=G.cooldowns.nova>0?`${Math.ceil(G.cooldowns.nova)}s`:"Ready",ae("overdrive-cooldown").textContent=G.overdriveRemaining>0?`${Math.ceil(G.overdriveRemaining)}s active`:G.cooldowns.overdrive>0?`${Math.ceil(G.cooldowns.overdrive)}s`:"Ready",ae("nova-button").disabled=G.state!=="wave"||G.cooldowns.nova>0,ae("overdrive-button").disabled=G.state!=="wave"||G.cooldowns.overdrive>0,ae("nova-button").classList.toggle("selected",P),A&&Ge()}function ze(L){return L.ok||gn(L.reason),ye(),_e(),L.ok}function Ke(){S!=="game"||_.active||k||(w=!w,ye(),gn(w?"Battle paused. Plan your next move.":"Battle resumed."))}function nt(L){N=!0,ae(L).hidden=!1}function z(L){ae(L).hidden=!0,N=!1}function be(){G.state!=="wave"||G.cooldowns.nova>0||(q(null),P=!0,Ee(),_e(),ye(),gn("Click the battlefield to call down orbital nova."))}function re(L){if(q(null),w=!1,ae("selection-panel").hidden=!0,ae("result-title").textContent=L==="victory"?"The light survives.":"End of line.",ae("result-description").textContent=L==="victory"?`${Cs[M].name} secured. Your defense held against every hostile program.`:"The reactor has fallen. Rebuild your network and hold the route.",ae("result-stats").innerHTML=`<div><strong>${Kd(G.score)}</strong><span>Score</span></div><div><strong>${G.kills}</strong><span>Eliminations</span></div><div><strong>${G.integrity}%</strong><span>Core integrity</span></div>`,ae("next-sector-button").hidden=L!=="victory"||M===2,ae("result-modal").hidden=!1,L==="victory")try{let ee=`end-of-line-best-${M}`;localStorage.setItem(ee,String(Math.max(G.score,Number(localStorage.getItem(ee))||0)))}catch{}}function Se(L){Je=L;let ee=Math.min(devicePixelRatio||1,L==="ultra"?1.75:L==="high"?1.25:1);e.setPixelRatio(ee),e.setSize(innerWidth,innerHeight),m.setPixelRatio(ee),m.setSize(innerWidth,innerHeight),e.shadowMap.enabled=L!=="performance";let pe=L==="ultra"?4096:2048;if(f.shadow.mapSize.x!==pe&&(f.shadow.mapSize.set(pe,pe),f.shadow.map?.dispose(),f.shadow.map=null),x){x.abyss.visible=L!=="performance";let Xe=L==="ultra"?1536:768;x.abyss.getRenderTarget().setSize(Xe,Xe)}d.samples=L==="ultra"?4:2;try{localStorage.setItem("end-of-line-quality",L)}catch{}}async function Ce(){if(!(_.active||k)){if(!ae("sector-modal").hidden||!ae("result-modal").hidden){gn("Close the current menu before entering photo mode.");return}k=!0,Y=w,w=!0,N=!1,B=!1,ae("settings-modal").hidden=!0,ae("hero").hidden=!0,ae("hud").hidden=!0,ae("photo-hud").hidden=!1,ae("photo-samples").textContent="Preparing traced geometry\u2026",H.visible=!1,X.visible=!1,F&&(F.visible=!1);try{await _.enter(n),k=!1,_.active&&gn("Path tracing active. Hold the camera still to converge. Right-drag to orbit.")}catch(L){console.error("Photo mode:",L),k=!1,le(),gn("Path tracing could not initialize on this browser. Real-time rendering restored.")}}}function le(){_.exit(),k=!1,w=Y,H.visible=!0,X.visible=!0,ae("photo-hud").hidden=!0,ae("hud").hidden=S!=="game",ae("hero").hidden=S!=="menu",_e()}function Ve(L){let ee=e.domElement.getBoundingClientRect();return Ae.set((L.clientX-ee.left)/ee.width*2-1,-(L.clientY-ee.top)/ee.height*2+1),de.setFromCamera(Ae,t),de.intersectObject(ge)[0]?.point||null}e.domElement.addEventListener("pointerdown",L=>{Re.x=L.clientX,Re.y=L.clientY,Re.button=L.button}),e.domElement.addEventListener("pointermove",L=>{I=Ve(L),_e()}),e.domElement.addEventListener("pointerleave",()=>{I=null,_e()}),e.domElement.addEventListener("pointerup",L=>{if(S!=="game"||_.active||k||N||Re.button!==0||Math.hypot(L.clientX-Re.x,L.clientY-Re.y)>6)return;let ee=Ve(L);if(!ee)return;if(P){ze(G.ability("nova",ee.x,ee.z)),P=!1,Mt(H),Ee();return}let{col:pe,row:Xe}=G.worldToCell(ee.x,ee.z),Ne=G.towers.find(st=>st.col===pe&&st.row===Xe);if(Ne){se(Ne);return}if(E){ze(G.build(E,pe,Xe));return}q(null)}),e.domElement.addEventListener("contextmenu",L=>L.preventDefault()),i.addEventListener("change",()=>{_.active&&_.updateCamera()}),ae("start-button").addEventListener("click",()=>T()),ae("sector-button").addEventListener("click",()=>nt("sector-modal")),ae("sector-modal-close").addEventListener("click",()=>z("sector-modal")),document.querySelectorAll("[data-sector]").forEach(L=>L.addEventListener("click",()=>T(Number(L.dataset.sector)))),ae("menu-button").addEventListener("click",W),ae("start-wave-button").addEventListener("click",()=>{w=!1,ze(G.startWave())}),document.querySelectorAll("[data-tower]").forEach(L=>L.addEventListener("click",()=>{y.start(),q(E===L.dataset.tower?null:L.dataset.tower)})),ae("pause-button").addEventListener("click",Ke),ae("speed-button").addEventListener("click",()=>{b=b===1?2:b===2?3:1,ye()}),ae("sound-button").addEventListener("click",()=>{y.start();let L=y.toggle();ae("sound-button").style.opacity=L?"1":".45",ae("sound-button").title=L?"Sound on":"Sound off",ae("sound-button").setAttribute("aria-pressed",String(L))}),ae("nova-button").addEventListener("click",be),ae("overdrive-button").addEventListener("click",()=>ze(G.ability("overdrive"))),ae("close-selection").addEventListener("click",()=>q(null)),ae("inspect-tower-button").addEventListener("click",we),ae("upgrade-power").addEventListener("click",()=>{let L=G.towers.find(ee=>ee.id===A);L&&(ze(G.upgrade(L.id,L.branch||"power")),se(L))}),ae("upgrade-utility").addEventListener("click",()=>{let L=G.towers.find(ee=>ee.id===A);L&&(ze(G.upgrade(L.id,"utility")),se(L))}),ae("sell-button").addEventListener("click",()=>{ze(G.sell(A)),q(null)}),ae("settings-button").addEventListener("click",()=>nt("settings-modal")),ae("settings-close").addEventListener("click",()=>z("settings-modal")),ae("quality-select").addEventListener("change",L=>Se(L.target.value)),ae("bloom-input").addEventListener("input",L=>v.strength=Number(L.target.value)),ae("photo-button").addEventListener("click",Ce),ae("photo-exit").addEventListener("click",le),ae("photo-save").addEventListener("click",()=>{if(_.active)try{_.render(),e.domElement.toBlob(L=>{if(!L)return;let ee=URL.createObjectURL(L),pe=document.createElement("a");pe.href=ee,pe.download=`end-of-line-${Cs[M].id}-${Math.floor(_.samples)}spp.png`,pe.click(),setTimeout(()=>URL.revokeObjectURL(ee),1e3)})}catch(L){console.error("Photo export:",L),le(),gn("Photo export failed. Real-time rendering restored.")}}),ae("reset-camera-button").addEventListener("click",()=>D()),ae("retry-button").addEventListener("click",()=>T()),ae("next-sector-button").addEventListener("click",()=>T((M+1)%3)),ae("result-menu-button").addEventListener("click",W),document.addEventListener("keydown",L=>{if(!["INPUT","SELECT","TEXTAREA"].includes(L.target.tagName)){if(L.key==="Escape"){if(_.active||k){le();return}for(let ee of["settings-modal","sector-modal"])if(!ae(ee).hidden){z(ee);return}E||A||P?q(null):S==="game"&&Ke();return}if(!L.repeat&&L.key.toLowerCase()==="p"){L.preventDefault(),Ce();return}if(!(_.active||k||N)){if(L.key.toLowerCase()==="f"){D();return}if(L.key.toLowerCase()==="r"&&S==="game"){we();return}S==="game"&&(L.code==="Space"&&(L.preventDefault(),L.repeat||(G.state==="ready"?(w=!1,ze(G.startWave())):Ke())),ax[Number(L.key)-1]&&q(ax[Number(L.key)-1]),L.key.toLowerCase()==="q"&&be(),L.key.toLowerCase()==="e"&&ze(G.ability("overdrive")),L.key.toLowerCase()==="c"&&(B=!B,gn(B?"Cinematic orbit enabled. Press C to stop.":"Tactical camera restored.")))}}}),document.addEventListener("visibilitychange",()=>{document.hidden&&S==="game"&&!_.active&&(w=!0,ye())}),window.addEventListener("resize",()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),Se(Je),S==="menu"&&innerWidth>800?t.setViewOffset(innerWidth,innerHeight,-innerWidth*.19,0,innerWidth,innerHeight):t.clearViewOffset(),_.updateCamera()}),e.domElement.addEventListener("webglcontextlost",L=>{L.preventDefault(),w=!0,ae("error-panel").hidden=!1,ae("error-message").textContent="The graphics context was interrupted. Reload this page to restore the battlefield."});function ke(L){requestAnimationFrame(ke);let ee=(L-ie)/1e3||.016,pe=Math.min(.05,ee);if(ie=L,document.hidden||(i.autoRotate=(S==="menu"||B)&&!_.active&&!k&&!N,i.autoRotateSpeed=S==="menu"?.13:.55,i.update(pe),k))return;if(_.active){try{_.render(),ae("photo-samples").textContent=_.isCompiling?"Compiling path-tracing shaders\u2026":`${Math.floor(_.samples)} samples \xB7 5 light bounces \xB7 hold camera still`}catch(Ne){console.error("Path tracing failed:",Ne),le(),gn("Path tracing interrupted. Real-time rendering restored.")}return}let Xe=!w&&!N;Xe&&G.update(pe*(S==="menu"?1:b)),x.update(L/1e3,pe,G.integrity),g.update(pe),S==="menu"&&(G.state==="ready"||G.state==="defeat"||G.state==="victory")&&(G.state!=="ready"?ot(M,!0):(G.integrity=100,G.startWave()));for(let Ne of G.towers){let st=ht.get(Ne.id);if(st&&(st.userData.turret&&(st.userData.turret.rotation.y=Ne.angle),Xe))for(let Gt of st.userData.rotors||[])Gt.rotation[Gt.userData.axis||"y"]+=pe*(Gt.userData.speed||.3)*(G.overdriveRemaining>0?2:1)}for(let Ne of G.enemies){let st=$.get(Ne.id);if(!st)continue;st.position.set(Ne.x,Ne.y+.1,Ne.z);let Gt=Math.sin(Ne.angle)*.3,si=Math.cos(Ne.angle)*.3,Ai=Ne.type==="drone"?0:Math.atan2(G.groundHeight(Ne.x+Gt,Ne.z+si)-G.groundHeight(Ne.x-Gt,Ne.z-si),.6);if(st.rotation.set(-Ai,Ne.angle,0,"YXZ"),Ne.type==="drone"&&(st.position.y+=Math.sin(G.time*4+Ne.id)*.1),Xe)for(let ki of st.userData.rotors||[])ki.rotation[ki.userData.axis||"y"]+=pe*(ki.userData.speed||2);st.userData.shield&&(st.userData.shield.visible=Ne.shield>0),st.userData.armorPanels&&(st.userData.armorPanels.visible=Ne.phase===1),st.userData.exposedCore&&(st.userData.exposedCore.visible=Ne.phase>1,st.userData.exposedCore.scale.setScalar(1+Math.sin(G.time*(Ne.phase===3?14:5))*.07));let ci=U.get(Ne.id);if(ci){ci.group.position.copy(st.position).add(new R(0,Ne.isBoss?4.8:Ne.type==="cycle"?1.25:2.3,0)),ci.group.quaternion.copy(t.quaternion);let ki=Math.max(0,Ne.hp/Ne.maxHp);ci.hull.scale.x=ki,ci.hull.position.x=(ki-1)*.5,ci.shield.visible=Ne.shield>0,ci.shield.scale.x=Ne.maxShield?Ne.shield/Ne.maxShield:0,ci.group.visible=S==="game"&&(Ne.hp<Ne.maxHp||Ne.isBoss||Ne.shield>0)}if(Xe&&Ne.type==="cycle"&&Math.random()<pe*20){let ki=new R(0,.18,-.8).applyAxisAngle(new R(0,1,0),Ne.angle).add(st.position),ln=ki.clone().add(new R(-Math.sin(Ne.angle)*.7,0,-Math.cos(Ne.angle)*.7));g.beam(ki,ln,"#ff7844",.025,.24)}}e.info.reset(),m.render(pe),ue+=pe,xe+=ee,me++,ue>.15&&(ue=0,S==="game"&&ye()),xe>1&&(Me=me/xe,me=0,xe=0)}try{let L=localStorage.getItem("end-of-line-quality");["ultra","high","performance"].includes(L)&&(Je=L)}catch{}ae("quality-select").value=Je,ae("bloom-input").value=String(v.strength),ot(0,!0),D(!0),ae("loading").hidden=!0,Ee(),requestAnimationFrame(ke),window.EOL={snapshot:()=>({...G.getSnapshot(),mode:S,paused:w,selectedId:A,buildType:E,aimingNova:P,quality:Je,photo:_.active,samples:_.samples,fps:Me,drawCalls:e.info.render.calls,triangles:e.info.render.triangles}),projectCell:(L,ee)=>{let pe=G.cellToWorld(L,ee),Xe=new R(pe.x,G.groundHeight(pe.x,pe.z)+.1,pe.z).project(t);return{x:(Xe.x+1)*innerWidth/2,y:(1-Xe.y)*innerHeight/2}}}}bT().catch(n=>{console.error("END OF LINE initialization failed",n),ae("loading")&&(ae("loading").hidden=!0),ae("error-panel")&&(ae("error-panel").hidden=!1,ae("error-message").textContent=`The 3D renderer could not start: ${n.message}. Use a current Chrome or Edge browser with graphics acceleration enabled.`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
