In `src/components/HeroSection.tsx`, change the hero CTA button:

- Replace the text `Book a Free Audit` with `Contact Me`.
- Convert the `<Button>` into a mailto link by rendering it as an anchor (`asChild` with an `<a href="mailto:dadalto.nicola@gmail.com">`), and remove the `onClick={handleGetStarted}` handler on this button.

The rest of the button styling (`glow-button-pulse`, sizing, rounded-full, hover animation) stays identical so the visual treatment is unchanged.

Note: I'll only touch this hero CTA. Other "Book a Free Audit" buttons elsewhere on the site (nav, CTA section, etc.) stay as they are unless you want those updated too.