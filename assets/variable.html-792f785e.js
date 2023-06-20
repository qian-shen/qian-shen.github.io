import{_ as a,p as t,q as p,Z as s,s as n}from"./framework-6ecfbe9e.js";const o={},e=s(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量是用于存储信息的&quot;容器&quot;。</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
	<span class="token variable">$z</span> <span class="token operator">=</span> <span class="token variable">$x</span> <span class="token operator">+</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$z</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><p>变量规则：</p><ul><li>变量以 <strong>$</strong> 符号开始，后面跟着变量的名称。</li><li>变量名必须以字母或者下划线字符开始。</li><li>变量名只能包含字母、数字以及下划线（A-z、0-9 和 _ ）。</li><li>变量名不能包含空格。</li><li>变量名是区分大小写的（<em>$y</em> 和 <em>$Y</em> 是两个不同的变量）。</li></ul>`,5),c=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("p",null,"PHP 语句和 PHP 变量都是区分大小写的。")],-1),l=s(`<h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3><p>PHP 没有声明变量的命令，变量在第一次赋值给它的时候被创建：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p>PHP 有四种不同的变量作用域：</p><ul><li>local</li><li>global</li><li>static</li><li>parameter</li></ul>`,6),i=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"作用域"),n("p",null,"在所有函数外部定义的变量，拥有全局作用域。除了函数外，全局变量可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 global 关键字。")],-1),u=s(`<p>在 PHP 函数内部声明的变量是局部变量，仅能在函数内部访问：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量</span>

	<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 局部变量</span>
	    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;p&gt;测试函数内变量:&lt;p&gt;&quot;</span><span class="token punctuation">;</span>
	    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;变量 x 为: <span class="token interpolation"><span class="token variable">$x</span></span>&quot;</span><span class="token punctuation">;</span>
	    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
	    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;变量 y 为: <span class="token interpolation"><span class="token variable">$y</span></span>&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 

	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;p&gt;测试函数外变量:&lt;p&gt;&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;变量 x 为: <span class="token interpolation"><span class="token variable">$x</span></span>&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;变量 y 为: <span class="token interpolation"><span class="token variable">$y</span></span>&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h4><p>global 关键字可以用于函数内访问全局变量：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	 
	<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">global</span> <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
	    <span class="token variable">$y</span> <span class="token operator">=</span> <span class="token variable">$x</span> <span class="token operator">+</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	 
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$y</span><span class="token punctuation">;</span> <span class="token comment">// 输出 15</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><p>PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。</p><p>上面的示例可以写成：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	 
	<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;y&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 
	 
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><h4 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> Static</h4><p>当一个函数完成时，它的所有变量通常都会被删除。然而，有时候希望某个局部变量不要被删除。要做到这一点，请在您第一次声明变量时使用 static 关键字：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">static</span> <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	    <span class="token keyword">echo</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
	    <span class="token variable">$x</span><span class="token operator">++</span><span class="token punctuation">;</span>
	    <span class="token keyword">echo</span> <span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>    <span class="token comment">// 换行符</span>
	<span class="token punctuation">}</span>
	 
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><p>每次调用该函数时，该变量将会保留着函数前一次被调用时的值。</p>`,12),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"该变量仍然是函数的局部变量")],-1),k=s(`<h4 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> parameter</h4><p>参数作用域：参数是通过调用代码将值传递给函数的局部变量。</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">echo</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div>`,3),d=[e,c,l,i,u,r,k];function h(g,m){return t(),p("div",null,d)}const v=a(o,[["render",h],["__file","variable.html.vue"]]);export{v as default};
