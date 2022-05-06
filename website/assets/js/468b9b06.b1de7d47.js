"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1076],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"vendor-specific",title:"Cloud and Vendor Specific Fixes"},s=void 0,c={unversionedId:"vendor-specific",id:"version-v3.7.x/vendor-specific",title:"Cloud and Vendor Specific Fixes",description:"Running on private GKE Cluster nodes",source:"@site/versioned_docs/version-v3.7.x/cloud-specific.md",sourceDirName:".",slug:"/vendor-specific",permalink:"/gatekeeper/website/docs/v3.7.x/vendor-specific",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/cloud-specific.md",tags:[],version:"v3.7.x",frontMatter:{id:"vendor-specific",title:"Cloud and Vendor Specific Fixes"},sidebar:"version-v3.7.x/docs",previous:{title:"Emergency Recovery",permalink:"/gatekeeper/website/docs/v3.7.x/emergency"},next:{title:"Failing Closed",permalink:"/gatekeeper/website/docs/v3.7.x/failing-closed"}},p={},u=[{value:"Running on private GKE Cluster nodes",id:"running-on-private-gke-cluster-nodes",level:2},{value:"Running on OpenShift 4.x",id:"running-on-openshift-4x",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"running-on-private-gke-cluster-nodes"},"Running on private GKE Cluster nodes"),(0,i.kt)("p",null,"By default, firewall rules restrict the cluster master communication to nodes only on ports 443 (HTTPS) and 10250 (kubelet). Although Gatekeeper exposes its service on port 443, GKE by default enables ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-aggregator-routing")," option, which makes the master to bypass the service and communicate straight to the POD on port 8443."),(0,i.kt)("p",null,"Two ways of working around this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a new firewall rule from master to private nodes to open port ",(0,i.kt)("inlineCode",{parentName:"li"},"8443")," (or any other custom port)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules"},"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules")))),(0,i.kt)("li",{parentName:"ul"},"make the pod to run on privileged port 443 (need to run pod as root)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"update Gatekeeper deployment manifest spec:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"remove ",(0,i.kt)("inlineCode",{parentName:"li"},"securityContext")," settings that force the pods not to run as root"),(0,i.kt)("li",{parentName:"ul"},"update port from ",(0,i.kt)("inlineCode",{parentName:"li"},"8443")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"443"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n- args:\n  - --port=443\n  ports:\n  - containerPort: 443\n    name: webhook-server\n    protocol: TCP\n")))))),(0,i.kt)("h2",{id:"running-on-openshift-4x"},"Running on OpenShift 4.x"),(0,i.kt)("p",null,"When running on OpenShift, the ",(0,i.kt)("inlineCode",{parentName:"p"},"anyuid")," scc must be used to keep a restricted profile but being able to set the UserID."),(0,i.kt)("p",null,"In order to use it, the following section must be added to the gatekeeper-manager-role Role:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiGroups:\n  - security.openshift.io\n  resourceNames:\n    - anyuid\n  resources:\n    - securitycontextconstraints\n  verbs:\n    - use\n")),(0,i.kt)("p",null,"With this restricted profile, it won't be possible to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"container.seccomp.security.alpha.kubernetes.io/manager: runtime/default")," annotation. On the other hand, given the limited amount of privileges provided by the anyuid scc, the annotation can be removed."))}m.isMDXComponent=!0}}]);