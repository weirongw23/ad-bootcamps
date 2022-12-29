// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/okaidia");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Atlas Digital Bootcamps",
	tagline: "v0.0",

	// TODO: Fix URL for deployment
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// Internationalization
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Change this for "edit this page" links.
					editUrl:
						"https://github.com/weirongw23/ad-bootcamps/tree/main",
				},
				blog: {
					showReadingTime: true,
					// Change this for "edit this page" links.
					editUrl:
						"https://github.com/weirongw23/ad-bootcamps/tree/main",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "AD Bootcamps",
				logo: {
					alt: "My Site Logo",
					src: "img/favicon.ico",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/weirongw23/ad-bootcamps",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
							{
								label: "Blog",
								to: "/blog",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "About Us",
								href: "https://atlasdigital.org/",
							},
							{
								label: "Instagram",
								href: "https://www.instagram.com/atlasdigital_um/",
							},
							{
								label: "Github",
								href: "https://github.com/atlas-digital-um",
							},
						],
					},
					{
						title: "Contact",
						items: [
							{
								label: "Email",
								href: "mailto:atlasdigitalum@gmail.com",
							},
							{
								label: "Client Interest Form",
								href: "https://docs.google.com/forms/d/e/1FAIpQLSfNJXvbv7DkYO2upOAVmDQ4nehgf-WpuRgOEnzFKO8rOMgpPA/viewform",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Atlas Digital. Built with Docusaurus ❤️.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
