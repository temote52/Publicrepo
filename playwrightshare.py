import re
from playwright.sync_api import Playwright, sync_playwright, expect

with sync_playwright() as playwright:
    browser = playwright.firefox.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://admin.zscalerthree.net/")
