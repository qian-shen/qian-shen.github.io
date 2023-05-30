import{_ as t,n as s,p as o,q as r,s as e,R as a,t as c,Y as p}from"./framework-cfcd8ab0.js";const l="/images/image-20211229090352995.png",d="/images/image-20211229090425508.png",i={},g=e("h2",{id:"下载安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载安装包","aria-hidden":"true"},"#"),a(" 下载安装包")],-1),h={href:"https://studygolang.com/dl",target:"_blank",rel:"noopener noreferrer"},k=p('<h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><blockquote><p>配置 GOPATH 和 GOROOT 配置 PATH。</p></blockquote><p><img src="'+l+'" alt=""></p><p><img src="'+d+`" alt=""></p><h2 id="基本指令" tabindex="-1"><a class="header-anchor" href="#基本指令" aria-hidden="true">#</a> 基本指令</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> version <span class="token comment">// 查看版本号。</span>
<span class="token keyword">go</span> env <span class="token comment">// 查看相关配置。</span>
</code></pre></div><h2 id="更改国内镜像" tabindex="-1"><a class="header-anchor" href="#更改国内镜像" aria-hidden="true">#</a> 更改国内镜像</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 开启 go module</span>
<span class="token keyword">go</span> env <span class="token operator">-</span>w GO111MODULE<span class="token operator">=</span>on <span class="token comment">// Windows。</span>
<span class="token comment">// 配置GOPROXY</span>
<span class="token keyword">go</span> env <span class="token operator">-</span>w GOPROXY<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>goproxy<span class="token operator">/</span> <span class="token comment">//Windows。</span>
<span class="token comment">// 取消验证包</span>
<span class="token keyword">go</span> env <span class="token operator">-</span>w GOSUMDB<span class="token operator">=</span>off <span class="token comment">// Windows。</span>
</code></pre></div><p>在 GOPATH 路径下新建三个文件夹：</p><table><thead><tr><th style="text-align:left;">文件夹名</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;"><code>bin</code></td><td style="text-align:left;">...</td></tr><tr><td style="text-align:left;"><code>pkg</code></td><td style="text-align:left;">...</td></tr><tr><td style="text-align:left;"><code>src</code></td><td style="text-align:left;">代码存放处</td></tr></tbody></table>`,10);function m(u,_){const n=s("ExternalLinkIcon");return o(),r("div",null,[g,e("p",null,[e("a",h,[a("https://studygolang.com/dl"),c(n)])]),k])}const x=t(i,[["render",m],["__file","environmentConstruction.html.vue"]]);export{x as default};
