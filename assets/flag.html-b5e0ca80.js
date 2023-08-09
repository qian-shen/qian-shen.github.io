import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="flag-包" tabindex="-1"><a class="header-anchor" href="#flag-包" aria-hidden="true">#</a> flag 包</h2><blockquote><p>标准格式</p></blockquote><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ip <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;ip&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8888&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;设置IP&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 第一个参数设置参数名，第二个参数是指默认					值，第三个参数设置提示信息，调用后返回一个指针</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// j</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token operator">*</span>ip<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>代码实例</p></blockquote><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;flag&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    host <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;host&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;请输入host地址&quot;</span><span class="token punctuation">)</span>
    port <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;port&quot;</span><span class="token punctuation">,</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token string">&quot;请输入端口号&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解析参数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>host<span class="token punctuation">,</span> <span class="token operator">*</span>port<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","flag.html.vue"]]);export{k as default};
