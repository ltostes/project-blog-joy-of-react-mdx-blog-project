module.exports = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
  },
  async redirects() {
    return [
      {
        source: '/rss',
        destination: '/rss.xml',
        permanent: true, // Use true for 308 (permanent) or false for 307 (temporary)
      },
    ];
  },
};
