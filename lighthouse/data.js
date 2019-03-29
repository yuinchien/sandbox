const data_performance_metrics = [
  {color: 'red', title: 'First Contentful Paint', time: '9.6', description: 'First Contentful Paint marks the time at which the first text or image is painted. Learn more.'},
  {color: 'red', title: 'Speed Index', time: '23.8', description: 'Speed Index shows how quickly the contents of a page are visibly populated. Learn more.'},
  {color: 'red', title: 'Time to Interactive', time: '24.0', description: 'Interactive marks the time at which the page is fully interactive. Learn more.'},
  {color: 'orange', title: 'First Meaningful Paint', time: '10.7', description:'First Meaningful Paint measures when the primary content of a page is visible. Learn more.'},
  {color: 'orange', title: 'First CPU Idle', time: '2.5', description: 'First CPU Idle marks the first time at which the page\'s main thread is quiet enough to handle input. Learn more.'},
  {color: 'green', title: 'Estimated Input Latency', time: '0.3', description:'The score above is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. Learn more.'},
];

const data_performance_opportunities = [
  {
    color: 'red', title: 'Preload key requests', time: '14.85',
    // warning: 'Warnings: A preload <link> was found for "https://www.cnn.com/.a/2.146.6/js/gigya-sharebar.min.js" but was not used by the browser. Check that you are using the `crossorigin` attribute properly.',
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
];

const data_performance_diagnostics = [
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
];
