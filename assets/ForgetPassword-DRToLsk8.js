import{r as n,j as e,L as b,F as w,f as v}from"./index-B-hGkCwa.js";const g=t=>{const o=n.useRef(),a=n.useRef(),s=n.useRef(),x=n.useRef(),[l,c]=n.useState({1:"",2:"",3:"",4:""}),[r,d]=n.useState(!1),i=(m,u)=>{const p=m.target.value;return d(!1),p.length&&(c(h=>({...h,[m.target.name]:p})),u&&u.current.focus()),null};return n.useEffect(()=>{t(m=>({...m,mfaCode:Object.values(l).join("")}))},[l]),{first_inputRef:o,second_inputRef:a,thired_inputRef:s,fourth_inputRef:x,handleChange:i,value:l,invalid:r}};function j({setUpdatePasswordData:t}){const{first_inputRef:o,second_inputRef:a,thired_inputRef:s,fourth_inputRef:x,fivth_inputRef:l,handleChange:c,invalid:r}=g(t),d="border border-[#BFC6CE] transition text-center me-5 flex items-center justify-center w-[40px] sm:w-[60px] h-[60px] sm:h-[100px] text-[25px]";return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-center mb-[48px]",children:[e.jsx("input",{type:"text",name:"1",ref:o,onChange:i=>c(i,a),maxLength:1,autoFocus:!0,className:`${d} ${r?"border-[var(--danger)] text-[var(--danger)]":""}`}),e.jsx("input",{type:"text",name:"2",ref:a,onChange:i=>c(i,s),maxLength:1,className:`${d} ${r?"border-[var(--danger)] text-[var(--danger)]":""}`}),e.jsx("input",{type:"text",name:"3",ref:s,onChange:i=>c(i,x),maxLength:1,className:`${d} ${r?"border-[var(--danger)] text-[var(--danger)]":""}`}),e.jsx("input",{type:"text",name:"4",ref:x,onChange:i=>c(i,l),maxLength:1,className:`${d} ${r?"border-[var(--danger)] text-[var(--danger)]":""}`})]}),r?e.jsx("p",{className:"text-[var(--danger)] text-[16px] font-[400] my-[48px] text-center",children:"This code is invalid"}):null]})}const f=["Enter your Email and we will send a code to reset your password","Please enter the code sent to your email","Enter new password"],y=t=>{const[o,a]=n.useState(0),[s,x]=n.useState({}),l=()=>{o===0&&a(1)},c=r=>l();return n.useEffect(()=>{var r;((r=s==null?void 0:s.mfaCode)==null?void 0:r.length)===4&&a(2)},[s]),{activeIndex:o,setActiveIndex:a,setUpdatePasswordData:x,updatePasswordData:s,clickHandler:c}};function N(){const{activeIndex:t,setActiveIndex:o,setUpdatePasswordData:a,clickHandler:s}=y();return e.jsxs("div",{className:"px-3 py-8 sm:p-8 text-black relative min-h-[430px] sm:min-h-[800px] bg-white w-[600px] rounded-[8px] max-w-full flex items-center justify-center flex-col",style:{boxShadow:"0px 2px 4px 0px rgba(1, 30, 59, 0.10)"},children:[t>0?e.jsxs("button",{onClick:x=>o(l=>l-1),className:"text-[var(--dark-text)] flex items-center text-center text-[24px] absolute left-5 top-5",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M16 20.5L8 12.5L16 4.5",stroke:"#181210","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),e.jsx("span",{className:"ms-[24px]",children:"Back"})]}):null,e.jsx("h1",{className:"mt-[40px] mb-[8px] font-[700] text-[24px] text-center",children:"Forget password"}),t!==2?e.jsx("h6",{className:"mb-[48px] text-[var(--dark)] text-center",children:f[t]}):null,t===2?e.jsx("h6",{className:"mb-[54px] text-[var(--dark)] text-center font-medium",children:f[t]}):null,t===0?e.jsxs(n.Fragment,{children:[e.jsx("label",{htmlFor:"Email",className:"block w-full text-[14px] !text-start font-medium",children:"Email"}),e.jsx("input",{type:"email",name:"",autoFocus:!0,placeholder:"Enter email",id:"Email",className:"mt-2 mb-[54px] px-4 py-3 w-full bg-[#FFF8F6] border-b border-b-[var(--secondray)]"})]}):null,t===1?e.jsx(j,{setUpdatePasswordData:a}):null,t===2?e.jsxs(n.Fragment,{children:[e.jsx("label",{htmlFor:"password",className:"block w-full text-[14px] font-medium",children:"Password"}),e.jsx("input",{type:"password",name:"",placeholder:"Enter your password",id:"password",className:"mt-2 mb-4 px-4 py-3 w-full bg-[#FFF8F6] border-b border-b-[var(--secondray)]"}),e.jsx("label",{htmlFor:"c_password",className:"block w-full text-[14px] font-medium",children:"Confirm Password"}),e.jsx("input",{type:"password",name:"",placeholder:"Enter your confirmation password",id:"c_password",className:"mt-2 mb-[32px] px-4 py-3 w-full bg-[#FFF8F6] border-b border-b-[var(--secondray)]"})]}):null,t!==1?e.jsx("button",{onClick:s,type:"submit",className:"bg-[var(--primary)] mb-[48px] text-center h-[56px] text-white font-[700] w-[500px] max-w-full",children:t===0?"Send Code":"Reset Password"}):null,t!==2?e.jsxs(b,{to:"/login",className:"text-[#B6AC76] text-center text-[16px] underline mb-[56px] block w-[500px] max-w-full font-medium",children:[t===0?e.jsx(w,{icon:v,className:"me-2"}):null,e.jsx("span",{children:t===0?"Back to log in":"Resend code"})]}):null,e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:`w-[19px] h-[19px] rounded-full transition ${t===0?"bg-[var(--primary)]":"bg-[#E6E9EC]"} me-4`,children:"   "}),e.jsx("div",{className:`w-[19px] h-[19px] rounded-full transition ${t===1?"bg-[var(--primary)]":"bg-[#E6E9EC]"} me-4`,children:"   "}),e.jsx("div",{className:`w-[19px] h-[19px] rounded-full transition ${t===2?"bg-[var(--primary)]":"bg-[#E6E9EC]"} me-4`,children:"   "})]})]})}function E(){return e.jsx("div",{className:"w-full h-[100vh] flex items-center justify-center relative bg-[#feebf0]",children:e.jsx("div",{className:"container flex items-center justify-center relative z-10",children:e.jsx(N,{})})})}export{E as default};
