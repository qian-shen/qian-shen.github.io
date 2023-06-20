import{_ as n,p as s,q as a,Z as o}from"./framework-6ecfbe9e.js";const e={},t=o(`<h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token number">1</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>关于条件语句，需要注意以下几点：</p><ul><li>条件语句不需要使用<code>()</code>将条件包含起来。</li><li>无论语句体内有几条语句，<code>{}</code>都是必须存在的。</li><li>左花括号<code>{</code>必须与<code>if</code>或者<code>else</code>处于同一行。</li><li>在<code>if</code>之后，条件语句之前，可以添加变量初始化语句，使用<code>;</code>间隔。</li><li>在有返回值的函数中，不允许将<mark>最终的 return</mark> 语句包含在<code>if...else...</code>结构中，否则会编译失败。</li></ul><h3 id="选择语句" tabindex="-1"><a class="header-anchor" href="#选择语句" aria-hidden="true">#</a> 选择语句</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> i <span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span> 
    	<span class="token keyword">fallthrough</span> 
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;4, 5, 6&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">default</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p><code>switch</code>后面的表达式不是必需的。</p><p>关于选择语句，需要注意以下几点：</p><ul><li>左花括号<code>{</code>必须与<code>switch</code>处于同一行。</li><li>条件表达式不限制为常量或者整数。</li><li>单个<code>case</code>中，可以出现多个结果选项。</li><li>与 C 语言等规则相反，Go 语言不需要用<code>break</code>来明确退出一个<code>case</code>。</li><li>只有在<code>case</code>中明确添加<code>fallthrough</code>关键字，才会继续执行紧跟的下一个<code>case</code>。</li><li>可以不设定<code>switch</code>之后的条件表达式，在此种情况下，整个<code>switch</code>结构与多个<code>if...else...</code>的逻辑作用等同。</li></ul><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><ul><li>与多数语言不同，Go 语言中的循环语句只支持<code>for</code>关键字</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 一般写法。</span>
sum <span class="token operator">:=</span> <span class="token number">0</span> 
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> 
    sum <span class="token operator">+=</span> i
<span class="token punctuation">}</span>

<span class="token comment">// 简化写法。</span>
sum <span class="token operator">:=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
	sum<span class="token operator">++</span>
	<span class="token keyword">if</span> sum <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>关于循环语句，需要注意以下几点：</p><ul><li>左花括号<code>{</code>必须与<code>for</code>处于同一行。</li><li>Go 语言中的 for 循环与 C 语言一样，都允许在循环条件中定义和初始化变量，唯一的区别是，Go 语言不支持以<code>逗号</code>为间隔的多个赋值语句，必须使用平行赋值的方式来初始化多个变量。</li><li>Go 语言的 for 循环同样支持<code>continue</code>和<code>break</code>来控制循环。</li></ul>`,15),p=[t];function c(l,u){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","process.html.vue"]]);export{r as default};
