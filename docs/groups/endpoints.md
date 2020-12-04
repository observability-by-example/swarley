# Endpoints


## Sign up




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/auth/signup"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://127.0.0.1:3333/auth/signup" 

```


<div id="execution-results-POST-auth-signup" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-auth-signup"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-auth-signup"></code></pre>
</div>
<div id="execution-error-POST-auth-signup" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-auth-signup"></code></pre>
</div>

<form id="form-POST-auth-signup" data-method="POST" data-path="/auth/signup" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-auth-signup', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-auth-signup" onclick="tryItOut('POST-auth-signup');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-auth-signup" onclick="cancelTryOut('POST-auth-signup');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-auth-signup" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/auth/signup</b></code>
</p>
</form>

## POST /auth/getToken

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/auth/getToken"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://127.0.0.1:3333/auth/getToken" 

```


<div id="execution-results-POST-auth-getToken" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-auth-getToken"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-auth-getToken"></code></pre>
</div>
<div id="execution-error-POST-auth-getToken" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-auth-getToken"></code></pre>
</div>

<form id="form-POST-auth-getToken" data-method="POST" data-path="/auth/getToken" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer {YOUR_AUTH_KEY}"}' onsubmit="event.preventDefault(); executeTryOut('POST-auth-getToken', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-auth-getToken" onclick="tryItOut('POST-auth-getToken');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-auth-getToken" onclick="cancelTryOut('POST-auth-getToken');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-auth-getToken" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/auth/getToken</b></code>
</p>
<p>
    <label id="auth-POST-auth-getToken" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="POST-auth-getToken" data-component="header"></label>
</p>
</form>

## Return all contacts belonging to a user.

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/contacts"
);

let params = {{
    "page": "aut",
    "perPage": "molestiae",
    "sort": "(?sort=+name, ?sort=-created_at)",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};


fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X GET \
    -G "http://127.0.0.1:3333/contacts" 

```


> Example response (401):

```json
{"error":{"message":"E_INVALID_JWT_TOKEN: jwt malformed","name":"InvalidJwtToken","status":401,"frames":[{"file":"node_modules\\@adonisjs\\auth\\src\\Exceptions\\index.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Exceptions\\index.js","method":"Function.invoke","line":222,"column":12,"context":{"start":217,"pre":" *\n * @class InvalidJwtToken\n */\nclass InvalidJwtToken extends GE.LogicalException {\n  static invoke (message) {","line":"    return new this(message || 'The Jwt token is invalid', 401, 'E_INVALID_JWT_TOKEN')","post":"  }\n}\n\n/**\n * This exception is raised when jwt refresh token is"},"isModule":true,"isNative":false,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Schemes\\Jwt.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Schemes\\Jwt.js","method":"JwtScheme.check","line":402,"column":32,"context":{"start":397,"pre":"      this.jwtPayload = await this._verifyToken(token)\n    } catch ({ name, message }) {\n      if (name === 'TokenExpiredError') {\n        throw CE.ExpiredJwtToken.invoke()\n      }","line":"      throw CE.InvalidJwtToken.invoke(message)","post":"    }\n\n    this.user = await this._serializerInstance.findById(this.jwtPayload.uid)\n\n    /**"},"isModule":true,"isNative":false,"isApp":false},{"file":"internal/process/task_queues.js","filePath":"internal/process/task_queues.js","method":"processTicksAndRejections","line":93,"column":5,"context":{},"isModule":false,"isNative":true,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","method":"async Auth._authenticate","line":67,"column":9,"context":{"start":62,"pre":"     * via anyone\n     */\n    for (const scheme of schemes) {\n      try {\n        const authenticator = auth.authenticator(scheme)","line":"        await authenticator.check()","post":"\n        debug('authenticated using %s scheme', scheme)\n\n        /**\n         * Swapping the main authentication instance with the one using which user"},"isModule":true,"isNative":false,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","method":"async Auth.handle","line":109,"column":5,"context":{"start":104,"pre":"   *                             If no scheme is defined, then default scheme from config is used.\n   *\n   * @return {void}\n   */\n  async handle ({ auth, view }, next, schemes) {","line":"    await this._authenticate(auth, schemes)","post":"\n    /**\n     * For compatibility with the old API\n     */\n    auth.current = auth.authenticatorInstance"},"isModule":true,"isNative":false,"isApp":false},{"file":"app\\Middleware\\ConvertEmptyStringsToNull.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\app\\Middleware\\ConvertEmptyStringsToNull.js","method":"async ConvertEmptyStringsToNull.handle","line":13,"column":5,"context":{"start":8,"pre":"          [key]: request.body[key] !== '' ? request.body[key] : null\n        }))\n      )\n    }\n","line":"    await next()","post":"  }\n}\n\nmodule.exports = ConvertEmptyStringsToNull\n"},"isModule":false,"isNative":false,"isApp":true},{"file":"node_modules\\@adonisjs\\bodyparser\\src\\BodyParser\\index.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\bodyparser\\src\\BodyParser\\index.js","method":"async BodyParser.handle","line":242,"column":7,"context":{"start":237,"pre":"    /**\n     * Don't bother when request does not have body\n     */\n    if (!request.hasBody()) {\n      debug('skipping body parsing, since request body is empty')","line":"      await next()","post":"      return\n    }\n\n    /**\n     * Body is multipart/form-data and autoProcess is set to"},"isModule":true,"isNative":false,"isApp":false}]}}
```
<div id="execution-results-GET-contacts" hidden>
    <blockquote>Received response<span id="execution-response-status-GET-contacts"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GET-contacts"></code></pre>
</div>
<div id="execution-error-GET-contacts" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GET-contacts"></code></pre>
</div>

<form id="form-GET-contacts" data-method="GET" data-path="/contacts" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}' onsubmit="event.preventDefault(); executeTryOut('GET-contacts', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GET-contacts" onclick="tryItOut('GET-contacts');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GET-contacts" onclick="cancelTryOut('GET-contacts');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GET-contacts" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/contacts</b></code>
</p>
<p>
    <label id="auth-GET-contacts" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GET-contacts" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>page</code></b>&nbsp;&nbsp;<small>string</small> 
    <i>optional</i>
<input type="text" name="page" data-endpoint="GET-contacts" data-component="query" hidden>
<br>
</p>
<p>
<b><code>perPage</code></b>&nbsp;&nbsp;<small>string</small> 
    <i>optional</i>
<input type="text" name="perPage" data-endpoint="GET-contacts" data-component="query" hidden>
<br>
</p>
<p>
<b><code>sort</code></b>&nbsp;&nbsp;<small>string</small> 
    <i>optional</i>
<input type="text" name="sort" data-endpoint="GET-contacts" data-component="query" hidden>
<br>
Sort results by a field and direction. Use + for ascending or - for decreasing.</p>
</form>

## Add a new contact for this user.

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/contacts"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://127.0.0.1:3333/contacts" 

```


<div id="execution-results-POST-contacts" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-contacts"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-contacts"></code></pre>
</div>
<div id="execution-error-POST-contacts" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-contacts"></code></pre>
</div>

<form id="form-POST-contacts" data-method="POST" data-path="/contacts" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer {YOUR_AUTH_KEY}"}' onsubmit="event.preventDefault(); executeTryOut('POST-contacts', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-contacts" onclick="tryItOut('POST-contacts');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-contacts" onclick="cancelTryOut('POST-contacts');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-contacts" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/contacts</b></code>
</p>
<p>
    <label id="auth-POST-contacts" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="POST-contacts" data-component="header"></label>
</p>
</form>

## View a single contact.

<small class="badge badge-darkred">requires authentication</small>


GET contacts/:id

> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/contacts/5407"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};


fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X GET \
    -G "http://127.0.0.1:3333/contacts/5407" 

```


> Example response (401):

```json
{"error":{"message":"E_INVALID_JWT_TOKEN: jwt malformed","name":"InvalidJwtToken","status":401,"frames":[{"file":"node_modules\\@adonisjs\\auth\\src\\Exceptions\\index.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Exceptions\\index.js","method":"Function.invoke","line":222,"column":12,"context":{"start":217,"pre":" *\n * @class InvalidJwtToken\n */\nclass InvalidJwtToken extends GE.LogicalException {\n  static invoke (message) {","line":"    return new this(message || 'The Jwt token is invalid', 401, 'E_INVALID_JWT_TOKEN')","post":"  }\n}\n\n/**\n * This exception is raised when jwt refresh token is"},"isModule":true,"isNative":false,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Schemes\\Jwt.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Schemes\\Jwt.js","method":"JwtScheme.check","line":402,"column":32,"context":{"start":397,"pre":"      this.jwtPayload = await this._verifyToken(token)\n    } catch ({ name, message }) {\n      if (name === 'TokenExpiredError') {\n        throw CE.ExpiredJwtToken.invoke()\n      }","line":"      throw CE.InvalidJwtToken.invoke(message)","post":"    }\n\n    this.user = await this._serializerInstance.findById(this.jwtPayload.uid)\n\n    /**"},"isModule":true,"isNative":false,"isApp":false},{"file":"internal/process/task_queues.js","filePath":"internal/process/task_queues.js","method":"processTicksAndRejections","line":93,"column":5,"context":{},"isModule":false,"isNative":true,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","method":"async Auth._authenticate","line":67,"column":9,"context":{"start":62,"pre":"     * via anyone\n     */\n    for (const scheme of schemes) {\n      try {\n        const authenticator = auth.authenticator(scheme)","line":"        await authenticator.check()","post":"\n        debug('authenticated using %s scheme', scheme)\n\n        /**\n         * Swapping the main authentication instance with the one using which user"},"isModule":true,"isNative":false,"isApp":false},{"file":"node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\auth\\src\\Middleware\\Auth.js","method":"async Auth.handle","line":109,"column":5,"context":{"start":104,"pre":"   *                             If no scheme is defined, then default scheme from config is used.\n   *\n   * @return {void}\n   */\n  async handle ({ auth, view }, next, schemes) {","line":"    await this._authenticate(auth, schemes)","post":"\n    /**\n     * For compatibility with the old API\n     */\n    auth.current = auth.authenticatorInstance"},"isModule":true,"isNative":false,"isApp":false},{"file":"app\\Middleware\\ConvertEmptyStringsToNull.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\app\\Middleware\\ConvertEmptyStringsToNull.js","method":"async ConvertEmptyStringsToNull.handle","line":13,"column":5,"context":{"start":8,"pre":"          [key]: request.body[key] !== '' ? request.body[key] : null\n        }))\n      )\n    }\n","line":"    await next()","post":"  }\n}\n\nmodule.exports = ConvertEmptyStringsToNull\n"},"isModule":false,"isNative":false,"isApp":true},{"file":"node_modules\\@adonisjs\\bodyparser\\src\\BodyParser\\index.js","filePath":"C:\\Users\\shalvah\\Projects\\Temp\\swarley\\node_modules\\@adonisjs\\bodyparser\\src\\BodyParser\\index.js","method":"async BodyParser.handle","line":242,"column":7,"context":{"start":237,"pre":"    /**\n     * Don't bother when request does not have body\n     */\n    if (!request.hasBody()) {\n      debug('skipping body parsing, since request body is empty')","line":"      await next()","post":"      return\n    }\n\n    /**\n     * Body is multipart/form-data and autoProcess is set to"},"isModule":true,"isNative":false,"isApp":false}]}}
```
<div id="execution-results-GET-contacts--id" hidden>
    <blockquote>Received response<span id="execution-response-status-GET-contacts--id"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GET-contacts--id"></code></pre>
</div>
<div id="execution-error-GET-contacts--id" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GET-contacts--id"></code></pre>
</div>

<form id="form-GET-contacts--id" data-method="GET" data-path="/contacts/:id" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}' onsubmit="event.preventDefault(); executeTryOut('GET-contacts--id', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GET-contacts--id" onclick="tryItOut('GET-contacts--id');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GET-contacts--id" onclick="cancelTryOut('GET-contacts--id');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GET-contacts--id" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/contacts/:id</b></code>
</p>
<p>
    <label id="auth-GET-contacts--id" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GET-contacts--id" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>id</code></b>&nbsp;&nbsp;<small>number</small> 
<input type="number" name="id" data-endpoint="GET-contacts--id" data-component="url" required hidden>
<br>
</p>
</form>

## Update a contact&#x27;s details.

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/contacts/50708"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
};


fetch(url, {
    method: "PUT",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X PUT \
    "http://127.0.0.1:3333/contacts/50708" 

```


<div id="execution-results-PUT-contacts--id" hidden>
    <blockquote>Received response<span id="execution-response-status-PUT-contacts--id"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-PUT-contacts--id"></code></pre>
</div>
<div id="execution-error-PUT-contacts--id" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUT-contacts--id"></code></pre>
</div>

<form id="form-PUT-contacts--id" data-method="PUT" data-path="/contacts/:id" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer {YOUR_AUTH_KEY}"}' onsubmit="event.preventDefault(); executeTryOut('PUT-contacts--id', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-PUT-contacts--id" onclick="tryItOut('PUT-contacts--id');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-PUT-contacts--id" onclick="cancelTryOut('PUT-contacts--id');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-PUT-contacts--id" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-darkblue">PUT</small>
 <b><code>/contacts/:id</b></code>
</p>
<p>
<small class="badge badge-purple">PATCH</small>
 <b><code>/contacts/:id</b></code>
</p>
<p>
    <label id="auth-PUT-contacts--id" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="PUT-contacts--id" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>id</code></b>&nbsp;&nbsp;<small>number</small> 
<input type="number" name="id" data-endpoint="PUT-contacts--id" data-component="url" required hidden>
<br>
</p>
</form>

## Delete a contact.

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/contacts/30711"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
};


fetch(url, {
    method: "DELETE",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X DELETE \
    "http://127.0.0.1:3333/contacts/30711" 

```


<div id="execution-results-DELETE-contacts--id" hidden>
    <blockquote>Received response<span id="execution-response-status-DELETE-contacts--id"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-DELETE-contacts--id"></code></pre>
</div>
<div id="execution-error-DELETE-contacts--id" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETE-contacts--id"></code></pre>
</div>

<form id="form-DELETE-contacts--id" data-method="DELETE" data-path="/contacts/:id" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer {YOUR_AUTH_KEY}"}' onsubmit="event.preventDefault(); executeTryOut('DELETE-contacts--id', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-DELETE-contacts--id" onclick="tryItOut('DELETE-contacts--id');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-DELETE-contacts--id" onclick="cancelTryOut('DELETE-contacts--id');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-DELETE-contacts--id" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-red">DELETE</small>
 <b><code>/contacts/:id</b></code>
</p>
<p>
    <label id="auth-DELETE-contacts--id" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="DELETE-contacts--id" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>id</code></b>&nbsp;&nbsp;<small>number</small> 
<input type="number" name="id" data-endpoint="DELETE-contacts--id" data-component="url" required hidden>
<br>
</p>
</form>

## GET /

<small class="badge badge-darkred">requires authentication</small>




> Example request:

```javascript
const url = new URL(
    "http://127.0.0.1:3333/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
};


fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X GET \
    -G "http://127.0.0.1:3333/" 

```


> Example response (200):

```json
{"greeting":"Hello world in JSON"}
```
<div id="execution-results-GET-" hidden>
    <blockquote>Received response<span id="execution-response-status-GET-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GET-"></code></pre>
</div>
<div id="execution-error-GET-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GET-"></code></pre>
</div>

<form id="form-GET-" data-method="GET" data-path="/" data-authed="1" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}' onsubmit="event.preventDefault(); executeTryOut('GET-', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GET-" onclick="tryItOut('GET-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GET-" onclick="cancelTryOut('GET-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GET-" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/</b></code>
</p>
<p>
    <label id="auth-GET-" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GET-" data-component="header"></label>
</p>
</form>


