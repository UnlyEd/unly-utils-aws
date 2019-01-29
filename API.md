## Functions

<dl>
<dt><a href="#buildJSONResponse">buildJSONResponse(statusCode, body, headers)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#buildCSVResponse">buildCSVResponse(data, statusCode, filename, charset)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#success">success(data, headers)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#failure">failure(data, headers)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#redirect">redirect(data, headers)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#unauthorized">unauthorized(data, headers)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#getDevice">getDevice(headers)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extract the device used for a request, based on its headers.
XXX Strongly linked to CloudFront headers rewriting. Won&#39;t work if using another web server.</p>
</dd>
<dt><a href="#getMainIpAddress">getMainIpAddress(xForwardedFor, sep)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extract main IP address from string, provided using &quot;X-Forwarded-For&quot; header.</p>
</dd>
<dt><a href="#getForwardedIpAddresses">getForwardedIpAddresses(xForwardedFor, sep)</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>null</code></dt>
<dd><p>Extract forwarded IP addresses from string, provided using &quot;X-Forwarded-For&quot; header.</p>
</dd>
<dt><a href="#getHeadersUsefulData">getHeadersUsefulData(headers)</a> ⇒ <code>Object</code></dt>
<dd><p>Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.</p>
</dd>
<dt><a href="#isHostedOnAWS">isHostedOnAWS()</a> ⇒ <code>boolean</code></dt>
<dd><p>See <a href="https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html">https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html</a></p>
</dd>
</dl>

<a name="buildJSONResponse"></a>

## buildJSONResponse(statusCode, body, headers) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| statusCode | 
| body | 
| headers | 

<a name="buildCSVResponse"></a>

## buildCSVResponse(data, statusCode, filename, charset) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| data | 
| statusCode | 
| filename | 
| charset | 

<a name="success"></a>

## success(data, headers) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| data | 
| headers | 

<a name="failure"></a>

## failure(data, headers) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| data | 
| headers | 

<a name="redirect"></a>

## redirect(data, headers) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| data | 
| headers | 

<a name="unauthorized"></a>

## unauthorized(data, headers) ⇒ <code>Object</code>
**Kind**: global function  

| Param |
| --- |
| data | 
| headers | 

<a name="getDevice"></a>

## getDevice(headers) ⇒ <code>string</code> \| <code>null</code>
Extract the device used for a request, based on its headers.
XXX Strongly linked to CloudFront headers rewriting. Won't work if using another web server.

**Kind**: global function  

| Param |
| --- |
| headers | 

<a name="getMainIpAddress"></a>

## getMainIpAddress(xForwardedFor, sep) ⇒ <code>string</code> \| <code>null</code>
Extract main IP address from string, provided using "X-Forwarded-For" header.

**Kind**: global function  

| Param | Default |
| --- | --- |
| xForwardedFor |  | 
| sep | <code>, </code> | 

<a name="getForwardedIpAddresses"></a>

## getForwardedIpAddresses(xForwardedFor, sep) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header.

**Kind**: global function  

| Param | Default |
| --- | --- |
| xForwardedFor |  | 
| sep | <code>, </code> | 

<a name="getHeadersUsefulData"></a>

## getHeadersUsefulData(headers) ⇒ <code>Object</code>
Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.

**Kind**: global function  

| Param |
| --- |
| headers | 

<a name="isHostedOnAWS"></a>

## isHostedOnAWS() ⇒ <code>boolean</code>
See https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

**Kind**: global function  
