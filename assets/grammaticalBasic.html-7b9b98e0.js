import{_ as a,p as t,q as p,Z as s,s as n}from"./framework-548e1e2a.js";const o={},e=s(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><ul><li>常用的声明方法</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
<span class="token keyword">var</span> v2 <span class="token builtin">string</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    v1 <span class="token builtin">int</span>
    v2 <span class="token builtin">string</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><ul><li>初始化时可指定数据类型，也可以不指定</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token number">10</span>
v1 <span class="token operator">:=</span> <span class="token number">10</span> <span class="token comment">// 只能用于函数体内，不可用于全局变量的声明与赋值，且左侧的变量不应该被声明过，否则会导致编译错误。</span>
</code></pre></div><h3 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h3><ul><li>先初始化，后赋值</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
v1 <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">var</span> v2 <span class="token builtin">int</span>
v2 <span class="token operator">=</span> <span class="token number">20</span>

v1<span class="token punctuation">,</span> v2 <span class="token operator">=</span> v2<span class="token punctuation">,</span> v1 <span class="token comment">// 交换变量的值。</span>
</code></pre></div><h3 id="匿名变量" tabindex="-1"><a class="header-anchor" href="#匿名变量" aria-hidden="true">#</a> 匿名变量</h3><ul><li>在实际编程过程中，有些变量可能不需要，这时就可以使用<code>_</code>来获取不需要的变量</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> nickName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token string">&quot;May&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chibi Maruko&quot;</span>
<span class="token punctuation">}</span>

<span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> nickName <span class="token operator">:=</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> Pi <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">const</span> zero <span class="token operator">=</span> <span class="token number">0.0</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    size <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">1024</span>
    eof <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> mask <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3</span> <span class="token comment">// 常量定义的右值也可以是一个在编译期运算的常量表达式，由于常量的赋值是一个编译期行为，所以右值不能出现任何需要运行期才能得出结果的表达。</span>
</code></pre></div>`,16),c=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"常量一旦被定义后就不能被修改。")],-1),l=s(`<h3 id="预定义常量" tabindex="-1"><a class="header-anchor" href="#预定义常量" aria-hidden="true">#</a> 预定义常量</h3><ul><li>Go 语言预定义了这些常量：<code>true</code> <code>false</code> <code>iota</code></li></ul><p><code>iota</code>比较特殊，可以被认为是一个可被编译器修改的常量，在每一个<code>const</code>关键字出现时被重置为0，然后在下一个 const 出现之前，每出现一次 iota，其所代表的数字会自动增1。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>		  <span class="token comment">// iota 被重设为0。</span>
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
</code></pre></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h3><ul><li>关键字<code>bool</code>，不支持自动或者强制类型转换</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">bool</span>
v1 <span class="token operator">=</span> <span class="token boolean">true</span>
v2 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// v2 也会推导为 bool 类型。</span>
</code></pre></div><h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 <span class="token builtin">int</span>
v1 <span class="token operator">=</span> <span class="token number">10</span>
v2 <span class="token operator">:=</span> <span class="token number">20</span>
</code></pre></div>`,13),u=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"在 Go 语言中，int 和 int32 是两种不同的类型。")],-1),i=s(`<h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3><ul><li>若不指定类型，默认自动设置为<code>float64</code></li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v1 float
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
</code></pre></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token number">1</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>关于条件语句，需要注意以下几点：</p><ul><li>条件语句不需要使用<code>()</code>将条件包含起来。</li><li>无论语句体内有几条语句，<code>{}</code>都是必须存在的。</li><li>左花括号<code>{</code>必须与<code>if</code>或者<code>else</code>处于同一行。</li><li>在<code>if</code>之后，条件语句之前，可以添加变量初始化语句，使用<code>;</code>间隔。</li><li>在有返回值的函数中，不允许将<mark>最终的 return</mark> 语句包含在<code>if...else...</code>结构中，否则会编译失败。</li></ul><h3 id="选择语句" tabindex="-1"><a class="header-anchor" href="#选择语句" aria-hidden="true">#</a> 选择语句</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">switch</span> i <span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span> 
    	<span class="token keyword">fallthrough</span> 
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;4, 5, 6&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">default</span><span class="token punctuation">:</span> 
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p><code>switch</code>后面的表达式不是必需的。</p><p>关于选择语句，需要注意以下几点：</p><ul><li>左花括号<code>{</code>必须与<code>switch</code>处于同一行。</li><li>条件表达式不限制为常量或者整数。</li><li>单个<code>case</code>中，可以出现多个结果选项。</li><li>与 C 语言等规则相反，Go 语言不需要用<code>break</code>来明确退出一个<code>case</code>。</li><li>只有在<code>case</code>中明确添加<code>fallthrough</code>关键字，才会继续执行紧跟的下一个<code>case</code>。</li><li>可以不设定<code>switch</code>之后的条件表达式，在此种情况下，整个<code>switch</code>结构与多个<code>if...else...</code>的逻辑作用等同。</li></ul><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><ul><li>与多数语言不同，Go 语言中的循环语句只支持<code>for</code>关键字</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 一般写法。</span>
sum <span class="token operator">:=</span> <span class="token number">0</span> 
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> 
    sum <span class="token operator">+=</span> i
<span class="token punctuation">}</span>

<span class="token comment">// 简化写法。</span>
sum <span class="token operator">:=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
	sum<span class="token operator">++</span>
	<span class="token keyword">if</span> sum <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>关于循环语句，需要注意以下几点：</p><ul><li>左花括号<code>{</code>必须与<code>for</code>处于同一行。</li><li>Go 语言中的 for 循环与 C 语言一样，都允许在循环条件中定义和初始化变量，唯一的区别是，Go 语言不支持以<code>逗号</code>为间隔的多个赋值语句，必须使用平行赋值的方式来初始化多个变量。</li><li>Go 语言的 for 循环同样支持<code>continue</code>和<code>break</code>来控制循环。</li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><ul><li>Go 语言中，函数的基本组成为：关键字<code>func</code>、函数名、参数列表、返回值、函数体和返回语句</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mymath 
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
</code></pre></div>`,56),k=n("div",{class:"custom-container danger"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M10 10l4 4m0-4l-4 4"})])]),n("p",{class:"custom-container-title"},"DANGER"),n("p",null,"小写字母开头的函数只在本包内可见，大写字母开头的函数才能被其他包使用。这个规则也适用于类型和变量的可见性。")],-1),r=s(`<h3 id="不定参数" tabindex="-1"><a class="header-anchor" href="#不定参数" aria-hidden="true">#</a> 不定参数</h3><ul><li>不定参数是指函数传入的参数个数为不定数量</li></ul><p>首先需要将函数定义为接受不定参数类型。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
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
</code></pre></div><p>当出现多个<code>defer</code>时，按照<code>先进后出</code>的原则，最先被<code>defer</code>的最后执行</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><ul><li>面向对象与面向过程比较</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Integer <span class="token builtin">int</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a Integer <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a Integer<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">// 面向对象。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Integer_Less</span><span class="token punctuation">(</span>a Integer<span class="token punctuation">,</span> b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">// 面向过程。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b
<span class="token punctuation">}</span>

a<span class="token punctuation">.</span><span class="token function">Less</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 面向对象的用法。</span>
<span class="token function">Integer_Less</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 面向过程的用法。</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>dog Dog<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//将方法绑定在对象上。</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;狗叫&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> animal Animal

	animal <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span>

	animal<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token builtin">float64</span>
    width<span class="token punctuation">,</span> height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//成员方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
</code></pre></div><h3 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h3><div class="language-go" data-ext="go"><pre class="language-go"><code>rect1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Rect<span class="token punctuation">)</span>
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
</code></pre></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// 接口类型命名按照 er 结尾。</span>
<span class="token keyword">type</span> talk <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 只要实现了接口的类型都可以当作参数传入。</span>
<span class="token keyword">func</span> <span class="token function">shout</span><span class="token punctuation">(</span>t talk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="赋值-1" tabindex="-1"><a class="header-anchor" href="#赋值-1" aria-hidden="true">#</a> 赋值</h3><p>接口赋值在 Go 语言中分为如下两种情况：</p><ul><li>将对象实例赋值给接口。</li><li>将一个接口赋值给另一个接口。</li></ul><p><strong>对象实例赋值给接口</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> LessAdder <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">// 定义一个接口。</span>
    <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> 
    <span class="token function">Add</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Integer <span class="token builtin">int</span> <span class="token comment">// 定义一个类型</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a Integer<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token comment">//类型 Less() 方法。</span>
    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Integer<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>b Integer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//类型 Add() 方法。</span>
    <span class="token operator">*</span>a <span class="token operator">+=</span> b
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a Integer <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b LessAdder <span class="token operator">=</span> <span class="token operator">&amp;</span>a
</code></pre></div><p><strong>接口赋值给接口</strong></p><p>接口赋值并不要求两个接口必须等价。如果接口<code>A</code>的方法列表是接口<code>B</code>的方法列表的子集， 那么接口<code>B</code>可以赋值给接口<code>A</code>。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> one
<span class="token keyword">type</span> ReadWriter <span class="token keyword">interface</span> <span class="token punctuation">{</span> 
    <span class="token function">Read</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
    <span class="token function">Write</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> two
<span class="token keyword">type</span> IStream <span class="token keyword">interface</span> <span class="token punctuation">{</span> 
    <span class="token function">Write</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
    <span class="token function">Read</span><span class="token punctuation">(</span>buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> file1 two<span class="token punctuation">.</span>IStream <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>File<span class="token punctuation">)</span>
<span class="token keyword">var</span> file2 one<span class="token punctuation">.</span>ReadWriter <span class="token operator">=</span> file1
<span class="token keyword">var</span> file3 two<span class="token punctuation">.</span>IStream <span class="token operator">=</span> file2
</code></pre></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><p>查询<code>file1</code>对象实例是否实现了<code>two.IStream</code>接口。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> file1 Writer <span class="token operator">=</span> <span class="token operator">...</span>
<span class="token keyword">if</span> file5<span class="token punctuation">,</span> ok <span class="token operator">:=</span> file1<span class="token punctuation">.</span><span class="token punctuation">(</span>two<span class="token punctuation">.</span>IStream<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>代码实例</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> test1 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> test2 <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>test test1<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test1-call&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>test test2<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test2-call&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>test test2<span class="token punctuation">)</span> <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;test1-talk&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> one <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> two <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> test1 one <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span>
	<span class="token keyword">var</span> test2 two <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>test2<span class="token punctuation">)</span>
	<span class="token keyword">if</span> test<span class="token punctuation">,</span> ok <span class="token operator">:=</span> test2<span class="token punctuation">.</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">,</span> ok<span class="token punctuation">)</span> <span class="token comment">// 通过反射查询变量类型。</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h2><ul><li>goroutine 是 Go 语言中的轻量级线程实现，由 Go 运行时（runtime）管理</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    z <span class="token operator">:=</span> x <span class="token operator">+</span> y 
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">go</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 并发执行</span>
</code></pre></div><p>需要注意的是，如果这个函数有返回值，那么这个返回值会被丢弃。</p><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h2><h3 id="声明-1" tabindex="-1"><a class="header-anchor" href="#声明-1" aria-hidden="true">#</a> 声明</h3><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token keyword">chan</span> <span class="token builtin">bool</span>
</code></pre></div><ul><li>我们可以使用channel在两个或多个goroutine之间传递消息</li></ul><p><code>channel</code>是类型相关的。也就是说，一个<code>channel</code>只能传递<code>一种类型</code>的值，这个类型需要在声明 channel 时指定。</p><h3 id="定义-4" tabindex="-1"><a class="header-anchor" href="#定义-4" aria-hidden="true">#</a> 定义</h3><ul><li>使用内置的函数 make() 即可</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
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
</code></pre></div><h2 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h2><h3 id="同步锁" tabindex="-1"><a class="header-anchor" href="#同步锁" aria-hidden="true">#</a> 同步锁</h3><ul><li>Go 语言包中的 sync 包提供了两种锁类型：<code>sync.Mutex</code>和<code>sync.RWMutex</code></li></ul><p><code>Mutex</code>是最简单的一种锁类型，同时也比较暴力，当一个<code>goroutine</code>获得了<code>Mutex</code>后，其他 goroutine 就只能乖乖等到这个<code>goroutine</code>释放该<code>Mutex</code>。<code>RWMutex</code>相对友好些，是经典的<code>单写多读</code>模型。在读锁占用的情下，会阻止写，但不阻止读，也就是多个<code>goroutine</code>可同时获取读锁（调用<code>RLock()</code>方法；而写锁（调用<code>Lock()</code>方法）会阻止任何其他<code>goroutine</code>（无论读和写）进来，整个锁相当于由该<code>goroutine</code>独占。</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> RWMutex <span class="token keyword">struct</span> <span class="token punctuation">{</span>
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
</code></pre></div><p><code>once</code>的<code>Do()</code>方法可以保证在全局范围内只调用指定的函数一次</p><h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h2><h3 id="dial-函数" tabindex="-1"><a class="header-anchor" href="#dial-函数" aria-hidden="true">#</a> Dial() 函数</h3><ul><li>Dial() 函数原型</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Dial</span><span class="token punctuation">(</span>net<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Conn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre></div><p>其中<code>net</code>参数是网络协议的名字，<code>addr</code>参数是 IP 地址或域名，而端口号以<code>:</code>的形式跟随在地址或域名的后面，端口号可选。如果连接成功，返回连接对象，否则返回<code>error</code>。</p><ul><li>一些常见协议的调用方法</li></ul><p><strong>TCP 链接</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.10:2100&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>UDP 链接</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.12:975&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>ICMP 链接（使用协议名称）</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:icmp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>ICMP 链接（使用协议编号）</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.3&quot;</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>Dial()函数支持如下几种网络协议：&quot;tcp&quot;、&quot;tcp4&quot;（仅限IPv4）、&quot;tcp6&quot;（仅限IPv6）、&quot;udp&quot;、&quot;udp4&quot;（仅限IPv4）、&quot;udp6&quot;（仅限IPv6）、&quot;ip&quot;、&quot;ip4&quot;（仅限IPv4）和&quot;ip6&quot; （仅限IPv6）。</p></blockquote><h2 id="md5-值" tabindex="-1"><a class="header-anchor" href="#md5-值" aria-hidden="true">#</a> MD5 值</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;crypto/md5&quot;</span>

str <span class="token operator">:=</span> <span class="token string">&quot;123456&quot;</span>  
data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>  
has <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>  
md5str1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%x&quot;</span><span class="token punctuation">,</span> has<span class="token punctuation">)</span> <span class="token comment">//将 []byte 转成16进制。</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>md5str1<span class="token punctuation">)</span>
</code></pre></div><h2 id="随机数" tabindex="-1"><a class="header-anchor" href="#随机数" aria-hidden="true">#</a> 随机数</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;math/rand&quot;</span>
rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
t <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>  
str <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>  
authStr <span class="token operator">:=</span> str<span class="token operator">+</span><span class="token string">&quot;%#&quot;</span>  
fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>authStr<span class="token punctuation">)</span>
</code></pre></div><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;regexp&quot;</span>
data <span class="token operator">:=</span> <span class="token string">&quot;abcd&quot;</span>
reg <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">&quot;ab(.*?)d&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> reg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;MustCompile err&quot;</span><span class="token punctuation">)</span>  
   <span class="token keyword">return</span>  
<span class="token punctuation">}</span>
results <span class="token operator">:=</span> reg<span class="token punctuation">.</span><span class="token function">FindStringSubmatch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 获取子表达式。</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>  
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;结果是&quot;</span><span class="token operator">+</span>result<span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>

<span class="token comment">// 字符串切割。</span>
s <span class="token operator">:=</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 获取子表达式。</span>
a <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 以&quot;, &quot;作为分割点。</span>
fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="json-解析" tabindex="-1"><a class="header-anchor" href="#json-解析" aria-hidden="true">#</a> JSON 解析</h2><div class="language-go" data-ext="go"><pre class="language-go"><code>request<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> URL<span class="token operator">+</span>configURL<span class="token punctuation">,</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>poc<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// Dial() 函数的原型如下：</span>
<span class="token keyword">func</span> <span class="token function">Dial</span><span class="token punctuation">(</span>net<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Conn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token comment">// 其中 net 参数是网络协议的名字，addr 参数是 IP 地址或域名，而端口号以“:”的形式跟随在地址或域名的后面，端口号可选。如果连接成功，返回连接对象，否则返回 error。</span>

<span class="token comment">// tcp 链接</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.10:2100&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// udp 链接</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.12:975&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// ICMP 链接（使用协议名称）</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:icmp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// ICMP 链接（使用协议编号）</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.3&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dial" tabindex="-1"><a class="header-anchor" href="#dial" aria-hidden="true">#</a> Dial</h2><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h2><blockquote><p>通过 go 关键字来开启 goroutine。</p></blockquote><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
        <span class="token string">&quot;fmt&quot;</span>
        <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">say</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
                time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
        <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
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
</code></pre></div>`,146),d=[e,c,l,u,i,k,r];function g(m,h){return t(),p("div",null,d)}const b=a(o,[["render",g],["__file","grammaticalBasic.html.vue"]]);export{b as default};
