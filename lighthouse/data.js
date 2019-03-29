const data_performance_metrics = {
  caption: 'Metrics',
  audits: [
    {color: 'red', title: 'First Contentful Paint', time: '9.6', description: 'First Contentful Paint marks the time at which the first text or image is painted. Learn more.'},
    {color: 'red', title: 'Speed Index', time: '23.8', description: 'Speed Index shows how quickly the contents of a page are visibly populated. Learn more.'},
    {color: 'red', title: 'Time to Interactive', time: '24.0', description: 'Interactive marks the time at which the page is fully interactive. Learn more.'},
    {color: 'orange', title: 'First Meaningful Paint', time: '10.7', description:'First Meaningful Paint measures when the primary content of a page is visible. Learn more.'},
    {color: 'orange', title: 'First CPU Idle', time: '2.5', description: 'First CPU Idle marks the first time at which the page\'s main thread is quiet enough to handle input. Learn more.'},
    {color: 'green', title: 'Estimated Input Latency', time: '0.3', description:'The score above is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. Learn more.'},
  ]
};

const data_performance_opportunities = {
  caption: 'Opportunities', caption_desc: 'These optimizations can speed up your page load.', header: ['Opportunity', 'Estimated Savings'],
  audits: [
    {
      color: 'red', title: 'Preload key requests', time: '14.85',
      description: 'Consider using <span class="code">&lt;link rel=preload></span> to prioritize fetching resources that are currently requested later in page load. Learn more.',
      table: {
        header: ['URL', 'Potential Savings'],
        items: [
          ['…3.7.2/cnnsans-italic.woff2', '6,940 ms'],
          ['…3.7.2/cnnsans-lightit.woff2', '6,780 ms'],
          ['…2.0.15/cnn-icons.woff', '320 ms'],
          ['…2.146.6/wp-video.css', '250 ms'],
          ['…latest-2.x/css', '210 ms']
        ],
      },
    },
    {
      color: 'red', title: 'Serve images in next-gen formats', time: '0.94',
      warning: 'Warnings: Unable to decode …201…/APV_HNNA_….jpg',
      description: 'Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. Learn more.',
      table: {
        header: ['Image','','Size / Potential Savings'],
        items: [
          ['https://cache-ssl.celtra.com/api/blobs/bef79596914041b1caba91fd1da0a8135f9ea4dd8a1488ce3edf9f034f732489/videoPoster.png', 'cache-ssl.celtra.com', '701 KB / 567 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190327231811-booker-13-large-tease.jpg', 'cdn.cnn.com', '32 KB / 23 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190322032309-0322-nz-reactions-11-large-tease.jpg', 'cdn.cnn.com', '33 KB / 17 KB'],
        ],
      },
    },
    {
      color: 'orange', title: 'Preconnected to required origins', time: '0.65',
      description: 'Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. Learn more.',
      table: {
        header: ['URL', 'Potential Savings'],
        items: [
          ['https://x.bidswitch.net', '460 ms'],
          ['https://rdi.us.criteo.com', '440 ms'],
          ['https://gum.criteo.com', '440 ms'],
          ['https://bidder.criteo.com', '440 ms'],
          ['https://idsync.rlcdn.com', '430 ms']
        ],
      },
    },
    {
      color: 'orange', title: 'Defer offscreen images', time: '4.31',
      description: 'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. Learn more.',
      table: {
        header: ['Image','','Size / Potential Savings'],
        items: [
          ['https://cdn.cnn.com/cnnnext/dam/assets/190329102439-hers-band-large-tease.jpg', 'cdn.cnn.com', '44 KB / 44 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190214103213-parkland-aniversario-large-tease.jpg', 'cdn.cnn.com', '43 KB / 43 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190328095939-raniya-wright-large-tease.jpg', 'cdn.cnn.com', '40 KB / 40 KB'],
        ],
      },
    },
    {
      color: 'orange', title: 'Efficiently encode images', time: '0.18',
      description: 'Optimized images load faster and consume less cellular data. Learn more.',
      table: {
        header: ['Image','','Size / Potential Savings'],
        items: [
          ['https://cdn.cnn.com/cnnnext/dam/assets/190327231811-booker-13-large-tease.jpg', 'cdn.cnn.com', '32 KB / 18 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190329102439-hers-band-small-tease.jpg', 'cdn.cnn.com', '23 KB / 12 KB'],
          ['https://cdn.cnn.com/cnnnext/dam/assets/190305095620-02-paris-fashion-week-lead-image-medium-tease.jpg', 'cdn.cnn.com', '30 KB / 12 KB'],
        ],
      },
    },
    {
      color: 'green', title: 'Preconnect to required origins', time: '0.45',
      description: 'Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. Learn more.',
      table: {
        header: ['URL', 'Potential Savings'],
        items: [
          ['https://ads.yieldmo.com', '450 ms'],
          ['https://gscounters.us1.gigya.com', '440 ms'],
          ['https://bidder.criteo.com', '440 ms'],
          ['https://ib.adnxs.com', '430 ms'],
          ['https://api.rlcdn.com', '400 ms'],
          ['https://ml314.com', '390 ms'],
        ],
      },
    },
    {
      color: 'green', title: 'Remove unused CSS', time: '0.18',
      description: 'Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. Learn more.',
      table: {
        header: ['URL', 'Size / Potential Savings'],
        items: [
          ['@charset "UTF-8";.zn.t-hidden{display:none!important} ...', '161 KB / 158 KB'],
          ['…latest-2.x/css<span class="secondary">registry.api.cnn.io</span>', '54 KB / 51 KB'],
          ['@charset "UTF-8";.zn.t-hidden{display:none!important} ...', '21 KB / 20 KB'],
          ['…css/optanon.css<span class="secondary">cdn.cookielaw.org</span>', '6KB / KB'],
        ],
      },
    },
  ]
};

const data_performance_diagnostics = {
  caption: 'Diagnostics', caption_desc: 'More information about the performance of your application.',
  audits: [
    {
      color: 'red', title: 'Reduce JavaScript execution time',
      description: 'Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. Learn more.',
      table: {
        header: ['URL', 'CPU Time', 'Evaluation', 'Parse'],
        items: [
          ['…bundles/header.72495ef….bundle.js', '8,127 ms', '1,786 ms', '2 ms'],
          ['…js/cnn-footer-lib.min.js', '3,266 ms', '1,686 ms', '2 ms'],
          ['/ym.m2.js', '1,705 ms', '319 ms', '3 ms'],
        ],
      },
    },
    {
      color: 'red', title: 'Minimize main-thread work',
      description: 'Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this.',
      table: {
        header: ['Category', 'Time Spent'],
        items: [
          ['Script Evaluation', '11,577 ms'],
          ['Style & Layout', '5,170 ms'],
          ['Other', '2,775 ms'],
          ['Rendering', '1,166 ms'],
          ['Parse HTML & CSS', '784 ms'],
          ['Script Parsing & Compilation', '476 ms'],
          ['Garbage Collection', '382 ms'],
        ],
      },
    },
    {
      color: 'red', title: 'Ensure text remains visible during webfont load',
      description: 'Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. Learn more.',
      table: {
        header: ['URL', 'Potential Savings'],
        items: [
          ['…3.7.2/cnnsans-regular.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '3,000 ms'],
          ['…2.4.7/cnn-icons.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '2,220 ms'],
          ['…3.7.2/cnnsans-medium.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '2,900 ms'],
          ['…3.7.2/cnnsans-bold.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '2,910 ms'],
          ['…3.7.2/cnnsans-light.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '2,370 ms'],
          ['…3.7.2/cnnsans-italic.woff2<span class="secondary">www.i.cdn.cnn.com</span>', '2,670 ms'],
        ],
      },
    },
    {
      color: 'red', title: 'Serve Static assets with an efficient cache policy <span class="red">&mdash;136 resrouces found</span>',
      description: 'A long cache lifetime can speed up repeat visits to your page. Learn more.',
      table: {
        header: ['URL', 'Cache TTL', 'Size'],
        items: [
          ['…widgetIcons/achoice.svg<span class="secondary">widgets.outbrain.com</span>', 'None', '2 KB'],
          ['/skeleton.js<span class="secondary">static.adsafeprotected.com</span>', '2 s', '0 KB'],
          ['…countries/EU?callback=?<span class="secondary">geolocation.onetrust.com</span>', '5 m', '0 KB'],
          ['…countries/EU?callback=jQuery3310595…_155…&_=155…<span class="secondary">geolocation.onetrust.com</span>', '10 m', '10 KB'],
          ['/bcn?fe=…<span class="secondary">www.summerhamster.com</span>', '25 m', '12 KB'],
          ['/i/adsct?p_id=…<span class="secondary">analytics.twitter.com</span>', '30 m', '100 KB'],
        ],
      },
    },
    {
      color: 'red', title: 'Avoid an excessive DOM size <span class="red">&mdash;3,531 nodes</span>',
      description: 'Browser engineers recommend pages contain fewer than ~1,500 DOM nodes. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer style calculations, and produce costly layout reflows. Learn more.',
      table: {
        header: ['Element', 'Statistic', 'Value'],
        items: [
          ['', 'Total DOM Nodes', '3,511'],
          ['&lt;div aria-hidden="true" id="gigyaShareBar_0-reaction0-left_img">', 'Maximum DOM Depth', '21'],
          ['&lt;head>', 'Maximum Child Elements', '155'],
        ],
      },
    },
    {
      color: 'red', title: 'Avoid enormous network payloads <span class="red">&mdash;Total size was 5,029 KB</span>',
      description: 'Large network payloads cost users real money and are highly correlated with long load times. Learn more.',
      table: {
        header: ['URL', 'Size'],
        items: [
          ['…theoplayer-474660ac/theoplayer<span class="secondary">registry.api.cnn.io</span>', '411 KB'],
          ['…js/cnn-footer-lib.min.js<span class="secondary">www.cnn.com</span>', '227 KB'],
          ['…js/cnn-header-second.min.js<span class="secondary">www.cnn.com</span>', '202 KB'],
          ['…215…/BRA0632_O….gif<span class="secondary">static.yieldmo.com</span>', '98 KB'],
        ],
      },
    },
    {
      color: 'gray', title: 'User Timing marks and measures<span class="gray">&mdash;144 user timings</span>',
      description: 'Consider instrumenting your app with the User Timing API to measure your app\'s real-world performance during key user experiences. Learn more.',
      table: {
        header: ['Name', 'Type', 'Start Time', 'Duration'],
        items: [
          ['pageLoad', 'Measure', '0 ms', '28,287 ms'],
          ['headTime', 'Measure', '5,242 ms', '694.74 ms'],
          ['timeToInteractive', 'Measure', '5,242 ms', '1,224 ms'],
          ['timeToDomReady', 'Measure', '5,242 ms', '1,330.59 ms'],
          ['timeToZonesComplete', 'Measure', '5,242 ms', '4,032.89 ms'],
          ['timeToZonesAndDomReady', 'Measure', '5,242 ms', '4,202.11 ms'],
        ],
      },
    },
    {
      color: 'gray', title: 'Minimize Critical Requests Depth<span class="gray">&mdash;1 chain found</span>',
      description: 'The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. Learn more.',
    },
  ],
};

const data_accessibility_namesandlabels = {
  caption: 'Names and labels', caption_desc: 'These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.',
  audits: [
    {
      color: 'red', title: 'Buttons do not have an accessible name',
      description: 'When a button doesn\'t have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;button type="submit" class="search-input__button"></button>'],
        ],
      },
    },
    {
      color: 'red', title: 'Image elements do not have [alt] attributes',
      description: 'Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_politics.png" class="nav-menu__img-politics" style="width: 78.79px;" data-demand-load="loaded">'],
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_health.png" class="nav-menu__img-health" style="width: 70px;" data-demand-load="loaded">'],
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_entertainment.png" class="nav-menu__img-entertainment" style="width: 132.5px;" data-demand-load="loaded">'],
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_style_new.png" class="nav-menu__img-style" style="width: 63px;" data-demand-load="loaded">'],
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_travel.png" class="nav-menu__img-travel" style="width: 57px;" data-demand-load="loaded">'],
          ['&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_bleacher.png" class="nav-menu__img-bleacher" style="width: 81.85px;" data-demand-load="loaded">'],
        ],
      },
    },
    {
      color: 'red', title: '&lt;frame> or &lt;iframe> elements do not have a title',
      description: 'Screen reader users rely on frame titles to describe the contents of frames. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;iframe frameborder="0" scrolling="no" allowfullscreen="" style="border: 0px; display: block; width: 412px; height: 194px; margin-top: 0px !important;" width="412" height="194">&lt;/iframe>'],
          ['&lt;iframe width="100%" style="display: block !important; height:487px !important;" frameborder="0" scrolling="no" height="487">'],
          ['&lt;iframe class="ym-ad-choices" frameborder="0" scrolling="no" width="100%" height="16" style=" display: block !important; background: transparent !important; height: 16px !important;" srcdoc="&lt;style>'],
        ],
      },
    },
    {
      color: 'red', title: 'Form elements do not have associated labels',
      description: 'Labels ensure that form controls are announced properly by assistive technologies, like screen readers. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;input class="search-input__text" type="text" placeholder="Search CNN..." id="searchInputFooter" name="q">'],
        ],
      },
    },
    {
      color: 'red', title: 'Links do not have a discernible name',
      description: 'Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;a href="/" id="logo" class="nav__logo">&lt;/a>'],
          ['&lt;a class="m-footer__title__link" href="/politics" data-analytics="footer_politics">&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_politics.png" class="nav-menu__img-politics" style="width: 78.79px;" data-demand-load="loaded">&lt;/a>'],
          ['&lt;a class="m-footer__title__link" href="/health" data-analytics="footer_health">&lt;img src="//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/menu_health.png" class="nav-menu__img-health" style="width: 70px;" data-demand-load="loaded">&lt;/a>'],
          ['&lt;class="logo" href="/" data-analytics="edition-picker-logo">&lt;/a>'],
        ],
      },
    },
  ],
};

const data_accessibility_contrast = {
  caption: 'Contrast', caption_desc: 'These are opportunities to improve the legibility of your content.',
  audits: [
    {
      color: 'red', title: 'Background and foreground colors do not have a sufficient contrast ratio.',
      description: 'Low-contrast text is difficult or impossible for many users to read. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;span class="ob-unit ob-rec-source" data-type="Source">THE CITIZENRY&lt;/span>'],
          ['&lt;span class="copyright">'],
          ['&lt;a class="m-copyright__links" data-analytics="footer_turner-broadcasting-system-inc" href="http://www.turner.com" title="Turner Broadcasting System, Inc.">Turner&nbsp;Broadcasting&nbsp;System,&nbsp;Inc.&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_terms-of-use" href="/terms">Terms of Use&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_privacy-policy" href="/privacy">Privacy Policy&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_accessibility-cc" href="/accessibility">Accessibility &amp; CC&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_adchoices" href="#">AdChoices&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_about-us" href="/about">About us&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_cnn-studio-tours" href="//tours.cnn.com">CNN Studio Tours&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_cnn-store" href="//store.cnn.com">CNN Store&lt;/a>'],
          ['&lt;a class="m-legal__links" data-analytics="footer_newsletters" href="/newsletters">Newsletters&lt;/a>'],
        ],
      },
    },
  ],
};

const data_accessibility_bestpractices = {
  caption: 'Best practices', caption_desc: 'These items highlight common accessibility best practices.',
  audits: [
    {
      color: 'red', title: '[id] attributes on the page are not unique',
      description: 'The value of an id attribute must be unique to prevent other instances from being overlooked by assistive technologies. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;div id="gigyaShareBar_0-reaction0" class="gig-button-up" title="" alt="">'],
          ['&lt;div id="gigyaShareBar_1-reaction0" class="gig-button-up" title="" alt="">'],
          ['&lt;div id="gigyaShareBar_2-reaction0" class="gig-button-up" title="" alt="">'],
        ],
      },
    },
  ],
};

const data_accessibility_internationalizationandlocalization = {
  caption: 'Internationalization and localization', caption_desc: 'These are opportunities to improve the interpretation of your content by users in different locales.',
  audits: [
    {
      color: 'red', title: '&lt;html> element does not have a [lang] attribute',
      description: 'If a page doesn\'t specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn\'t actually in the default language, then the screen reader might not announce the page\'s text correctly. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;html class="js no-flash geolocation websockets localstorage webworkers touchevents fontface supports textshadow csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox csstransforms3d mobile phone no-tablet mobilegradea no-gdpr no-ios android no-iospre10 no-iemobile no-ieunsupported no-ie11unsupported no-ie no-edge" data-formfactor="mobile" style="">'],
        ],
      },
    },
  ],
};

const data_accessibility_tablesandlists = {
  caption: 'Tables and lists', caption_desc: 'These are opportunities to to improve the experience of reading tabular or list data using assistive technology, like a screen reader.',
  audits: [
    {
      color: 'red', title: 'Lists do not contain only <li> elements and script supporting elements (<script> and <template>).',
      description: 'Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. Learn more.',
      table: {
        header: ['Failing Elements'],
        items: [
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-2 cn-container_35DC1942-D3DF-7FE1-F688-C99E962F7CB1" data-layout="list-hierarchical-xs" data-vr-zone="home-top-col3">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-4 cn-container_22E9F464-EB7E-C538-E799-CA34429B1FB7" data-layout="list-hierarchical-xs">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-1 cn-container_2C59F041-665D-BE21-0170-A8211182E86F" data-layout="list-hierarchical-xs">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-3 cn-container_EF2EE969-E050-E82F-0481-C819290829EB" data-layout="list-hierarchical-xs">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-5 cn-container_38DFE7C3-7CAD-C585-D4A2-C98382BBA289" data-layout="list-hierarchical-xs">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-7 cn-container_577E9053-CB35-9A0D-B11D-616833D3CA0E" data-layout="list-hierarchical-xs">'],
          ['&lt;ul class="cn cn-list-hierarchical-xs cn--idx-9 cn-container_56C08895-8C64-6C5B-1859-C902E625979F" data-layout="list-hierarchical-xs">'],
        ],
      },
    },
  ],
};


const data_performance = [data_performance_opportunities, data_performance_diagnostics];
const data_accessibility = [data_accessibility_namesandlabels, data_accessibility_contrast, data_accessibility_bestpractices, data_accessibility_internationalizationandlocalization, data_accessibility_tablesandlists];
