import { test, expect } from '@playwright/test';

test('Mover tarefa Playwright no fluxo correto', async ({ page }) => {
  await page.goto('https://kanban-tcc.vercel.app/');
  await page.getByRole('link', { name: 'Experimente' }).click();
  await page.getByRole('textbox', { name: 'Digite seu email' }).fill('teste.exemplo@exemplo.com');
  await page.getByRole('textbox', { name: 'Digite sua senha' }).fill('alvorada.1404');
  await page.getByRole('button', { name: 'Entrar com Email' }).click();
  await page.waitForURL('**/post-login', { timeout: 15000 });
  await page.waitForURL('**/conta-teste', { timeout: 15000 });
  await page.getByRole('link', { name: 'Minhas Tarefas' }).click();
  const ultimoCard = page.locator('[role="button"]', { hasText: 'Tarefa Playwright' }).last();
  await ultimoCard.click();
  await page.getByRole('combobox').first().selectOption('IN_PROGRESS');
  await page.getByRole('button', { name: 'Salvar alterações' }).click();
  await page.waitForTimeout(1000);
  await ultimoCard.click();
  await page.getByRole('combobox').first().selectOption('BACKLOG');
  await page.getByRole('button', { name: 'Salvar alterações' }).click();

});
