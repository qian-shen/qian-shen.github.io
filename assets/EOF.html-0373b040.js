import{_ as a,p as t,q as e,Z as s,s as n}from"./framework-47a2e622.js";const o="/images/image_20221103103948.png",p={},l=s(`<h2 id="eof" tabindex="-1"><a class="header-anchor" href="#eof" aria-hidden="true">#</a> EOF</h2><p>PHP EOF(heredoc)是一种在命令行shell（如 sh、csh、ksh、bash、PowerShell 和 zsh）和程序语言（像 Perl、PHP、Python 和 Ruby）里定义一个字符串的方法。</p><blockquote><p>使用方法</p></blockquote><ul><li>必须后接分号，否则编译通不过。</li><li>EOF 可以用任意其它字符代替，只需保证结束标识与开始标识一致。</li><li><strong>结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)</strong>。</li><li>开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号。</li><li>当内容需要内嵌引号（单引号或双引号）时，不需要加转义符，本身对单双引号转义，此处相当与 q 和 qq 的用法。</li></ul><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  
	<span class="token keyword">echo</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>EOF</span>
	        &lt;h1&gt;我的第一个标题&lt;/h1&gt;  
	        &lt;p&gt;我的第一个段落。&lt;/p&gt;  
<span class="token delimiter symbol">EOF<span class="token punctuation">;</span></span></span>  
<span class="token comment">// 结束需要独立一行且前后不能空格  </span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div>`,5),c=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("ul",null,[n("li",null,"以 <<<EOF 开始标记开始，以 EOF 结束标记结束，结束标记必须顶头写，不能有缩进和空格，且在结束标记末尾要有分号 。"),n("li",null,"开始标记和结束标记相同，比如常用大写的 EOT、EOD、EOF 来表示，但是不只限于那几个(也可以用：JSON、HTML 等)，只要保证开始标记和结束标记不在正文中出现即可。"),n("li",null,"位于开始标记和结束标记之间的变量可以被正常解析，但是函数则不可以。在 heredoc 中，变量不需要用连接符 . 或 , 来拼接。")])],-1),i=s(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$name</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;runoob&quot;</span><span class="token punctuation">;</span>
	<span class="token variable">$a</span><span class="token operator">=</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>EOF</span>
	        &quot;abc&quot;<span class="token interpolation"><span class="token variable">$name</span></span>
	        &quot;123&quot;
<span class="token delimiter symbol">EOF<span class="token punctuation">;</span></span></span>
	<span class="token comment">// 结束需要独立一行且前后不能空格</span>
	<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div>`,1),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"EOF 中是会解析 html 格式内容的，并且在双引号内的内容也有转义效果")],-1),u=s(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$name</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;变量会被解析&quot;</span><span class="token punctuation">;</span>
	<span class="token variable">$a</span><span class="token operator">=</span><span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>EOF</span>
	<span class="token interpolation"><span class="token variable">$name</span></span>&lt;br&gt;&lt;a&gt;html格式会被解析&lt;/a&gt;&lt;br/&gt;双引号和Html格式外的其他内容都不会被解析
	&quot;双引号外所有被排列好的格式都会被保留&quot;
	&quot;但是双引号内会保留转义符的转义效果,比如table:\\t和换行：\\n下一行&quot;
<span class="token delimiter symbol">EOF<span class="token punctuation">;</span></span></span>
	<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre></div><p><img src="`+o+'" alt=""></p>',2),k=[l,c,i,r,u];function d(h,g){return t(),e("div",null,k)}const _=a(p,[["render",d],["__file","EOF.html.vue"]]);export{_ as default};
