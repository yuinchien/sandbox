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
    color: 'orange', title: 'Defer unused CSS', time: '0.31',
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
    color: 'green', title: 'Efficiently encode imagess', time: '0.16',
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
];
