import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time<span class="token punctuation">,</span> datetime

tss1 <span class="token operator">=</span> <span class="token string">&#39;2013-10-10 23:40:00&#39;</span> <span class="token comment"># 字符类型的时间</span>
timeArray <span class="token operator">=</span> time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>tss1<span class="token punctuation">,</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 按照字符类型时间格式转换成数组</span>

<span class="token comment"># 以下操作都需要先将字符类型时间转换成时间数组，再将时间数组传入</span>
timeStamp <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>timeArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 转换成时间戳，单位：s</span>
otherStyleTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y/%m/%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> timeArray<span class="token punctuation">)</span> <span class="token comment"># 转换成0000/00/00 00:00:00</span>
otherStyleTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> timeArray<span class="token punctuation">)</span> <span class="token comment"># 转换成0000-00-00 00:00:00</span>

<span class="token comment"># 时间戳转换成字符时间</span>
timeStamp <span class="token operator">=</span> <span class="token number">1381419600</span> <span class="token comment"># 定义时间戳</span>
dateArray <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>timeStamp<span class="token punctuation">)</span> 
otherStyleTime <span class="token operator">=</span> dateArray<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 转化成0000-00-00 00:00:00</span>
otherStyleTime <span class="token operator">=</span> dateArray<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;H:%M:%S&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 转换成00:00:00</span>

<span class="token comment"># 获取当前时间戳</span>
now <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
timeArray <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>now<span class="token punctuation">)</span>
otherStyleTime <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> timeArray<span class="token punctuation">)</span> <span class="token comment"># 转化成0000-00-00 00:00:00</span>

<span class="token comment"># 获取当前时间的数组格式</span>
now <span class="token operator">=</span> datatime<span class="token punctuation">.</span>datatime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
otherStyleTime <span class="token operator">=</span> now<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 转化成0000-00-00 00:00:00</span>
</code></pre></div>`,2),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","time.html.vue"]]);export{k as default};
