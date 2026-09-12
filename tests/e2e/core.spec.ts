import { test, expect } from "@playwright/test";

test("首页导航到资源目录", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /让每一次尝试/ })).toBeVisible();
  await page.getByRole("link", { name: "开始探索" }).click();
  await expect(page).toHaveURL(/\/explore$/);
  await expect(page.getByRole("heading", { name: "找到下一步。" })).toBeVisible();
});

test("资源搜索与空状态", async ({ page }) => {
  await page.goto("/explore");
  const search = page.getByRole("textbox", { name: "搜索资源" });
  await search.fill("模板");
  await expect(page.locator(".resource").first()).toBeVisible();
  await search.fill("不存在的资源");
  await expect(page.getByText("没有匹配内容")).toBeVisible();
});

test("帮助详情可进入并返回", async ({ page }) => {
  await page.goto("/help");
  await page.getByRole("link").filter({ hasText: "账号安全" }).click();
  await expect(page).toHaveURL(/\/help\//);
  await expect(page.getByRole("heading", { name: "账号安全" })).toBeVisible();
  await page.getByRole("link", { name: /返回帮助中心/ }).click();
  await expect(page).toHaveURL(/\/help$/);
});

test("咨询请求提交保持本地演示状态", async ({ page }) => {
  await page.goto("/requests");
  await page.getByLabel("称呼").fill("测试用户");
  await page.getByLabel("你希望解决的问题").fill("测试咨询，不发送外部请求");
  await page.getByRole("button", { name: "提交咨询意向" }).click();
  await expect(page.getByText(/请求已记录在本地演示状态/)).toBeVisible();
});

test("未知路径显示 404", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "这页还没有准备好。" })).toBeVisible();
});

test("移动视口无横向溢出", async ({ browser }) => {
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});

test("关键视口截图", async ({ page }) => {
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
  }
});
