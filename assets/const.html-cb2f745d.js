import{_ as s,p as o,q as e,Z as a,s as n}from"./framework-6ecfbe9e.js";const t={},c=a(`<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> Pi <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">const</span> zero <span class="token operator">=</span> <span class="token number">0.0</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    size <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">1024</span>
    eof <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> mask <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3</span> <span class="token comment">// 常量定义的右值也可以是一个在编译期运算的常量表达式，由于常量的赋值是一个编译期行为，所以右值不能出现任何需要运行期才能得出结果的表达。</span>
</code></pre></div>`,3),p=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"常量一旦被定义后就不能被修改。")],-1),l=a(`<h3 id="预定义常量" tabindex="-1"><a class="header-anchor" href="#预定义常量" aria-hidden="true">#</a> 预定义常量</h3><ul><li>Go 语言预定义了这些常量：<code>true</code> <code>false</code> <code>iota</code></li></ul><p><code>iota</code>比较特殊，可以被认为是一个可被编译器修改的常量，在每一个<code>const</code>关键字出现时被重置为0，然后在下一个 const 出现之前，每出现一次 iota，其所代表的数字会自动增1。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>		  <span class="token comment">// iota 被重设为0。</span>
	c0 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// c0 == 0</span>
 	c1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// c1 == 1</span>
    c2 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// c2 == 2</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// x == 0 (因为 iota 又被重设为0了)。</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// y == 0 (同上)。</span>
</code></pre></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><ul><li>以<mark>大写字母</mark>开头的常量在包外可见</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Sunday <span class="token operator">=</span> <span class="token boolean">iota</span> 
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturda
	numberOfDays <span class="token comment">// 这个常量没有导出。</span>
<span class="token punctuation">)</span>
</code></pre></div>`,7),r=[c,p,l];function d(i,k){return o(),e("div",null,r)}const h=s(t,[["render",d],["__file","const.html.vue"]]);export{h as default};
