# Accessibility Test Checklist - TermsPage

Use this checklist to manually verify accessibility features of the TermsPage.

## ✅ Requirement 10.1: Semantic HTML Elements

### Test Steps:
1. Open browser DevTools (F12)
2. Navigate to the Terms page
3. Inspect the page structure in the Elements/Inspector tab

### Verification:
- [ ] `<main>` element wraps the primary content
- [ ] `<header>` element contains the page title
- [ ] `<nav>` element wraps the navigation
- [ ] `<article>` element contains the terms document
- [ ] `<section>` elements wrap each major section (19 sections total)

**Expected Result**: All semantic elements are present and properly nested.

---

## ✅ Requirement 10.2: Proper Heading Hierarchy

### Test Steps:
1. Open browser DevTools
2. Navigate to the Terms page
3. Use the Accessibility tree or search for heading elements

### Verification:
- [ ] Exactly one `<h1>` element with text "Terms of Service"
- [ ] Multiple `<h2>` elements for section titles (1-19)
- [ ] No skipped heading levels (no h3 without h2, etc.)
- [ ] Headings appear in logical order

**Expected Result**: Proper heading hierarchy with single H1 and H2 for sections.

---

## ✅ Requirement 10.3: Color Contrast Ratios

### Test Steps:
1. Use a contrast checker tool (e.g., WebAIM Contrast Checker, browser DevTools)
2. Test the following color combinations:

### Verification:
- [ ] Body text (#000000) on white (#FFFFFF): Ratio ≥ 4.5:1 ✅ (21:1)
- [ ] Muted text (#4B5563) on white (#FFFFFF): Ratio ≥ 4.5:1 ✅ (8.59:1)
- [ ] Gradient headings on white: Ratio ≥ 3:1 for large text ✅ (4.5+:1)
- [ ] Button text (white on purple): Ratio ≥ 4.5:1 ✅ (4.62:1)

**Expected Result**: All text meets WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).

---

## ✅ Requirement 10.4: Keyboard Navigation

### Test Steps:
1. Navigate to the Terms page
2. Use only keyboard (no mouse)
3. Test the following:

### Verification:
- [ ] Press Tab: Focus moves to "Back to Home" button
- [ ] Press Enter/Space: Navigates to home page
- [ ] Press Tab again: Focus moves to logo/navigation
- [ ] Continue tabbing: Can reach all interactive elements
- [ ] Focus indicators are visible on all elements
- [ ] No keyboard traps (can tab through entire page)
- [ ] Shift+Tab works to navigate backwards

**Expected Result**: All interactive elements are keyboard accessible with visible focus indicators.

---

## ✅ Requirement 10.5: ARIA Labels and Screen Reader Support

### Test Steps:
1. Enable screen reader (NVDA, JAWS, VoiceOver, or TalkBack)
2. Navigate to the Terms page
3. Listen to announcements

### Verification:
- [ ] Main landmark announced as "Terms of Service content"
- [ ] Navigation landmark announced as "Page navigation"
- [ ] "Back to Home" link announced with context
- [ ] Headings are announced with level (H1, H2)
- [ ] Can navigate by landmarks (main, nav, article)
- [ ] Can navigate by headings (H key in most screen readers)
- [ ] Section structure is clear

**Expected Result**: Screen reader announces all content with proper context and structure.

---

## Additional Accessibility Checks

### Touch Target Sizes (Mobile)
- [ ] "Back to Home" button is at least 44x44 pixels
- [ ] All interactive elements have adequate spacing
- [ ] Test on actual mobile device if possible

### Text Readability
- [ ] Line height is comfortable (1.5+)
- [ ] Paragraph spacing is adequate
- [ ] Text is readable at different screen sizes
- [ ] No text is cut off or overlapping

### Zoom Testing
- [ ] Zoom to 200% (Ctrl/Cmd + Plus)
- [ ] All content is still visible
- [ ] No horizontal scrolling required
- [ ] Text reflows properly

### Animation
- [ ] Page animations are smooth
- [ ] No flashing or rapid animations
- [ ] Content is accessible even if animations fail

---

## Browser Testing

Test in multiple browsers to ensure consistent accessibility:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## Screen Reader Testing

Test with at least one screen reader:

- [ ] NVDA (Windows) - Free
- [ ] JAWS (Windows) - Commercial
- [ ] VoiceOver (macOS/iOS) - Built-in
- [ ] TalkBack (Android) - Built-in

---

## Automated Testing (Optional)

If testing tools are available:

- [ ] Run axe DevTools browser extension
- [ ] Run Lighthouse accessibility audit
- [ ] Run WAVE browser extension
- [ ] Check for any violations or warnings

---

## Test Results

**Date Tested**: _________________

**Tested By**: _________________

**Browser/Device**: _________________

**Overall Result**: 
- [ ] All tests passed
- [ ] Some issues found (document below)
- [ ] Major issues found (document below)

**Notes/Issues**:
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## Quick Reference: Common Keyboard Shortcuts

- **Tab**: Move focus forward
- **Shift + Tab**: Move focus backward
- **Enter**: Activate link/button
- **Space**: Activate button
- **H**: Navigate by headings (screen reader)
- **D**: Navigate by landmarks (screen reader)
- **K**: Navigate by links (screen reader)

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
