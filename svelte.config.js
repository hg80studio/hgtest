import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    // Specify the adapter
    adapter: adapter(),
    // Specify the Node.js version
    target: '#adapter',
    // Optional: Set Node.js version
    vite: {
      ssr: {
        noExternal: ['svelte']
      }
    },
    // Optional: other kit configuration options
  },
  // Specify the Node.js version for the adapter
  adapter: {
    // Specify the Node.js version
    node: '16', // or '18'
  },
};

export default config;