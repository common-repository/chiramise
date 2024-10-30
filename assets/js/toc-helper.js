jQuery(document).ready(function(t){"use strict";t(".chiramise-toc").each(function(a,r){var i=t(r),c=i.attr("data-target");i.find(".chiramise-toc-item").each(function(a,r){var i=t(r),e=i.find("a");if(!e.length)return!0;var h="chiramise-toc-anchor-"+a;e.attr("href","#"+h),t(t(c).find("h1,h2,h3,h4,h5,h6")[a]).attr("id",h)})})});
//# sourceMappingURL=map/toc-helper.js.map
