import{_ as n,p as a,q as s,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="threading" tabindex="-1"><a class="header-anchor" href="#threading" aria-hidden="true">#</a> threading</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> two<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>

t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> two<span class="token punctuation">)</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="创建多线程" tabindex="-1"><a class="header-anchor" href="#创建多线程" aria-hidden="true">#</a> 创建多线程</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

threadList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
tempList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">for</span> temp <span class="token keyword">in</span> tempList<span class="token punctuation">:</span>
	threadList<span class="token punctuation">.</span>append<span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>run<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> thread <span class="token keyword">in</span> threadList<span class="token punctuation">:</span>
	t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,4),e=[o];function c(u,r){return a(),s("div",null,e)}const l=n(p,[["render",c],["__file","thread.html.vue"]]);export{l as default};
