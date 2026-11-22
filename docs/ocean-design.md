# LumaHacks ocean edition

The supplied moodboards define the colors: midnight navy `#0b1b40`, aqua
`#a8faf5`, teal `#65c4c7`, blush `#fce3fa`, orchid `#e394da`, and coral `#ed8d2d`.
The Krillion reference informs the sense of descending deeper on scroll; its
branding, assets, gameplay, and page composition are not reused. Official SASE
logo assets come from the original chapter website and are not redrawn.

The homepage transitions through progressively darker ocean backgrounds. A
decorative underwater illustration, layered god rays, plankton and caustics add
depth. Parallax writes transform variables in requestAnimationFrame without
React updates; scrolling stays native. Offscreen hero updates stop, mobile uses
fewer effects, and reduced-motion disables animation and parallax. Section
reveals progressively enhance content that is visible without JavaScript.

DM Sans is used for copy and controls; Cormorant Garamond is used for large
headings. Fonts are self-hosted by Next.js. Main text colors have at least 5.5:1
contrast against their intended flat surfaces. The hero also has a dark scrim
behind the text, and focus outlines remain visible against dark surfaces.

## Original artwork

Asset: `public/art/bioluminescent-ocean.png`. Generated with the built-in image
generation tool, then copied into the repository. The SASE logos remain original
chapter assets in `public/brand`.

Generation prompt:

> Original premium website hero artwork for a student hackathon with an ocean
> bioluminescence theme. Wide landscape underwater scene, no text, letters,
> logos, or watermark. Deep midnight navy ocean with luminous aqua and sky-blue
> sunlight from the surface. A translucent glowing jellyfish in the upper right,
> flowing tentacles through the right half; a small warm coral sea slug near the
> lower right. Fine plankton, subtle caustics and grain, photographic illustration,
> restrained bloom. Subjects and light in the right 55%; quiet dark negative
> space in the left 45% for real HTML text. Edge-to-edge 16:9 ocean; no UI or people.
