/**
 * Created by zy on 16/5/27.
 */

/**
 * open client
 */
_AP.open = function (params) {
    if (!domLoaded && (ua.indexOf('360 aphone')>-1 || canIntent)) {
        var arg = arguments;
        delayToRun = function () {
            _AP.open.apply(null, arg);
            delayToRun = null;
        };
        return;
    }

    if (locked) {
        return;
    }
    locked = true;

    var o;
    if (typeof params === 'object') {
        o = {
            'ios': encodeURIComponent(JSON.stringify(params)),
            'android': encodeURIComponent(params.dataString)
        };
    } else {
        console.error('params error, pls use JSON format!')
    }

    // params fault tolerance
    if (typeof o.ios !== 'string') {
        o.ios = '';
    } else if(typeof o.android !== 'string') {
        o.android = '';
    }

    // nonsupport Android intent
    if (!canIntent) {
        if(isAndroid) {
            var alipaysUrl = 'alipays://platformapi/startApp?appId=20000125&orderSuffix=' + o.android;
        }
        //fix for iOS QQ browser
        else if (ua.indexOf('mqqbrowser') > -1) {
            var alipaysUrl = 'alipay://alipayclient/?' + o.android;
        }
        else {
            var alipaysUrl = 'alipay://alipayclient/?' + o.ios;
        }

        if ( ua.indexOf('qq/') > -1 || ( ua.indexOf('safari') > -1 && ua.indexOf('os 9_') > -1 ) ) {
            var openSchemeLink = document.getElementById('openSchemeLink');
            if (!openSchemeLink) {
                openSchemeLink = document.createElement('a');
                openSchemeLink.id = 'openSchemeLink';
                openSchemeLink.style.display = 'none';
                document.body.appendChild(openSchemeLink);
            }
            openSchemeLink.href = alipaysUrl;
            // trigger click
            openSchemeLink.dispatchEvent(customClickEvent());
        } else {
            var ifr = document.createElement('iframe');
            ifr.src = alipaysUrl;
            ifr.style.display = 'none';
            document.body.appendChild(ifr);
        }
    }
    //support Android intent
    else {
        var packageKey = 'AlipayGphone';
        var intentUrl = 'alipays://platformapi/startApp?appId=20000125&orderSuffix='+o.android+'#Intent;scheme=alipays;package=com.eg.android.'+ packageKey +';end';


        var openIntentLink = document.getElementById('openIntentLink');
        if (!openIntentLink) {
            openIntentLink = document.createElement('a');
            openIntentLink.id = 'openIntentLink';
            openIntentLink.style.display = 'none';
            document.body.appendChild(openIntentLink);
        }
        openIntentLink.href = intentUrl;
        // trigger click
        openIntentLink.dispatchEvent(customClickEvent());
    }

    setTimeout(function () {
        locked = false;
    }, 2500)
}

if (!domLoaded) {
    document.addEventListener('DOMContentLoaded', function () {
        domLoaded = true;
        if (typeof delayToRun === 'function') {
            delayToRun();
        }
    }, false);
}

_AP.pay = function(param) {
    _AP.open(param);
}
//window._AP = _AP;
//})();