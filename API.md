## Constants

<dl>
<dt><a href="#buildJSONResponse">buildJSONResponse</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#buildCSVResponse">buildCSVResponse</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#success">success</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#failure">failure</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#redirect">redirect</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#unauthorized">unauthorized</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#getDevice">getDevice</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extract the device used for a request, based on its headers.
XXX Strongly linked to CloudFront headers rewriting. Won&#39;t work if using another web server.</p>
</dd>
<dt><a href="#getMainIpAddress">getMainIpAddress</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extract main IP address from string, provided using &quot;X-Forwarded-For&quot; header.</p>
</dd>
<dt><a href="#getForwardedIpAddresses">getForwardedIpAddresses</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>null</code></dt>
<dd><p>Extract forwarded IP addresses from string, provided using &quot;X-Forwarded-For&quot; header.</p>
</dd>
<dt><a href="#getHeadersUsefulData">getHeadersUsefulData</a> ⇒ <code>Object</code></dt>
<dd><p>Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isHostedOnAWS">isHostedOnAWS()</a> ⇒ <code>boolean</code></dt>
<dd><p>See <a href="https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html">https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html</a></p>
</dd>
</dl>

<a name="buildJSONResponse"></a>

## buildJSONResponse ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| statusCode | 
| body | 
| headers | 

<a name="buildCSVResponse"></a>

## buildCSVResponse ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| data | 
| statusCode | 
| filename | 
| charset | 

<a name="success"></a>

## success ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| data | 
| headers | 

<a name="failure"></a>

## failure ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| data | 
| headers | 

<a name="redirect"></a>

## redirect ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| data | 
| headers | 

<a name="unauthorized"></a>

## unauthorized ⇒ <code>Object</code>
**Kind**: global constant  

| Param |
| --- |
| data | 
| headers | 

<a name="getDevice"></a>

## getDevice ⇒ <code>string</code> \| <code>null</code>
Extract the device used for a request, based on its headers.
XXX Strongly linked to CloudFront headers rewriting. Won't work if using another web server.

**Kind**: global constant  

| Param |
| --- |
| headers | 

<a name="getMainIpAddress"></a>

## getMainIpAddress ⇒ <code>string</code> \| <code>null</code>
Extract main IP address from string, provided using "X-Forwarded-For" header.

**Kind**: global constant  

| Param |
| --- |
| xForwardedFor | 
| sep | 

<a name="getForwardedIpAddresses"></a>

## getForwardedIpAddresses ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header.

**Kind**: global constant  

| Param |
| --- |
| xForwardedFor | 
| sep | 

<a name="getHeadersUsefulData"></a>

## getHeadersUsefulData ⇒ <code>Object</code>
Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.

**Kind**: global constant  

| Param |
| --- |
| headers | 

<a name="isHostedOnAWS"></a>

## isHostedOnAWS() ⇒ <code>boolean</code>
See https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

**Kind**: global function  
