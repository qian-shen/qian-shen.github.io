import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},e=t(`<h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># 创建一个迭代器</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出迭代器的下一个元素</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> it<span class="token punctuation">:</span> <span class="token comment"># 使用for循环进行遍历迭代器</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre></div><h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用了yield的函数被称为生成器，调用该函数返回一个迭代器</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;strat......&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		res <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">4</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>

g <span class="token operator">=</span> foo<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 生成器g</span>
<span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span> <span class="token comment"># 开始迭代</span>
g<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token comment"># 获取yield的值</span>
</code></pre></div>`,4),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","iter.html.vue"]]);export{k as default};
