!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var o=r();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(global,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r);const o=require("electron"),n={ipcRenderer:{sendMessage(e,...r){o.ipcRenderer.send(e,...r)},on(e,r){const n=(e,...o)=>r(...o);return o.ipcRenderer.on(e,n),()=>{o.ipcRenderer.removeListener(e,n)}},once(e,r){o.ipcRenderer.once(e,((e,...o)=>r(...o)))},getMusicFiles:e=>o.ipcRenderer.invoke("getMusicFiles",e),getMusicData:(e,r)=>o.ipcRenderer.invoke("getMusicData",e,r),openExplorer:e=>o.ipcRenderer.invoke("openExplorer",e)}};return o.contextBridge.exposeInMainWorld("electron",n),r})()));
//# sourceMappingURL=preload.js.map