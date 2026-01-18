function e(n,r,i,a){if(!window.Entry||!Entry.block){new MutationObserver((t,o)=>{window.Entry&&Entry.block&&(e(n,r,i,a),o.disconnect())}).observe(document,{subtree:!0,childList:!0});return}if(EntryStatic.getAllBlocks().some(e=>n==e.category)||(a?.name&&(Lang.Blocks[n.toUpperCase()]=a.name),EntryStatic.getAllBlocks=(e=>()=>[...e(),{category:n,blocks:r}])(EntryStatic.getAllBlocks),Entry.playground?.blockMenu?._categoryData.push({category:n,blocks:[]}),Entry.playground?.blockMenu?._generateCategoryView(Entry.playground.blockMenu._categoryData),Entry.playground?.blockMenu?._generateCategoryCode(n),i(t(n)),Entry.playground?.blockMenu?.setMenu(),!a))return;let o=document.head.appendChild(document.createElement(`style`));o.textContent=`
    #entryCategory${n} {
      background-repeat: no-repeat;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      margin-bottom: 1px;
      ${a.background?`
        background-image: url(${a.background});
      `:``}
      ${a.backgroundSize?`
        background-size: ${a.backgroundSize}px;
      `:``}
    }

    .entrySelectedCategory#entryCategory${n} {
      ${a.backgroundOn?`
        background-image: url(${a.backgroundOn});
      `:``}
      ${a.colorOn?`
        background-color: ${a.colorOn};
        border-color: ${a.colorOn};
      `:``}
      ${a.colorOnText?`
        color: ${a.colorOnText};
      `:``}
    }
  `}const t=e=>function(t,n,r,i,a,o,s=`basic`){let{color:c,outerline:l}=r,{params:u,def:d,map:f}=i;Entry.moduleManager?.loadBlocks({categoryName:e,blockSchemas:[{blockName:t,isBlockShowBlockMenu:!0,block:{color:c,outerLine:l,skeleton:s,statement:[],params:u,events:{},def:{params:d,type:t},paramsKeyMap:f,class:a||`default`,func:o,template:n}}]})};export{e as updateCategory};