import{_ as a,p as t,q as p,Z as s,s as n}from"./framework-6ecfbe9e.js";const o={},e=s(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ul><li>Go 语言中，函数的基本组成为：关键字<code>func</code>、函数名、参数列表、返回值、函数体和返回语句</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mymath 
<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>
<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span> 
		<span class="token comment">// 假设这个函数只支持两个非负数字的加法。</span>
		err<span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;Should be non-negative numbers!&quot;</span><span class="token punctuation">)</span> 
		<span class="token keyword">return</span>
		<span class="token punctuation">}</span> 
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token boolean">nil</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 如果参数列表中若干个相邻的参数类型的相同，比如上面例子中的 a 和 b，则可以在参数列表中省略前面变量的类型声明。</span>
<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果返回值列表中多个返回值的类型相同，也可以用同样的方式合并。</span>
<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> 
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将函数赋值给变量。</span>
<span class="token keyword">type</span> test <span class="token builtin">float64</span>
<span class="token keyword">func</span> <span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> test <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
a <span class="token operator">:=</span> <span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 赋值形式1。</span>
<span class="token keyword">var</span> a <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> test <span class="token comment">// 赋值形式2。</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数。</span>
</code></pre></div><h3 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;mymath&quot;</span>

c <span class="token operator">:=</span> mymath<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div>`,6),c=n("div",{class:"custom-container danger"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M10 10l4 4m0-4l-4 4"})])]),n("p",{class:"custom-container-title"},"DANGER"),n("p",null,"小写字母开头的函数只在本包内可见，大写字母开头的函数才能被其他包使用。这个规则也适用于类型和变量的可见性。")],-1),u=s(`<h3 id="不定参数" tabindex="-1"><a class="header-anchor" href="#不定参数" aria-hidden="true">#</a> 不定参数</h3><ul><li>不定参数是指函数传入的参数个数为不定数量</li></ul><p>首先需要将函数定义为接受不定参数类型。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span> 
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 函数myfunc()接受不定数量的参数，这些参数的类型全部是int，它可以用如下方式调用：</span>
<span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> 
<span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span>
</code></pre></div><p>形如<code>...type</code>格式的类型只能作为函数的参数类型存在，并且必须是最后一个参数。</p><p>如果希望传任意类型，可以指定类型为<code>interface{}</code>，用<code>interface{}</code>传递任意类型数据是Go语言的惯例用法。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Printf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3><ul><li>匿名函数由一个不带函数名的函数声明和函数体组成，可以直接赋值给一个变量或者直接执行</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">,</span> z <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> 
	<span class="token keyword">return</span> a<span class="token operator">*</span>b <span class="token operator">&lt;</span><span class="token function">int</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

f <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> 
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	ch <span class="token operator">&lt;-</span> ACK
<span class="token punctuation">}</span> <span class="token punctuation">(</span>reply_chan<span class="token punctuation">)</span> <span class="token comment">// 花括号后直接跟参数列表表示声明完这个函数后直接就(有参数传参数)调用。</span>

<span class="token keyword">func</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>age<span class="token punctuation">,</span> <span class="token string">&quot;岁&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span> 
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token keyword">var</span> j <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">5</span>
	a <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token keyword">var</span> i <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span> 
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i, j: %d, %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> 
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	j <span class="token operator">*=</span> <span class="token number">2</span> 
	<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在上面的例子中，变量 a 指向的闭包函数引用了局部变量 i 和 j，i的值被隔离，在闭包外不能被修改，改变j的值以后，再次调用 a，发现结果是修改过的值。在变量 a 指向的闭包函数中，只有内部的匿名函数才能访问变量 i，而无法通过其他途径访问到，因此保证了 i 的安全性。</p><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><ul><li>Go 语言引入了一个关于错误处理的标准模式，即 error 接口</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><p>对于大多数函数，如果要返回错误，大致上都可以定义为如下模式，将 error 作为多种返回 值中的最后一个，但这并非是强制要求。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Foo</span><span class="token punctuation">(</span>param <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>调用时的代码建议按如下方式处理错误情况。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>n<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// 错误处理</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用返回值n</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="自定义-error-类型" tabindex="-1"><a class="header-anchor" href="#自定义-error-类型" aria-hidden="true">#</a> 自定义 error 类型</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> PathError <span class="token keyword">struct</span> <span class="token punctuation">{</span> 
    Op <span class="token builtin">string</span>
	Path <span class="token builtin">string</span> 
    Err <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>PathError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token comment">// 实现Error方法，将该方法绑定该类。</span>
    <span class="token keyword">return</span> e<span class="token punctuation">.</span>Op <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>Path <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>Err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="defer-关键字" tabindex="-1"><a class="header-anchor" href="#defer-关键字" aria-hidden="true">#</a> defer 关键字</h3><ul><li>如果一个函数使用了<code>defer</code>关键字，那么就会等主函数中所有程序执行完，再执行这个函数内的程序</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">CopyFile</span><span class="token punctuation">(</span>dstName<span class="token punctuation">,</span> srcName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    src<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>srcName<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> src<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    dst<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>dstName<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> dst<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> io<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>dst<span class="token punctuation">,</span> src<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当出现多个<code>defer</code>时，按照<code>先进后出</code>的原则，最先被<code>defer</code>的最后执行</p>`,26),l=[e,c,u];function i(k,r){return t(),p("div",null,l)}const g=a(o,[["render",i],["__file","function.html.vue"]]);export{g as default};
