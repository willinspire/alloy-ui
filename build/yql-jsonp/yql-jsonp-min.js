YUI.add("yql-jsonp",function(e,t){e.YQLRequest.prototype._send=function(t,n){n.allowCache!==!1&&(n.allowCache=!0),this._jsonp?(this._jsonp.url=t,n.on&&n.on.success&&(this._jsonp._config.on.success=n.on.success),this._jsonp.send()):this._jsonp=e.jsonp(t,n)}},"patched-v3.18.1",{requires:["yql","jsonp","jsonp-url"]});
