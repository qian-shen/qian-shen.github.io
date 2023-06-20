import{_ as a,p as n,q as s,Z as e}from"./framework-6ecfbe9e.js";const t={},o=e(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><ul><li>常用的声明方法</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
<span class="token keyword">var</span> v2 <span class="token builtin">string</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    v1 <span class="token builtin">int</span>
    v2 <span class="token builtin">string</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><ul><li>初始化时可指定数据类型，也可以不指定</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token number">10</span>
v1 <span class="token operator">:=</span> <span class="token number">10</span> <span class="token comment">// 只能用于函数体内，不可用于全局变量的声明与赋值，且左侧的变量不应该被声明过，否则会导致编译错误。</span>
</code></pre></div><h3 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h3><ul><li>先初始化，后赋值</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
v1 <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">var</span> v2 <span class="token builtin">int</span>
v2 <span class="token operator">=</span> <span class="token number">20</span>

v1<span class="token punctuation">,</span> v2 <span class="token operator">=</span> v2<span class="token punctuation">,</span> v1 <span class="token comment">// 交换变量的值。</span>
</code></pre></div><h3 id="匿名变量" tabindex="-1"><a class="header-anchor" href="#匿名变量" aria-hidden="true">#</a> 匿名变量</h3><ul><li>在实际编程过程中，有些变量可能不需要，这时就可以使用<code>_</code>来获取不需要的变量</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> nickName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token string">&quot;May&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chibi Maruko&quot;</span>
<span class="token punctuation">}</span>

<span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> nickName <span class="token operator">:=</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,13),p=[o];function c(l,i){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","variable.html.vue"]]);export{u as default};
