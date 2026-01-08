const nextConfig = {
  output: 'export',
  basePath: '/Kavi-ya',
  assetPrefix: '/Kavi-ya',
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  // Target modern browsers - reduces legacy JavaScript
  experimental: {
    esmExternals: true,
  },
  // This forces Next.js to compile these packages from source,
  // fixing the import errors for 'webgpu' and 'tsl'
  transpilePackages: ['three-globe', 'react-globe.gl', 'three-render-objects', 'three'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    // Disable polyfills for Node.js modules that aren't needed
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'events': false,
      'stream': false,
      'util': false,
      'zlib': false,
    };
    return config;
  },
};

export default nextConfig;