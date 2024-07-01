/**
 * Lazy load assets, call callback fn after all assets have loaded.
 *
 * Requires: jQuery or Zepto
 *
 * Usage:
 * Lazy.load({"js": ["js/file.js"],
 *            "tpl": [{"src": "tpl/event.tpl", "id": "event-view"}],
 *            "css": ["css/file.css"]
 *           });
 *
 * Lazy.load({"js": ["js/file.js"]});
 */
(function () {

    window.Lazy = {
        _loaded: {"js": [], "tpl": [], "css": []},
        load: function (assets, fn) {
            var asset,
                assetsLoaded = 0,
                assetCount = 0,
                onLoad = function (assetType, asset) {
                    assetsLoaded++;
                    if (asset) {
                        Lazy._loaded[assetType].push(asset);
                    }

                    if (assetsLoaded == assetCount) {
                        fn && fn();
                    }
                },
                onLoadDelegate = function (assetType, asset) {
                    return function () {
                        onLoad(assetType, asset);
                    };
                };

            for (var type in assets)
                for (var i = 0, al = assets[type].length; i < al; i++)
                    assetCount++;

            var iAt = 0;
            for (var type in assets) {
                iAt++;

                switch (type) {
                    case "js":
                        for (var i = 0, al = assets[type].length; i < al; i++) {
                            asset = assets[type][i];

                            if (Lazy._loaded[type].indexOf(asset) !== -1) {
                                if (iAt === assets[type].length) {
                                    return fn && fn();
                                } else {
                                    break;
                                }
                            }

                            var script = document.createElement("script");
                            script.async = true;
                            script.src = asset;
                            script.onload = onLoadDelegate(type, asset);
                            document.body.appendChild(script);
                        }
                        break;

                    case "tpl":
                        var asset
                        for (var i = 0, al = assets[type].length; i < al; i++) {
                            asset = assets[type][i];
                            if (Lazy._loaded[type].indexOf(asset) !== -1) return onLoad();

                            var tplEl = $("<script type=\"text/html\" id=\"" + asset.id + "\"></script>");
                            $("body").append(tplEl);
                            tplEl.load(asset.src, onLoadDelegate(type, asset));
                        }
                        break;

                    case "css":
                        for (var i = 0, al = assets[type].length; i < al; i++) {
                            asset = assets[type][i];
                            if (Lazy._loaded[type].indexOf(asset) !== -1) return onLoad();

                            var styleEl = $("<style type=\"text/css\"></style>");
                            $("head").append(styleEl);
                            styleEl.load(asset, onLoadDelegate(type, asset));
                        }
                        break;
                }
            }
        }
    };

})();
