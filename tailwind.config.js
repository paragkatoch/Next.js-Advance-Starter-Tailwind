/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		screens: {
			sm: "390px",
			mds: "720px",
			md: "834px",
			lgs: "1080px",
			lg: "1440px",
			lgl: "1680px",
		},
		extend: {},
	},
	plugins: [],
};
