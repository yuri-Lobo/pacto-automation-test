import { test, expect } from '@playwright/test';

test.describe('Validação de busca no Yahoo', () => {
  test('Deve buscar por "Pacto Soluções" e exibir resultados relevantes', async ({ page }) => {
    await page.goto('https://br.search.yahoo.com/');

    const searchInput = page.locator('input[name="p"]');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('Pacto Soluções');
    await page.keyboard.press('Enter');

    // Valida URL com o termo
    await expect(page).toHaveURL(/Pacto\+Soluções/);

    // Valida se existem resultados
    const results = page.locator('#web > ol > li');
    await expect(results).toHaveCountGreaterThan(0);

    // Confirma que aparece "Pacto" nos resultados
    await expect(page.locator('#web')).toContainText('Pacto');
  });
});
