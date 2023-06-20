import{_ as n,p as s,q as a,Z as t}from"./framework-6ecfbe9e.js";const p={},o=t(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><ul><li>面向对象与面向过程比较</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Integer <span class="token builtin">int</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a Integer <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a Integer<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">// 面向对象。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Integer_Less</span><span class="token punctuation">(</span>a Integer<span class="token punctuation">,</span> b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">// 面向过程。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b
<span class="token punctuation">}</span>

a<span class="token punctuation">.</span><span class="token function">Less</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 面向对象的用法。</span>
<span class="token function">Integer_Less</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 面向过程的用法。</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>dog Dog<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//将方法绑定在对象上。</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;小狗叫&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> animal Animal

	animal <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span>

	animal<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","method.html.vue"]]);export{i as default};
