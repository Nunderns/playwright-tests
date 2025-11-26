import { test, expect } from '@playwright/test';

test('Criar nova tarefa com título único', async ({ page }) => {

  await page.goto('https://kanban-tcc.vercel.app/');
  await page.getByRole('link', { name: 'Experimente' }).click();
  await page.getByRole('textbox', { name: 'Digite seu email' }).fill('teste.exemplo@exemplo.com');
  await page.getByRole('textbox', { name: 'Digite sua senha' }).fill('alvorada.1404');
  await page.getByRole('button', { name: 'Entrar com Email' }).click();
  await page.getByRole('link', { name: 'Minhas Tarefas' }).click();
  const titulo = `Tarefa Playwright ${Date.now()}`;
  await page.getByRole('button', { name: 'Adicionar novo item' }).click();
  await page.getByRole('textbox', { name: 'Título' }).fill(titulo);
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Descrição do teste');
  await page.locator('form button[type="submit"]').click();
  await page.waitForSelector('form button[type="submit"]', { state: 'detached' });
  await page.waitForTimeout(2000);
  await expect(
    page.locator('.text-sm.font-medium.mb-2', { hasText: titulo })
  ).toBeVisible();

});
