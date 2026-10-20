# KaizerBrix Consults — Responsive Layout Audit

**Audit date:** 20 October 2026  
**Production URL:** https://kaizerbrix.vercel.app/  
**Repository:** Immanuelchika099/kaizerbrix

## Scope and verification status

The deployed HTML and its current JavaScript/CSS assets were fetched through Vercel and returned HTTP 200. The deployed Film CSS still contains the earlier Vision/Mission absolute positioning and the older Quality Policy row grid, so the production deployment was behind the repository when inspected.

A Playwright/dev-server visual pass could not be run from the available environment: the container cannot resolve external hosts, and no remote browser/screenshot runner is available in this session. The table below is therefore a **source-and-deployed-bundle risk audit**, not a claim that screenshots or DOM bounding boxes were measured. No claim of zero overflow or zero unintended overlaps is made. Vercel deployment API subsequently returned HTTP 402, `api-deployments-free-per-day`, with a 24-hour retry window; the latest source changes are not confirmed live.

## Findings and fixes

| Section | Target viewport(s) | Problem / risk | Root cause in source or deployed bundle | Fix applied in source |
|---|---|---|---|---|
| Hero | 360×740, 390×844, 768×1024 | Large title and absolutely positioned photo compete for the same space on small screens; short laptop height has little vertical room | Multi-line oversized type, absolute image, pinned hero timeline and repeated viewport overrides | Tightened mobile type/spacing, constrained photo height and short-height desktop title sizing; preserved cinematic hero pin with reduced mobile distance |
| About | 360×740, 390×844, 768×1024, 1024×768 | Copy and image can feel cramped; paragraph lengths may stretch the scene | Desktop grid uses a large gap and image minimum height, with fixed top/bottom padding | Standardized section gutters, capped copy measure, stack image under text on mobile and give the image a stable 4:3 ratio |
| Vision / Mission | All mobile sizes; 1024×768, 1366×768 | Mission text and image compete in a cramped composition; content can exceed a single pinned viewport | Absolute Mission positioning and 2-column text/image grid within a pinned scene; live bundle still had the old CSS | Made desktop Vision/Mission two clear beats inside a viewport-sized stage; mobile now uses natural flow and stacks image below the mission statement |
| Expertise | 360×740, 390×844, 768×1024, 1024×768, 1366×768 | Desktop minimum column widths crowd tablet/short-laptop layouts; mobile selection did not truly switch the visible image because the timeline was desktop-only | Minimum grid tracks and a GSAP timeline that hid panels even when not pinned on mobile | Added responsive React selection state and synchronized desktop scroll choreography with the selected state; mobile panels switch on tap, short-height desktop spacing tightened |
| Statement | 360×740, 390×844, 768×1024, 1024×768 | Oversized display text can wrap into too many lines and scroll-linked scale can feel crowded | Large fluid heading and scale animation to 1.1 | Balanced heading wraps, constrained line length and removed forced scale from the mobile resting layout |
| Core Values | Mobile and tablet; 1024×768, 1366×768 | Desktop absolute rows can collide or appear blank if animation state is not active; mobile text was too small | All value rows share one absolute frame and depend on a long pinned timeline; body copy used sub-16px rem sizes | Kept one-at-a-time desktop storytelling; mobile rows are in normal flow with at least 16px body text; reduced-motion layout restores rows to normal flow |
| Projects | 360×740, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080 | Horizontal rail can feel cramped on short screens or extend the document width if the track math is wrong | 100vw project panels, max-content track and pinned desktop horizontal scroll | Preserved horizontal desktop gallery; constrained image ratios and panel gaps; mobile and reduced-motion layouts become vertical, full-width lists |
| Quality Policy | All mobile sizes; 1024×768, 1366×768 | Seven long commitment descriptions are squeezed by the number column and extra spacer column; live bundle has small 12px body copy | `80px 50px minmax(0,1fr)` row grid and `1.2rem` paragraphs under a 62.5% root font size | Replaced the cramped row with icon + copy, a two-column editorial grid on wide screens, one column on mobile, and 16px mobile body copy |
| HSE policy | 360×740, 390×844, 768×1024, 1024×768 | Copy can crowd the image, especially when mobile text is offset beneath a large image region | Desktop 45% text offset; mobile image band and 50% copy margin; clip-path reveal | Mobile image is now a separate 16:9 band above the text; desktop text is capped to a readable measure |
| Contact/footer | 360×740, 390×844, 768×1024, 1024×768 | Long email/address and multi-column footer can collide or overflow; large decorative mark competes with text | Four-column desktop footer and oversized positioned mark | Mobile footer uses a single column with robust wrapping and safe-area padding; tablet desktop footer becomes two columns |
| Shared navigation / anchors | All sizes | Fixed nav can cover anchored headings; menu and buttons need adequate touch size | Fixed navbar and no uniform anchor offset | Added anchor scroll margins and 44px+ navigation control targets; kept the menu fixed-position overlay outside root overflow clipping |
| External routes | 360×740, 390×844, 768×1024, 1024×768, 1366×768 | Some copy is below 16px on mobile, and short laptop height can waste vertical space | Multiple 12–15px mobile overrides, fixed padding and image heights | Normalized section gutters, body copy to 16px on mobile, image ratios and short-height desktop padding |
| Global overflow / reduced motion | All seven requested sizes | Horizontal overflow and mid-animation overlap cannot be confirmed without a rendered browser; absolute rows and hidden animation states risk content loss with reduced motion | Pinned scenes, transform/clip-path animation, max-content tracks and no browser measurements available | Added global horizontal clipping without clipping the fixed menu, safe wrapping, and reduced-motion rules restoring content to normal flow |

## Requested viewport matrix

| Viewport | Static source review | Playwright screenshot | Programmatic overflow/overlap measurement |
|---|---|---|---|
| 360×740 | Reviewed | Not run — browser runtime unavailable | Not run |
| 390×844 | Reviewed | Not run — browser runtime unavailable | Not run |
| 768×1024 | Reviewed | Not run — browser runtime unavailable | Not run |
| 1024×768 | Reviewed | Not run — browser runtime unavailable | Not run |
| 1366×768 | Reviewed | Not run — browser runtime unavailable | Not run |
| 1440×900 | Reviewed | Not run — browser runtime unavailable | Not run |
| 1920×1080 | Reviewed | Not run — browser runtime unavailable | Not run |

## Verification still required

1. After Vercel deployment limits clear, deploy the current main branch and confirm the production alias points to that commit.
2. Run Playwright full-page screenshots at each listed viewport, plus slow scroll sampling through pinned and transition states.
3. Measure `document.documentElement.scrollWidth > window.innerWidth`, then inspect element bounding boxes for unintended text/text and text/image intersections.
4. Repeat screenshots and measurements after fixes. Do not report zero overlaps or zero overflow until those checks actually pass.
