import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchButton: Locator;
    readonly searchInput: Locator;


    constructor(page: Page) {
        this.page = page;
        // تحديث هذا السطر بناءً على ما وجدناه في Codegen
        this.searchInput = page.getByRole('combobox', { name: 'بحث' }); 
        
        // زر البحث غالباً سيعمل، لكن تأكد من اسمه أيضاً إذا لزم الأمر
        this.searchButton = page.getByRole('button', { name: 'بحث Google' }).first();
    }

    async goto() {
        await this.page.goto('https://www.google.com/');
    }

    async search(text: string) {
        await this.searchInput.fill(text);
        //await this.searchButton.click();
        await this.searchInput.press('Enter');
    }
}