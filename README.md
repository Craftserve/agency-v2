
# Documentation
- Project is created in `astro` framework.
- Project is based on Typescript mixed with Javascript language.
- All the project components files are created in `.astro` format.
- Project uses `i18n` for easy translations.

# Running project in dev mode
Run commands to setup project:
`npm install`
`npm run dev`

Project should be stationed on `localhost` on `:4321` port.

# Project file tree
```
agency-v2
	node_modules
	public
		static
			locales
				de.json // German translation ( not implemented )
				en.json // English translations
				pl.json // Polish translations
	src
		assets // All of the project static images directory
			...
		components // Multi-use components directory
			... 
		i18n // Functionalities of i18n mechanic directory
			ui.ts // Simple variables for language definition
			utils.ts // Functions for i18n mechanics
		layouts // Predefined components for layouts and site content directory
			Content.astro // Predefined main page content for all language based views
			Layout.astro // Predefined layout for every view
		pages // Astro views for given langauage directory ( default polish language )
			en // Site content for english view directory
				about.astro // About view
				index.astro // Main view
			about.astro // About view in Polish
			index.astro // Main view in Polish
		scripts // Helper modules for site functionality directory
			api.ts // API requests file
			helpers.ts // Helper functions
			NavbarScripts.js // Navbar functions
		sections // Site sections directory
			...
		global.css // All of the site predefined colors and css
		types.ts // All of the site types in one file
	i18next-parser.config.js // Config for i18n parser
```
# i18n parser mechanic
i18n `.json` files can be found in `public/static/locales/` directory.
Each file represents specific language which contains translations for every sentence/word.
## i18n parser run mechanic
Firstly, run `npm run i18n` in your console.
The parser checks every file for defined translations, then it adds them to language `.json` files with every value  set to `__NOT_TRANSLATED__` by default.

## Use case for translations defined in custom tags

```ts
---
import { getLangFromUrl, useTranslations } from  "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<CustomTag>
	<!-- t("Object.key") -->
	<p>{t("Object.key")}</p>
</CustomTag>
```
If you put translation in custom tag, then the `i18next-parser` won't see it. You need to put translation function inside comment, preferably above the tag you are using it in.

## English example

```json
{
	"ExampleTranslationsHeader": {
		"ExampleTitle": "Translation"
	},
	"ExampleTranslationsObjectForSpecificContentList": {
		"ExampleTitle": "Translation",
		"ExampleDescription": "Translation"
	}
}
```

## Polish example

```json
{
	"ExampleTranslationsHeader": {
		"ExampleTitle": "Tłumaczenie"
	},
	"ExampleTranslationsObjectForSpecificContentList": {
		"ExampleTitle": "Tłumaczenie",
		"ExampleDescription": "Tłumaczenie"
	}
}
```
The name of given object and key of translation stay in the same langauge, in this case english.
Only the translations should always refer to given language.

## Use case for i18n in server-side rendering

```ts
---
import { getLangFromUrl, useTranslations } from  "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<div>
	<p>{t("Object.key")}</p>
</div>
```

## Use case for i18n in client-side rendering

```html
---
---

<div>
	<p id="paragraph"></p>
</div>

<script>
	import { getLangFromUrl, useTranslations } from  "../i18n/utils";

	const lang = getLangFromUrl(new URL(window.location.href));
	const t = useTranslations(lang);

	const paragraph = document.querySelector("#paragraph");
	paragraph.innerText = t("Object.key");
</script>
```

The use case for server-side and client-side differs.
Variable `lang` that is assigned to `getLandFromUrl` gets different prop.

Argument `Astro.url` only works on server-side.
So in client-side you need to use `new URL(window.location.href)` to get language from url.

# All of the project used dependencies

### Icons
Icons are used thru `<Icon />` tag.
Icons libraries used in project are: 

`uil` ( Unicons ), 
`tabler` ( Tabler Icons ),

### Carousel library

Carousel component is based on `embla-carousel`.
Component is using plugin `Autoscroll` defined by `embla-carousel`.

