import{_ as a,p as t,q as p,Z as s,s as n}from"./framework-6ecfbe9e.js";const o={},e=s(`<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h3><ul><li>关键字<code>bool</code>，不支持自动或者强制类型转换</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">bool</span>
v1 <span class="token operator">=</span> <span class="token boolean">true</span>
v2 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// v2 也会推导为 bool 类型。</span>
</code></pre></div><h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
v1 <span class="token operator">=</span> <span class="token number">10</span>
v2 <span class="token operator">:=</span> <span class="token number">20</span>
</code></pre></div>`,6),c=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"在 Go 语言中，int 和 int32 是两种不同的类型。")],-1),l=s(`<h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3><ul><li>若不指定类型，默认自动设置为<code>float64</code></li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 float
v1 <span class="token operator">=</span> <span class="token number">10.0</span>
v2 <span class="token operator">:=</span> <span class="token number">10.0</span>
</code></pre></div><ul><li>浮点数比较（因为浮点数不是一种精确的表达方式，所以像整型那样直接用<code>==</code>来判断两个浮点数是否相等是不可行的，这可能会导致不稳定的结果）</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;math&quot;</span>

<span class="token keyword">func</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> p <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">// p 为用户自定义的比较精度，比如0.00001。</span>
    <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Fdim</span><span class="token punctuation">(</span>f1<span class="token punctuation">,</span> f2<span class="token punctuation">)</span> <span class="token operator">&lt;</span> p       <span class="token comment">// Fdim() 函数计算两个数字之间的正差。</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><ul><li>声明和初始化</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str <span class="token builtin">string</span>
str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre></div><ul><li>字符串的内容可以用类似于数组下标的方式获取，但与数组不同，字符串的内容不能在初始化后被修改</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

str <span class="token operator">:=</span> <span class="token string">&quot;hello world&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str0<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>字符串遍历。</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> i<span class="token punctuation">,</span> ch <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span> <span class="token comment">// 第一个值是下标，第二个值是对应的 Unicode 字符编码值。</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>数组长度定义后不可修改</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
i <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> i <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
i<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
</code></pre></div><ul><li>访问数组元素</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Element&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;of array is&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p><code>range</code>具有两个返回值，第一个返回值是元素的数组下标，第二个返回值是元素的值。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> array <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Array element[&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;]=&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><h3 id="数组切片" tabindex="-1"><a class="header-anchor" href="#数组切片" aria-hidden="true">#</a> 数组切片</h3><ul><li>创建数组切片</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code>array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
myarray <span class="token operator">:=</span> array<span class="token punctuation">[</span>first<span class="token punctuation">:</span>last<span class="token punctuation">]</span>
</code></pre></div><ul><li>Go 语言提供的内置函数<code>make()</code>可以用于灵活地创建数组切片</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 创建一个初始元素个数为5的数组切片，元素初始值为0：</span>
mySlice1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">// 创建一个初始元素个数为5的数组切片，元素初始值为0，并预留10个元素的存储空间：</span>
mySlice2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">// 直接创建并初始化包含5个元素的数组切片：</span>
mySlice3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre></div><ul><li>内容复制</li></ul><p>数组切片支持 Go 语言的另一个内置函数 copy()，用于将内容从一个数组切片复制到另一个数组切片。如果加入的两个数组切片不一样大，就会按其中较小的那个数组切片的元素个数进行复制。</p><div class="language-go" data-ext="go"><pre class="language-go"><code>slice1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
slice2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token function">copy</span><span class="token punctuation">(</span>slice2<span class="token punctuation">,</span> slice1<span class="token punctuation">)</span> <span class="token comment">// 只会复制slice1的前3个元素到slice2中。</span>
<span class="token function">copy</span><span class="token punctuation">(</span>slice1<span class="token punctuation">,</span> slice2<span class="token punctuation">)</span> <span class="token comment">// 只会复制slice2的3个元素到slice1的前3个位置。</span>
</code></pre></div><ul><li>内容添加</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 给 mySlice 后面添加3个元素。</span>
mySlice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>mySlice<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 给 mySlice 后面添加另一个数组切片。</span>
mySlice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>mySlice<span class="token punctuation">,</span> mySlice2<span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre></div><p>需要注意的是，在第二个参数 mySlice2 后面加了三个点，即一个省略号，如果没有这个省略号的话，会有编译错误，因为按<code>append()</code>的语义，从第二个参数起的所有参数都是待附加的元素。因为 mySlice 中的元素类型为 int，所以直接传递 mySlice2 是行不通的。加上省略号相当于把 mySlice2 包含的<mark>所有元素打散后传入</mark>。</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><ul><li>map 是一堆键值对的未排序集合</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// map 声明</span>
<span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> PersonInfo
<span class="token comment">// 其中，myMap 是声明的 map 变量名，string 是键的类型，PersonInfo 则是其中所存放的值类型。</span>

<span class="token comment">// interface{} 可以代表任意类型，它是一个空接口，任意类型都可以实现该接口。</span>
<span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 使用 make() 函数创建一个新的 map。</span>
myMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> PersonInfo<span class="token punctuation">)</span>

<span class="token comment">// 创建并初始化 map。</span>
myMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> PersonInfo<span class="token punctuation">{</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">:</span> PersonInfo<span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Room 101,...&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">}</span>

<span class="token comment">// 元素赋值。</span>
myMap<span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> PersonInfo<span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Room 101,...&quot;</span><span class="token punctuation">}</span>

<span class="token comment">// 元素删除。</span>
<span class="token function">delete</span><span class="token punctuation">(</span>myMap<span class="token punctuation">,</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">)</span>

<span class="token comment">//元素查找。</span>
value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span> 
<span class="token keyword">if</span> ok <span class="token punctuation">{</span> 
	<span class="token comment">// 处理找到的 value。</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者</span>
<span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
	<span class="token comment">// 处理找到的 value。</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int</span>
	sex  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> stuOne <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>student
	stuOne <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span>
	stuOne<span class="token punctuation">[</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">}</span>

	<span class="token keyword">if</span> person<span class="token punctuation">,</span> ok <span class="token operator">:=</span> stuOne<span class="token punctuation">[</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&quot;结果：&quot;</span><span class="token punctuation">,</span> ok<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,35),u=[e,c,l];function i(k,r){return t(),p("div",null,u)}const m=a(o,[["render",i],["__file","type.html.vue"]]);export{m as default};
