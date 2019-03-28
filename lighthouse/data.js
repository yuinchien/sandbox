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
    warning: 'Warnings: A preload <link> was found for "https://www.cnn.com/.a/2.146.6/js/gigya-sharebar.min.js" but was not used by the browser. Check that you are using the `crossorigin` attribute properly.',
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
    description: 'Consider using <span class="code">&lt;link rel=preload></span> to prioritize fetching resources that are currently requested later in page load. Learn more.',
    table: {
      header: ['Opportunity', 'Estimated Savings'],
      items: [
        ['…2.130.0/wp-video.css', '14.8 s'],
        ['…2.130.0/wp-video.css', '14.8 s'],
        ['…2.130.0/wp-video.css', '14.8 s'],
        ['…2.130.0/wp-video.css', '14.8 s'],
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
  // {
  //   color: 'orange', title: 'Defer offscreen images', time: '4.31',
  //   description: 'Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. Learn more.',
  //   table: {
  //     header: ['Image','','Size', 'Potential Savings'],
  //     items: [
  //       ['https://cdn.cnn.com/cnnnext/dam/assets/151223171030-disneyland-file-large-tease.jpg', 'cdn.cnn.com', '59 KB', '59 KB'],
  //       ['https://cdn.cnn.com/cnnnext/dam/assets/151223171030-disneyland-file-large-tease.jpg', 'cdn.cnn.com', '59 KB', '59 KB'],
  //       ['https://cdn.cnn.com/cnnnext/dam/assets/151223171030-disneyland-file-large-tease.jpg', 'cdn.cnn.com', '59 KB', '59 KB'],
  //     ],
  //   },
  // },
  // {
  //   color: 'green', title: 'Efficiently encode imagess', time: '0.16',
  //   description: 'Consider using <span class="code">&lt;link rel=preload></span> to prioritize fetching resources that are currently requested later in page load. Learn more.',
  //   table: {
  //     header: ['Opportunity', 'Estimated Savings'],
  //     items: [
  //       ['…2.130.0/wp-video.css', '14.8 s'],
  //       ['…2.130.0/wp-video.css', '14.8 s'],
  //       ['…2.130.0/wp-video.css', '14.8 s'],
  //       ['…2.130.0/wp-video.css', '14.8 s'],
  //     ],
  //   },
  // },
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
];


// <div class="audit red">
//   <div class="row">
//     <div class="title">Serve Static assets with an efficient cache policy <span class="red">&mdash;136 resrouces found</span></div>
//     <i class="material-icons">keyboard_arrow_down</i>
//   </div>
//   <div class="expandable"></div>
// </div>
// <div class="audit red">
//   <div class="row">
//     <div class="title">Avoid an excessive DOM size <span class="red">&mdash;3,531 nodes</span></div>
//     <i class="material-icons">keyboard_arrow_down</i>
//   </div>
//   <div class="expandable"></div>
// </div>
// <div class="audit red">
//   <div class="row">
//     <div class="title">Avoid enormous network payloads <span class="red">&mdash;Total size was 5,029 KB</span></div>
//     <i class="material-icons">keyboard_arrow_down</i>
//   </div>
//   <div class="expandable"></div>
// </div>
// <div class="audit gray">
//   <div class="row">
//     <div class="title">Avoid enormous network payloads <span class="gray">&mdash;Total size was 5,029 KB</span></div>
//     <i class="material-icons">keyboard_arrow_down</i>
//   </div>
//   <div class="expandable"></div>
// </div>
// <div class="audit gray">
//   <div class="row">
//     <div class="title">Avoid enormous network payloads <span class="gray">&mdash;Total size was 5,029 KB</span></div>
//     <i class="material-icons">keyboard_arrow_down</i>
//   </div>
//   <div class="expandable"></div>
// </div>
