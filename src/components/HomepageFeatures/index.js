import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Comprehensive Tutorials",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Bootcamps are built from the ground up to give you the
				intuition, tools, and workflow to succeed. As of v0.0, we walk
				through Git, scripting, and full-stack development.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				There is an endless list of technologies and more are coming
				every day. Focus on the core development stack to drive the most
				result.
			</>
		),
	},
	{
		title: "Hands-On Learning",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				Bootcamps are written three ways: videos, walkthroughs, and
				hands-on code editing. You won't just be told what to do; you
				will apply it and can teach it to others by the end.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
