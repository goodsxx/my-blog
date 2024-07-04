import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-DbRsw7jK.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h2><p>访问者模式通常在以下情况下使用：</p><ul><li>对象结构包含许多具有不同接口的对象，并且您希望对这些对象进行复杂的操作，而不想污染这些对象的类。</li><li>需要对对象结构进行许多不相关的操作，而不希望将这些操作封装到对象中。</li><li>对象结构中的类经常更改，但您希望对其进行许多不同的操作而不需要修改这些类。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>访问者模式使得添加新的操作变得容易，而不会影响到对象结构的类。</li><li>可以将相关操作封装在一个访问者中，从而使代码更加结构化。</li><li>可以将对象结构和操作分离，使得代码更加清晰。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>由于访问者模式需要将操作和对象结构分离，因此其代码可能比较复杂。</li><li>在对象结构中添加新的元素可能需要修改访问者的接口。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><p>下面是一个使用访问者模式的示例代码。假设我们有一个包含了多个元素的对象结构，每个元素都有一个Accept方法，接受一个访问者作为参数，并调用该访问者的Visit方法来进行操作。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象元素类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Element</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体元素类A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteElementA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Element</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OperationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 元素A的特定操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体元素类B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteElementB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Element</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OperationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 元素B的特定操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象访问者类</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IVisitor</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> elementA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> elementB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体访问者类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IVisitor</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> elementA<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elementA<span class="token punctuation">.</span><span class="token function">OperationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> elementB<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elementB<span class="token punctuation">.</span><span class="token function">OperationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 对象结构</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectStructure</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>Element<span class="token punctuation">&gt;</span></span> elements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Element<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Detach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> element <span class="token keyword">in</span> elements<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">ObjectStructure</span> objectStructure <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ObjectStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteElementA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteElementB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ConcreteVisitor</span> visitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例代码中，我们定义了三个抽象元素类、两个具体元素类，一个抽象访问者类和一个具体访问者类。我们还定义了一个对象结构类来管理元素，并在客户端代码中将元素添加到对象结构中，然后创建一个访问者并将其传递给对象结构的 Accept 方法。这样，访问者就可以访问元素并进行操作，而不需要在元素类中添加任何新的方法。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><p>上面的代码示例已经比较简单和优化了，但是在实际的项目中，如果对象结构中的元素类比较多，访问者类可能会变得非常庞大，这时候可以考虑使用抽象访问者类和具体访问者类之间的继承关系来简化访问者类的实现。另外，如果对象结构中的元素类发生了变化，我们还可以使用反射技术来自动注册元素类和访问者类，从而简化代码。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象元素类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Element</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体元素类A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteElementA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Element</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OperationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体元素类B</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteElementB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Element</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OperationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象访问者类</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IVisitor</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体访问者类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IVisitor</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span><span class="token function">OperationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span><span class="token function">OperationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 对象结构类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectStructure</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>Element<span class="token punctuation">&gt;</span></span> elements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Element<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Detach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Accept</span><span class="token punctuation">(</span><span class="token class-name">IVisitor</span> visitor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> element <span class="token keyword">in</span> elements<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">ObjectStructure</span> objectStructure <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ObjectStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteElementA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteElementB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ConcreteVisitor</span> visitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectStructure<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在优化后的代码中，我们去掉了抽象访问者类，并将其转换为接口，从而使访问者类的实现更加灵活。此外，我们还将具体元素类和具体访问者类的方法名更改为 VisitXXX 的形式，并将业务逻辑封装在这些方法中，以便访问者可以对不同类型的元素执行不同的操作。另外，我们还将对象结构类的 Attach 和 Detach 方法的参数类型改为 Element 类型，并在客户端代码中直接创建具体元素对象并将其添加到对象结构中，从而使代码更加简洁。</p>`,19),c=[p];function i(l,o){return s(),a("div",null,c)}const k=n(t,[["render",i],["__file","visitor-pattern.html.vue"]]),d=JSON.parse('{"path":"/articles/design-pattern/visitor-pattern.html","title":"访问者模式","lang":"zh-CN","frontmatter":{"title":"访问者模式","date":"2022-06-01T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","行为型模式"],"timeline":true,"order":16,"description":"✨✨✨✨✨ 访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/design-pattern/visitor-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"访问者模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-26T10:16:57.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-26T10:16:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"访问者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-26T10:16:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]}],"git":{"createdTime":1679825817000,"updatedTime":1679825817000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":4.64,"words":1391},"filePathRelative":"articles/design-pattern/visitor-pattern.md","localizedDate":"2022年6月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>访问者模式（Visitor Pattern）是一种行为型设计模式，它允许你将算法从对象结构中分离出来，使这些算法可以在不改变这些对象的前提下被添加到该对象结构中。通过这种方式，可以在不修改对象结构的情况下，对其进行复杂的操作和处理。</p>\\n</div>\\n","autoDesc":true}');export{k as comp,d as data};