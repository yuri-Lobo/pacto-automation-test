import { test, expect } from '@playwright/test';

test('Validação de termos de segurança UOL', async ({ page }) => {
  await page.goto('https://www.uol.com.br/empresa/politica-de-privacidade/');

  // Localiza elemento que contém "Última atualização"
  const lastUpdate = page.locator('text=/Última atualização/i');
  await expect(lastUpdate).toBeVisible();

  const text = await lastUpdate.textContent();
  console.log('Texto encontrado:', text);

  // Validar formato de data DD/MM/AAAA
  const regexData = /\d{2}\/\d{2}\/\d{4}/;
  expect(text).toMatch(regexData);
});
