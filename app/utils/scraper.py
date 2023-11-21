import requests
from bs4 import BeautifulSoup


def scrape_recipe(url):
    print("scraper url", url)
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0",
    }
    page = requests.get(url, headers=headers)
    soup = BeautifulSoup(page.content, "html.parser")

    headings = ["h1", "h2", "h3", "h4", "h5", "h6"]

    ingredients_headings = soup.find_all(lambda tag: tag.name in headings and "Ingredients" in tag.get_text())
    ingredients_heading = (
        ingredients_headings[0]
        if len(ingredients_headings) == 1
        else min(ingredients_headings, key=lambda tag: tag.string)
    )
    ingredients_section = ingredients_heading.parent
    ingredients = []
    for child in ingredients_section:
        if child.string == "Ingredients":
            pass
        else:
            ingredient_list = child.get_text()
            ingredients.append(ingredient_list)
            print(ingredients)
