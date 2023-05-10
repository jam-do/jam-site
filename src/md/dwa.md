# {DWA}

### Distributed Web Assets

The idea is very simple. There is a bunch of types of the web application assets are the text files, such as:
- HTML
- CSS
- SVG
- JSON
- Markdown
- etc.

All that files are represented as a text and could be generated as a JavaScript strings. Using standard JavaScript Template Literals we getting ability to compose the text assets with the huge level of flexibility and simplicity. No additional tools and processors are needed anymore.

The second point, is that modern standard JavaScript modules are asynchronous, so we can do some work before we export default entity from the module. So, all we need further is a HTTPS-endpoint, that can transform that export into a text file with a certain MIME-type, and cache the result. 

That is a purpose of the DWA technology. 
