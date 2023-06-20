import{_ as n,p as a,q as s,Z as e}from"./framework-6ecfbe9e.js";const t={},o=e(`<h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h2><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token keyword">chan</span> <span class="token builtin">bool</span>
</code></pre></div><ul><li>我们可以使用channel在两个或多个goroutine之间传递消息</li></ul><p><code>channel</code>是类型相关的。也就是说，一个<code>channel</code>只能传递<code>一种类型</code>的值，这个类型需要在声明 channel 时指定。</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ul><li>使用内置的函数 make() 即可</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><ul><li>向 channel 写入数据通常会导致程序阻塞，直到有其他 goroutine 从这个 channel 中读取数据</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 将一个数据写入channel</span>
ch <span class="token operator">&lt;-</span> value

<span class="token comment">// 从channel中读取数据</span>
value <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
</code></pre></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3><ul><li>通过调用 select() 函数来监控一系列的文件句柄，一旦<code>其中一个</code>文件句柄发生了 IO 动作，该 select() 调用就会被返回</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>chan1<span class="token punctuation">:</span> 
    	<span class="token comment">// 如果chan1成功读到数据，则进行该case处理语句 </span>
	<span class="token keyword">case</span> chan2 <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span> 
    	<span class="token comment">// 如果成功向chan2写入数据，则进行该case处理语句 </span>
	<span class="token keyword">default</span><span class="token punctuation">:</span> 
    	<span class="token comment">// 如果上面都没有成功，则进入default处理流程</span>
<span class="token punctuation">}</span>
</code></pre></div><p>每个<code>case</code>语句都必须是一个面向<code>channel</code>的操作。</p><h3 id="缓冲机制" tabindex="-1"><a class="header-anchor" href="#缓冲机制" aria-hidden="true">#</a> 缓冲机制</h3><ul><li>创建一个带缓冲的 channel</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code>c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
</code></pre></div><p>即使没有读取方，写入方也可以一直往 channel 里写入，在缓冲区被填完之前都不会阻塞。</p><ul><li>读取 channel 里的数据</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> c <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Received:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="超时机制" tabindex="-1"><a class="header-anchor" href="#超时机制" aria-hidden="true">#</a> 超时机制</h3><ul><li>Go 语言没有提供直接的超时处理机制，但可以利用 select 机制。</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 首先，我们实现并执行一个匿名的超时等待函数。</span>
timeout <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1e9</span><span class="token punctuation">)</span> <span class="token comment">// 等待1秒钟。</span>
    timeout <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 然后我们把 timeout 这个 channel 利用起来。</span>
<span class="token keyword">select</span> <span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">:</span> 
    	<span class="token comment">// 从ch中读取到数据。</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeout<span class="token punctuation">:</span> 
    	<span class="token comment">// 一直没有从 ch 中读取到数据，但从 timeout 中读取到了数据。</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="单向" tabindex="-1"><a class="header-anchor" href="#单向" aria-hidden="true">#</a> 单向</h3><ul><li>将一个<code>channel</code>变量传递到一个函数时，可以通过将其指定为<code>单向channel</code>变量，从而限制该函数中可以对此<code>channel</code>的操作，比如只能往这个<code>channel</code>写，或者只能从这个<code>channel</code>读</li></ul><p>声明</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> ch1 <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token comment">// ch1 是一个正常的 channel，不是单向的。</span>
<span class="token keyword">var</span> ch2 <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">float64</span> <span class="token comment">// ch2 是单向 channel，只能用于写 float64 数据。</span>
<span class="token keyword">var</span> ch3 <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token comment">// ch3 是单向 channel，只能用于读取 int 数据。</span>
</code></pre></div><p>初始化</p><div class="language-go" data-ext="go"><pre class="language-go"><code>ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
ch2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token function">int</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span> <span class="token comment">// ch2 就是一个单向读取 channel。</span>
ch3 <span class="token operator">:=</span> <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token function">int</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span> <span class="token comment">// ch2 就是一个单向写入 channel。</span>
</code></pre></div><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><ul><li>关闭 channel，使用内置函数<code>close()</code></li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre></div><h2 id="通道" tabindex="-1"><a class="header-anchor" href="#通道" aria-hidden="true">#</a> 通道</h2><blockquote><p>通道可用于两个 goroutine 之间通过传递一个指定类型的值来同步运行和通讯。操作符<code>&lt;-</code>用于指定通道的方向，发送或接收。如果未指定方向，则为双向通道。</p></blockquote><div class="language-go" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">&lt;-</span> v    <span class="token comment">// 把 v 发送到通道 ch。</span>
v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch  <span class="token comment">// 从 ch 接收数据并把值赋给 v。</span>
</code></pre></div><p>声明一个通道很简单，使用 chan 关键字即可，通道在使用前必须先创建。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre></div><p>带缓冲区的通道允许发送端的数据发送和接收端的数据获取处于异步状态，就是说发送端发送的数据可以放在缓冲区里面，可以等待接收端去获取数据，而不是立刻需要接收端去获取数据。</p><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 设置缓冲区。</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token comment">// 随机向通道写入0或1。</span>
	<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	i <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>go 可以通过 range 关键字遍历得到数据。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
</code></pre></div><p>关闭通道使用 close()，如果使用 range 关键字遍历 channel，不关闭的话，将会导致堵塞，range 函数不会结束。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre></div>`,45),p=[o];function c(l,u){return a(),s("div",null,p)}const i=n(t,[["render",c],["__file","channel.html.vue"]]);export{i as default};
