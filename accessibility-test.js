// Accessibility test script using axe-core
import AxePuppeteer from '@axe-core/puppeteer';
import puppeteer from 'puppeteer';

async function testAccessibility() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
      console.log('Testing homepage accessibility...');
    await page.goto('http://localhost:4325/', { waitUntil: 'networkidle2' });
      // Wait for dynamic content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const results = await new AxePuppeteer(page).analyze();
    
    console.log('\n=== ACCESSIBILITY VIOLATIONS ===');
    if (results.violations.length === 0) {
      console.log('✅ No accessibility violations found!');
    } else {
      results.violations.forEach((violation, index) => {
        console.log(`\n${index + 1}. ${violation.id}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Description: ${violation.description}`);
        console.log(`   Help: ${violation.help}`);
        console.log(`   Nodes affected: ${violation.nodes.length}`);
        
        violation.nodes.forEach((node, nodeIndex) => {
          console.log(`   Node ${nodeIndex + 1}: ${node.target}`);
          if (node.failureSummary) {
            console.log(`   Issue: ${node.failureSummary}`);
          }
        });
      });
    }
    
    console.log(`\n=== SUMMARY ===`);
    console.log(`Total violations: ${results.violations.length}`);
    console.log(`Passes: ${results.passes.length}`);
    console.log(`Incomplete: ${results.incomplete.length}`);
    console.log(`Inapplicable: ${results.inapplicable.length}`);
    
    await browser.close();
  } catch (error) {
    console.error('Error running accessibility test:', error);
  }
}

testAccessibility();
