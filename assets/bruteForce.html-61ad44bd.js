import{_ as e,p as t,q as a,Y as r}from"./framework-cfcd8ab0.js";const i="/images/1.png",c="/images/2.png",s="/images/3.png",o={},l=r('<h2 id="漏洞原理" tabindex="-1"><a class="header-anchor" href="#漏洞原理" aria-hidden="true">#</a> 漏洞原理</h2><blockquote><p>暴力破解是一攻击手段，在 web 攻击中，一般会使用这种手段对应用系统的认证信息进行获取。其过程就是使用大量的认证信息在认证接口进行尝试登录，直到得到正确的结果。</p></blockquote><h2 id="漏洞类型" tabindex="-1"><a class="header-anchor" href="#漏洞类型" aria-hidden="true">#</a> 漏洞类型</h2><ul><li>验证码由前端生成，并由前端校验</li></ul><p><img src="'+i+'" alt=""></p><ul><li>抓取流量包后发现流量包中并没有带验证码，可直接使用暴力破解方式爆破账号密码</li></ul><p><img src="'+c+'" alt=""></p><ul><li>验证码可以无限重放，可以使用相同的验证码，进行暴力破解</li></ul><p><img src="'+s+'" alt=""></p>',9),n=[l];function _(p,d){return t(),a("div",null,n)}const u=e(o,[["render",_],["__file","bruteForce.html.vue"]]);export{u as default};