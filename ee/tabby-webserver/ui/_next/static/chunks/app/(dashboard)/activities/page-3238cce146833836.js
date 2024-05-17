(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4986],{6587:function(e,s,t){Promise.resolve().then(t.bind(t,72472))},72472:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Y},listUserEvents:function(){return D}});var r=t(57437),n=t(2265),a=t(30415),l=t.n(a),i=t(86634),d=t(62067),o=t.n(d),c=t(84279),u=t.n(c),f=t(6435),m=t(71424),x=t(99109),h=t(61985),v=t(60106),p=t(70349),g=t(48723),j=t(93023),b=t(86110),N=t(84168),w=t(58094),y=t(32553),k=t(95482),C=t(59039),S=t(70825);let E=l()(()=>t.e(7412).then(t.t.bind(t,7412,23)),{loadableGenerated:{webpack:()=>[7412]},ssr:!1}),I="-24h",D=(0,v.BX)("\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n");function Y(){var e,s,t,a;let l=o()().add(parseInt(I,10),"hour"),i=o()(),[d]=(0,g.d)(),[c,u]=n.useState({from:l.toDate(),to:i.toDate()}),[f,v]=n.useState(1),[p,k]=n.useState(),[E,Y]=n.useState("all"),[T,A]=n.useState({last:h.L8}),[{data:O,error:P,fetching:$}]=(0,x.aM)({query:D,variables:{start:o()(c.from).utc().format(),end:c.to?o()(c.to).utc().format():o()(c.from).utc().format(),users:"all"===E?void 0:[E],...T}});return n.useEffect(()=>{(null==O?void 0:O.userEvents.edges.length)&&k(O.userEvents)},[O]),n.useEffect(()=>{(null==P?void 0:P.message)&&m.A.error(P.message)},[P]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex w-full flex-col",children:(0,r.jsx)("div",{className:"flex flex-col sm:gap-4 sm:py-4",children:(0,r.jsxs)("main",{className:"grid flex-1 items-start gap-4 py-4 sm:py-0",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-y-2 xl:flex-row xl:items-center xl:justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"View raw events generated by team members' activities while interacting with Tabby."}),d.length>0&&(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2 md:flex-row xl:ml-auto",children:[(0,r.jsxs)(w.Ph,{defaultValue:"all",onValueChange:Y,children:[(0,r.jsx)(w.i4,{className:"w-[calc(100vw-2rem)] py-0 md:w-auto",children:(0,r.jsx)("div",{className:"flex h-6 items-center",children:(0,r.jsx)("div",{className:"overflow-hidden text-ellipsis text-left md:w-[190px]",children:(0,r.jsx)(w.ki,{})})})}),(0,r.jsx)(w.Bw,{align:"end",children:(0,r.jsxs)(w.DI,{children:[(0,r.jsx)(w.Ql,{value:"all",children:"All members"}),d.map(e=>(0,r.jsx)(w.Ql,{value:e.id,children:e.email},e.id))]})})]}),(0,r.jsx)(C.Z,{className:"w-[calc(100vw-2rem)] md:w-[240px]",options:[{label:"Last 24 hours",value:"-24h"},{label:"Last 7 days",value:"-7d"},{label:"Last 14 days",value:"-14d"}],defaultValue:I,onSelect:e=>{u(e),v(1),A({last:h.L8})},hasToday:!0,hasYesterday:!0})]})]}),(0,r.jsx)(S.Z,{loading:$,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.Zb,{"x-chunk":"dashboard-06-chunk-0",className:"bg-transparent",children:[(!(null==O?void 0:O.userEvents.edges)||(null==O?void 0:O.userEvents.edges.length)===0)&&(0,r.jsxs)(b.aY,{className:"flex flex-col items-center py-40 text-sm",children:[(0,r.jsx)(N.IconFileSearch,{className:"mb-2 h-10 w-10"}),(0,r.jsx)("p",{className:"font-semibold",children:"No data available for the chosen dates"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Please try a different date range"})]}),(null==O?void 0:O.userEvents.edges)&&(null==O?void 0:O.userEvents.edges.length)>0&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.aY,{className:"w-[calc(100vw-2rem)] overflow-x-auto px-0 pb-0 md:w-auto",children:(0,r.jsxs)(y.iA,{children:[(0,r.jsx)(y.xD,{children:(0,r.jsxs)(y.SC,{children:[(0,r.jsx)(y.ss,{}),(0,r.jsx)(y.ss,{className:"md:w-[30%]",children:"Event"}),(0,r.jsx)(y.ss,{className:"md:w-[40%]",children:"User"}),(0,r.jsx)(y.ss,{className:"md:w-[30%] md:pr-8",children:"Time"})]})}),(0,r.jsx)(y.RM,{children:null==p?void 0:p.edges.sort((e,s)=>new Date(s.node.createdAt).getTime()-new Date(e.node.createdAt).getTime()).map(e=>(0,r.jsx)(R,{activity:e.node,members:d},e.cursor))})]})})})]}),((null==O?void 0:null===(e=O.userEvents.pageInfo)||void 0===e?void 0:e.hasNextPage)||(null==O?void 0:null===(s=O.userEvents.pageInfo)||void 0===s?void 0:s.hasPreviousPage))&&(0,r.jsxs)("div",{className:"flex justify-end",children:[(0,r.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:[" ","Page ",f]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(j.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:!(null==O?void 0:null===(t=O.userEvents.pageInfo)||void 0===t?void 0:t.hasNextPage),onClick:e=>{var s;A({first:h.L8,after:null==O?void 0:null===(s=O.userEvents.pageInfo)||void 0===s?void 0:s.endCursor}),v(f-1)},children:(0,r.jsx)(N.IconChevronLeft,{className:"h-4 w-4"})}),(0,r.jsx)(j.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:!(null==O?void 0:null===(a=O.userEvents.pageInfo)||void 0===a?void 0:a.hasPreviousPage),onClick:e=>{var s;A({last:h.L8,before:null==O?void 0:null===(s=O.userEvents.pageInfo)||void 0===s?void 0:s.startCursor}),v(f+1)},children:(0,r.jsx)(N.IconChevronRight,{className:"h-4 w-4"})})]})]})]})})]})})})})}function R(e){var s;let t,{activity:a,members:l}=e,{theme:d}=(0,f.F)(),[c,x]=n.useState(!1);try{t=JSON.parse(a.payload)}catch(e){(null==e?void 0:e.message)&&m.A.error(e.message)}if(!t)return null;let h="";switch(a.kind){case p.nS.Completion:h="Code completion supplied";break;case p.nS.Dismiss:h="Code completion viewed but not used";break;case p.nS.Select:h="Code completion accepted and inserted";break;case p.nS.View:h="Code completion shown in editor"}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y.SC,{className:"cursor-pointer text-sm",onClick:()=>x(!c),children:[(0,r.jsx)(y.pj,{className:"pl-4 pr-0",children:(0,r.jsxs)("div",{className:"flex h-8 w-8 items-center justify-center rounded hover:bg-muted",children:[c&&(0,r.jsx)(N.IconChevronsDownUp,{}),!c&&(0,r.jsx)(N.IconChevronUpDown,{})]})}),(0,r.jsx)(y.pj,{className:"font-medium",children:(0,r.jsxs)(k.u,{children:[(0,r.jsx)(k.aJ,{children:(0,i.Z)(a.kind)}),(0,r.jsx)(k._v,{children:(0,r.jsx)("p",{children:h})})]})}),(0,r.jsx)(y.pj,{children:(null===(s=l.find(e=>e.id===a.userId))||void 0===s?void 0:s.email)||a.userId}),(0,r.jsx)(y.pj,{className:"pr-4 md:pr-8",children:(0,r.jsxs)(k.u,{children:[(0,r.jsx)(k.aJ,{children:o()(a.createdAt).isBefore(o()().subtract(1,"days"))?o()(a.createdAt).format("YYYY-MM-DD HH:mm"):o()(a.createdAt).fromNow()}),(0,r.jsxs)(k._v,{children:[(0,r.jsxs)("p",{className:"py-0.5",children:[(0,r.jsx)("b",{className:"mr-1 inline-block w-7",children:"UTC:"}),o().utc(a.createdAt).format("YYYY-MM-DD HH:mm:ss")]}),(0,r.jsxs)("p",{className:"py-0.5",children:[(0,r.jsxs)("b",{className:"mr-1 inline-block w-7",children:[u().tz(u().tz.guess()).format("z"),":"]}),o()(a.createdAt).format("YYYY-MM-DD HH:mm:ss")]})]})]})})]},"".concat(a.id,"}-1")),c&&(0,r.jsx)(y.SC,{className:"w-full bg-muted/30",children:(0,r.jsx)(y.pj,{className:"px-6 font-medium",colSpan:4,children:(0,r.jsx)(E,{src:t,name:!1,collapseStringsAfterLength:50,theme:"dark"===d?"tomorrow":"rjv-default",style:"dark"===d?{background:"transparent"}:{}})})},"".concat(a.id,"-2"))]})}},93111:function(e,s,t){"use strict";t.d(s,{PF:function(){return d},cg:function(){return l},tB:function(){return i}});var r=t(57437),n=t(39311),a=t(25645);let l=e=>{let{className:s,...t}=e;return(0,r.jsxs)("div",{className:(0,n.cn)("space-y-3",s),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:s,...t}=e;return(0,r.jsx)(a.O,{className:(0,n.cn)("h-4 w-full",s),...t})},d=e=>{let{className:s,...t}=e;return(0,r.jsxs)("div",{className:(0,n.cn)("flex flex-col gap-3",s),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},93023:function(e,s,t){"use strict";t.d(s,{d:function(){return d},z:function(){return o}});var r=t(57437),n=t(2265),a=t(67256),l=t(7404),i=t(39311);let d=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),o=n.forwardRef((e,s)=>{let{className:t,variant:n,size:l,asChild:o=!1,...c}=e,u=o?a.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(d({variant:n,size:l,className:t})),ref:s,...c})});o.displayName="Button"},16775:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var r=t(57437),n=t(2265),a=t(26823),l=t(39311);let i=n.forwardRef((e,s)=>{let{className:t,orientation:n="horizontal",decorative:i=!0,...d}=e;return(0,r.jsx)(a.f,{ref:s,decorative:i,orientation:n,className:(0,l.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",t),...d})});i.displayName=a.f.displayName},25645:function(e,s,t){"use strict";t.d(s,{O:function(){return a}});var r=t(57437),n=t(39311);function a(e){let{className:s,...t}=e;return(0,r.jsx)("div",{className:(0,n.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",s),...t})}},32553:function(e,s,t){"use strict";t.d(s,{RM:function(){return d},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return u},xD:function(){return i}});var r=t(57437),n=t(2265),a=t(39311);let l=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("table",{ref:s,className:(0,a.cn)("w-full caption-bottom text-sm",t),...n})});l.displayName="Table";let i=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("thead",{ref:s,className:(0,a.cn)("[&_tr]:border-b",t),...n})});i.displayName="TableHeader";let d=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("tbody",{ref:s,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...n})});d.displayName="TableBody";let o=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("tfoot",{ref:s,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...n})});o.displayName="TableFooter";let c=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("tr",{ref:s,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...n})});c.displayName="TableRow";let u=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("th",{ref:s,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...n})});u.displayName="TableHead";let f=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("td",{ref:s,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...n})});f.displayName="TableCell";let m=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)("caption",{ref:s,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...n})});m.displayName="TableCaption"},95482:function(e,s,t){"use strict";t.d(s,{_v:function(){return c},aJ:function(){return o},pn:function(){return i},u:function(){return d}});var r=t(57437),n=t(2265),a=t(98567),l=t(39311);let i=a.zt,d=a.fC,o=a.xz,c=n.forwardRef((e,s)=>{let{className:t,sideOffset:n=4,...i}=e;return(0,r.jsx)(a.VY,{ref:s,sideOffset:n,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...i})});c.displayName=a.VY.displayName},12897:function(e,s,t){"use strict";t.d(s,{S:function(){return i},n:function(){return d}});var r=t(2265),n=t(50976);function a(e){let s=r.useRef(e);return s.current=e,s}let l=e=>{let s=a(e);r.useEffect(()=>()=>{s.current()},[])};function i(e,s,t){let i=a(e),d=r.useMemo(()=>(0,n.Z)(function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return i.current(...s)},s,t),[]);return l(()=>d.cancel()),{run:d,cancel:d.cancel,flush:d.flush}}function d(e,s,t){let[n,a]=r.useState(e),{run:l}=i(()=>{a(e)},s,t);return r.useEffect(()=>{l()},[e]),[n,a]}}},function(e){e.O(0,[6990,7326,768,9109,7166,2699,1424,7070,3714,2453,6155,9079,2704,7753,4168,7957,2971,7864,1744],function(){return e(e.s=6587)}),_N_E=e.O()}]);