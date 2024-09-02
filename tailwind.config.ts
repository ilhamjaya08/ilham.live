
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'suse': ['SUSE', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace'],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
