import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BFO1kwsm.js";document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();const s=Number(t.target.elements.delay.value),i=t.target.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{i==="fulfilled"?e(s):m(s)},s)}).then(e=>{r.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({title:"❌ Error",message:`Rejected promise in ${e}ms`})})});
//# sourceMappingURL=4-snackbar.js.map
