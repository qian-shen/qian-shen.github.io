import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},e=t(`<h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token builtin">float64</span>
    width<span class="token punctuation">,</span> height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//成员方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
</code></pre></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-go" data-ext="go"><pre class="language-go"><code>rect1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Rect<span class="token punctuation">)</span>
rect2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Rect<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>在 Go 语言中，未进行显式初始化的变量都会被初始化为该类型的零值，例如 bool 类型的零值为 false，int 类型的零值为0，string 类型的零值为空字符串。</p><ul><li>Go 中也有方法，它是一种特殊的函数，定义于 struct 之上(与 struct 关联、绑定)，被称为 struct 的 receiver</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span><span class="token punctuation">{</span> 
	name <span class="token builtin">string</span> 
	age <span class="token builtin">int</span> 
<span class="token punctuation">}</span>

p1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
p2 <span class="token operator">:=</span> person<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// p1 是指针类型的 person 实例 p2 是值类型的 person 实例。</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印结构体</span>
<span class="token operator">%</span>v <span class="token operator">--</span><span class="token operator">&gt;</span>打印字段对应的值
<span class="token operator">%</span><span class="token operator">+</span>v <span class="token operator">--</span><span class="token operator">&gt;</span>打印键值对

<span class="token comment">// 如果需要转换成 json 格式，则结构体中的变量名开头一定是大写。</span>
<span class="token comment">// 给字段注明标签，使得 json 包在进行编码的时候能够按照标签里的样式修改字段名。</span>
<span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span> <span class="token string">\`json:&quot;studentname&quot;\`</span>
	age <span class="token builtin">int</span> <span class="token string">\`json:&quot;studentage&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// struct 嵌入：只在结构体里声明类型，不声明字段名。</span>
<span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	message
<span class="token punctuation">}</span>
<span class="token keyword">type</span> message <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),o=[e];function c(l,u){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","structure.html.vue"]]);export{i as default};
