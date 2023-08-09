import{_ as t,p as o,q as l,s as a,R as s,t as c,Z as n,n as p}from"./framework-47a2e622.js";const r={},i=a("h2",{id:"下载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),s(" 下载")],-1),d={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>在根目录下创建文件<code>my.ini</code>：</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
 
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置3306端口</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
<span class="token comment"># 设置mysql的安装目录</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\\\\MySQL\\\\mysql_5.7.40</span>
<span class="token comment"># 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错</span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\\\\MySQL\\\\mysql_5.7.40\\\\sqldata</span>
<span class="token comment"># 允许最大连接数</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
<span class="token comment"># 服务端使用的字符集默认为8比特编码的latin1字符集</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token comment"># 添加配置</span>
<span class="token key attr-name">explicit_defaults_for_timestamp</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div><p>初始化数据库：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span> <span class="token comment"># 初始化数据库</span>
</code></pre></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysqld <span class="token function">install</span> <span class="token comment"># 安装数据库</span>
</code></pre></div>`,7),k=a("div",{class:"custom-container tip"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"提示"),a("p",null,"记得将 mysql 加入环境变量中。")],-1),m=n(`<h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>net start mysql <span class="token comment"># 启动 mysql 服务</span>
net stop mysql <span class="token comment"># 停止 mysql 服务</span>
</code></pre></div><h2 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h2><p>该方法适用于<code>5.7.x</code>版本。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> passowrd <span class="token keyword">for</span> root@localhost <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">&#39;lol111lol&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 将 root 密码修改成 &#39;lol111lol&#39;</span>
</code></pre></div>`,5);function h(v,y){const e=p("ExternalLinkIcon");return o(),l("div",null,[i,a("p",null,[a("a",d,[s("https://dev.mysql.com/downloads/mysql/"),c(e)])]),u,k,m])}const g=t(r,[["render",h],["__file","install.html.vue"]]);export{g as default};
