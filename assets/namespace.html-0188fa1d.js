import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>命名空间通过关键字 namespace 来声明。如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间。</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">namespace</span> <span class="token package">MyProject</span> <span class="token punctuation">{</span>
	    <span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	    <span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
	    <span class="token keyword">function</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">namespace</span> <span class="token package">AnotherProject</span> <span class="token punctuation">{</span>
	    <span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	    <span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
	    <span class="token keyword">function</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><p>在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 declare 语句。所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前。</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">declare</span><span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string single-quoted-string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//定义多个命名空间和不包含在命名空间中的代码</span>
	<span class="token keyword">namespace</span> <span class="token package">MyProject</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
		<span class="token keyword">function</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">namespace</span> <span class="token punctuation">{</span> <span class="token comment">// 全局代码</span>
		<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token function">MyProject<span class="token punctuation">\\</span>connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">echo</span> <span class="token class-name class-name-fully-qualified static-context">MyProject<span class="token punctuation">\\</span>Connection</span><span class="token operator">::</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><h3 id="子命名空间" tabindex="-1"><a class="header-anchor" href="#子命名空间" aria-hidden="true">#</a> 子命名空间</h3><p>与目录和文件的关系很像，PHP 命名空间也允许指定层次化的命名空间的名称。因此，命名空间的名字可以使用分层次的方式定义：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">namespace</span> <span class="token package">MyProject<span class="token punctuation">\\</span>Sub<span class="token punctuation">\\</span>Level</span><span class="token punctuation">;</span>  <span class="token comment">//声明分层次的单个命名空间</span>
	
	<span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
	<span class="token keyword">function</span> <span class="token function-definition function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div>`,8),e=[o];function c(l,k){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","namespace.html.vue"]]);export{u as default};
