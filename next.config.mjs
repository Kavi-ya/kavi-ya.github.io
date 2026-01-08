const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This forces Next.js to compile these packages from source,
  // fixing the import errors for 'webgpu' and 'tsl'
  transpilePackages: ['three-globe', 'react-globe.gl', 'three-render-objects', 'three'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

export default nextConfig;