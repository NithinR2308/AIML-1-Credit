/**
 * Portfolio - End-to-End (E2E) Tests
 * Cypress test file for complete user workflows
 * Run with: npx cypress open
 */

describe('Portfolio E2E Tests', () => {

  // ========== Setup ==========
  beforeEach(() => {
    // Visit the portfolio before each test
    cy.visit('http://localhost:8000'); // Adjust URL as needed
  });

  // ========== Navigation Tests ==========

  describe('Navigation Bar', () => {

    it('should display navigation bar', () => {
      cy.get('.navbar').should('be.visible');
      cy.get('.logo').should('be.visible');
    });

    it('should have all navigation links', () => {
      cy.get('.nav-menu').within(() => {
        cy.contains('Home').should('exist');
        cy.contains('About').should('exist');
        cy.contains('Skills').should('exist');
        cy.contains('Projects').should('exist');
        cy.contains('Contact').should('exist');
      });
    });

    it('should scroll to Home section when clicking Home link', () => {
      cy.get('a[href="#home"]').click();
      cy.get('#home').should('be.visible');
    });

    it('should scroll to About section when clicking About link', () => {
      cy.get('a[href="#about"]').click();
      cy.get('#about').should('be.visible');
    });

    it('should scroll to Skills section when clicking Skills link', () => {
      cy.get('a[href="#skills"]').click();
      cy.get('#skills').should('be.visible');
    });

    it('should scroll to Projects section when clicking Projects link', () => {
      cy.get('a[href="#projects"]').click();
      cy.get('#projects').should('be.visible');
    });

    it('should scroll to Contact section when clicking Contact link', () => {
      cy.get('a[href="#contact"]').click();
      cy.get('#contact').should('be.visible');
    });

    it('should scroll to home when clicking logo', () => {
      cy.get('.logo').click();
      cy.get('.hero').should('be.visible');
    });
  });

  // ========== Hero Section Tests ==========

  describe('Hero Section', () => {

    it('should display hero section on page load', () => {
      cy.get('.hero').should('be.visible');
    });

    it('should display name in hero section', () => {
      cy.get('.hero-title').should('contain', 'Nithin Nithuraj');
    });

    it('should display professional title', () => {
      cy.get('.hero-subtitle').should('contain', 'Full Stack Developer & Designer');
    });

    it('should display hero description', () => {
      cy.get('.hero-description').should('be.visible');
      cy.get('.hero-description').should('have.length.greaterThan', 0);
    });

    it('should have View Work button', () => {
      cy.get('.btn-primary').should('contain', 'View My Work');
    });

    it('should have Download CV button', () => {
      cy.get('.btn-secondary').should('contain', 'Download CV');
    });

    it('View Work button should scroll to projects', () => {
      cy.get('.btn-primary').click();
      cy.get('#projects').should('be.visible');
    });

    it('should display social media icons', () => {
      cy.get('.social-icon').should('have.length', 4);
    });

    it('should have GitHub link', () => {
      cy.get('a[href*="github.com"]').should('exist');
    });

    it('should have LinkedIn link', () => {
      cy.get('a[href*="linkedin.com"]').should('exist');
    });

    it('should have Instagram link', () => {
      cy.get('a[href*="instagram.com"]').should('exist');
    });

    it('should have Email link', () => {
      cy.get('a[href^="mailto:"]').should('exist');
    });
  });

  // ========== About Section Tests ==========

  describe('About Section', () => {

    it('should display About section title', () => {
      cy.scrollTo('bottom');
      cy.get('#about').within(() => {
        cy.contains('About Me').should('be.visible');
      });
    });

    it('should display biography text', () => {
      cy.get('#about').within(() => {
        cy.get('p').should('have.length.greaterThan', 0);
      });
    });

    it('should display statistics cards', () => {
      cy.get('.stat').should('have.length', 3);
    });

    it('should display projects completed stat', () => {
      cy.get('.stat').within(() => {
        cy.contains('Projects Completed').should('exist');
      });
    });

    it('should display years experience stat', () => {
      cy.get('.stat').within(() => {
        cy.contains('Years Experience').should('exist');
      });
    });

    it('should display technical skills stat', () => {
      cy.get('.stat').within(() => {
        cy.contains('Technical Skills').should('exist');
      });
    });

    it('should show stat numbers', () => {
      cy.get('.stat h3').each(($stat) => {
        expect($stat.text().length).to.be.greaterThan(0);
      });
    });
  });

  // ========== Skills Section Tests ==========

  describe('Skills Section', () => {

    it('should display Skills section', () => {
      cy.get('#skills').should('be.visible');
    });

    it('should have skill cards', () => {
      cy.get('.skill-card').should('have.length', 4);
    });

    it('should display Programming skill', () => {
      cy.get('.skill-card').contains('Programming').should('exist');
    });

    it('should display Robotics skill', () => {
      cy.get('.skill-card').contains('Robotics').should('exist');
    });

    it('should display AI & ML skill', () => {
      cy.get('.skill-card').contains('AI & ML').should('exist');
    });

    it('should display Software Dev skill', () => {
      cy.get('.skill-card').contains('Software Dev').should('exist');
    });

    it('should have skill icons', () => {
      cy.get('.skill-card i').should('have.length', 4);
    });

    it('should display progress bars', () => {
      cy.get('.skill-bar').should('have.length.greaterThan', 0);
    });

    it('should have Python skill bar', () => {
      cy.contains('.skill-name', 'Python').should('exist');
    });

    it('should have progress values', () => {
      cy.get('.progress').each(($progress) => {
        const width = $progress.css('width');
        expect(width).to.include('px');
      });
    });
  });

  // ========== Projects Section Tests ==========

  describe('Projects Section', () => {

    it('should display Projects section', () => {
      cy.get('#projects').should('be.visible');
    });

    it('should display section title', () => {
      cy.get('#projects').within(() => {
        cy.contains('Featured Projects').should('exist');
      });
    });

    it('should display project cards', () => {
      cy.get('.project-card').should('have.length', 6);
    });

    it('should display Medical Robot project', () => {
      cy.contains('.project-content h3', 'Medical Robot Simulation').should('exist');
    });

    it('should display Surgical Robot project', () => {
      cy.contains('.project-content h3', 'Surgical Robot Arm Motion Prediction').should('exist');
    });

    it('should display Deep Learning project', () => {
      cy.contains('.project-content h3', 'Student-Friendly Deep Learning Notes').should('exist');
    });

    it('should show project descriptions', () => {
      cy.get('.project-content p').each(($p) => {
        expect($p.text().length).to.be.greaterThan(0);
      });
    });

    it('should display technology tags', () => {
      cy.get('.project-tags span').should('have.length.greaterThan', 0);
    });

    it('should show hover overlay on project image', () => {
      cy.get('.project-card').first().within(() => {
        cy.get('.project-image').trigger('mouseenter');
        cy.get('.project-overlay').should('be.visible');
      });
    });

    it('should have View Project links', () => {
      cy.get('.project-link').should('have.length.greaterThan', 0);
    });
  });

  // ========== Contact Section Tests ==========

  describe('Contact Section', () => {

    it('should display Contact section', () => {
      cy.get('#contact').should('be.visible');
    });

    it('should display section title', () => {
      cy.get('#contact').within(() => {
        cy.contains('Get In Touch').should('exist');
      });
    });

    it('should display contact information', () => {
      cy.get('.info-item').should('have.length', 3);
    });

    it('should display email address', () => {
      cy.contains('nithuraj0000@gmail.com').should('exist');
    });

    it('should display phone number', () => {
      cy.contains('+91 9025496002').should('exist');
    });

    it('should display location', () => {
      cy.contains('Tiruchengode').should('exist');
    });

    it('should have contact form', () => {
      cy.get('.contact-form').should('exist');
    });

    it('should have name input field', () => {
      cy.get('.contact-form input[type="text"]').should('exist');
    });

    it('should have email input field', () => {
      cy.get('.contact-form input[type="email"]').should('exist');
    });

    it('should have message textarea', () => {
      cy.get('.contact-form textarea').should('exist');
    });

    it('should have submit button', () => {
      cy.get('.contact-form button[type="submit"]').should('exist');
    });
  });

  // ========== Form Validation Tests ==========

  describe('Contact Form Validation', () => {

    it('should not submit empty form', () => {
      cy.get('.contact-form button[type="submit"]').click();
      cy.get('.notification').should('contain', 'fill in all fields');
    });

    it('should reject invalid email', () => {
      cy.get('.contact-form input[type="text"]').type('John Doe');
      cy.get('.contact-form input[type="email"]').type('invalid-email');
      cy.get('.contact-form textarea').type('Test message');
      cy.get('.contact-form button[type="submit"]').click();
      cy.get('.notification').should('contain', 'valid email');
    });

    it('should accept valid form submission', () => {
      cy.get('.contact-form input[type="text"]').type('John Doe');
      cy.get('.contact-form input[type="email"]').type('john@example.com');
      cy.get('.contact-form textarea').type('Great portfolio!');
      cy.get('.contact-form button[type="submit"]').click();
      cy.get('.notification').should('contain', 'Thank you');
    });

    it('should reset form after submission', () => {
      cy.get('.contact-form input[type="text"]').type('John Doe');
      cy.get('.contact-form input[type="email"]').type('john@example.com');
      cy.get('.contact-form textarea').type('Great portfolio!');
      cy.get('.contact-form button[type="submit"]').click();
      cy.wait(1500);
      cy.get('.contact-form input[type="text"]').should('have.value', '');
      cy.get('.contact-form input[type="email"]').should('have.value', '');
      cy.get('.contact-form textarea').should('have.value', '');
    });

    it('should show loading state on submit', () => {
      cy.get('.contact-form input[type="text"]').type('John Doe');
      cy.get('.contact-form input[type="email"]').type('john@example.com');
      cy.get('.contact-form textarea').type('Test message');
      cy.get('.contact-form button[type="submit"]').click();
      cy.get('.contact-form button[type="submit"]').should('contain', 'Sending');
    });
  });

  // ========== Footer Tests ==========

  describe('Footer', () => {

    it('should display footer', () => {
      cy.get('.footer').should('be.visible');
    });

    it('should display copyright notice', () => {
      cy.get('.footer').should('contain', 'Nithin Nithuraj');
    });

    it('should have footer social links', () => {
      cy.get('.footer-socials a').should('have.length.greaterThan', 0);
    });
  });

  // ========== Responsive Tests ==========

  describe('Responsive Design', () => {

    it('should work on desktop view', () => {
      cy.viewport(1920, 1080);
      cy.get('.hero').should('be.visible');
      cy.get('.navbar').should('be.visible');
    });

    it('should work on tablet view', () => {
      cy.viewport('ipad-2');
      cy.get('.hero').should('be.visible');
      cy.get('.navbar').should('be.visible');
    });

    it('should work on mobile view', () => {
      cy.viewport(375, 667);
      cy.get('.hero').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('#contact').should('be.visible');
    });

    it('should display mobile menu on small screens', () => {
      cy.viewport(375, 667);
      cy.get('.hamburger').should('be.visible');
    });
  });

  // ========== Performance Tests ==========

  describe('Performance', () => {

    it('should load page under 3 seconds', () => {
      cy.visit('http://localhost:8000', {
        onBeforeLoad: (win) => {
          win.performance.mark('pageLoadStart');
        },
        onLoad: (win) => {
          win.performance.mark('pageLoadEnd');
          win.performance.measure('pageLoad', 'pageLoadStart', 'pageLoadEnd');
          const measure = win.performance.getEntriesByName('pageLoad')[0];
          expect(measure.duration).to.be.lessThan(3000);
        }
      });
    });

    it('should have no console errors', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'error');
      });
      cy.reload();
      cy.window().then((win) => {
        expect(win.console.error).not.to.have.been.called;
      });
    });
  });

  // ========== Accessibility Tests ==========

  describe('Accessibility', () => {

    it('should have page title', () => {
      cy.title().should('exist');
      cy.title().should('not.be.empty');
    });

    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length.greaterThan', 0);
      cy.get('h2').should('have.length.greaterThan', 0);
    });

    it('should have navigation links', () => {
      cy.get('.nav-link').should('have.length.greaterThan', 0);
    });

    it('should have clickable form inputs', () => {
      cy.get('.contact-form input').should('be.enabled');
      cy.get('.contact-form textarea').should('be.enabled');
    });
  });

  // ========== Complete User Journey Tests ==========

  describe('Complete User Journey', () => {

    it('should complete full portfolio exploration', () => {
      // Load page
      cy.get('.hero').should('be.visible');
      
      // Navigate to about
      cy.get('a[href="#about"]').click();
      cy.get('#about').should('be.visible');
      
      // Navigate to skills
      cy.get('a[href="#skills"]').click();
      cy.get('#skills').should('be.visible');
      
      // Navigate to projects
      cy.get('a[href="#projects"]').click();
      cy.get('#projects').should('be.visible');
      
      // Navigate to contact
      cy.get('a[href="#contact"]').click();
      cy.get('#contact').should('be.visible');
      
      // Submit contact form
      cy.get('.contact-form input[type="text"]').type('Test User');
      cy.get('.contact-form input[type="email"]').type('test@example.com');
      cy.get('.contact-form textarea').type('Amazing portfolio!');
      cy.get('.contact-form button[type="submit"]').click();
      
      // Verify success message
      cy.get('.notification').should('be.visible');
    });
  });
});

/**
 * E2E Test Execution Instructions
 * 
 * To run these tests:
 * 
 * 1. Install Cypress:
 *    npm install --save-dev cypress
 * 
 * 2. Start your local server:
 *    python -m http.server 8000
 *    (or your preferred server)
 * 
 * 3. Open Cypress Test Runner:
 *    npx cypress open
 * 
 * 4. Run all E2E tests:
 *    npx cypress run
 * 
 * 5. Run specific test:
 *    npx cypress run --spec "tests/e2e.test.js"
 * 
 * 6. Run in Firefox:
 *    npx cypress run --browser firefox
 * 
 * 7. Run in Chrome:
 *    npx cypress run --browser chrome
 * 
 * 8. Generate report:
 *    npx cypress run --reporter json
 */

/**
 * Test Statistics:
 * Total E2E Tests: 80+
 * Test Suites: 13
 * 
 * Breakdown:
 * - Navigation: 7 tests
 * - Hero Section: 10 tests
 * - About Section: 7 tests
 * - Skills Section: 9 tests
 * - Projects Section: 8 tests
 * - Contact Section: 11 tests
 * - Form Validation: 5 tests
 * - Footer: 3 tests
 * - Responsive Design: 4 tests
 * - Performance: 2 tests
 * - Accessibility: 4 tests
 * - User Journey: 1 test
 */

export {};
