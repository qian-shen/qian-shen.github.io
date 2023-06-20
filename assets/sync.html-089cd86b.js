import{_ as n,p as s,q as a,Z as o}from"./framework-6ecfbe9e.js";const t={},e=o(`<h2 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h2><h3 id="同步锁" tabindex="-1"><a class="header-anchor" href="#同步锁" aria-hidden="true">#</a> 同步锁</h3><ul><li>Go 语言包中的 sync 包提供了两种锁类型：<code>sync.Mutex</code>和<code>sync.RWMutex</code></li></ul><p><code>Mutex</code>是最简单的一种锁类型，同时也比较暴力，当一个<code>goroutine</code>获得了<code>Mutex</code>后，其他 goroutine 就只能乖乖等到这个<code>goroutine</code>释放该<code>Mutex</code>。<code>RWMutex</code>相对友好些，是经典的<code>单写多读</code>模型。在读锁占用的情下，会阻止写，但不阻止读，也就是多个<code>goroutine</code>可同时获取读锁（调用<code>RLock()</code>方法；而写锁（调用<code>Lock()</code>方法）会阻止任何其他<code>goroutine</code>（无论读和写）进来，整个锁相当于由该<code>goroutine</code>独占。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> RWMutex <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    w Mutex
    writerSem <span class="token builtin">uint32</span>
    readerSem <span class="token builtin">uint32</span>
	readerCount <span class="token builtin">int32</span>
    readerWait <span class="token builtin">int32</span>
<span class="token punctuation">}</span>
</code></pre></div><p>锁的经典模型使用。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> l sync<span class="token punctuation">.</span>Mutex
<span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    l<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> l<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="全局唯一性" tabindex="-1"><a class="header-anchor" href="#全局唯一性" aria-hidden="true">#</a> 全局唯一性</h3><ul><li>对于从全局的角度只需要运行一次的代码，比如全局初始化操作，Go语言提供了一个<code>Once</code>类型来保证全局的唯一性操作</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> a <span class="token builtin">string</span>
<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">func</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">=</span> <span class="token string">&quot;hello, world&quot;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">doprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>setup<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">twoprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">doprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">doprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>once</code>的<code>Do()</code>方法可以保证在全局范围内只调用指定的函数一次</p>`,11),c=[e];function p(u,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","sync.html.vue"]]);export{d as default};
