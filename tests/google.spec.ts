import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';


const searchTerms: string[] = ["Playwright", "Selenium", "Cypress"];


for (const term of searchTerms) {
  
  
  test(`should search for ${term} and verify title`, async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    
    
    await homePage.search(term);
    
    
    await expect(page).toHaveTitle(new RegExp(term, 'i')); 
  });
}