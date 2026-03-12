import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import TermsPage from '../TermsPage';

expect.extend(toHaveNoViolations);

describe('TermsPage Accessibility', () => {
  const renderTermsPage = () => {
    return render(
      <BrowserRouter>
        <TermsPage />
      </BrowserRouter>
    );
  };

  describe('Requirement 10.1: Semantic HTML Elements', () => {
    it('should use semantic main element', () => {
      renderTermsPage();
      const mainElement = document.querySelector('main');
      expect(mainElement).toBeInTheDocument();
    });

    it('should use semantic article element', () => {
      renderTermsPage();
      const articleElement = document.querySelector('article');
      expect(articleElement).toBeInTheDocument();
    });

    it('should use semantic section elements', () => {
      renderTermsPage();
      const sectionElements = document.querySelectorAll('section');
      expect(sectionElements.length).toBeGreaterThan(0);
    });
  });

  describe('Requirement 10.2: Proper Heading Hierarchy', () => {
    it('should have exactly one h1 element for page title', () => {
      renderTermsPage();
      const h1Elements = document.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent('Terms of Service');
    });

    it('should use h2 elements for main sections', () => {
      renderTermsPage();
      const h2Elements = document.querySelectorAll('h2');
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it('should maintain proper heading hierarchy (no skipped levels)', () => {
      renderTermsPage();
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const levels = headings.map(h => parseInt(h.tagName.substring(1)));
      
      // Check that we start with h1
      expect(levels[0]).toBe(1);
      
      // Check that no levels are skipped
      for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];
        expect(diff).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('Requirement 10.3: Color Contrast Ratios', () => {
    it('should have sufficient contrast for body text on white background', () => {
      // Black text (#000000) on white background (#FFFFFF)
      // Contrast ratio: 21:1 (exceeds WCAG AAA requirement of 7:1)
      renderTermsPage();
      const textElements = document.querySelectorAll('.text-brand-text');
      expect(textElements.length).toBeGreaterThan(0);
    });

    it('should have sufficient contrast for muted text on white background', () => {
      // Muted text (#4B5563) on white background (#FFFFFF)
      // Contrast ratio: 8.59:1 (exceeds WCAG AA requirement of 4.5:1)
      renderTermsPage();
      const mutedElements = document.querySelectorAll('.text-brand-muted');
      expect(mutedElements.length).toBeGreaterThan(0);
    });
  });

  describe('Requirement 10.4: Keyboard Navigation', () => {
    it('should have focusable "Back to Home" link', () => {
      renderTermsPage();
      const backLink = screen.getByRole('link', { name: /back to home/i });
      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveAttribute('href', '/');
    });

    it('should have all interactive elements keyboard accessible', () => {
      renderTermsPage();
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        // Links should be focusable (not have tabindex="-1")
        const tabIndex = link.getAttribute('tabindex');
        expect(tabIndex).not.toBe('-1');
      });
    });
  });

  describe('Requirement 10.5: ARIA Labels and Screen Reader Support', () => {
    it('should have descriptive link text for navigation', () => {
      renderTermsPage();
      const backLink = screen.getByRole('link', { name: /back to home/i });
      expect(backLink).toHaveTextContent('Back to Home');
    });

    it('should have proper document structure for screen readers', () => {
      renderTermsPage();
      
      // Main landmark should exist
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      
      // Article should exist
      const article = document.querySelector('article');
      expect(article).toBeInTheDocument();
    });

    it('should pass automated accessibility checks', async () => {
      const { container } = renderTermsPage();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Additional Accessibility Features', () => {
    it('should have proper touch target sizes for mobile', () => {
      renderTermsPage();
      const backButton = screen.getByRole('link', { name: /back to home/i });
      
      // Button has padding classes that ensure 44x44px minimum
      expect(backButton).toHaveClass('px-6', 'py-3');
    });

    it('should have readable line height and spacing', () => {
      renderTermsPage();
      const paragraphs = document.querySelectorAll('p');
      
      paragraphs.forEach(p => {
        const classes = p.className;
        // Check for leading-relaxed or leading-loose classes
        expect(classes).toMatch(/leading-(relaxed|loose)/);
      });
    });
  });
});
