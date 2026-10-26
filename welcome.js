'use strict';
const STORAGE_KEY='classdesk-v1';let existing=false;
try{const stored=JSON.parse(localStorage.getItem(STORAGE_KEY));existing=!!(stored?.settings&&Array.isArray(stored.students));}catch{}
if(existing){document.querySelector('#start-title').textContent='继续使用';document.querySelector('#start-desc').textContent='已找到当前浏览器中保存的班级资料。';document.querySelector('#start-action').innerHTML='进入我的工作台 <b>→</b>';}
function startUsing(){if(existing){location.href='workspace.html';return}document.querySelector('#setup').hidden=false;document.querySelector('#setup').scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('[name=teacher]').focus();}
document.querySelector('#setup-form').addEventListener('submit',e=>{e.preventDefault();let form=e.currentTarget,fd=new FormData(form),teacher=fd.get('teacher').trim(),className=fd.get('className').trim(),term=fd.get('term').trim();if(!teacher||!className){document.querySelector('#setup-error').textContent='请填写姓名和班级';return}try{sessionStorage.setItem('classdesk-setup',JSON.stringify({teacher,className,...(term?{term}:{})}));location.href='workspace.html';}catch{document.querySelector('#setup-error').textContent='浏览器未允许保存数据，请允许网站存储后重试。';}});
if(location.protocol==='file:'){document.querySelector('#download').hidden=true;document.querySelector('#file-note').hidden=false;document.querySelector('.entry-grid').style.gridTemplateColumns='repeat(auto-fit,minmax(220px,1fr))';}
if(new URLSearchParams(location.search).get('start')==='1')startUsing();
