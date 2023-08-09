import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mainj

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;crypto/tls&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;net/url&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	urli <span class="token operator">:=</span> url<span class="token punctuation">.</span>URL<span class="token punctuation">{</span><span class="token punctuation">}</span>
	urlProxy<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> urli<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8888&quot;</span><span class="token punctuation">)</span>
	cli <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span>
		Transport<span class="token punctuation">:</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Transport<span class="token punctuation">{</span>
			Proxy<span class="token punctuation">:</span>           http<span class="token punctuation">.</span><span class="token function">ProxyURL</span><span class="token punctuation">(</span>urlProxy<span class="token punctuation">)</span><span class="token punctuation">,</span>               <span class="token comment">// 设置代理</span>
			TLSClientConfig<span class="token punctuation">:</span> <span class="token operator">&amp;</span>tls<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>InsecureSkipVerify<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 取消证书认证</span>
            ResponseHeaderTimeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>					<span class="token comment">// 设置超时时间</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	request<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://www.bilibili.com/&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		body<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="取消重定向" tabindex="-1"><a class="header-anchor" href="#取消重定向" aria-hidden="true">#</a> 取消重定向</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 重写函数</span>
<span class="token keyword">func</span> <span class="token function">myCheckRedirect</span><span class="token punctuation">(</span>req <span class="token operator">*</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">,</span> via <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

cli <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span>
		CheckRedirect<span class="token punctuation">:</span> myCheckRedirect<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","http.html.vue"]]);export{k as default};
