source visual truth path: /var/folders/7r/3t115g1j75nd2wdtq7flgrx80000gn/T/codex-clipboard-0ac90631-1fd0-446b-9329-d92071881ca7.png
implementation screenshot path: /Users/lengzhe/Documents/New project/igem-wiki-preview/output/playwright/homepage-hero-fixed.png
viewport: 1280x720
state: homepage hero, desktop, default navigation closed
full-view comparison evidence: compared the user-provided collapsed hero screenshot against the refreshed local homepage screenshot at the same desktop-style above-the-fold state.
focused region comparison evidence: focused on the hero title block, subtitle wrapping, left vertical rail, and bouquet image crop because the reported failure was isolated to the above-the-fold hero region.

**Findings**
- [P1] Hero copy column was too narrow and allowed the headline to collapse into four lines
  Location: homepage hero, `/Users/lengzhe/Documents/New project/igem-wiki-preview/src/style.css`.
  Evidence: source intent shows a stable two-line title block; implementation had “Extending Life Beyond Harvest” wrapping into a stacked four-line block.
  Impact: the first-screen hierarchy broke and the hero no longer matched the selected design.
  Fix: changed the hero grid to use a fixed-width copy column, increased the copy max width, and prevented intraline wrapping on the display heading.

- [P1] Bouquet asset included a stray letter from the original screenshot crop
  Location: homepage hero image, `/Users/lengzhe/Documents/New project/igem-wiki-preview/src/assets/home-2026/hero-bouquet.png`.
  Evidence: implementation showed a dark “t” artifact between the text block and bouquet image.
  Impact: the artifact made the page look visibly broken.
  Fix: recropped the bouquet image to remove the captured text artifact and reloaded the page.

- [P2] Subtitle wrapped too aggressively and read like a narrow mobile column on desktop
  Location: homepage hero subtitle, `/Users/lengzhe/Documents/New project/igem-wiki-preview/src/style.css`.
  Evidence: implementation subtitle broke into many short lines, while the chosen reference keeps it in a calmer multi-line paragraph.
  Impact: reduced readability and made the typography feel unstable.
  Fix: widened the subtitle measure and reduced the desktop subtitle size range.

**Open Questions**
- The current QA pass is scoped to the hero region because that is what the user reported. Lower sections of the homepage were not re-reviewed in this pass.

**Implementation Checklist**
- Keep the hero grid on a fixed desktop ratio instead of letting the text column shrink under the bouquet image.
- Keep the display heading on two intended lines only.
- Keep source-cropped hero imagery free of screenshot text artifacts.
- Keep the subtitle at a readable desktop measure.

**Follow-up Polish**
- Recheck the full homepage against the reference image section by section after the hero correction is accepted.
- Normalize the exact subtitle line breaks against the final target viewport if the user wants pixel-closer matching.

comparison history:
- Iteration 1: implementation showed a collapsed four-line title, a stray “t” artifact inside the hero image area, and overly narrow subtitle wrapping.
- Fixes made: updated hero grid tracks, heading wrap behavior, subtitle measure and size, and recropped the bouquet image.
- Post-fix visual evidence: `/Users/lengzhe/Documents/New project/igem-wiki-preview/output/playwright/homepage-hero-fixed.png`

final result: passed
