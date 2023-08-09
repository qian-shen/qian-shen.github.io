import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 接口类型命名按照 er 结尾。</span>
<span class="token keyword">type</span> talk <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 只要实现了接口的类型都可以当作参数传入。</span>
<span class="token keyword">func</span> <span class="token function">shout</span><span class="token punctuation">(</span>t talk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h3><p>接口赋值在 Go 语言中分为如下两种情况：</p><ul><li>将对象实例赋值给接口。</li><li>将一个接口赋值给另一个接口。</li></ul><p><strong>对象实例赋值给接口</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> LessAdder <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">// 定义一个接口。</span>
    <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> 
    <span class="token function">Add</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Integer <span class="token builtin">int</span> <span class="token comment">// 定义一个类型</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a Integer<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">//类型 Less() 方法。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Integer<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//类型 Add() 方法。</span>
    <span class="token operator">*</span>a <span class="token operator">+=</span> b
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a Integer <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b LessAdder <span class="token operator">=</span> <span class="token operator">&amp;</span>a
</code></pre></div><p><strong>接口赋值给接口</strong></p><p>接口赋值并不要求两个接口必须等价。如果接口<code>A</code>的方法列表是接口<code>B</code>的方法列表的子集， 那么接口<code>B</code>可以赋值给接口<code>A</code>。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> one
<span class="token keyword">type</span> ReadWriter <span class="token keyword">interface</span> <span class="token punctuation">{</span> 
    <span class="token function">Read</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
    <span class="token function">Write</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> two
<span class="token keyword">type</span> IStream <span class="token keyword">interface</span> <span class="token punctuation">{</span> 
    <span class="token function">Write</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
    <span class="token function">Read</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> file1 two<span class="token punctuation">.</span>IStream <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>File<span class="token punctuation">)</span>
<span class="token keyword">var</span> file2 one<span class="token punctuation">.</span>ReadWriter <span class="token operator">=</span> file1
<span class="token keyword">var</span> file3 two<span class="token punctuation">.</span>IStream <span class="token operator">=</span> file2
</code></pre></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><p>查询<code>file1</code>对象实例是否实现了<code>two.IStream</code>接口。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> file1 Writer <span class="token operator">=</span> <span class="token operator">...</span>
<span class="token keyword">if</span> file5<span class="token punctuation">,</span> ok <span class="token operator">:=</span> file1<span class="token punctuation">.</span><span class="token punctuation">(</span>two<span class="token punctuation">.</span>IStream<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> test1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> test2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>test test1<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test1-call&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>test test2<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test2-call&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>test test2<span class="token punctuation">)</span> <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test1-talk&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> one <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> two <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> test1 one <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span>
	<span class="token keyword">var</span> test2 two <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>test2<span class="token punctuation">)</span>
	<span class="token keyword">if</span> test<span class="token punctuation">,</span> ok <span class="token operator">:=</span> test2<span class="token punctuation">.</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">,</span> ok<span class="token punctuation">)</span> <span class="token comment">// 通过反射查询变量类型。</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","interface.html.vue"]]);export{i as default};
