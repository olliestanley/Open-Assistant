"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[7991],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},h=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return t?r.createElement(m,l(l({ref:a},h),{},{components:t})):r.createElement(m,l({ref:a},h))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26193:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const i={},l="Retrieval Directions and Research Papers",s={unversionedId:"research/retrieval",id:"research/retrieval",title:"Retrieval Directions and Research Papers",description:"Dataset and Benchmark",source:"@site/docs/research/retrieval.md",sourceDirName:"research",slug:"/research/retrieval",permalink:"/Open-Assistant/docs/research/retrieval",draft:!1,tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Dataset and Benchmark",id:"dataset-and-benchmark",level:2},{value:"Search Algorithm",id:"search-algorithm",level:2},{value:"Links",id:"links",level:3},{value:"Relevant Papers",id:"relevant-papers",level:3},{value:"1. Retrieval-Index",id:"1-retrieval-index",level:2},{value:"Links",id:"links-1",level:3},{value:"Relevant Papers",id:"relevant-papers-1",level:3},{value:"2. Plugin-based approach",id:"2-plugin-based-approach",level:2},{value:"Relevant Papers",id:"relevant-papers-2",level:3},{value:"3. Embedding-based approach",id:"3-embedding-based-approach",level:2},{value:"Relevant papers",id:"relevant-papers-3",level:3}],h={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retrieval-directions-and-research-papers"},"Retrieval Directions and Research Papers"),(0,n.kt)("h2",{id:"dataset-and-benchmark"},"Dataset and Benchmark"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BEIR\n",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2104.08663v4"},"https://arxiv.org/abs/2104.08663v4")," -\nBenchmark for Information Retrieval"),(0,n.kt)("li",{parentName:"ul"},"MS MARCO(part of BEIR)\n",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1611.09268v3"},"https://arxiv.org/abs/1611.09268v3")," -\nMachine Reading Comprehension Dataset / Retrieval Benchmark")),(0,n.kt)("h2",{id:"search-algorithm"},"Search Algorithm"),(0,n.kt)("h3",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ElasticSearch:\n",(0,n.kt)("a",{parentName:"li",href:"https://www.elastic.co/elasticsearch"},"https://www.elastic.co/elasticsearch")),(0,n.kt)("li",{parentName:"ul"},"Apache Lucene: ",(0,n.kt)("a",{parentName:"li",href:"https://lucene.apache.org/"},"https://lucene.apache.org/")),(0,n.kt)("li",{parentName:"ul"},"Meta Faiss:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/faiss"},"https://github.com/facebookresearch/faiss")),(0,n.kt)("li",{parentName:"ul"},"Google Scann:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/google-research/google-research/tree/master/scann"},"https://github.com/google-research/google-research/tree/master/scann")),(0,n.kt)("li",{parentName:"ul"},"Qdrant Vector DB:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/qdrant/qdrant"},"https://github.com/qdrant/qdrant")),(0,n.kt)("li",{parentName:"ul"},"Milvus Vector DB: ",(0,n.kt)("a",{parentName:"li",href:"https://milvus.io/"},"https://milvus.io/")),(0,n.kt)("li",{parentName:"ul"},"Open Retrieval Index Code:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kenhktsui/open-information-retrieval"},"https://github.com/kenhktsui/open-information-retrieval"))),(0,n.kt)("h3",{id:"relevant-papers"},"Relevant Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FAISS: ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1702.08734"},"https://arxiv.org/abs/1702.08734")," -\nvector index by Facebook"),(0,n.kt)("li",{parentName:"ul"},"SCaNN: ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1908.10396"},"https://arxiv.org/abs/1908.10396")," -\nvector index by Google")),(0,n.kt)("h2",{id:"1-retrieval-index"},"1. Retrieval-Index"),(0,n.kt)("p",null,"At first, either a rule-based search or sparse vector search (e.g. BM25) or a\ndense vector search (semantic search) (e.g. BERT, Contriever) could be used. In\npractice, retrieval is a layered approach, where the first search is optimised\nfor recall and reranking is optimised for precision."),(0,n.kt)("p",null,"The first search in general is a sparse vector search, or dense vector search\n(bi-encoder). The advantage is that it is fast because document can be\npre-indexed and stored in a DB. Consine similarity is used to find the most\nsimilar pre-indexed document embedding given the query embedding. Reranking is a\ntechnique to boost the performance of top K documents from the first search. For\nexample, cross-encoder which takes both query and document into a language\nmodel, and output a scalar relevance between 0 and 1. It has more superior\nperformance than bi-encoder because it allows interaction of query and document\nin the language model. But it is slow because no index can be pre-computed."),(0,n.kt)("h3",{id:"links-1"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LangChain:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hwchase17/langchain"},"https://github.com/hwchase17/langchain")," -\nPlugins around any language model"),(0,n.kt)("li",{parentName:"ul"},"LlamaIndex:\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jerryjliu/llama_index"},"https://github.com/jerryjliu/llama_index")," -\nGeneral Retrieval System for LMs and external data"),(0,n.kt)("li",{parentName:"ul"},"LlamaHub: ",(0,n.kt)("a",{parentName:"li",href:"https://llamahub.ai/"},"https://llamahub.ai/")," - Data Source Plugins\nfor LlamaIndex")),(0,n.kt)("h3",{id:"relevant-papers-1"},"Relevant Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SBERT ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1908.10084"},"https://arxiv.org/abs/1908.10084")),(0,n.kt)("li",{parentName:"ul"},"BM25+CE\n",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2104.08663v4"},"https://arxiv.org/abs/2104.08663v4")),(0,n.kt)("li",{parentName:"ul"},"RALM ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2302.00083"},"https://arxiv.org/abs/2302.00083")),(0,n.kt)("li",{parentName:"ul"},"ColBert ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.12832"},"https://arxiv.org/abs/2004.12832")),(0,n.kt)("li",{parentName:"ul"},"DPR ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.04906"},"https://arxiv.org/abs/2004.04906")),(0,n.kt)("li",{parentName:"ul"},"UPR ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2204.07496"},"https://arxiv.org/abs/2204.07496")),(0,n.kt)("li",{parentName:"ul"},"...")),(0,n.kt)("h2",{id:"2-plugin-based-approach"},"2. Plugin-based approach"),(0,n.kt)("p",null,"In this approach, retrieval as a tool, is embedded into the training data,\nincluding:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"when a retrieval is required"),(0,n.kt)("li",{parentName:"ul"},"how to do a search (what to search)"),(0,n.kt)("li",{parentName:"ul"},"how to use search result As such, a language model trained with this data is\nable to do retrieval from a next token prediction objective.")),(0,n.kt)("h3",{id:"relevant-papers-2"},"Relevant Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Toolformer: ",(0,n.kt)("a",{parentName:"li",href:"http://arxiv.org/abs/2302.04761"},"http://arxiv.org/abs/2302.04761")),(0,n.kt)("li",{parentName:"ul"},"...")),(0,n.kt)("h2",{id:"3-embedding-based-approach"},"3. Embedding-based approach"),(0,n.kt)("p",null,"The embedding-based approach ingests retrieved information directly into the\nmodel, e.g. via an additional encoder and cross-attention."),(0,n.kt)("h3",{id:"relevant-papers-3"},"Relevant papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RETRO: ",(0,n.kt)("a",{parentName:"li",href:"http://arxiv.org/abs/2112.04426"},"http://arxiv.org/abs/2112.04426")),(0,n.kt)("li",{parentName:"ul"},"REALM: ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2002.08909"},"https://arxiv.org/abs/2002.08909")),(0,n.kt)("li",{parentName:"ul"},"RAG: ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2005.11401"},"https://arxiv.org/abs/2005.11401")),(0,n.kt)("li",{parentName:"ul"},"Atlas ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2208.03299"},"https://arxiv.org/abs/2208.03299")),(0,n.kt)("li",{parentName:"ul"},"...")))}u.isMDXComponent=!0}}]);