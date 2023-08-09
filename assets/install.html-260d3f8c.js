import{_ as n,p as t,q as o,s as e,R as a,t as r,Z as c,n as i}from"./framework-47a2e622.js";const l={},d=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),p=e("p",null,"安装包：",-1),h={href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"},m=c(`<h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-server.exe redis.windows.conf <span class="token comment"># 开启 redis 服务。</span>
redis-cli.exe <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token comment"># 连接 redis。</span>
</code></pre></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>config get config_name <span class="token comment"># 格式。</span>
config get * <span class="token comment"># 获取全部配置。</span>
config <span class="token builtin class-name">set</span> config_name config_value <span class="token comment"># 设置配置项。</span>
</code></pre></div>`,4);function _(u,f){const s=i("ExternalLinkIcon");return t(),o("div",null,[d,p,e("p",null,[e("a",h,[a("https://github.com/tporadowski/redis/releases"),r(s)])]),m])}const k=n(l,[["render",_],["__file","install.html.vue"]]);export{k as default};