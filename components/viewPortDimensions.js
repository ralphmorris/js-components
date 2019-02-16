/*
 * 
 * Get Viewport Dimensions
 * 
 * returns object with viewport dimensions to match css in width and height properties
 * 
 * source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
 * 
*/
module.exports = function() {

	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	
	return { width:x,height:y };
}