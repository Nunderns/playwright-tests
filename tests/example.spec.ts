import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kanban-tcc.vercel.app/');
  await page.getByRole('link', { name: 'Experimente' }).click();
  await page.getByRole('textbox', { name: 'Digite seu email' }).click();
  await page.getByRole('textbox', { name: 'Digite seu email' }).fill('teste.exemplo@exemplo.com');
  await page.getByRole('textbox', { name: 'Digite seu email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Digite sua senha' }).fill('alvorada.1404');
  await page.getByRole('button', { name: 'Entrar com Email' }).click();
  await page.locator('div').filter({ hasText: 'Espaço de trabalho do Conta' }).nth(4).click();
  await page.getByRole('button', { name: 'Sair' }).click();
  await page.waitForURL('https://kanban-tcc.vercel.app/', { timeout: 10000 });
  await page.getByRole('link', { name: 'TaskFlow' }).click();
});