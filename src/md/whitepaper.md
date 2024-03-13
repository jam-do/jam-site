## The Problem...

### The increasing complexity of modern web development

You may have encountered discussions on social media reflecting on the simplicity of early web development, contrasting sharply with today's complexities. Originally, HTML served as a straightforward markup language for crafting basic web pages and linking them together.

Currently, an HTML document acts more as a configuration tool for launching a web application, incorporating numerous technologies beyond mere hypertext. The web's evolution narrates the transformation of the simple hypertext concept into a comprehensive platform for application development. While this progression has unlocked vast opportunities for creativity and business, it has simultaneously erected barriers for individuals not deeply versed in web development, preventing them from easily creating web resources.

There was a period when developers' needs surpassed the capabilities of the "native" web, necessitating additional tools for tackling development challenges. Examples include JQuery, CommonJS, CSS preprocessors, bundlers, and UI libraries with exclusive component models like React.

However, the web platform, encompassing language standards, browser APIs, and Node has significantly evolved, offering solutions that obsolete many previously essential external tools. It now delivers these solutions more efficiently, securely, and user-friendly. Despite these advancements, the web industry's inertia and the potential conflict between new features and earlier, popular tools pose a paradox.

Creating a simple web page remains straightforward with basic HTML and a web server. Yet, implementing consistent "header" and "footer" parts across multiple pages complicates manual updates. Similarly, formatting text blocks becomes cumbersome with HTML tags, especially compared to markdown format.  But markdown itself is not browser-supported, and HTML modules are not supported too.

Often, tasks that initially seem straightforward reveal underlying complexities, necessitating knowledge of various frameworks or CMS solutions.

### Problems of no-code systems

One of the solutions to the problem described above could be **no-code** systems — applications and services that allow you to work with websites using graphical interfaces. 

However, the graphical interface itself creates its own set of problems, such as:
- Lack of flexibility — any problem that goes beyond the basic workflow can become unsolvable.
- Limitations of built-in text editors: formatting, available widgets, content types, etc. (one of the most frequently mentioned problems).
- The complexity of the interfaces of advanced systems may exceed the complexity of solving the problem using programming or formatting at the code editing level. It's easy for people to get lost among the huge number of buttons and panels. Using complex interfaces also requires training and experience.
- Difficulty in organizing collaboration, version control, and reviewing changes.
- You still have to edit the code: in templates, widgets, extensions.
- Proprietary services — your site does not belong to you.
- Difficulty moving/transferring to another platform.
- The problem of a “black box” is that you may not know or control what exactly is happening to your site “under the hood” of such system.
- To solve some problems, it is necessary to create overly complex interfaces that are complex in themselves (for example, drag-n-drop in combination with scrolling), that is, they require huge labor costs to create and support, which also significantly limits the flexibility of the system and its development.
- And so on.

### Lack of qualified specialists and excess of low/entry-level specialists

Due to the hyper-popularity of the web, there are a lot of web developers, and new ones are entering the industry every year. But the overall quality of specialists, unfortunately, is falling, since those who came to development “by calling” find themselves diluted by those who are looking for easy money and treat the work exclusively formally. In such conditions, it becomes difficult to find a specialist who will actually solve your problem and not create a new one. Increasing the threshold of complexity for solving “simple” problems aggravates this situation. It becomes a common situation when simply moving a button from one place to another requires the attention of an expensive and rare specialist.

### Organizing teams and collaboration to create micro-products

There are web developers with more narrow specializations, for example those who know better than others how to build an authorization process, how to organize the download of large files, or how to use 3D graphics in the browser. There are many special subject areas in which general knowledge is not enough, but experience of direct work with them is also required.

It can be difficult for such developers to offer their services to the market, since it is difficult to formulate them into an independent product, because, in this case, it is necessary to deal with marketing, financial issues, support and reporting to government agencies. Not everyone is able to build their own IT company from scratch, while simultaneously working directly on development.

On the other hand, the market clearly has a need for “micro-products” and “micro-services”— services that solve specific problems without having to build our own development processes around them, maintain teams, and repeatedly reinvent what others have already created.

### Communication with AI and neurocasting

Let's look into the near future. In our opinion, there is a set of technologies and trends that, in combination, can greatly change our world in the very near future. More than the Internet itself has changed our world.

Such technologies are:
- Quantum computing
- AR/XR (augmented and extended reality)
- AI (Artificial Intelligence)
- Blockchain

Accessible augmented reality can change a lot in the perception and consumption patterns of web content, in the principles of interaction with interfaces and the presentation of information. One of the basic limitations of modern UX engineering — the size of the screen of your device — will cease to exist, because the screen can become “infinite” in virtual reality.

Generative artificial intelligence will be able, in real time, to adapt your work flow to your specific interaction case, literally creating an interface for you, here and now. We call this principle “neurocasting”. You will see banking applications, news sites, entertainment resources, infographics created specifically for you, taking into account your interests, needs, and specific task.

However, in such a world it will be easy to lose control over what is happening and be left alone with the real technological singularity, when you will not even have the illusion of understanding the principles and rules of the new world. This is one of the serious dangers of the near future. But we think about this too.

## The Solution

**JAM DO** — PaaS (Platform as a Service) — a platform for developing web solutions that allows you to solve simple problems — simply, while supporting all the best practices of modern web development, such as:
- Collaborative teamwork
- Version control
- Using CDN for fast and reliable access to resources
- Unlimited expandability and flexibility
- Transparency and openness
- Safety
- Built-in blockchain model
- AI assistant help

Our goal is to return the Internet to the people, to make sure that the majority only need to create a simple HTML file in order to have their own Internet presence, like in the good old days, but with all the modern capabilities of the web platform.

> The acronym JAM has become a common for the combination — JavaScript + API + Markup

All these are beautiful words, but how to achieve this in reality?

Here are the main ingredients of our recipe:

### JAM-X

**jam-x** ("x" — for “extension”) is an HTML framework — open source library — an extension of standard HTML that allows you to solve many problems without the need for JavaScript and CSS. (https://tonyennis.com/blog/M3WoiPA5P-comparing-the-readability-and-learning-curve-of-html) 

Standard HTML is one of the simplest and most accessible parts of the modern web, which is easy to explain and understand. But HTML cannot do many simple things out of the box, such as connecting external modules, enriching markup with data, using markdown to easily work with blocks of text, using simple conditions and iterators, connecting ready-made templates and themes, optimizing images, and much more. All this becomes possible with jam-x.

**jam-x** is simply a collection of additional HTML tags that can do for you what previously required JavaScript frameworks to do.

**jam-x** allows you to seamlessly integrate widgets of any complexity and is not a limiting factor that interferes with the implementation of complex interactive applications, where it is already difficult to do without JavaScript. You don't have to look for another solution if you encounter a technology limitation: there are no such limitations.

**jam-x** is not an opaque abstraction or a “black box” in which we try to hide unnecessary complexity; on the contrary, due to its conceptual proximity to the web platform itself, you will not have problems moving from simple solutions to advanced and more custom ones.

**jam-x** — can work both exclusively in the browser, in fully dynamic mode, and on the server, allowing you to generate static pages. Also, a hybrid mode is possible, in which the developer himself flexibly controls which part of the application is processed by SSR (Server Side Rendering) and which remains dynamic.

**jam-x** — analyzes the document (tags used) and automatically includes the necessary dependencies, optimizing the total amount of loaded code according to your needs. You don't need to think about which scripts need to be connected, in what form and at what moment.

For the more detailed example, the content part of this page is rendered by jam-x and the source code of it looks like this:
```html
<x-article-nav>
  <x-md src="../md/whitepaper.md"></x-md>
</x-article-nav>
```
In this case, `x-article-nav` tag is used by browser to render the left-side navigation panel. It analyzing the content of the article and shows the headings. And `x-md` tag is used by server to render the external markdown document into HTML format. And this is almost all you need to publish your article.

Reverting to HTML is a pretty popular idea (https://html-first.com/, https://htmx.org/), and we want to take it to the next level.

### JAM Cloud

JAM Cloud — (Smart CDN / Edge network) — allowing you to dynamically create, cache and distribute:
- Any text web assets (DWA), such as HTML, CSS, markdown, SVG, JSON, JavaScript, Code NFT (including A/B tests)
- Data in JSON file format in CDN
- Media resources such as images, video, audio, 3D (service provided by partners)
- Results of serverless functions execution and access to your APIs
- Automatically downloaded dependencies for jam-x

JAM Cloud (IaaS) is a commercial service (with some free features) that will be one of the main monetization channels for the platform.

### DWA

**DWA** (Distributed Web Assets) are JavaScript files that are standard ECMAScript modules with default export as a string type. Such files can be automatically converted into any text assets and published to the CDN as files of the appropriate type. For example, you can generate an HTML document, or any part of it, by describing it as a JS string using any logic and asynchronous requests. This document may contain jam-x tags or be pre-generated markup for later hydration. The point of this technology is that with it you no longer need separate static generators or style pre-processors (such as SCSS, LESS, etc.), you can create solutions of any complexity using the full power of modern JavaScript.
 
In other words, DWA is the ability to get any part of your web application (HTML, CSS, JS, SVG, markdown), or the entire application, in the form you need (minification; assembly) via URL (relative local path, or via CDN), using the universal JavaScript Template Literals standard as the source format.

All you need to do is add a link to your DWA file on GitHub in our CDN URL. It's that simple. The working mechanism is very similar to how popular JS CDNs work, such as https://esm.run. You only need to name your JavaScript file according to the scheme: `index.html.js` — and it will be automatically converted to `index.html`.

Since DWA is a JavaScript file with its own dependencies (module import), other DWAs can also be used as modules to resolve these dependencies. This means that every time someone uses your DWA file as a dependency to generate their asset, a blockchain record is created that contains information about the entire build chain. This allows you to control copyright compliance and automate the distribution of income between all contributors in commercial projects. For example, the author of an article (file in markdown format) can automatically receive income from advertising on the page on which it is posted. 

> DWA = NFT  —  it means that since DWA-file is deployed to JAM Cloud, it can be represented by NFT with metadata accessible in blockchain automatically

DWA-page code example (index.html.js):
```js
export default html`
  <x-page meta="../json/my-site-meta.json" mode="server">
    <x-template src="../templates/my-template.html">
      <x-nav data="../json/navigation-data.json" slot="nav"></x-nav>
      <x-md src="../md/my-article.md" slot="content"></x-md>
      <x-comments slot="comments" mode="client"></x-comments>
    </x-template>
  </x-page>
`;
```

Advantages of DWA:
- Flat learning curve: for simple tasks you only need basic HTML and the “export default” keyword line
- The ability to use the full power of modern JavaScript to create assets in formats where imperative programming capabilities (loops, conditions, templates, asynchronous requests, dynamic imports) are very limited or absent: (HTML, CSS, SVG, markdown)
- The ability to get what you want without installing or configuring development environment tools (build, minification, etc.) — JAM Cloud will do everything.
- Security: a verifiable hash is available for each version of any text asset in the CDN
- Fully compatible with jam-x and other platform parts
- All other advantages of the JAMStack approach (https://jamstack.org/): load resistance, high delivery speed, etc.
- DWA = NFT

DWA engine works very similar to PHP (hypertext preprocessor), but in addition it can be automatically processed by Edge CDN (JAM Cloud), and to be bound to the blockchain with some metadata containing information about contributions and other. Other words, it's like a cloud PHP with a same syntax as at frontend, with ability of isomorphic modules usage.

### JAM Composer

JAM Composer — web version of VS Code IDE + browser extensions (for accessing local project files), pre-configured and optimized to work with our ecosystem. Users will not have to install or configure anything to work with our platform; work can begin immediately after the task is formulated.

### JAM AI

JAM AI — a GPT model additionally trained to work with our system, which can advise the user at any stage of his work in the immediate context of his tasks.

The AI ​​assistant is a factor that further reduces the entry threshold for working with the platform, making it easier to work with documentation and allowing even beginners to navigate the presented tools.

One of the important aspects we explore in our work with AI is the issue of accessibility. Often, the issue of accessibility for your web solutions can be overly complex and a separate subject area in which you may need extensive knowledge. We want to largely shift the responsibility for accessibility to AI tools.

A very important point is that we are working on a special format for communication with AI, which can provide control over the structure and formal part of requests and responses. This format can provide security, stability and readability of interactions with AI and be the basis for neurocasting technology.

This is an example of how JAM AI works with JAM-X library:
```html
<x-ai-img prompt="picture of a cute kitten"></x-ai-img>
<x-ai-text prompt="the story about the little kitten who loves to play"></x-ai-text>
```

### JAM Market

JAM Market — a marketplace of ready-made solutions (widgets, services), free and commercial, that can be connected to your projects with ease.

### JAM DAO

JAM DAO — tools for integrating blockchain economics into work processes and team management. The project contribution of each user of the platform can be presented in the form of a set of NFTs (git commit = NFT) and tied to the corresponding smart contracts to automate payment for work or distribute income of teams, to form developer ratings, to form models for shared ownership of the code base, investments and much more.

By introducing blockchain into processes, we will make it possible to bring micro-products (widgets, services) to the market for small distributed teams who will not need to solve the problems of registering international companies and maintaining complex international accounting.

Thus, our platform can become a springboard for talented developers in all countries, and will become a factor in the fight against poverty in countries with economic problems. It will become easier for developers to unite to jointly solve problems and implement their ideas.

We want to introduce the term DAT — Distributed Autonomous Teams

## Monetization Model

The important thing is that each element of our platform can be used separately or in any combination with others. You can use commercial services or free solutions from our set using your own approaches and infrastructure. Free parts of the platform, in addition to their direct technical role, are also means of promoting the platform as a whole.

The audience of the platform will consist not only of professional web developers, but also any related specialists, such as designers, researchers, analysts, SEO, any engineers from other fields, economists, etc. Thus, we are counting on a wider and mass audience than in the case of specialized services for, for example, React developers (Vercel). Our “HTML as a low code approach” will be attractive to many, including those who have learned from their own experience about the problems of no-code systems with complex UIs and various CMSs.

Main platforms monetization channels:
- Paid access to JAM Cloud PRO functions (working with code from private repositories, serverless functions, etc.)
- Paid access to advanced JAM AI features
- Platform fees for blockchain transactions when using JAM DAO (similar to TRX)
- Platform commissions when using paid solutions from the JAM marketplace (purchases, subscriptions)
- Affiliate programs (payment for Smart CDN functions for media resources: images, videos)
- Services for integration and maintenance of standalone versions of system components (primarily JAM Engine)

## Strategy and Stages

The basis of our development strategy is the Lean approach, when the necessary and sufficient minimum resources are allocated for each hypothesis test. This applies to both the team formation policy, the required infrastructure, and the overall platform architecture. Whenever available, we plan to use existing solutions, and combinations of them where possible, avoiding any inflexible or potentially toxic dependencies.

- First stage (MVP):
  - Release of the Open Source library jam-x (publishing code + website with documentation)
  - Running core JAM Cloud features (AWS + CloudFront + node.js + esbuild)
  - Start of an active marketing company (direct audience attraction and attraction through proxy channels — Open Source, Dev Rel marketing)

- Second phase:
  - Connecting an affiliate Smart CDN (media files) to the infrastructure
  - Release of the JAM Composer service (pre-configured web version of VS Code + chrome extension for accessing local project files)
  - Release of the JAM AI GPT model (using OpenAI API at the first stage)
  - Release of the JAM DAO toolkit (flow automation: git-commit > NFT > DAO contracts)
  - Analysis of intermediate results, adjustment of strategy based on the data obtained
  - Increasing production capacity according to needs assessment (team)

- Third stage:
  - Release of a marketplace of micro-products and services
  - Release of the DAO assistant daobot.dev (based on telegram)
  - Analysis of results, correction of strategies

## Research

The founders of the platform conduct numerous studies and experiments in the field of using AI to generate web assets and optimize the workflow of web developers, the principles of interactive visualization, and simplify development approaches through the use of modern standards.

One of the significant results was the format of structured communication with AI, which made it possible to use multimodal interactions with various neural networks within a single workflow (templates that themselves create their own content, processing of fragments by different AI, etc.). We want to take this format as the basis for neurocasting technology.

In addition, we study the opinions of relevant audiences by analyzing posts and comments on specialized platforms and social networks, such as: Dev.to, Reddit, X (Twitter), Medium, YouTube, etc.

We studied how our ideas could be perceived by specialists in areas related to web development, for example, we offered to create custom web solutions for designers. The experiment was successful for our concept.

We held focus groups and meetups where we discussed the prospects for implementing the technologies that we describe, within which we also received a positive response.

## Technologies

### Open Source

Basic platform library jam-x based on the general purpose frontend library **Symbiote.js** (MIT, https://symbiotejs.org), which allows you to create custom HTML tags directly using templates in HTML format or take control of parts of the HTML document markup to process them with the appropriate logic.

The main conceptual difference between Symbiote.js and a similar library — Lit (https://lit.dev/) — is that to describe reactive dynamic data binding to HTML elements, as well as to establish connections between components, HTML itself is sufficient (both in JS runtime and outside it), where these connections can be described in the form of HTML-attributes. This opens up enormous possibilities for integrated solutions and greatly simplifies the creation of hybrid applications, which can consist of a part pre-built on the server and a completely dynamic part running in the browser. That's why Symbiote.js is used as the basis for the jam-x HTML framework.

Currently, the Symbiote.js library is showing a steady increase in popularity according to npm weekly download statistics.

**Symbiote.js** — was created and maintained by one of the founders of the this project as a response to special needs and tasks specific to the creation of integrated solutions such as widgets, microfrontends, meta-applications and universal libraries of UI components.

**Symbiote.js** is a tool for creating agnostic solutions that can be integrated into any modern web development stack.

In addition to jam-x and Symbiote.js, our ecosystem includes the jam-tools library, which contains development tools for node.js (DWA server, middleware for communicating with AI service APIs, build automation tools) as well as auxiliary isomorphic modules (can work both in the browser and in node.js).

### Proprietary

Our proprietary technology is JAM Cloud — PaaS — Edge CDN, which allows you to process requests for the delivery of the necessary DWA web assets (cloud assembly, transformation). Under the hood — node.js + SWC (https://swc.rs/) + esbuild (https://esbuild.github.io/)  

Our infrastructure solutions are currently based on AWS (Amazon Web Services).

## Competitive Environment

### GitHub 

https://github.com/

We do not view GitHub as a competitor, but rather as an example of a well-developed and extremely useful service for developers, the capabilities of which we actively use ourselves and plan to promote them among users of our platform.

Here is a short list of what we see as unconditional benefits:
- Hosting of static sites (free automatic HTTPS certificates, convenient binding to CI, but not applicable for commercial projects)
- CI automation tools (Actions, rich set of triggers)
- Code hosting (npm dependencies, submodules)
- A rich set of tools for collaborating with code, from direct version control to tracking and planning tasks, knowledge bases, communications, etc.

GitHub is the best ecosystem for a developer today. We plan to use the capabilities of this platform to the maximum by creating direct and figurative integrations (use Actions to work with DWA, create Code NFTs, publish code for DWA and jam-x, and much more).

### Vercel

https://vercel.com/

A platform with a similar promotion model — through an open library (Next.js) and specialized infrastructure.

For us, it is an example of how complications arise due to the isolation of many developers on their meta-platform. Vivid examples include how server components are implemented and the hydration mechanism used, as well as routing.

### Netlify

https://www.netlify.com/

A popular platform for deploying web applications. Includes its own visual editor.

A similar promotion model through the Open Source library (Gatsby).

Comparison of Vercel and Netlify: https://prismic.io/blog/vercel-vs-netlify

### Webflow

https://webflow.com/

A good example of a no-code visual editor with a complex interface.

> Most of the examples presented are aimed at either a highly specialized audience (f. e. React developers) or those who are willing to invest their time in learning complex GUIs and accept their limitations.

## Marketing

### Audience

Our goal is to attract a mass audience of a wide range of specialists, such as marketers, analysts, designers, engineers, crypto enthusiasts — all those who are not directly professional web developers, but are often faced with the task of creating web representation (landing pages, websites with documentation, portfolio and other web projects).

We want to interest all those for whom mastering the basic principles of HTML is not a problem, but there is no time or opportunity to understand full-fledged programming in JavaScript and modern browser APIs.

In addition, we want to create a community of professional developers who would create micro-products and services on our platform and provide services for creating custom complex solutions.

Thus, we want to make our platform a place where the first part of the audience meets the second, which, we hope, will create a synergy effect and will be a boost to its growth.

### Strategy

Based on the fact that we, conditionally, divide the audience into two parts, our marketing strategies aimed at these two audience segments will also be divided.

For the mass part of the audience, we will promote the concept of a simple low-code solution, where much is solved by analogy with inserting a simple image into an HTML document (`<img src=”./my-img.png” />`), but with a large number of options (`<x-md src=”./article.md">`).

We will also target those who have already had experience interacting with other solutions and platforms and have a negative experience (disappointment).

In addition, we will promote the idea that anyone can understand our technologies with an AI assistant.

For the professional segment, we will promote both our technological solutions and the benefits of participating in development using our platform and integrated blockchain technologies.

We want to introduce the concept of joint ownership of the platform, where each participant can also be a co-owner-shareholder (a beneficiary of the overall popularity), in proportion to his contribution.

## Project Needs and Initial Fundraising Goals

At the moment, we need funds for the first stage of releasing platform elements (Public MVP: compilation of code and documentation, public launch of JAM Cloud, start of a marketing campaign and DevRel activities), payment for infrastructure (AWS), development of DAO contracts, additional research and experiments in the field of integration Web3 technologies.

## Forecasts

Much will depend on the success of the Initial Token Offering (ITO) and possible partnerships. In any case, we plan to complete the tasks of the first stage, even if it is not possible to raise funds in a significant amount, but, as expected, with less efficiency. The approximate time frame for the first stage is 4 months from the launch of ITO.

## Team, Experience, Expertise

For any ambitious project, the experience, competencies and personal qualities of the founders and key players of the team play a key role. The core of the team should be balanced and include specialists in different fields who complement and strengthen each other. In this regard, it is important to highlight leaders, since both the team balance and the general level of engineering culture directly depend on them.

So, We are the founders of this project — two brothers, emigrants of Russian origin, currently living in Argentina. We are the crypto enthusiasts who believes that the world should always have an alternative to have a healthy ballance.

### Alex Matiasevich

44 years old, Fullstack web-developer, R&D engineer, UI/UX engineer

Has an experience in managing teams and processes, attracting investments, negotiating at any level, solving both operational and purely technical issues at CEO and CTO roles.

Has the qualities of a leader, own philosophy and vision, as well as deep practical knowledge in the subject area.

The author and main maintainer of the software libraries included in the platform ecosystem. Has experience working with Open Source and is well versed in the specifics of working with the developer community.

### Vladimir Matiasevich

40 years old, Fullstack Web-Developer, R&D Engineer, Hardware Engineer, 3D Designer

Has experience in organizing small-scale production, developing software and hardware systems for various tasks, from equipment for 3D scanning to distributed SMS notification management systems.

Has experience in automating marketing campaigns with emulation of user activity and the use of AI, data analysis and evaluation of the effectiveness of promotion channels.

The author of the software and hardware Open Source project PhotoPizza:
https://www.youtube.com/@PhotoPizza

Was engaged in the supply of independently developed and produced equipment for 3D scanning around the world, from the USA to Japan.

Led a project on high-quality three-dimensional scanning of art objects in one of the leading museums in the world — the Hermitage (St. Petersburg, Russia).

## Social Aspect

The IT industry in general and web development in particular have become one of the few accessible social elevators in the modern world. Talented and motivated people in countries where the Internet is accessible, have the opportunity to escape poverty and provide a more decent standard of living for themselves and their surrounding.

In addition to the financial side, this has another positive effect: society has a growing need for education and there is an incentive to gain knowledge through the process of self-study, both in the field of development and technology directly, and in related areas, such as knowledge of languages, fundamental sciences, etc.

But there is also another side to the coin. Due to the obviousness and seeming simplicity of achieving success, many people have come to web development whose requests poorly correlate with talents and willingness to work on themselves. These people create “noise” and significantly reduce the efficiency of the process of searching for employees and selecting team players. Because of this, all stakeholders suffer: it is more difficult for talent and those with rich experience to break through the crowd, and it is more difficult for teams, businesses and customers to find good developers among those who have learned to simply pass interviews (mimic).

In this situation, we are interested in creating a transparent and independent mechanism for creating and increasing personal ratings for developers and micro-teams, which would reflect the real experience and contribution of each participant in solving certain problems. We also plan to solve this problem, at least partially, by integrating blockchain technologies into our platform.

In addition, a significant “braking” factor is the role of states and their regulatory bodies: the formalization of relationships between market participants is monopolized by states, segmented and unnecessarily complicated. This often leads to high additional overhead costs and even to the fundamental impossibility of conducting business for small market players. All parties also suffer from this. In this matter, we also rely on the capabilities of blockchain technologies, which should act as an effective alternative to the classical form of concluding contracts or formalizing relationships within development teams and organizations, with a high level of automation and independence of processes.

## Legislation

Since the founders of the project live and work in Argentina, it is a positive factor for us that a new libertarian government has come to power in Argentina, which immediately indicated its favorable attitude towards cryptocurrencies and blockchain technologies, as well as towards the principles of the free market. And if the reduction in the level of state control of the classical economy is still a long way off, a moment is already coming in the crypto world that could become a turning point and make Argentina the most attractive country in the world for crypto investors and blockchain enthusiasts.

In fact, income from the sale of digital assets, the sale of NFTs and the exchange of cryptocurrencies for fiat is absolutely legal and therefore potential participants of our platform have the opportunity to conduct activities completely within the law: pay taxes and generate the necessary reporting.

In any case, we will study various work schemes and opportunities to conduct legal activities in different jurisdictions.

## Uniqueness

- A combination of affordable low-code solutions and flexible advanced capabilities, at the intersection of which a new market is born
- Integrated blockchain tools (distributed autonomous teams, contribution = NFT)
- Integrated AI tools (assistants, agent-generator components)
- Participants and active users — are co-owners of the platform itself
- No-build environment — DWA deployment does not require a build step (JAM Cloud is responsible for that)
- Openness: the assembly point of a web solution is always an HTML document, and therefore the platform is open to everything that uses web technologies and web standards

## Investors and Partners

**JAM-DO** is very much a research project in which various concepts will be created and tested. We don’t know for sure which of them will be the most commercially successful and socially useful; we have to test many hypotheses. It is necessary to be aware of the risks and features of the R&D processes associated with them. There is a possibility that a positive result will be achieved only in certain areas and our development strategy will be significantly adjusted.

> The entire code base of the platform (including infrastructure configurations, except for the Symbiote.js code) is the collective property of all investors and co-owners (in the form of ownership of shares of the total Code NFT array).

**Foundation DAO** — is a form of organization for founders, key partners and key investors. This DAO has the right to conduct strategic voting and issues privileged tokens with increased voting power to ensure governance and access to proprietary internal development information.

**First Wave DAO** — basic tokens for investors.

**Community DAO** — tokens of platform users (each payment is a purchase of a token with a time lock) — ensure a stable demand for tokens, which helps attract new investors.